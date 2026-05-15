'use client'

import { useEffect, useState } from 'react'
import { ChevronRight, X, Bookmark, Map } from 'lucide-react'

interface BuildingSearchContentProps {
  activeMenu: string
}

interface MobileBookmarkRow {
  address: string
  area: string
  floor: string
}

/** 모바일 전체화면 북마크 목록 (데모 데이터) */
const MOBILE_BOOKMARK_LIST_ITEMS: MobileBookmarkRow[] = Array.from({ length: 8 }, () => ({
  address: '부산광역시 동래구 사직동 153-29',
  area: '492.4m²',
  floor: '145.m²',
}))

interface HistoryListItem {
  type: string
  address: string
  url: string
  date: string
  price: string
  /** 타입 뱃지 배경 (`#2567E7`, `rgb(...)`, CSS 변수 등) */
  typeBadgeBg: string
  /** 타입 뱃지 글자색 (생략 시 기본 글자색) */
  typeBadgeColor?: string
}

const buildingDetails = [
  { label: '법정동명', value: '부산광역시 동래구 사직동' },
  { label: '지번', value: '153-29' },
  { label: '지번 주소', value: '부산광역시 동래구 사직동 153-29' },
  { label: '용도지역', value: '-' },
  { label: '건축면적', value: '86.96m²' },
  { label: '건축물 용도', value: '제2종근린생활시설' },
  { label: '건폐율', value: '59.64%' },
  { label: '용적률', value: '275.45%' },
  { label: '사용승인일', value: '1991. 01. 30' },
  { label: '위도', value: '35.1957456412222325' },
  { label: '경도', value: '129.0713254455565557877' },
  { label: 'm²당 단가', value: '4,420,000 / m²' },
  { label: '평당단가', value: '14,611,569 / 평' },
  { label: '평가일', value: '2026. 03. 27' },
  { label: '다음 평가일', value: '2026. 04. 24' },
]

const historyFilters = [
  { id: 'all', label: '전체' },
  { id: 'building', label: '건물검색' },
  { id: 'url', label: 'URL조회' },
  { id: 'blog', label: '블로그 분석' },
]

const historyItems: HistoryListItem[] = [
  {
    type: 'URL 조회',
    address: '부산광역시 동래구 사직동 153-29',
    url: 'https://blog.naver.com/danbi_15/12452365478',
    date: '2025. 01. 06',
    price: '8.7억',
    typeBadgeBg: '#EBF1FD',
  },
  {
    type: '블로그 분석',
    address: '부산광역시 동래구 사직동 153-29',
    url: 'https://blog.naver.com/danbi_15/12452365478',
    date: '2025. 01. 06',
    price: '8.7억',
    typeBadgeBg: '#D0FAE5',
  },
  {
    type: '건물검색',
    address: '부산광역시 동래구 사직동 153-29',
    url: 'https://blog.naver.com/danbi_15/12452365478',
    date: '2025. 01. 06',
    price: '8.7억',
    typeBadgeBg: '#FFFAEC',
  },
]

/** 자동 밸류맵 — 조회 주소 라벨 왼쪽 아이콘 (`public/` 경로 또는 import한 정적 에셋 URL) */
const VALUEMAP_QUERY_ADDRESS_ICON_SRC = '/icon/search.svg'

/** 자동 밸류맵 — 추론 주소 라벨 왼쪽 아이콘 */
const VALUEMAP_INFERRED_ADDRESS_ICON_SRC = '/icon/addre.svg'

/** 모바일 하단 고정 바 — 북마크 버튼 아이콘 (`public/` 기준 경로, 비우면 lucide 아이콘 사용) */
const MOBILE_BOTTOM_BAR_BOOKMARK_ICON_SRC = '/icon/bookmark.svg'

