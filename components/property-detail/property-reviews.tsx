'use client'

import { ArrowRight, Pencil, Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    author: '투자자A',
    rating: 4,
    date: '2026. 02. 22',
    content: '매물 설명이 실제와 그대로 맞고, 수익률 계산도 투명하게 공개해줘서 신뢰가 갔어요.',
  },
  {
    id: 2,
    author: '투자자A',
    rating: 4,
    date: '2026. 02. 22',
    content: '매물 설명이 실제와 그대로 맞고, 수익률 계산도 투명하게 공개해줘서 신뢰가 갔어요.',
  },
  {
    id: 3,
    author: '투자자A',
    rating: 4,
    date: '2026. 02. 22',
    content: '매물 설명이 실제와 그대로 맞고, 수익률 계산도 투명하게 공개해줘서 신뢰가 갔어요.',
  },
]

export default function PropertyReviews() {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">
          관심 후기 <span className="text-primary">17</span>
        </h3>
        <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-[#2563EB] hover:text-[#1d4ed8]"
          >
            더보기 <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
          </a>
      </div>

      {/* Reviews Card */}
      <div className="border border-border rounded-xl p-6">
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="flex gap-4">
              {/* Avatar — 연한 파란 원 + 진한 파란 이니셜 */}
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EBF1FD] text-base font-bold text-[#2563EB]"
                aria-hidden
              >
                이
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <span className="font-bold text-foreground">{review.author}</span>
                    <div className="flex items-center mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground mb-5">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{review.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-4 text-base font-bold text-foreground transition-colors hover:bg-secondary"
        >
          <Pencil size={16} className="shrink-0" aria-hidden strokeWidth={2} />
          후기 남기기
        </button>
      </div>
    </div>
  )
}
