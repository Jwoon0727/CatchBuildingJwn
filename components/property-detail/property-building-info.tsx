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
    <div className="mb-8">
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
              <div key={index} className="border-b border-border pb-6 last:border-b-0">
                {/* Floor Header */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-foreground">{floor.floor}</h4>
                  <p className="text-sm">
                    보증금 <span className="text-primary font-bold">{floor.deposit}</span>
                    <span className="text-muted-foreground mx-1">|</span>
                    월세 <span className="text-primary font-bold">{floor.rent}</span>
                  </p>
                </div>

                {/* Floor Content */}
                <div className="flex gap-4">
                  {/* Floor Image */}
                  <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
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
                          className="px-3 py-1 border border-border text-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">{floor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText size={24} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">전체 평면도 보기</p>
                <p className="text-xs text-muted-foreground">PDF · 8페이지 · 2.1MB</p>
              </div>
              <span className="ml-auto text-muted-foreground">&gt;</span>
            </button>

            <button className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Video size={24} className="text-orange-500" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">매물 영상 투어</p>
                <p className="text-xs text-muted-foreground">8분 21초</p>
              </div>
              <span className="ml-auto text-muted-foreground">&gt;</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
