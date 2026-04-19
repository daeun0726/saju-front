import { useParams } from 'react-router-dom'
import { mockProfile } from '../data/mockProfile'
import { ohaengTheme } from '../utils/ohaeng'
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
  const theme = ohaengTheme[profile.mainOhaeng]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-100.5 mx-auto bg-white min-h-screen">
        <div className="px-4 pt-6">
          <ProfileHeader profile={profile} />
        </div>

        <SectionTabs ohaeng={profile.mainOhaeng} />

        <div className="px-4 pb-16 space-y-6">
          {/* 사주팔자 */}
          <section id="saju">
            <p className="text-xs text-gray-400 pt-5 mb-3">사주해석</p>
            <div className="space-y-3">
              <Manseryuk pillars={profile.pillars} />
              <OhaengDistribution count={profile.ohaengCount} />

              {/* 일간 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-4">
                <p className="text-xs text-gray-400 mb-3">일간</p>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl ${theme.chipBg} flex items-center justify-center shrink-0`}
                  >
                    <span className={`text-2xl font-medium ${theme.chipText}`}>
                      {profile.dayMaster.character}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{profile.dayMaster.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{profile.dayMaster.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {profile.dayMaster.description}
                </p>
              </div>

              {/* 기본 성격 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-4">
                <p className="text-xs text-gray-400 mb-4">기본 성격</p>
                <div className="space-y-4">
                  {[
                    { label: '타고난 기질', ...profile.personality.innate },
                    { label: '강점', ...profile.personality.strength },
                    { label: '약점', ...profile.personality.weakness },
                  ].map((item, i) => (
                    <div key={item.label} className={i > 0 ? 'border-t border-gray-100 pt-4' : ''}>
                      <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 연애운 */}
          <section id="love">
            <p className="text-xs text-gray-400 mb-3">연애</p>
            <LoveSection
              love={profile.love}
              yearlyLove={profile.yearlyLove}
              ohaeng={profile.mainOhaeng}
            />
          </section>

          {/* 직업운 */}
          <section id="career">
            <p className="text-xs text-gray-400 mb-3">직업운</p>
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <p className="text-sm text-gray-400">준비 중이에요</p>
            </div>
          </section>

          {/* 세운/월운 */}
          <section id="fortune">
            <p className="text-xs text-gray-400 mb-3">오늘의 운세</p>
            <TodayFortuneSection todayFortune={profile.todayFortune} />
          </section>

          {/* 궁합 TOP 3 */}
          <CompatibilitySection
            compatibility={profile.compatibility}
            ohaeng={profile.mainOhaeng}
          />

          {/* 다른 참가자들 */}
          <OtherProfiles profiles={profile.otherProfiles} ohaeng={profile.mainOhaeng} />
        </div>
      </div>
    </div>
  )
}
