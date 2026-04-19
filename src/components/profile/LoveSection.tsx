import type { SajuProfile, Ohaeng } from '../../types/profile'
import { ohaengTheme } from '../../utils/ohaeng'

interface Props {
  love: SajuProfile['love']
  yearlyLove: SajuProfile['yearlyLove']
  ohaeng: Ohaeng
}

export default function LoveSection({ love, yearlyLove, ohaeng }: Props) {
  const theme = ohaengTheme[ohaeng]

  return (
    <div className="space-y-3">
      <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-4">
        <div>
          <p className="text-xs text-gray-400 mb-2">나는 이런 사람이에요</p>
          <p className="text-sm text-gray-700 leading-relaxed">{love.style}</p>
        </div>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-400 mb-1">잘 맞는 상대</p>
          <p className="text-sm font-semibold text-gray-900 mb-1">{love.idealType.title}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{love.idealType.description}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <p className="text-xs text-gray-400 mb-1">올해 연애운 특징</p>
        <p className="text-sm font-semibold text-gray-900 mb-1">{yearlyLove.summary}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{yearlyLove.description}</p>
        <div className="space-y-0">
          {yearlyLove.periods.map(({ period, description }) => (
            <div
              key={period}
              className="flex gap-3 py-3 border-t border-gray-100"
            >
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-md ${theme.chipBg} ${theme.chipText} whitespace-nowrap h-fit mt-0.5`}
              >
                {period}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
