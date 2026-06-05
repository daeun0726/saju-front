import { useState } from 'react'
import type { CompatibilityPerson } from '../../types/profile'

function Avatar({ name, photoUrl }: { name: string; photoUrl?: string }) {
  const [imgError, setImgError] = useState(false)
  const showPhoto = !!photoUrl && !imgError

  return (
    <div className="w-10 h-10 rounded-[20px] bg-[#ffeceb] flex items-center justify-center shrink-0 overflow-hidden">
      {showPhoto ? (
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-[14px] font-medium text-[#e24f63]">{name[0]}</span>
      )}
    </div>
  )
}

function CompatibilityCard({ person }: { person: CompatibilityPerson }) {
  return (
    <div className="bg-white border border-[#ebebeb] rounded-xl px-[17px] pt-[19px] pb-[15px] space-y-3">
      <div className="flex items-center gap-3">
        <Avatar name={person.name} photoUrl={person.photoUrl} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-bold text-[#222]">{person.name}</span>
            <span className="text-[14px] font-normal text-[#e24f63]">{person.score}점</span>
          </div>
          <p className="text-[12px] font-bold text-[#999] mt-0.5">
            {person.gender}{person.location ? ` · ${person.location}` : ''}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div>
          <p className="text-[14px] font-normal text-[#aaa] mb-1.5">잘 맞아요</p>
          <div className="flex flex-wrap gap-1 overflow-hidden">
            {person.strengths.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-[20px] bg-[#ffeceb] text-[#e24f63] text-[14px] font-bold">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[14px] font-normal text-[#aaa] mb-1.5">아쉬워요</p>
          <div className="flex flex-wrap gap-1">
            {person.weaknesses.map((w) => (
              <span key={w} className="px-2.5 py-1 rounded-[20px] bg-[rgba(170,170,170,0.2)] text-[#444] text-[14px] font-bold">
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#f0eee8] pt-[11px] space-y-2.5">
        <div>
          <p className="text-[14px] font-bold text-[#e24f63] mb-1">잘 맞는 부분</p>
          <p className="text-[14px] text-[#666] leading-[22px]">{person.strengthDetail}</p>
        </div>
        <div>
          <p className="text-[14px] font-bold text-[#888780] mb-1">아쉬운 부분</p>
          <p className="text-[14px] text-[#666] leading-[22px]">{person.weaknessDetail}</p>
        </div>
      </div>
    </div>
  )
}

function CompatibilityPending() {
  return (
    <div className="bg-white border border-[#ebebeb] rounded-xl px-[17px] py-8 flex flex-col items-center gap-2 text-center">
      <p className="text-[15px] font-medium text-[#aaa]">궁합 분석 준비 중이에요</p>
      <p className="text-[13px] text-[#bbb] leading-[20px]">
        모든 참가자 신청이 완료되면<br />궁합 TOP 3를 확인할 수 있어요
      </p>
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
      <p className="text-[16px] font-bold text-[#222]">궁합 TOP 3</p>
      {compatibility.length === 0 ? (
        <CompatibilityPending />
      ) : (
        compatibility.map((person) => (
          <CompatibilityCard key={person.name} person={person} />
        ))
      )}
    </div>
  )
}