function MobileBottomBarBookmarkIcon() {
  if (MOBILE_BOTTOM_BAR_BOOKMARK_ICON_SRC) {
    return (
      <img
        src={MOBILE_BOTTOM_BAR_BOOKMARK_ICON_SRC}
        alt=""
        className="h-5 w-5 object-contain"
      />
    )
  }
  return <Bookmark size={20} className="text-foreground" strokeWidth={1.75} />
}

function MobileBookmarkListOverlay({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  if (!open) return null

  return (
    <div
      className="lg:hidden fixed inset-0 z-[80] flex flex-col bg-white font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-bookmark-list-title"
    >
      <header className="relative flex shrink-0 items-center justify-center  border-border px-4 py-3.5">
        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className="absolute left-4 text-foreground transition-colors hover:text-muted-foreground"
        >
          <X size={22} strokeWidth={1.5} />
        </button>
        <h2 id="mobile-bookmark-list-title" className="text-base font-bold text-foreground">
          북마크 목록 <span className="text-[#2567E7]">{MOBILE_BOOKMARK_LIST_ITEMS.length}</span>
        </h2>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4">
        <ul className="divide-y divide-transparent">
          {MOBILE_BOOKMARK_LIST_ITEMS.map((item, index) => (
            <li key={index}>
              <div className="flex items-start gap-3 py-5">
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-foreground">{item.address}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.area} · {item.floor}
                  </p>
                </div>
                <Bookmark
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-400 fill-amber-400"
                  aria-hidden
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function BuildingSearchContent({ activeMenu }: BuildingSearchContentProps) {
  const [selectedOption, setSelectedOption] = useState('general')
  const [url, setUrl] = useState('https://Blog.naver.com/yooniverse701/2245553365')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [historyFilter, setHistoryFilter] = useState('all')
  const [isMobileBookmarkListOpen, setIsMobileBookmarkListOpen] = useState(false)

  useEffect(() => {
    if (activeMenu === 'url') setIsMobileBookmarkListOpen(false)
  }, [activeMenu])

  if (activeMenu === 'url') {
    return (
      <div className="min-w-0 flex-1 font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard">
        {/* Header */}
        <div className="mb-8">
        <h1 className="mt-5 pb-9 -mb-8 border-border text-base font-semibold text-foreground">URL 조회 + 밸류맵</h1>
          <p className="text-xs text-muted-foreground">
            웹페이지 URL을 입력하면 건물 정보 추출 + 건물 매칭 + 밸류맵 시세 조회까지 한번에 실행 됩니다.
          </p>
        </div>

        {/* Radio Options */}
        <div className="space-y-4 mb-8">
        <label className="flex items-center gap-3 cursor-pointer">
  <div className="relative w-5 h-5 flex items-center justify-center">
    <input
      type="radio"
      name="searchType"
      value="general"
      checked={selectedOption === 'general'}
      onChange={(e) => setSelectedOption(e.target.value)}
      className="absolute w-5 h-5 appearance-none cursor-pointer border-4 border-gray-300 rounded-full checked:bg-blue-600 checked:border-blue-600"
    />
    {selectedOption === 'general' && (
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full pointer-events-none" />
    )}
  </div>
  <span className="text-sm text-foreground">일반 웹 페이지</span>
</label>

<label className="flex items-center gap-3 cursor-pointer">
  <div className="relative w-5 h-5 flex items-center justify-center">
    <input
      type="radio"
      name="searchType"
      value="single"
      checked={selectedOption === 'single'}
      onChange={(e) => setSelectedOption(e.target.value)}
      className="absolute w-5 h-5 appearance-none cursor-pointer border-4 border-gray-300 rounded-full checked:bg-blue-600 checked:border-blue-600"
    />
    {selectedOption === 'single' && (
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full pointer-events-none" />
    )}
  </div>
  <span className="text-sm text-foreground">S 부동산 단건</span>
</label>

<label className="flex items-center gap-3 cursor-pointer">
  <div className="relative w-5 h-5 flex items-center justify-center">
    <input
      type="radio"
      name="searchType"
      value="list"
      checked={selectedOption === 'list'}
      onChange={(e) => setSelectedOption(e.target.value)}
      className="absolute w-5 h-5 appearance-none cursor-pointer border-4 border-gray-300 rounded-full checked:bg-blue-600 checked:border-blue-600"
    />
    {selectedOption === 'list' && (
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full pointer-events-none" />
    )}
  </div>
  <span className="text-sm text-foreground">S 부동산 최근 목록</span>
</label>
        </div>

        {/* URL Input */}
        <div className="mb-8">
          <label className="block text-sm text-foreground mb-2">웹 페이지 URL</label>
          <div className="flex gap-2">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://"
              className="flex-1 px-4 py-3 rounded-[8px] border border-border text-sm focus:outline-none focus:border-primary"
            />
            <button className="px-6 py-2.5 bg-[#2567E7] text-white rounded-[8px] text-sm font-medium hover:bg-primary/90 transition-colors">
              조회
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Result */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-4">건물 매칭 완료</h2>
          <div 
            onClick={() => setIsModalOpen(true)}
            className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-secondary/30 cursor-pointer transition-colors"
          >
            <div>
              <p className="text-sm font-semibold text-foreground">부산광역시 동래구 사직동 153-29</p>
              <p className="text-xs text-muted-foreground mt-1">492.4m² · 145.m²</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </div>
        </div>

{/* ------------------------------------------------------------------------------------------------- */}

        {/* Building Info - 전체화면 */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            {/* 상단 헤더 */}
            <div className="sticky top-0 z-10 bg-white border-border flex items-center justify-between px-4 py-3.5">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                <X size={22} strokeWidth={2} />
              </button>
              <h2 className="text-base font-bold text-foreground">건물 정보</h2>
              <div className="w-6" />
            </div>

            {/* 콘텐츠 */}
            <div className="max-w-2xl mx-auto px-4 py-6">
              {/* Address */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-foreground">부산광역시 동래구 사직동 153-29</h3>
                  <p className="text-sm text-muted-foreground">492.4m² · 145.m²</p>
                </div>
                <Bookmark size={24} className="text-yellow-400 fill-yellow-400 shrink-0 mt-0.5" />
              </div>

              {/* Map — 부모 px-4를 -mx-4로 상쇄해 좌우 풀블리드 */}
              <div className="relative -mx-4 mb-6">
                <div className="h-48 w-full overflow-hidden bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop"
                    alt="Map"
                    className="h-full w-full object-cover"
                  />
                </div>
                <button className="absolute bottom-4 right-4 bg-white px-2.5 py-1 rounded-[4px]  flex items-center gap-2 text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <Map size={18} />
                  카카오지도에서 열기
                </button>
              </div>

              {/* Property Info Cards */}
              <div className="bg-[#F8F8F8] rounded-lg p-4 mb-4">
                <div className="py-3 border-b border-border flex items-center justify-between">
                  <span className="mt-6 text-sm text-[#2567E7] font-semibold">토지 지번</span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">지번</span>
                    <span className="text-xl font-bold text-foreground">153-29 m²</span>
                  </div>
                </div>
                <div className="py-3 border-b border-border flex items-center justify-between">
                  <span className="mt-6 text-sm text-[#2567E7] font-semibold">총 연면적</span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">연면적</span>
                    <span className="text-xl font-bold text-foreground">494.4 m²</span>
                  </div>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="mt-5 text-sm text-[#2567E7] font-semibold">대지 면적</span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">대지면적</span>
                    <span className="text-xl font-bold text-foreground">145.8 m²</span>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-[#F8F8F8] rounded-lg p-4 mb-4">
                <h4 className="font-bold text-foreground mb-4">시세 요약</h4>
                <div className="py-3 border-b border-border flex items-center justify-between">
                  <span className="mt-6 text-sm text-[#2567E7] font-semibold">감정평가 기준</span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">총 시세</span>
                    <span className="text-xl font-bold text-foreground">8.7억</span>
                  </div>
                </div>
                <div className="py-3 border-b border-border flex items-center justify-between">
                  <span className="mt-6 text-sm text-[#2567E7] font-semibold">토지 기준</span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">총 시세</span>
                    <span className="text-xl font-bold text-foreground">6.4억</span>
                  </div>
                </div>
                <div className="py-3 border-b border-border flex items-center justify-between">
                  <span className="mt-6 text-sm text-[#2567E7] font-semibold">건물 기준</span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">총 시세</span>
                    <span className="text-xl font-bold text-foreground">6.4억</span>
                  </div>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="mt-5 text-sm text-[#2567E7] font-semibold">평가 완료</span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">신뢰도</span>
                    <span className="text-xl font-bold text-foreground">76점</span>
                  </div>
                </div>
              </div>

              {/* Detail Table */}
              <div>
                {buildingDetails.map((item, index) => (
                  <div key={index} className="py-3 border-b border-border flex">
                    <span className="ml-5 w-28 text-sm text-muted-foreground flex-shrink-0">{item.label}</span>
                    <span className="text-sm text-[#333333]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }


  /* ------------------------------------------------------------------------------------------------- */

  if (activeMenu === 'building') {
    return (
      <>
      <div className="min-w-0 flex-1 pb-24 font-pretendard lg:pb-0 [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard">
        <div className="mb-8">
          <h1 className="mt-5 pb-9 -mb-8 border-border text-base font-semibold text-foreground">건물 검색</h1>
          <p className="text-xs text-muted-foreground">
            지역명과 연면적을 기준으로 가장 가까운 건물을 찾고, 좌표와 주소 정보를 함께 확인합니다.
          </p>
        </div>

        {/* Search Form - 모바일 1열, sm 이상 2x2 Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-foreground mb-2">
              지역명<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="동래구 사직동"
              className="w-full px-4 py-3  border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">
              연면적(m²)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="494.4"
              className="w-full px-4 py-3 rounded-[8px] border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">
              대지면적(m²)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="145.8"
              className="w-full px-4 py-3 rounded-[8px] border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">
              사용승인일<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="1991. 01. 30"
              className="w-full px-4 py-3 rounded-[8px] border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Action Buttons — 모바일: 가로 풀폭 1:1, sm+: 우측 정렬 */}
        <div className="mb-8 flex w-full gap-3 sm:justify-end">
          <button
            type="button"
            className="flex min-w-0 flex-1 items-center justify-center rounded-[8px] border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:flex-none sm:px-7"
          >
            초기화
          </button>
          <button
            type="button"
            className="flex min-w-0 flex-1 items-center justify-center rounded-[8px] bg-[#2567E7] py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:flex-none sm:px-7"
          >
            검색
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Results */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-4">
            매칭된 건물물 <span className="text-[#2567E7]">2</span>건
          </h2>
          <div className="space-y-3">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-secondary/30 cursor-pointer transition-colors"
            >
              <div>
                <p className="font-semibold text-foreground">부산광역시 동래구 사직동 153-29</p>
                <p className="text-sm text-muted-foreground mt-1">492.4m² · 145.m²</p>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </div>
            <div 
              onClick={() => setIsModalOpen(true)}
              className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-secondary/30 cursor-pointer transition-colors"
            >
              <div>
                <p className="font-semibold text-foreground">부산광역시 동래구 사직동 153-29</p>
                <p className="text-sm text-muted-foreground mt-1">492.4m² · 145.m²</p>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* 모바일 하단 고정 버튼 바 */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white  border-border px-4 py-3 flex items-center gap-3">
          <button
            type="button"
            aria-label="북마크"
            onClick={() => setIsMobileBookmarkListOpen(true)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2567E7] bg-white transition-colors hover:bg-muted/50"
          >
            <MobileBottomBarBookmarkIcon />
          </button>
          <button
            type="button"
            className="flex-1 h-12 rounded-xl bg-[#2567E7] text-white text-sm font-bold transition-colors hover:bg-[#2567E7]/90"
          >
            상담요청
          </button>
        </div>
      </div>
      <MobileBookmarkListOverlay open={isMobileBookmarkListOpen} onClose={() => setIsMobileBookmarkListOpen(false)} />
      </>
    )
  }

  /* ------------------------------------------------------------------------------------------------- */

  if (activeMenu === 'blog') {
    return (
      <>
      <div className="min-w-0 flex-1 pb-24 font-pretendard lg:pb-0 [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard">
        {/* Header */}
        <div className="mb-6">
          <h1 className="mt-5 pb-9 -mb-8 border-border text-base font-semibold text-foreground">네이버 블로그 검색</h1>
          <p className="text-xs text-muted-foreground">
            검색어 기준으로 블로그를 수집하고, 추론된 건물 주소와 면적 정보를 바탕으로 분석 결과를 정리합니다.
          </p>
        </div>

        {/* Search Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm text-foreground mb-2">검색어</label>
            <input
              type="text"
              defaultValue="부산 건물 급매"
              className="w-full px-4 py-3  border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-foreground mb-2">기간</label>
              <div className="relative">
                <select className="w-full px-4 py-3   border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                  <option>1일</option>
                  <option>7일</option>
                  <option>30일</option>
                </select>
                <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2">정렬</label>
              <div className="relative">
                <select className="w-full px-4 py-3  border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                  <option>최신순</option>
                  <option>정확도순</option>
                </select>
                <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">부산 조회 이력</label>
            <div className="relative">
              <select className="w-full px-4 py-3   border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                <option>부산 해운대 급매 2026. 03. 21 오후 12:12</option>
              </select>
              <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Action Buttons — 모바일: 가로 풀폭, sm+: 우측 정렬 */}
        <div className="mb-8 flex w-full gap-3 sm:justify-end">
          <button
            type="button"
            className="flex min-w-0 flex-1 items-center justify-center rounded-[8px] border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:flex-none sm:px-7"
          >
            초기화
          </button>
          <button
            type="button"
            className="flex min-w-0 flex-1 items-center justify-center rounded-[8px] bg-[#2567E7] py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:flex-none sm:px-7"
          >
            분석시작
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Analysis Status */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-foreground mb-2">최근 분석 상태</h2>
          <p className="text-xs text-muted-foreground mb-4">
            진행중인 작업은 자동으로 새로고침되며, 선택한 이력의 최신 상태를 보여줍니다.
          </p>
          
          {/* Status Header */}
          <div className="bg-[#F8F8F8] rounded-lg p-3 mb-4 flex items-center gap-4">
            <span className="px-3 py-1 border border-border text-black text-xs font-medium rounded">완료</span>
            <span className="text-sm text-foreground">부산 해운대 급매 2026. 03. 21 오후 12:51</span>
          </div>

          {/* Status Grid */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">검색어</p>
              <p className="text-sm font-semibold text-foreground">부산 해운대 급매</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">생성 시각</p>
              <p className="text-sm font-semibold text-foreground">2026. 03. 21 오후 12:51</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">시작 시각</p>
              <p className="text-sm font-semibold text-foreground">2026. 03. 21 오후 12:51</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">종료 시각</p>
              <p className="text-sm font-semibold text-foreground">2026. 03. 21 오후 12:51</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">수집 URL</p>
              <p className="text-sm font-semibold text-foreground">25</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">스크린샷</p>
              <p className="text-sm font-semibold text-foreground">25</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">분석 완료</p>
              <p className="text-sm font-semibold text-foreground">25</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">건물 매칭</p>
              <p className="text-sm font-semibold text-foreground">5</p>
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="mb-8">
          <h2 className="text-sm border-t border-border pt-6 pb-2 font-bold text-foreground mb-4">분석 결과</h2>
          
          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="제목 또는 주소 검색"
              className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 pr-10"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Results List */}
          <div className="space-y-3 mb-4">
            <div className="border border-border rounded-lg p-4 flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded border border-[#E5E5E5] accent-[#2567E7] focus:ring-[#2567E7]" />
              <div>
                <p className="text-sm font-semibold text-foreground">해운대 상업지 건물주의 꿈! 급매 보다 싼...</p>
                <p className="text-xs text-muted-foreground mt-1">부산 광역시 해운대구 우동 762-60 1,741.4m²</p>
              </div>
            </div>
            <div className="border border-border rounded-lg p-4 flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border border-[#E5E5E5] accent-[#2567E7] focus:ring-[#2567E7]" />
              <div>
                <p className="text-sm font-semibold text-foreground">해운대 상업지 건물주의 꿈! 급매 보다 싼...</p>
                <p className="text-xs text-muted-foreground mt-1">부산 광역시 해운대구 우동 762-60 1,741.4m²</p>
              </div>
            </div>
            <div className="border border-border rounded-lg p-4 flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border border-[#E5E5E5] accent-[#2567E7] focus:ring-[#2567E7]" />
              <div>
                <p className="text-sm font-semibold text-foreground">해운대 상업지 건물주의 꿈! 급매 보다 싼...</p>
                <p className="text-xs text-muted-foreground mt-1">부산 광역시 해운대구 우동 762-60 1,741.4m²</p>
              </div>
            </div>
          </div>

          {/* View All */}
          <button className="w-full py-3 text-sm text-foreground flex items-center justify-center gap-1 hover:text-foreground transition-colors">
            전체보기 <ChevronRight size={22} className="rotate-90" />
          </button>
        </div>

        {/* Blog Preview */}
        <div className="mb-4 border-t border-b border-border py-4">
          <h3 className="text-sm font-bold text-foreground -mb-3">
            해운대 상업지 건물주의 꿈 ! 급매보다 싼.. 급매보다 싼.. [네이버 블로그]
          </h3>
          <div className="flex items-center justify-between  rounded-lg p-4">
            <p className="-ml-3 text-xs text-muted-foreground truncate flex-1">https://blog.naver.com/dario_15/12452365478</p>
            <button className="ml-4 px-4 py-2 border border-border rounded-lg text-sm font-light text-black hover:bg-secondary transition-colors whitespace-nowrap">
              원문 열기
            </button>
          </div>
        </div>

        {/* ValueMap Results */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-2">자동 밸류맵 조회</h2>
          <p className="text-xs text-muted-foreground mb-4">
            선택하면 분석 결과의 추론 주소를 기준으로 자동 조회한 시세 정보입니다.
          </p>

          {/* Query Address Card */}
          <div className=" bg-[#F8F8F8] rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={VALUEMAP_QUERY_ADDRESS_ICON_SRC}
                alt=""
                className="h-4 w-4 shrink-0 object-contain opacity-70"
              />
              <span className="text-xs text-muted-foreground">조회 주소</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">부산 광역시 해운대구 우동 762-60</p>
              <ChevronRight size={18} className="-mt-6 text-muted-foreground" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-3">등록 매물</p>
              <p className="text-sm font-bold text-foreground">없음</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-3">총 시세</p>
              <p className="text-sm font-bold text-foreground">97.4억</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-3">토지 평가액</p>
              <p className="text-sm font-bold text-foreground">54.3억</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-3">건물 평가액</p>
              <p className="text-sm font-bold text-foreground">43.1억</p>
            </div>
          </div>

          {/* Reliability */}
            <div className="border border-border rounded-lg p-3 mb-3 w-1/2">
            <p className="text-xs text-muted-foreground mb-3">신뢰도</p>
            <p className="text-sm font-bold text-foreground">79</p>
          </div>

          {/* Inferred Address */}
          <div className=" bg-[#F8F8F8] rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={VALUEMAP_INFERRED_ADDRESS_ICON_SRC}
                alt=""
                className="h-4 w-4 shrink-0 object-contain opacity-70"
              />
              <span className="text-xs text-muted-foreground">추론 주소</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">부산 광역시 해운대구 우동 762-60</p>
              <ChevronRight size={18} className="-mt-6 text-muted-foreground" />
            </div>
          </div>

          {/* Stats Grid for Inferred */}
          <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">등록 매물</p>
              <p className="text-sm font-bold text-foreground">없음</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">총 시세</p>
              <p className="text-sm font-bold text-foreground">97.4억</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">토지 평가액</p>
              <p className="text-sm font-bold text-foreground">54.3억</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">건물 평가액</p>
              <p className="text-sm font-bold text-foreground">43.1억</p>
            </div>
          </div>

          {/* Reliability for Inferred */}
          <div className="border border-border rounded-lg p-3 w-1/2">
            <p className="text-xs text-muted-foreground mb-3">신뢰도</p>
            <p className="text-sm font-bold text-foreground">79</p>
          </div>
        </div>

        {/* 모바일 하단 고정 버튼 바 */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-border px-4 py-3 flex items-center gap-3">
          <button
            type="button"
            aria-label="북마크"
            onClick={() => setIsMobileBookmarkListOpen(true)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2567E7] bg-white transition-colors hover:bg-muted/50"
          >
            <MobileBottomBarBookmarkIcon />
          </button>
          <button
            type="button"
            className="flex-1 h-12 rounded-xl bg-[#2567E7] text-white text-sm font-bold transition-colors hover:bg-[#2567E7]/90"
          >
            상담요청
          </button>
        </div>
      </div>
      <MobileBookmarkListOverlay open={isMobileBookmarkListOpen} onClose={() => setIsMobileBookmarkListOpen(false)} />
      </>
    )
  }


  // -------------------------------------------------------------------------------------------------

  if (activeMenu === 'history') {
    return (
      <>
      <div className="mt-3 min-w-0 flex-1 pb-24 font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {historyFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setHistoryFilter(filter.id)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                historyFilter === filter.id
                  ? 'bg-[#2567E7] text-white'
                  : 'bg-[#F8F8F8] text-[#636363] hover:bg-muted/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="주소, URL, 키워드로 기록 검색"
            className="flex-1 px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="px-5 py-2.5 bg-[#2567E7] text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            검색
          </button>
        </div>

        {/* History List */}
        <div className="space-y-0">
          {historyItems.map((item, index) => (
            <div key={index} className="border-b border-border py-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <span
                    className="inline-block px-2.5 py-1 rounded text-xs font-medium mb-2"
                    style={{
                      backgroundColor: item.typeBadgeBg,
                      ...(item.typeBadgeColor ? { color: item.typeBadgeColor } : {}),
                    }}
                  >
                    {item.type}
                  </span>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.address}</h3>
                  <p className="text-xs text-muted-foreground truncate">{item.url}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-semibold text-[#2567E7] mb-6">{item.price}</p>
                  <p className="mt-9 text-xs text-muted-foreground">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 고정 버튼 바 */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white  border-border px-4 py-3 flex items-center gap-3">
          <button
            type="button"
            aria-label="북마크"
            onClick={() => setIsMobileBookmarkListOpen(true)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2567E7] bg-white transition-colors hover:bg-muted/50"
          >
            <MobileBottomBarBookmarkIcon />
          </button>
          <button
            type="button"
            className="flex-1 h-12 rounded-xl bg-[#2567E7] text-white text-sm font-bold transition-colors hover:bg-[#2567E7]/90"
          >
            상담요청
          </button>
        </div>
      </div>
      <MobileBookmarkListOverlay open={isMobileBookmarkListOpen} onClose={() => setIsMobileBookmarkListOpen(false)} />
      </>
    )
  }

  return null
}
