'use client'

const menuItems = [
  { id: 'url', label: 'URL 조회' },
  { id: 'building', label: '건물 검색' },
  { id: 'blog', label: '블로그 분석' },
  { id: 'history', label: '이용 내역' },
]

interface BuildingSearchSidebarProps {
  activeMenu: string
  setActiveMenu: (menu: string) => void
}

export default function BuildingSearchSidebar({ activeMenu, setActiveMenu }: BuildingSearchSidebarProps) {
  return (
    <div className="w-64 flex-shrink-0">
      {/* User Profile Card */}
      <div className="bg-white rounded-xl border border-border p-6 mb-4">
        <div className="flex items-center gap-3 mb-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-foreground relative">
            홍
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">홍길동</span>
              <span className="px-2 py-0.5 bg-amber-400 text-white text-xs font-bold rounded">BRONZE 1</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">카카오 계정으로 가입</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 border border-primary text-primary text-sm rounded-full hover:bg-primary/5 transition-colors">
            게시글
          </button>
          <button className="flex-1 px-3 py-2 border border-border text-muted-foreground text-sm rounded-full hover:bg-secondary transition-colors">
            댓글
          </button>
          <button className="flex-1 px-3 py-2 border border-border text-muted-foreground text-sm rounded-full hover:bg-secondary transition-colors">
            구독하기
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white rounded-xl border border-border overflow-hidden">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveMenu(item.id)}
            className={`w-full text-left px-4 py-3 text-sm transition-colors ${
              activeMenu === item.id
                ? 'bg-secondary font-medium text-foreground border-l-3 border-l-primary'
                : 'text-muted-foreground hover:bg-secondary/50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
