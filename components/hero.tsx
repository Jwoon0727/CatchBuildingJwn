'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/** 중앙 슬라이드 최대 1133×340 비율 · 좌우는 뷰포트 끝까지 확장 · `public` 기준 경로 */
const heroImages = {
  left: '/building/main_slide01.png',
  center: '/building/main_slide01.png',
  right: '/building/main_slide01.png',
} as const

/** 히어로 오버레이 문구 (중앙·우측 피크 공통) */
const heroOverlayCopy = {
  title: '무료 상담 신청 이벤트',
  subtitle: '당신의 투자 목표에 맞는 전략을 제안해 드립니다.',
} as const

function PeekSlide({
  src,
  alt,
  position,
  className,
  miniOverlay,
}: {
  src: string
  alt: string
  position: 'left' | 'right'
  className?: string
  /** 우측 피크 등: 상단 소형 타이포 오버레이 */
  miniOverlay?: boolean
}) {
  return (
    <div className={`relative min-h-0 min-w-0 flex-1 overflow-hidden bg-neutral-200 ${className ?? ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="45vw"
        className={`object-cover opacity-100 ${position === 'left' ? 'object-right' : 'object-left'}`}
      />
      {miniOverlay ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/55 via-black/20 to-transparent pt-5 pb-8 pl-4 pr-2 sm:pt-6 sm:pb-10 sm:pl-5 sm:pr-3 md:pt-8 md:pb-12 md:pl-6">
          <div className="font-pretendard text-white">
            <h3 className="text-[0.625rem] font-bold leading-snug sm:text-[0.6875rem] md:text-sm">
              {heroOverlayCopy.title}
            </h3>
            <p className="mt-1 text-[0.5625rem] font-medium leading-snug text-white/90 sm:text-[0.625rem] md:text-[0.6875rem]">
              {heroOverlayCopy.subtitle}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      {/* 가로 패딩 없음 — 좌·우 피크가 화면 끝까지 붙음 */}
      <div className="flex w-full items-stretch gap-3 pb-6 pt-0 md:gap-4 md:pb-8 md:pt-0">
        <PeekSlide
          src={heroImages.left}
          alt="이전 슬라이드 미리보기"
          position="left"
          className="rounded-r-[12px]"
        />

        <div className="relative aspect-[1133/340] min-h-0 min-w-0 max-w-[1133px] flex-[1_1_1133px] shrink overflow-hidden rounded-[12px] bg-neutral-200">
          <Image
            src={heroImages.center}
            alt="메인 프로모션"
            fill
            sizes="(max-width: 1133px) 100vw, 1133px"
            className="object-cover object-center opacity-100"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent">
            <div className="pointer-events-auto flex h-full flex-col justify-start p-6 font-pretendard text-white md:p-10">
              <h2 className="max-w-[20rem] text-lg font-bold leading-snug md:max-w-none md:text-xl lg:text-2xl">
                {heroOverlayCopy.title}
              </h2>
              <p className="mt-2 max-w-[18rem] text-xs font-medium text-white/95 md:max-w-none md:text-sm lg:text-base">
                {heroOverlayCopy.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-50 md:left-4 md:size-10"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="size-5 text-neutral-500 md:size-6" strokeWidth={2} />
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-50 md:right-4 md:size-10"
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="size-5 text-neutral-500 md:size-6" strokeWidth={2} />
          </button>
        </div>

        <PeekSlide
          src={heroImages.right}
          alt="다음 슬라이드 미리보기"
          position="right"
          className="hidden rounded-l-[12px] sm:block"
          miniOverlay
        />
      </div>
    </section>
  )
}
