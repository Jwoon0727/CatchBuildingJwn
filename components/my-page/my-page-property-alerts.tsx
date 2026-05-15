'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Eye, MessageCircle, Heart, Link } from 'lucide-react'

/** `my-page-saved-properties`와 동일한 `public` 기준 아이콘 경로 */
const PROPERTY_DETAIL_ICONS = {
  location: '/building/loca01.svg',
  area: '/building/loca02.svg',
} as const

const categories = ['아파트', '건물', '오피스텔', '빌라']

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=200&fit=crop',
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
    registeredDate: '2026. 04. 24 등록',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=200&fit=crop',
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
    registeredDate: '2026. 04. 24 등록',
  },
]

function badgeClass(label: string) {
  if (label === 'NEW') return 'bg-[#2567E7]'
  if (label === '매매') return 'bg-[#003883]'
  return 'bg-gray-800'
}

function categoryTabClass(active: boolean) {
  return active
    ? 'bg-[#2567E7] text-white'
    : 'bg-[#F5F5F5] text-foreground'
}

export default function MyPagePropertyAlerts() {
  const [selectedCategory, setSelectedCategory] = useState('아파트')

  return (
    <div className="min-w-0 flex-1 font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard">
      <div className=" flex items-center justify-between">
        <h1 className="mt-5  border-border pb-9 mb-2 text-xl font-bold text-foreground">매물 알림</h1>
        <button
          type="button"
          className="mb-5 rounded-lg bg-[#2567E7] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2567E7]/90"
        >
          알림 설정
        </button>
      </div>

      <div className="mb-4 hidden flex-wrap gap-2 lg:flex">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${categoryTabClass(selectedCategory === category)}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-2 flex flex-wrap gap-2 pl-0 lg:pl-5">
        {categories.map((category) => (
          <button
            key={`sub-${category}`}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${categoryTabClass(selectedCategory === category)}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-6 pl-0 lg:pl-5">
        {properties.map((property) => (
          <div key={property.id} className="bg-white">
            <div className="px-0 py-4 lg:p-6">
              <div className="flex gap-4">
                <div className="ml-0 flex shrink-0 flex-col lg:-ml-6">
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
                </div>

                <div className="-mt-1 ml-0 flex min-h-[8rem] min-w-0 flex-1 flex-col lg:-ml-1">
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
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-wrap items-center justify-start gap-2">
                  <span className="ml-0 whitespace-nowrap rounded bg-[#FFC83B] px-3 py-1 text-xs font-medium text-foreground lg:-ml-6">
                    수익률 {property.yield}
                  </span>
                  <span className="whitespace-nowrap rounded border border-border bg-white px-3 py-1 text-xs text-foreground">
                    평단가 {property.pricePerPyeong}
                  </span>
                </div>
                <div className="-mb-5 text-right">
                  <p className="text-base font-bold text-foreground">{property.price}</p>
                  <p className="mt-1 mb-2.5 text-xs text-muted-foreground">{property.registeredDate}</p>
                </div>
              </div>
            </div>

            <div className="px-0 pb-6 lg:pl-0 lg:pr-6">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-white py-3 text-base font-medium  text-foreground transition-colors hover:bg-secondary/40"
              >
                <Link className="size-4" strokeWidth={1.75} />
                블로그 분석글
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
