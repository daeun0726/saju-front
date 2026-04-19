import type { SajuProfile } from '../types/profile'

export const mockProfile: SajuProfile = {
  id: 'x8j2f9',
  name: '홍길동',
  gender: '남',
  location: '서울시 강남구',
  hobbies: ['여행', '음악', '영화', '요리'],
  mainOhaeng: '화',
  ohaengCount: { 목: 2, 화: 3, 토: 1, 금: 2, 수: 2 },
  pillars: {
    hour:  { stem: '丙', stemName: '병화', branch: '午', branchName: '오(말)' },
    day:   { stem: '甲', stemName: '갑목', branch: '寅', branchName: '인(호랑이)' },
    month: { stem: '癸', stemName: '계수', branch: '卯', branchName: '묘(토끼)' },
    year:  { stem: '庚', stemName: '경금', branch: '辰', branchName: '진(용)' },
  },
  dayMaster: {
    character: '甲',
    name: '갑목 · 감비(甲木)이에요',
    subtitle: '곧게 하늘을 향해 자라는 나무',
    description:
      '스스로의 방향을 믿고 꿋꿋하게 나아가는 사람이에요. 한번 마음을 먹으면 쉽게 흔들리지 않는 힘이 있고, 주변에게는 든든하고 믿음직한 존재로 비쳐질 때가 많아요.',
  },
  personality: {
    innate: {
      title: '따뜻하고 직관적인 사람',
      description:
        '처음 만나는 사람에게도 편안함을 주는 온기가 있어요. 상대방의 감정을 놓치지 않는 섬세함이 있어요.',
    },
    strength: {
      title: '한번 시작하면 끝을 보는 추진력',
      description:
        '관심 있는 일에는 깊이 파고드는 집중력이 있어요. 공감 능력도 뛰어나서 분위기를 이끄는 역할을 자연스럽게 맡게 돼요.',
    },
    weakness: {
      title: '감정 기복과 완벽주의',
      description:
        '스스로에게 높은 기준을 세우다 작은 실수에도 오래 마음을 쓰는 경향이 있어요. 가끔은 스스로를 더 너그럽게 봐도 괜찮아요.',
    },
  },
  love: {
    style:
      '말보다 행동으로 마음을 표현하는 스타일이에요. 좋아하는 사람 앞에서는 어느새 더 조심스러워지고, 티를 잘 내지 못하지만 그리운 감정은 깊고 진하게 사랑하는 편이에요. 혼자만의 시간도 소중히 여기기 때문에 서로의 공간을 자연스럽게 존중해 주는 관계를 좋아해요.',
    idealType: {
      title: '여유롭고 감정 표현이 솔직한 사람',
      description:
        '서두르지 않고 천천히 서로를 알아가는 걸 편안하게 느끼는 사람, 작은 것에도 진심으로 반응해 주는 사람과 잘 맞아요.',
    },
  },
  yearlyLove: {
    summary: '연애운 한 줄 정리',
    description: '자세한 연애운 풀이 (4~5줄정도)',
    periods: [
      {
        period: '4–6월',
        description:
          '활기와 함께 새로운 만남의 기회가 열려요. 일상에서 자연스럽게 이성에게 주목받게 되는 때예요.',
      },
      {
        period: '7–9월',
        description:
          '감정이 무르익는 시기예요. 마음에 생긴 사람이 있다면 이 시기에 솔직하게 표현해보는 게 좋아요.',
      },
      {
        period: '10–12월',
        description:
          '관계가 깊어지거나 안정되는 흐름이에요. 반기에 시작된 인연이라면 갈수록 더 단단해질 수 있어요.',
      },
    ],
  },
  todayFortune: {
    overall: {
      summary: '오늘 운세 한 줄 정리',
      description: '자세한 운세 (2~3줄)',
    },
    love: {
      summary: '오늘의 연애운 한 줄 정리',
      description: '자세한 연애운 풀이 (2~3줄정도)',
    },
    luckyItem: {
      summary: '행운아이템 한 줄 정리',
      description: '자세한 풀이 (2~3줄정도)',
    },
  },
  compatibility: [
    {
      name: '박서연',
      gender: '여',
      location: '서울시 마포',
      score: 92,
      strengths: ['대화 케미', '취향 일치', '편안함', '상호 성장', '신뢰감'],
      weaknesses: ['혼자만의 시간', '감정 표현 부족', '우유부단', '감정 기복', '고집'],
      strengthDetail:
        '말하지 않아도 서로의 감정을 잘 읽어내는 편이에요. 함께 있으면 자연스럽게 대화가 이어지고, 취향과 속도가 비슷해 같은 방향을 바라보는 느낌이 들어요. 상대방을 성장시켜주는 좋은 자극이 되는 관계예요.',
      weaknessDetail:
        '감정 표현이 서툰 편이라 가끔 오해가 생길 수 있어요. 둘 다 결정을 미루는 경향이 있어서 중요한 순간에 답답함을 느낄 수 있어요. 먼저 솔직하게 마음을 꺼내는 연습이 필요해요.',
    },
    {
      name: '최민재',
      gender: '여',
      location: '서울시 마포',
      score: 87,
      strengths: ['대화 케미', '취향 일치', '편안함', '상호 성장', '신뢰감'],
      weaknesses: ['혼자만의 시간', '감정 표현 부족', '우유부단', '감정 기복', '고집'],
      strengthDetail:
        '말하지 않아도 서로의 감정을 잘 읽어내는 편이에요. 함께 있으면 자연스럽게 대화가 이어지고, 취향과 속도가 비슷해 같은 방향을 바라보는 느낌이 들어요. 상대방을 성장시켜주는 좋은 자극이 되는 관계예요.',
      weaknessDetail:
        '감정 표현이 서툰 편이라 가끔 오해가 생길 수 있어요. 둘 다 결정을 미루는 경향이 있어서 중요한 순간에 답답함을 느낄 수 있어요. 먼저 솔직하게 마음을 꺼내는 연습이 필요해요.',
    },
    {
      name: '이준호',
      gender: '여',
      location: '서울시 마포',
      score: 76,
      strengths: ['대화 케미', '취향 일치', '편안함', '상호 성장', '신뢰감'],
      weaknesses: ['혼자만의 시간', '감정 표현 부족', '우유부단', '감정 기복', '고집'],
      strengthDetail:
        '말하지 않아도 서로의 감정을 잘 읽어내는 편이에요. 함께 있으면 자연스럽게 대화가 이어지고, 취향과 속도가 비슷해 같은 방향을 바라보는 느낌이 들어요. 상대방을 성장시켜주는 좋은 자극이 되는 관계예요.',
      weaknessDetail:
        '감정 표현이 서툰 편이라 가끔 오해가 생길 수 있어요. 둘 다 결정을 미루는 경향이 있어서 중요한 순간에 답답함을 느낄 수 있어요. 먼저 솔직하게 마음을 꺼내는 연습이 필요해요.',
    },
  ],
  otherProfiles: [
    { id: 'abc123', name: '박서연', gender: '여', location: '서울시 마포' },
    { id: 'def456', name: '최민재', gender: '남', location: '인천시 연수' },
    { id: 'ghi789', name: '이준호', gender: '남', location: '대전시 서구' },
  ],
}
