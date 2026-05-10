'use client'

import Link from 'next/link'
import { Home, Heart, TrendingUp, GraduationCap, FileText, DollarSign, MoreHorizontal, Eye, MessageCircle, ThumbsUp, Edit } from 'lucide-react'

const stats = [
  { label: '팔로워', value: '128' },
  { label: '팔로잉', value: '45' },
  { label: '게시글', value: '34' },
  { label: '댓글', value: '5' },
]

const categories = [
  {
    icon: Home,
    title: '부동산 투자',
    posts: [
      { title: '노후 준비를 위한 소액 아파트 투자 전략 3가지', views: 123, comments: 123, likes: 123 },
      { title: '월 100만원 저축으로 5년 안에 1억을 모은 비결 공개합니다', views: 123, comments: 123, likes: 123 },
      { title: '복잡한 세금 신고, 전문가에게 맡기고 절세하세요', views: 123, comments: 123, likes: 123 },
    ],
  },
  {
    icon: Heart,
    title: '내집마련',
    posts: [
      { title: '노후 준비를 위한 소액 아파트 투자 전략 3가지', views: 123, comments: 123, likes: 123 },
      { title: '월 100만원 저축으로 5년 안에 1억을 모은 비결 공개합니다', views: 123, comments: 123, likes: 123 },
      { title: '복잡한 세금 신고, 전문가에게 맡기고 절세하세요', views: 123, comments: 123, likes: 123 },
    ],
  },
  {
    icon: TrendingUp,
    title: '재테크',
    posts: [
      { title: '노후 준비를 위한 소액 아파트 투자 전략 3가지', views: 123, comments: 123, likes: 123 },
      { title: '월 100만원 저축으로 5년 안에 1억을 모은 비결 공개합니다', views: 123, comments: 123, likes: 123 },
      { title: '복잡한 세금 신고, 전문가에게 맡기고 절세하세요', views: 123, comments: 123, likes: 123 },
    ],
  },
  {
    icon: GraduationCap,
    title: '경매/학습',
    posts: [
      { title: '노후 준비를 위한 소액 아파트 투자 전략 3가지', views: 123, comments: 123, likes: 123 },
      { title: '월 100만원 저축으로 5년 안에 1억을 모은 비결 공개합니다', views: 123, comments: 123, likes: 123 },
      { title: '복잡한 세금 신고, 전문가에게 맡기고 절세하세요', views: 123, comments: 123, likes: 123 },
    ],
  },
  {
    icon: FileText,
    title: '신청/대출',
    posts: [
      { title: '노후 준비를 위한 소액 아파트 투자 전략 3가지', views: 123, comments: 123, likes: 123 },
      { title: '월 100만원 저축으로 5년 안에 1억을 모은 비결 공개합니다', views: 123, comments: 123, likes: 123 },
      { title: '복잡한 세금 신고, 전문가에게 맡기고 절세하세요', views: 123, comments: 123, likes: 123 },
    ],
  },
  {
    icon: DollarSign,
    title: '세금/절세',
    posts: [
      { title: '노후 준비를 위한 소액 아파트 투자 전략 3가지', views: 123, comments: 123, likes: 123 },
      { title: '월 100만원 저축으로 5년 안에 1억을 모은 비결 공개합니다', views: 123, comments: 123, likes: 123 },
      { title: '복잡한 세금 신고, 전문가에게 맡기고 절세하세요', views: 123, comments: 123, likes: 123 },
    ],
  },
  {
    icon: MoreHorizontal,
    title: '기타',
    posts: [
      { title: '노후 준비를 위한 소액 아파트 투자 전략 3가지', views: 123, comments: 123, likes: 123 },
      { title: '월 100만원 저축으로 5년 안에 1억을 모은 비결 공개합니다', views: 123, comments: 123, likes: 123 },
      { title: '복잡한 세금 신고, 전문가에게 맡기고 절세하세요', views: 123, comments: 123, likes: 123 },
    ],
  },
]

export default function CommunitySidebar() {
  return (
    <div className="w-72 flex-shrink-0">
      {/* User Profile Card */}
      <div className="bg-white rounded-xl border border-border p-5 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-foreground border-2 border-gray-200">
            홍
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">홍길동</span>
              <span className="px-2 py-0.5 bg-amber-400 text-white text-xs font-bold rounded">BRONZE 1</span>
            </div>
            <p className="text-xs text-muted-foreground">카카오 계정으로 가입</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-4">
          <button className="flex-1 px-3 py-1.5 border border-primary text-primary text-xs rounded-full hover:bg-primary/5 transition-colors">
            게시글
          </button>
          <button className="flex-1 px-3 py-1.5 border border-border text-muted-foreground text-xs rounded-full hover:bg-secondary transition-colors">
            댓글
          </button>
          <button className="flex-1 px-3 py-1.5 border border-border text-muted-foreground text-xs rounded-full hover:bg-secondary transition-colors">
            구독하기
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Write Button */}
      <Link href="/community/write" className="w-full py-3 bg-primary text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mb-6">
        <Edit size={18} />
        글쓰기
      </Link>

      {/* Categories */}
      <div className="space-y-6 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center gap-2 mb-3">
              <category.icon size={18} className="text-muted-foreground" />
              <h3 className="font-bold text-foreground">{category.title}</h3>
            </div>
            <div className="space-y-3">
              {category.posts.map((post, postIndex) => (
                <div key={postIndex} className="cursor-pointer hover:bg-secondary/50 rounded-lg p-2 -mx-2 transition-colors">
                  <p className="text-sm text-foreground line-clamp-2 mb-1">{post.title}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
