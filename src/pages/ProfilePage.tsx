import { useParams } from 'react-router-dom'
import { mockProfile } from '../data/mockProfile'
import ProfileHeader from '../components/profile/ProfileHeader'
import SectionTabs from '../components/profile/SectionTabs'
import Manseryuk from '../components/profile/Manseryuk'
import OhaengDistribution from '../components/profile/OhaengDistribution'
import LoveSection from '../components/profile/LoveSection'
import TodayFortuneSection from '../components/profile/TodayFortuneSection'
import CompatibilitySection from '../components/profile/CompatibilitySection'
import OtherProfiles from '../components/profile/OtherProfiles'

export default function ProfilePage() {
  const { id: _id } = useParams<{ id: string }>()

  // TODO: fetch from SheetDB using _id
  const profile = mockProfile

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="max-w-107.5 mx-auto min-h-screen">
        <div className="px-4 pt-6">
          <ProfileHeader profile={profile} />
        </div>

        <SectionTabs ohaeng={profile.mainOhaeng} />

        <div className="px-4 pb-16 space-y-6">
          {/* 사주팔자 */}
          <section id="saju">
            <p className="text-[14px] font-bold text-[#222] pt-5 mb-2.5">사주해석</p>
            <div className="space-y-3">
              <Manseryuk pillars={profile.pillars} />
              <OhaengDistribution count={profile.ohaengCount} />

              {/* 일간 */}
              <div className="bg-white rounded-2xl px-[18px] py-[16px] space-y-[11px]">
                <p className="text-[12px] font-medium text-[#aaa]">일간</p>
                <div className="bg-[#f9f9f9] rounded-xl flex items-center gap-3 px-[14px] py-[15px]">
                  <div className="bg-[#c8d9e6] rounded-[4px] p-1 shrink-0">
                    <span className="text-[32px] font-bold text-[#2f4156] leading-[32px]">
                      {profile.dayMaster.character}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[13px] font-bold text-[#222]">{profile.dayMaster.name}</p>
                    <p className="text-[12px] text-[#aaa]">{profile.dayMaster.subtitle}</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#444] leading-[22px]">
                  {profile.dayMaster.description}
                </p>
              </div>

              {/* 기본 성격 */}
              <div className="bg-white rounded-2xl px-[18px] py-[16px] space-y-2">
                <p className="text-[12px] font-medium text-[#aaa] mb-2">기본 성격</p>
                {[
                  { label: '타고난 기질', ...profile.personality.innate },
                  { label: '강점', ...profile.personality.strength },
                  { label: '약점', ...profile.personality.weakness },
                ].map((item) => (
                  <div key={item.label} className="bg-[#f9f9f9] rounded-xl px-[14px] py-3 space-y-1">
                    <p className="text-[11px] font-bold text-[#e24f63]">{item.label}</p>
                    <p className="text-[14px] font-bold text-[#222]">{item.title}</p>
                    <p className="text-[13px] text-[#666] leading-[21px] pt-px">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 연애운 */}
          <section id="love" className="space-y-2.5">
            <LoveSection
              love={profile.love}
              yearlyLove={profile.yearlyLove}
            />
          </section>

          {/* 직업운 */}
          <section id="career">
            <div className="bg-white rounded-2xl px-4.5 py-4">
              <p className="text-[12px] font-medium text-[#aaa] mb-2">직업운</p>
              <p className="text-[13px] text-[#aaa]">준비 중이에요</p>
            </div>
          </section>

          {/* 세운/월운 */}
          <section id="fortune">
            <TodayFortuneSection todayFortune={profile.todayFortune} />
          </section>

          {/* 궁합 TOP 3 */}
          <CompatibilitySection compatibility={profile.compatibility} />

          {/* 다른 참가자들 */}
          <OtherProfiles profiles={profile.otherProfiles} />
        </div>
      </div>
    </div>
  )
}
