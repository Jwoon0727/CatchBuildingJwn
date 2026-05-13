'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: '/building/main_slide01.png',
    title: '무료 상담 신청 이벤트',
    subtitle: '당신의 투자 목표에 맞는 전략을 제안해 드립니다.',
  },
  {
    src: '/building/main_slide01.png',
    title: '무료 상담 신청 이벤트',
    subtitle: '당신의 투자 목표에 맞는 전략을 제안해 드립니다.',
  },
  {
    src: '/building/main_slide01.png',
    title: '무료 상담 신청 이벤트',
    subtitle: '당신의 투자 목표에 맞는 전략을 제안해 드립니다.',
  },
]

function PeekSlide({
  src,
  alt,
  position,
  className,
  miniOverlay,
  title,
  subtitle,
  onClick,
}: {
  src: string
  alt: string
  position: 'left' | 'right'
  className?: string
  miniOverlay?: boolean
  title?: string
  subtitle?: string
  onClick?: () => void
}) {
  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? (position === 'left' ? '이전 슬라이드' : '다음 슬라이드') : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      className={`relative min-h-0 min-w-0 w-12 flex-none md:flex-1 overflow-hidden bg-neutral-200 ${onClick ? 'cursor-pointer' : ''} ${className ?? ''}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="45vw"
        className={`object-cover opacity-100 ${position === 'left' ? 'object-right' : 'object-left'}`}
      />
      {miniOverlay ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-b from-black/55 via-black/20 to-transparent flex items-center justify-start px-2 md:items-start md:px-0 md:pt-8 md:pb-12 md:pl-6">
          <div className="ml-2 min-w-0 font-pretendard text-white text-left">
            <h3 className="overflow-hidden whitespace-nowrap text-base font-bold leading-snug md:text-sm">
              {title}
            </h3>
            <p className="mt-1 overflow-hidden whitespace-nowrap text-[0.785rem] font-medium leading-snug text-white/90 md:text-[0.6875rem]">
              {subtitle}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

const SWIPE_MIN_PX = 48

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % slides.length)
  }, [])

  const onTouchStartSlides = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    swipeStart.current = { x: t.clientX, y: t.clientY }
  }, [])

  const onTouchEndSlides = useCallback(
    (e: React.TouchEvent) => {
      if (!swipeStart.current) return
      const t = e.changedTouches[0]
      const dx = t.clientX - swipeStart.current.x
      const dy = t.clientY - swipeStart.current.y
      swipeStart.current = null
      if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) <= Math.abs(dy)) return
      if (dx < 0) next()
      else prev()
    },
    [next, prev],
  )

  const onTouchCancelSlides = useCallback(() => {
    swipeStart.current = null
  }, [])

  const prevIdx = (current - 1 + slides.length) % slides.length
  const nextIdx = (current + 1) % slides.length

  return (
    <section className="relative w-full bg-white font-pretendard [&_button]:font-pretendard">
      <div className="flex w-full items-stretch gap-3 pb-3 pt-0 md:gap-4 md:pb-8 md:pt-0">
        {/* 왼쪽 피크 — 이전 슬라이드 */}
        <PeekSlide
          src={slides[prevIdx].src}
          alt="이전 슬라이드 미리보기"
          position="left"
          className="rounded-r-[12px]"
          onClick={prev}
        />

        {/* 중앙 메인 슬라이드 — 좌우 스와이프로 이전/다음 */}
        <div
          className="relative z-10 aspect-[5/2] touch-pan-y md:aspect-[1133/408] min-h-0 min-w-0 max-w-full md:max-w-[1133px] flex-1 md:flex-[1_1_1133px] shrink rounded-[12px] bg-neutral-200"
          onTouchStart={onTouchStartSlides}
          onTouchEnd={onTouchEndSlides}
          onTouchCancel={onTouchCancelSlides}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <Image
              src={slides[current].src}
              alt="메인 프로모션"
              fill
              sizes="(max-width: 808px) 100vw, 1133px"
              className="object-cover object-center opacity-100"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent">
              <div className="pointer-events-auto flex h-full flex-col justify-center px-4 py-6 text-left font-pretendard text-white md:justify-start md:p-10">
                <h2 className="max-w-[20em] text-base font-bold leading-snug md:max-w-none md:text-xl lg:text-2xl">
                  {slides[current].title}
                </h2>
                <p className="mt-2 max-w-[18rem] text-[0.785rem] font-medium leading-snug text-white/95 md:max-w-none md:text-sm lg:text-base">
                  {slides[current].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* 이전 버튼 */}
          <button
            type="button"
            onClick={prev}
            className="absolute -left-6 top-1/2 z-10 flex size-9 shrink-0 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-50 md:left-2 md:size-10"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="size-5 shrink-0 text-neutral-500 md:size-6" strokeWidth={2} />
          </button>

          {/* 다음 버튼 */}
          <button
            type="button"
            onClick={next}
            className="absolute -right-6 top-1/2 z-10 flex size-9 shrink-0 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-50 md:right-2 md:size-10"
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="size-5 shrink-0 text-neutral-500 md:size-6" strokeWidth={2} />
          </button>

        </div>

        {/* 오른쪽 피크 — 다음 슬라이드 */}
        <PeekSlide
          src={slides[nextIdx].src}
          alt="다음 슬라이드 미리보기"
          position="right"
          className="rounded-l-[12px]"
          miniOverlay
          title={slides[nextIdx].title}
          subtitle={slides[nextIdx].subtitle}
          onClick={next}
        />
      </div>

      {/* 인디케이터 — 모바일만 (슬라이더 이미지 아래) */}
      <div className="flex justify-center gap-1.5 pb-6 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`${i + 1}번 슬라이드`}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-6 bg-[#2563EB]' : 'w-2 bg-[#EBF1FD]'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
