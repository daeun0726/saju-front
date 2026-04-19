import type { Ohaeng } from '../../types/profile'
import { OHAENG_COLORS, OHAENG_BG_CLASS } from '../../utils/ohaeng'

const ORDER: Ohaeng[] = ['목', '화', '토', '금', '수']

export default function OhaengDistribution({ count }: { count: Record<Ohaeng, number> }) {
  const total = Object.values(count).reduce((a, b) => a + b, 0)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <p className="text-xs text-gray-400 mb-4">오행 분포</p>
      <div className="flex gap-2">
        {ORDER.map((ohaeng) => {
          const n = count[ohaeng]
          return (
            <div key={ohaeng} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className={`w-10 h-10 rounded-full ${OHAENG_BG_CLASS[ohaeng]} flex items-center justify-center`}
              >
                <span className="text-sm font-bold" style={{ color: OHAENG_COLORS[ohaeng] }}>
                  {ohaeng}
                </span>
              </div>
              <span className="text-xs text-gray-600 font-medium">{n}</span>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(n / total) * 100}%`,
                    backgroundColor: OHAENG_COLORS[ohaeng],
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
