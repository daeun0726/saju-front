import type { SajuProfile, Ohaeng } from '../types/profile'
import type { Manseryeok, SajuResult, CompatResult, OtherParticipant } from '../types/api'
import { parsePillar } from './pillars'

function join(arr: string[]): string {
  return arr.join(' ')
}

function normalizeKeys(raw: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(raw).map(([k, v]) => [k.trim(), v]))
}

const OHAENG_LIST: Ohaeng[] = ['목', '화', '토', '금', '수']
function parseOhaeng(value: string): Ohaeng {
  return OHAENG_LIST.find((o) => value.includes(o)) ?? '목'
}

function toPhotoUrl(url: string | undefined): string | undefined {
  return url || undefined
}

export function mapApiToProfile(raw: Record<string, string>, id: string): SajuProfile {
  const r = normalizeKeys(raw)

  const sajuResult: SajuResult = JSON.parse(r['사주결과'])
  const manseryeok: Manseryeok = JSON.parse(r['만세력raw'])

  let compatResult: CompatResult | null = null
  const compatRaw = r['궁합결과']
  if (compatRaw && compatRaw.trim() !== '' && compatRaw !== 'null') {
    try { compatResult = JSON.parse(compatRaw) } catch { /* null 유지 */ }
  }

  let others: OtherParticipant[] = []
  const othersRaw = r['나머지참가자']
  if (othersRaw && othersRaw.trim() !== '' && othersRaw !== 'null') {
    try { others = JSON.parse(othersRaw) } catch { /* 빈 배열 유지 */ }
  }

  const { 사주4주, 오행분포 } = manseryeok
  const { day_master } = sajuResult.saju_summary
  const { love_style, love_fortune, fortune_today, personality, compat_summary } = sajuResult

  const mainOhaeng = parseOhaeng(compat_summary.element)
  const idealTypeTitle = love_style.match_type[0] ?? ''
  const idealTypeDesc = join(love_style.match_type.slice(1))

  const compatibility = compatResult?.top3.map((p) => ({
    name: p.nickname,
    gender: p.desc,
    location: p.location,
    photoUrl: toPhotoUrl(p.photo),
    score: p.score,
    strengths: p.good_tags,
    weaknesses: p.bad_tags,
    strengthDetail: p.good_detail,
    weaknessDetail: p.bad_detail,
  })) ?? []

  const otherProfiles = others.map((p) => ({
    id: p.id,
    name: p.nickname,
    gender: p.gender,
    location: p.location,
    photoUrl: toPhotoUrl(p.photo),
  }))

  return {
    id,
    name: sajuResult.profile.nickname || r['이름'],
    gender: sajuResult.profile.gender || r['성별'],
    location: sajuResult.profile.location || r['거주지'],
    hobbies: sajuResult.profile.hobby_tags,
    photoUrl: toPhotoUrl(r['프로필 사진']),
    mainOhaeng,
    ohaengCount: 오행분포,
    pillars: {
      year: parsePillar(사주4주.년주),
      month: parsePillar(사주4주.월주),
      day: parsePillar(사주4주.일주),
      hour: parsePillar(사주4주.시주),
    },
    dayMaster: {
      character: 사주4주.일주[0] ?? '',
      name: day_master.title,
      subtitle: day_master.one_line,
      description: join(day_master.description),
    },
    personality: {
      innate: {
        title: personality.traits.title,
        description: join(personality.traits.description),
      },
      strength: {
        title: personality.strength.title,
        description: join(personality.strength.description),
      },
      weakness: {
        title: personality.weakness.title,
        description: join(personality.weakness.description),
      },
    },
    love: {
      style: join(love_style.my_style),
      idealType: { title: idealTypeTitle, description: idealTypeDesc },
    },
    yearlyLove: {
      summary: love_fortune.overview.headline,
      description: join(love_fortune.overview.description),
      periods: love_fortune.periods.map((p) => ({
        period: p.period,
        description: join(p.description),
      })),
    },
    todayFortune: {
      overall: {
        summary: fortune_today.overall.headline,
        description: join(fortune_today.overall.description),
      },
      love: {
        summary: fortune_today.love.headline,
        description: join(fortune_today.love.description),
      },
      luckyItem: {
        summary: fortune_today.lucky_item.headline,
        description: join(fortune_today.lucky_item.description),
      },
    },
    compatibility,
    otherProfiles,
  }
}
