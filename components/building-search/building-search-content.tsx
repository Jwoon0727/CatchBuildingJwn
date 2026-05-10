'use client'

import { useState } from 'react'
import { ChevronRight, X, Bookmark, Map } from 'lucide-react'

interface BuildingSearchContentProps {
  activeMenu: string
}

const buildingDetails = [
  { label: '법정동명', value: '부산광역시 동래구 사직동' },
  { label: '지번', value: '153-29' },
  { label: '지번 주소', value: '부산광역시 동래구 사직동 153-29' },
  { label: '용도지역', value: '-' },
  { label: '건축면적', value: '86.96m²' },
  { label: '건축물 용도', value: '제2종근린생활시설' },
  { label: '건폐율', value: '59.64%' },
  { label: '용적률', value: '275.45%' },
  { label: '사용승인일', value: '1991. 01. 30' },
  { label: '위도', value: '35.1957456412222325' },
  { label: '경도', value: '129.0713254455565557877' },
  { label: 'm²당 단가', value: '4,420,000 / m²' },
  { label: '평당단가', value: '14,611,569 / 평' },
  { label: '평가일', value: '2026. 03. 27' },
  { label: '다음 평가일', value: '2026. 04. 24' },
]

const historyFilters = [
  { id: 'all', label: '전체' },
  { id: 'building', label: '건물검색' },
  { id: 'url', label: 'URL조회' },
  { id: 'blog', label: '블로그 분석' },
]

const historyItems = [
  { type: 'URL 조회', address: '부산광역시 동래구 사직동 153-29', url: 'https://blog.naver.com/danbi_15/12452365478', date: '2025. 01. 06', price: '8.7억' },
  { type: '블로그 분석', address: '부산광역시 동래구 사직동 153-29', url: 'https://blog.naver.com/danbi_15/12452365478', date: '2025. 01. 06', price: '8.7억' },
  { type: '건물검색', address: '부산광역시 동래구 사직동 153-29', url: 'https://blog.naver.com/danbi_15/12452365478', date: '2025. 01. 06', price: '8.7억' },
]

