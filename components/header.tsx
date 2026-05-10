'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="w-full px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-12">
              <h1 className="text-xl font-bold text-primary">부동산마켓</h1>
              <nav className="hidden lg:flex gap-8 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground font-medium">부동산</a>
                <a href="#" className="text-muted-foreground hover:text-foreground font-medium">갭의</a>
                <a href="/community" className="text-muted-foreground hover:text-foreground font-medium">커뮤니티</a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a href="/login" className="text-muted-foreground hover:text-foreground text-sm">로그인</a>
              <a href="/login"><Button size="sm" className="bg-primary hover:bg-primary/90 text-white">무료 회원가입</Button></a>
              <button className="lg:hidden p-2">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <nav className="bg-background border-b border-border sticky top-16 z-40">
        <div className="w-full px-4 py-0">
          <div className="max-w-7xl mx-auto flex items-center gap-8 overflow-x-auto">
            <a href="/" className="py-3 px-1 text-sm font-medium text-primary border-b-2 border-primary whitespace-nowrap">전체</a>
            <a href="/search" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">매물 검색</a>
            <a href="#" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">추천매물</a>
            <a href="/community" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">커뮤니티</a>
            <a href="/map-search" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">지도검색</a>
            <a href="#" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">Q&A</a>
            <a href="#" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">카톡방</a>
            <a href="#" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">자금확보</a>
            <a href="#" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">현금흐름</a>
            <a href="#" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">분석요청</a>
            <a href="#" className="py-3 px-1 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">입장요청</a>
          </div>
        </div>
      </nav>
    </>
  )
}
