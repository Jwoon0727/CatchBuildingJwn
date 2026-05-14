'use client'

import { useState } from 'react'
import { Pencil, ChevronLeft, Menu } from 'lucide-react'
import Header from '@/components/header'
import MyPageSidebar from '@/components/my-page/my-page-sidebar'
import MyPageContent from '@/components/my-page/my-page-content'
import MyPageBookmarks from '@/components/my-page/my-page-bookmarks'
import MyPageSavedProperties from '@/components/my-page/my-page-saved-properties'
import MyPagePropertyAlerts from '@/components/my-page/my-page-property-alerts'
import MyPageSubscription from '@/components/my-page/my-page-subscription'
import MyPageCourses from '@/components/my-page/my-page-courses'
import MyPageSettings from '@/components/my-page/my-page-settings'

const menuItems = [
  { id: 'basic', label: '기본정보' },
  { id: 'properties', label: '찜한 매물' },
  { id: 'notifications', label: '매물 알림' },
  { id: 'subscription', label: '구독정보' },
  { id: 'courses', label: '수강 목록' },
  { id: 'settings', label: '알림설정' },
]

const actionBtnClass =
  'flex-1 rounded border border-[#BEDBFF] bg-white px-1 py-1.5 text-[11px] font-medium leading-tight text-[#2567E7] transition-colors hover:bg-[#BEDBFF]/30'

export default function MyPage() {
  const [activeMenu, setActiveMenu] = useState('basic')

  return (
    <>
      {/* 데스크톱 헤더 */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* 모바일 헤더 */}
      <div className="lg:hidden sticky top-0 z-50 bg-white  border-border">
        <div className="flex items-center gap-2 px-4 py-3.5">
          <button type="button" aria-label="뒤로가기" onClick={() => window.history.back()}>
            <ChevronLeft className="size-7 text-foreground" strokeWidth={2} />
          </button>
          <span className="text-xl font-bold text-foreground">마이페이지</span>
          <button type="button" aria-label="메뉴" className="ml-auto">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="min-h-screen bg-background pb-16">
        {/* Mobile: 수평 탭 네비게이션 */}
        <div className="lg:hidden sticky top-[53px] z-10 border-border bg-white">
          <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveMenu(item.id)}
                className={`shrink-0 px-3 py-3.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeMenu === item.id
                    ? 'border-[#2567E7] font-bold text-[#333333]'
                    : 'border-transparent text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        

        <div className="max-w-[77rem] mx-auto px-4">
          {/* Mobile: 프로필 카드 - 기본정보 탭에서만 표시 */}
        {/* ------------------------------------------------------------------------------------------------ */}

          <div
            className={`lg:hidden mt-4 mb-2 -mx-4 rounded-xl bg-white p-5 ${activeMenu !== 'basic' ? 'hidden' : ''}`}
          >
            <div className="mb-5 flex gap-3">
              <div className="relative shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold text-gray-800">
                  홍
                </div>
                <button
                  type="button"
                  aria-label="프로필 사진 변경"
                  className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#2567E7] shadow-sm ring-2 ring-white"
                >
                  <Pencil className="h-3 w-3 text-white" strokeWidth={2.5} />
                </button>
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-bold text-foreground mb-2">홍길동</span>
                  <span className="rounded-full bg-[#432DD7] px-2 py-1.5 mb-3.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                    BRONZE 1
                  </span>
                </div>
                <p className=" text-xs text-muted-foreground">카카오 계정으로 가입</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <button type="button" className={actionBtnClass}>게시글</button>
              <button type="button" className={actionBtnClass}>댓글</button>
              <button type="button" className={actionBtnClass}>구독하기</button>
            </div>
          </div>


        {/* ------------------------------------------------------------------------------------------------ */}

          <div className="flex gap-8 lg:pt-5">
            {/* 좌측 사이드바 - 데스크톱 전용 */}
            <div className="hidden lg:block">
              <MyPageSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>

            {/* 중앙 콘텐츠 */}
            {activeMenu === 'basic' && <MyPageContent />}
            {activeMenu === 'properties' && <MyPageSavedProperties />}
            {activeMenu === 'notifications' && <MyPagePropertyAlerts />}
            {activeMenu === 'subscription' && <MyPageSubscription />}
            {activeMenu === 'courses' && <MyPageCourses />}
            {activeMenu === 'settings' && <MyPageSettings />}

            {/* 우측 북마크 사이드바 - 데스크톱 전용 */}
            {(activeMenu === 'basic' || activeMenu === 'notifications' || activeMenu === 'subscription' || activeMenu === 'courses' || activeMenu === 'settings') && (
              <div className="hidden lg:block">
                <MyPageBookmarks />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
