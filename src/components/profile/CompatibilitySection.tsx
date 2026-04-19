import type { CompatibilityPerson } from '../../types/profile'

function CompatibilityCard({ person }: { person: CompatibilityPerson }) {
  return (
    <div className="bg-white border border-[#ebebeb] rounded-xl px-[17px] pt-[19px] pb-[15px] space-y-3">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-[20px] bg-[#ffeceb] flex items-center justify-center shrink-0">
          <span className="text-[14px] font-medium text-[#e24f63]">{person.name[0]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-medium text-[#222]">{person.name}</span>
            <span className="text-[14px] font-medium text-[#e24f63]">{person.score}점</span>
          </div>
          <p className="text-[13px] text-[#999] mt-0.5">
            {person.gender} · {person.location}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <div>
          <p className="text-[11px] text-[#aaa] mb-1.5">잘 맞아요</p>
          <div className="flex flex-wrap gap-1 overflow-hidden">
            {person.strengths.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-[20px] bg-[#ffeceb] text-[#e24f63] text-[12px] font-semibold">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] text-[#aaa] mb-1.5">아쉬워요</p>
          <div className="flex flex-wrap gap-1">
            {person.weaknesses.map((w) => (
              <span key={w} className="px-2.5 py-1 rounded-[20px] bg-[rgba(170,170,170,0.2)] text-[#444] text-[12px] font-semibold">
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="border-t border-[#f0eee8] pt-[11px] space-y-2.5">
        <div>
          <p className="text-[11px] font-medium text-[#d4537e] mb-1">잘 맞는 부분</p>
          <p className="text-[13px] text-[#666] leading-[22px]">{person.strengthDetail}</p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-[#888780] mb-1">아쉬운 부분</p>
          <p className="text-[13px] text-[#666] leading-[22px]">{person.weaknessDetail}</p>
        </div>
      </div>
    </div>
  )
}

export default function CompatibilitySection({
  compatibility,
}: {
  compatibility: CompatibilityPerson[]
}) {
  return (
    <div className="space-y-2.5">
      <p className="text-[14px] font-bold text-[#222]">궁합 TOP 3</p>
      {compatibility.map((person) => (
        <CompatibilityCard key={person.name} person={person} />
      ))}
    </div>
  )
}
