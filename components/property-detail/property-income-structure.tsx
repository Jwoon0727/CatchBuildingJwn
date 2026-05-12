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
      <p className="mb-4 text-sm text-muted-foreground">
        합계 : 보증금 8,000만원 · 월세 530만원 ·{' '}
        <span className="text-[#2567E7]">연 수익률 6.2%</span>
      </p>

      {/* 가로선만: 상단·하단 외곽선 + 행 구분, 세로선 없음 — 너비 기존 대비 40% 축소(60%) */}
      <div className="w-[60%] max-w-full border-t border-b border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-[#F8F8F8]">
              <th className="py-2.5 pr-4 text-left text-xs font-medium text-muted-foreground">
                층
              </th>
              <th className="px-3 py-2.5 text-left text-xs font-medium text-muted-foreground sm:px-4">
                용도
              </th>
              <th className="px-3 py-2.5 text-left text-xs font-medium text-muted-foreground sm:px-4">
                면적
              </th>
              <th className="px-3 py-2.5 text-left text-xs font-medium text-muted-foreground sm:px-4">
                보증금
              </th>
              <th className="px-3 py-2.5 text-left text-xs font-medium text-muted-foreground sm:px-4">
                월세
              </th>
              <th className="py-2.5 pl-3 text-left text-xs font-medium text-muted-foreground sm:pl-4">
                계약기간
              </th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((row, index) => (
              <tr key={index} className="border-b border-border">
                <td className="py-2.5 pr-4 text-xs text-foreground">{row.floor}</td>
                <td className="px-3 py-2.5 text-xs text-foreground sm:px-4">{row.usage}</td>
                <td className="px-3 py-2.5 text-xs text-foreground sm:px-4">{row.area}</td>
                <td className="px-3 py-2.5 text-foreground sm:px-4">{row.deposit}</td>
                <td className="px-3 py-2.5 text-xs text-foreground sm:px-4">{row.rent}</td>
                <td className="py-2.5 pl-3 text-xs text-foreground sm:pl-4">{row.period}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-2.5 pr-4 font-bold text-foreground">합계</td>
              <td className="px-3 py-2.5 sm:px-4" />
              <td className="px-3 py-2.5 sm:px-4" />
              <td className="px-3 py-2.5 font-bold text-foreground sm:px-4">3,000만원</td>
              <td className="px-3 py-2.5 font-bold text-[#2567E7] sm:px-4">170만원</td>
              <td className="py-2.5 pl-3 font-bold text-foreground sm:pl-4">즉시입주</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
