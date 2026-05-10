'use client'

import { ChevronRight, Eye, MessageCircle, Heart } from 'lucide-react'

const filterTabs = [
  { id: 'all', label: '전체' },
  { id: 'review', label: '투자후기' },
  { id: 'qna', label: 'Q&A' },
  { id: 'analysis', label: '시장분석' },
]

const posts = [
  {
    id: 1,
    badge: '부동산',
    badgeColor: 'bg-green-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    description: '살라주도 관찮고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    date: '2026. 02. 22',
    views: 123,
    comments: 123,
    likes: 123,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100&h=80&fit=crop',
  },
  {
    id: 2,
    badge: '질문',
    badgeColor: 'bg-teal-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    description: '살라주도 관찮고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    date: '2026. 02. 22',
    views: 123,
    comments: 123,
    likes: 123,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100&h=80&fit=crop',
  },
  {
    id: 3,
    badge: '질문',
    badgeColor: 'bg-teal-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    description: '살라주도 관찮고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    date: '2026. 02. 22',
    views: 123,
    comments: 123,
    likes: 123,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100&h=80&fit=crop',
  },
  {
    id: 4,
    badge: '노하우',
    badgeColor: 'bg-yellow-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    description: '살라주도 관찮고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    date: '2026. 02. 22',
    views: 123,
    comments: 123,
    likes: 123,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100&h=80&fit=crop',
  },
]

export default function CommunitySection() {
  return (
    <section className="py-12 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">베스트 커뮤니티</h2>
          <a href="#" className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium">
            더보기 <ChevronRight size={16} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8">
          {filterTabs.map((tab, i) => (
            <button
              key={tab.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="flex gap-4 p-4 border-b border-border hover:bg-secondary/30 transition-colors cursor-pointer">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className={`${post.badgeColor} text-white px-2 py-1 rounded text-xs font-bold`}>
                    {post.badge}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2 line-clamp-1">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye size={14} />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={14} />
                    {post.likes}
                  </span>
                </div>
              </div>
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
