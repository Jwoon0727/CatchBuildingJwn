'use client'

import Link from 'next/link'
import { Eye, MessageCircle, Heart } from 'lucide-react'

interface SearchResult {
  id: number
  image: string
  title: string
  location: string
  specs: string[]
  date: string
  views: number
  comments: number
  likes: number
  deposit: string
  discount: string
  price: string
  badge: string
}

interface SearchResultCardProps {
  result: SearchResult
}

export default function SearchResultCard({ result }: SearchResultCardProps) {
  return (
    <Link href={`/map-search?id=${result.id}`} className="border-b border-border py-5 px-4 flex gap-6 hover:bg-secondary/30 transition-colors cursor-pointer block">
      {/* Image */}
      <div className="relative w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden group">
        <img 
          src={result.image}
          alt={result.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-3 left-3 flex gap-1">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
            매매
          </span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
            {result.badge}
          </span>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-foreground mb-2">{result.title}</h3>
          
          {/* Location */}
          <div className="flex items-start gap-2 mb-3">
            <span className="text-gray-400 text-sm">📍</span>
            <p className="text-sm text-muted-foreground">{result.location}</p>
          </div>

          {/* Specs */}
          <div className="text-xs text-muted-foreground space-y-1 mb-3">
            {result.specs.map((spec) => (
              <p key={spec} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0"></span>
                {spec}
              </p>
            ))}
            <p className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0"></span>
              {result.date}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye size={14} /> {result.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={14} /> {result.comments}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={14} /> {result.likes}
            </span>
          </div>
        </div>
      </div>

      {/* Right Price Section */}
      <div className="flex flex-col items-end justify-between">
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1">{result.deposit}</p>
          <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
            {result.discount}
          </span>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-primary">{result.price}</p>
        </div>
      </div>
    </Link>
  )
}
