'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Eye, MessageCircle, Heart, ArrowRight } from 'lucide-react'

/** `public/my-page/sections/`에 동일 파일명으로 이미지를 넣으면 헤더 아이콘이 바뀝니다. (svg·png·webp 등) */
const SECTION_ICONS = {
  bookmarkSupport: '/icon/book.svg',
  bookmarkPosts: '/icon/book2.svg',
  myPosts: '/icon/board.svg',
  myComments: '/icon/com.svg',
  replyToMyComment: '/icon/com2.svg',
  commentsOnMyPost: '/icon/com3.svg',
} as const

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
    badgeColor: 'bg-[#FF6B00]',
    title: '노후 준비를 위한 소액 아파트 투자 전략 3가지',
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 <br/> 방법을 공유합니다. 지역 선택부터 매물 분석까지',
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
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 <br/> 방법을 공유합니다. 지역 선택부터 매물 분석까지',
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
    content: '실거주는 편하고 임대수익까지 노릴 수 있는 현실적인 <br/> 방법을 공유합니다. 지역 선택부터 매물 분석까지',
    views: 123,
    comments: 123,
    likes: 123,
    date: '2026. 02. 22',
    image: '/building/building_type03.jpg',
  },
]

const sections = [
  { title: '북마크한 게시글', count: 9, iconSrc: SECTION_ICONS.bookmarkPosts },
  { title: '내가 쓴 게시글', count: 9, iconSrc: SECTION_ICONS.myPosts },
  { title: '내가 쓴 댓글', count: 9, iconSrc: SECTION_ICONS.myComments },
  { title: '내 댓글에 답글', count: 9, iconSrc: SECTION_ICONS.replyToMyComment },
  { title: '내 게시글에 달린 댓글', count: 9, iconSrc: SECTION_ICONS.commentsOnMyPost },
]

/** 문자열 안의 `<br/>` / `<br>` / `<br />`를 실제 줄바꿈으로 렌더 */
function contentWithBrTags(text: string) {
  const parts = text.split(/<br\s*\/?>/i)
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {part}
    </Fragment>
  ))
}

export default function MyPageContent() {
  const [formData, setFormData] = useState({
    name: '홍길동',
    nickname: '안드로메다곰돌이',
    email: 'user001@hanmail.net',
    phone: '',
  })

  return (
    <div className="min-w-0 flex-1 font-pretendard lg:pt-0 [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard">
      {/* Header - 데스크톱 전용 */}
      <h1 className="hidden lg:block mt-5 pb-9 mb-8 border-b border-border text-xl font-bold text-foreground">
        마이페이지
      </h1>

      {/* Stats — 모바일 4열 가로 한 줄 */}
      <div className="-mt-4 mb-6 grid w-full grid-cols-4 gap-x-2 gap-y-0 border-t border-b border-border pt-4 pb-4 sm:gap-x-8">
        {stats.map((stat, index) => (
          <div key={index} className="min-w-0 text-left">
            <p className="text-lg font-bold text-foreground tabular-nums sm:text-xl">{stat.value}</p>
            <p className="text-[11px] text-foreground sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Badge Progress */}
      <div className="mb-2">
        <div className="flex items-center gap-4 mb-3">
          <span className="px-3 py-1.5 bg-[#432DD7] text-white text-xs font-bold rounded-full">BRONZE 1</span>
          <span className="-mb-1 text-xs text-muted-foreground">다음 등급까지</span>
          <span className="-mb-1 ml-8 text-xs text-[#2567E7] font-normal">620 / 1,000 포인트</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div className="h-full bg-[#432DD7] rounded-full" style={{ width: '62%' }} />
        </div>
        <p className="text-xs text-muted-foreground mb-6">
          380포인트 더 모으면 <span className="text-[#333333] font-medium">SILVER 1</span>로 승급합니다
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
              <button className="px-6 py-3 border border-[#2567E7] rounded-lg text-sm font-medium text-[#2567E7] hover:bg-[#BEDBFF]/30 transition-colors">
                변경
              </button>
            </div>
          </div>
        </div>

        {/* Form Buttons */}
        <div className="mt-8 flex w-full gap-3 md:justify-end">
          <button className="min-w-0 flex-1 border border-[#2567E7] rounded-lg px-4 py-3 text-sm font-medium text-[#2567E7] transition-colors hover:bg-[#BEDBFF]/30 md:flex-none md:px-8">
            취소
          </button>
          <button className="min-w-0 flex-1 rounded-lg bg-[#2567E7] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 md:flex-none md:px-8">
            저장
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border my-10" />

      {/* Bookmarked Support Programs */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg flex items-center gap-2 font-bold text-foreground">
            <span className="relative inline-flex size-9 shrink-0 items-center justify-center sm:size-7">
              <Image
                src={SECTION_ICONS.bookmarkSupport}
                alt=""
                width={36}
                height={36}
                className="size-9 object-contain sm:size-7"
              />
            </span>
            북마크한 지원 사업 <span className=" text-[#2567E7]">9</span>
          </h3>
          <button
            type="button"
            className="flex items-center text-[#2567E7] transition-opacity hover:opacity-80"
            aria-label="더보기"
          >
            <ArrowRight className="size-6" strokeWidth={1.35} aria-hidden />
          </button>
        </div>
        <div className="space-y-4">
          {supportPrograms.map((program, index) => (
            <div key={index} className="flex items-center justify-between gap-2 border-b border-border py-3 sm:gap-3">
              <div className="min-w-0 flex-1">
                <div className="mb-4 flex min-w-0 items-center gap-1">
                  <span className="shrink-0 rounded-[4px] bg-[#EFF6FF] px-2 py-1 text-xs font-medium text-[#333333]">
                    {program.badge}
                  </span>
                  <span className="min-w-0 flex-1 touch-pan-x overflow-x-auto text-sm font-semibold leading-normal text-foreground whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {program.title}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {program.amount} | {program.date}
                </p>
              </div>
              <span className="-mb-10 shrink-0 text-xs text-muted-foreground">{program.daysAgo}</span>
            </div>
          ))}
        </div>
      </div>

{/* 북마크한 게시글 */}
      {/* Post Sections */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg flex items-center gap-2 font-bold text-foreground">
              <span className="relative inline-flex size-9 shrink-0 items-center justify-center sm:size-8">
                <Image
                  src={section.iconSrc}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 object-contain sm:size-8"
                />
              </span>
              {section.title} <span className="text-[#2567E7]">{section.count}</span>
            </h3>
            <button
              type="button"
              className="flex items-center text-[#2567E7] transition-opacity hover:opacity-80"
              aria-label="더보기"
            >
              <ArrowRight className="size-6" strokeWidth={1.35} aria-hidden />
            </button>
          </div>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="flex gap-4 border-b border-border py-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 ${post.badgeColor} text-white text-xs rounded`}>
                      {post.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">{post.title}</h4>
                  <p className="mb-2 line-clamp-3 text-xs text-muted-foreground">
                    {contentWithBrTags(post.content)}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye size={15} /> {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={15} /> {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={15} /> {post.likes}
                    </span>
                  </div>
                </div>
                <div className="-mt-1 flex shrink-0 flex-col items-end justify-start gap-2 self-start mt-1">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <div className="h-13 w-23 overflow-hidden rounded-lg">
                    <img src={post.image} alt="" className="h-full w-full object-cover" />
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
