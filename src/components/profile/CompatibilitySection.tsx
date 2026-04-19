import type { CompatibilityPerson, Ohaeng } from '../../types/profile'
import { ohaengTheme } from '../../utils/ohaeng'

function CompatibilityCard({
  person,
  ohaeng,
}: {
  person: CompatibilityPerson
  ohaeng: Ohaeng
}) {
  const theme = ohaengTheme[ohaeng]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div
            className={`w-10 h-10 rounded-full ${theme.avatarBg} flex items-center justify-center flex-shrink-0`}
          >
            <span className={`font-bold text-sm ${theme.avatarText}`}>{person.name[0]}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-gray-900">{person.name}</span>
              <span className={`text-base font-bold ${theme.scoreText}`}>{person.score}점</span>
            </div>
            <p className="text-sm text-gray-400 mt-0.5">
              {person.gender} · {person.location}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className={`text-xs font-medium ${theme.accent} mb-2`}>잘 맞아요</p>
          <div className="flex flex-wrap gap-1.5">
            {person.strengths.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="text-xs font-medium text-gray-400 mb-2">아쉬워요</p>
          <div className="flex flex-wrap gap-1.5">
            {person.weaknesses.map((w) => (
              <span key={w} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 divide-y divide-gray-100">
        <div className="p-4">
          <p className="text-xs font-medium text-gray-900 mb-2">잘 맞는 부분</p>
          <p className="text-sm text-gray-600 leading-relaxed">{person.strengthDetail}</p>
        </div>
        <div className="p-4">
          <p className="text-xs font-medium text-gray-900 mb-2">아쉬운 부분</p>
          <p className="text-sm text-gray-600 leading-relaxed">{person.weaknessDetail}</p>
        </div>
      </div>
    </div>
  )
}

export default function CompatibilitySection({
  compatibility,
  ohaeng,
}: {
  compatibility: CompatibilityPerson[]
  ohaeng: Ohaeng
}) {
  return (
    <div className="space-y-3">
      <p className="text-base font-bold text-gray-900">궁합 TOP 3</p>
      {compatibility.map((person) => (
        <CompatibilityCard key={person.name} person={person} ohaeng={ohaeng} />
      ))}
    </div>
  )
}
