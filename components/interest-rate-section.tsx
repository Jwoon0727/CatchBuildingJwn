'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const filterTabs = [
  { id: 'base', label: '기준금리' },
  { id: 'credit', label: '신용대출' },
  { id: 'mortgage', label: '주택담보' },
  { id: 'jeonse', label: '전세대출' },
  { id: 'jeonse2', label: '전세대출' },
]

function parsePct(v: string) {
  const n = parseFloat(v.replace(/%/g, '').trim())
  return Number.isFinite(n) ? n : 0
}

/** 발표 금리가 이전보다 높으면 상승(빨강), 아니면 블루 */
function announceCellClass(current: string, previous: string) {
  return parsePct(current) > parsePct(previous)
    ? 'text-[#EF4444]'
    : 'text-[#2563EB]'
}

type TrendDisplay = 'neutral' | 'down'

const rateCards = [
  {
    title: '한국은행 기준금리',
    rate: '2.75',
    trendDisplay: 'neutral' as TrendDisplay,
    change: '0.00',
    strokeColor: '#2563EB',
    chartPath: 'M 4 12 L 82 12 L 82 34 L 196 34',
    history: [
      { date: '2026.02.26(2월)', current: '2.75%', previous: '3.00%' },
      { date: '2026.01.26(1월)', current: '2.75%', previous: '3.00%' },
      { date: '2025.11.26(11월)', current: '3.00%', previous: '3.25%' },
      { date: '2025.09.26(9월)', current: '3.25%', previous: '3.50%' },
      { date: '2025.07.26(7월)', current: '3.50%', previous: '3.75%' },
    ],
  },
  {
    title: '개인 신용대출 금리',
    rate: '5.10',
    trendDisplay: 'down' as TrendDisplay,
    change: '0.00',
    strokeColor: '#22c55e',
    chartPath: 'M 4 14 L 52 18 L 96 14 L 132 21 L 166 16 L 196 18',
    history: [
      { date: '2026.02.26(2월)', current: '5.10%', previous: '5.15%' },
      { date: '2026.01.26(1월)', current: '5.15%', previous: '5.20%' },
      { date: '2025.11.26(11월)', current: '5.50%', previous: '5.35%' },
      { date: '2025.09.26(9월)', current: '5.35%', previous: '5.40%' },
      { date: '2025.07.26(7월)', current: '5.40%', previous: '5.38%' },
    ],
  },
  {
    title: '마이너스 신용대출 금리',
    rate: '5.45',
    trendDisplay: 'down' as TrendDisplay,
    change: '0.15',
    strokeColor: '#ef4444',
    chartPath: 'M 4 11 L 46 15 L 88 24 L 118 18 L 148 26 L 174 22 L 196 29',
    history: [
      { date: '2026.02.26(2월)', current: '5.45%', previous: '5.60%' },
      { date: '2026.01.26(1월)', current: '5.60%', previous: '5.55%' },
      { date: '2025.11.26(11월)', current: '5.50%', previous: '5.35%' },
      { date: '2025.09.26(9월)', current: '5.35%', previous: '5.40%' },
      { date: '2025.07.26(7월)', current: '5.40%', previous: '5.42%' },
    ],
  },
  {
    title: '전세자금 대출 금리',
    rate: '3.95',
    trendDisplay: 'down' as TrendDisplay,
    change: '0.15',
    strokeColor: '#f97316',
    chartPath: 'M 4 13 L 58 10 L 100 36 L 146 13 L 176 17 L 196 15',
    history: [
      { date: '2026.02.26(2월)', current: '3.95%', previous: '4.05%' },
      { date: '2026.01.26(1월)', current: '4.05%', previous: '4.10%' },
      { date: '2025.11.26(11월)', current: '4.10%', previous: '3.95%' },
      { date: '2025.09.26(9월)', current: '3.95%', previous: '4.00%' },
      { date: '2025.07.26(7월)', current: '4.20%', previous: '4.15%' },
    ],
  },
]

const DOWN_TREND_ICON_SRC = '/building/down.svg'

