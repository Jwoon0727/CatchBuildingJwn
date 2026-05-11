'use client'

import { ArrowRight, Calendar } from 'lucide-react'

const BADGE_STYLES: Record<string, string> = {
  창업지원: 'bg-[#E3F2FF] text-[#1565C0]',
  주거지원: 'bg-[#E8F5E9] text-[#2E7D32]',
  고용지원: 'bg-[#F3E5F5] text-[#7B1FA2]',
  금융지원: 'bg-[#FFF8E1] text-[#F57F17]',
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

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {supportPrograms.map(program => (
            <article
              key={program.id}
              className="cursor-pointer rounded-xl border border-[#E8EAED] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span
                  className={`rounded-md px-2.5 py-1 text-xs font-bold ${badgeClassFor(program.badge)}`}
                >
                  {program.badge}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#F3F4F6] px-2.5 py-1 text-xs font-medium text-black">
                  <Calendar className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
                  {program.dDay}
                </span>
              </div>

              <h3 className="mb-1 text-[15px] font-bold leading-snug text-foreground">
                {program.title}
              </h3>
              <p className="mb-2 text-sm text-[#6B7280]">{program.organization}</p>

              <div className="flex items-center justify-between border-t border-[#EEF1F4] pt-2">
                <span className="text-sm text-[#6B7280]">지원 금액</span>
                <span className="text-sm font-bold text-foreground">{program.amount}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
