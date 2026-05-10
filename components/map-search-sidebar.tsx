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
    <div className="w-64 bg-white border-r border-border flex flex-col">
      {/* Header Tabs */}
      <div className="flex">
        <button 
          onClick={() => setActiveTab('search')}
          className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
            activeTab === 'search' 
              ? 'text-foreground' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          검색결과{results.length}
          {activeTab === 'search' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button 
          onClick={() => setActiveTab('recent')}
          className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
            activeTab === 'recent' 
              ? 'text-foreground' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          최근조회
          {activeTab === 'recent' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>

      {/* Sort - only show for search tab */}
      {activeTab === 'search' && (
        <div className="p-3 border-b border-border">
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground ml-auto">
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
                  <span className="text-sm font-bold text-primary">{result.price}</span>
                  <span className="text-xs text-muted-foreground">{result.discount}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Recent Views
          recentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelect(item.id)}
              className="flex gap-3 p-4 border-b border-border cursor-pointer hover:bg-secondary/30 transition-colors"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">{item.location}</p>
                <h4 className="text-sm font-bold text-foreground mb-2">{item.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-primary">{item.price}</span>
                  <span className="text-xs text-muted-foreground">{item.discount}</span>
                </div>
              </div>
              <button 
                onClick={(e) => handleRemoveRecent(item.id, e)}
                className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <X size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
