import type { Pillar } from '../types/profile'

const STEM_NAMES: Record<string, string> = {
  甲: '갑목', 乙: '을목',
  丙: '병화', 丁: '정화',
  戊: '무토', 己: '기토',
  庚: '경금', 辛: '신금',
  壬: '임수', 癸: '계수',
}

const BRANCH_NAMES: Record<string, string> = {
  子: '자(쥐)', 丑: '축(소)',
  寅: '인(호랑이)', 卯: '묘(토끼)',
  辰: '진(용)', 巳: '사(뱀)',
  午: '오(말)', 未: '미(양)',
  申: '신(원숭이)', 酉: '유(닭)',
  戌: '술(개)', 亥: '해(돼지)',
}

export function parsePillar(twoChar: string): Pillar {
  const stem = twoChar[0] ?? ''
  const branch = twoChar[1] ?? ''
  return {
    stem,
    stemName: STEM_NAMES[stem] ?? stem,
    branch,
    branchName: BRANCH_NAMES[branch] ?? branch,
  }
}
