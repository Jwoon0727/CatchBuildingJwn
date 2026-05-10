'use client'

import { ChevronRight, Calendar } from 'lucide-react'

const supportPrograms = [
  {
    id: 1,
    badge: '창업지원',
    badgeColor: 'bg-gray-700',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 2,
    badge: '주거지원',
    badgeColor: 'bg-teal-500',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 3,
    badge: '고용지원',
    badgeColor: 'bg-gray-700',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 4,
    badge: '창업지원',
    badgeColor: 'bg-teal-500',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 5,
    badge: '금융지원',
    badgeColor: 'bg-gray-700',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
  {
    id: 6,
    badge: '주거지원',
    badgeColor: 'bg-teal-500',
    title: '2026 소상공인 디지털 전환 지원사업',
    organization: '중소벤처기업부',
    amount: '최대 3천만원',
    dDay: 'D-5',
  },
]

export default function GovernmentSupportSection() {
  return (
    <section className="py-12 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">정부지원금 최신 공고</h2>
          <a href="#" className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium">
            더보기 <ChevronRight size={16} />
          </a>
        </div>

        {/* Support Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {supportPrograms.map((program) => (
            <div key={program.id} className="p-6 border border-border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-card">
              <div className="flex items-center justify-between mb-4">
                <span className={`${program.badgeColor} text-white px-3 py-1 rounded text-xs font-bold`}>
                  {program.badge}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {program.dDay}
                </span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{program.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{program.organization}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">지원 금액</span>
                <span className="font-bold text-foreground">{program.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
