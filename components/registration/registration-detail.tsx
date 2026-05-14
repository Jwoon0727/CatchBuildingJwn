'use client'

import { useState } from 'react'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Check,
  Code2,
  Italic,
  List,
  ListOrdered,
  Minus,
  Underline,
  X,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface CheckPoint {
  id: number
  text: string
  checked: boolean
}

const fieldTextarea =
  'min-h-[88px] resize-none rounded-lg border-border bg-white px-4 py-3 text-sm shadow-none focus-visible:border-[#2567E7]/40 focus-visible:ring-[#2567E7]/25'

const toolbarBtn =
  'inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-foreground'

const toolbarTextBtn =
  'inline-flex h-8 shrink-0 items-center justify-center rounded-md px-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-background hover:text-foreground'

const realtorInput =
  'h-11 rounded-lg border-border bg-white px-4 text-sm shadow-none focus-visible:border-[#2567E7]/40 focus-visible:ring-[#2567E7]/25'

const INITIAL_DETAIL = `분당 백현동 까페거리 단독주택

백현동 까페거리 역자상권 중심가에 위치한 수익형 단독주택(근생+주거 복합)입니다. 1층 근생에서 안정적인 임대 수익이 발생하며, 2층~5층 주거 임차인이 모두 거주 중입니다.

입지 특징
• 판교역 도보 10분, 백현역 예정, 역세권
• 까페거리 주변 유동 인구 풍부, 임차인 공실 위험 낮음
• 배후 아파트 단지 2만 세대 이상`

