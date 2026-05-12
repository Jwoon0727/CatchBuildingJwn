'use client'

import { useState } from 'react'
import Header from '@/components/header'
import BuildingSearchSidebar from '@/components/building-search/building-search-sidebar'
import BuildingSearchContent from '@/components/building-search/building-search-content'
import { Bookmark } from 'lucide-react'

const bookmarks = [
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
  { address: '부산광역시 동래구 사직동 153-29', area: '492.4m²', floor: '145.m²' },
]

export default function BuildingSearchPage() {
  const [activeMenu, setActiveMenu] = useState('url')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-6 pb-16">
        <div className="max-w-[77rem] mx-auto px-4">
          <div className="flex gap-8">
            {/* Left Sidebar */}
            <BuildingSearchSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            {/* Center Content */}
            <BuildingSearchContent activeMenu={activeMenu} />

            {/* Right Sidebar - Bookmarks */}
            <div className="w-56 flex-shrink-0 hidden lg:block">
              <div className="bg-white rounded-xl border border-border p-4 sticky top-32">
                <h3 className="font-bold text-foreground mb-4">
                  북마크 목록 <span className="text-[#2567E7]">8</span>
                </h3>
                <div className="space-y-4">
                  {bookmarks.map((item, index) => (
                    <div key={index} className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground leading-tight">{item.address}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.area} · {item.floor}</p>
                      </div>
                      <Bookmark size={16} className="text-amber-400 fill-amber-400 flex-shrink-0 mt-0.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
