export interface Manseryeok {
  사주4주: {
    년주: string
    월주: string
    일주: string
    시주: string
  }
  일간: string
  오행분포: {
    목: number
    화: number
    토: number
    금: number
    수: number
  }
  십신: {
    주: string
    천간: string
    지지: string
  }[]
  합충: string[]
  세운: string
  월운: string[]
}

export interface SajuResult {
  profile: {
    nickname: string
    gender: string
    location: string
    hobby_tags: string[]
  }
  saju_summary: {
    day_master: {
      day_master: string
      title: string
      one_line: string
      description: string[]
    }
  }
  personality: {
    traits: { title: string; description: string[] }
    strength: { title: string; description: string[] }
    weakness: { title: string; description: string[] }
  }
  love_style: {
    my_style: string[]
    match_type: string[]
  }
  love_fortune: {
    overview: {
      label: string
      headline: string
      description: string[]
    }
    periods: {
      period: string
      description: string[]
    }[]
  }
  fortune_today: {
    overall: { label: string; headline: string; description: string[] }
    love: { label: string; headline: string; description: string[] }
    lucky_item: { label: string; headline: string; description: string[] }
  }
  compat_summary: {
    element: string
    title: string
    love_fortune_now: string
    summary: string
  }
}

export interface CompatResult {
  top3: {
    avatar: string
    nickname: string
    desc: string
    score: number
    good_tags: string[]
    bad_tags: string[]
    good_detail: string
    bad_detail: string
  }[]
  other_participants: {
    avatar: string
    nickname: string
    desc: string
  }[]
}
