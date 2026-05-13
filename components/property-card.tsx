'use client'

import { Heart, Hexagon, MapPin, Star } from 'lucide-react'

/** 위치 줄 앞 아이콘 — `public` 기준 경로(예: `/icons/property-pin.png`) 또는 URL */
const PROPERTY_LOCATION_ICON_SRC = '/building/loca01.svg'

/** 대지·연면적 줄 앞 아이콘 — `public` 기준 경로 또는 URL */
const PROPERTY_AREA_ICON_SRC = '/building/loca02.svg'

interface PropertyCardProps {
  /** true면 "추천하는 이유" 블록 숨김 */
  hideRecommendation?: boolean
  /** true면 모바일에서 평단가 위, 수익률+가격 가로 한 줄 레이아웃 */
  mobileCompactPricing?: boolean
  property: {
    id: number
    image: string
    name?: string
    title?: string
    location: string
    specs?: {
      rooms?: string
      size?: string
      floor?: string
    }
    rating?: number
    /** 평단가 등 — 회색 배지 */
    deposit?: string
    discount?: string
    /** 수익률 등 — 노란 배지 우선 표시 */
    discountRate?: string
    price: string
    agent?: {
      name: string
      description?: string
      avatar?: string
    }
    /** 추천 이유 본문 (헤더는 카드에서 고정) */
    recommendationReason?: string
    badge?: string
  }
}

