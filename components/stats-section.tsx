'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ChevronRight } from 'lucide-react'

const stats = [
  {
    title: "강남구 아파트",
    data: [
      { name: "2.75억", trend: "+2.5%" },
      { name: "5.30억", trend: "-1.2%" },
      { name: "14.85억", trend: "+0.8%" },
      { name: "3.08억", trend: "+3.1%" },
    ]
  },
  {
    title: "서초구 주택",
    data: [
      { name: "2.45억", trend: "+1.5%" },
      { name: "4.80억", trend: "-0.5%" },
      { name: "12.50억", trend: "+2.2%" },
      { name: "2.95억", trend: "+1.8%" },
    ]
  }
]

export default function StatsSection() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">인기 지수</h2>
          <a href="#" className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium">
            더보기 <ChevronRight size={16} />
          </a>
        </div>
        
        <Tabs defaultValue="tab0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            {stats.map((stat, i) => (
              <TabsTrigger key={i} value={`tab${i}`}>
                {stat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {stats.map((stat, i) => (
            <TabsContent key={i} value={`tab${i}`} className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stat.data.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border text-center hover:shadow-md transition-shadow bg-card">
                    <div className="text-xl font-bold text-primary mb-2">{item.name}</div>
                    <div className="text-sm text-green-600 font-medium">{item.trend}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
