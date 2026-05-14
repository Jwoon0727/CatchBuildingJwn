'use client'

import { useCallback } from 'react'
import { ChevronLeft, Menu } from 'lucide-react'
import Header from '@/components/header'
import RegistrationIntro from '@/components/registration/registration-intro'
import RegistrationExtraSection from '@/components/registration/registration-extra-section'
import RegistrationAddressSection from '@/components/registration/registration-address-section'

import { PropertyDetailSection } from '@/components/registration/registration-detail'

export default function RegistrationPage() {
  const handleSaveDraft = useCallback(() => {
    // TODO: 임시 저장 API
  }, [])

  const handleSubmit = useCallback(() => {
    // TODO: 매물 등록 API
  }, [])

  return (
    <div className="min-h-dvh bg-[#EBF1FD] font-pretendard antialiased [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard">
      

      <div className="sticky top-0 z-50 border-b border-border bg-white lg:hidden">
        <div className="flex items-center gap-2 px-4 py-3.5">
          <button type="button" aria-label="뒤로가기" onClick={() => window.history.back()}>
            <ChevronLeft className="size-7 text-foreground" strokeWidth={2} />
          </button>
          <span className="min-w-0 truncate text-lg font-bold text-foreground">매물 등록</span>
          <button type="button" aria-label="메뉴" className="ml-auto shrink-0">
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 lg:pb-24 lg:pt-8">
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <RegistrationIntro />
          <RegistrationExtraSection />
          <RegistrationAddressSection />
          <PropertyDetailSection />
        
        </form>
      </main>
    </div>
  )
}
