'use client'

export default function PropertyIncomeStructure() {
  const incomeData = [
    { floor: '지하 1층', usage: '카페 (상가)', area: '약 32평', deposit: '3,000만원', rent: '170만원', period: '24.06 ~ 26.06' },
    { floor: '1층', usage: '카페 (상가)', area: '약 32평', deposit: '3,000만원', rent: '170만원', period: '24.06 ~ 26.06' },
    { floor: '2층', usage: '사무실', area: '약 32평', deposit: '3,000만원', rent: '170만원', period: '24.06 ~ 26.06' },
    { floor: '3층', usage: '주거', area: '약 32평', deposit: '3,000만원', rent: '170만원', period: '24.06 ~ 26.06' },
    { floor: '4층', usage: '주거', area: '약 32평', deposit: '3,000만원', rent: '170만원', period: '24.06 ~ 26.06' },
    { floor: '5층', usage: '다락/루프탑', area: '약 32평', deposit: '3,000만원', rent: '170만원', period: '24.06 ~ 26.06' },
  ]

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-foreground mb-2">층별 수익구조</h3>
      
      {/* Summary */}
      <p className="text-sm text-muted-foreground mb-4">
        합계 : 보증금 8,000만원 · 월세 530만원 · <span className="text-primary">연 수익율 6.2%</span>
      </p>

      {/* Compact Table */}
      <div className="max-w-xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-xs font-medium text-muted-foreground">층</th>
              <th className="text-left py-2 px-4 text-xs font-medium text-muted-foreground">용도</th>
              <th className="text-left py-2 px-4 text-xs font-medium text-muted-foreground">면적</th>
              <th className="text-left py-2 px-4 text-xs font-medium text-muted-foreground">보증금</th>
              <th className="text-left py-2 px-4 text-xs font-medium text-muted-foreground">월세</th>
              <th className="text-left py-2 pl-4 text-xs font-medium text-muted-foreground">계약기간</th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((row, index) => (
              <tr key={index} className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">{row.floor}</td>
                <td className="py-2.5 px-4 text-foreground">{row.usage}</td>
                <td className="py-2.5 px-4 text-foreground">{row.area}</td>
                <td className="py-2.5 px-4 text-foreground">{row.deposit}</td>
                <td className="py-2.5 px-4 text-foreground">{row.rent}</td>
                <td className="py-2.5 pl-4 text-foreground">{row.period}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-border">
              <td className="py-2.5 pr-4 font-bold text-foreground">합계</td>
              <td className="py-2.5 px-4"></td>
              <td className="py-2.5 px-4"></td>
              <td className="py-2.5 px-4 font-bold text-foreground">3,000만원</td>
              <td className="py-2.5 px-4 font-bold text-primary">170만원</td>
              <td className="py-2.5 pl-4 text-foreground">즉시입주</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
