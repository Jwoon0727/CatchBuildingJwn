'use client'

import { useState } from 'react'
import Header from '@/components/header'
import MyPageSidebar from '@/components/my-page/my-page-sidebar'
import MyPageContent from '@/components/my-page/my-page-content'
import MyPageBookmarks from '@/components/my-page/my-page-bookmarks'
import MyPageSavedProperties from '@/components/my-page/my-page-saved-properties'
import MyPagePropertyAlerts from '@/components/my-page/my-page-property-alerts'
import MyPageSubscription from '@/components/my-page/my-page-subscription'
import MyPageCourses from '@/components/my-page/my-page-courses'
import MyPageSettings from '@/components/my-page/my-page-settings'

export default function MyPage() {
  const [activeMenu, setActiveMenu] = useState('basic')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Left Sidebar */}
            <MyPageSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            {/* Center Content - Changes based on menu selection */}
            {activeMenu === 'basic' && <MyPageContent />}
            {activeMenu === 'properties' && <MyPageSavedProperties />}
            {activeMenu === 'notifications' && <MyPagePropertyAlerts />}
            {activeMenu === 'subscription' && <MyPageSubscription />}
            {activeMenu === 'courses' && <MyPageCourses />}
            {activeMenu === 'settings' && <MyPageSettings />}

            {/* Right Sidebar - Show for basic info, notifications, subscription, courses, and settings */}
            {(activeMenu === 'basic' || activeMenu === 'notifications' || activeMenu === 'subscription' || activeMenu === 'courses' || activeMenu === 'settings') && (
              <div className="hidden lg:block">
                <MyPageBookmarks />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
