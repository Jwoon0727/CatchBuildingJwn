'use client'

import {
  Search,
  Star,
  MessageSquare,
  Map,
  CircleHelp,
  MessageCircle,
  CreditCard,
  TrendingUp,
  ClipboardList,
  DoorOpen,
} from 'lucide-react'

/** 필터 버튼 아이콘 — `public` 기준 경로(예: `/icons/filter.png`) 또는 이미지 URL */
const FILTER_ICON_SRC = ''

const categories = [
  { icon: Search, label: '매물검색', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Star, label: '추천매물', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { icon: MessageSquare, label: '커뮤니티', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: Map, label: '지도검색', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: CircleHelp, label: 'Q&A', color: 'text-pink-500', bg: 'bg-pink-50' },
  { icon: MessageCircle, label: '카톡방', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: CreditCard, label: '자금확보', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: TrendingUp, label: '현금흐름', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: ClipboardList, label: '분석요청', color: 'text-blue-600', bg: 'bg-sky-50' },
  { icon: DoorOpen, label: '입장요청', color: 'text-violet-600', bg: 'bg-violet-50' },
]

export default function CategoryNav() {
  return (
    <section className="bg-background font-pretendard">
      {/* Category Icons */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-5 justify-items-center gap-x-2 gap-y-5 md:flex md:flex-wrap md:justify-center md:gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <button
                  key={i}
                  type="button"
                  className="flex w-full max-w-[4.25rem] flex-col items-center gap-1.5 text-center font-pretendard transition-opacity hover:opacity-80 md:w-auto md:max-w-none md:gap-2"
                >
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-2xl md:size-14 ${cat.bg} ${cat.color} transition-colors hover:brightness-[0.97]`}
                  >
                    <Icon className="size-5 stroke-[1.75] md:size-6" aria-hidden />
                  </div>
                  <span className="text-[0.65rem] font-medium font-pretendard text-foreground leading-tight whitespace-nowrap md:text-xs">
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* 필터 + 입력 한 박스 / 검색 버튼 분리 (시안) */}
      <div className="py-6 md:py-8">
        <div className="mx-auto max-w-[52rem] px-4">
          <form
            className="flex items-stretch gap-2 font-pretendard sm:gap-3"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="flex min-h-11 min-w-0 flex-1 overflow-hidden rounded-xl border border-border bg-white">
              <button
                type="button"
                className="flex shrink-0 items-center gap-2 px-3 py-2.5 text-sm font-medium font-pretendard text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground md:px-4"
              >
                <img
                  src="/icon/filter.svg"
                  alt="필터"
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0 object-contain"
                  draggable={false}
                />
                <span className="hidden md:inline">필터</span>
              </button>
              <div className="hidden w-px shrink-0 self-stretch bg-border md:block" aria-hidden />
              <input
                type="search"
                name="q"
                placeholder="지역, 건물명, 도로명 주소 검색"
                className="min-w-0 flex-1 border-0 bg-transparent px-2 py-2 text-sm font-pretendard text-foreground placeholder:text-muted-foreground placeholder:font-pretendard focus:outline-none focus:ring-0 md:px-3"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-[#2B6BE5] py-2 text-sm font-bold font-pretendard text-white shadow-sm transition-colors hover:bg-[#2566d4] max-md:min-w-[4rem] px-4 md:px-5"
            >
              검색
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
