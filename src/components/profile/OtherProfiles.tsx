import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { OtherProfile } from '../../types/profile'

const INITIAL_SHOW = 3

export default function OtherProfiles({ profiles }: { profiles: OtherProfile[] }) {
  const [expanded, setExpanded] = useState(false)

  if (profiles.length === 0) return null

  const hasMore = profiles.length > INITIAL_SHOW
  const visible = expanded ? profiles : profiles.slice(0, INITIAL_SHOW)

  return (
    <div className="space-y-2.5">
      <p className="text-[14px] font-bold text-[#222]">다른 참가자들 프로필 카드 보러 가기</p>
      <div className="space-y-2.5">
        {visible.map((profile, i) => {
          const inner = (
            <>
              <div className="w-10 h-10 rounded-[20px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                <span className="text-[14px] font-bold text-[#bbb]">{profile.name[0]}</span>
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#222]">{profile.name}</p>
                <p className="text-[12px] text-[#aaa] mt-0.5">
                  {profile.gender}{profile.location ? ` · ${profile.location}` : ''}
                </p>
              </div>
            </>
          )

          const baseClass = 'flex items-center gap-3 bg-white rounded-[14px] px-4 py-3.5'

          return profile.id ? (
            <Link
              key={profile.id}
              to={`/profile/${profile.id}?preview=true`}
              className={`${baseClass} hover:bg-gray-50 transition-colors`}
            >
              {inner}
            </Link>
          ) : (
            <div key={`${profile.name}-${i}`} className={baseClass}>
              {inner}
            </div>
          )
        })}
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full bg-white rounded-[14px] py-3 text-[13px] font-medium text-[#aaa] hover:bg-gray-50 transition-colors"
        >
          {expanded
            ? '접기'
            : `더 보기 +${profiles.length - INITIAL_SHOW}명`}
        </button>
      )}
    </div>
  )
}
