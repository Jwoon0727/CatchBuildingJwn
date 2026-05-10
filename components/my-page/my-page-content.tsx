'use client'

import { useState } from 'react'
import { Bookmark, FileText, MessageSquare, Reply, Eye, MessageCircle, Heart } from 'lucide-react'

const stats = [
  { label: '팔로워', value: '128' },
  { label: '팔로잉', value: '45' },
  { label: '게시글', value: '34' },
  { label: '댓글', value: '5' },
]

const supportPrograms = [
  { badge: '지원사업', title: '2026 국가첨단전략산업 기술혁신 융자사업 공고', amount: '지원금액 0,500만원', date: '신청 기간 25. 01. 06', daysAgo: '3일 전' },
  { badge: '지원사업', title: '2026 국가첨단전략산업 기술혁신 융자사업 공고', amount: '지원금액 0,500만원', date: '신청 기간 25. 01. 06', daysAgo: '3일 전' },
  { badge: '지원사업', title: '2026 국가첨단전략산업 기술혁신 융자사업 공고', amount: '지원금액 0,500만원', date: '신청 기간 25. 01. 06', daysAgo: '3일 전' },
]

const posts = [
  {
    badge: '노하우',
    badgeColor: 'bg-green-500',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=80&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=80&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=80&fit=crop',
  },
]

const sections = [
  { icon: Bookmark, title: '북마크한 게시글', count: 9 },
  { icon: FileText, title: '내가 쓴 게시글', count: 9 },
  { icon: MessageSquare, title: '내가 쓴 댓글', count: 9 },
  { icon: Reply, title: '내 댓글에 답글', count: 9 },
  { icon: MessageCircle, title: '내 게시글에 달린 댓글', count: 9 },
]

export default function MyPageContent() {
  const [formData, setFormData] = useState({
    name: '홍길동',
    nickname: '안드로메다곰돌이',
    email: 'user001@hanmail.net',
    phone: '',
  })

  return (
    <div className="flex-1 min-w-0">
      {/* Header */}
      <h1 className="text-2xl font-bold text-foreground mb-8">마이페이지</h1>

      {/* Stats */}
      <div className="flex gap-12 pb-6 border-b border-border mb-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Badge Progress */}
      <div className="mb-2">
        <div className="flex items-center gap-4 mb-3">
          <span className="px-3 py-1 bg-amber-400 text-white text-xs font-bold rounded">BRONZE 1</span>
          <span className="text-sm text-muted-foreground">다음 등급까지</span>
          <span className="text-sm text-primary font-medium">620 / 1,000 포인트</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div className="h-full bg-primary rounded-full" style={{ width: '62%' }} />
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          380포인트 더 모으면 <span className="text-amber-600 font-medium">SILVER 1</span>로 승급합니다
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border mb-8" />

      {/* Profile Form */}
      <div>
        <h2 className="font-bold text-foreground mb-6">기본 정보</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">이름</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">닉네임</label>
            <input
              type="text"
              value={formData.nickname}
              onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">이메일</label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg text-sm text-muted-foreground"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              휴대폰 번호<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={'"−"없이 숫자만 입력해 주세요.'}
                className="flex-1 px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="px-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                변경
              </button>
            </div>
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="px-8 py-3 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
            취소
          </button>
          <button className="px-8 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            저장
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border my-10" />

      {/* Bookmarked Support Programs */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 font-bold text-foreground">
            <Bookmark size={18} className="text-primary" />
            북마크한 지원 사업 <span className="text-primary">9</span>
          </h3>
          <button className="text-sm text-primary hover:underline flex items-center gap-1">
            &rarr;
          </button>
        </div>
        <div className="space-y-4">
          {supportPrograms.map((program, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs text-primary font-medium">{program.badge}</span>
                  <span className="font-medium text-foreground">{program.title}</span>
                </div>
                <p className="text-xs text-muted-foreground">{program.amount} | {program.date}</p>
              </div>
              <span className="text-sm text-muted-foreground">{program.daysAgo}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Post Sections */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-2 font-bold text-foreground">
              <section.icon size={18} className="text-primary" />
              {section.title} <span className="text-primary">{section.count}</span>
            </h3>
            <button className="text-sm text-primary hover:underline flex items-center gap-1">
              &rarr;
            </button>
          </div>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="flex gap-4 py-4 border-b border-border last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 ${post.badgeColor} text-white text-xs rounded`}>
                      {post.badge}
                    </span>
                  </div>
                  <h4 className="font-medium text-foreground mb-1">{post.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.content}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye size={12} /> {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={12} /> {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={12} /> {post.likes}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <div className="w-20 h-16 rounded-lg overflow-hidden">
                    <img src={post.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
