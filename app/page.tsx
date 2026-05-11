import Header from '@/components/header'
import Hero from '@/components/hero'
import CategoryNav from '@/components/category-nav'
import PropertySection from '@/components/property-section'
import CommunitySection from '@/components/community-section'
import GovernmentSupportSection from '@/components/government-support-section'
import InterestRateSection from '@/components/interest-rate-section'
import AppPromotion from '@/components/app-promotion'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <CategoryNav />
      <PropertySection
        title="추천매물"
        hideBottomBorder
        properties={[
          {
            id: 1,
            image: '/building/building_type01.png',
            title: '역삼동 대로변 근생빌딩',
            location: '서울 강남구 역삼동 · 15층',
            specs: {
              rooms: '근생빌딩 지하1층/지상 6층',
              size: '대지 85평 연면적 · 210평',
            },
            rating: 5,
            deposit: '평단가 2,131만',
            discountRate: '수익률 5.9%',
            price: '22억',
            agent: {
              name: '김부동산',
              avatar:
                '/building/perso.jpg',
            },
            recommendationReason:
              '대로변 코너 입지, 1층 프랜차이즈 입점으로 공실 리스크 낮음',
          },
          {
            id: 2,
            image: '/building/building_type01.png',
            title: '서초동 역세권 오피스텔',
            location: '서울 서초구 서초동 · 12층',
            specs: {
              rooms: '준오피스텔 지하2층/지상 14층',
              size: '대지 62평 연면적 · 168평',
            },
            rating: 5,
            deposit: '평단가 1,895만',
            discountRate: '수익률 5.2%',
            price: '18.5억',
            agent: {
              name: '김부동산',
              avatar:
                '/building/perso.jpg',
            },
            recommendationReason:
              '2호선·신분당선 더블역세권, 주변 대형 오피스 밀집으로 임대 수요 안정적입니다.',
          },
          {
            id: 3,
            image: '/building/building_type01.png',
            title: '용산 해맞이로 상가주택',
            location: '서울 용산구 한강로동 · 4층',
            specs: {
              rooms: '상가주택 지상 4층',
              size: '대지 48평 연면적 · 132평',
            },
            rating: 4,
            deposit: '평단가 2,340만',
            discountRate: '수익률 6.1%',
            price: '15.2억',
            agent: {
              name: '김부동산',
              avatar:
                '/building/perso.jpg',
            },
            recommendationReason:
              '1층 상가 안정 임차 완료, 주거층 분리로 관리 용이합니다.',
          },
          {
            id: 4,
            image: '/building/building_type01.png',
            title: '마포 상수동 신축 근린생활시설',
            location: '서울 마포구 상수동 · B1~3F',
            specs: {
              rooms: '근린생활시설 지하1층/지상 3층',
              size: '대지 72평 연면적 · 195평',
            },
            rating: 5,
            deposit: '평단가 1,720만',
            discountRate: '수익률 5.5%',
            price: '19.8억',
            agent: {
              name: '김부동산',
              avatar:
                '/building/perso.jpg',
            },
            recommendationReason:
              '홍대·합정 상권 인접, 카페·미식 상가 밀집으로 유동 인구가 많습니다.',
          },
        ]}
      />
      <PropertySection
        title="지역별 신규 매물"
        properties={[5, 6, 7, 8].map((id) => ({
          id,
          image: '/building/building_type02.png',
          title: '강남역 초역세권 오피스텔',
          location: '서울 강남구 역삼동 · 15층',
          specs: {
            rooms: '근생빌딩 지하1층/지상 6층',
            size: '대지 85평 연면적 · 210평',
          },
          rating: 5,
          deposit: '평단가 2,131만',
          discountRate: '수익률 5.9%',
          price: '14.5억',
          badge: 'NEW',
      
          recommendationReason:
            '대로변 코너 입지, 1층 프랜차이즈 입점으로 공실 리스크 낮음',
        }))}
      />
      <PropertySection
        title="검증 매물 모음"
        className="bg-[#F8F9FB]"
        showFilterTabs={false}
        properties={[9, 10, 11, 12].map((id) => ({
          id,
          image: '/building/building_type01.png',
          title: '역삼동 대로변 근생빌딩',
          location: '서울 강남구 역삼동 · 15층',
          specs: {
            rooms: '근생빌딩 지하1층/지상 6층',
            size: '대지 85평 연면적 · 210평',
          },
          rating: 5,
          deposit: '평단가 2,131만',
          discountRate: '수익률 5.9%',
          price: '22억',
          agent: {
            name: '김부동산',
            avatar: '/building/perso.jpg',
          },
          recommendationReason:
            '대로변 코너 입지, 1층 프랜차이즈 입점으로 공실 리스크 낮음',
        }))}
      />
      <CommunitySection />
      <GovernmentSupportSection />
      <AppPromotion />
      <InterestRateSection />
      <Footer />
    </main>
  )
}
