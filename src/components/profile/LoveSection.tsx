import type { SajuProfile } from '../../types/profile'

function formatPeriod(period: string) {
  const yearMatch = period.match(/(\d{4})년/)
  const year = yearMatch ? parseInt(yearMatch[1]) : new Date().getFullYear()

  // "4–6월", "4-6월", "4~6월" 형태 → 중간 달
  const rangeMatch = period.match(/(\d+)[–\-~](\d+)월/)
  if (rangeMatch) {
    const mid = Math.round((parseInt(rangeMatch[1]) + parseInt(rangeMatch[2])) / 2)
    return `${year}년 ${mid}월`
  }

  // 나머지: "N월" 패턴 추출 → 중간 달
  const months = [...period.matchAll(/(\d+)월/g)].map((m) => parseInt(m[1]))
  if (months.length > 0) {
    const mid = Math.round(months.reduce((a, b) => a + b, 0) / months.length)
    return `${year}년 ${mid}월`
  }

  return period
}

interface Props {
  love: SajuProfile['love']
  yearlyLove: SajuProfile['yearlyLove']
}

export default function LoveSection({ love, yearlyLove }: Props) {
  return (
    <div className="space-y-2.5">
      {/* 연애 스타일 + 잘 맞는 상대 */}
      <div className="bg-white rounded-2xl px-4.5 py-4 space-y-2">
        <p className="text-[14px] font-bold text-[#aaa]">연애</p>
        <div className="bg-[#f9f9f9] rounded-xl px-3.5 py-3 space-y-1">
          <p className="text-[12px] font-bold text-[#e24f63]">나는 이런 사람이에요</p>
          <p className="text-[14px] text-[#444] leading-[21.45px]">{love.style}</p>
        </div>
        <div className="bg-[#f9f9f9] rounded-xl px-3.5 py-3 space-y-1">
          <p className="text-[12px] font-bold text-[#e24f63]">잘 맞는 상대</p>
          <p className="text-[16px] font-bold text-[#222]">{love.idealType.title}</p>
          <p className="text-[14px] text-[#444] leading-[21.45px] pt-px">{love.idealType.description}</p>
        </div>
      </div>

      {/* 올해 연애운 */}
      <div className="bg-white rounded-2xl px-4.5 py-4 space-y-2">
        <p className="text-[14px] font-bold text-[#aaa]">올해 연애운</p>
        <div className="bg-[#f9f9f9] rounded-xl px-3.5 py-3 space-y-1">
          <p className="text-[12px] font-bold text-[#e24f63]">올해 연애운 특징</p>
          <p className="text-[16px] font-bold text-[#222]">{yearlyLove.summary}</p>
          <p className="text-[14px] text-[#444] leading-[21.45px] pt-px">{yearlyLove.description}</p>
        </div>
        {yearlyLove.periods.map(({ period, description }) => (
          <div key={period} className="bg-[#f9f9f9] rounded-[8px] p-2 flex items-start justify-between">
            <span className="bg-[#ffeceb] text-[12px] font-bold text-[#e24f63] whitespace-nowrap px-2 py-0.5 rounded-[10px] shrink-0">
              {formatPeriod(period)}
            </span>
            <p className="text-[14px] text-[#222] leading-[21px] w-61.5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
