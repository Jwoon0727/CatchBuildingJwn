'use client'

import Link from 'next/link'
import { Eye, MessageCircle, Heart } from 'lucide-react'

/** 메타 줄 아이콘 — `public/building` 기준 */
const SEARCH_ICON_LOCATION = '/building/loca01.svg'
const SEARCH_ICON_AREA = '/building/loca02.svg'
const SEARCH_ICON_CALENDAR = '/building/search-calendar.svg'

interface SearchResult {
  id: number
  image: string
  title: string
  /** 핀 아이콘 한 번만 — 위치·층·건물 등 여러 줄 */
  pinLines: string[]
  /** 육각 아이콘 한 줄 (대지·연면적 등) */
  area: string
  date: string
  views: number
  comments: number
  likes: number
  deposit: string
  discount: string
  price: string
  badge: string
}

interface SearchResultCardProps {
  result: SearchResult
}

const metaRow = 'flex w-full min-w-0 items-start gap-2'

function MetaLineIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      width={18}
      height={18}
      className="-translate-y-px size-[18px] shrink-0 object-contain"
      draggable={false}
      aria-hidden
    />
  )
}

export default function SearchResultCard({ result }: SearchResultCardProps) {
  return (
    <Link
      href={`/map-search?id=${result.id}`}
      className="group flex cursor-pointer gap-5 border-b border-border py-5 pr-4 pl-0 font-pretendard antialiased transition-colors hover:bg-muted/25 [&_*]:font-pretendard"
    >
      {/* 이미지 — 모바일만 크기 축소, lg+ 는 기존과 동일 */}
      <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-40 sm:w-60 md:h-48 md:w-64 lg:h-52 lg:w-72">
        <img
          src={result.image}
          alt={result.title}
          className="size-full object-cover transition-transform group-hover:scale-[1.02]"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1 lg:flex-row lg:gap-1">
          <span className="rounded bg-[#1e3a8a] px-2 py-0.5 text-[11px] font-bold text-white">
            매매
          </span>
          <span className="rounded bg-[#2563EB] px-2 py-0.5 text-[11px] font-bold text-white">
            {result.badge}
          </span>
        </div>
        <button
          type="button"
          className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/25 shadow-none ring-0 transition-colors hover:bg-white/25"
          aria-label="관심 매물"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <Heart className="size-[18px] fill-white text-white drop-shadow-sm" strokeWidth={2} aria-hidden />
        </button>
      </div>

      {/* 본문 */}
      <div className="flex min-h-[10rem] min-w-0 flex-1 flex-col justify-between lg:min-h-[12rem]">
        <div className="space-y-3">
          <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground md:text-md">
            {result.title}
          </h3>

          <div className="space-y-2 text-xs text-[#6B7280] md:text-xs">
            {/* 위치·건물 — 핀 하나 + 여러 줄 */}
            <div className={metaRow}>
              <MetaLineIcon src={SEARCH_ICON_LOCATION} />
              <div className="min-w-0 flex-1 space-y-0.5 leading-snug">
                {result.pinLines.map((line, i) => (
                  <p key={`${result.id}-pin-${i}`}>{line}</p>
                ))}
              </div>
            </div>
            {/* 면적 — 육각 */}
            <div className={metaRow}>
              <MetaLineIcon src={SEARCH_ICON_AREA} />
              <span className="min-w-0 flex-1 leading-snug">{result.area}</span>
            </div>
            {/* 승인일 — 달력 (모바일 숨김) */}
            <div className="hidden w-full min-w-0 items-start gap-2 md:flex">
              <MetaLineIcon src={SEARCH_ICON_CALENDAR} />
              <span className="min-w-0 flex-1 leading-snug">{result.date}</span>
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-5 rounded-[7px] bg-[#F3F4F6] px-3 py-1.5 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1">
              <Eye className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
              {result.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
              {result.comments}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
              {result.likes}
            </span>
          </div>
        </div>

        <div className="mt-4 flex max-w-full flex-nowrap items-center justify-end gap-2 md:mt-3">
          <span className="shrink-0 rounded border border-[#e5e7eb] bg-white px-3 py-1 text-[11px] font-semibold text-neutral-900 shadow-none">
            {result.deposit}
          </span>
          <span className="shrink-0 rounded bg-[#facc15] px-3 py-1 text-[11px] font-bold text-neutral-900">
            {result.discount}
          </span>
          <span className="ml-1 shrink-0 text-lg font-bold tracking-tight text-neutral-900 md:text-[20px]">
            {result.price}
          </span>
        </div>
      </div>
    </Link>
  )
}
