'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/** 위치·면적 줄 아이콘 (`public/` 기준, 필요 시 경로만 수정) */
const RECOMMEND_LOCATION_ICON_SRC = '/building/loca01.svg'
const RECOMMEND_SPECS_ICON_SRC = '/building/loca02.svg'

const recommendations = [
  {
    id: 1,
    image: '/building/building_type06.jpg',
    badge: 'NEW',
    title: '백현동 상가주택',
    location: '서울 강남구 역삼동 · 15층',
    specs: '대지 85평 연면적 · 210평',
    price: '16.5억',
  },
  {
    id: 2,
    image: '/building/building_type03.jpg',
    badge: 'HOT',
    title: '백현동 상가주택',
    location: '서울 강남구 역삼동 · 15층',
    specs: '대지 85평 연면적 · 210평',
    price: '10.5억',
  },
  {
    id: 3,
    image: '/building/building_type03.jpg',
    badge: 'HOT',
    title: '백현동 상가주택',
    location: '서울 강남구 역삼동 · 15층',
    specs: '대지 85평 연면적 · 210평',
    price: '16.5억',
  },
  {
    id: 4,
    image: '/building/building_type06.jpg',
    badge: 'NEW',
    title: '백현동 상가주택',
    location: '서울 강남구 역삼동 · 15층',
    specs: '대지 85평 연면적 · 210평',
    price: '16.5억',
  },
]

export default function PropertyRecommendations() {
  return (
    <div className="mt-12 font-pretendard [&_button]:font-pretendard">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-foreground">같은 지역 추천 매물</h3>
        <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-[#2563EB] hover:text-[#1d4ed8]"
          >
            더보기 <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
          </a>
      </div>

      {/* Property Grid — 모바일: 가로 스크롤(오른쪽 잘림) / md+: 4열 그리드 */}
      <div className="-mr-4 flex gap-4 overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mr-0 md:grid md:grid-cols-4 md:overflow-visible">
        {recommendations.map((item) => (
          <Link
            key={item.id}
            href={`/property/${item.id}`}
            className="group w-[60vw] max-w-[14rem] shrink-0 md:w-auto md:max-w-none md:shrink"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute top-1.5 left-1.5 flex gap-1">
                <span className="px-2.5 py-1 bg-[#003883] text-white text-xs font-medium rounded">
                  매매
                </span>
                <span className={`px-2.5 py-1 text-white text-xs font-medium rounded ${
                  item.badge === 'HOT' ? 'bg-[#E84040]' : 'bg-[#2567E7]'
                }`}>
                  {item.badge}
                </span>
              </div>
            </div>

            {/* Info */}
            <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <img
                src={RECOMMEND_LOCATION_ICON_SRC}
                alt=""
                width={12}
                height={12}
                className="h-5 w-5 shrink-0 object-contain"
              />
              <span>{item.location}</span>
            </div>
            <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <img
                src={RECOMMEND_SPECS_ICON_SRC}
                alt=""
                width={12}
                height={12}
                className="h-5 w-5 shrink-0 object-contain"
              />
              <span>{item.specs}</span>
            </div>
            <p className="text-base">
              <span className="text-foreground font-bold">매매</span>{' '}
              <span className="font-bold text-foreground">{item.price}</span>
            </p>
          </Link>
        ))}
        {/* 모바일: 우측 여백 */}
        <span className="block w-1 shrink-0 md:hidden" aria-hidden />
      </div>
    </div>
  )
}
