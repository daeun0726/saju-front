import { Link } from 'react-router-dom'
import type { OtherProfile } from '../../types/profile'

export default function OtherProfiles({ profiles }: { profiles: OtherProfile[] }) {
  return (
    <div className="space-y-2.5">
      <p className="text-[14px] font-bold text-[#222]">다른 참가자들 프로필 카드 보러 가기</p>
      <div className="space-y-2.5">
        {profiles.map((profile) => (
          <Link
            key={profile.id}
            to={`/profile/${profile.id}`}
            className="flex items-center gap-3 bg-white rounded-[14px] px-4 py-3.5 hover:bg-gray-50 transition-colors"
          >
            <div className="w-10 h-10 rounded-[20px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
              <span className="text-[14px] font-bold text-[#bbb]">{profile.name[0]}</span>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#222]">{profile.name}</p>
              <p className="text-[12px] text-[#aaa] mt-0.5">
                {profile.gender} · {profile.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
