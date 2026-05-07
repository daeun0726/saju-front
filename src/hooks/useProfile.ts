import { useState, useEffect } from 'react'
import type { SajuProfile } from '../types/profile'
import { mapApiToProfile } from '../utils/mapApiToProfile'

type ProfileState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; profile: SajuProfile }

export function useProfile(id: string | undefined): ProfileState {
  const [state, setState] = useState<ProfileState>({ status: 'loading' })

  useEffect(() => {
    if (!id) {
      setState({ status: 'error', message: '유효하지 않은 프로필 링크예요.' })
      return
    }

    let cancelled = false
    setState({ status: 'loading' })

    const url = `${import.meta.env.VITE_SCRIPT_URL}?id=${encodeURIComponent(id)}`

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`서버 오류 (${res.status})`)
        return res.json()
      })
      .then((raw: Record<string, string>) => {
        if (cancelled) return
        if (!raw['사주결과']) {
          throw new Error('프로필 데이터를 찾을 수 없어요.')
        }
        const profile = mapApiToProfile(raw, id)
        setState({ status: 'success', profile })
      })
      .catch((err: unknown) => {
        if (cancelled) return
        const message = err instanceof Error ? err.message : '데이터를 불러오지 못했어요.'
        setState({ status: 'error', message })
      })

    return () => {
      cancelled = true
    }
  }, [id])

  return state
}
