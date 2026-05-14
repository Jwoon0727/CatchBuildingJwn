'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CalendarIcon, Plus, X } from 'lucide-react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

const inputClass =
  'h-11 rounded-lg border-border bg-white px-4 text-sm shadow-none focus-visible:border-[#2567E7]/40 focus-visible:ring-[#2567E7]/25'

const computedReadonlyClass = cn(
  inputClass,
  'cursor-default border-sky-200 bg-sky-50 font-semibold text-[#2567E7] shadow-none focus-visible:border-sky-200 focus-visible:ring-0 tabular-nums'
)

const selectTriggerClass =
  'h-11 w-full rounded-lg border-border px-4 shadow-none focus-visible:ring-[#2567E7]/25 data-[size=default]:h-11'

function parsePositiveNumber(raw: string): number | null {
  const n = parseFloat(raw.replace(/,/g, '').trim())
  if (!Number.isFinite(n) || n < 0) return null
  return n
}

const MAX_PROPERTY_PHOTOS = 9
const MAX_PHOTO_BYTES = 10 * 1024 * 1024
const ALLOWED_PHOTO_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

export type RegistrationExtraSectionProps = {
  /** 매매가(만원). 미입력 시 수익률 계산에 기본값 135000 사용 */
  salePriceManwon?: number
}

