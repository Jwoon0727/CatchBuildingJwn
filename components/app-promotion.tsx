'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, ChevronRight } from 'lucide-react'

export default function AppPromotion() {
  return (
    <section className="py-16 bg-[#003884] font-pretendard [&_button]:font-pretendard">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Icon and Label */}
          <div className="flex items-center gap-2 mb-6">
            <MessageCircle size={20} className="text-white" />
            <span className="text-white text-sm font-medium">1:1 맞춤 상담</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            전문가와 1:1 맞춤 부동산 컨설팅
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl leading-relaxed">
            10년 경력 전문가가 당신의 투자 목표에 맞는<br />
            전략을 제안해 드립니다.<br />
            지금 바로 무료 상담을 신청하세요.
          </p>

          {/* CTA Button */}
          <Button className="bg-[#07B34E] hover:bg-green-600 text-white px-6 py-3 h-auto text-sm font-medium flex items-center gap-2">
            무료 상담 신청하기
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
