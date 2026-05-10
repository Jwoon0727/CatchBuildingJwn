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
        badge="HOT"
        properties={[
          { id: 1, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop", name: "현대 스타일 주택", location: "강남구", price: "2.2억", discount: "25%" },
          { id: 2, image: "https://images.unsplash.com/photo-1570129477492-45201003abed?w=400&h=300&fit=crop", name: "트렌디 아파트", location: "서초구", price: "3.5억", discount: "15%" },
          { id: 3, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop", name: "럭셔리 펜트하우스", location: "용산구", price: "5.8억", discount: "20%" },
          { id: 4, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop", name: "모던 오피스텔", location: "마포구", price: "1.8억", discount: "18%" },
        ]}
      />
      <PropertySection 
        title="거래된 신규 상품" 
        properties={[
          { id: 5, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop", name: "강남 신축 빌라", location: "강남구", price: "4.2억", badge: "예약" },
          { id: 6, image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop", name: "서초 오피스", location: "서초구", price: "6.5억", badge: "거래완료" },
          { id: 7, image: "https://images.unsplash.com/photo-149964386051-1e0e80ef47d4?w=400&h=300&fit=crop", name: "용산 상가건물", location: "용산구", price: "7.2억", badge: "거래완료" },
          { id: 8, image: "https://images.unsplash.com/photo-1522531914681-8146cf6f4be1?w=400&h=300&fit=crop", name: "마포 주상복합", location: "마포구", price: "5.5억", badge: "예약" },
        ]}
      />
      <PropertySection 
        title="업데이트 매물" 
        properties={[
          { id: 9, image: "https://images.unsplash.com/photo-1540932239986-310128078caf?w=400&h=300&fit=crop", name: "강동 신규 아파트", location: "강동구", price: "2.9억" },
          { id: 10, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop", name: "송파 주택", location: "송파구", price: "3.1억" },
          { id: 11, image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop", name: "노원 빌라", location: "노원구", price: "2.5억" },
          { id: 12, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop", name: "도봉 주택", location: "도봉구", price: "2.3억" },
        ]}
      />
      <CommunitySection />
      <GovernmentSupportSection />
      <AppPromotion />
      <InterestRateSection />
      <Footer />
    </main>
  )
}
