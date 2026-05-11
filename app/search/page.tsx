'use client'

import { Search, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import SearchSidebar from '@/components/search-sidebar'
import SearchResultCard from '@/components/search-result-card'

export default function PropertySearchPage() {
  const searchResults = [
    {
      id: 1,
      image: '/building/building_type04.png',
      title: '강남역 초역세권 오피스텔',
      pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
      area: '대지 85평 연면적 · 210평',
      date: '사용승인일 2017년 08월 06일',
      views: 123,
      comments: 123,
      likes: 123,
      deposit: '평단가 2,131만',
      discount: '수익률 5.9%',
      price: '14.5억',
      badge: 'NEW'
    },
    {
      id: 2,
      image: '/building/building_type04.png',
      title: '강남역 초역세권 오피스텔',
      pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
      area: '대지 85평 연면적 · 210평',
      date: '사용승인일 2017년 08월 06일',
      views: 123,
      comments: 123,
      likes: 123,
      deposit: '평단가 2,131만',
      discount: '수익률 5.9%',
      price: '14.5억',
      badge: 'NEW'
    },
    {
      id: 3,
      image: '/building/building_type04.png',
      title: '강남역 초역세권 오피스텔',
      pinLines: ['서울 강남구 역삼동 · 15층', '근생빌딩 지하1층/지상 6층'],
      area: '대지 85평 연면적 · 210평',
      date: '사용승인일 2017년 08월 06일',
      views: 123,
      comments: 123,
      likes: 123,
      deposit: '평단가 2,131만',
      discount: '수익률 5.9%',
      price: '14.5억',
      badge: 'NEW'
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-5">
        <div className="max-w-[77rem] mx-auto px-1 py-1">
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SearchSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search Bar — 메인 상단 */}
              <div className="sticky top-16 z-30 mb-6 bg-white">
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      placeholder="지역, 건물명, 도로명 주소 검색"
                      className="w-full rounded-lg border border-border bg-white py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    검색
                  </Button>
                  <button
                    type="button"
                    className="rounded-lg border border-border bg-white p-2 transition-colors hover:bg-muted/40"
                    aria-label="지도로 보기"
                  >
                    <Map className="size-5 text-[#2563EB]" strokeWidth={2} aria-hidden />
                  </button>
                </div>
              </div>

              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-foreground">부산 매물 결과 8건</h2>
                <select className="px-3 py-2 border border-border rounded-lg text-sm bg-background cursor-pointer">
                  <option>추천순</option>
                  <option>최신순</option>
                  <option>가격순</option>
                </select>
              </div>

              {/* Search Results */}
              <div className="overflow-hidden rounded-lg bg-white">
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
