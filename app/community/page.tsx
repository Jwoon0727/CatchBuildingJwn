'use client'

import Header from '@/components/header'
import CommunitySidebar from '@/components/community/community-sidebar'
import CommunityContent from '@/components/community/community-content'
import CommunityMembers from '@/components/community/community-members'

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            {/* Left Sidebar */}
            <CommunitySidebar />

            {/* Main Content */}
            <CommunityContent />

            {/* Right Sidebar */}
            <div className="hidden xl:block">
              <CommunityMembers />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
