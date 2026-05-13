'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import PropertyCard from './property-card'

const filterTabs = [
  { id: 'all', label: '전체' },
  { id: 'apt', label: '아파트' },
  { id: 'officetel', label: '오피스텔' },
  { id: 'shop', label: '상가' },
  { id: 'office', label: '사무실' },
]

interface Property {
  id: number
  image: string
  title?: string
  name?: string
  location: string
  specs?: {
    rooms?: string
    size?: string
    floor?: string
  }
  rating?: number
  deposit?: string
  deposit2?: string
  discount?: string
  discountRate?: string
  price: string
  agent?: {
    name: string
    description?: string
    avatar?: string
  }
  recommendationReason?: string
  badge?: string
}

interface PropertySectionProps {
  title: string
  badge?: string
  properties?: Property[]
  /** 섹션 `<section>` 추가 클래스 (예: `bg-[#F8F9FB]`) */
  className?: string
  /** false면 유형 필터 칩(전체·아파트 등)을 렌더링하지 않음 */
  showFilterTabs?: boolean
  /** false면 섹션 하단 구분선(`border-b`) 없음 — 연속 배치 시 사용 */
  hideBottomBorder?: boolean
  /** true면 모바일에서 가로 스크롤 대신 2열 그리드로 표시 */
  mobileGrid?: boolean
}

export default function PropertySection({
  title,
  badge,
  properties = [],
  className,
  showFilterTabs = true,
  hideBottomBorder = false,
  mobileGrid = false,
}: PropertySectionProps) {
  const [activeFilterTab, setActiveFilterTab] = useState<string>('all')

  // Sample data if not provided
  const sampleProperties: Property[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      title: '역삼동 대로변 근생빌딩',
      location: '서울 강남구 역삼동 · 15층',
      specs: { rooms: '근생빌딩 지하1층/지상 6층', size: '대지 85평 연면적 · 210평' },
      rating: 5,
      deposit: '평단가 2,131만',
      discountRate: '수익률 5.9%',
      price: '22억',
      agent: {
        name: '김부동산',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop',
      },
      recommendationReason: '대로변 코너 입지, 1층 프랜차이즈 입점으로 공실 리스크 낮음',
    
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      title: '역삼동 대로변 근생빌딩',
      location: '서울 강남구 역삼동 · 15층',
      specs: { rooms: '근생빌딩 지하1층/지상 6층', size: '대지 85평 연면적 · 210평' },
      rating: 5,
      deposit: '평단가 2,131만',
      discountRate: '수익률 5.9%',
      price: '22억',
      agent: {
        name: '김부동산',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop',
      },
      recommendationReason: '대로변 코너 입지, 1층 프랜차이즈 입점으로 공실 리스크 낮음',

    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      title: '역삼동 대로변 근생빌딩',
      location: '서울 강남구 역삼동 · 15층',
      specs: { rooms: '근생빌딩 지하1층/지상 6층', size: '대지 85평 연면적 · 210평' },
      rating: 5,
      deposit: '평단가 2,131만',
      discountRate: '수익률 5.9%',
      price: '22억',
      agent: {
        name: '김부동산',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop',
      },
      recommendationReason: '대로변 코너 입지, 1층 프랜차이즈 입점으로 공실 리스크 낮음',
   
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      title: '역삼동 대로변 근생빌딩',
      location: '서울 강남구 역삼동 · 15층',
      specs: { rooms: '근생빌딩 지하1층/지상 6층', size: '대지 85평 연면적 · 210평' },
      rating: 5,
      deposit: '평단가 2,131만',
      discountRate: '수익률 5.9%',
      price: '22억',
      agent: {
        name: '김부동산',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop',
      },
      recommendationReason: '대로변 코너 입지, 1층 프랜차이즈 입점으로 공실 리스크 낮음',
     
    },
  ]

  const displayProperties = properties.length > 0 ? properties : sampleProperties

  return (
    <section
      className={`py-12 font-pretendard [&_button]:font-pretendard ${hideBottomBorder ? '' : 'border-b border-border '} ${className ?? 'bg-background'}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            {badge ? (
              <span className="rounded-md bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">{badge}</span>
            ) : null}
          </div>
          <a
            href="#"
            className="flex items-center gap-1 font-pretendard text-sm font-medium text-[#2563EB] hover:text-[#1d4ed8]"
          >
            더보기 <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
          </a>
        </div>

        {showFilterTabs ? (
          <div
            className="mb-8 flex max-md:-mx-6 flex-nowrap gap-2 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] max-md:snap-x max-md:snap-mandatory max-md:scroll-pl-6 max-md:touch-pan-x max-md:pl-6 max-md:pr-6 md:mx-0 md:flex-wrap md:scroll-pl-0 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="매물 유형 필터"
          >
            {filterTabs.map(tab => {
              const active = activeFilterTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilterTab(tab.id)}
                  className={`inline-flex shrink-0 snap-start items-center justify-center whitespace-nowrap rounded-full px-5.5 py-2.5 text-sm font-medium font-pretendard transition-colors ${
                    active
                      ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8]'
                      : 'bg-[#EFF1F4] text-[#374151] hover:bg-[#E5E8EC]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        ) : null}

        {/* Property list */}
        {mobileGrid ? (
          /* 모바일 2열 그리드 모드 */
          <div
            className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4"
            role="list"
            aria-label="매물 목록"
          >
            {displayProperties.map(property => (
              <div key={property.id}>
                <PropertyCard property={property} hideRecommendation mobileCompactPricing />
              </div>
            ))}
          </div>
        ) : (
          /* 기본: 모바일 가로 스크롤 + peek */
          <div className="max-md:-mx-6">
            <div
              className="flex flex-nowrap gap-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:scroll-smooth max-md:px-6 max-md:scroll-pl-6 max-md:pr-6 max-md:touch-pan-x [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pr-0 md:scroll-pl-0 lg:grid-cols-4"
              role="list"
              aria-label="매물 목록"
            >
              {displayProperties.map(property => (
                <div
                  key={property.id}
                  className="max-md:w-[calc(100vw-8rem)] max-md:max-w-[18.5rem] max-md:shrink-0 max-md:snap-start md:w-auto md:max-w-none"
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
