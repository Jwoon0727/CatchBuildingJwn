'use client'

import { useState } from 'react'
import {
  Eye,
  MessageCircle,
  Heart,
  Share2,
  Grid3X3,
} from 'lucide-react'

/** 상세 주소·면적 줄의 선행 아이콘 (public 기준 경로, 필요 시 교체) */
const LOCATION_ICON = '/building/loca01.svg'
const BUILDING_ICON = '/building/loca02.svg'

const images = [
  '/building/building_type05.jpg',
  '/building/building_type01.png',
  '/building/building_type.jpg',
  '/building/main_slide01.png',
  '/building/building_type02.png',
]

export default function PropertyGallery() {
  const [mainImage, setMainImage] = useState(0)

  return (
    // 전체를 감싸는 메인 컨테이너 박스
    <div className="mb-6 rounded-xl border border-border bg-white p-3 shadow-sm">
      
      {/* 1. 상단 갤러리: 내부 박스 형태로 배치 */}
      <div className="mb-6 overflow-hidden rounded-lg border border-border bg-muted/20">
        <div className="flex h-[320px] gap-1">
          {/* 메인 이미지 */}
          <div className="relative flex-1 min-w-0">
            <img
              src={images[mainImage]}
              alt="Property main view"
              className="h-full w-full cursor-pointer object-cover transition-opacity hover:opacity-95"
              onClick={() => setMainImage(0)}
            />
            <div className="absolute left-3 top-3">
              <span className="rounded bg-primary px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                매매
              </span>
            </div>
            <button
              type="button"
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-[4px] bg-white/90 px-3 py-2 text-sm font-medium text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-white"
            >
              <Grid3X3 size={16} />
              사진전체보기
            </button>
          </div>

          {/* 우측 서브 이미지 그리드 */}
          <div className="grid w-[280px] flex-shrink-0 grid-cols-2 grid-rows-2 gap-1">
            {images.slice(1, 5).map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setMainImage(index + 1)}
                className="relative overflow-hidden transition-opacity hover:opacity-80"
              >
                <img
                  src={image}
                  alt={`Property view ${index + 2}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. 하단 상세 정보 영역 */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            {[
              { label: '매매', bg: 'bg-[#EBF1FD]' },
              { label: '수익형', bg: 'bg-[#FFFAEC]' },
              { label: '신축급', bg: 'bg-[#D0FAE5]' },
              { label: '역세권', bg: 'bg-[#D0FAE5]' },
            ].map((tag) => (
              <span
                key={tag.label}
                className={`rounded-[4px] px-3 py-1 text-xs font-medium text-foreground ${tag.bg}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full  p-2 transition-colors hover:bg-secondary">
              <Heart size={18} className="text-muted-foreground/50" />
            </button>
            <button className="rounded-full  p-2 transition-colors hover:bg-secondary">
              <Share2 size={18} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="mb-2 flex items-start justify-between">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            분당 백현동 까페거리, 단독주택 3가구, 임차형 수익 물건
          </h1>
          <span className="mt-12 ml-4 shrink-0 text-xs text-muted-foreground">
            등록일 2025. 03. 26
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <img
              src={LOCATION_ICON}
              alt=""
              width={18}
              height={18}
              className="h-5 w-5 shrink-0 object-contain"
            />
            <span>서울 강남구 역삼동 · 15층 근생빌딩 지하1층/지상 6층</span>
          </div>
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <img
              src={BUILDING_ICON}
              alt=""
              width={18}
              height={18}
              className="h-5 w-5 shrink-0 object-contain"
            />
            <span>대지 85평 · 연면적 210평</span>
          </div>
        </div>

    

        {/* 가격 + 요약 지표: mockup — 구분선 아래 매매가 → 4열 균등 그리드 */}
        <div className="border-t border-border pt-4">
        <div className="mb-4 flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Eye size={16} /> 123</span>
          <span className="flex items-center gap-1.5"><MessageCircle size={16} /> 45</span>
          <span className="flex items-center gap-1.5"><Heart size={16} /> 12</span>
          <span className="flex items-center gap-1.5"><Share2 size={16} /> 8</span>
        </div>
          <div className="mb-6">
            <p className="mb-2 text-sm font-normal text-muted-foreground">매매가</p>
            <p className="text-2xl font-black leading-tight tracking-tight text-foreground">
              14.5<span className="text-2xl font-bold text-foreground">억원</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-8">
            {[
              { label: '대지', value: '3.8평' },
              { label: '평단가', value: '35,140만' },
              { label: '수익률', value: '연 6.2%' },
              { label: '월 수익', value: '530만원' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex min-w-0 items-stretch text-left"
              >
                {idx > 0 && (
                  <span
                    className="mr-2 block w-px shrink-0 self-stretch bg-border sm:mr-3"
                    aria-hidden
                  />
                )}
                <div className="min-w-0">
                  <p className="mb-1.5 text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-base font-bold leading-snug text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}