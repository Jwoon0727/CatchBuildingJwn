'use client'

export default function PropertyDescription() {
  return (
    <div className="mb-6 font-pretendard [&_button]:font-pretendard">
      <h3 className="mb-4 text-lg font-bold text-foreground">매물 상세 설명</h3>

      <div className="rounded-lg border border-border bg-white p-4">
        {/* Summary */}
        <div className="mb-6">
          <h4 className="mb-2 font-bold text-[#333333]">매물 개요</h4>
          <p className="text-sm leading-relaxed text-[#333333]">
          분당 백현동 까페거리 핵심 입지, 단독주택 3가구 구성 수익형 건물입니다. 상업·사무·주거 혼합 수익 구조로 공실 리스크가 최소화되어 있으며, 전층 리모델링 완료 후 임차 계약 승계 조건으로 매매됩니다.
          </p>
        </div>

        {/* Checkpoints */}
        <div className="mb-6">
          <h4 className="mb-2 font-bold text-[#333333]">체크 포인트</h4>
          <ul className="space-y-1 text-sm text-[#333333]">
            <li className="flex gap-1.5">
              <span className="shrink-0 select-none" aria-hidden>
                •
              </span>
              <span className="min-w-0">백현동 까페거리 도보 3분 · 분당선 이매역 도보 8분 역세권</span>
            </li>
            <li className="flex gap-1.5">
              <span className="shrink-0 select-none" aria-hidden>
                •
              </span>
              <span className="min-w-0">전층 리모델링 완료(2023) — 즉시 임대 가능, 추가 공사비 無</span>
            </li>
            <li className="flex gap-1.5">
              <span className="shrink-0 select-none" aria-hidden>
                •
              </span>
              <span className="min-w-0">현재 전층 임차 완료, 잔금 후 즉시 수익 발생</span>
            </li>
            <li className="flex gap-1.5">
              <span className="shrink-0 select-none" aria-hidden>
                •
              </span>
              <span className="min-w-0">판교 테크노밸리 배후 수요, 안정적 임차 유지</span>
            </li>
            <li className="flex gap-1.5">
              <span className="shrink-0 select-none" aria-hidden>
                •
              </span>
              <span className="min-w-0">루프탑 추가 활용 시 수익률 최대 7.1% 상향 가능</span>
            </li>
          </ul>
        </div>

        {/* Agent Comment */}
        <div>
          <h4 className="mb-2 font-bold text-[#333333]">중개사 코멘트</h4>
          <p className="text-sm leading-relaxed text-[#333333]">
          백현동에서 까페거리와 접한 이런 매물은 시장에 거의 나오지 않습니다. 잔금 후 즉시 수익 발생이 가능하고, 7~8년 전 분양가 대비 현재 시세가 약 1.8배 상승한 지역으로 향후 가치 상승 여력도 충분합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
