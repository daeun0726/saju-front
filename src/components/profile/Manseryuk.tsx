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
              <div className="w-full rounded-xl bg-amber-50 py-4 flex flex-col items-center gap-1">
                <span className="text-2xl font-medium text-gray-800">{pillar.stem}</span>
                <span className="text-[10px] text-gray-500">{pillar.stemName}</span>
              </div>
              <div className="w-full rounded-xl bg-emerald-50 py-4 flex flex-col items-center gap-1">
                <span className="text-2xl font-medium text-gray-800">{pillar.branch}</span>
                <span className="text-[10px] text-gray-500">{pillar.branchName}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
