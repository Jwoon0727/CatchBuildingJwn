'use client'

import Image from 'next/image'
import { Eye, MessageCircle, Heart } from 'lucide-react'

/** `public` 기준 이미지 경로를 넣어 주세요. */
const SEARCH_FIELD_LEADING_IMAGE_SRC = '/icon/filter.svg'

/** `public/icon/`에 파일을 두거나 경로만 바꿔 주세요. */
const PROPERTY_DETAIL_ICONS = {
  location: '/building/loca01.svg',
  area: '/building/loca02.svg',
} as const

const savedProperties = [
  {
    id: 1,
    image: '/building/building_type04.png',
    badges: ['매매', 'NEW'],
    title: '강남역 초역세권 오피스텔',
    location: '서울 강남구 역삼동 · 15층',
    floors: '근생빌딩 지하1층/지상 6층',
    area: '대지 85평 연면적 · 210평',
    views: 123,
    comments: 123,
    likes: 123,
    yield: '5.9%',
    pricePerPyeong: '2,131만',
    price: '14.5억',
  },
  {
    id: 2,
    image: '/building/building_type04.png',
    badges: ['매매', 'NEW'],
    title: '강남역 초역세권 오피스텔',
    location: '서울 강남구 역삼동 · 15층',
    floors: '근생빌딩 지하1층/지상 6층',
    area: '대지 85평 연면적 · 210평',
    views: 123,
    comments: 123,
    likes: 123,
    yield: '5.9%',
    pricePerPyeong: '2,131만',
    price: '14.5억',
  },
  {
    id: 3,
    image: '/building/building_type04.png',
    badges: ['매매', 'NEW'],
    title: '강남역 초역세권 오피스텔',
    location: '서울 강남구 역삼동 · 15층',
    floors: '근생빌딩 지하1층/지상 6층',
    area: '대지 85평 연면적 · 210평',
    views: 123,
    comments: 123,
    likes: 123,
    yield: '5.9%',
    pricePerPyeong: '2,131만',
    price: '14.5억',
  },
  {
    id: 4,
    image: '/building/building_type04.png',
    badges: ['매매', 'NEW'],
    title: '강남역 초역세권 오피스텔',
    location: '서울 강남구 역삼동 · 15층',
    floors: '근생빌딩 지하1층/지상 6층',
    area: '대지 85평 연면적 · 210평',
    views: 123,
    comments: 123,
    likes: 123,
    yield: '5.9%',
    pricePerPyeong: '2,131만',
    price: '14.5억',
  },
]

function badgeClass(label: string) {
  if (label === 'NEW') return 'bg-[#2567E7]'
  if (label === '매매') return 'bg-[#003883]'
  return 'bg-gray-800'
}

export default function MyPageSavedProperties() {
  return (
    <div className="min-w-0 flex-1 font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard">
      <h1 className="mt-5 hidden border-border pb-9 mb-2 text-xl font-bold text-foreground lg:block">
        찜한 목록
      </h1>

      <h3 className="-mt-4 mb-4 hidden text-lg font-bold text-foreground lg:block">
        부산 매물 결과 <span className="text-[#2567E7]">8건</span>
      </h3>

     

      <div className="mt-4 mb-8 flex gap-2">
        <div className="flex flex-1 items-center gap-3 rounded-lg border border-border px-4 py-3">
          {SEARCH_FIELD_LEADING_IMAGE_SRC ? (
            <span className="relative inline-flex size-5 shrink-0">
              <Image
                src={SEARCH_FIELD_LEADING_IMAGE_SRC}
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </span>
          ) : null}
          <input
            type="search"
            placeholder="매물을 검색해 주세요."
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>
        <button
          type="button"
          className="rounded-lg bg-[#2567E7] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2567E7]/90"
        >
          검색
        </button>
      </div>

      <h3 className="-mt-5 mb-7 text-lg font-bold text-foreground lg:hidden">
        부산 매물 결과 <span className="text-[#2567E7]">8건</span>
      </h3>

      <div className="space-y-6">
        {savedProperties.map((property) => (
          <div
            key={property.id}
            className="flex gap-4 border-b border-border pb-6"
          >
            <div className="flex shrink-0 flex-col gap-2">
              <div className="relative h-36 w-35 shrink-0 overflow-hidden rounded-lg">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-2 top-2 flex flex-col gap-1">
                  {property.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`rounded px-2 py-0.5 text-xs font-medium text-white ${badgeClass(badge)}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="찜하기"
                  className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/35 backdrop-blur-[2px]"
                >
                  <Heart className="size-4 fill-red-500 stroke-red-500 text-red-500" />
                </button>
              </div>
              <div className="mt-2 flex flex-nowrap items-center justify-start gap-2">
                <span className="whitespace-nowrap rounded bg-[#FFC83B] px-3 py-1 text-xs font-medium text-foreground">
                  수익률 {property.yield}
                </span>
                <span className="whitespace-nowrap rounded border border-border bg-white px-3 py-1 text-xs text-foreground">
                  평단가 {property.pricePerPyeong}
                </span>
              </div>
            </div>

            <div className="-ml-13 -mt-1 flex min-h-[8rem] min-w-0 flex-1 flex-col">
              <h3 className="mb-2 text-base font-bold text-foreground">{property.title}</h3>

              <div className="mb-3 space-y-1 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="relative -mt-0.5 inline-flex size-5 shrink-0">
                    <Image
                      src={PROPERTY_DETAIL_ICONS.location}
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </span>
                  <span className="leading-snug">{property.location}</span>
                </div>
                <p className="pl-7 leading-snug">{property.floors}</p>
                <div className="flex items-start gap-2">
                  <span className="relative -mt-0.5 inline-flex size-5 shrink-0">
                    <Image
                      src={PROPERTY_DETAIL_ICONS.area}
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </span>
                  <span className="leading-snug">{property.area}</span>
                </div>
              </div>

              <div className="mb-3 w-fit self-start rounded-lg bg-[#F8F8F8] px-3 py-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="size-3" strokeWidth={1.75} /> {property.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="size-3" strokeWidth={1.75} /> {property.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="size-3" strokeWidth={1.75} /> {property.likes}
                  </span>
                </div>
              </div>

              <div className="mt-auto flex justify-end pt-1">
                <p className="text-xl font-bold text-foreground">{property.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
