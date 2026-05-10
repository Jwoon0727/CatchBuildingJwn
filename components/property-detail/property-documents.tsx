'use client'

import { FileText, Video, ChevronRight } from 'lucide-react'

export default function PropertyDocuments() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Floor Plan PDF */}
      <button className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <FileText className="text-primary" size={24} />
        </div>
        <div className="text-left flex-1">
          <p className="font-medium text-foreground">전체 평면도 보기</p>
          <p className="text-sm text-muted-foreground">PDF · 8페이지 · 2.1MB</p>
        </div>
        <ChevronRight className="text-muted-foreground" size={20} />
      </button>

      {/* Video Tour */}
      <button className="flex items-center gap-4 p-4 bg-red-50 border border-red-100 rounded-lg hover:bg-red-100 transition-colors">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
          <Video className="text-red-500" size={24} />
        </div>
        <div className="text-left flex-1">
          <p className="font-medium text-foreground">매물 영상 보러</p>
          <p className="text-sm text-muted-foreground">8분 21초</p>
        </div>
        <ChevronRight className="text-muted-foreground" size={20} />
      </button>
    </div>
  )
}
