'use client'

import Link from 'next/link'
import { MapPin, Maximize } from 'lucide-react'

const recommendations = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop',
    badge: 'NEW',
    title: '백현동 상가주택',
    location: '서울 강남구 역삼동 · 15층',
    specs: '대지 85평 연면적 · 210평',
    price: '16.5억',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop',
    badge: 'HOT',
    title: '백현동 상가주택',
    location: '서울 강남구 역삼동 · 15층',
    specs: '대지 85평 연면적 · 210평',
    price: '10.5억',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop',
    badge: 'HOT',
    title: '백현동 상가주택',
    location: '서울 강남구 역삼동 · 15층',
    specs: '대지 85평 연면적 · 210평',
    price: '16.5억',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop',
    badge: 'NEW',
    title: '백현동 상가주택',
    location: '서울 강남구 역삼동 · 15층',
    specs: '대지 85평 연면적 · 210평',
    price: '16.5억',
  },
]

export default function PropertyRecommendations() {
  return (
    <div className="mt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">같은 지역 추천 매물</h3>
        <button className="text-sm text-primary hover:underline flex items-center gap-1">
          더보기 <span>&rarr;</span>
        </button>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendations.map((item) => (
          <Link
            key={item.id}
            href={`/property/${item.id}`}
            className="group"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute top-3 left-3 flex gap-1">
                <span className="px-2.5 py-1 bg-gray-800 text-white text-xs font-medium rounded">
                  매매
                </span>
                <span className={`px-2.5 py-1 text-white text-xs font-medium rounded ${
                  item.badge === 'HOT' ? 'bg-red-500' : 'bg-primary'
                }`}>
                  {item.badge}
                </span>
              </div>
            </div>

            {/* Info */}
            <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <MapPin size={12} />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
              <Maximize size={12} />
              <span>{item.specs}</span>
            </div>
            <p className="text-sm">
              <span className="text-muted-foreground">매매</span>{' '}
              <span className="font-bold text-foreground">{item.price}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
