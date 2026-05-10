'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-80 md:h-96 overflow-hidden bg-slate-900">
      <div className="flex gap-3 h-full w-full px-4 items-center">
        {/* Left Image - Smaller */}
        <div className="w-1/5 md:w-1/6 h-full relative overflow-hidden rounded-lg group flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=500&fit=crop" 
            alt="Property" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Center Image - Larger with Overlay */}
        <div className="flex-1 h-full relative overflow-hidden rounded-lg group min-w-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9a485d94ebb5?w=1000&h=500&fit=crop" 
            alt="Main Property" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center">
            <div className="p-8 md:p-12 text-white">
              <p className="text-sm md:text-base font-medium mb-2">무료 상담 신청 이벤트</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">당신의 투자 목표를 이루세요</h2>
              <p className="text-sm md:text-base text-gray-200">최고의 부동산 거래처에서 최신 매물을 만나보세요</p>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors">
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors">
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Right Image - Smaller */}
        <div className="w-1/5 md:w-1/6 h-full relative overflow-hidden rounded-lg group flex-shrink-0 hidden sm:block">
          <img 
            src="https://images.unsplash.com/photo-1570129477492-45201003abed?w=400&h=500&fit=crop" 
            alt="Property" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}
