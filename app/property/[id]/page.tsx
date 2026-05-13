'use client'

import { use, useState, useEffect } from 'react'
import { ChevronLeft, Menu, Headset, Bell } from 'lucide-react'
import Header from '@/components/header'
import PropertyGallery from '@/components/property-detail/property-gallery'
import PropertyAgent from '@/components/property-detail/property-agent'
import PropertyAgentDetail from '@/components/property-detail/property-agent-detail'
import PropertyDetails from '@/components/property-detail/property-details'
import PropertyIncomeStructure from '@/components/property-detail/property-income-structure'
import PropertyBuildingInfo from '@/components/property-detail/property-building-info'
import PropertyDocuments from '@/components/property-detail/property-documents'
import PropertyDescription from '@/components/property-detail/property-description'
import PropertyReviews from '@/components/property-detail/property-reviews'
import PropertyRecommendations from '@/components/property-detail/property-recommendations'

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [showAlertModal, setShowAlertModal] = useState(false)

  useEffect(() => {
    setShowAlertModal(true)
  }, [])

  return (
    <>
      {/* 데스크톱 헤더 */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* 모바일 헤더 */}
      <div className="lg:hidden sticky top-0 z-50 bg-white border-border">
        <div className="flex items-center justify-between px-4 py-3.5">
          <button type="button" aria-label="뒤로가기" onClick={() => window.history.back()}>
            <ChevronLeft size={22} strokeWidth={2} />
          </button>
          <span className="text-base font-bold text-foreground">매물상세</span>
          <button type="button" aria-label="메뉴">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="min-h-screen bg-background lg:pt-4">
        {/* Breadcrumb - 데스크톱 전용 */}
        <div className="hidden lg:block mx-auto mb-4 max-w-[75rem] px-1">
          <nav className="text-md font-semibold text-black flex items-center gap-2">
            <span className="hover:text-foreground cursor-pointer">홈</span>
            <span className="text-black/50">&gt;</span>
            <span className="hover:text-foreground cursor-pointer">서울특별시</span>
            <span className="text-black/50">&gt;</span>
            <span className="hover:text-foreground cursor-pointer">강남구</span>
            <span className="text-black/50">&gt;</span>
            <span className="text-primary font-medium">역삼동</span>
          </nav>
        </div>

        <div className="mx-auto max-w-[75rem] px-4 lg:px-1 pb-28 lg:pb-16">
          {/* Main Layout: Content + Sticky Sidebar */}
          <div className="flex gap-6">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
              {/* Gallery */}
              <PropertyGallery />

              {/* Agent Detail Section */}
              <PropertyAgentDetail />



              {/* Property Details Table */}
              <PropertyDetails />

              {/* Income Structure */}
              <PropertyIncomeStructure />

              {/* Building Info */}
              <PropertyBuildingInfo />

              {/* Documents */}
              <PropertyDocuments />

              {/* Description */}
              <PropertyDescription />

              {/* Reviews */}
              <PropertyReviews />

              {/* Similar Properties */}
              <PropertyRecommendations />
            </div>

            {/* Right Sidebar - Sticky Agent Card */}
            <div className="hidden w-62 shrink-0 lg:block">
              <PropertyAgent />
            </div>
          </div>
        </div>
      </main>

      {/* 알림 설정 모달 */}
      {showAlertModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center font-pretendard [&_button]:font-pretendard">
          {/* 배경 딤 */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowAlertModal(false)}
          />
          {/* 모달 본체 */}
          <div className="relative z-10 mx-4 w-full max-w-[290px] rounded-2xl bg-white px-6 py-8 text-center shadow-xl font-pretendard [&_button]:font-pretendard">
            {/* 벨 아이콘 */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EBF1FD]">
              <Bell size={26} className="text-[#2567E7]" fill="#2567E7" strokeWidth={2} />
            </div>
            <h2 className="mb-2 text-lg font-bold text-foreground">알림 설정</h2>
            <p className="mb-1 text-sm font-medium text-foreground">
              1억 이상 떨어질시<br />카톡으로 바로 알려드릴게요!
            </p>
            <p className="mb-6 text-sm text-muted-foreground">원하실 때 언제든 알림을 끌 수 있어요.</p>
            <button
              type="button"
              onClick={() => setShowAlertModal(false)}
              className="mb-3 w-full rounded-xl bg-[#2567E7] py-3 text-base font-bold text-white"
            >
              알림받기
            </button>
            <button
              type="button"
              onClick={() => setShowAlertModal(false)}
              className="w-full rounded-xl border border-border py-3 text-base font-medium text-foreground"
            >
              나중에
            </button>
          </div>
        </div>
      )}

      {/* 모바일 전용 하단 고정 바 */}
      <div className="fixed bottom-0 left-2 right-2 z-50 lg:hidden">
        <div className="border-t border-border bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-base text-muted-foreground">매매가</p>
              <p className="text-xl font-bold text-[#2567E7]">13.5억원</p>
            </div>
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#2567E7] px-25 py-3.5 text-sm font-bold text-white"
            >
              <Headset size={18} strokeWidth={2} />
              상담하기
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
