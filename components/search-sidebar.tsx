'use client'

import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'

/** 슬라이더: 0.1억 단위 (max 300 = 30억) */
const PRICE_SLIDER_MAX = 300

/** 필터 강조색(남색·선택·슬라이더·체크) */
const FILTER_ACCENT_CHIP = 'bg-[#2567E7] text-white'
const FILTER_ACCENT_TEXT = 'text-[#2567E7]'
const FILTER_ACCENT_CHECKBOX =
  'border-input bg-[#F8F8F8] data-[state=checked]:border-[#2567E7] data-[state=checked]:bg-[#2567E7] data-[state=checked]:text-white dark:bg-[#F8F8F8] dark:data-[state=checked]:border-[#2567E7] dark:data-[state=checked]:bg-[#2567E7]'
/** Slider 트랙(비선택)·선택 구간·썸 — 트랙은 #F8F8F8, 구간은 강조색 */
const FILTER_ACCENT_SLIDER =
  '[&_[data-slot=slider-track]]:!bg-[#F8F8F8] [&_[data-slot=slider-range]]:!bg-[#2567E7] [&_[data-slot=slider-thumb]]:!border-[#2567E7] [&_[data-slot=slider-thumb]]:!bg-white [&_[data-slot=slider-thumb]]:focus-visible:ring-[#2567E7]/40'
/** 비선택 칩·칩형 버튼 */
const FILTER_INACTIVE_CHIP = 'bg-[#F8F8F8] text-foreground hover:bg-[#EEEEEE]'

function formatPriceEok(tenths: number) {
  const eok = tenths / 10
  return Number.isInteger(eok) ? `${eok}` : eok.toFixed(1)
}

export default function SearchSidebar() {
  const propertyTypes = [
    { id: 'sanggajutaek', label: '상가주택', checked: false },
    { id: 'dandokjutaek', label: '단독주택', checked: true },
    { id: 'gunseangbilding', label: '근생빌딩', checked: false },
    { id: 'kkomabuildung', label: '꼬마빌딩', checked: false },
    { id: 'toji', label: '토지', checked: false },
  ]

  const pricePresets = [
    { id: 'all', label: '전체' },
    { id: 'under10', label: '10억 이하' },
    { id: 'band10', label: '10억대' },
    { id: 'over20', label: '20억 이상' },
  ] as const

  const transactionTypes = [
    { id: 'maemae', label: '매매', checked: false },
    { id: 'wolse', label: '월세', checked: true },
    { id: 'jeonse', label: '전세', checked: false },
  ]

  const regions = [
    { id: 'all', label: '전체' },
    { id: 'haeundae', label: '해운대' },
    { id: 'gwangan', label: '광안리' },
    { id: 'seomun', label: '서면' },
    { id: 'songjeong', label: '송정' },
    { id: 'gijang', label: '기장' },
    { id: 'nampo', label: '남포' },
    { id: 'sentum', label: '센텀' },
  ]

  const hashtags = [
    '즉시입주',
    '주차가능',
    '역세권',
    '수익형',
    '신축',
    '대로변',
  ]

  const [pricePreset, setPricePreset] = useState<(typeof pricePresets)[number]['id']>('all')
  const [priceRange, setPriceRange] = useState<number[]>([15, 120])
  const [regionId, setRegionId] = useState<string>('all')

  const chipBase =
    'rounded-full text-xs font-medium transition-colors px-3 py-2 sm:px-4'
  const chipInactive = FILTER_INACTIVE_CHIP
  const chipActive = FILTER_ACCENT_CHIP

  return (
    <div className="sticky top-32 h-fit w-full max-w-[15rem] rounded-lg border border-border bg-white p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-border pb-6">
        <h2 className="text-lg font-bold text-foreground">필터</h2>
        <button
          type="button"
          className="rounded p-1 transition-colors hover:bg-secondary"
          aria-label="필터 초기화"
        >
          <RotateCcw size={18} className="text-muted-foreground" />
        </button>
      </div>

      {/* Property Type */}
      <div className="mb-6 border-b border-border pb-6">
        <h3 className="mb-3 text-sm font-bold text-foreground">매물 유형</h3>
        <div className="space-y-2">
          {propertyTypes.map(option => (
            <label
              key={option.id}
              className="flex cursor-pointer items-center gap-3 hover:opacity-80"
            >
              <Checkbox
                defaultChecked={option.checked}
                className={FILTER_ACCENT_CHECKBOX}
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6 border-b border-border pb-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-bold text-foreground">가격</h3>
          <span className="text-xs text-muted-foreground">예산 기준</span>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {pricePresets.map(preset => (
            <button
              key={preset.id}
              type="button"
              className={`${chipBase} ${
                pricePreset === preset.id ? chipActive : chipInactive
              }`}
              onClick={() => setPricePreset(preset.id)}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className={`mb-1 px-0.5 ${FILTER_ACCENT_SLIDER}`}>
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

        <p className={`text-sm font-medium ${FILTER_ACCENT_TEXT}`}>
          {formatPriceEok(priceRange[0])}억원 ~ {formatPriceEok(priceRange[1])}억원
        </p>
      </div>

      {/* Transaction Type */}
      <div className="mb-6 border-b border-border pb-6">
        <h3 className="mb-3 text-sm font-bold text-foreground">거래 유형</h3>
        <div className="space-y-2">
          {transactionTypes.map(option => (
            <label
              key={option.id}
              className="flex cursor-pointer items-center gap-3 hover:opacity-80"
            >
              <Checkbox
                defaultChecked={option.checked}
                className={FILTER_ACCENT_CHECKBOX}
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Region */}
      <div className="mb-6 border-b border-border pb-6">
        <h3 className="mb-3 text-sm font-bold text-foreground">지역</h3>
        <div className="flex flex-wrap gap-2">
          {regions.map(region => (
            <button
              key={region.id}
              type="button"
              className={`${chipBase} ${
                regionId === region.id ? chipActive : chipInactive
              }`}
              onClick={() => setRegionId(region.id)}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>

      {/* Investment Tips */}
      <div>
        <h3 className="mb-3 text-sm font-bold text-foreground">#투자 포인트</h3>
        <div className="flex flex-wrap gap-2">
          {hashtags.map(tag => (
            <button
              key={tag}
              type="button"
              className={`rounded-full px-3 py-1.5 text-xs ${FILTER_INACTIVE_CHIP}`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
