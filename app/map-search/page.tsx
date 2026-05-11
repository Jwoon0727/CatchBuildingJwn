'use client'

import { useState } from 'react'
import { Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import MapSearchSidebar from '@/components/map-search-sidebar'
import MapSearchFilters from '@/components/map-search-filters'
import PropertyMap from '@/components/property-map'

export default function MapSearchPage() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)

  const searchResults = [
    {
      id: 1,
      image: '/building/building_type04.png',
      location: '서울 강남구 역삼동',
      title: '강남역 초역세권 오피스텔',
      price: '14.5억',
      discount: '수익률 5.9%',
    },
    {
      id: 2,
      image: '/building/building_type04.png',
      location: '서울 강남구 역삼동',
      title: '강남역 초역세권 오피스텔',
      price: '14.5억',
      discount: '수익률 5.9%',
    },
    {
      id: 3,
      image: '/building/building_type04.png',
      location: '서울 강남구 역삼동',
      title: '강남역 초역세권 오피스텔',
      price: '14.5억',
      discount: '수익률 5.9%',
    },
    {
      id: 4,
      image: '/building/building_type04.png',
      location: '서울 강남구 역삼동',
      title: '강남역 초역세권 오피스텔',
      price: '14.5억',
      discount: '수익률 5.9%',
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-0">
        <div className="flex h-[calc(100vh-8rem)]">
          {/* Left Sidebar - Results List */}
          <MapSearchSidebar 
            results={searchResults} 
            selectedId={selectedProperty}
            onSelect={setSelectedProperty}
          />

          {/* Right Side - Filters + Map */}
          <div className="flex-1 flex flex-col">
            {/* Search Bar */}
            <div className="bg-white border-b border-border px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input 
                    type="text"
                    placeholder="지역, 건물명, 도로명 주소 검색"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <Button className="bg-[#2567E7] hover:bg-[#2567E7] text-white px-5">
                  검색
                </Button>
                <button className="p-2 px-5 hover:bg-secondary rounded-lg transition-colors border border-border">
                  <Menu size={20} className="text-foreground" />
                </button>
              </div>
            </div>

            {/* Filters */}
            <MapSearchFilters />

            {/* Map */}
            <PropertyMap 
              selectedId={selectedProperty}
              onMarkerClick={setSelectedProperty}
            />
          </div>
        </div>
      </div>
    </>
  )
}
