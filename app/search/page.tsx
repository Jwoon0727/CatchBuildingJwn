'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Search, Map, ChevronDown,
  RotateCcw, ChevronLeft, Menu, X, History,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import Header from '@/components/header'
import SearchSidebar from '@/components/search-sidebar'
import SearchResultCard from '@/components/search-result-card'

/** 모바일 검색바 필터 버튼 (`public/` 기준, 원하는 경로로 수정) */
const MOBILE_SEARCH_FILTER_ICON_SRC = '/icon/filter.svg'

/* ── 필터 데이터 ── */
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

function formatEok(v: number) {
  const e = v / 10
  return Number.isInteger(e) ? `${e}` : e.toFixed(1)
}

const initialHistory = [
  {
    id: 1, image: '/building/building_type04.png', title: '강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평', date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
  {
    id: 2, image: '/building/building_type04.png', title: '강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평', date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
  {
    id: 3, image: '/building/building_type04.png', title: '강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평', date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
]

const SEARCH_PAGE_SIZE = 2

const searchResults = [
  {
    id: 1,
    image: '/building/building_type04.png',
    title: '1-강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평',
    date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
  {
    id: 2,
    image: '/building/building_type04.png',
    title: '2-강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평',
    date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
  {
    id: 3,
    image: '/building/building_type04.png',
    title: '3-강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평',
    date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
  {
    id: 4,
    image: '/building/building_type04.png',
    title: '4-강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평',
    date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
  {
    id: 5,
    image: '/building/building_type04.png',
    title: '5-강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평',
    date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
  {
    id: 6,
    image: '/building/building_type04.png',
    title: '6-강남역 초역세권 오피스텔',
    pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
    area: '대지 85평 연면적 · 210평',
    date: '사용승인일 2017년 08월 06일',
    views: 123, comments: 123, likes: 123,
    deposit: '평단가 2,131만', discount: '수익률 5.9%', price: '14.5억', badge: 'NEW',
  },
]

function SearchPagination({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}) {
  if (totalPages <= 1) return null
  const pageNumbersDesc = Array.from({ length: totalPages }, (_, i) => totalPages - i)
  return (
    <nav
      className="flex flex-wrap items-end justify-center gap-6 py-6"
      aria-label="페이지 네비게이션"
    >
      {pageNumbersDesc.map(n => (
        <button
          key={n}
          type="button"
          onClick={() => onPageChange(n)}
          aria-label={`${n}페이지`}
          aria-current={currentPage === n ? 'page' : undefined}
          className="flex flex-col items-center gap-1.5 px-1 pb-0.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#2567E7]/40 focus-visible:ring-offset-2"
        >
          <span
            className={
              currentPage === n ? 'text-[#2567E7]' : 'text-foreground/55 hover:text-foreground'
            }
          >
            {n}
          </span>
          <span
            className={`h-0.5 w-5 shrink-0 rounded-full transition-colors ${
              currentPage === n ? 'bg-[#2567E7]' : 'bg-transparent'
            }`}
            aria-hidden
          />
        </button>
      ))}
    </nav>
  )
}

export default function PropertySearchPage() {
  const [activeChip, setActiveChip] = useState('all')
  const [filterOpen, setFilterOpen] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [history, setHistory] = useState(initialHistory)
  const [pricePreset, setPricePreset] = useState<(typeof pricePresets)[number]['id']>('all')
  const [priceRange, setPriceRange] = useState<number[]>([15, 120])
  const [regionId, setRegionId] = useState('all')
  const [searchPage, setSearchPage] = useState(() => {
    const tp = Math.ceil(searchResults.length / SEARCH_PAGE_SIZE)
    return tp > 0 ? tp : 1
  })

  const totalSearchPages = Math.ceil(searchResults.length / SEARCH_PAGE_SIZE)
  const currentSearchPage =
    totalSearchPages > 0 ? Math.min(Math.max(1, searchPage), totalSearchPages) : 1
  const paginatedSearchResults =
    totalSearchPages > 0
      ? searchResults.slice(
          (currentSearchPage - 1) * SEARCH_PAGE_SIZE,
          currentSearchPage * SEARCH_PAGE_SIZE,
        )
      : []
  useEffect(() => {
    if (totalSearchPages > 0 && searchPage > totalSearchPages) {
      setSearchPage(totalSearchPages)
    }
  }, [searchPage, totalSearchPages])

  return (
    <div className="font-pretendard antialiased [&_*]:font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_input]:placeholder:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard [&_option]:font-pretendard [&_label]:font-pretendard [&_a]:font-pretendard">
      {/* ───── 모바일 레이아웃 (lg 미만) ───── */}
      <div className="flex min-h-screen flex-col bg-white lg:hidden">
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

        {/* 모바일 검색바 — 필터+입력 하나의 카드 형태 */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-border bg-white px-1 py-1 focus-within:ring-2 focus-within:ring-primary/40">
              <button
                type="button"
                aria-label="필터"
                onClick={() => setFilterOpen(true)}
                className="flex shrink-0 items-center justify-center rounded-lg p-2 text-foreground hover:bg-muted/50"
              >
                <img
                  src={MOBILE_SEARCH_FILTER_ICON_SRC}
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
            <Button className="h-11 shrink-0 rounded-xl bg-[#2567E7] px-4 text-sm text-white hover:bg-[#2567E7]/90">
              검색
            </Button>
            <button
              type="button"
              aria-label="최근 검색"
              onClick={() => setHistoryOpen(true)}
              className="h-11 flex shrink-0 items-center justify-center rounded-xl border border-border bg-white p-4"
            >
              <History className="size-5 text-[#2567E7]" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* 매물 유형 칩 */}
        <div className="flex gap-2 overflow-x-auto px-4 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

        {/*모바일  결과 헤더 */}
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-lg font-bold text-foreground">
            부산 매물 결과 <span className="text-[#2567E7]">{searchResults.length}건</span>
          </h2>
          <button className="border border-border rounded-[4px] px-2 py-1 flex items-center gap-1 text-sm text-foreground">
            추천순 <ChevronDown className="size-4" strokeWidth={2} />
          </button>
        </div>

        {/* 결과 목록 */}
        <div className="flex-1 px-4">
          {paginatedSearchResults.map(result => (
            <SearchResultCard key={result.id} result={result} />
          ))}
          <SearchPagination
            totalPages={totalSearchPages}
            currentPage={currentSearchPage}
            onPageChange={setSearchPage}
          />
        </div>

        {/* 하단 플로팅 지도 버튼 */}
        <div className="pointer-events-none sticky bottom-6 flex justify-center pb-6 pt-2">
          <Link
            href="/map-search"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white shadow-lg"
          >
            <Map className="size-5" strokeWidth={2} aria-hidden />
            지도보기
          </Link>
        </div>

        {/* ── 모바일 최근 기록 ── */}
        {historyOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-white">
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3">
              <button type="button" aria-label="닫기" onClick={() => setHistoryOpen(false)}>
                <X className="size-5 text-foreground" strokeWidth={2} />
              </button>
              <span className="text-base font-bold text-foreground">최근 기록</span>
              <div className="size-5" />
            </div>

            {/* 목록 */}
            <div className="px-4 flex-1 overflow-y-auto">
              {history.length === 0 ? (
                <p className="py-20 text-center text-sm text-muted-foreground">최근 기록이 없습니다.</p>
              ) : (
                history.map(item => (
                  <div key={item.id} className="relative border-b border-border">
                    {/* X 삭제 버튼 */}
                    <button
                      type="button"
                      aria-label="기록 삭제"
                      onClick={() => setHistory(prev => prev.filter(h => h.id !== item.id))}
                      className="absolute -right-1.5 top-5 z-10 flex size-5 items-center justify-center text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-4" strokeWidth={2} />
                    </button>
                    <SearchResultCard result={item} />
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ── 모바일 필터 드로어 ──-------------------------------------------------------------------------------- */}
        {filterOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-white">
            {/* 드로어 헤더 */}
            <div className="flex items-center justify-between  border-border px-4 py-3">
              <button
                type="button"
                aria-label="닫기"
                onClick={() => setFilterOpen(false)}
              >
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

            {/* 드로어 본문 — 스크롤 */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">

              {/* 가격 */}
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
                    min={0} max={300} step={1}
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

              {/* 거래 유형 */}
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

              {/* 지역 */}
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

              {/* 투자 포인트 */}
              <section className="border-t border-border pt-6">
                <h3 className="mb-3 text-sm font-bold text-foreground">#투자 포인트</h3>
                <div className="flex flex-wrap gap-2">
                  {hashtags.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      className={`rounded-full px-3 py-2.5 text-sm ${INACTIVE}`}
                    >
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
        <div className="min-h-screen bg-background pt-5">
          <div className="mx-auto max-w-[77rem] px-1 py-1">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start lg:gap-x-0 lg:gap-y-0">
              <div><SearchSidebar /></div>
              <div className="min-w-0">
                <div className="sticky top-16 z-30 mb-6 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        type="text"
                        placeholder="지역, 건물명, 도로명 주소 검색"
                        className="w-full rounded-lg border border-border bg-white py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <Button className="h-11 rounded-[8px] bg-[#2567E7] px-5 text-white hover:bg-primary/90">검색</Button>
                    <Link
                      href="/map-search"
                      className="h-11 inline-flex items-center justify-center rounded-lg border border-border bg-white p-2 px-5 transition-colors hover:bg-muted/40"
                      aria-label="지도로 보기"
                    >
                      <Map className="size-5 text-[#2563EB]" strokeWidth={2} aria-hidden />
                    </Link>
                  </div>
                </div>
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-foreground">
                    부산 매물 결과 <span className="text-[#2567E7]">{searchResults.length}건</span>
                  </h2>
                  <button className="flex items-center gap-1 text-sm text-black hover:text-foreground">
                    추천순 <ChevronDown size={25} />
                  </button>
                </div>
                <div className="overflow-hidden rounded-lg bg-white">
                  {paginatedSearchResults.map(result => (
                    <SearchResultCard key={result.id} result={result} />
                  ))}
                  <SearchPagination
                    totalPages={totalSearchPages}
                    currentPage={currentSearchPage}
                    onPageChange={setSearchPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
