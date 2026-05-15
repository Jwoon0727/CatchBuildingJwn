'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, AlignJustify, ChevronLeft, X, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
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
const CHECKBOX_STYLE =
  'border-input bg-[#F8F8F8] data-[state=checked]:border-[#2567E7] data-[state=checked]:bg-[#2567E7] data-[state=checked]:text-white'
const SLIDER_STYLE =
  '[&_[data-slot=slider-track]]:!bg-[#F8F8F8] [&_[data-slot=slider-range]]:!bg-[#2567E7] [&_[data-slot=slider-thumb]]:!border-[#2567E7] [&_[data-slot=slider-thumb]]:!bg-white'

const pricePresets = [
  { id: 'all', label: '전체' },
  { id: 'under10', label: '10억 이하' },
  { id: 'band10', label: '10억대' },
  { id: 'over20', label: '20억 이상' },
] as const

const transactionTypes = [
  { id: 'maemae', label: '매매' },
  { id: 'wolse', label: '월세' },
  { id: 'jeonse', label: '전세' },
]

const regions = [
  { id: 'all', label: '전체' },
  { id: 'haeundae', label: '해운대' },
  { id: 'gwangan', label: '광안리' },
  { id: 'seomun', label: '서면' },
  { id: 'songjeong', label: '송정' },
  { id: 'gijang', label: '기장' },
  { id: 'nampo', label: '남포' },
  { id: 'sentum', label: '센텀' },
]

const hashtags = ['즉시입주', '주차가능', '역세권', '수익형', '신축', '대로변']

function formatEok(v: number) {
  const e = v / 10
  return Number.isInteger(e) ? `${e}` : e.toFixed(1)
}

const initialRecent = [
  { id: 1, name: '힐스테이트백련산4차' },
  { id: 2, name: '한솔인피니티' },
  { id: 3, name: '로얄팰리스' },
  { id: 4, name: '정자아이파크' },
]

