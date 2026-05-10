'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LayoutGrid, Home, Heart, TrendingUp, GraduationCap, FileText, DollarSign, MoreHorizontal, Search, Eye, MessageCircle, ThumbsUp, ChevronDown } from 'lucide-react'

const categoryTabs = [
  { icon: LayoutGrid, label: '전체' },
  { icon: Home, label: '부동산투자' },
  { icon: Heart, label: '내집마련' },
  { icon: TrendingUp, label: '재테크' },
  { icon: GraduationCap, label: '경매/학습' },
  { icon: FileText, label: '신청/대출' },
  { icon: DollarSign, label: '세금/절세' },
  { icon: MoreHorizontal, label: '기타' },
]

const popularPosts = [
  { rank: 1, title: '지금은 돈과 투자의 방향이 바뀌는 변곡점이다', views: 123 },
  { rank: 2, title: '지금은 돈과 투자의 방향이 바뀌는 변곡점이다', views: 123 },
  { rank: 3, title: '한 달간 42건의 계약서를 작성했습니다. (매도2, 매수1, 전세1)', views: 123 },
  { rank: 4, title: '서울 전세 매물, 1년 만에 37% 사라졌습니다. 앞으로 어떤일이 일어날까요?', views: 123 },
  { rank: 5, title: '흙수저에서 시작하는 방법', views: 123 },
]

const communityPosts = [
  {
    badge: '노하우',
    badgeColor: 'bg-green-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=90&fit=crop',
  },
  {
    badge: '부동산',
    badgeColor: 'bg-primary',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=90&fit=crop',
  },
  {
    badge: '질문',
    badgeColor: 'bg-gray-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=90&fit=crop',
  },
  {
    badge: '내집마련',
    badgeColor: 'bg-blue-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=90&fit=crop',
  },
  {
    badge: '소하우',
    badgeColor: 'bg-green-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=90&fit=crop',
  },
  {
    badge: 'AD',
    badgeColor: 'bg-gray-400',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=90&fit=crop',
  },
]

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
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {categoryTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors flex-shrink-0 ${
              activeTab === index ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary'
            }`}
          >
            <tab.icon size={24} />
            <span className="text-xs whitespace-nowrap">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Filter Tabs (Second Row) */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categoryTabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm transition-colors flex-shrink-0 ${
              index === 0 ? 'bg-primary text-white' : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6">
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm text-foreground">
            전체 게시판
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm text-foreground">
            작성자+제목+내용
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="찾고 싶은 콘텐츠를 검색해 주세요"
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          검색
        </button>
      </div>

      {/* Popular Posts */}
      <div className="mb-8">
        <h3 className="font-bold text-foreground mb-4">인기글</h3>
        <div className="space-y-2">
          {popularPosts.map((post) => (
            <div key={post.rank} className="flex items-center gap-3 py-2 cursor-pointer hover:bg-secondary/50 rounded-lg px-2 -mx-2 transition-colors">
              <span className={`w-5 h-5 flex items-center justify-center text-xs font-bold rounded ${
                post.rank <= 3 ? 'bg-primary text-white' : 'text-muted-foreground'
              }`}>
                {post.rank}
              </span>
              <p className="flex-1 text-sm text-foreground truncate">{post.title}</p>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Eye size={12} /> {post.views}
              </span>
            </div>
          ))}
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
                  <span className={`px-2 py-0.5 ${post.badgeColor} text-white text-xs rounded`}>
                    {post.badge}
                  </span>
                </div>
                <h4 className="font-medium text-foreground mb-1">{post.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.content}</p>
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
              <div className="flex flex-col items-end justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <div className="w-24 h-20 rounded-lg overflow-hidden">
                  <img src={post.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
