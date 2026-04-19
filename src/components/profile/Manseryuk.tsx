import type { SajuProfile } from '../../types/profile'

const PILLAR_LABELS = [
  { key: 'hour'  as const, label: '시(時)' },
  { key: 'day'   as const, label: '일(日)' },
  { key: 'month' as const, label: '월(月)' },
  { key: 'year'  as const, label: '년(年)' },
]

export default function Manseryuk({ pillars }: { pillars: SajuProfile['pillars'] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <p className="text-xs text-gray-400 mb-3">만세력</p>
      <div className="grid grid-cols-4 gap-2">
        {PILLAR_LABELS.map(({ key, label }) => {
          const pillar = pillars[key]
          return (
            <div key={key} className="flex flex-col items-center gap-1.5">
              <p className="text-[10px] text-gray-400">{label}</p>
              <div className="w-full rounded-xl bg-[#c8d9e6] py-5 flex flex-col items-center gap-0.5">
                <span className="text-[24px] font-bold text-[#2f4156] leading-[24px]">{pillar.stem}</span>
                <span className="text-[10px] text-[#2f4156] mt-[3px]">{pillar.stemName}</span>
              </div>
              <div className="w-full rounded-xl bg-[#eef3df] py-5 flex flex-col items-center gap-0.5">
                <span className="text-[24px] font-bold text-[#434f3f] leading-[24px]">{pillar.branch}</span>
                <span className="text-[10px] text-[#434f3f] mt-[3px]">{pillar.branchName}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
