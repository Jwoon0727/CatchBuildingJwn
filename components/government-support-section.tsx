'use client'

import { ArrowRight, Calendar } from 'lucide-react'

const BADGE_STYLES: Record<string, string> = {
  창업지원: 'bg-[#EBF1FD] text-[#000000]',
  주거지원: 'bg-[#D0FAE5] text-[#000000]',
  고용지원: 'bg-[#EDE9FE] text-[#000000]',
  금융지원: 'bg-[#FFFAEC] text-[#000000]',
}

function badgeClassFor(label: string) {
  return BADGE_STYLES[label] ?? 'bg-[#EFF1F4] text-[#374151]'
}

const supportPrograms = [
  {
    id: 1,
    badge: '창업지원',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 2,
    badge: '주거지원',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 3,
    badge: '고용지원',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 4,
    badge: '창업지원',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 5,
    badge: '금융지원',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 6,
    badge: '주거지원',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
]

export default function GovernmentSupportSection() {
  return (
    <section className="border-b border-border bg-background py-12 font-pretendard">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">정부지원금 최신 공고</h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-[#2563EB] hover:text-[#1d4ed8]"
          >
            더보기 <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:gap-6">
          {supportPrograms.map(program => (
            <article
              key={program.id}
              className="cursor-pointer rounded-xl border border-[#E8EAED] bg-white p-3 shadow-sm transition-shadow hover:shadow-md md:p-5"
            >
              <div className="mb-5 flex items-center justify-between gap-2 sm:mb-4 sm:gap-3">
                <span
                  className={`w-fit rounded-[4px] px-2 py-0.5 text-[10px] font-bold sm:px-2.5 sm:py-1 sm:text-xs ${badgeClassFor(program.badge)}`}
                >
                  {program.badge}
                </span>
                <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-medium text-black sm:px-2.5 sm:py-1 sm:text-xs">
                  <Calendar className="size-3 shrink-0 sm:size-3.5" strokeWidth={2} aria-hidden />
                  {program.dDay}
                </span>
              </div>

              <h3 className="mb-1 line-clamp-2 text-xs font-bold leading-snug text-foreground sm:text-[15px]">
                {program.title}
              </h3>
              <p className="mb-2 line-clamp-1 text-[11px] text-[#6B7280] sm:text-sm">{program.organization}</p>

              <div className="flex items-center justify-between gap-2 border-t border-[#EEF1F4] pt-2">
                <span className="text-[11px] text-[#6B7280] sm:text-sm">지원 금액</span>
                <span className="min-w-0 text-right text-[11px] font-bold leading-tight text-foreground sm:text-sm">{program.amount}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
