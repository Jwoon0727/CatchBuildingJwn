'use client'

import { Star, ChevronRight, User } from 'lucide-react'

const reviews = [
  {
    name: "김민수",
    role: "판매자",
    rating: 5,
    comment: "부동산 마켓을 통해 빠르고 안전한 거래를 완료했습니다. 전문가의 상담이 정말 좋았어요!",
    badge: "verified"
  },
  {
    name: "이지은",
    role: "구매자",
    rating: 5,
    comment: "최신 매물들이 많고 검색이 편해요. 원하던 집을 빠르게 찾을 수 있었습니다.",
    badge: "verified"
  },
  {
    name: "박준호",
    role: "투자자",
    rating: 4,
    comment: "투자 정보가 상세해서 좋습니다. 더 많은 차트 분석 도구가 있으면 좋겠어요.",
    badge: "verified"
  },
  {
    name: "정수진",
    role: "임차인",
    rating: 5,
    comment: "앱이 정말 직관적이고 사용하기 편해요. 실시간 알림 덕분에 원하는 매물을 놓치지 않았습니다.",
    badge: "verified"
  },
]

export default function ReviewSection() {
  return (
    <section className="py-12 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">이용자 리뷰</h2>
          <a href="#" className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium">
            더보기 <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.role}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {Array(review.rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-3">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
