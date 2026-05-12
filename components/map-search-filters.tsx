'use client'

import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'

/** 슬라이더: 0.1억 단위 (max 300 = 30억) — search-sidebar와 동일 */
const PRICE_SLIDER_MAX = 300

const FILTER_ACCENT_SLIDER =
  '[&_[data-slot=slider-track]]:!bg-[#F8F8F8] [&_[data-slot=slider-range]]:!bg-[#2567E7] [&_[data-slot=slider-thumb]]:!border-[#2567E7] [&_[data-slot=slider-thumb]]:!bg-white [&_[data-slot=slider-thumb]]:focus-visible:ring-[#2567E7]/40'
const FILTER_ACCENT_TEXT = 'text-[#2567E7]'

/** 활성(선택) · 비활성 칩/체크 — 검색 사이드바와 동일 톤 */
const FILTER_CHIP_ACTIVE = 'bg-[#2567E7] text-white'
const FILTER_CHIP_INACTIVE = 'bg-[#F8F8F8] text-foreground hover:bg-[#EEEEEE]'
const FILTER_ACCENT_CHECKBOX =
  'border-input bg-[#F8F8F8] data-[state=checked]:border-[#2567E7] data-[state=checked]:bg-[#2567E7] data-[state=checked]:text-white dark:bg-[#F8F8F8] dark:data-[state=checked]:border-[#2567E7] dark:data-[state=checked]:bg-[#2567E7]'

function formatPriceEok(tenths: number) {
  const eok = tenths / 10
  return Number.isInteger(eok) ? `${eok}` : eok.toFixed(1)
}

const pricePresets = [
  { id: 'all', label: '전체' },
  { id: 'under10', label: '10억 이하' },
  { id: 'band10', label: '10억대' },
  { id: 'over20', label: '20억 이상' },
] as const

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

  const [pricePreset, setPricePreset] = useState<(typeof pricePresets)[number]['id']>('all')
  const [priceRange, setPriceRange] = useState<number[]>([15, 120])

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
              {pricePresets.map(preset => (
                <button
                  key={preset.id}
                  type="button"
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    pricePreset === preset.id ? FILTER_CHIP_ACTIVE : FILTER_CHIP_INACTIVE
                  }`}
                  onClick={() => setPricePreset(preset.id)}
                >
                  {preset.label}
                </button>
              ))}
            </div>
            <div
              className={`min-w-[10rem] max-w-xs flex-1 px-0.5 basis-[10rem] ${FILTER_ACCENT_SLIDER}`}
            >
              <Slider
                min={0}
                max={PRICE_SLIDER_MAX}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                minStepsBetweenThumbs={1}
                className="py-2"
                aria-label="가격 범위"
              />
            </div>
            <span className={`text-sm font-medium whitespace-nowrap ${FILTER_ACCENT_TEXT}`}>
              {formatPriceEok(priceRange[0])}억원 ~ {formatPriceEok(priceRange[1])}억원
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
