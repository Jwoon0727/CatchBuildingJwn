'use client'

import { useState } from 'react'
import { ChevronDown, ChevronLeft, Menu, Upload } from 'lucide-react'
import Header from '@/components/header'

function WriteIconImg({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  if (!src) {
    return (
      <span
        className={`inline-block shrink-0 ${className ?? ''}`}
        aria-hidden
      />
    )
  }
  return (
    <img
      src={src}
      alt=""
      className={`object-contain ${className ?? ''}`}
    />
  )
}

const topics = [
  { value: '', label: '주제 선택' },
  { value: 'investment', label: '부동산 투자' },
  { value: 'home', label: '내집마련' },
  { value: 'finance', label: '재테크' },
  { value: 'auction', label: '경매/학습' },
  { value: 'loan', label: '신청/대출' },
  { value: 'tax', label: '세금/절세' },
  { value: 'other', label: '기타' },
]

const subTopics = [
  { value: '', label: '하위 주제 선택' },
  { value: 'tip', label: '노하우' },
  { value: 'review', label: '후기' },
  { value: 'question', label: '질문' },
  { value: 'info', label: '정보공유' },
]

export default function CommunityWritePage() {
  const [topic, setTopic] = useState('')
  const [subTopic, setSubTopic] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <>
      {/* 데스크톱 헤더 */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* 모바일 헤더 */}
      <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-border">
        <div className="flex items-center justify-between px-4 py-3.5">
          <button type="button" aria-label="뒤로가기" onClick={() => window.history.back()}>
            <ChevronLeft size={22} strokeWidth={2} />
          </button>
          <span className="text-base font-bold text-foreground">글쓰기</span>
          <button type="button" aria-label="메뉴">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="min-h-screen bg-background lg:pt-10 pb-16">
        <div className="max-w-[75rem] mx-auto px-4 pt-4 lg:pt-0">
          {/* Topic Selects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-foreground mb-2">
                주제<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className={`w-full rounded-lg border border-border bg-transparent px-4 py-3 pr-10 text-sm shadow-none outline-none appearance-none cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    topic === '' ? 'text-muted-foreground' : 'text-foreground'
                  }`}
                >
                  {topics.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-foreground"
                  strokeWidth={2}
                  aria-hidden
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-2">
                하위 주제<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={subTopic}
                  onChange={(e) => setSubTopic(e.target.value)}
                  className={`w-full rounded-lg border border-border bg-transparent px-4 py-3 pr-10 text-sm shadow-none outline-none appearance-none cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    subTopic === ''
                      ? 'text-muted-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {subTopics.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                  strokeWidth={2}
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {/* Title Input */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-foreground mb-2">
              주제<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해 주세요."
              className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-none outline-none transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Content Editor */}
          <div className="mb-6">
            <label className="block text-xs font-base text-foreground mb-2">
              내용<span className="text-red-500">*</span>
            </label>
            <div className="border border-border rounded-lg overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-0.5 px-3 py-1.5 border-b border-border bg-white flex-wrap">

                {/* Font Size Dropdown */}
                <div className="relative mr-0.5">
                  <select className="h-[35px] pl-2.5 pr-7 text-xs border border-border rounded appearance-none cursor-pointer focus:outline-none bg-white">
                    <option>기본</option>
                    <option>작게</option>
                    <option>크게</option>
                    <option>매우 크게</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-1.5 top-1/2 size-3 -translate-y-1/2 text-foreground"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>

                {/* AI */}
                <button
                  type="button"
                  className="flex h-[35px] w-[44px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="글자 색상"
                >
                  <WriteIconImg src="/icon/write/A1.svg" className="h-[26px] w-[40px]" />
                </button>


                {/* Bold */}
                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="굵게"
                >
                  <WriteIconImg src="/icon/write/B.svg" className="h-[20px] w-[20px]" />
                </button>
                {/* Italic */}
                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="기울임"
                >
                  <WriteIconImg src="/icon/write/I.svg" className="h-[20px] w-[20px]" />
                </button>
                {/* Underline */}
                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="밑줄"
                >
                  <WriteIconImg src="/icon/write/U.svg" className="h-[20px] w-[20px]" />
                </button>


                {/* 글자 색상 */}
                <button
                  type="button"
                  className="flex h-[35px] w-[44px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="글자 색상"
                >
                  <WriteIconImg src="/icon/write/A02.svg" className="h-[26px] w-[40px]" />
                </button>

                {/* 글자 색상·팔레트 등 */}
                <button
                  type="button"
                  className="flex h-[35px] w-[44px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="글자 색상 선택"
                >
                  <WriteIconImg src="/icon/write/A3.svg" className="h-[26px] w-[40px]" />
                </button>

                {/* 형광펜 */}
                <button
                  type="button"
                  className="flex h-[35px] w-[44px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="형광펜"
                >
                  <WriteIconImg src="/icon/write/Filt.svg" className="h-[26px] w-[40px]" />
                </button>

                {/* 형광펜·색 선택 */}
                <button
                  type="button"
                  className="flex h-[35px] w-[44px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="형광펜 색상 선택"
                >
                  <WriteIconImg src="/icon/write/drop1.svg" className="h-[26px] w-[40px]" />
                </button>


                {/* 정렬 */}
                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="정렬"
                >
                  <WriteIconImg src="/icon/write/right.svg" className="h-[20px] w-[20px]" />
                </button>

                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="정렬 선택"
                >
                  <WriteIconImg src="/icon/write/left.svg" className="h-[20px] w-[20px]" />
                </button>

                {/* 목록 */}
                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="목록"
                >
                  <WriteIconImg src="/icon/write/bar.svg" className="h-[20px] w-[20px]" />
                </button>

                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="목록 유형 선택"
                >
                  <WriteIconImg src="/icon/write/dot.svg" className="h-[20px] w-[20px]" />
                </button>

                {/* 들여쓰기 / 내어쓰기 */}
                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="들여쓰기"
                >
                  <WriteIconImg src="/icon/write/imgUp.svg" className="h-[20px] w-[20px]" />
                </button>
                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="내어쓰기"
                >
                  <WriteIconImg src="/icon/write/grid.svg" className="h-[20px] w-[30px]" />
                </button>


                {/* 구분선 */}
                <button
                  type="button"
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
                  title="구분선"
                >
                  <WriteIconImg src="/icon/write/link.svg" className="h-[20px] w-[20px]" />
                </button>

                {/* Blockquote */}
             

                {/* Image */}
              

                {/* Table */}
               
               
                {/* Link */}
              
              </div>

              {/* Content Area */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력해 주세요."
                className="h-80 w-full resize-none border-0 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-2">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-2 text-sm text-foreground transition-colors hover:bg-secondary/30"
            >
              <Upload className="size-[18px] shrink-0" strokeWidth={2} aria-hidden />
              파일 업로드
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button className="px-6 py-3 border border-border rounded-lg text-sm font-medium text-[#2567E7] hover:bg-secondary transition-colors">
              임시 저장
            </button>
            <button className="px-8 py-3 bg-[#2567E7] text-white rounded-lg text-sm font-medium hover:bg-[#2567E7]/90 transition-colors">
              저장
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
