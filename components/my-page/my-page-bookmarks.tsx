'use client'

import { Bookmark } from 'lucide-react'

const bookmarkedProperties = [
  {
    id: 1,
    title: '부산광역시 동래구 사직동 153-29',
    specs: '492.4m² · 145.m²',
  },
  {
    id: 2,
    title: '부산광역시 동래구 사직동 153-29',
    specs: '492.4m² · 145.m²',
  },
  {
    id: 3,
    title: '부산광역시 동래구 사직동 153-29',
    specs: '492.4m² · 145.m²',
  },
  {
    id: 4,
    title: '부산광역시 동래구 사직동 153-29',
    specs: '492.4m² · 145.m²',
  },
  {
    id: 5,
    title: '부산광역시 동래구 사직동 153-29',
    specs: '492.4m² · 145.m²',
  },
]

export default function MyPageBookmarks() {
  return (
    <div className="w-56 shrink-0 font-pretendard">
      <div className="bg-white rounded-xl border border-border p-5 sticky top-32">
        {/* Header */}
        <h3 className="font-bold text-foreground mb-4">
          북마크 목록 <span className="text-[#2567E7]">8</span>
        </h3>

        {/* Bookmarked Properties List */}
        <div className="space-y-4">
          {bookmarkedProperties.map((property) => (
            <div
              key={property.id}
              className="flex items-start gap-3 cursor-pointer group"
            >
              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground font-medium leading-tight group-hover:text-primary transition-colors">
                  {property.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{property.specs}</p>
              </div>

              {/* Bookmark Icon */}
              <Bookmark size={18} className="text-amber-400 fill-amber-400 flex-shrink-0 mt-0.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
