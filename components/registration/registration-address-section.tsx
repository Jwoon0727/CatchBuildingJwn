'use client'

import { useMemo, useRef, useState } from 'react'
import { FileText, Plus, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

const floorTableMinWidth = 'min-w-[88rem]'

const floorHeaderFooterRow =
  'border-[#D8E6F5] bg-[#EEF4FB] hover:bg-[#EEF4FB] [&>th]:border-[#D8E6F5] [&>td]:border-[#D8E6F5]'

/** 열 사이 세로 구분선 (마지막 열은 제외) */
const floorColDivider = 'border-r border-[#D8E6F5] last:border-r-0'

const cellInputBase =
  'h-10 w-full rounded-lg border-border bg-white px-3 text-sm shadow-none transition-colors focus-visible:border-[#2567E7]/45 focus-visible:ring-[#2567E7]/20'

/** 용도: 가로 스크롤로 넓게 입력 */
const cellInputUsage = cn(cellInputBase, 'min-w-[26rem] max-w-none')

/** 계약기간: 가로 스크롤로 넓게 입력 */
const cellInputContract = cn(cellInputBase, 'min-w-[28rem] max-w-none')

const cellInputNumeric = cn(
  cellInputBase,
  'min-w-[7rem] text-right tabular-nums placeholder:text-muted-foreground'
)

const selectTriggerFloor = cn(
  cellInputBase,
  'h-10 w-full min-w-[6.5rem] justify-between py-0 text-left text-sm data-[size=default]:h-10 [&_[data-slot=select-value]]:justify-start [&_[data-slot=select-value]]:text-left'
)

type FloorRow = {
  id: string
  usage: string
  areaM2: string
  depositMan: string
  monthlyMan: string
  taxType: 'exempt' | 'taxable'
  contractPeriod: string
}

type AttachedDoc = {
  id: string
  fileName: string
  metaLine: string
  status: 'converted' | 'attached'
}

function parseSum(nums: string[]): number {
  return nums.reduce((acc, s) => {
    const n = parseFloat(s.replace(/,/g, '').trim())
    return acc + (Number.isFinite(n) ? n : 0)
  }, 0)
}

function nextRowId() {
  return `floor-${globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`}`
}

function nextDocId() {
  return `doc-${globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`}`
}

export default function RegistrationAddressSection() {
  const [floorRows, setFloorRows] = useState<FloorRow[]>(() => [
    {
      id: nextRowId(),
      usage: '',
      areaM2: '120.0',
      depositMan: '',
      monthlyMan: '',
      taxType: 'exempt',
      contractPeriod: '',
    },
    {
      id: nextRowId(),
      usage: '시설',
      areaM2: '85.0',
      depositMan: '3,000',
      monthlyMan: '200',
      taxType: 'taxable',
      contractPeriod: '2023.03 ~ 2025.02',
    },
    {
      id: nextRowId(),
      usage: '주거(객)',
      areaM2: '95.0',
      depositMan: '2,000',
      monthlyMan: '180',
      taxType: 'exempt',
      contractPeriod: '2022.10 ~ 2024.09',
    },
    {
      id: nextRowId(),
      usage: '세대',
      areaM2: '280.0',
      depositMan: '1,000',
      monthlyMan: '150',
      taxType: 'exempt',
      contractPeriod: '세대별 상이',
    },
  ])

  const [documents, setDocuments] = useState<AttachedDoc[]>([
    {
      id: nextDocId(),
      fileName: '건물등기부등본_2024.pdf',
      metaLine: 'PDF · 1.2MB · 6페이지 → 이미지 6장 변환 완료',
      status: 'converted',
    },
    {
      id: nextDocId(),
      fileName: '건축물대장_표제부.pdf',
      metaLine: 'PDF · 890KB · 3페이지 → 이미지 3장 변환 완료',
      status: 'converted',
    },
    {
      id: nextDocId(),
      fileName: '외관사진_정면.jpg',
      metaLine: 'JPG · 420KB · 첨부됨',
      status: 'attached',
    },
  ])

  const docInputRef = useRef<HTMLInputElement>(null)

  const floorTotals = useMemo(() => {
    const areas = floorRows.map((r) => r.areaM2)
    const deposits = floorRows.map((r) => r.depositMan)
    const months = floorRows.map((r) => r.monthlyMan)
    return {
      area: parseSum(areas),
      deposit: parseSum(deposits),
      monthly: parseSum(months),
    }
  }, [floorRows])

  function updateRow(id: string, patch: Partial<FloorRow>) {
    setFloorRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  }

  function addFloorRow() {
    setFloorRows((prev) => [
      ...prev,
      {
        id: nextRowId(),
        usage: '',
        areaM2: '',
        depositMan: '',
        monthlyMan: '',
        taxType: 'exempt',
        contractPeriod: '',
      },
    ])
  }

  function removeDoc(id: string) {
    setDocuments((prev) => prev.filter((d) => d.id !== id))
  }

  function handleDocFiles(files: FileList | null) {
    if (!files?.length) return
    const next: AttachedDoc[] = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const lower = file.name.toLowerCase()
      const sizeMb = file.size / (1024 * 1024)
      const sizeLabel =
        file.size >= 1024 * 1024
          ? `${sizeMb.toFixed(1)}MB`
          : `${Math.max(1, Math.round(file.size / 1024))}KB`

      if (lower.endsWith('.pdf')) {
        const fakePages = Math.min(12, Math.max(1, Math.round(file.size / (180 * 1024))))
        next.push({
          id: nextDocId(),
          fileName: file.name,
          metaLine: `PDF · ${sizeLabel} · ${fakePages}페이지 → 이미지 ${fakePages}장 변환 완료`,
          status: 'converted',
        })
      } else if (/\.(jpe?g|png|webp)$/i.test(lower)) {
        next.push({
          id: nextDocId(),
          fileName: file.name,
          metaLine: `${lower.endsWith('.png') ? 'PNG' : lower.endsWith('.webp') ? 'WEBP' : 'JPG'} · ${sizeLabel} · 첨부됨`,
          status: 'attached',
        })
      }
    }
    if (next.length) setDocuments((prev) => [...prev, ...next])
  }

  return (
    <div className="flex flex-col gap-5">
      {/* 층별 정보 */}
      <section className="rounded-xl border border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
        <h3 className="border-b border-border pb-4 text-lg font-bold text-foreground">층별 정보</h3>

        <div className="mt-6 -mx-1 overflow-x-auto overscroll-x-contain   lg:mx-0">
          <Table className={cn('w-full', floorTableMinWidth)}>
            <TableHeader>
              <TableRow className={floorHeaderFooterRow}>
                <TableHead
                  className={cn(
                    floorColDivider,
                    'min-w-[26rem] px-3 py-3 text-center text-sm font-semibold whitespace-normal text-muted-foreground'
                  )}
                >
                  용도
                </TableHead>
                <TableHead
                  className={cn(
                    floorColDivider,
                    'min-w-[7.5rem] px-3 py-3 text-center text-sm font-semibold whitespace-normal text-muted-foreground'
                  )}
                >
                  면적(m²)
                </TableHead>
                <TableHead
                  className={cn(
                    floorColDivider,
                    'min-w-[8.5rem] px-3 py-3 text-center text-sm font-semibold whitespace-normal text-muted-foreground'
                  )}
                >
                  보증금(만원)
                </TableHead>
                <TableHead
                  className={cn(
                    floorColDivider,
                    'min-w-[8.5rem] px-3 py-3 text-center text-sm font-semibold whitespace-normal text-muted-foreground'
                  )}
                >
                  월세(만원)
                </TableHead>
                <TableHead
                  className={cn(
                    floorColDivider,
                    'min-w-[7.5rem] px-3 py-3 text-center text-sm font-semibold whitespace-normal text-muted-foreground'
                  )}
                >
                  과세유형
                </TableHead>
                <TableHead
                  className={cn(
                    floorColDivider,
                    'min-w-[28rem] px-3 py-3 text-center text-sm font-semibold whitespace-normal text-muted-foreground'
                  )}
                >
                  계약기간
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {floorRows.map((row) => (
                <TableRow key={row.id} className="border-border/80 bg-white hover:bg-[#F7F9FC]">
                  <TableCell className={cn(floorColDivider, 'p-3 align-middle whitespace-normal')}>
                    <Input
                      aria-label="용도"
                      value={row.usage}
                      onChange={(e) => updateRow(row.id, { usage: e.target.value })}
                      placeholder="예: 근린생활"
                      className={cellInputUsage}
                    />
                  </TableCell>
                  <TableCell className={cn(floorColDivider, 'p-3 align-middle')}>
                    <Input
                      aria-label="면적"
                      inputMode="decimal"
                      value={row.areaM2}
                      onChange={(e) => updateRow(row.id, { areaM2: e.target.value })}
                      placeholder="—"
                      className={cellInputNumeric}
                    />
                  </TableCell>
                  <TableCell className={cn(floorColDivider, 'p-3 align-middle')}>
                    <Input
                      aria-label="보증금"
                      inputMode="decimal"
                      value={row.depositMan}
                      onChange={(e) => updateRow(row.id, { depositMan: e.target.value })}
                      placeholder="—"
                      className={cellInputNumeric}
                    />
                  </TableCell>
                  <TableCell className={cn(floorColDivider, 'p-3 align-middle')}>
                    <Input
                      aria-label="월세"
                      inputMode="decimal"
                      value={row.monthlyMan}
                      onChange={(e) => updateRow(row.id, { monthlyMan: e.target.value })}
                      placeholder="—"
                      className={cellInputNumeric}
                    />
                  </TableCell>
                  <TableCell className={cn(floorColDivider, 'p-3 align-middle')}>
                    <Select
                      value={row.taxType}
                      onValueChange={(v) =>
                        updateRow(row.id, { taxType: v as FloorRow['taxType'] })
                      }
                    >
                      <SelectTrigger className={selectTriggerFloor}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent align="center">
                        <SelectItem value="exempt">면세</SelectItem>
                        <SelectItem value="taxable">과세</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className={cn(floorColDivider, 'p-3 align-middle whitespace-normal')}>
                    <Input
                      aria-label="계약기간"
                      value={row.contractPeriod}
                      onChange={(e) => updateRow(row.id, { contractPeriod: e.target.value })}
                      placeholder="예: 2024.01 ~ 2026.12"
                      className={cellInputContract}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="border-0 bg-transparent">
              <TableRow className={cn(floorHeaderFooterRow, 'border-t')}>
                <TableCell
                  className={cn(floorColDivider, 'px-3 py-3 text-center font-semibold whitespace-normal text-foreground')}
                >
                  합계
                </TableCell>
                <TableCell
                  className={cn(
                    floorColDivider,
                    'px-3 py-3 text-right font-semibold tabular-nums text-foreground'
                  )}
                >
                  {floorTotals.area > 0 ? `${floorTotals.area.toFixed(1)}m²` : '—'}
                </TableCell>
                <TableCell
                  className={cn(
                    floorColDivider,
                    'px-3 py-3 text-right font-semibold tabular-nums text-foreground'
                  )}
                >
                  {floorTotals.deposit > 0
                    ? `${Math.round(floorTotals.deposit).toLocaleString('ko-KR')}만`
                    : '—'}
                </TableCell>
                <TableCell
                  className={cn(
                    floorColDivider,
                    'px-3 py-3 text-right font-semibold tabular-nums text-foreground'
                  )}
                >
                  {floorTotals.monthly > 0
                    ? `${Math.round(floorTotals.monthly).toLocaleString('ko-KR')}만`
                    : '—'}
                </TableCell>
                <TableCell
                  className={cn(floorColDivider, 'px-3 py-3 text-left text-muted-foreground')}
                >
                  —
                </TableCell>
                <TableCell className={cn(floorColDivider, 'px-3 py-3 text-center text-muted-foreground')}>
                  —
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <Button
          type="button"
          variant="outline"
          className="mt-4 h-9 rounded-lg border-[#2567E7] bg-white px-4 text-sm font-medium text-[#2567E7] shadow-none hover:bg-[#2567E7]/5"
          onClick={addFloorRow}
        >
          + 행 추가
        </Button>
      </section>

      {/* 자료 서류 첨부 */}
      <section className="rounded-xl border border-border bg-white px-5 py-6 lg:px-8 lg:py-8">
        <h3 className="border-b border-border pb-4 text-lg font-bold text-foreground">자료 서류 첨부</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          등기부등본, 건축물대장 등 관련 서류를 첨부해 주세요. PDF는 이미지로 자동 전환됩니다.
        </p>

        <input
          ref={docInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
          multiple
          className="sr-only"
          tabIndex={-1}
          aria-hidden
          onChange={(e) => {
            handleDocFiles(e.target.files)
            e.target.value = ''
          }}
        />

        <ul className="mt-6 flex flex-col gap-3">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white px-2 py-3"
            >
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-md text-red-600"
                  aria-hidden
                >
                  <FileText className="size-5" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{doc.fileName}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{doc.metaLine}</p>
                </div>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-3">
                <span
                  className={cn(
                    'rounded-full px-2.5 py-1 text-xs font-medium',
                    doc.status === 'converted'
                      ? 'bg-[#E8EDF5] text-[#07B34E]'
                      : 'bg-[#F4F7FB] text-[#999999]'
                  )}
                >
                  {doc.status === 'converted' ? '변환완료' : '첨부됨'}
                </span>
                <button
                  type="button"
                  aria-label={`${doc.fileName} 삭제`}
                  className="rounded-full p-1.5 text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
                  onClick={() => removeDoc(doc.id)}
                >
                  <X className="size-4" strokeWidth={1.5} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => docInputRef.current?.click()}
          className="mt-4 flex w-full flex-row items-center justify-start gap-2 rounded-lg border-2 border-dashed border-muted-foreground/30 px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:border-[#2567E7]/45 hover:bg-muted/25 hover:text-foreground"
        >
          <Plus className="size-6 shrink-0 stroke-[1.25] opacity-60" aria-hidden />
          <span className="text-[#999999]">파일 추가 (PDF, JPG, PNG)</span>
        </button>
      </section>
    </div>
  )
}
