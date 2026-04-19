import { Link } from 'react-router-dom'
import type { OtherProfile, Ohaeng } from '../../types/profile'
import { ohaengTheme } from '../../utils/ohaeng'

export default function OtherProfiles({
  profiles,
  ohaeng,
}: {
  profiles: OtherProfile[]
  ohaeng: Ohaeng
}) {
  const theme = ohaengTheme[ohaeng]

  return (
    <div>
      <p className="text-base font-bold text-gray-900 mb-3">다른 참가자들 프로필 카드 보러 가기</p>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100">
        {profiles.map((profile) => (
          <Link
            key={profile.id}
            to={`/profile/${profile.id}`}
            className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
          >
            <div
              className={`w-10 h-10 rounded-full ${theme.avatarBg} flex items-center justify-center flex-shrink-0`}
            >
              <span className={`font-bold text-sm ${theme.avatarText}`}>{profile.name[0]}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{profile.name}</p>
              <p className="text-xs text-gray-400">
                {profile.gender} · {profile.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
