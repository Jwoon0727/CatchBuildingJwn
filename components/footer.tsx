'use client'

import { Instagram, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_input]:placeholder:font-pretendard">
      {/* 뉴스레터 — 구분선은 컨테이너 너비에만 표시 */}
      <div className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className=" border-b border-[#EEF1F4] py-8">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">부동산 뉴스레터 구독</h3>
                <p className="text-sm text-[#6B7280]">
                  최신 매물 정보와 투자 인사이트를 받아보세요.
                </p>
              </div>
              <div className="flex w-full gap-2 md:w-auto md:max-w-xl md:flex-1 md:justify-end">
                <input
                  type="email"
                  placeholder="이메일 주소 입력"
                  className="min-h-11 min-w-0 flex-1 max-w-[270px] rounded-lg border border-[#E5E8EB] bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 md:max-w-[280px] md:w-72 md:flex-none"
                />
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#2563EB] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1d4ed8] md:gap-2 md:px-5 md:py-2.5 md:text-sm"
                >
                  <Send className="size-4 md:size-4" aria-hidden strokeWidth={2} />
                  구독하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 회사 정보 */}
      <div className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="mb-4 text-2xl font-bold text-[#636363]">에이치에스씨앤디</h2>

          <div className="mb-8 flex gap-3">
            <a
              href="#"
              className="group flex size-11 items-center justify-center rounded-full bg-[#F2F2F2] text-[#636363] transition-colors hover:bg-[#E5E8EC] hover:text-[#424242]"
              aria-label="YouTube"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-[20px] shrink-0"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                />
                <path
                  className="fill-[#F2F2F2] transition-[fill] duration-200 group-hover:fill-[#E5E8EC]"
                  d="m10 15 5-3-5-3z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex size-11 items-center justify-center rounded-full bg-[#F2F2F2] text-[#636363] transition-colors hover:bg-[#E5E8EC] hover:text-[#424242]"
              aria-label="Instagram"
            >
              <Instagram className="size-[20px]" strokeWidth={2} />
            </a>
          </div>

          <div className="space-y-1.5 text-[13px] leading-relaxed text-[#636363]">
            <p>대표 | 이한솔</p>
            <p>사업장 | 경기도 성남시 분당구 판교역로 136, 101동 13층 1305호</p>
            <p>사업자등록번호 | 739-20-01051</p>
            <p>통신판매업신고번호 | 제 2025-성남분당A-0622호</p>
          </div>

          <nav
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-b border-[#EEF1F4] py-8 text-sm"
            aria-label="약관 및 정책"
          >
            <a href="#" className="text-[#636363] transition-colors hover:text-[#424242]">
              이용약관
            </a>
            <span className="text-[#636363]/50" aria-hidden>
              |
            </span>
            <a
              href="#"
              className="font-semibold text-[#636363] transition-colors hover:text-[#424242]"
            >
              개인정보처리방침
            </a>
            <span className="text-[#636363]/50" aria-hidden>
              |
            </span>
            <a href="#" className="text-[#636363] transition-colors hover:text-[#424242]">
              환불정책
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
