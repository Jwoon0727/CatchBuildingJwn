'use client'

import { ChevronRight } from 'lucide-react'
import PropertyCard from './property-card'

const filterTabs = [
  { id: 'lease', label: '전세' },
  { id: 'apt', label: '아파트' },
  { id: 'officetel', label: '오피스텔' },
  { id: 'shop', label: '상가' },
  { id: 'office', label: '사무실' },
]

interface Property {
  id: number
  image: string
  title: string
  location: string
  specs: {
    rooms?: string
    size?: string
    floor?: string
  }
  rating: number
  deposit: string
  deposit2?: string
  discount?: string
  discountRate?: string
  price: string
  agent: {
    name: string
    description: string
  }
  badge?: string
}

interface PropertySectionProps {
  title: string
  properties?: Property[]
}

export default function PropertySection({ title, properties = [] }: PropertySectionProps) {
  // Sample data if not provided
  const sampleProperties: Property[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      title: '역삼동 테라로 근생매입',
      location: '서울 강남구 역삼동 · 15층',
      specs: { rooms: '근생형', size: '지하층/지상 6층', floor: '' },
      rating: 5,
      deposit: '월세가 2,131만',
      discount: '우대율 5.9%',
      price: '22억',
      agent: { name: '김우동신', description: '주전하는 이유' },
      badge: 'HOT'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      title: '역삼동 테라로 근생매입',
      location: '서울 강남구 역삼동 · 15층',
      specs: { rooms: '근생형', size: '지하층/지상 6층', floor: '' },
      rating: 5,
      deposit: '월세가 2,131만',
      discount: '우대율 5.9%',
      price: '22억',
      agent: { name: '김우동신', description: '주전하는 이유' },
      badge: 'HOT'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      title: '역삼동 테라로 근생매입',
      location: '서울 강남구 역삼동 · 15층',
      specs: { rooms: '근생형', size: '지하층/지상 6층', floor: '' },
      rating: 5,
      deposit: '월세가 2,131만',
      discount: '우대율 5.9%',
      price: '22억',
      agent: { name: '김우동신', description: '주전하는 이유' },
      badge: 'HOT'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      title: '역삼동 테라로 근생매입',
      location: '서울 강남구 역삼동 · 15층',
      specs: { rooms: '근생형', size: '지하층/지상 6층', floor: '' },
      rating: 5,
      deposit: '월세가 2,131만',
      discount: '우대율 5.9%',
      price: '22억',
      agent: { name: '김우동신', description: '주전하는 이유' },
      badge: 'HOT'
    },
  ]

  const displayProperties = properties.length > 0 ? properties : sampleProperties

  return (
    <section className="py-12 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <a href="#" className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium">
            더보기 <ChevronRight size={16} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8">
          {filterTabs.map((tab, i) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
