'use client'

import { useMemo, useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

const inputClass =
  'h-11 rounded-lg border-border bg-white px-4 text-sm shadow-none focus-visible:border-[#2567E7]/40 focus-visible:ring-[#2567E7]/25'

/** 제곱미터 → 평 (국토부 표준 환산 3.305785㎡/평) */
const M2_PER_PYEONG = 3.305785

const computedReadonlyClass = cn(
  inputClass,
  'cursor-default border-sky-200 bg-sky-50 font-semibold text-[#2567E7] shadow-none focus-visible:border-sky-200 focus-visible:ring-0'
)

function parsePositiveNumber(raw: string): number | null {
  const n = parseFloat(raw.replace(/,/g, '').trim())
  if (!Number.isFinite(n) || n <= 0) return null
  return n
}

const TAGS = [
  { id: 'urgent', label: '급매물', emoji: '🌟' },
  { id: 'yield', label: '수익형', emoji: '🌿' },
  { id: 'new', label: '신규등록', emoji: '🏷️' },
  { id: 'newbuild', label: '신축', emoji: '✨' },
  { id: 'parking', label: '주차우수', emoji: '🅿️' },
  { id: 'station', label: '역세권', emoji: '🚇' },
  { id: 'school', label: '학세권', emoji: '🎓' },
  { id: 'invest', label: '투자추천', emoji: '💡' },
] as const

export default function RegistrationIntro() {
  const [propertyName, setPropertyName] = useState(
    '분당 백현동 까레거리, 단독주택 3가구, 임치형 수익 물건'
  )
  const [propertyNo] = useState('2610093065')
  const [location, setLocation] = useState('경기도 성남시 분당구 백현동')
  const [mainUse, setMainUse] = useState('단독주택 (근생+주거)')
  const [transactionType, setTransactionType] = useState('매매')
  const [district, setDistrict] = useState('제1종일반주거지역')
  const [moveInDate, setMoveInDate] = useState<Date | undefined>(undefined)
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set(['urgent']))

  const [salePriceMan, setSalePriceMan] = useState('135000')
  const [landM2, setLandM2] = useState('281')
  const [buildingM2, setBuildingM2] = useState('140.25')
  const [totalFloorM2, setTotalFloorM2] = useState('458.9')

  const priceAreaDerived = useMemo(() => {
    const sale = parsePositiveNumber(salePriceMan)
    const land = parsePositiveNumber(landM2)
    const building = parsePositiveNumber(buildingM2)
    const totalFloor = parsePositiveNumber(totalFloorM2)

    const landPyeong = land !== null ? land / M2_PER_PYEONG : null
    const floorPyeong = totalFloor !== null ? totalFloor / M2_PER_PYEONG : null

    const pricePerPyeongLand =
      sale !== null && landPyeong !== null && landPyeong > 0 ? Math.floor(sale / landPyeong) : null
    const pricePerPyeongFloor =
      sale !== null && floorPyeong !== null && floorPyeong > 0 ? Math.floor(sale / floorPyeong) : null

    const landPyeongDisplay =
      landPyeong !== null && landPyeong > 0 ? `${Math.round(landPyeong)}평` : null

    const coverageRatio =
      building !== null && land !== null && land > 0 ? (building / land) * 100 : null
    const floorAreaRatio =
      totalFloor !== null && land !== null && land > 0 ? (totalFloor / land) * 100 : null

    return {
      pricePerPyeongLand,
      pricePerPyeongFloor,
      landPyeongDisplay,
      coverageRatio,
      floorAreaRatio,
    }
  }, [salePriceMan, landM2, buildingM2, totalFloorM2])

  const requiredFilled = useMemo(() => {
    let n = 0
    if (propertyName.trim()) n++
    if (location.trim()) n++
    if (mainUse.trim()) n++
    if (transactionType.trim()) n++
    return n
  }, [propertyName, location, mainUse, transactionType])

  const overallPercent = Math.round((requiredFilled / 4) * 100)
  const sectionsDone = Math.round((requiredFilled / 4) * 10)
  const mandatoryLabel = `${sectionsDone} / 10`

  const statusLabel =
    overallPercent >= 100 ? '검수준비 완료' : overallPercent >= 50 ? '작성 진행 중' : '작성 시작'

  function toggleTag(id: string) {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="flex flex-col gap-5">
      {/* 등록 진행 */}
      <section className="rounded-xl border border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
        <p className="text-sm font-semibold tracking-wide text-[#777777]">등록 진행</p>
        <h2 className="mt-2 text-xl font-bold leading-snug text-foreground lg:text-2xl">
          1번부터 순서대로 입력하면서 전체 완성도를 바로 확인합니다.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          내용을 입력할수록 실시간으로 완성도와 섹션 상태가 갱신됩니다.
        </p>

        <div className="pb-4 grid gap-8 border-b  border-border pt-8 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,2fr)] sm:items-center sm:gap-x-4 lg:gap-x-6">
          <div className="min-w-0 sm:pr-2">
            <p className="text-sm font-medium text-muted-foreground">전체 진행률</p>
            <p className="mt-2 text-3xl font-bold tabular-nums tracking-tight text-[#2567E7] lg:text-3xl">
              {overallPercent}%
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {sectionsDone} / 10 섹션 완료
            </p>
          </div>

          <div className="hidden shrink-0 sm:flex sm:items-center sm:justify-center" aria-hidden>
            <div className="h-16 w-px bg-border lg:h-[5.5rem]" />
          </div>

          <div className="flex min-w-0 flex-col gap-8 border-border border-t pt-8 sm:flex-row sm:items-center sm:gap-6 sm:border-t-0 sm:pt-0 lg:gap-8">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-muted-foreground">완료 섹션</p>
              <p className="mt-2 text-3xl font-bold tabular-nums tracking-tight text-foreground lg:text-3xl">
                {sectionsDone}
              </p>
              <p className="mt-1 text-sm tabular-nums text-muted-foreground">{mandatoryLabel}</p>
              <p className="mt-1 text-sm text-muted-foreground">필수 입력 기준으로 계산</p>
            </div>

            <div className="hidden h-16 w-px shrink-0 bg-border sm:block lg:h-[5.5rem]" aria-hidden />

            <div className="min-w-0 flex-1 border-border border-t pt-8 sm:border-t-0 sm:pt-0">
              <p className="text-sm font-medium text-muted-foreground">현재 상태</p>
              <p className="mt-2 text-2xl font-bold leading-tight text-foreground lg:text-3xl">
                {statusLabel}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">현재 작성 범위 기준</p>
            </div>
          </div>
        </div>

        <div className=" mt-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
            <span>0 - 100% 입력 게이지</span>
            <span>내용을 입력할수록 자동으로 채워집니다.</span>
          </div>
          <Progress value={overallPercent} className="h-2.5 rounded-full bg-muted [&>[data-slot=progress-indicator]]:rounded-full [&>[data-slot=progress-indicator]]:bg-[#2567E7]" />
        </div>
      </section>



      {/* 기본 정보 --------------------------------------------------------------------------------------------------------------------*/}

      <section className="rounded-xl border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
        <h3 className="border-b border-border pb-4 text-lg font-bold text-foreground">기본 정보</h3>

        <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-5">
          <div className="grid gap-2">
            <Label htmlFor="intro-property-name" className="text-sm font-medium">
              매물명<span className="text-red-500">*</span>
            </Label>
            <Input
              id="intro-property-name"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="intro-property-no" className="text-sm font-medium">
              매물번호
            </Label>
            <Input id="intro-property-no" value={propertyNo} readOnly disabled className={cn(inputClass, 'cursor-not-allowed bg-[#E2E8F0] text-[#2567E7]')} />
          </div>

          <div className="grid gap-2 lg:col-span-2">
            <Label htmlFor="intro-location" className="text-sm font-medium">
              소재지<span className="text-red-500">*</span>
            </Label>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
              <Input
                id="intro-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={cn(inputClass, 'min-w-0 flex-1')}
              />
              <Button
                type="button"
                className="h-11 shrink-0 rounded-lg bg-[#2567E7] px-5 text-white hover:bg-[#2567E7]/90 sm:w-auto"
              >
                주소 검색
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="intro-main-use" className="text-sm font-medium">
              주용도<span className="text-red-500">*</span>
            </Label>
            <Input id="intro-main-use" value={mainUse} onChange={(e) => setMainUse(e.target.value)} className={inputClass} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="intro-transaction" className="text-sm font-medium">
              거래형태<span className="text-red-500">*</span>
            </Label>
            <Input
              id="intro-transaction"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="intro-district" className="text-sm font-medium">
              지역/지구
            </Label>
            <Input id="intro-district" value={district} onChange={(e) => setDistrict(e.target.value)} className={inputClass} />
          </div>

          <div className="grid gap-2">
            <Label className="text-sm font-medium">입주가능일</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    inputClass,
                    'w-full justify-between gap-3 text-left font-normal hover:bg-white'
                  )}
                >
                  <span
                    className={cn(
                      'min-w-0 flex-1 truncate',
                      moveInDate ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {moveInDate ? format(moveInDate, 'MM/dd/yyyy', { locale: ko }) : 'mm/dd/yyyy'}
                  </span>
                  <CalendarIcon className="size-4 shrink-0 opacity-60" aria-hidden />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={moveInDate} onSelect={setMoveInDate} locale={ko} />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-sm font-medium text-foreground">매물 태그</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TAGS.map(({ id, label, emoji }) => {
              const on = selectedTags.has(id)
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleTag(id)}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium transition-colors',
                    on
                      ? 'border-[#2567E7] bg-[#2567E7]/5 text-[#2567E7]'
                      : 'border-border bg-white text-muted-foreground hover:border-muted-foreground/30 hover:bg-muted/60'
                  )}
                >
                  <span className="shrink-0 text-[1rem] leading-none select-none" aria-hidden>
                    {emoji}
                  </span>
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 가격 정보 */}
      <section className="rounded-xl border border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
        <h3 className="border-b border-border pb-4 text-lg font-bold text-foreground">가격 정보</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3 md:gap-6">
          <div className="grid gap-2">
            <Label htmlFor="intro-sale-man" className="text-sm font-medium text-muted-foreground">
              매매가 (만원)<span className="text-red-500">*</span>
            </Label>
            <Input
              id="intro-sale-man"
              inputMode="decimal"
              value={salePriceMan}
              onChange={(e) => setSalePriceMan(e.target.value)}
              className={inputClass}
            />
            <p className="text-xs leading-relaxed text-muted-foreground">
              1억 = 10000만, 13.5억 = 135000만
            </p>
          </div>
          <div className="grid gap-2 mb-7">
            <Label htmlFor="intro-price-pyeong-land" className="text-sm font-medium text-muted-foreground">
              평단가 (대지 기준)
            </Label>
            <Input
              id="intro-price-pyeong-land"
              readOnly
              tabIndex={-1}
              value={priceAreaDerived.pricePerPyeongLand !== null ? `${priceAreaDerived.pricePerPyeongLand}만` : ''}
              placeholder="—"
              className={cn(computedReadonlyClass, 'bg-[#F4F7FB] text-[#2567E7] border-[#C5D8FF]')}
            />
          </div>
          <div className="grid gap-2 mb-7">
            <Label htmlFor="intro-price-pyeong-floor" className="text-sm font-medium text-muted-foreground">
              평단가 (연면적 기준)
            </Label>
            <Input
              id="intro-price-pyeong-floor"
              readOnly
              tabIndex={-1}
              value={
                priceAreaDerived.pricePerPyeongFloor !== null ? `${priceAreaDerived.pricePerPyeongFloor}만` : ''
              }
              placeholder="—"
              className={cn(computedReadonlyClass, 'bg-[#F4F7FB] text-[#2567E7] border-[#C5D8FF]')}
            />
          </div>
        </div>
      </section>

      {/* 면적 규모 */}
      <section className="rounded-xl border border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
        <h3 className="border-b border-border pb-4 text-lg font-bold text-foreground">면적 규모</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3 md:gap-x-6 md:gap-y-5">
          <div className="grid gap-2">
            <Label htmlFor="intro-land-m2" className="text-sm font-medium text-muted-foreground">
              대지면적 (m²)<span className="text-red-500">*</span>
            </Label>
            <Input
              id="intro-land-m2"
              inputMode="decimal"
              value={landM2}
              onChange={(e) => setLandM2(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="intro-building-m2" className="text-sm font-medium text-muted-foreground">
              건축면적 (m²)
            </Label>
            <Input
              id="intro-building-m2"
              inputMode="decimal"
              value={buildingM2}
              onChange={(e) => setBuildingM2(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="intro-total-floor-m2" className="text-sm font-medium text-muted-foreground">
              연면적 (m²)<span className="text-red-500">*</span>
            </Label>
            <Input
              id="intro-total-floor-m2"
              inputMode="decimal"
              value={totalFloorM2}
              onChange={(e) => setTotalFloorM2(e.target.value)}
              className={inputClass }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="intro-land-pyeong" className="text-sm font-medium text-muted-foreground">
              대지 (평)
            </Label>
            <Input
              id="intro-land-pyeong"
              readOnly
              tabIndex={-1}
              value={priceAreaDerived.landPyeongDisplay ?? ''}
              placeholder="—"
              className={cn(computedReadonlyClass, 'bg-[#F4F7FB] text-[#2567E7] border-[#C5D8FF]')}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="intro-coverage" className="text-sm font-medium text-muted-foreground">
              건폐율
            </Label>
            <Input
              id="intro-coverage"
              readOnly
              tabIndex={-1}
              value={
                priceAreaDerived.coverageRatio !== null
                  ? `${priceAreaDerived.coverageRatio.toFixed(2)}%`
                  : ''
              }
              placeholder="—"
              className={cn(computedReadonlyClass, 'bg-[#F4F7FB] text-[#2567E7] border-[#C5D8FF]')}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="intro-far" className="text-sm font-medium text-muted-foreground">
              용적률
            </Label>
            <Input
              id="intro-far"
              readOnly
              tabIndex={-1}
              value={
                priceAreaDerived.floorAreaRatio !== null
                  ? `${priceAreaDerived.floorAreaRatio.toFixed(2)}%`
                  : ''
              }
              placeholder="—"
              className={cn(computedReadonlyClass, 'bg-[#F4F7FB] text-[#2567E7] border-[#C5D8FF]')}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
