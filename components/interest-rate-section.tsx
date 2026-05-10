'use client'

import { ChevronRight } from 'lucide-react'

const filterTabs = [
  { id: 'base', label: '기준금리' },
  { id: 'credit', label: '신용대출' },
  { id: 'mortgage', label: '주택담보' },
  { id: 'jeonse', label: '전세대출' },
  { id: 'jeonse2', label: '전세대출' },
]

const rateCards = [
  {
    title: '한국은행 기준금리',
    rate: '2.75',
    change: '0.00',
    trend: 'neutral',
    strokeColor: '#3b82f6',
    chartPath: 'M0,25 L40,25 L60,30 L100,30 L140,35 L180,35 L200,35',
    history: [
      { date: '2026.02.26(2월)', current: '2.75%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '2.75%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '2.75%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '2.75%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '2.75%', previous: '3.00%' },
    ]
  },
  {
    title: '개인 신용대출 금리',
    rate: '5.10',
    change: '0.00',
    trend: 'down',
    strokeColor: '#22c55e',
    chartPath: 'M0,15 L40,18 L80,20 L120,25 L160,28 L200,30',
    history: [
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.50%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
    ]
  },
  {
    title: '마이너스 신용대출 금리',
    rate: '5.45',
    change: '0.15',
    trend: 'down',
    strokeColor: '#ef4444',
    chartPath: 'M0,30 L30,25 L60,20 L90,22 L120,28 L150,25 L180,30 L200,28',
    history: [
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.50%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
    ]
  },
  {
    title: '전세자금 대출 금리',
    rate: '3.95',
    change: '0.15',
    trend: 'down',
    strokeColor: '#f97316',
    chartPath: 'M0,20 L40,18 L80,22 L120,20 L160,25 L200,22',
    history: [
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.50%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
      { date: '2026.02.26(2월)', current: '5.10%', previous: '3.00%' },
    ]
  },
]

export default function InterestRateSection() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">금리 동향</h2>
          <a href="#" className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium">
            더보기 <ChevronRight size={16} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto">
          {filterTabs.map((tab, i) => (
            <button
              key={tab.id + i}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                i === 0
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rateCards.map((card, idx) => (
            <div key={idx} className="border border-border rounded-lg p-5 bg-card">
              {/* Card Header */}
              <p className="text-sm text-muted-foreground mb-2">{card.title}</p>
              
              {/* Rate Display */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-foreground">{card.rate}</span>
                <span className="text-sm text-muted-foreground">%</span>
                <div className="flex items-center gap-1 ml-2">
                  {card.trend === 'down' ? (
                    <span className="text-green-500 text-sm">↘</span>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                  <span className={`text-sm ${card.trend === 'down' ? 'text-green-500' : 'text-muted-foreground'}`}>
                    {card.change}
                  </span>
                </div>
              </div>

              {/* Line Chart */}
              <div className="mb-2">
                <svg viewBox="0 0 200 50" className="w-full h-16">
                  <path
                    d={card.chartPath}
                    fill="none"
                    stroke={card.strokeColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              {/* X-axis Labels */}
              <div className="flex justify-between text-xs text-muted-foreground mb-6 px-1">
                <span>10<br/>월</span>
                <span>12<br/>월</span>
                <span>2<br/>월</span>
              </div>

              {/* History Table */}
              <div className="pt-4">
                <p className="text-sm font-medium text-foreground mb-3">최근 5회 변동</p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-muted-foreground">
                      <th className="text-left font-normal pb-2">발표일</th>
                      <th className="text-center font-normal pb-2">발표</th>
                      <th className="text-right font-normal pb-2">이전</th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.history.map((item, i) => (
                      <tr key={i} className="border-t border-border/50">
                        <td className="text-foreground py-2 font-medium">{item.date}</td>
                        <td className={`text-center py-2 font-medium ${
                          item.current.includes('5.50') ? 'text-red-500' : 
                          idx === 0 ? 'text-blue-500' : 
                          idx === 1 ? 'text-green-500' : 
                          idx === 2 ? 'text-red-500' : 'text-orange-500'
                        }`}>{item.current}</td>
                        <td className="text-right text-muted-foreground py-2">{item.previous}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
