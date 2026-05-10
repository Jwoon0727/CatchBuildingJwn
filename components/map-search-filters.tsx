'use client'

export default function MapSearchFilters() {
  const propertyTypes = [
    { id: 'sanggajutaek', label: '상가주택', checked: false },
    { id: 'dandokjutaek', label: '단독주택', checked: true },
    { id: 'gunseangbilding', label: '근생빌딩', checked: false },
    { id: 'kkomabuildung', label: '꼬마빌딩', checked: false },
    { id: 'toji', label: '토지', checked: false },
  ]

  const transactionTypes = [
    { id: 'maemae', label: '매매', checked: false },
    { id: 'wolse', label: '월세', checked: true },
    { id: 'jeonse', label: '전세', checked: false },
  ]

  const regions = [
    { id: 'all', label: '전체', active: true },
    { id: 'haeundae', label: '해운대', active: false },
    { id: 'gwanin', label: '광안리', active: false },
    { id: 'seomun', label: '서면', active: false },
    { id: 'songjeong', label: '송정', active: false },
    { id: 'gijang', label: '기장', active: false },
    { id: 'nampo', label: '남포', active: false },
    { id: 'sentum', label: '센텀', active: false },
  ]

  const hashtags = ['즉시입주', '주차가능', '역세권', '수익형', '신축', '대로변']

  const priceButtons = [
    { id: 'all', label: '전체', active: true },
    { id: 'under10', label: '10억 이하', active: false },
    { id: '10s', label: '10억대', active: false },
    { id: 'over20', label: '20억 이상', active: false },
  ]

  return (
    <div className="bg-white border-b border-border px-6 py-4">
      <div className="flex flex-wrap gap-8">
        {/* Property Type */}
        <div>
          <h4 className="text-sm font-bold text-foreground mb-2">매물 유형</h4>
          <div className="flex flex-wrap gap-3">
            {propertyTypes.map(type => (
              <label key={type.id} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  defaultChecked={type.checked}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-foreground">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Transaction Type */}
        <div>
          <h4 className="text-sm font-bold text-foreground mb-2">거래 유형</h4>
          <div className="flex flex-wrap gap-3">
            {transactionTypes.map(type => (
              <label key={type.id} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  defaultChecked={type.checked}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-foreground">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Region */}
        <div>
          <h4 className="text-sm font-bold text-foreground mb-2">지역</h4>
          <div className="flex flex-wrap gap-2">
            {regions.map(region => (
              <button
                key={region.id}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
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
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap gap-8 mt-4">
        {/* Hashtags */}
        <div>
          <h4 className="text-sm font-bold text-foreground mb-2">#투자 포인트</h4>
          <div className="flex flex-wrap gap-2">
            {hashtags.map(tag => (
              <button
                key={tag}
                className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-sm font-bold text-foreground">가격</h4>
            <span className="text-xs text-muted-foreground">예산 기준</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {priceButtons.map(btn => (
                <button
                  key={btn.id}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    btn.active
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="50"
              className="w-32 h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <span className="text-sm text-primary font-medium">1.5억원 ~ 12억원</span>
          </div>
        </div>
      </div>
    </div>
  )
}
