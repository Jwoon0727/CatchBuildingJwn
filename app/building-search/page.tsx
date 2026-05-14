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
    <div className="font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard">
      {/* 데스크톱 헤더 */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* 모바일 헤더 */}
      <div className="sticky top-0 z-50 border-border bg-white lg:hidden">
        <div className="flex items-center gap-2 px-4 py-3.5">
          <button type="button" aria-label="뒤로가기" onClick={() => window.history.back()}>
            <ChevronLeft className="size-7 text-foreground" strokeWidth={2} />
          </button>
          <span className="min-w-0 truncate text-lg font-bold text-foreground">건물 검색</span>
          <button type="button" aria-label="메뉴" className="ml-auto shrink-0">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="min-h-screen bg-background pb-16">
        {/* Mobile: 수평 탭 네비게이션 */}
        <div className="sticky top-[53px] z-10 border-border bg-white lg:hidden">
          <div className="flex overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveMenu(item.id)}
                className={`shrink-0 whitespace-nowrap border-b-2 px-3 py-3.5 text-sm transition-colors ${
                  activeMenu === item.id
                    ? 'border-[#2567E7] font-semibold text-[#333333]'
                    : 'border-transparent text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[77rem] px-4">
          <div className="flex gap-8 lg:pt-6">
            {/* 좌측 사이드바 - 데스크톱 전용 */}
            <div className="hidden lg:block">
              <BuildingSearchSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>

            {/* 중앙 콘텐츠 */}
            <BuildingSearchContent activeMenu={activeMenu} />

            {/* 우측 북마크 사이드바 - 데스크톱 전용 */}
            <div className="hidden w-56 flex-shrink-0 lg:block">
              <div className="sticky top-32 rounded-xl border border-border bg-white p-4">
                <h3 className="mb-4 font-bold text-foreground">
                  북마크 목록 <span className="text-[#2567E7]">8</span>
                </h3>
                <div className="space-y-4">
                  {bookmarks.map((item, index) => (
                    <div key={index} className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium leading-tight text-foreground">{item.address}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.area} · {item.floor}
                        </p>
                      </div>
                      <Bookmark size={16} className="mt-0.5 flex-shrink-0 fill-amber-400 text-amber-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
