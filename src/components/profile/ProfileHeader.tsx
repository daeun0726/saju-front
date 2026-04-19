import type { SajuProfile } from '../../types/profile'
import { ohaengTheme } from '../../utils/ohaeng'

export default function ProfileHeader({ profile }: { profile: SajuProfile }) {
  const theme = ohaengTheme[profile.mainOhaeng]

  return (
    <div className={`${theme.headerBg} rounded-2xl p-5`}>
      <div className="flex items-start gap-4">
        <div
          className={`w-[60px] h-[60px] rounded-full ${theme.avatarBg} flex items-center justify-center flex-shrink-0`}
        >
          <span className={`text-2xl font-bold ${theme.avatarText}`}>{profile.name[0]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-900 font-bold text-lg leading-snug">{profile.name}</p>
          <p className="text-gray-500 text-sm mt-0.5">
            {profile.gender} · {profile.location}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {profile.hobbies.map((hobby) => (
              <span
                key={hobby}
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${theme.chipBg} ${theme.chipText}`}
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
