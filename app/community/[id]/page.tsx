'use client'

import { ChevronLeft, Menu } from 'lucide-react'
import Header from '@/components/header'
import CommunityArticle from '@/components/community/community-article'
import CommunityArticleSidebar from '@/components/community/community-article-sidebar'

export default function CommunityArticlePage() {
  return (
    <>
      {/* 데스크톱 헤더 */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* 모바일 헤더 */}
      <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-border">
        <div className="flex items-center justify-between px-4 py-3.5">
          <button type="button" aria-label="뒤로가기" onClick={() => window.history.back()}>
            <ChevronLeft size={22} strokeWidth={2} />
          </button>
          <span className="text-base font-bold text-foreground">커뮤니티</span>
          <button type="button" aria-label="메뉴">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="min-h-screen bg-[#F8F8F8] lg:pt-6 pb-16">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="flex gap-8">
            {/* Main Content */}
            <CommunityArticle />

            {/* Right Sidebar */}
            <div className="w-56 flex-shrink-0 hidden lg:block">
              <CommunityArticleSidebar />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
