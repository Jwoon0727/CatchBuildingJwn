'use client'

import { ChevronRight, Home, Phone } from 'lucide-react'

const COMMENT_TEXT =
  '백현동 카페거리 핵심 상권 내 단독주택 3가구로 구성된 임차형 수익 물건입니다. 1층 상업시설과 2~5층 주거 임차로 안정적인 혼합 수익 구조를 갖추고 있으며, 인근 판교 테크노밸리 업무지구와 분당선 이매역 역세권의 수요가 꾸준해 공실 리스크가 낮은 매물입니다. 신축급 리모델링 완료로 즉시 임대 가능 상태입니다.'

export default function PropertyAgentDetail() {
  return (
    <div className="mb-6 rounded-xl border border-border bg-white p-6 shadow-sm">
      {/* Agent Info */}
      <div className="mb-6 flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#EBF1FD] text-xl font-bold text-[#2563EB]"
            aria-hidden
          >
            이
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-base font-bold text-foreground">
              이진솔 공인중개사
            </h3>
            <p className="mb-2 text-sm text-muted-foreground">
              경기 성남시 분당구 · 영끌남 파트너
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="tel:010-4080-6005"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone size={16} strokeWidth={1.5} className="shrink-0 text-teal-500" />
                010-4080-6005
              </a>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Home size={16} strokeWidth={1.5} className="shrink-0 text-amber-500" />
                다른매물 14
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-full p-2 transition-colors hover:bg-secondary"
          aria-label="중개사 프로필 더보기"
        >
          <ChevronRight size={20} className="text-muted-foreground" strokeWidth={1.5} />
        </button>
      </div>

      {/* Broker comment — 제목·본문 모두 연회색 박스 안 */}
      <div className="rounded-xl bg-[#F8F8F8] px-4 py-5 sm:px-5">
        <h4 className="mb-3 text-base font-bold text-foreground">중계사 코멘트</h4>
        <p className="text-sm leading-relaxed text-muted-foreground">{COMMENT_TEXT}</p>
      </div>
    </div>
  )
}
