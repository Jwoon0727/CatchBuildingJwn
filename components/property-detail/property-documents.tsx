'use client'

import { ChevronRight } from 'lucide-react'

/** `public/` 기준 이미지 경로 (아래 문자열만 원하는 경로로 수정) */
const FLOOR_PLAN_THUMB_SRC = '/building/file.svg'
const VIDEO_THUMB_SRC = '/building/video.svg'

export default function PropertyDocuments() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2 font-pretendard [&_button]:font-pretendard">
      {/* Floor Plan PDF */}
      <button
        type="button"
        className="flex items-center gap-4 rounded-lg bg-[#EBF1FD] p-4 transition-colors hover:bg-primary/10"
      >
        <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-lg bg-muted/40">
          <img
            src={FLOOR_PLAN_THUMB_SRC}
            alt=""
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <p className="text-lg font-bold text-foreground">전체 평면도 보기</p>
          <p className="text-sm text-muted-foreground">PDF · 8페이지 · 2.1MB</p>
        </div>
        <ChevronRight className="shrink-0 text-muted-foreground" size={24} />
      </button>

      {/* Video Tour */}
      <button
        type="button"
        className="flex items-center gap-4 rounded-lg bg-[#EBF1FD] p-4 transition-colors hover:bg-red-100"
      >
        <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-lg bg-muted/40">
          <img
            src={VIDEO_THUMB_SRC}
            alt=""
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <p className="text-lg font-bold text-foreground">매물 영상 보러</p>
          <p className="text-sm text-muted-foreground">8분 21초</p>
        </div>
        <ChevronRight className="shrink-0 text-muted-foreground" size={24} />
      </button>
    </div>
  )
}
