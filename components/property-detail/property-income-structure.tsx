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
    <div className="mb-7">
      <h3 className="text-lg font-bold text-foreground mb-1.5">층별 수익구조</h3>
      
      {/* Summary */}
      <p className="mb-3 text-sm text-muted-foreground">
        합계 : 보증금 8,000만원 · 월세 530만원 ·{' '}
        <span className="text-[#2567E7]">연 수익률 6.2%</span>
      </p>

      {/* 가로선만: 상단·하단 외곽선 + 행 구분, 세로선 없음 — PC만 너비 60% / 모바일은 가로 스크롤 */}
      <div className="max-w-full overflow-x-auto border-t border-b border-border [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] lg:w-[60%] lg:overflow-visible [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
        {/* 모바일: w-max로 열 간격 내용폭 기준(PC처럼 타이트) / PC: 기존 w-full + 60% 래퍼 */}
        <table className="w-max max-w-none border-collapse text-sm lg:min-w-0 lg:w-full">
          <thead>
            <tr className="border-b border-border bg-[#F8F8F8]">
              <th className="py-2 pr-[1.404rem] text-left text-xs font-medium text-muted-foreground lg:pr-3">
                층
              </th>
              <th className="px-[1.404rem] py-2 text-left text-xs font-medium text-muted-foreground lg:px-3">
                용도
              </th>
              <th className="px-[1.404rem] py-2 text-left text-xs font-medium text-muted-foreground lg:px-3">
                면적
              </th>
              <th className="px-[1.404rem] py-2 text-left text-xs font-medium text-muted-foreground lg:px-3">
                보증금
              </th>
              <th className="px-[1.404rem] py-2 text-left text-xs font-medium text-muted-foreground lg:px-3">
                월세
              </th>
              <th className="py-2 pl-[1.404rem] text-left text-xs font-medium text-muted-foreground lg:pl-3">
                계약기간
              </th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((row, index) => (
              <tr key={index} className="border-b border-border">
                <td className="py-2 pr-[1.404rem] text-xs text-foreground lg:pr-3">{row.floor}</td>
                <td className="px-[1.404rem] py-2 text-xs text-foreground lg:px-3">{row.usage}</td>
                <td className="px-[1.404rem] py-2 text-xs text-foreground lg:px-3">{row.area}</td>
                <td className="px-[1.404rem] py-2 text-foreground lg:px-3">{row.deposit}</td>
                <td className="px-[1.404rem] py-2 text-xs text-foreground lg:px-3">{row.rent}</td>
                <td className="py-2 pl-[1.404rem] text-xs text-foreground lg:pl-3">{row.period}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-2 pr-[1.404rem] font-bold text-foreground lg:pr-3">합계</td>
              <td className="px-[1.404rem] py-2 lg:px-3" />
              <td className="px-[1.404rem] py-2 lg:px-3" />
              <td className="px-[1.404rem] py-2 font-bold text-foreground lg:px-3">3,000만원</td>
              <td className="px-[1.404rem] py-2 font-bold text-[#2567E7] lg:px-3">170만원</td>
              <td className="py-2 pl-[1.404rem] font-bold text-foreground lg:pl-3">즉시입주</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
