'use client'

import { Edit } from 'lucide-react'

const actionBtnClass =
  'flex-1 rounded border border-[#BEDBFF] bg-white px-1 py-1.5 text-[11px] font-medium leading-tight text-[#2567E7] transition-colors hover:bg-[#BEDBFF]/30'

const stats = [
  { label: '팔로워', value: '128' },
  { label: '팔로잉', value: '45' },
  { label: '게시글', value: '34' },
  { label: '댓글', value: '5' },
]

export default function CommunityArticleSidebar() {
  return (
    <div className="w-60 shrink-0">
    <div className="mb-6 rounded-xl border border-border bg-white p-5">
      <div className="mb-5 flex gap-3">
        <div className="relative shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-800">
            홍
          </div>
          <button
            type="button"
            aria-label="프로필 사진 변경"
            className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#2567E7] shadow-sm ring-2 ring-white"
          >
            <Edit className="h-3 w-3 text-white" strokeWidth={2.5} />
          </button>
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-bold text-foreground mb-2">홍길동</span>
            <span className="rounded-full bg-[#432DD7] px-2 py-1.5 mb-3.5 text-[10px] font-bold uppercase tracking-wide text-white">
              BRONZE 1
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">카카오 계정으로 가입</p>
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

      {/* Stats */}
      <div className="mt-5 flex justify-between border-t border-border pt-5 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="mb-3 text-lg font-semibold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  )
}
