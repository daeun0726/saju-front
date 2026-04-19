import type { SajuProfile } from '../../types/profile'

const AVATAR_COLORS: Record<string, { bg: string; text: string }> = {
  목: { bg: 'bg-[#eef3df]', text: 'text-[#434f3f]' },
  화: { bg: 'bg-[#ffe1e6]', text: 'text-[#2f4156]' },
  토: { bg: 'bg-[#f5efeb]', text: 'text-[#2f4156]' },
  금: { bg: 'bg-[#c8d9e6]', text: 'text-[#2f4156]' },
  수: { bg: 'bg-[#c8d9e6]', text: 'text-[#2f4156]' },
}

export default function ProfileHeader({ profile }: { profile: SajuProfile }) {
  const avatar = AVATAR_COLORS[profile.mainOhaeng] ?? AVATAR_COLORS['화']

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex items-center gap-[14px]">
        <div
          className={`w-[60px] h-[60px] rounded-[30px] ${avatar.bg} flex items-center justify-center flex-shrink-0`}
        >
          <span className={`text-[22px] font-bold ${avatar.text}`}>{profile.name[0]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#222] font-bold text-[17px] leading-snug">{profile.name}</p>
          <p className="text-[#aaa] text-[12px] mt-1">
            {profile.gender} · {profile.location}
          </p>
          <div className="flex flex-wrap gap-x-1.5 gap-y-1 mt-2 opacity-80">
            {profile.hobbies.map((hobby) => (
              <span
                key={hobby}
                className="px-3 py-1 rounded-[20px] text-[12px] font-bold bg-[#f5efeb] text-[#e24f63]"
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
