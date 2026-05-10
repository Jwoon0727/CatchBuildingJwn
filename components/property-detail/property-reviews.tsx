'use client'

import { Star, Edit } from 'lucide-react'

const reviews = [
  {
    id: 1,
    author: '투자자A',
    rating: 4,
    date: '2026. 02. 22',
    content: '매물 설명이 실제와 그대로 맞고, 수익률 게산도 투명하게 공개해줘서 신뢰가 갔어요.',
  },
  {
    id: 2,
    author: '투자자A',
    rating: 4,
    date: '2026. 02. 22',
    content: '매물 설명이 실제와 그대로 맞고, 수익률 게산도 투명하게 공개해줘서 신뢰가 갔어요.',
  },
  {
    id: 3,
    author: '투자자A',
    rating: 4,
    date: '2026. 02. 22',
    content: '매물 설명이 실제와 그대로 맞고, 수익률 게산도 투명하게 공개해줘서 신뢰가 갔어요.',
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
        <button className="text-sm text-primary hover:underline flex items-center gap-1">
          더보기 <span>&rarr;</span>
        </button>
      </div>

      {/* Reviews Card */}
      <div className="border border-border rounded-xl p-6">
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="flex gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-white flex items-center justify-center text-primary font-bold flex-shrink-0">
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
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{review.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <button className="w-full mt-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2">
          <Edit size={16} />
          후기 남기기
        </button>
      </div>
    </div>
  )
}
