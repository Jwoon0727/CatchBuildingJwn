'use client'

export default function PropertyDetails() {
  const leftDetails = [
    { label: '매물정보', value: '2610093065' },
    { label: '소재지', value: '경기 성남시 분당구 백현동' },
    { label: '주용도', value: '단독주택 (근생 + 주거)' },
    { label: '매매가', value: '13.5억' },
    { label: '평단가', value: '35,140만' },
    { label: '실투자금', value: '12.7억' },
    { label: '대지면적', value: '12.7㎡ (3.8평)' },
    { label: '건축면적', value: '281㎡ (85평)' },
    { label: '연면적', value: '140.25㎡ (42.4평)' },
    { label: '총수', value: '지하 0 / 지상 0' },
    { label: '사용승인일', value: '지하 1 / 지상 5' },
  ]

  const rightDetails = [
    { label: '평단다 대지', value: '35,140만' },
    { label: '평단가 연면적', value: '35,140만' },
    { label: '방향', value: '남향 (주출입구)' },
    { label: '주차', value: '4대 (옥내자주식)' },
    { label: '엘리베이터', value: '없음' },
    { label: '건폐율', value: '49.91%' },
    { label: '용적률', value: '118.04%' },
    { label: '지적', value: '제1종일반주거지역' },
    { label: '입주가능일', value: '즉시입주' },
    { label: '위반건축물', value: '해당없음' },
  ]

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-foreground mb-4">매물 상세 정보</h3>
      
      {/* Table Header */}
      <div className="grid grid-cols-2 bg-secondary/50 border-b border-border">
        <div className="py-3 px-4 text-sm text-muted-foreground">매물 세부 정보</div>
        <div className="py-3 px-4 text-sm text-muted-foreground">추가 확인 정보</div>
      </div>

      {/* Table Body - Side by side rows */}
      <div className="border-b border-border">
        {leftDetails.map((leftItem, index) => {
          const rightItem = rightDetails[index]
          return (
            <div key={index} className="grid grid-cols-2 border-b border-border last:border-b-0">
              {/* Left Column Row */}
              <div className="grid grid-cols-[120px_1fr] py-3 border-r border-border">
                <span className="px-4 text-sm text-muted-foreground">{leftItem.label}</span>
                <span className="px-4 text-sm text-foreground">{leftItem.value}</span>
              </div>
              {/* Right Column Row */}
              {rightItem ? (
                <div className="grid grid-cols-[120px_1fr] py-3">
                  <span className="px-4 text-sm text-muted-foreground">{rightItem.label}</span>
                  <span className="px-4 text-sm text-foreground">{rightItem.value}</span>
                </div>
              ) : (
                <div className="py-3" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
