'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { LayoutGrid, Home, Heart, TrendingUp, BookOpen, FilePlus, DollarSign, PlusCircle, Search, Eye, MessageSquare, MessageCircle, ThumbsUp, ChevronDown, Pencil } from 'lucide-react'

type CategoryTabItem = {
  icon: typeof LayoutGrid
  label: string
  /** 이미지처럼 회색 아이콘 (기타) */
  iconMuted?: boolean
}

const categoryTabs: CategoryTabItem[] = [
  { icon: LayoutGrid, label: '전체' },
  { icon: Home, label: '부동산투자' },
  { icon: Heart, label: '내집마련' },
  { icon: TrendingUp, label: '재테크' },
  { icon: BookOpen, label: '경매/학습' },
  { icon: FilePlus, label: '신청/대출' },
  { icon: DollarSign, label: '세금/절세' },
  { icon: PlusCircle, label: '기타', iconMuted: true },
]

const popularPosts = [
  { rank: 1, title: '지금은 돈과 투자의 방향이 바뀌는 변곡점이다', comments: 123 },
  { rank: 2, title: '지금은 돈과 투자의 방향이 바뀌는 변곡점이다', comments: 123 },
  { rank: 3, title: '한 달간 42건의 계약서를 작성했습니다. (매도2, 매수1, 전세1)', comments: 123 },
  { rank: 4, title: '서울 전세 매물, 1년 만에 37% 사라졌습니다. 앞으로 어떤일이 일어날까요?', comments: 123 },
  { rank: 5, title: '흙수저에서 시작하는 방법', comments: 123 },
]

const communityPosts = [
  {
    badge: '노하우',
    badgeColor: 'bg-[#FF6B00]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적<br/> 인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: '/building/building_type03.jpg',
  },
  {
    badge: '부동산',
    badgeColor: 'bg-[#07B34E]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적<br/> 인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: '/building/building_type03.jpg',
  },
  {
    badge: '질문',
    badgeColor: 'bg-[#07B34E]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적<br/> 인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: '/building/building_type03.jpg',
  },
  {
    badge: '내집마련',
    badgeColor: 'bg-[#07B34E]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적<br/> 인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: '/building/building_type03.jpg',
  },
  {
    badge: '노하우',
    badgeColor: 'bg-[#2567E7]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적<br/> 인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: '/building/building_type03.jpg',
  },
  {
    badge: 'AD',
    badgeColor: 'bg-[#07B34E]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적<br/> 인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: '/building/building_type03.jpg',
  },
]

const BR_TAG_RE = /<br\s*\/?>/i

function renderContentWithBr(content: string) {
  const segments = content.split(BR_TAG_RE)
  return segments.map((segment, i) => (
    <Fragment key={i}>
      {i > 0 ? <br /> : null}
      {i > 0 ? segment.trimStart() : segment}
    </Fragment>
  ))
}

export default function CommunityContent() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex-1 min-w-0">
      {/* Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-6 mb-6 text-white">
        <p className="text-xs opacity-80 mb-1">영끌남 커뮤니티</p>
        <h2 className="text-xl font-bold mb-1">현명한 투자로, 더 나은 미래를 만드세요</h2>
        <p className="text-sm opacity-80">실전 경험과 인사이트를 나누는 부동산 투자 커뮤니티</p>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 flex gap-3 overflow-x-auto pb-2 sm:gap-4">
        {categoryTabs.map((tab, index) => {
          const Icon = tab.icon
          const isActive = activeTab === index
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTab(index)}
              className="flex min-w-[4.5rem] shrink-0 flex-col items-center gap-2 transition-opacity hover:opacity-90"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F8F8] ${
                  isActive ? ' ring-offset-2' : ''
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={2}
                  className={tab.iconMuted ? 'text-gray-400' : 'text-[#2567E7]'}
                  aria-hidden
                />
              </div>
              <span
                className={`text-center text-xs whitespace-nowrap text-foreground ${isActive ? 'font-normal' : 'font-normal'}`}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Filter Tabs (Second Row) */}
  

      {/* Search Bar */}
      <div className="pb-8 pt-4 border-t border-b border-border flex gap-2 mb-6">
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-[4px] text-sm text-foreground">
            전체 게시판
            <ChevronDown size={22} />
          </button>
        </div>
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-[4px] text-sm text-foreground">
            작성자+제목+내용
            <ChevronDown size={22} />
          </button>
        </div>
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="찾고 싶은 콘텐츠를 검색해 주세요"
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-[4px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button className="px-6 py-2.5 bg-[#2567E7] text-white rounded-[8px] text-sm font-medium hover:bg-primary/90 transition-colors">
          검색
        </button>
      </div>

      {/* Popular Posts */}
      <div className="mb-8">
        <h3 className="mb-4 font-bold text-foreground">인기글</h3>
        <div className="rounded-2xl bg-[#F8F8F8] p-4">
          <ul className="flex flex-col gap-3">
            {popularPosts.map((post, index) => (
              <li key={`${post.rank}-${index}`}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-start gap-3 rounded-xl py-1 text-left transition-colors hover:bg-white/70"
                >
                  <span className="w-6 shrink-0 pt-0.5 text-center text-sm font-bold text-[#2567E7]">{post.rank}</span>
                  <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                    <span className="text-sm font-normal leading-snug text-foreground">{post.title}</span>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs text-muted-foreground">
                      <MessageSquare size={13} strokeWidth={1.75} className="text-muted-foreground" aria-hidden />
                      {post.comments}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Community Posts */}
      <div>
        <h3 className="font-bold text-foreground mb-4">커뮤니티</h3>
        <div className="space-y-4">
          {communityPosts.map((post, index) => (
            <Link key={index} href={`/community/${index + 1}`} className="flex gap-4 py-4 border-b border-border last:border-b-0 cursor-pointer hover:bg-secondary/30 rounded-lg px-2 -mx-2 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-1 ${post.badgeColor} text-white text-xs rounded`}>
                    {post.badge}
                  </span>
                </div>
                <h4 className="font-medium text-base text-foreground mb-1.5">{post.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{renderContentWithBr(post.content)}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye size={12} /> {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={12} /> {post.likes}
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end justify-end gap-3">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <div className="mb-7 h-16 w-24 overflow-hidden rounded-lg">
                  <img src={post.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 모바일 전용 더보기 버튼 */}
      <button
        type="button"
        className="lg:hidden mt-4 w-full flex items-center justify-center gap-1.5 py-4 text-sm text-muted-foreground"
      >
        더보기
        <ChevronDown size={18} strokeWidth={2} />
      </button>

      {/* 모바일 전용 글쓰기 플로팅 버튼 */}
      <Link
        href="/community/write"
        className="lg:hidden fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#2567E7] shadow-lg transition-colors hover:bg-[#2567E7]/90"
        aria-label="글쓰기"
      >
        <Pencil size={22} className="text-white" strokeWidth={2} />
      </Link>
    </div>
  )
}