export function PropertyDetailSection() {
  const [summary, setSummary] = useState(
    '분당 백현동 까페거리 중심부 위치. 1층 근린생활시설 + 2-5층 주거(3세대) 복합 수익 구조. 판교역 10분, 역세권 안정 수익형 단독주택.'
  )

  const [checkPoints, setCheckPoints] = useState<CheckPoint[]>([
    { id: 1, text: '판교역 도보 10분 역세권 — 신분당선 직결', checked: true },
    { id: 2, text: '1층 근생 월세 200만 + 주거 임대 330만 = 월 530만 고정 수익', checked: true },
    { id: 3, text: '배후 아파트 2만+ 세대, 까페거리 먹자상권 유동인구 풍부', checked: true },
    { id: 4, text: '2012년 준공, 철근콘크리트 구조, 2022년 외벽 리모델링 완료', checked: false },
  ])

  const [adminComment, setAdminComment] = useState(
    '역세권 + 신축급 단독주택. 1층 근생 고정수익에 상층부 주거 임대 수익 구조. 분당 백현동 핵심 입지.'
  )

  const [detailBody, setDetailBody] = useState(INITIAL_DETAIL)

  const [surroundings, setSurroundings] = useState(
    '판교역 (신분당선) 도보 10분, 백현역 예정, 이마트 트레이더스 도보 5분, 정자고 인근'
  )

  const [investmentPoint, setInvestmentPoint] = useState(
    '1층 근생 안정 수익 + 주거 임대 복합 구조, 공실 리스크 분산. 개발 호재 지역 지가 상승 기대.'
  )

  const [agentName, setAgentName] = useState('이민준')
  const [agentPhone, setAgentPhone] = useState('010-1234-5678')
  const [agentLicense, setAgentLicense] = useState('제2024-성남분당-0123호')
  const [agentOffice, setAgentOffice] = useState('분당백현 공인중개사사무소')
  const [agentOfficeAddress, setAgentOfficeAddress] = useState(
    '경기도 성남시 분당구 백현동 456-7'
  )
  const [agentEmail, setAgentEmail] = useState('agent@bundang.co.kr')

  function removeCheckPoint(id: number) {
    setCheckPoints((prev) => prev.filter((cp) => cp.id !== id))
  }

  function addCheckPoint() {
    setCheckPoints((prev) => {
      const newId = Math.max(0, ...prev.map((cp) => cp.id)) + 1
      return [...prev, { id: newId, text: '', checked: false }]
    })
  }

  function toggleCheckPoint(id: number) {
    setCheckPoints((prev) =>
      prev.map((cp) => (cp.id === id ? { ...cp, checked: !cp.checked } : cp))
    )
  }

  function updateCheckPointText(id: number, text: string) {
    setCheckPoints((prev) => prev.map((cp) => (cp.id === id ? { ...cp, text } : cp)))
  }

  return (
    <>
      <section className="rounded-xl border border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
      <div className="border-b border-border pb-4 flex flex-wrap items-start justify-between gap-4">
        <h2 className="text-lg font-bold text-foreground">매물 상세 설명</h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 shrink-0 gap-1.5 rounded-lg border-[#2567E7] bg-white px-3 text-[#2567E7] shadow-none hover:bg-[#2567E7]/5"
        >
          <Code2 className="size-4" strokeWidth={2} aria-hidden />
          JSON으로 등록
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        {/* 건물 소개 요약 */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-muted-foreground">
            건물 소개 요약<span className="text-red-500">*</span>
          </Label>
          <Textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className={cn(fieldTextarea, 'min-h-[92px]')}
            maxLength={150}
          />
          <div className="flex justify-between gap-3 text-xs text-muted-foreground">
            <span>리스트 카드 및 검색 결과에 표시됩니다</span>
            <span className="tabular-nums">{summary.length}/150</span>
          </div>
        </div>

        {/* 체크 포인트 */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Label className="text-sm font-semibold leading-snug text-muted-foreground">
              체크 포인트{' '}
              <span className="font-normal text-muted-foreground">(매물 상세 페이지에 강조 노출)</span>
              <span className="text-red-500">*</span>
            </Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addCheckPoint}
              className="h-9 shrink-0 rounded-lg border-[#2567E7]/40 bg-white px-3 text-sm font-medium text-[#2567E7] shadow-none hover:bg-[#2567E7]/5"
            >
              + 체크 포인트 추가
            </Button>
          </div>

          <div className="flex flex-col gap-1">
            {checkPoints.map((point) => (
              <div
                key={point.id}
                className={cn(
                  'flex items-center gap-1.5 rounded-lg px-2 py-1 sm:gap-2 sm:py-1.5',
                  point.checked ? 'bg-white' : 'bg-white'
                )}
              >
                <button
                  type="button"
                  aria-label={point.checked ? '강조 해제' : '강조 선택'}
                  aria-pressed={point.checked}
                  className={cn(
                    'flex size-6 shrink-0 items-center justify-center rounded-full transition-colors',
                    point.checked ? 'bg-[#2567E7] text-white' : 'bg-muted-foreground/35 text-white'
                  )}
                  onClick={() => toggleCheckPoint(point.id)}
                >
                  <Check className="size-3" strokeWidth={2.5} />
                </button>
                <Input
                  aria-label="체크 포인트 내용"
                  value={point.text}
                  onChange={(e) => updateCheckPointText(point.id, e.target.value)}
                  className="h-10 min-w-0 flex-1 border-border bg-white text-sm shadow-none focus-visible:ring-[#2567E7]/25"
                  placeholder="내용을 입력하세요"
                />
                <button
                  type="button"
                  aria-label="행 삭제"
                  className="flex size-7 shrink-0 items-center justify-center rounded-md text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
                  onClick={() => removeCheckPoint(point.id)}
                >
                  <X className="size-4" strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 관리자 코멘트 */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-muted-foreground">
            관리자 코멘트{' '}
            <span className="font-normal text-muted-foreground">(공개 시 매물 상단에 노출)</span>
          </Label>
          <Textarea
            value={adminComment}
            onChange={(e) => setAdminComment(e.target.value)}
            className={cn(
              fieldTextarea,
              'min-h-[88px] border-[#FFE49A] bg-[#F4F7FB] focus-visible:border-amber-300 focus-visible:ring-amber-500/20'
            )}
            maxLength={100}
          />
          <div className="flex justify-end text-xs text-muted-foreground">
            <span className="tabular-nums">{adminComment.length}/100</span>
          </div>
        </div>

        {/* 상세 설명 */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-muted-foreground">
            상세 설명<span className="text-red-500">*</span>
          </Label>

          <div className="overflow-hidden rounded-lg border border-border">
            <div
              role="toolbar"
              aria-label="서식 도구"
              className="flex flex-wrap items-center gap-0.5 border-b border-border bg-[#F4F7FB] px-2 py-2"
            >
              <button type="button" className={toolbarBtn} aria-label="굵게">
                <Bold className="size-4" strokeWidth={2} />
              </button>
              <button type="button" className={toolbarBtn} aria-label="기울임">
                <Italic className="size-4" strokeWidth={2} />
              </button>
              <button type="button" className={toolbarBtn} aria-label="밑줄">
                <Underline className="size-4" strokeWidth={2} />
              </button>
              <span className="mx-1 hidden h-5 w-px bg-border sm:inline" aria-hidden />
              <button type="button" className={toolbarTextBtn}>
                H1
              </button>
              <button type="button" className={toolbarTextBtn}>
                H2
              </button>
              <button type="button" className={toolbarTextBtn}>
                H3
              </button>
              <span className="mx-1 hidden h-5 w-px bg-border sm:inline" aria-hidden />
              <button type="button" className={toolbarBtn} aria-label="구분선">
                <Minus className="size-4" strokeWidth={2} />
              </button>
              <button type="button" className={toolbarTextBtn} aria-label="번호 목록">
                1.
              </button>
              <span className="mx-1 hidden h-5 w-px bg-border sm:inline" aria-hidden />
              <button type="button" className={toolbarBtn} aria-label="글머리 목록">
                <List className="size-4" strokeWidth={2} />
              </button>
              <button type="button" className={toolbarBtn} aria-label="번호 매기기 목록">
                <ListOrdered className="size-4" strokeWidth={2} />
              </button>
              <span className="mx-1 hidden h-5 w-px bg-border sm:inline" aria-hidden />
              <button type="button" className={toolbarBtn} aria-label="왼쪽 정렬">
                <AlignLeft className="size-4" strokeWidth={2} />
              </button>
              <button type="button" className={toolbarBtn} aria-label="가운데 정렬">
                <AlignCenter className="size-4" strokeWidth={2} />
              </button>
              <button type="button" className={toolbarBtn} aria-label="오른쪽 정렬">
                <AlignRight className="size-4" strokeWidth={2} />
              </button>
            </div>

            <Textarea
              value={detailBody}
              onChange={(e) => setDetailBody(e.target.value)}
              className="min-h-[220px] resize-y rounded-none border-0 px-4 py-4 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:min-h-[260px]"
              spellCheck={false}
            />
          </div>
        </div>

        {/* 주변 환경 */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-muted-foreground">
            주변 환경<span className="text-red-500">*</span>
          </Label>
          <Textarea
            value={surroundings}
            onChange={(e) => setSurroundings(e.target.value)}
            className={cn(fieldTextarea, 'min-h-[72px]')}
          />
        </div>

        {/* 투자 포인트 */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-muted-foreground">
            투자 포인트 <span className="font-normal text-muted-foreground">(선택)</span>
          </Label>
          <Textarea
            value={investmentPoint}
            onChange={(e) => setInvestmentPoint(e.target.value)}
            className={cn(fieldTextarea, 'min-h-[72px]')}
          />
        </div>
      </div>
    </section>


    {/* ------------------------------------------------------------------------------------------ */}

      <section className="rounded-xl border border-border bg-white px-5 py-6  lg:px-8 lg:py-8">
        <h2 className="border-b border-border pb-4 text-lg font-bold text-foreground">중개사 정보</h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-5">
          <div className="grid gap-2">
            <Label htmlFor="agent-name" className="text-sm font-medium text-muted-foreground">
              담당 중개사명<span className="text-red-500">*</span>
            </Label>
            <Input
              id="agent-name"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className={realtorInput}
              autoComplete="name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="agent-phone" className="text-sm font-medium text-muted-foreground">
              연락처<span className="text-red-500">*</span>
            </Label>
            <Input
              id="agent-phone"
              type="tel"
              value={agentPhone}
              onChange={(e) => setAgentPhone(e.target.value)}
              className={realtorInput}
              autoComplete="tel"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="agent-license" className="text-sm font-medium text-muted-foreground">
              중개사 자격번호
            </Label>
            <Input
              id="agent-license"
              value={agentLicense}
              onChange={(e) => setAgentLicense(e.target.value)}
              className={realtorInput}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="agent-office" className="text-sm font-medium text-muted-foreground">
              소속 중개사무소
            </Label>
            <Input
              id="agent-office"
              value={agentOffice}
              onChange={(e) => setAgentOffice(e.target.value)}
              className={realtorInput}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="agent-office-address" className="text-sm font-medium text-muted-foreground">
              사무소 주소
            </Label>
            <Input
              id="agent-office-address"
              value={agentOfficeAddress}
              onChange={(e) => setAgentOfficeAddress(e.target.value)}
              className={realtorInput}
              autoComplete="street-address"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="agent-email" className="text-sm font-medium text-muted-foreground">
              이메일
            </Label>
            <Input
              id="agent-email"
              type="email"
              value={agentEmail}
              onChange={(e) => setAgentEmail(e.target.value)}
              className={realtorInput}
              autoComplete="email"
            />
          </div>
        </div>
      </section>
    </>
  )
}
