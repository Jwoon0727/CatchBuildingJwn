'use client'

import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'

interface PropertyResult {
  id: number
  image: string
  location: string
  title: string
  price: string
  discount: string
}

interface MapSearchSidebarProps {
  results: PropertyResult[]
  selectedId: number | null
  onSelect: (id: number) => void
}

export default function MapSearchSidebar({ results, selectedId, onSelect }: MapSearchSidebarProps) {
  const [activeTab, setActiveTab] = useState<'search' | 'recent'>('search')
  const [recentItems, setRecentItems] = useState<PropertyResult[]>(results.slice(0, 4))

  const handleRemoveRecent = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setRecentItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="flex w-72 flex-col border-r border-border bg-white">
      {/* 탭 — 모바일 map-search 페이지와 동일 스타일 */}
      <div className="flex border-b border-border">
        <button
          type="button"
          onClick={() => setActiveTab('search')}
          className={`flex-1 py-4 text-base font-bold text-[#333333] transition-colors ${activeTab === 'search' ? 'border-b-2 border-[#2567E7]' : ''}`}
        >
          검색결과{' '}
          <span className="text-[#2567E7]">{results.length}</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('recent')}
          className={`flex-1 py-4 text-base font-bold transition-colors ${
            activeTab === 'recent' ? 'border-b-2 border-[#2567E7] text-[#333333]' : 'text-[#CCCCCC]'
          }`}
        >
          최근조회
        </button>
      </div>

      {/* Sort - only show for search tab */}
      {activeTab === 'search' && (
        <div className="p-3 border-b border-border">
          <button className="flex items-center gap-1 text-sm text-black hover:text-foreground ml-auto">
            추천순 <ChevronDown size={16} />
          </button>
        </div>
      )}

      {/* Content based on active tab */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'search' ? (
          // Search Results
          results.map((result) => (
            <div
              key={result.id}
              onClick={() => onSelect(result.id)}
              className={`flex gap-3 p-3 border-b border-border cursor-pointer transition-colors ${
                selectedId === result.id 
                  ? 'bg-primary/5 border-l-4 border-l-primary' 
                  : 'hover:bg-secondary/50'
              }`}
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">{result.location}</p>
                <h4 className="text-sm font-medium text-foreground mb-1 truncate">{result.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2567E7]">{result.price}</span>
                  <span className="text-xs text-muted-foreground">{result.discount}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Recent Views — 검색결과 탭과 동일 스타일 + 상단 우측 삭제
          recentItems.map(item => (
            <div
              key={item.id}
              className={`flex border-b border-border transition-colors ${
                selectedId === item.id
                  ? 'border-l-4 border-l-primary bg-primary/5'
                  : 'hover:bg-secondary/50'
              }`}
            >
              <div
                className="flex min-w-0 flex-1 cursor-pointer gap-3 p-3"
                onClick={() => onSelect(item.id)}
              >
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/building/building_type04.png"
                    alt={item.title}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs text-muted-foreground">{item.location}</p>
                  <h4 className="mb-1 truncate text-sm font-medium text-foreground">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#2567E7]">{item.price}</span>
                    <span className="text-xs text-muted-foreground">{item.discount}</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="shrink-0 self-start p-2 text-muted-foreground/45 transition-colors hover:text-muted-foreground/80"
                aria-label="최근 조회에서 삭제"
                onClick={e => handleRemoveRecent(item.id, e)}
              >
                <X size={15} aria-hidden />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
