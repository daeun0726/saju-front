import type { SajuProfile } from '../../types/profile'

const CATEGORY_COLORS: Record<string, string> = {
  오늘총운세: 'text-[#537193]',
  연애운: 'text-[#e24f63]',
  오늘의행운아이템: 'text-[#869d7e]',
}

function FortuneCard({
  category,
  colorClass,
  summary,
  description,
}: {
  category: string
  colorClass: string
  summary: string
  description: string
}) {
  return (
    <div className="bg-[#f9f9f9] rounded-xl px-3.5 py-3 space-y-1">
      <p className={`text-[10px] font-bold ${colorClass}`}>{category}</p>
      <p className="text-[12px] font-bold text-[#222]">{summary}</p>
      <p className="text-[13px] text-[#555] leading-5.25 pt-px">{description}</p>
    </div>
  )
}

export default function TodayFortuneSection({
  todayFortune,
}: {
  todayFortune: SajuProfile['todayFortune']
}) {
  return (
    <div className="bg-white rounded-2xl px-4.5 py-4 space-y-2">
      <p className="text-[12px] font-medium text-[#aaa] mb-2">오늘의 운세</p>
      <FortuneCard
        category="오늘 총운세"
        colorClass={CATEGORY_COLORS['오늘총운세']}
        summary={todayFortune.overall.summary}
        description={todayFortune.overall.description}
      />
      <FortuneCard
        category="연애운"
        colorClass={CATEGORY_COLORS['연애운']}
        summary={todayFortune.love.summary}
        description={todayFortune.love.description}
      />
      <FortuneCard
        category="오늘의 행운 아이템"
        colorClass={CATEGORY_COLORS['오늘의행운아이템']}
        summary={todayFortune.luckyItem.summary}
        description={todayFortune.luckyItem.description}
      />
    </div>
  )
}
