'use client'

import { ChevronRight, Phone } from 'lucide-react'

export default function PropertyAgentDetail() {
  return (
    <div className="bg-white rounded-xl border border-border p-6 mb-6">
      {/* Agent Info */}
      <div className="flex items-start justify-between mb-6 pb-6 border-b border-border">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-primary flex-shrink-0">
            이
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-foreground text-base mb-1">이진솔 공인중개사</h3>
            <p className="text-sm text-muted-foreground mb-2">경기 성남시 분당구 · 영곡산 파트너</p>
            <div className="flex items-center gap-3">
              <a href="tel:010-4080-6005" className="flex items-center gap-1 text-sm text-primary hover:text-primary/80">
                <Phone size={14} />
                010-4080-6005
              </a>
              <span className="text-xs text-muted-foreground">다른매물 14</span>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-secondary rounded-full transition-colors flex-shrink-0">
          <ChevronRight size={20} className="text-muted-foreground" />
        </button>
      </div>

      {/* Agent Comment */}
      <div>
        <h4 className="font-bold text-foreground mb-3">중계사 코멘트</h4>
        <p className="text-sm text-muted-foreground leading-relaxed bg-gray-50 p-4 rounded-lg border border-border">
          백현동 까페거리 핵심 상권 단독주택 3가구로 구성된 임차형 수익 물건입니다. 1층 상업시설과 2~5층 주거 임차료 안정적인 혼합 수익 구조를 갖추고 있으며, 인근 판교 테크노밸리 업무지구와 분당산 이매역 역세권의 우수가 근처 공실 리스크가 낮은 매물입니다. 신축급 리모델링 완료 즉시 입대 가능 상태입니다.
        </p>
      </div>
    </div>
  )
}
