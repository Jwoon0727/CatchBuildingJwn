'use client'

import { Search, Sliders } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import SearchSidebar from '@/components/search-sidebar'
import SearchResultCard from '@/components/search-result-card'

export default function PropertySearchPage() {
  const searchResults = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=350&fit=crop',
      title: '강남역 조역세권 오피스텔',
      location: '서울 강남구 역삼동 · 15층',
      specs: ['근생형', '지하층/지상 6층'],
      date: '사용승인일 2017년 08월 06일',
      views: 123,
      comments: 123,
      likes: 123,
      deposit: '월세가 2,131만',
      discount: '우대율 5.9%',
      price: '14.5억',
      badge: 'NEW'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=350&fit=crop',
      title: '강남역 조역세권 오피스텔',
      location: '서울 강남구 역삼동 · 15층',
      specs: ['근생형', '지하층/지상 6층'],
      date: '사용승인일 2017년 08월 06일',
      views: 123,
      comments: 123,
      likes: 123,
      deposit: '월세가 2,131만',
      discount: '우대율 5.9%',
      price: '14.5억',
      badge: 'NEW'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=350&fit=crop',
      title: '강남역 조역세권 오피스텔',
      location: '서울 강남구 역삼동 · 15층',
      specs: ['근생형', '지하층/지상 6층'],
      date: '사용승인일 2017년 08월 06일',
      views: 123,
      comments: 123,
      likes: 123,
      deposit: '월세가 2,131만',
      discount: '우대율 5.9%',
      price: '14.5억',
      badge: 'NEW'
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        {/* Search Bar */}
        <div className="border-b border-border bg-white sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input 
                  type="text"
                  placeholder="지역, 건물명, 도로명 주소 검색"
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                검색
              </Button>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Sliders size={20} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SearchSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-foreground">
                  부산 매물 검색 8건
                </h2>
                <select className="px-3 py-2 border border-border rounded-lg text-sm bg-background cursor-pointer">
                  <option>추천순</option>
                  <option>최신순</option>
                  <option>가격순</option>
                </select>
              </div>

              {/* Search Results */}
              <div className="bg-white rounded-lg border border-border divide-y divide-border">
                {searchResults.map(result => (
                  <SearchResultCard key={result.id} result={result} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
