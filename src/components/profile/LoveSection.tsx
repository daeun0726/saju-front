import type { SajuProfile } from '../../types/profile'

interface Props {
  love: SajuProfile['love']
  yearlyLove: SajuProfile['yearlyLove']
}

export default function LoveSection({ love, yearlyLove }: Props) {
  return (
    <div className="space-y-2.5">
      {/* 연애 스타일 + 잘 맞는 상대 */}
      <div className="bg-white rounded-2xl px-4.5 py-4 space-y-2">
        <p className="text-[12px] font-medium text-[#aaa] mb-2">연애</p>
        <div className="bg-[#f9f9f9] rounded-xl px-3.5 pt-4.5 pb-3 space-y-1">
          <p className="text-[10px] font-bold text-[#e24f63]">나는 이런 사람이에요</p>
          <p className="text-[13px] text-[#555] leading-5.25">{love.style}</p>
        </div>
        <div className="bg-[#f9f9f9] rounded-xl px-3.5 py-3 space-y-1">
          <p className="text-[10px] font-bold text-[#e24f63]">잘 맞는 상대</p>
          <p className="text-[12px] font-bold text-[#222]">{love.idealType.title}</p>
          <p className="text-[13px] text-[#555] leading-5.25 pt-px">{love.idealType.description}</p>
        </div>
      </div>

      {/* 올해 연애운 */}
      <div className="bg-white rounded-2xl px-4.5 py-4 space-y-2">
        <p className="text-[12px] font-medium text-[#aaa] mb-2">올해 연애운</p>
        <div className="bg-[#f9f9f9] rounded-xl px-3.5 py-3 space-y-1">
          <p className="text-[10px] font-bold text-[#e24f63]">올해 연애운 특징</p>
          <p className="text-[12px] font-bold text-[#222]">{yearlyLove.summary}</p>
          <p className="text-[13px] text-[#555] leading-5.25 pt-px">{yearlyLove.description}</p>
        </div>
        {yearlyLove.periods.map(({ period, description }) => (
          <div key={period} className="bg-[#f9f9f9] rounded-xl px-3 py-2.5 flex gap-2.5 items-start">
            <span className="text-[10px] font-bold text-[#e24f63] whitespace-nowrap pt-1 min-w-10.5">
              {period}
            </span>
            <p className="text-[13px] text-[#222] leading-5.25">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
