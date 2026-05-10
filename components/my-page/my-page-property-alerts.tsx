'use client'

import { useState } from 'react'
import { MapPin, Building, Maximize, Eye, MessageCircle, Heart, Link } from 'lucide-react'

const categories = ['아파트', '건물', '오피스텔', '빌라']

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=160&fit=crop',
    title: '강남역 초역세권 오피스텔',
    location: '서울 강남구 역삼동 · 15층',
    building: '근생빌딩 지하1층/지상 6층',
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
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=160&fit=crop',
    title: '강남역 초역세권 오피스텔',
    location: '서울 강남구 역삼동 · 15층',
    building: '근생빌딩 지하1층/지상 6층',
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

export default function MyPagePropertyAlerts() {
  const [selectedCategory, setSelectedCategory] = useState('아파트')

  return (
    <div className="flex-1 min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">매물 알림</h1>
        <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
          알림 설정
        </button>
      </div>

      {/* Category Tabs - First Row */}
      <div className="flex gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-white border border-border text-foreground hover:bg-secondary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Category Tabs - Second Row (Sub-categories) */}
      <div className="flex gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={`sub-${category}`}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-white border border-border text-foreground hover:bg-secondary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Property List */}
      <div className="space-y-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl border border-border overflow-hidden">
            {/* Property Card Content */}
            <div className="p-6">
              <div className="flex gap-6">
                {/* Thumbnail */}
                <div className="relative w-40 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className="px-2 py-0.5 bg-primary text-white text-xs font-medium rounded">
                      매매
                    </span>
                    <span className="px-2 py-0.5 bg-primary text-white text-xs font-medium rounded">
                      NEW
                    </span>
                  </div>
                </div>

                {/* Property Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">{property.title}</h3>
                  
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} className="text-amber-500" />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building size={14} className="text-amber-500" />
                      <span>{property.building}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Maximize size={14} className="text-amber-500" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye size={14} /> {property.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} /> {property.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={14} /> {property.likes}
                    </span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-bold text-foreground">{property.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">{property.registeredDate}</p>
                </div>
              </div>

              {/* Tags Row */}
              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded">
                  수익율 {property.yield}
                </span>
                <span className="px-3 py-1.5 border border-border text-foreground text-xs font-medium rounded">
                  평단가 {property.pricePerPyeong}
                </span>
              </div>
            </div>

            {/* Blog Analysis Link */}
            <button className="w-full py-4 border-t border-border text-sm text-muted-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2">
              <Link size={16} />
              블로그 분석글
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
