'use client'

import Header from '@/components/header'
import CommunityArticle from '@/components/community/community-article'
import CommunityArticleSidebar from '@/components/community/community-article-sidebar'

export default function CommunityArticlePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F8F8] pt-6 pb-16">
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
