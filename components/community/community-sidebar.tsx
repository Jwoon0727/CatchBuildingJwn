'use client'

import Link from 'next/link'
import { Home, Heart, TrendingUp, BookOpen, FileText, DollarSign, MoreHorizontal, Eye, MessageSquare, Edit } from 'lucide-react'

const actionBtnClass =
  'flex-1 rounded border border-[#BEDBFF] bg-white px-1 py-1.5 text-[11px] font-medium leading-tight text-[#2567E7] transition-colors hover:bg-[#BEDBFF]/30'

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
    icon: BookOpen,
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
    <div className="w-60 shrink-0">
    <div className="mb-6 rounded-xl border border-border bg-white p-5">
      <div className="mb-5 flex gap-3">
        <div className="relative shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-800">
            홍
          </div>
          <button
            type="button"
            aria-label="프로필 사진 변경"
            className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#2567E7] shadow-sm ring-2 ring-white"
          >
            <Edit className="h-3 w-3 text-white" strokeWidth={2.5} />
          </button>
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-bold text-foreground mb-2">홍길동</span>
            <span className="rounded-full bg-[#432DD7] px-2 py-1.5 mb-3.5 text-[10px] font-bold uppercase tracking-wide text-white">
              BRONZE 1
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">카카오 계정으로 가입</p>
        </div>
      </div>

      <div className="flex gap-1.5">
        <button type="button" className={actionBtnClass}>
          게시글
        </button>
        <button type="button" className={actionBtnClass}>
          댓글
        </button>
        <button type="button" className={actionBtnClass}>
          구독하기
        </button>
      </div>

      {/* Stats */}
      <div className="mt-5 flex justify-between border-t border-border pt-5 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="mb-3 text-lg font-semibold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

      <Link href="/community/write" className="w-full py-3 bg-[#2567E7] text-white rounded-[8px] font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mb-6">
        <Edit size={18} />
        글쓰기
      </Link>

      {/* Categories */}
      <div className="mb-6 max-h-[calc(500vh-400px)] overflow-y-auto rounded-xl border border-border bg-white">
        <div className="p-4">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={categoryIndex > 0 ? 'mt-5 border-t border-border pt-5' : undefined}
            >
              <div className="mb-4 flex items-center gap-2">
                <category.icon size={18} className="shrink-0 text-[#2567E7]" strokeWidth={2} />
                <h3 className="text-[14px] font-semibold leading-tight text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-col gap-4">
                {category.posts.map((post, postIndex) => (
                  <div
                    key={postIndex}
                    className="cursor-pointer rounded-lg px-1 py-0.5 transition-colors hover:bg-muted/50"
                  >
                    <p className="mb-2 line-clamp-2 text-[13px] font-medium leading-snug text-foreground">{post.title}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye size={14} strokeWidth={1.75} aria-hidden /> {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare size={14} strokeWidth={1.75} aria-hidden /> {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={14} strokeWidth={1.75} aria-hidden /> {post.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