export default function PropertyCard({ property, hideRecommendation = false, mobileCompactPricing = false }: PropertyCardProps) {
  const title = property.title || property.name || '매물'
  const stars = property.rating ? Math.round(property.rating) : 4

  /** 위치·면적 블록: 아이콘 열 20px + 간격 — 줄바꿈 시 본문만 같은 시작선에 정렬 */
  const metaRow = 'grid grid-cols-[20px_minmax(0,1fr)] items-start gap-x-1.5'
  
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img 
          src={property.image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
   
        {/* Badge */}
        {property.badge && (
          <div className="absolute top-3 left-3 flex gap-1">
            <span className="bg-primary text-white px-2 py-1 rounded text-xs font-bold">
              매매
            </span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
              {property.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pt-4">
        {/* Stars */}
        <div className="mb-2 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < stars
                  ? 'fill-[#facc15] text-[#facc15]'
                  : 'fill-none text-gray-300'
              }
            />
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 line-clamp-2 text-base font-bold leading-snug tracking-tight text-foreground">
          {title}
        </h3>

        {/* 위치 · 건물 · 면적 */}
        <div className="mb-4 space-y-0.5 text-xs font-pretendard text-muted-foreground">
          <div className={metaRow}>
            <span className="flex size-[20px] shrink-0 items-start justify-center pt-0.1">
              {PROPERTY_LOCATION_ICON_SRC ? (
                <img
                  src={PROPERTY_LOCATION_ICON_SRC}
                  alt=""
                  width={20}
                  height={20}
                  className="size-[20px] object-contain"
                  draggable={false}
                  aria-hidden
                />
              ) : (
                <MapPin className="size-3.5 shrink-0 text-sky-400" strokeWidth={2} aria-hidden />
              )}
            </span>
            <span className="min-w-0 leading-snug">{property.location}</span>
          </div>
          {property.specs?.rooms && (
            <div className={metaRow}>
              <span className="size-[20px] shrink-0" aria-hidden />
              <span className="min-w-0 leading-snug">{property.specs.rooms}</span>
            </div>
          )}
          {property.specs?.size && (
            <div className={`${metaRow} mt-2`}>
              <span className="flex size-[20px] shrink-0 items-start justify-center pt-0.1">
                {PROPERTY_AREA_ICON_SRC ? (
                  <img
                    src={PROPERTY_AREA_ICON_SRC}
                    alt=""
                    width={20}
                    height={20}
                    className="size-[20px] object-contain"
                    draggable={false}
                    aria-hidden
                  />
                ) : (
                  <Hexagon className="size-[20px] shrink-0 text-violet-400" strokeWidth={2} aria-hidden />
                )}
              </span>
              <span className="min-w-0 leading-snug">{property.specs.size}</span>
            </div>
          )}
          {property.specs?.floor && (
            <div className={metaRow}>
              <span className="size-[20px] shrink-0" aria-hidden />
              <span className="min-w-0 leading-snug">{property.specs.floor}</span>
            </div>
          )}
        </div>

        {mobileCompactPricing ? (
          /* 모바일 전용: 평단가 위 / 수익률+가격 가로 한 줄, PC는 기존 레이아웃 */
          <>
            {/* 평단가 — 모바일: 단독 행 우측, PC: 기존 flex 행 */}
            {(property.deposit || property.discountRate || property.discount) && (
              <>
                {/* 모바일 */}
                <div className="mb-1 flex justify-end md:hidden">
                  {property.deposit ? (
                    <span className="rounded-[4px] border border-[#e5e7eb] bg-white px-2 py-0.5 text-[11px] font-semibold text-foreground">
                      {property.deposit}
                    </span>
                  ) : null}
                </div>
                <div className="mb-3 flex items-center justify-end gap-1.5 md:hidden">
                  {(property.discountRate || property.discount) ? (
                    <span className="rounded-[4px] bg-[#facc15] px-2 py-0.5 text-[11px] font-bold text-neutral-900">
                      {property.discountRate || property.discount}
                    </span>
                  ) : null}
                  <span className="text-xl font-bold tracking-tight text-foreground">
                    {property.price}
                  </span>
                </div>
                {/* PC — 기존 */}
                <div className="mb-3 hidden flex-wrap items-center justify-end gap-2 md:flex">
                  {property.deposit ? (
                    <span className="rounded-[4px] border border-[#e5e7eb] bg-white px-2.5 py-1 text-[12px] font-semibold text-foreground shadow-none">
                      {property.deposit}
                    </span>
                  ) : null}
                  {(property.discountRate || property.discount) ? (
                    <span className="rounded-[4px] bg-[#facc15] px-2.5 py-1 text-[12px] font-bold text-neutral-900">
                      {property.discountRate || property.discount}
                    </span>
                  ) : null}
                </div>
              </>
            )}
            {/* 매매가 — PC만 */}
            <div className="mb-5 hidden text-right text-2xl font-bold tracking-tight text-foreground md:block">
              {property.price}
            </div>
          </>
        ) : (
          <>
            {/* 평단가 · 수익률 — 우측 정렬 */}
            {(property.deposit || property.discountRate || property.discount) && (
              <div className="mb-3 flex flex-wrap items-center justify-end gap-2">
                {property.deposit ? (
                  <span className="rounded-[4px] border border-[#e5e7eb] bg-white px-2.5 py-1 text-[12px] font-semibold text-foreground shadow-none">
                    {property.deposit}
                  </span>
                ) : null}
                {(property.discountRate || property.discount) ? (
                  <span className="rounded-[4px] bg-[#facc15] px-2.5 py-1 text-[12px] font-bold text-neutral-900">
                    {property.discountRate || property.discount}
                  </span>
                ) : null}
              </div>
            )}
            {/* 매매가 */}
            <div className="mb-5 text-right text-2xl font-bold tracking-tight text-foreground">
              {property.price}
            </div>
          </>
        )}

        {/* 공인중개사 */}
        {property.agent && (
          <div className="mb-3 flex items-center gap-2.5 pt-1">
            {property.agent.avatar ? (
              <img
                src={property.agent.avatar}
                alt=""
                className="size-8 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="size-8 shrink-0 rounded-full bg-muted" aria-hidden />
            )}
            <span className="text-sm font-semibold text-foreground">{property.agent.name}</span>
          </div>
        )}

        {/* 추천하는 이유 */}
        {(property.recommendationReason || property.agent?.description) && (
          <div className={`rounded-lg bg-[#eef0f3] p-3 ${hideRecommendation ? 'hidden md:block' : ''}`}>
            <p className="mb-1.5 text-xs font-bold text-foreground">추천하는 이유</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {property.recommendationReason ?? property.agent?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
