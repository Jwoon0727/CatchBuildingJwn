'use client'

import { Headset } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PropertyAgent() {
  return (
    <div className="sticky top-36 h-fit rounded-xl border border-border bg-white p-4 font-pretendard [&_button]:font-pretendard">
      {/* Property Summary */}
      <div className="mb-5 border-b border-border pb-5">
        <h3 className="mb-2 font-bold leading-snug text-foreground">
          분당 백현동 까페거리, 단독주택 3가구, 임차형 수익 물건
        </h3>
        <p className="text-sm text-muted-foreground">서울 강남구 역삼동</p>
      </div>

      {/* Agent Info */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EBF1FD] text-lg font-bold text-[#2563EB]"
          aria-hidden
        >
          이
        </div>
        <div className="flex min-w-0 flex-row flex-wrap items-center gap-x-2 gap-y-0.5">
          <p className="mb-1 font-bold text-foreground whitespace-nowrap sm:whitespace-normal">
            이진솔 공인중개사
          </p>
          <p className="text-sm text-muted-foreground tabular-nums">010-4080-6005</p>
        </div>
      </div>

      {/* Contact Button */}
      <Button
        type="button"
        className="h-13 w-full rounded-xl bg-[#2567E7] text-base font-bold text-white hover:bg-[#2567E7]/90"
      >
        <Headset size={20} strokeWidth={2} className="shrink-0" aria-hidden />
        상담하기
      </Button>
    </div>
  )
}
