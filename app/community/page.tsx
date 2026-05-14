'use client'

import { ChevronLeft, Menu } from 'lucide-react'
import Header from '@/components/header'
import CommunitySidebar from '@/components/community/community-sidebar'
import CommunityContent from '@/components/community/community-content'
import CommunityMembers from '@/components/community/community-members'

export default function CommunityPage() {
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
          <span className="min-w-0 truncate text-lg font-bold text-foreground">커뮤니티</span>
          <button type="button" aria-label="메뉴" className="ml-auto shrink-0">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="mt-3 min-h-screen bg-background lg:pt-6 pb-16 font-pretendard antialiased [&_*]:font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_input]:placeholder:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard [&_option]:font-pretendard [&_label]:font-pretendard [&_a]:font-pretendard">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            {/* Left Sidebar - 모바일 숨김 */}
            <div className="hidden lg:block">
              <CommunitySidebar />
            </div>

            {/* Main Content */}
            <CommunityContent />

            {/* Right Sidebar - 모바일 숨김 */}
            <div className="hidden xl:block">
              <CommunityMembers />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
