'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, ChevronDown, AlignJustify, ArrowLeft, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import MapSearchSidebar from '@/components/map-search-sidebar'
import MapSearchFilters from '@/components/map-search-filters'
import PropertyMap from '@/components/property-map'

const propertyTypeChips = [
  { id: 'all', label: '전체' },
  { id: 'sanggajutaek', label: '상가주택' },
  { id: 'dandokjutaek', label: '단독주택' },
  { id: 'gunseangbilding', label: '근생빌딩' },
  { id: 'kkomabuildung', label: '꼬마빌딩' },
  { id: 'toji', label: '토지' },
]

const ACCENT = 'bg-[#2567E7] text-white'
const INACTIVE = 'bg-[#F3F4F6] text-foreground'

const initialRecent = [
  { id: 1, name: '힐스테이트백련산4차' },
  { id: 2, name: '한솔인피니티' },
  { id: 3, name: '로얄팰리스' },
  { id: 4, name: '정자아이파크' },
]

export default function MapSearchPage() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)
  const [activeChip, setActiveChip] = useState('all')
  const [activeTab, setActiveTab] = useState<'results' | 'recent'>('results')
  const [recentItems, setRecentItems] = useState(initialRecent)

  const searchResults = [
    { id: 1, image: '/building/building_type04.png', location: '서울 강남구 역삼동', title: '강남역 초역세권 오피스텔', price: '14.5억', discount: '수익률 5.9%' },
    { id: 2, image: '/building/building_type04.png', location: '서울 강남구 역삼동', title: '강남역 초역세권 오피스텔', price: '14.5억', discount: '수익률 5.9%' },
    { id: 3, image: '/building/building_type04.png', location: '서울 강남구 역삼동', title: '강남역 초역세권 오피스텔', price: '14.5억', discount: '수익률 5.9%' },
    { id: 4, image: '/building/building_type04.png', location: '서울 강남구 역삼동', title: '강남역 초역세권 오피스텔', price: '14.5억', discount: '수익률 5.9%' },
  ]

  return (
    <div className="font-pretendard">
      {/* ───── 모바일 레이아웃 (lg 미만) ───── */}
      <div className="flex h-screen flex-col overflow-hidden lg:hidden">

        {/* 상단 패널 */}
        <div className="shrink-0 bg-white shadow-sm">
          {/* 모바일 헤더 */}
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/search" aria-label="뒤로가기">
              <ArrowLeft className="size-5 text-foreground" strokeWidth={2} />
            </Link>
            <span className="text-base font-bold text-foreground">검색</span>
            <button type="button" aria-label="메뉴">
              <Menu className="size-5 text-foreground" strokeWidth={2} />
            </button>
          </div>

          {/* 검색바 */}
          <div className="flex items-center gap-2 px-4 pb-3">
            <button
              type="button"
              aria-label="필터"
              className="flex shrink-0 items-center justify-center rounded-lg border border-border bg-white p-2.5"
            >
              <SlidersHorizontal className="size-4 text-foreground" strokeWidth={2} />
            </button>
            <div className="relative flex-1">
              <input
                type="text"
                defaultValue="부산"
                placeholder="지역, 건물명, 도로명 주소 검색"
                className="w-full rounded-lg border border-border bg-white py-2.5 pl-4 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <Button className="shrink-0 rounded-lg bg-[#2567E7] px-4 text-sm text-white hover:bg-[#2567E7]/90">
              검색
            </Button>
          </div>

          {/* 탭: 검색결과 | 최근조회 */}
          <div className="flex border-b border-border">
            {(['results', 'recent'] as const).map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-[#2567E7] text-[#2567E7]'
                    : 'text-muted-foreground'
                }`}
              >
                {tab === 'results' ? `검색결과 ${searchResults.length}` : '최근조회'}
              </button>
            ))}
          </div>

          {/* 검색결과 탭일 때만 칩·결과수 표시 */}
          {activeTab === 'results' && (
            <>
              <div className="flex gap-2 overflow-x-auto px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {propertyTypeChips.map(chip => (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => setActiveChip(chip.id)}
                    className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeChip === chip.id ? ACCENT : INACTIVE}`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-bold text-foreground">
                  부산 매물 결과 <span className="text-[#2567E7]">8건</span>
                </span>
                <button className="flex items-center gap-1 text-sm text-foreground">
                  추천순 <ChevronDown className="size-4" strokeWidth={2} />
                </button>
              </div>
            </>
          )}
        </div>

        {/* 검색결과 탭: 지도 */}
        {activeTab === 'results' && (
          <div className="relative flex flex-1 flex-col">
            <PropertyMap selectedId={selectedProperty} onMarkerClick={setSelectedProperty} />
            <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
              <Link
                href="/search"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white shadow-lg"
              >
                <AlignJustify className="size-4" strokeWidth={2} aria-hidden />
                목록보기
              </Link>
            </div>
          </div>
        )}

        {/* 최근조회 탭: 텍스트 목록 */}
        {activeTab === 'recent' && (
          <div className="flex-1 overflow-y-auto bg-white">
            {recentItems.length === 0 ? (
              <p className="py-20 text-center text-sm text-muted-foreground">최근 조회 기록이 없습니다.</p>
            ) : (
              recentItems.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b border-border px-4 py-4">
                  <span className="text-sm text-foreground">{item.name}</span>
                  <button
                    type="button"
                    aria-label="삭제"
                    onClick={() => setRecentItems(prev => prev.filter(r => r.id !== item.id))}
                    className="ml-4 text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-4" strokeWidth={2} />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* ───── PC 레이아웃 (lg 이상) ───── */}
      <div className="hidden lg:block">
        <Header />
        <div className="min-h-screen bg-background pt-0">
          <div className="flex h-[calc(100vh-8rem)]">
            {/* Left Sidebar */}
            <MapSearchSidebar
              results={searchResults}
              selectedId={selectedProperty}
              onSelect={setSelectedProperty}
            />
            {/* Right Side */}
            <div className="flex flex-1 flex-col">
              {/* Search Bar */}
              <div className="border-b border-border bg-white px-6 py-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="지역, 건물명, 도로명 주소 검색"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <Button className="bg-[#2567E7] px-5 text-white hover:bg-[#2567E7]">검색</Button>
                  <button className="rounded-lg border border-border p-2 px-5 transition-colors hover:bg-secondary">
                    <Menu size={20} className="text-foreground" />
                  </button>
                </div>
              </div>
              <MapSearchFilters />
              <PropertyMap selectedId={selectedProperty} onMarkerClick={setSelectedProperty} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
