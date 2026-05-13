'use client'

import { useState } from 'react'
import { ArrowRight, Eye, MessageCircle, Heart } from 'lucide-react'

const filterTabs = [
  { id: 'all', label: '전체' },
  { id: 'review', label: '투자후기' },
  { id: 'qna', label: 'Q&A' },
  { id: 'analysis', label: '시장분석' },
]

/** 문자열 안의 `<br/>` / `<br />` 를 실제 줄바꿈으로 렌더링 */
function splitDescriptionHtmlBreaks(text: string): string[] {
  return text.split(/<br\s*\/?>/i)
}

const posts = [
  {
    id: 1,
    badge: '부동산',
    badgeColor: 'bg-[#22C55E]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    description:
      '살라주도 관찮고 임대수익까지 노릴 수 있는 현실적인 <br/> 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    date: '2026. 02. 22',
    views: 123,
    comments: 123,
    likes: 123,
    image:
      '/building/building_type03.jpg',
  },
  {
    id: 2,
    badge: '질문',
    badgeColor: 'bg-[#22C55E]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    description:
      '살라주도 관찮고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    date: '2026. 02. 22',
    views: 123,
    comments: 123,
    likes: 123,
    image:
      '/building/building_type03.jpg',
  },
  {
    id: 3,
    badge: '질문',
    badgeColor: 'bg-[#22C55E]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    description:
      '살라주도 관찮고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    date: '2026. 02. 22',
    views: 123,
    comments: 123,
    likes: 123,
    image:
      '/building/building_type03.jpg',
  },
  {
    id: 4,
    badge: '노하우',
    badgeColor: 'bg-[#F97316]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    description:
      '살라주도 관찮고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    date: '2026. 02. 23',
    views: 123,
    comments: 123,
    likes: 123,
    image:
      '/building/building_type03.jpg',
  },
]

export default function CommunitySection() {
  const [activeTab, setActiveTab] = useState<string>('all')

  return (
    <section className="border-border bg-background py-12 font-pretendard [&_button]:font-pretendard">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">베스트 커뮤니티</h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-[#2563EB] hover:text-[#1d4ed8]"
          >
            더보기{' '}
            <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filterTabs.map(tab => {
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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

        {/* Posts — 2열, 마지막 행은 하단 구분선 없음 */}
        <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
          {posts.map(post => (
            <article
              key={post.id}
              className="cursor-pointer border-b border-[#E5E8EC] py-6 transition-colors last:border-b-0 hover:bg-[#FAFBFC] lg:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`shrink-0 rounded px-2 py-1 text-xs font-bold text-white ${post.badgeColor}`}
                  >
                    {post.badge}
                  </span>
                  <span className="text-xs text-[#9CA3AF]">{post.date}</span>
                </div>

                <div className="flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 line-clamp-2 text-[11.7px] font-bold leading-snug text-foreground md:text-[15px]">
                      {post.title}
                    </h3>
                    <p className="line-clamp-4 text-[10px] leading-relaxed text-[#6B7280] md:text-sm">
                      {splitDescriptionHtmlBreaks(post.description).map((part, i) => (
                        <span key={i}>
                          {i > 0 ? <br /> : null}
                          {part}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="relative h-[76px] w-[100px] shrink-0 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex max-md:-mt-6 items-center gap-4 text-xs text-[#9CA3AF]">
                  <span className="flex items-center gap-1">
                    <Eye className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
                    {post.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
