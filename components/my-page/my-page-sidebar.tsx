'use client'

import { Pencil } from 'lucide-react'

const menuItems = [
  { id: 'basic', label: '기본정보' },
  { id: 'properties', label: '찜한 매물' },
  { id: 'notifications', label: '매물 알림' },
  { id: 'subscription', label: '구독 정보' },
  { id: 'courses', label: '수강 목록' },
  { id: 'settings', label: '설정' },
]

const actionBtnClass =
  'flex-1 rounded border border-[#BEDBFF] bg-white px-1 py-1.5 text-[11px] font-medium leading-tight text-[#2567E7] transition-colors hover:bg-[#BEDBFF]/30'

interface MyPageSidebarProps {
  activeMenu: string
  setActiveMenu: (menu: string) => void
}

export default function MyPageSidebar({ activeMenu, setActiveMenu }: MyPageSidebarProps) {
  return (
    <div className="w-60 shrink-0 font-pretendard antialiased [&_*]:font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_input]:placeholder:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard [&_option]:font-pretendard [&_label]:font-pretendard [&_a]:font-pretendard">
      <div className="mb-6 rounded-xl border border-border bg-white p-5">
        <div className="mb-5 flex gap-3">
          <div className="relative shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold text-gray-800">
              홍
            </div>
            <button
              type="button"
              aria-label="프로필 사진 변경"
              className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#2567E7] shadow-sm ring-2 ring-white"
            >
              <Pencil className="h-3 w-3 text-white" strokeWidth={2.5} />
            </button>
          </div>

          <div className="min-w-0 flex-1 pt-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-base font-bold text-foreground mb-2">홍길동</span>
              <span className="rounded-full bg-[#432DD7] px-2 py-1.5 mb-3.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                BRONZE 1
              </span>
            </div>
            <p className="text-xs text-muted-foreground">카카오 계정으로 가입</p>
          </div>
        </div>

        <div className="flex gap-1.5">
          <button type="button" className={actionBtnClass}>
            게시글
          </button>
          <button type="button" className={actionBtnClass}>
            댓글
          </button>
          <button type="button" className={actionBtnClass}>
            구독하기
          </button>
        </div>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveMenu(item.id)}
            className={`w-full rounded-lg px-4 py-3 text-left text-sm transition-colors ${
              activeMenu === item.id
                ? 'bg-[#EBF1FD] font-bold text-foreground'
                : 'font-normal text-muted-foreground hover:bg-muted/50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
