'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
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

const TOTAL = slides.length
const CLONE_COUNT = 2
const extended = [...slides.slice(-CLONE_COUNT), ...slides, ...slides.slice(0, CLONE_COUNT)]

const SWIPE_MIN_PX = 48

export default function Hero() {
  const [pos, setPos] = useState(CLONE_COUNT)
  const [animated, setAnimated] = useState(true)
  const transitioning = useRef(false)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  const current = ((pos - CLONE_COUNT) % TOTAL + TOTAL) % TOTAL

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true))
      return () => cancelAnimationFrame(id)
    }
  }, [animated])

  const handleTransitionEnd = useCallback(() => {
    transitioning.current = false
    setPos(p => {
      if (p < CLONE_COUNT) {
        setAnimated(false)
        return p + TOTAL
      }
      if (p >= CLONE_COUNT + TOTAL) {
        setAnimated(false)
        return p - TOTAL
      }
      return p
    })
  }, [])

  const prev = useCallback(() => {
    if (transitioning.current) return
    transitioning.current = true
    setAnimated(true)
    setPos(p => p - 1)
  }, [])

  const next = useCallback(() => {
    if (transitioning.current) return
    transitioning.current = true
    setAnimated(true)
    setPos(p => p + 1)
  }, [])

  const goToSlide = useCallback((i: number) => {
    if (transitioning.current) return
    transitioning.current = true
    setAnimated(true)
    setPos(i + CLONE_COUNT)
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    swipeStart.current = { x: t.clientX, y: t.clientY }
  }, [])

  const onTouchEnd = useCallback(
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

  const onTouchCancel = useCallback(() => {
    swipeStart.current = null
  }, [])

  const peekCoeff = 1 + 2 * pos
  const gapCoeff = 1 + pos
  const vwCoeff = pos * 100

  return (
    <section className="hero-carousel relative w-full bg-white font-pretendard [&_button]:font-pretendard">
      <div className="relative overflow-hidden pb-3 pt-0 md:pb-8 md:pt-0">
        <div
          className={`flex touch-pan-y ${animated ? 'transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]' : ''}`}
          style={{
            gap: 'var(--carousel-gap)',
            transform: `translateX(calc(${peekCoeff} * var(--carousel-peek) + ${gapCoeff} * var(--carousel-gap) - ${vwCoeff}vw))`,
          }}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchCancel}
        >
          {extended.map((slide, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 aspect-[5/2] md:aspect-[1133/408] rounded-[12px] overflow-hidden bg-neutral-200"
              style={{
                width: 'calc(100vw - 2 * var(--carousel-peek) - 2 * var(--carousel-gap))',
              }}
            >
              <Image
                src={slide.src}
                alt={`슬라이드 ${((i - CLONE_COUNT + TOTAL) % TOTAL) + 1}`}
                fill
                sizes="(max-width: 808px) 100vw, 1133px"
                className="object-cover object-center"
                priority={i === CLONE_COUNT}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent">
                <div className="flex h-full flex-col justify-center px-4 py-6 text-left font-pretendard text-white md:justify-start md:p-10">
                  <h2 className="max-w-[20em] text-base font-bold leading-snug md:max-w-none md:text-xl lg:text-2xl">
                    {slide.title}
                  </h2>
                  <p className="mt-2 max-w-[18rem] text-[0.785rem] font-medium leading-snug text-white/95 md:max-w-none md:text-sm lg:text-base">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 이전 버튼 */}
        <button
          type="button"
          onClick={prev}
          className="absolute top-1/2 z-20 flex size-9 shrink-0 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-50 md:size-10"
          style={{ left: 'calc(var(--carousel-peek) + var(--carousel-gap) + -1.5rem)' }}
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="size-5 shrink-0 text-neutral-500 md:size-6" strokeWidth={2} />
        </button>

        {/* 다음 버튼 */}
        <button
          type="button"
          onClick={next}
          className="absolute top-1/2 z-20 flex size-9 shrink-0 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-50 md:size-10"
          style={{ right: 'calc(var(--carousel-peek) + var(--carousel-gap) + -1.5rem)' }}
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="size-5 shrink-0 text-neutral-500 md:size-6" strokeWidth={2} />
        </button>
      </div>

      {/* 인디케이터 — 모바일만 */}
      <div className="flex justify-center gap-1.5 pb-6 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
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
