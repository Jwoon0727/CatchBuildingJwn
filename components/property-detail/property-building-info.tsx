'use client'

import { useState } from 'react'
import { ChevronUp, FileText, Video } from 'lucide-react'

const floorInfo = [
  {
    floor: '지하 1층',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=150&fit=crop',
    tags: ['기계실', '창고', '보일러'],
    description: '층고 3.8m 개방형 카페 공간. FC 브랜드 입차 완료. 독립 출입구 및 야외 테라스 보유.',
    deposit: '3,000만원',
    rent: '170만원',
  },
  {
    floor: '1층',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=150&fit=crop',
    tags: ['테라스', '임차완료'],
    description: '대로변 접면 오피스. 스타트업 임차 운영 중. 유리 파사드 시공으로 가시성 탁월.',
    deposit: '3,000만원',
    rent: '170만원',
  },
  {
    floor: '2층 ~ 3층',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200&h=150&fit=crop',
    tags: ['남향'],
    description: '전용 약 126m² 주거. 전체 리모델링 완료(2023). 주방·욕실 신규 교체. 남향 채광 우수.',
    deposit: '3,000만원',
    rent: '170만원',
  },
  {
    floor: '4층 ~ 5층 · 루프탑',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&h=150&fit=crop',
    tags: ['주거', '루프탑'],
    description: '4층 주거 + 5층 복층 루프탑. 분당 시내 전망. 루프탑 임대 또는 직접 운영 협의 가능.',
    deposit: '3,000만원',
    rent: '170만원',
  },
]

export default function PropertyBuildingInfo() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="mt-15 mb-5 font-pretendard [&_button]:font-pretendard">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">건물 층별 안내</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronUp size={20} className={`transition-transform ${isExpanded ? '' : 'rotate-180'}`} />
        </button>
      </div>

      {isExpanded && (
        <>
          {/* Floor List */}
          <div className="space-y-6">
            {floorInfo.map((floor, index) => (
              <div key={index} className="border-b border-border pb-6">
                {/* Floor Header */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-foreground md:text-base">{floor.floor}</h4>
                  <p className="text-sm font-semibold md:text-base">
                    보증금 <span className="text-[#2567E7] font-bold">{floor.deposit}</span>
                    <span className="text-muted-foreground mx-1">|</span>
                    월세 <span className="text-[#2567E7] font-bold">{floor.rent}</span>
                  </p>
                </div>

                {/* Floor Content */}
                <div className="flex gap-4">
                  {/* Floor Image */}
                  <div className="w-38 h-27 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={floor.image}
                      alt={floor.floor}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floor Info */}
                  <div className="flex-1">
                    {/* Tags */}
                    <div className="flex gap-2 mb-2">
                      {floor.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-[#EBF1FD] px-2.5 py-1  text-foreground text-xs rounded-[4px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Description */}
                    <p className="text-sm text-foreground leading-relaxed md:text-base">{floor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          
        </>
      )}
    </div>
  )
}
