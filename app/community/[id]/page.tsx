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
    <div className="lg:hidden sticky top-0 z-50 bg-white  border-border">
        <div className="flex items-center gap-2 px-4 py-3.5">
          <button type="button" aria-label="뒤로가기" onClick={() => window.history.back()}>
            <ChevronLeft className="size-7 text-foreground" strokeWidth={2} />
          </button>
          <span className="min-w-0 truncate text-lg font-bold text-foreground">커뮤니티 상세</span>
          <button type="button" aria-label="메뉴" className="ml-auto shrink-0">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="min-h-screen bg-white pb-16 lg:bg-[#F8F8F8] lg:pt-6 font-pretendard antialiased [&_*]:font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_input]:placeholder:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard [&_option]:font-pretendard [&_label]:font-pretendard [&_a]:font-pretendard">
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
