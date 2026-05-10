'use client'

import { RotateCcw } from 'lucide-react'

export default function SearchSidebar() {
  const propertyTypes = [
    { id: 'sanggajutaek', label: '상가주택', checked: false },
    { id: 'dandokjutaek', label: '단독주택', checked: true },
    { id: 'gunseangbilding', label: '근생빌딩', checked: false },
    { id: 'kkomabuildung', label: '꼬마빌딩', checked: false },
    { id: 'toji', label: '토지', checked: false },
  ]

  const priceRanges = [
    { id: 'all', label: '전체', active: true },
    { id: 'under1b', label: '10억 이하', active: false },
  ]

  const priceDetails = [
    { id: 'under10', label: '10억대' },
    { id: 'over20', label: '20억 이상' },
  ]

  const transactionTypes = [
    { id: 'maemae', label: '매매', checked: false },
    { id: 'wolse', label: '월세', checked: true },
    { id: 'jeonse', label: '전세', checked: false },
  ]

  const regions = [
    { id: 'all', label: '전체', active: true },
    { id: 'haeundae', label: '해운대', active: false },
    { id: 'gwanin', label: '광인지', active: false },
    { id: 'seomun', label: '서면', active: false },
    { id: 'songjeong', label: '송정', active: false },
    { id: 'gijang', label: '기장', active: false },
    { id: 'nampo', label: '남포', active: false },
    { id: 'sentum', label: '센텀', active: false },
  ]

  const hashtags = [
    '추시입주',
    '주차기능',
    '면세권',
    '수익형',
    '신축',
    '대로변',
  ]

  return (
    <div className="bg-white rounded-lg border border-border p-5 h-fit sticky top-32">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
        <h2 className="text-lg font-bold text-foreground">필터</h2>
        <button className="p-1 hover:bg-secondary rounded transition-colors">
          <RotateCcw size={18} className="text-muted-foreground" />
        </button>
      </div>

      {/* Property Type */}
      <div className="mb-6 pb-6 border-b border-border">
        <h3 className="font-bold text-foreground mb-3 text-sm">매물 유형</h3>
        <div className="space-y-2">
          {propertyTypes.map(option => (
            <label key={option.id} className="flex items-center gap-3 cursor-pointer hover:opacity-80">
              <input 
                type="checkbox" 
                defaultChecked={option.checked}
                className="w-4 h-4 rounded border border-border cursor-pointer accent-primary"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6 pb-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-foreground text-sm">가격</h3>
          <span className="text-xs text-muted-foreground">예산 기준</span>
        </div>
        
        {/* Price Type Buttons */}
        <div className="flex gap-2 mb-4">
          {priceRanges.map(range => (
            <button
              key={range.id}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                range.active
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>

        {/* Price Detail Buttons */}
        <div className="flex gap-2 mb-4">
          {priceDetails.map(detail => (
            <button
              key={detail.id}
              className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
            >
              {detail.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="mb-4">
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="50"
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        {/* Price Display */}
        <p className="text-sm font-medium text-primary">1.5억원 ~ 12억원</p>
      </div>

      {/* Transaction Type */}
      <div className="mb-6 pb-6 border-b border-border">
        <h3 className="font-bold text-foreground mb-3 text-sm">거래 유형</h3>
        <div className="space-y-2">
          {transactionTypes.map(option => (
            <label key={option.id} className="flex items-center gap-3 cursor-pointer hover:opacity-80">
              <input 
                type="checkbox" 
                defaultChecked={option.checked}
                className="w-4 h-4 rounded border border-border cursor-pointer accent-primary"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Region */}
      <div className="mb-6 pb-6 border-b border-border">
        <h3 className="font-bold text-foreground mb-3 text-sm">지역</h3>
        <div className="flex flex-wrap gap-2">
          {regions.map(region => (
            <button
              key={region.id}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                region.active
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>

      {/* Investment Tips */}
      <div>
        <h3 className="font-bold text-foreground mb-3 text-sm">#투자 포인트</h3>
        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag) => (
            <button key={tag} className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
