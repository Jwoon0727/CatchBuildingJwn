'use client'

import { useState } from 'react'
import { ChevronLeft, Menu, Bookmark } from 'lucide-react'
import Header from '@/components/header'
import BuildingSearchSidebar from '@/components/building-search/building-search-sidebar'
import BuildingSearchContent from '@/components/building-search/building-search-content'

const menuItems = [
  { id: 'url', label: 'URL 조회' },
  { id: 'building', label: '건물 검색' },
  { id: 'blog', label: '블로그 분석' },
  { id: 'history', label: '이용 내역' },
]

const bookmarks = [
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
]

export default function BuildingSearchPage() {
  const [activeMenu, setActiveMenu] = useState('url')

  return (
    <>
      {/* 데스크톱 헤더 */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* 모바일 헤더 */}
      <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-border">
        <div className="flex items-center justify-between px-4 py-3.5">
          <button type="button" aria-label="뒤로가기" onClick={() => window.history.back()}>
            <ChevronLeft size={22} strokeWidth={2} />
          </button>
          <span className="text-base font-bold text-foreground">건물 검색</span>
          <button type="button" aria-label="메뉴">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="min-h-screen bg-background pb-16">
        {/* Mobile: 수평 탭 네비게이션 */}
        <div className="lg:hidden sticky top-[53px] z-10 border-b border-border bg-white">
          <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveMenu(item.id)}
                className={`shrink-0 px-3 py-3.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeMenu === item.id
                    ? 'border-[#2567E7] font-bold text-[#2567E7]'
                    : 'border-transparent text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-[77rem] mx-auto px-4">
          <div className="flex gap-8 lg:pt-6">
            {/* 좌측 사이드바 - 데스크톱 전용 */}
            <div className="hidden lg:block">
              <BuildingSearchSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>

            {/* 중앙 콘텐츠 */}
            <BuildingSearchContent activeMenu={activeMenu} />

            {/* 우측 북마크 사이드바 - 데스크톱 전용 */}
            <div className="w-56 flex-shrink-0 hidden lg:block">
              <div className="bg-white rounded-xl border border-border p-4 sticky top-32">
                <h3 className="font-bold text-foreground mb-4">
                  북마크 목록 <span className="text-[#2567E7]">8</span>
                </h3>
                <div className="space-y-4">
                  {bookmarks.map((item, index) => (
                    <div key={index} className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground leading-tight">{item.address}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.area} · {item.floor}</p>
                      </div>
                      <Bookmark size={16} className="text-amber-400 fill-amber-400 flex-shrink-0 mt-0.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
