'use client'

import { useState } from 'react'
import { Grid3X3 } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
]

export default function PropertyGallery() {
  const [mainImage, setMainImage] = useState(0)

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      {/* Image Grid - Main + 2x2 Thumbnails */}
      <div className="flex gap-1 h-[400px]">
        {/* Main Image */}
        <div className="relative flex-1 min-w-0">
          <img
            src={images[mainImage]}
            alt="Property main view"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setMainImage(0)}
          />
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1.5 rounded text-sm font-medium">
              매매
            </span>
          </div>
          {/* View All Button */}
          <button className="absolute bottom-4 right-4 bg-white text-foreground px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md hover:bg-secondary transition-colors">
            <Grid3X3 size={16} />
            사진전체보기
          </button>
        </div>

        {/* 2x2 Thumbnail Grid */}
        <div className="w-[280px] flex-shrink-0 grid grid-cols-2 grid-rows-2 gap-1">
          {images.slice(1, 5).map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(index + 1)}
              className="relative overflow-hidden hover:opacity-90 transition-opacity"
            >
              <img
                src={image}
                alt={`Property view ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
