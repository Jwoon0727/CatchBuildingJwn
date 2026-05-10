'use client'

import { Search, MapPin, Layers, Maximize, Eye, MessageCircle, Heart } from 'lucide-react'

const savedProperties = [
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
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200&h=200&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&h=200&fit=crop',
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

export default function MyPageSavedProperties() {
  return (
    <div className="flex-1 min-w-0">
      {/* Header */}
      <h1 className="text-2xl font-bold text-foreground mb-6">마이페이지</h1>

      {/* Search Results Header */}
      <p className="text-sm text-foreground mb-4">
        부산 매물 결과 <span className="text-primary font-bold">8건</span>
      </p>

      {/* Search Bar */}
      <div className="flex gap-2 mb-8">
        <div className="flex-1 flex items-center gap-3 px-4 py-3 border border-border rounded-lg">
          <Search size={20} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="매물을 검색해 주세요."
            className="flex-1 text-sm outline-none bg-transparent"
          />
        </div>
        <button className="px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          검색
        </button>
      </div>

      {/* Property List */}
      <div className="space-y-6">
        {savedProperties.map((property) => (
          <div key={property.id} className="flex gap-4 pb-6 border-b border-border last:border-b-0">
            {/* Thumbnail */}
            <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {property.badges.map((badge, index) => (
                  <span
                    key={index}
                    className={`px-2 py-0.5 text-white text-xs font-medium rounded ${
                      badge === 'NEW' ? 'bg-primary' : 'bg-gray-800'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Title */}
              <h3 className="font-bold text-foreground mb-2">{property.title}</h3>

              {/* Details */}
              <div className="space-y-1 mb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Layers size={14} />
                  <span>{property.floors}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Maximize size={14} />
                  <span>{property.area}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Eye size={12} /> {property.views}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={12} /> {property.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Heart size={12} /> {property.likes}
                </span>
              </div>

              {/* Tags and Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded">
                    수익율 {property.yield}
                  </span>
                  <span className="px-3 py-1 border border-border text-foreground text-xs rounded">
                    평단가 {property.pricePerPyeong}
                  </span>
                </div>
                <p className="text-xl font-bold text-foreground">{property.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
