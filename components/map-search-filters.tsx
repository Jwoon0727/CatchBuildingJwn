'use client'

import { Checkbox } from '@/components/ui/checkbox'

/** 활성(선택) · 비활성 칩/체크 — 검색 사이드바와 동일 톤 */
const FILTER_CHIP_ACTIVE = 'bg-[#2567E7] text-white'
const FILTER_CHIP_INACTIVE = 'bg-[#F8F8F8] text-foreground hover:bg-[#EEEEEE]'
const FILTER_ACCENT_CHECKBOX =
  'border-input bg-[#F8F8F8] data-[state=checked]:border-[#2567E7] data-[state=checked]:bg-[#2567E7] data-[state=checked]:text-white dark:bg-[#F8F8F8] dark:data-[state=checked]:border-[#2567E7] dark:data-[state=checked]:bg-[#2567E7]'

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
    { id: 'gwangan', label: '광안리', active: false },
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
    <div className="border-b border-border bg-white px-6 py-4">
      <div className="flex flex-wrap gap-8">
        {/* Property Type */}
        <div>
          <h4 className="mb-2 text-sm font-bold text-foreground">매물 유형</h4>
          <div className="flex flex-wrap gap-3">
            {propertyTypes.map(type => (
              <label key={type.id} className="flex cursor-pointer items-center gap-2">
                <Checkbox defaultChecked={type.checked} className={FILTER_ACCENT_CHECKBOX} />
                <span className="text-sm text-foreground">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Transaction Type */}
        <div>
          <h4 className="mb-2 text-sm font-bold text-foreground">거래 유형</h4>
          <div className="flex flex-wrap gap-3">
            {transactionTypes.map(type => (
              <label key={type.id} className="flex cursor-pointer items-center gap-2">
                <Checkbox defaultChecked={type.checked} className={FILTER_ACCENT_CHECKBOX} />
                <span className="text-sm text-foreground">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Region */}
        <div>
          <h4 className="mb-2 text-sm font-bold text-foreground">지역</h4>
          <div className="flex flex-wrap gap-2">
            {regions.map(region => (
              <button
                key={region.id}
                type="button"
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  region.active ? FILTER_CHIP_ACTIVE : FILTER_CHIP_INACTIVE
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="mt-4 flex flex-wrap gap-8">
        {/* Hashtags */}
        <div>
          <h4 className="mb-2 text-sm font-bold text-foreground">#투자 포인트</h4>
          <div className="flex flex-wrap gap-2">
            {hashtags.map(tag => (
              <button
                key={tag}
                type="button"
                className={`rounded-full px-3 py-1 text-xs transition-colors ${FILTER_CHIP_INACTIVE}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <h4 className="text-sm font-bold text-foreground">가격</h4>
            <span className="text-xs text-muted-foreground">예산 기준</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {priceButtons.map(btn => (
                <button
                  key={btn.id}
                  type="button"
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    btn.active ? FILTER_CHIP_ACTIVE : FILTER_CHIP_INACTIVE
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
              className="h-2 w-32 cursor-pointer appearance-none rounded-lg bg-[#F8F8F8] accent-[#2567E7]"
              aria-label="가격 범위"
            />
            <span className="text-sm font-medium text-[#2567E7]">1.5억원 ~ 12억원</span>
          </div>
        </div>
      </div>
    </div>
  )
}
