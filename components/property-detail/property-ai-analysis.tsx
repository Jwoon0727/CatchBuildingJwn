'use client'

import { Bot, ChevronRight } from 'lucide-react'

export default function PropertyAIAnalysis() {
  return (
    <div className="bg-white rounded-lg border border-border p-6 mb-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="text-primary" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-foreground">영끌남 공인중개사</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            070-4000-0000
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs ml-2">우수업체 14</span>
          </p>
        </div>
        <ChevronRight className="ml-auto text-muted-foreground" size={20} />
      </div>

      {/* AI Analysis */}
      <div className="bg-secondary/30 rounded-lg p-4">
        <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
          <span className="text-primary">🤖</span>
          용개사 공랭통
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          역삼동 대로변에 위치한 이 6층 근생빌딩은 3가구의 안정적인 임대 수익을 제공하고 있습니다. 
          대지 85평에 연면적 210평으로, 1층 상업시설과 2~6층 주거시설이 혼합된 구조입니다. 
          현재 수익률 6.2%로 안정적인 임대 수익을 올리고 있으며, 
          강남역 도보 10분 거리의 뛰어난 입지 조건을 갖추고 있습니다.
          신축 리모델링을 통해 추가 가치 상승이 기대되는 매물입니다.
        </p>
      </div>
    </div>
  )
}