export default function MapSearchPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)
  const [activeChip, setActiveChip] = useState('all')
  const [activeTab, setActiveTab] = useState<'results' | 'recent'>('results')
  const [recentItems, setRecentItems] = useState(initialRecent)
  const [pricePreset, setPricePreset] = useState<(typeof pricePresets)[number]['id']>('all')
  const [priceRange, setPriceRange] = useState<number[]>([15, 120])
  const [regionId, setRegionId] = useState('all')

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
        <div className="shrink-0 bg-white mb-2">
          {/* 모바일 헤더 */}
          <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/" aria-label="뒤로가기">
            <ChevronLeft className="size-7 text-foreground" strokeWidth={2} />
          </Link>
          <span className="text-xl font-bold text-foreground">검색</span>
          <div className="min-w-0 flex-1" />
          <button type="button" aria-label="메뉴">
            <Menu className="size-5 text-foreground" strokeWidth={2} />
          </button>
          </div>

          {/* 검색바 — 필터+입력 공통 보더 */}
          <div className="flex items-center gap-2 px-4 pb-3">
            <div className="flex min-w-0 flex-1 items-center gap-1 rounded-xl border border-border bg-white px-1 py-1 focus-within:ring-2 focus-within:ring-primary/40">
              <button
                type="button"
                aria-label="필터"
                onClick={() => setFilterOpen(true)}
                className="flex shrink-0 items-center justify-center rounded-lg p-2 text-foreground hover:bg-muted/50"
              >
                <img
                  src="/icon/filter.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-5 object-contain"
                />
              </button>
              <input
                type="text"
                defaultValue="부산"
                placeholder="지역, 건물명, 도로명 주소 검색"
                className="min-w-0 flex-1 border-0 bg-transparent py-2 pr-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button className="h-11 shrink-0 rounded-[8px] bg-[#2567E7] px-4 py-3 text-sm text-white hover:bg-[#2567E7]/90">
              검색
            </Button>
          </div>

          {/* 탭: 검색결과 | 최근조회 */}
          <div className="flex mb-2 border-border">
            {(['results', 'recent'] as const).map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 text-base font-bold transition-colors ${
                  tab === 'recent'
                    ? activeTab === 'recent'
                      ? 'text-[#333333]'
                      : 'text-[#CCCCCC]'
                    : activeTab === 'recent'
                      ? 'text-[#CCCCCC]'
                      : 'text-[#333333]'
                } ${activeTab === tab ? 'border-b-2 border-[#2567E7]' : ''}`}
              >
                {tab === 'results' ? (
                  <>
                    검색결과{' '}
                    <span className={activeTab === 'results' ? 'text-[#2567E7]' : 'text-[#CCCCCC]'}>
                      {searchResults.length}
                    </span>
                  </>
                ) : (
                  '최근조회'
                )}
              </button>
            ))}
          </div>

          {/* 검색결과 탭일 때만 칩·결과수 표시 */}
          {activeTab === 'results' && (
            <>
              <div className="flex gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {propertyTypeChips.map(chip => (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => setActiveChip(chip.id)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${activeChip === chip.id ? ACCENT : INACTIVE}`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-lg font-bold text-foreground">
                  부산 매물 결과 <span className="text-[#2567E7]">8건</span>
                </span>
                <button className="border border-border rounded-[4px] px-2 py-1 flex items-center gap-1 text-sm text-foreground">
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
            <div className="pointer-events-none absolute bottom-6 left-1/2 z-[1000] -translate-x-1/2">
              <Link
                href="/search"
                className="mb-3 pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white shadow-lg"
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
                <div key={item.id} className="flex items-center justify-between  border-border px-5 py-5">
                  <span className="text-base font-medium text-foreground">{item.name}</span>
                  <button
                    type="button"
                    aria-label="삭제"
                    onClick={() => setRecentItems(prev => prev.filter(r => r.id !== item.id))}
                    className="ml-4 text-[#CCCCCC] hover:text-foreground"
                  >
                    <X className="size-4" strokeWidth={2} />
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* ── 모바일 필터 드로어 (검색 페이지와 동일) ── */}
        {filterOpen && (
          <div className="fixed inset-0 z-[2000] flex flex-col bg-white">
            <div className="flex items-center justify-between border-border px-4 py-3">
              <button type="button" aria-label="닫기" onClick={() => setFilterOpen(false)}>
                <X className="size-5 text-foreground" strokeWidth={2} />
              </button>
              <span className="text-base font-bold text-foreground">필터</span>
              <button
                type="button"
                aria-label="초기화"
                onClick={() => {
                  setPricePreset('all')
                  setPriceRange([15, 120])
                  setRegionId('all')
                }}
              >
                <RotateCcw className="size-5 text-foreground" strokeWidth={2} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 px-4 py-6">
              <section>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-foreground">가격</h3>
                  <span className="text-xs text-muted-foreground">예산 기준</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {pricePresets.map(p => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPricePreset(p.id)}
                      className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${pricePreset === p.id ? ACCENT : INACTIVE}`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
                <div className={`mb-2 px-0.5 ${SLIDER_STYLE}`}>
                  <Slider
                    min={0}
                    max={300}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    minStepsBetweenThumbs={1}
                    className="py-2"
                    aria-label="가격 범위"
                  />
                </div>
                <p className="text-sm font-medium text-[#2567E7]">
                  {formatEok(priceRange[0])}억원 ~ {formatEok(priceRange[1])}억원
                </p>
              </section>

              <section className="border-t border-border pt-6">
                <h3 className="mb-3 text-sm font-bold text-foreground">거래 유형</h3>
                <div className="space-y-3">
                  {transactionTypes.map(t => (
                    <label key={t.id} className="flex cursor-pointer items-center gap-3">
                      <Checkbox defaultChecked={t.id === 'wolse'} className={CHECKBOX_STYLE} />
                      <span className="text-sm text-foreground">{t.label}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="border-t border-border pt-6">
                <h3 className="mb-3 text-sm font-bold text-foreground">지역</h3>
                <div className="flex flex-wrap gap-2">
                  {regions.map(r => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRegionId(r.id)}
                      className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${regionId === r.id ? ACCENT : INACTIVE}`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </section>

              <section className="border-t border-border pt-6">
                <h3 className="mb-3 text-sm font-bold text-foreground">#투자 포인트</h3>
                <div className="flex flex-wrap gap-2">
                  {hashtags.map(tag => (
                    <button key={tag} type="button" className={`rounded-full px-3 py-2.5 text-sm ${INACTIVE}`}>
                      #{tag}
                    </button>
                  ))}
                </div>
              </section>
            </div>
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
                  <Button className="h-11 shrink-0 rounded-[8px] bg-[#2567E7] px-6 py-3 text-sm text-white hover:bg-[#2567E7]/90">
                    검색
                  </Button>
                  <button className="rounded-lg border border-border p-2 px-5 py-3 transition-colors hover:bg-secondary">
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
