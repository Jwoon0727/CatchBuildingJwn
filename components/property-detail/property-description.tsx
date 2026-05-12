'use client'

export default function PropertyDescription() {
  return (
    <div className="mb-6">
      <h3 className="mb-4 text-lg font-bold text-foreground">매물 상세 설명</h3>

      <div className="rounded-lg border border-border bg-white p-6">
        {/* Summary */}
        <div className="mb-6">
          <h4 className="mb-2 font-bold text-foreground">매물 개요</h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            분당 백현동 까페거리의 핵심 입지, 단독주택에 3가구 구성 수익형 건물입니다.
            상권 내부 주거 통합 입지 구조를 갖춰 피스크각 최소화하며 입지력, 현존 리모델링된 현황 및 입지적
            가치적 증계 요건으로 제외됩니다.닙
          </p>
        </div>

        {/* Checkpoints */}
        <div className="mb-6">
          <h4 className="mb-2 font-bold text-foreground">체크 포인트</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• 백현동 까페거리 도보 3분 - 분상권 지역에서 도남 상권 형성으로</li>
            <li>• 건축 리모델링 완료(2023) - 화산 일세적 기구, 주가 공시(대비)</li>
            <li>• 현재 만실 으이락 한복, 단골 후 최저 신입 링달</li>
            <li>• 단일 세스프에딩(3층 이내 주 요군 레시된 입지</li>
            <li>• 루프업 추가 임을 시 수익률 최대 31% 상승 가능</li>
          </ul>
        </div>

        {/* Agent Comment */}
        <div>
          <h4 className="mb-2 font-bold text-foreground">중개사 코멘트</h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            백현동에서 이 위치가지를 갖춘 이전 빌딩을 신규별 가격에 사입시 힙습니다.
            전층 순 수익 법인 빈번이 가동하고도 7-8년 만 설치가 타마(비 업지 시시이가 약 1,840 상승한 지역으로 향
            후 가지 상승 아직도 유망전 합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
