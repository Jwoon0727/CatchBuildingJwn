'use client'

import { use } from 'react'
import Header from '@/components/header'
import PropertyGallery from '@/components/property-detail/property-gallery'
import PropertyAgent from '@/components/property-detail/property-agent'
import PropertyAgentDetail from '@/components/property-detail/property-agent-detail'
import PropertyDetails from '@/components/property-detail/property-details'
import PropertyIncomeStructure from '@/components/property-detail/property-income-structure'
import PropertyBuildingInfo from '@/components/property-detail/property-building-info'
import PropertyDocuments from '@/components/property-detail/property-documents'
import PropertyDescription from '@/components/property-detail/property-description'
import PropertyReviews from '@/components/property-detail/property-reviews'
import PropertyRecommendations from '@/components/property-detail/property-recommendations'

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-4">
        {/* Breadcrumb */}
        <div className="mx-auto mb-4 max-w-[75rem] px-1">
          <nav className="text-md font-semibold text-black flex items-center gap-2">
            <span className="hover:text-foreground cursor-pointer">홈</span>
            <span className="text-black/50">&gt;</span>
            <span className="hover:text-foreground cursor-pointer">서울특별시</span>
            <span className="text-black/50">&gt;</span>
            <span className="hover:text-foreground cursor-pointer">강남구</span>
            <span className="text-black/50">&gt;</span>
            <span className="text-primary font-medium">역삼동</span>
          </nav>
        </div>

        <div className="mx-auto max-w-[75rem] px-1 pb-16">
          {/* Main Layout: Content + Sticky Sidebar */}
          <div className="flex gap-6">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
              {/* Gallery */}
              <PropertyGallery />

              {/* Agent Detail Section */}
              <PropertyAgentDetail />



              {/* Property Details Table */}
              <PropertyDetails />

              {/* Income Structure */}
              <PropertyIncomeStructure />

              {/* Building Info */}
              <PropertyBuildingInfo />

              {/* Documents */}
              <PropertyDocuments />

              {/* Description */}
              <PropertyDescription />

              {/* Reviews */}
              <PropertyReviews />

              {/* Similar Properties */}
              <PropertyRecommendations />
            </div>

            {/* Right Sidebar - Sticky Agent Card */}
            <div className="hidden w-62 shrink-0 lg:block">
              <PropertyAgent />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