export default function RegistrationExtraSection({ salePriceManwon = 135000 }: RegistrationExtraSectionProps) {
  const [floorsAbove, setFloorsAbove] = useState('5')
  const [floorsBelow, setFloorsBelow] = useState('1')
  const [mainStructure, setMainStructure] = useState('철근콘크리트구조')
  const [approvalDate, setApprovalDate] = useState<Date | undefined>(new Date(2012, 8, 24))
  const [direction, setDirection] = useState('남향 (주출입구)')
  const [parkingSpaces, setParkingSpaces] = useState('4')
  const [elevator, setElevator] = useState('없음')
  const [heating, setHeating] = useState('개별난방')
  const [violationStatus, setViolationStatus] = useState('none')

  const [depositMan, setDepositMan] = useState('6000')
  const [monthlyRentMan, setMonthlyRentMan] = useState('530')
  const [vacancyRate, setVacancyRate] = useState('16.7')

  const [photoUrls, setPhotoUrls] = useState<(string | null)[]>(() =>
    Array.from({ length: MAX_PROPERTY_PHOTOS }, () => null)
  )
  const [pickPhotoIndex, setPickPhotoIndex] = useState<number | null>(null)
  const photoInputRef = useRef<HTMLInputElement>(null)
  const photoUrlsRef = useRef(photoUrls)
  photoUrlsRef.current = photoUrls

  const tagMgmtRef = useRef<HTMLDivElement>(null)

  const [adminTags, setAdminTags] = useState<string[]>([
    '역세권',
    '신축급',
    '루프탑 가능',
    '분당 핵심상권',
  ])
  const [tagDraft, setTagDraft] = useState('')

  useEffect(() => {
    return () => {
      photoUrlsRef.current.forEach((url) => {
        if (url?.startsWith('blob:')) URL.revokeObjectURL(url)
      })
    }
  }, [])

  function assignPhotoAt(index: number, file: File) {
    if (!ALLOWED_PHOTO_TYPES.has(file.type) || file.size > MAX_PHOTO_BYTES) return
    setPhotoUrls((prev) => {
      const next = [...prev]
      const prevUrl = next[index]
      if (prevUrl?.startsWith('blob:')) URL.revokeObjectURL(prevUrl)
      next[index] = URL.createObjectURL(file)
      return next
    })
  }

  function clearPhotoAt(index: number) {
    setPhotoUrls((prev) => {
      const next = [...prev]
      const prevUrl = next[index]
      if (prevUrl?.startsWith('blob:')) URL.revokeObjectURL(prevUrl)
      next[index] = null
      return next
    })
  }

  function openPhotoPicker(index: number) {
    setPickPhotoIndex(index)
    photoInputRef.current?.click()
  }

  function onPhotoInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file || pickPhotoIndex === null) return
    assignPhotoAt(pickPhotoIndex, file)
    setPickPhotoIndex(null)
  }

  function addAdminTag() {
    const t = tagDraft.trim()
    if (!t || adminTags.includes(t)) return
    setAdminTags((prev) => [...prev, t])
    setTagDraft('')
  }

  const rentalDerived = useMemo(() => {
    const monthly = parsePositiveNumber(monthlyRentMan)
    if (monthly === null) {
      return { annualRent: null as number | null, yieldPercent: null as number | null }
    }
    const annualRent = Math.round(monthly * 12)
    const yieldPercent =
      salePriceManwon > 0 ? (annualRent / salePriceManwon) * 100 : null
    return { annualRent, yieldPercent }
  }, [monthlyRentMan, salePriceManwon])

  return (
    <div className="flex flex-col gap-5">
      {/* 건물 정보 */}
      <section className="rounded-xl border border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
        <h3 className="border-b border-border pb-4 text-lg font-bold text-foreground">건물 정보</h3>

        <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-5">
          <div className="grid gap-2">
            <Label htmlFor="extra-floors-above" className="text-sm font-medium text-muted-foreground">
              지상 층수<span className="text-red-500">*</span>
            </Label>
            <Input
              id="extra-floors-above"
              inputMode="numeric"
              value={floorsAbove}
              onChange={(e) => setFloorsAbove(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="extra-floors-below" className="text-sm font-medium text-muted-foreground">
              지하 층수
            </Label>
            <Input
              id="extra-floors-below"
              inputMode="numeric"
              value={floorsBelow}
              onChange={(e) => setFloorsBelow(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="extra-structure" className="text-sm font-medium text-muted-foreground">
              주구조
            </Label>
            <Input
              id="extra-structure"
              value={mainStructure}
              onChange={(e) => setMainStructure(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-medium text-muted-foreground">사용승인일</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    inputClass,
                    'w-full justify-between text-left font-normal hover:bg-white'
                  )}
                >
                  <span className={approvalDate ? 'text-foreground' : 'text-muted-foreground'}>
                    {approvalDate ? format(approvalDate, 'MM/dd/yyyy', { locale: ko }) : '날짜 선택'}
                  </span>
                  <CalendarIcon className="size-4 shrink-0 opacity-60" aria-hidden />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={approvalDate} onSelect={setApprovalDate} locale={ko} />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="extra-direction" className="text-sm font-medium text-muted-foreground">
              방향
            </Label>
            <Input id="extra-direction" value={direction} onChange={(e) => setDirection(e.target.value)} className={inputClass} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="extra-parking" className="text-sm font-medium text-muted-foreground">
              주차대수
            </Label>
            <Input
              id="extra-parking"
              inputMode="numeric"
              value={parkingSpaces}
              onChange={(e) => setParkingSpaces(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="extra-elevator" className="text-sm font-medium text-muted-foreground">
              엘리베이터
            </Label>
            <Input id="extra-elevator" value={elevator} onChange={(e) => setElevator(e.target.value)} className={inputClass} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="extra-heating" className="text-sm font-medium text-muted-foreground">
              난방
            </Label>
            <Input id="extra-heating" value={heating} onChange={(e) => setHeating(e.target.value)} className={inputClass} />
          </div>

          <div className="grid gap-2 lg:col-span-2">
            <Label className="text-sm font-medium text-muted-foreground">위반건축물 여부</Label>
            <Select value={violationStatus} onValueChange={setViolationStatus}>
              <SelectTrigger className={cn(selectTriggerClass, 'max-w-xs')}>
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">해당없음</SelectItem>
                <SelectItem value="yes">해당</SelectItem>
                <SelectItem value="unknown">확인필요</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* 임대 수익 */}
      <section className="rounded-xl border border-border bg-white px-5 py-6 lg:px-8 lg:py-8">
        <h3 className="border-b border-border pb-4 text-lg font-bold text-foreground">임대 수익</h3>

        <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:gap-x-6">
          <div className="grid gap-2">
            <Label htmlFor="extra-deposit" className="text-sm font-medium text-muted-foreground">
              총 보증금 (만원)<span className="text-red-500">*</span>
            </Label>
            <Input
              id="extra-deposit"
              inputMode="decimal"
              value={depositMan}
              onChange={(e) => setDepositMan(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="extra-monthly" className="text-sm font-medium text-muted-foreground">
              월 임대료 (만원)<span className="text-red-500">*</span>
            </Label>
            <Input
              id="extra-monthly"
              inputMode="decimal"
              value={monthlyRentMan}
              onChange={(e) => setMonthlyRentMan(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3 md:gap-6">
          <div className="grid gap-2">
            <Label htmlFor="extra-annual-rent" className="text-sm font-medium text-muted-foreground">
              연 임대 수익 (만원)
            </Label>
            <Input
              id="extra-annual-rent"
              readOnly
              tabIndex={-1}
              value={
                rentalDerived.annualRent !== null ? rentalDerived.annualRent.toLocaleString('ko-KR') : ''
              }
              placeholder="—"
              className={cn(computedReadonlyClass, 'bg-[#F4F7FB] text-[#2567E7] border-[#C5D8FF]')}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="extra-yield" className="text-sm font-medium text-muted-foreground">
              수익률 (연)
            </Label>
            <Input
              id="extra-yield"
              readOnly
              tabIndex={-1}
              value={
                rentalDerived.yieldPercent !== null
                  ? `${rentalDerived.yieldPercent.toFixed(2)}%`
                  : ''
              }
              placeholder="—"
              className={cn(computedReadonlyClass, 'bg-[#F4F7FB] text-[#2567E7] border-[#C5D8FF]')}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="extra-vacancy" className="text-sm font-medium text-muted-foreground">
              공실률
            </Label>
            <div className="flex h-11 w-full max-w-[12rem] items-center gap-2">
              <Input
                id="extra-vacancy"
                inputMode="decimal"
                value={vacancyRate}
                onChange={(e) => setVacancyRate(e.target.value)}
                className={cn(inputClass, 'min-w-0 flex-1')}
              />
              <span className="shrink-0 text-sm font-medium text-muted-foreground">%</span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[#C5D8FF] bg-[#F4F7FB] px-4 py-3 text-sm leading-relaxed text-[#2567E7]">
          <p className="font-semibold">수익률 산출 기준</p>
          <p className="mt-1 tabular-nums">월 임대료 × 12개월 ÷ 매매가 × 100</p>
        </div>
      </section>

      {/* 매물 사진 · 태그관리 */}
      <section className="rounded-xl border border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
        <input
          ref={photoInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          className="sr-only"
          tabIndex={-1}
          aria-hidden
          onChange={onPhotoInputChange}
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3 border-b border-border pb-4">
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-1.5">
              <h3 className="text-lg font-bold text-foreground">매물 사진</h3>
              <p className="m-0 text-lg text-[#999999]">(최대 9장)</p>
            </div>

            <button
              type="button"
              className="ml-4 inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-black transition-colors hover:text-[#2567E7]/80"
              onClick={() => tagMgmtRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              <span className="text-base leading-none" aria-hidden>
                🏷️
              </span>
              태그관리
            </button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            사진 업로드 · 첫 번째 사진이 대표 사진으로 선정됩니다
          </p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
          {photoUrls.map((url, index) => (
            <div key={index} className="relative aspect-square">
              {url ? (
                <>
               
                
                  {index === 0 && (
                    <span className="pointer-events-none absolute left-2 top-2 rounded-md bg-[#2567E7] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      대표
                    </span>
                  )}
                </>
              ) : (
                <button
                  type="button"
                  aria-label={`사진 ${index + 1} 업로드`}
                  onClick={() => openPhotoPicker(index)}
                  className={cn(
                    'relative flex size-full flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/25 bg-white transition-colors hover:border-[#2567E7]/35 hover:bg-muted/35'
                  )}
                >
                  {index === 0 && (
                    <span className="absolute left-2 top-2 rounded-md bg-[#2567E7] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      NEW
                    </span>
                  )}
              
                </button>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">JPG, PNG, WEBP 지원 · 장당 최대 10MB</p>

        <div
          ref={tagMgmtRef}
          id="registration-tag-mgmt"
          className="mt-10 border-t border-border pt-8"
        >
          <h4 className="text-lg font-bold text-foreground">태그관리</h4>
          <p className="mt-2 text-sm font-medium text-muted-foreground">관리자 커스텀 태그</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {adminTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F0F4FA] px-3 py-1.5 text-sm font-medium text-[#2567E7]"
              >
                {tag}
                <button
                  type="button"
                  aria-label={`${tag} 태그 제거`}
                  className="rounded-full p-0.5 text-[#2567E7]/70 transition-colors hover:bg-sky-100 hover:text-[#2567E7]"
                  onClick={() => setAdminTags((prev) => prev.filter((t) => t !== tag))}
                >
                  <X className="size-3.5" strokeWidth={2.5} />
                </button>
              </span>
            ))}
            <div className="flex shrink-0 items-center gap-2">
              <Input
                value={tagDraft}
                onChange={(e) => setTagDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    addAdminTag()
                  }
                }}
                placeholder="태그 직접 입력"
                className={cn(inputClass, 'w-36 min-w-0 max-w-full sm:w-40')}
              />
              <Button
                type="button"
              
                className="h-11 shrink-0 rounded-lg bg-[#EBF1FD] px-4 font-medium text-[#2567E7] hover:bg-sky-100"
                onClick={addAdminTag}
              >
                추가
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
