'use client'

const menuItems = [
  { id: 'basic', label: '기본정보' },
  { id: 'properties', label: '찜한 매물' },
  { id: 'notifications', label: '매물 알림' },
  { id: 'subscription', label: '구독 정보' },
  { id: 'courses', label: '수강 목록' },
  { id: 'settings', label: '알림 설정' },
]

interface MyPageSidebarProps {
  activeMenu: string
  setActiveMenu: (menu: string) => void
}

export default function MyPageSidebar({ activeMenu, setActiveMenu }: MyPageSidebarProps) {

  return (
    <div className="w-56 flex-shrink-0">
      {/* Profile Card */}
      <div className="bg-white rounded-xl border border-border p-6 mb-4">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative mb-3">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-600">
              홍
            </div>
            {/* Kakao Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.88 5.31 4.7 6.71l-.96 3.56c-.1.35.31.64.62.44l4.26-2.77c.45.04.91.06 1.38.06 5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="#3C1E1E"/>
              </svg>
            </div>
          </div>
          
          {/* Name & Badge */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-foreground text-lg">홍길동</span>
            <span className="px-2 py-0.5 bg-amber-400 text-white text-[10px] font-bold rounded">BRONZE 1</span>
          </div>
          <p className="text-xs text-muted-foreground">카카오 계정으로 가입</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 border border-border rounded-lg text-xs text-muted-foreground hover:bg-secondary transition-colors">
            게시글
          </button>
          <button className="flex-1 py-2 border border-border rounded-lg text-xs text-muted-foreground hover:bg-secondary transition-colors">
            댓글
          </button>
          <button className="flex-1 py-2 border border-border rounded-lg text-xs text-muted-foreground hover:bg-secondary transition-colors">
            구독하기
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveMenu(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
              activeMenu === item.id
                ? 'bg-primary/10 text-primary font-medium border-l-4 border-primary'
                : 'text-muted-foreground hover:bg-secondary'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
