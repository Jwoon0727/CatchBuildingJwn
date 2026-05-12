'use client'

//매물 상세정보 섹션 컴포넌트


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
    { label: '층수', value: '지하 0 / 지상 0' },
    { label: '사용승인일', value: '지하 1 / 지상 5' },
  ]

  const rightDetails = [
    { label: '평단가 대지', value: '35,140만' },
    { label: '평단가 연면적', value: '35,140만' },
    { label: '방향', value: '남향 (주출입구)' },
    { label: '주차', value: '4대 (옥내자주식)' },
    { label: '엘리베이터', value: '없음' },
    { label: '건폐율', value: '49.91%' },
    { label: '용적률', value: '118.04%' },
    { label: '지역', value: '제1종일반주거지역' },
    { label: '입주가능일', value: '즉시입주' },
    { label: '위반건축물', value: '해당없음' },
  ]

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-bold text-foreground">매물 상세 정보</h3>

      <div className="overflow-hidden rounded-lg border-y border-border">
        {/* 헤더: 열 사이 세로선 없음 */}
        <div className="grid grid-cols-2 gap-x-8 border-b border-border bg-[#F8F8F8] px-4 py-3 sm:gap-x-12 sm:px-5">
          <div className="text-sm font-medium text-muted-foreground">매물 세부 정보</div>
          <div className="text-sm font-medium text-muted-foreground">추가 확인 정보</div>
        </div>

        <div className="divide-y divide-border">
          {leftDetails.map((leftItem, index) => {
            const rightItem = rightDetails[index]
            return (
              <div
                key={index}
                className="grid grid-cols-2 gap-x-8 px-4 py-3 sm:gap-x-12 sm:px-5"
              >
                <div className="grid min-w-0 grid-cols-[minmax(5.5rem,7rem)_1fr] items-start gap-x-2 gap-y-1">
                  <span className="text-sm text-muted-foreground">{leftItem.label}</span>
                  <span className="text-sm font-lignt text-foreground">{leftItem.value}</span>
                </div>
                {rightItem ? (
                  <div className="grid min-w-0 grid-cols-[minmax(5.5rem,7rem)_1fr] items-start gap-x-2 gap-y-1">
                    <span className="text-sm text-muted-foreground">{rightItem.label}</span>
                    <span className="text-sm font-light text-foreground">{rightItem.value}</span>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
