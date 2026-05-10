'use client'

import { Eye, MessageCircle, Heart, Share2, MapPin, Building2 } from 'lucide-react'

export default function PropertyHeader() {
  return (
    <div className="bg-white rounded-xl border border-border p-6 mb-6">
      {/* Tags Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <span className="px-3 py-1 border border-border text-foreground text-xs font-medium rounded-full">매매</span>
          <span className="px-3 py-1 border border-border text-foreground text-xs font-medium rounded-full">수익형</span>
          <span className="px-3 py-1 border border-border text-foreground text-xs font-medium rounded-full">신축급</span>
          <span className="px-3 py-1 border border-border text-foreground text-xs font-medium rounded-full">역세권</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Heart size={20} className="text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Share2 size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-xl font-bold text-foreground">
          분당 백현동 까페거리, 단독주택 3가구, 임차형 수익 물건
        </h1>
        <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">등록일 2025. 03. 26</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <MapPin size={16} className="text-muted-foreground flex-shrink-0" />
        <span>서울 강남구 역삼동 · 15층 근생빌딩 지하1층/지상 6층</span>
        <button className="ml-1 p-1 hover:bg-secondary rounded transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Building2 size={16} className="text-muted-foreground flex-shrink-0" />
        <span>대지 85평 연면적 · 210평</span>
      </div>

      {/* Divider */}
      <div className="border-t border-border my-4" />

      {/* Stats */}
      <div className="flex items-center gap-5 text-sm text-muted-foreground mb-6">
        <span className="flex items-center gap-1.5">
          <Eye size={16} /> 123
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle size={16} /> 123
        </span>
        <span className="flex items-center gap-1.5">
          <Heart size={16} /> 123
        </span>
        <span className="flex items-center gap-1.5">
          <Share2 size={16} /> 123
        </span>
      </div>

      {/* Price */}
      <div>
        <p className="text-sm text-muted-foreground mb-1">매매가</p>
        <p className="text-3xl font-bold text-foreground mb-6">14.5억원</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-0 border border-border rounded-lg overflow-hidden">
          <div className="p-4 border-r border-border">
            <p className="text-xs text-muted-foreground mb-1">대지</p>
            <p className="text-lg font-bold text-foreground">3.8평</p>
          </div>
          <div className="p-4 border-r border-border">
            <p className="text-xs text-muted-foreground mb-1">평단가</p>
            <p className="text-lg font-bold text-foreground">35,140만</p>
          </div>
          <div className="p-4 border-r border-border">
            <p className="text-xs text-muted-foreground mb-1">수익율</p>
            <p className="text-lg font-bold text-foreground">연 6.2%</p>
          </div>
          <div className="p-4">
            <p className="text-xs text-muted-foreground mb-1">월 수익</p>
            <p className="text-lg font-bold text-foreground">530만원</p>
          </div>
        </div>
      </div>
    </div>
  )
}
