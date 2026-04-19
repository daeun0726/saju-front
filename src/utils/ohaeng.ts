import type { Ohaeng } from '../types/profile'

export interface OhaengTheme {
  headerBg: string
  avatarBg: string
  avatarText: string
  accent: string
  chipBg: string
  chipText: string
  tabActiveText: string
  tabActiveBorder: string
  scoreText: string
}

export const ohaengTheme: Record<Ohaeng, OhaengTheme> = {
  목: {
    headerBg: 'bg-green-50',
    avatarBg: 'bg-green-100',
    avatarText: 'text-green-700',
    accent: 'text-green-600',
    chipBg: 'bg-green-50',
    chipText: 'text-green-700',
    tabActiveText: 'text-green-600',
    tabActiveBorder: 'border-green-600',
    scoreText: 'text-green-600',
  },
  화: {
    headerBg: 'bg-rose-50',
    avatarBg: 'bg-rose-100',
    avatarText: 'text-rose-600',
    accent: 'text-rose-500',
    chipBg: 'bg-rose-50',
    chipText: 'text-rose-600',
    tabActiveText: 'text-rose-500',
    tabActiveBorder: 'border-rose-500',
    scoreText: 'text-rose-500',
  },
  토: {
    headerBg: 'bg-amber-50',
    avatarBg: 'bg-amber-100',
    avatarText: 'text-amber-700',
    accent: 'text-amber-600',
    chipBg: 'bg-amber-50',
    chipText: 'text-amber-700',
    tabActiveText: 'text-amber-600',
    tabActiveBorder: 'border-amber-600',
    scoreText: 'text-amber-600',
  },
  금: {
    headerBg: 'bg-slate-50',
    avatarBg: 'bg-slate-100',
    avatarText: 'text-slate-600',
    accent: 'text-slate-600',
    chipBg: 'bg-slate-50',
    chipText: 'text-slate-600',
    tabActiveText: 'text-slate-600',
    tabActiveBorder: 'border-slate-600',
    scoreText: 'text-slate-600',
  },
  수: {
    headerBg: 'bg-blue-50',
    avatarBg: 'bg-blue-100',
    avatarText: 'text-blue-700',
    accent: 'text-blue-600',
    chipBg: 'bg-blue-50',
    chipText: 'text-blue-700',
    tabActiveText: 'text-blue-600',
    tabActiveBorder: 'border-blue-600',
    scoreText: 'text-blue-600',
  },
}

export const OHAENG_COLORS: Record<Ohaeng, string> = {
  목: '#22c55e',
  화: '#f43f5e',
  토: '#f59e0b',
  금: '#94a3b8',
  수: '#3b82f6',
}

export const OHAENG_BG_CLASS: Record<Ohaeng, string> = {
  목: 'bg-green-100',
  화: 'bg-rose-100',
  토: 'bg-amber-100',
  금: 'bg-slate-100',
  수: 'bg-blue-100',
}