export default function BuildingSearchContent({ activeMenu }: BuildingSearchContentProps) {
  const [selectedOption, setSelectedOption] = useState('general')
  const [url, setUrl] = useState('https://Blog.naver.com/yooniverse701/2245553365')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [historyFilter, setHistoryFilter] = useState('all')

  if (activeMenu === 'url') {
    return (
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-foreground mb-2">URL 조회 + 밸류맵</h1>
          <p className="text-sm text-muted-foreground">
            웹페이지 URL을 입력하면 건물 정보 추출 + 건물 매칭 + 밸류맵 시세 조회까지 한번에 실행 됩니다.
          </p>
        </div>

        {/* Radio Options */}
        <div className="space-y-4 mb-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value="general"
              checked={selectedOption === 'general'}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-sm text-foreground">일반 웹 페이지</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value="single"
              checked={selectedOption === 'single'}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-sm text-foreground">S 부동산 단건</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value="list"
              checked={selectedOption === 'list'}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-sm text-foreground">S 부동산 최근 목록</span>
          </label>
        </div>

        {/* URL Input */}
        <div className="mb-8">
          <label className="block text-sm text-muted-foreground mb-2">웹 페이지 URL</label>
          <div className="flex gap-2">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://"
              className="flex-1 px-4 py-3 border-b border-border text-sm focus:outline-none focus:border-primary"
            />
            <button className="px-8 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              조회
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Result */}
        <div>
          <h2 className="text-sm font-medium text-foreground mb-4">건물 매칭 완료</h2>
          <div 
            onClick={() => setIsModalOpen(true)}
            className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-secondary/30 cursor-pointer transition-colors"
          >
            <div>
              <p className="font-medium text-foreground">부산광역시 동래구 사직동 153-29</p>
              <p className="text-sm text-muted-foreground mt-1">492.4m² · 145.m²</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </div>
        </div>

        {/* Building Info Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg w-full max-w-2xl my-8 shadow-xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-bold text-foreground">건물 정보</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4">
                {/* Address */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground">부산광역시 동래구 사직동 153-29</h3>
                    <p className="text-sm text-muted-foreground">492.4m² · 145.m²</p>
                  </div>
                  <Bookmark size={24} className="text-yellow-400 fill-yellow-400" />
                </div>

                {/* Map */}
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop" 
                      alt="Map" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                    <Map size={16} />
                    카카오지도에서 열기
                  </button>
                </div>

                {/* Property Info Cards */}
                <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">토지 지번</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">지번</span>
                      <span className="text-xl font-bold text-foreground">153-29 m²</span>
                    </div>
                  </div>
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">총 연면적</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">연면적</span>
                      <span className="text-xl font-bold text-foreground">494.4 m²</span>
                    </div>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">대지 면적</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">대지면적</span>
                      <span className="text-xl font-bold text-foreground">145.8 m²</span>
                    </div>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-foreground mb-4">시세 요약</h4>
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">감정평가 기준</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">총 시세</span>
                      <span className="text-xl font-bold text-foreground">8.7억</span>
                    </div>
                  </div>
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">토지 기준</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">총 시세</span>
                      <span className="text-xl font-bold text-foreground">6.4억</span>
                    </div>
                  </div>
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">건물 기준</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">총 시세</span>
                      <span className="text-xl font-bold text-foreground">6.4억</span>
                    </div>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">평가 완료</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">신뢰도</span>
                      <span className="text-xl font-bold text-foreground">76점</span>
                    </div>
                  </div>
                </div>

                {/* Detail Table */}
                <div className="border-t border-border">
                  {buildingDetails.map((item, index) => (
                    <div key={index} className="py-3 border-b border-border flex">
                      <span className="w-28 text-sm text-muted-foreground flex-shrink-0">{item.label}</span>
                      <span className="text-sm text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (activeMenu === 'building') {
    return (
      <div className="flex-1 min-w-0">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-foreground mb-2">건물 검색</h1>
          <p className="text-sm text-muted-foreground">
            지역명과 연면적을 기준으로 가장 가까운 건물을 찾고, 좌표와 주소 정보를 함께 확인합니다.
          </p>
        </div>

        {/* Search Form - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm text-foreground mb-2">
              지역명<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="동래구 사직동"
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">
              연면적(m²)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="494.4"
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">
              대지면적(m²)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="145.8"
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">
              사용승인일<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="1991. 01. 30"
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-8 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors">
            초기화
          </button>
          <button className="px-8 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            검색
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Results */}
        <div>
          <h2 className="text-sm font-medium text-foreground mb-4">
            매칭된 건물물 <span className="text-primary">2건</span>
          </h2>
          <div className="space-y-3">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-secondary/30 cursor-pointer transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">부산광역시 동래구 사직동 153-29</p>
                <p className="text-sm text-muted-foreground mt-1">492.4m² · 145.m²</p>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </div>
            <div 
              onClick={() => setIsModalOpen(true)}
              className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-secondary/30 cursor-pointer transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">부산광역시 동래구 사직동 153-29</p>
                <p className="text-sm text-muted-foreground mt-1">492.4m² · 145.m²</p>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Building Info Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg w-full max-w-2xl my-8 shadow-xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-bold text-foreground">건물 정보</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4">
                {/* Address */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground">부산광역시 동래구 사직동 153-29</h3>
                    <p className="text-sm text-muted-foreground">492.4m² · 145.m²</p>
                  </div>
                  <Bookmark size={24} className="text-yellow-400 fill-yellow-400" />
                </div>

                {/* Map */}
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop" 
                      alt="Map" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                    <Map size={16} />
                    카카오지도에서 열기
                  </button>
                </div>

                {/* Property Info Cards */}
                <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">토지 지번</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">지번</span>
                      <span className="text-xl font-bold text-foreground">153-29 m²</span>
                    </div>
                  </div>
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">총 연면적</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">연면적</span>
                      <span className="text-xl font-bold text-foreground">494.4 m²</span>
                    </div>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">대지 면적</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">대지면적</span>
                      <span className="text-xl font-bold text-foreground">145.8 m²</span>
                    </div>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-foreground mb-4">시세 요약</h4>
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">감정평가 기준</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">총 시세</span>
                      <span className="text-xl font-bold text-foreground">8.7억</span>
                    </div>
                  </div>
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">토지 기준</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">총 시세</span>
                      <span className="text-xl font-bold text-foreground">6.4억</span>
                    </div>
                  </div>
                  <div className="py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">건물 기준</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">총 시세</span>
                      <span className="text-xl font-bold text-foreground">6.4억</span>
                    </div>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">평가 완료</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">신뢰도</span>
                      <span className="text-xl font-bold text-foreground">76점</span>
                    </div>
                  </div>
                </div>

                {/* Detail Table */}
                <div className="border-t border-border">
                  {buildingDetails.map((item, index) => (
                    <div key={index} className="py-3 border-b border-border flex">
                      <span className="w-28 text-sm text-muted-foreground flex-shrink-0">{item.label}</span>
                      <span className="text-sm text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (activeMenu === 'blog') {
    return (
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground mb-2">네이버 블로그 검색</h1>
          <p className="text-sm text-muted-foreground">
            검색어 기준으로 블로그를 수집하고, 추론된 건물 주소와 면적 정보를 바탕으로 분석 결과를 정리합니다.
          </p>
        </div>

        {/* Search Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">검색어</label>
            <input
              type="text"
              defaultValue="부산 건물 급매"
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">기간</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                  <option>1일</option>
                  <option>7일</option>
                  <option>30일</option>
                </select>
                <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">정렬</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                  <option>최신순</option>
                  <option>정확도순</option>
                </select>
                <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">부산 조회 이력</label>
            <div className="relative">
              <select className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                <option>부산 해운대 급매 2026. 03. 21 오후 12:12</option>
              </select>
              <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-8 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors">
            초기화
          </button>
          <button className="px-8 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            분석시작
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Analysis Status */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-2">최근 분석 상태</h2>
          <p className="text-xs text-muted-foreground mb-4">
            진행중인 작업은 자동으로 새로고침되며, 선택한 이력의 최신 상태를 보여줍니다.
          </p>
          
          {/* Status Header */}
          <div className="bg-secondary/50 rounded-lg p-3 mb-4 flex items-center gap-4">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">완료</span>
            <span className="text-sm text-foreground">부산 해운대 급매 2026. 03. 21 오후 12:51</span>
          </div>

          {/* Status Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">검색어</p>
              <p className="text-sm font-medium text-foreground">부산 해운대 급매</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">생성 시각</p>
              <p className="text-sm font-medium text-foreground">2026. 03. 21 오후 12:51</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">시작 시각</p>
              <p className="text-sm font-medium text-foreground">2026. 03. 21 오후 12:51</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">종료 시각</p>
              <p className="text-sm font-medium text-foreground">2026. 03. 21 오후 12:51</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">수집 URL</p>
              <p className="text-sm font-medium text-foreground">25</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">스크린샷</p>
              <p className="text-sm font-medium text-foreground">25</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">분석 완료</p>
              <p className="text-sm font-medium text-foreground">25</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">건물 매칭</p>
              <p className="text-sm font-medium text-foreground">5</p>
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-4">분석 결과</h2>
          
          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="제목 또는 주소 검색"
              className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 pr-10"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Results List */}
          <div className="space-y-3 mb-4">
            <div className="bg-secondary/50 rounded-lg p-4 flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">해운대 상업지 건물주의 꿈! 급매 보다 싼...</p>
                <p className="text-xs text-muted-foreground mt-1">부산 광역시 해운대구 우동 762-60 1,741.4m²</p>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4 flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">해운대 상업지 건물주의 꿈! 급매 보다 싼...</p>
                <p className="text-xs text-muted-foreground mt-1">부산 광역시 해운대구 우동 762-60 1,741.4m²</p>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4 flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">해운대 상업지 건물주의 꿈! 급매 보다 싼...</p>
                <p className="text-xs text-muted-foreground mt-1">부산 광역시 해운대구 우동 762-60 1,741.4m²</p>
              </div>
            </div>
          </div>

          {/* View All */}
          <button className="w-full py-3 text-sm text-muted-foreground flex items-center justify-center gap-1 hover:text-foreground transition-colors">
            전체보기 <ChevronRight size={16} className="rotate-90" />
          </button>
        </div>

        {/* Blog Preview */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-foreground mb-3">
            해운대 상업지 건물주의 꿈 ! 급매보다 싼.. 급매보다 싼.. [네이버 블로그]
          </h3>
          <div className="flex items-center justify-between bg-secondary/30 rounded-lg p-4">
            <p className="text-xs text-muted-foreground truncate flex-1">https://blog.naver.com/dario_15/12452365478</p>
            <button className="ml-4 px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors whitespace-nowrap">
              원문 열기
            </button>
          </div>
        </div>

        {/* ValueMap Results */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-2">자동 밸류맵 조회</h2>
          <p className="text-xs text-muted-foreground mb-4">
            선택하면 분석 결과의 추론 주소를 기준으로 자동 조회한 시세 정보입니다.
          </p>

          {/* Query Address Card */}
          <div className="bg-secondary/50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs text-muted-foreground">조회 주소</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">부산 광역시 해운대구 우동 762-60</p>
              <ChevronRight size={20} className="text-muted-foreground" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">등록 매물</p>
              <p className="text-sm font-bold text-foreground">없음</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">총 시세</p>
              <p className="text-sm font-bold text-foreground">97.4억</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">토지 평가액</p>
              <p className="text-sm font-bold text-foreground">54.3억</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">건물 평가액</p>
              <p className="text-sm font-bold text-foreground">43.1억</p>
            </div>
          </div>

          {/* Reliability */}
          <div className="bg-secondary/30 rounded-lg p-3 mb-6 w-1/4">
            <p className="text-xs text-muted-foreground mb-1">신뢰도</p>
            <p className="text-sm font-bold text-primary">79</p>
          </div>

          {/* Inferred Address */}
          <div className="bg-secondary/50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">💡</span>
              <span className="text-xs text-muted-foreground">추론 주소</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">부산 광역시 해운대구 우동 762-60</p>
              <ChevronRight size={20} className="text-muted-foreground" />
            </div>
          </div>

          {/* Stats Grid for Inferred */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">등록 매물</p>
              <p className="text-sm font-bold text-foreground">없음</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">총 시세</p>
              <p className="text-sm font-bold text-foreground">97.4억</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">토지 평가액</p>
              <p className="text-sm font-bold text-foreground">54.3억</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">건물 평가액</p>
              <p className="text-sm font-bold text-foreground">43.1억</p>
            </div>
          </div>

          {/* Reliability for Inferred */}
          <div className="bg-secondary/30 rounded-lg p-3 w-1/4">
            <p className="text-xs text-muted-foreground mb-1">신뢰도</p>
            <p className="text-sm font-bold text-primary">79</p>
          </div>
        </div>
      </div>
    )
  }

  if (activeMenu === 'history') {
    return (
      <div className="flex-1 min-w-0">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6">
          {historyFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setHistoryFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                historyFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white border border-border text-foreground hover:bg-secondary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="주소, URL, 키워드로 기록 검색"
            className="flex-1 px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            검색
          </button>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {historyItems.map((item, index) => (
            <div key={index} className="border-b border-border pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 border border-border rounded text-xs font-medium text-foreground mb-2">
                    {item.type}
                  </span>
                  <h3 className="font-medium text-foreground mb-1">{item.address}</h3>
                  <p className="text-sm text-muted-foreground">{item.url}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-lg font-bold text-primary mb-1">{item.price}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}
