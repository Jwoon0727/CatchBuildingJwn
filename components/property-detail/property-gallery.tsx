'use client'

import { useState } from 'react'
import {
  Eye,
  MessageCircle,
  Heart,
  Share2,
  Grid3X3,
  Map,
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

/** 갤러리 전체 장수 (카운터 오버레이용) */
const GALLERY_TOTAL_COUNT = 8

const MOBILE_COVER_IMAGE = '/building/building_type05.jpg'

export default function PropertyGallery() {
  const [mainImage, setMainImage] = useState(0)

  return (
    // 전체를 감싸는 메인 컨테이너 박스
    <div className="mb-6 rounded-xl border border-border bg-white p-3 font-pretendard  [&_button]:font-pretendard">
      
      {/* 1. 상단 갤러리: 내부 박스 형태로 배치 */}
      <div className="mb-6 overflow-hidden rounded-lg border border-border bg-muted/20">
        {/* 모바일: 첫 번째 이미지 + 1/N 카운터 */}
        <div className="relative aspect-[16/10] w-full lg:hidden">
          <img
            src={MOBILE_COVER_IMAGE}
            alt="매물 대표 이미지"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-3 top-3">
            <span className="rounded-md bg-[#183D8C] px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              매매
            </span>
          </div>
          <span
            className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium tabular-nums text-white"
            aria-label={`현재 이미지 1번째, 전체 ${GALLERY_TOTAL_COUNT}장`}
          >
            1/{GALLERY_TOTAL_COUNT}
          </span>
        </div>

        {/* 데스크톱: 메인 + 썸네일 그리드 */}
        <div className="hidden h-[320px] gap-1 lg:flex">
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

        <div className="mb-2 flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <h1 className="w-full min-w-0 text-xl font-bold tracking-tight text-foreground lg:flex-1 lg:pr-4">
            분당 백현동 까페거리, 단독주택 3가구, 임차형 수익 물건
          </h1>
          <span className="mb-2 -mt-2  w-full shrink-0 text-right text-xs text-muted-foreground lg:mt-8 lg:ml-4 lg:w-auto">
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
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
              <span className="min-w-0 leading-snug">
                서울 강남구 역삼동 · 15층 근생빌딩 지하1층/지상 6층
              </span>
              <button
                type="button"
                aria-label="지도에서 보기"
                className="shrink-0 text-[#2567E7] transition-opacity hover:opacity-80"
              >
                <Map size={18} strokeWidth={2} aria-hidden />
              </button>
            </div>
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
        <div className="mb-5 flex items-center gap-3 text-sm text-muted-foreground">
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

          <div className="ml-3 grid grid-cols-4 gap-x-1.5 gap-y-5 sm:gap-x-8">
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
                    className="mr-1.5 block w-px shrink-0 self-stretch bg-border sm:mr-3"
                    aria-hidden
                  />
                )}
                <div className="min-w-0">
                  <p className="mb-1 text-[13px] text-muted-foreground sm:mb-1.5 sm:text-xs">{item.label}</p>
                  <p className="text-base font-bold leading-snug text-foreground break-keep sm:text-base">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}