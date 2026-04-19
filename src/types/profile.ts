export type Ohaeng = '목' | '화' | '토' | '금' | '수'

export interface Pillar {
  stem: string
  stemName: string
  branch: string
  branchName: string
}

export interface CompatibilityPerson {
  name: string
  gender: string
  location: string
  score: number
  strengths: string[]
  weaknesses: string[]
  strengthDetail: string
  weaknessDetail: string
}

export interface OtherProfile {
  id: string
  name: string
  gender: string
  location: string
}

export interface SajuProfile {
  id: string
  name: string
  gender: string
  location: string
  hobbies: string[]
  mainOhaeng: Ohaeng
  ohaengCount: Record<Ohaeng, number>
  pillars: {
    hour: Pillar
    day: Pillar
    month: Pillar
    year: Pillar
  }
  dayMaster: {
    character: string
    name: string
    subtitle: string
    description: string
  }
  personality: {
    innate: { title: string; description: string }
    strength: { title: string; description: string }
    weakness: { title: string; description: string }
  }
  love: {
    style: string
    idealType: { title: string; description: string }
  }
  yearlyLove: {
    summary: string
    description: string
    periods: { period: string; description: string }[]
  }
  todayFortune: {
    overall: { summary: string; description: string }
    love: { summary: string; description: string }
    luckyItem: { summary: string; description: string }
  }
  compatibility: CompatibilityPerson[]
  otherProfiles: OtherProfile[]
}
