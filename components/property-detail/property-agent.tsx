'use client'

import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PropertyAgent() {
  return (
    <div className="bg-white rounded-xl border border-border p-5 sticky top-36 h-fit">
      {/* Property Summary */}
      <div className="mb-5 pb-5 border-b border-border">
        <h3 className="font-bold text-foreground mb-2 leading-snug">
          분당 백현동 까페거리, 단독주택 3가구, 임차형 수익 물건
        </h3>
        <p className="text-sm text-muted-foreground">서울 강남구 역삼동</p>
      </div>

      {/* Agent Info */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center text-primary font-bold text-lg">
          이
        </div>
        <div>
          <p className="font-bold text-foreground">이진솔 공인중개사</p>
          <p className="text-sm text-muted-foreground">010-4080-6005</p>
        </div>
      </div>

      {/* Contact Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base">
        <Phone size={18} className="mr-2" />
        상담하기
      </Button>
    </div>
  )
}
