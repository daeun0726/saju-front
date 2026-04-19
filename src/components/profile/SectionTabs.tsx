import { useState } from 'react'
import type { Ohaeng } from '../../types/profile'
import { ohaengTheme } from '../../utils/ohaeng'

const TABS = [
  { id: 'saju', label: '사주팔자' },
  { id: 'love', label: '연애운' },
  { id: 'career', label: '직업운' },
  { id: 'fortune', label: '세운/월운' },
]

export default function SectionTabs({ ohaeng }: { ohaeng: Ohaeng }) {
  const [active, setActive] = useState('saju')
  const theme = ohaengTheme[ohaeng]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div className="flex">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex-1 py-3 text-xs font-medium border-b-2 transition-colors ${
              active === id
                ? `${theme.tabActiveText} ${theme.tabActiveBorder}`
                : 'text-gray-400 border-transparent'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
