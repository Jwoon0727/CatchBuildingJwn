'use client'

import { Heart, Star } from 'lucide-react'

interface PropertyCardProps {
  property: {
    id: number
    image: string
    name?: string
    title?: string
    location: string
    specs?: {
      rooms?: string
      size?: string
      floor?: string
    }
    rating?: number
    deposit?: string
    discount?: string
    discountRate?: string
    price: string
    agent?: {
      name: string
      description: string
    }
    badge?: string
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const title = property.title || property.name || '매물'
  const stars = property.rating ? Math.round(property.rating) : 4
  
  return (
    <div className="rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow bg-[#f8f9fb] group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img 
          src={property.image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Like Button */}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-colors">
          <Heart size={16} className="text-muted-foreground" />
        </button>

        {/* Badge */}
        {property.badge && (
          <div className="absolute top-3 left-3 flex gap-1">
            <span className="bg-primary text-white px-2 py-1 rounded text-xs font-bold">
              매매
            </span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
              {property.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Stars */}
        <div className="flex gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>

        {/* Title */}
        <h3 className="font-bold text-foreground mb-1 text-sm line-clamp-1">{title}</h3>

        {/* Location */}
        <p className="text-xs text-muted-foreground mb-3">{property.location}</p>

        {/* Specs */}
        {property.specs && (
          <div className="text-xs text-muted-foreground space-y-1 mb-3 pb-3 border-b border-border">
            {property.specs.rooms && <p>⊙ {property.specs.rooms}</p>}
            {property.specs.size && <p>⊙ {property.specs.size}</p>}
            {property.specs.floor && <p>⊙ {property.specs.floor}</p>}
          </div>
        )}

        {/* Price Section */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            {property.deposit && <span className="text-xs text-muted-foreground">{property.deposit}</span>}
            {property.discount && (
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                {property.discountRate || property.discount}
              </span>
            )}
          </div>
          <div className="text-lg font-bold text-primary">{property.price}</div>
        </div>

        {/* Agent Info */}
        {property.agent && (
          <div className="border-t border-border pt-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-gray-300 flex-shrink-0"></div>
              <span className="text-sm font-medium text-foreground">{property.agent.name}</span>
            </div>
            <p className="text-xs text-muted-foreground">{property.agent.description}</p>
            <p className="text-xs text-muted-foreground mt-1">대접면 코너 있고, 1층 프렌차이즈 입점으로 공실 리스크 낮음</p>
          </div>
        )}
      </div>
    </div>
  )
}
