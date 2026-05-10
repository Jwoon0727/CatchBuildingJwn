'use client'

import { Instagram, Youtube, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">부동산 뉴스레터 구독</h3>
              <p className="text-sm text-muted-foreground">최신 매물 정보와 투자 인사이트를 받아보세요.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="이메일 주소 입력" 
                className="flex-1 md:w-64 px-4 py-2 text-sm border border-border rounded-lg bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 h-auto flex items-center gap-2">
                <Send size={14} />
                구독하기
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Company Name */}
          <h2 className="text-xl font-bold text-foreground mb-4">에이치에스씨앤디</h2>
          
          {/* Social Icons */}
          <div className="flex gap-3 mb-6">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Youtube size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={18} />
            </a>
          </div>
          
          {/* Company Details */}
          <div className="space-y-1 text-sm text-muted-foreground mb-6">
            <p>대표 | 이한솔</p>
            <p>사업장 | 경기도 성남시 분당구 판교역로 136, 101동 13층 1305호</p>
            <p>사업자등록번호 | 739-20-01051</p>
            <p>통신판매업신고번호 | 제 2025-성남분당A-0622호</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-6 border-t border-border">
            <a href="#" className="hover:text-foreground transition-colors">이용약관</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">개인정보처리방침</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">환불정책</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