function RateSparkline({ pathD, stroke }: { pathD: string; stroke: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      className="h-14 w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <line
        x1="0"
        y1="11"
        x2="200"
        y2="11"
        stroke="#E8EAEC"
        strokeWidth="1"
        strokeDasharray="2 5"
        vectorEffect="nonScalingStroke"
      />
      <line
        x1="0"
        y1="29"
        x2="200"
        y2="29"
        stroke="#E8EAEC"
        strokeWidth="1"
        strokeDasharray="2 5"
        vectorEffect="nonScalingStroke"
      />
      <path
        d={pathD}
        fill="none"
        stroke={stroke}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function InterestRateSection() {
  const [activeTab, setActiveTab] = useState<string>('base')

  return (
    <section className="border-border bg-background py-12 font-pretendard">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">금리 동향</h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-[#2563EB] hover:text-[#1d4ed8]"
          >
            더보기 <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
          </a>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] max-md:-mx-6 max-md:flex-nowrap max-md:overflow-x-auto max-md:scroll-smooth max-md:px-6 max-md:scroll-pl-6 max-md:pr-6 max-md:snap-x max-md:snap-mandatory max-md:touch-pan-x [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:scroll-pl-0"
          role="tablist"
          aria-label="금리 종류"
        >
          {filterTabs.map((tab, i) => {
            const active = activeTab === tab.id
            return (
              <button
                key={`${tab.id}-${i}`}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex max-md:snap-start shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8]'
                    : 'bg-[#EFF1F4] text-[#374151] hover:bg-[#E5E8EC]'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {rateCards.map(card => (
            <article
              key={card.title}
              className="rounded-xl border border-[#E8EAED] bg-white p-5 "
            >
              <p className="mb-3 text-sm font-medium text-[#6B7280]">{card.title}</p>

              <div className="mb-5 flex flex-wrap items-baseline gap-x-1 gap-y-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">{card.rate}</span>
                <span className="text-xl font-semibold text-[#9CA3AF]">%</span>
                <span className="ml-1 inline-flex items-center gap-1 text-sm">
                  {card.trendDisplay === 'neutral' ? (
                    <span className="inline-flex items-center gap-0.5 text-[#9CA3AF]">
                      <span aria-hidden>-</span>
                      <span>{card.change}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-medium text-[#2563EB]">
                      <img
                        src={DOWN_TREND_ICON_SRC}
                        alt=""
                        width={28}
                        height={14}
                        className="h-3.5 w-auto shrink-0 object-contain"
                        aria-hidden
                      />
                      <span>{card.change}</span>
                    </span>
                  )}
                </span>
              </div>

              <div className="-mx-1 mb-2">
                <RateSparkline pathD={card.chartPath} stroke={card.strokeColor} />
              </div>

              <div className="mb-5 flex justify-between px-0.5 text-xs text-[#9CA3AF]">
                <span className="flex flex-col items-center leading-tight">
                  <span>10</span>
                  <span>월</span>
                </span>
                <span className="flex flex-col items-center leading-tight">
                  <span>12</span>
                  <span>월</span>
                </span>
                <span className="flex flex-col items-center leading-tight">
                  <span>2</span>
                  <span>월</span>
                </span>
              </div>

              <div className="border-t border-[#EEF1F4] pt-4">
                <p className="mb-3 text-sm font-semibold text-foreground">최근 5회 변동</p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-black">
                      <th className="pb-2 text-left font-normal">발표일</th>
                      <th className="pb-2 text-center font-normal">발표</th>
                      <th className="pb-2 text-right font-normal">이전</th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.history.map((item, i) => {
                      const isLatest = i === 0
                      return (
                      <tr key={`${item.date}-${i}`} className="border-t border-[#F3F4F6]">
                        <td
                          className={`py-2.5 ${isLatest ? 'font-medium text-black' : 'font-normal text-[#9CA3AF]'}`}
                        >
                          {item.date}
                        </td>
                        <td
                          className={`py-2.5 text-center font-medium ${announceCellClass(item.current, item.previous)}`}
                        >
                          {item.current}
                        </td>
                        <td
                          className={`py-2.5 text-right ${isLatest ? 'font-medium text-black' : 'font-normal text-[#9CA3AF]'}`}
                        >
                          {item.previous}
                        </td>
                      </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
