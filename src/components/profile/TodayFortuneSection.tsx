import type { SajuProfile } from '../../types/profile'

function FortuneCard({
  category,
  summary,
  description,
}: {
  category: string
  summary: string
  description: string
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <p className="text-xs text-gray-400 mb-1">{category}</p>
      <p className="text-sm font-semibold text-gray-900 mb-1">{summary}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default function TodayFortuneSection({
  todayFortune,
}: {
  todayFortune: SajuProfile['todayFortune']
}) {
  return (
    <div className="space-y-3">
      <FortuneCard
        category="오늘 총운세"
        summary={todayFortune.overall.summary}
        description={todayFortune.overall.description}
      />
      <FortuneCard
        category="연애운"
        summary={todayFortune.love.summary}
        description={todayFortune.love.description}
      />
      <FortuneCard
        category="오늘의 행운 아이템"
        summary={todayFortune.luckyItem.summary}
        description={todayFortune.luckyItem.description}
      />
    </div>
  )
}
