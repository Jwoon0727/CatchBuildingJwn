'use client'

import { Search, Star, MessageSquare, Building2, Heart, MessageCircle, TrendingUp, FileText, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  { icon: Search, label: '매물검색', color: 'text-blue-500' },
  { icon: Star, label: '추천매물', color: 'text-yellow-500' },
  { icon: MessageSquare, label: '커뮤니티', color: 'text-purple-500' },
  { icon: Building2, label: '지도검색', color: 'text-teal-500' },
  { icon: Heart, label: 'Q&A', color: 'text-pink-500' },
  { icon: MessageCircle, label: '카통방', color: 'text-orange-500' },
  { icon: TrendingUp, label: '자금획보', color: 'text-blue-600' },
  { icon: FileText, label: '분석도직', color: 'text-gray-500' },
  { icon: Building, label: '입장요청', color: 'text-indigo-500' },
]

export default function CategoryNav() {
  return (
    <section className="bg-background">
      {/* Category Icons */}
      <div className="border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <button 
                  key={i}
                  className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity text-center"
                >
                  <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${cat.color} hover:bg-gray-200 transition-colors`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-secondary transition-colors whitespace-nowrap">
              <FileText size={16} />
              필터
            </button>
            <input 
              type="text" 
              placeholder="지역, 건물형, 도로변 주소 검색" 
              className="flex-1 px-4 py-2 text-sm border border-border rounded-lg bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 h-auto">
              검색
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
