'use client'

export default function CommunityArticleSidebar() {
  return (
    <div className="sticky top-32">
      {/* User Profile Card */}
      <div className="bg-white rounded-xl border border-border p-6">
        {/* Avatar and Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-foreground border-2 border-gray-200">
              홍
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">홍길동</span>
              <span className="px-2 py-0.5 bg-amber-400 text-white text-xs font-bold rounded">BRONZE 1</span>
            </div>
            <p className="text-xs text-muted-foreground">카카오 계정으로 가입</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-6">
          <button className="flex-1 px-3 py-2 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary/5 transition-colors">
            게시글
          </button>
          <button className="flex-1 px-3 py-2 border border-border text-muted-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
            댓글
          </button>
          <button className="flex-1 px-3 py-2 border border-border text-muted-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
            구독하기
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-center">
          <div>
            <p className="text-xl font-bold text-foreground">128</p>
            <p className="text-xs text-muted-foreground">팔로워</p>
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">45</p>
            <p className="text-xs text-muted-foreground">팔로잉</p>
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">34</p>
            <p className="text-xs text-muted-foreground">게시글</p>
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">5</p>
            <p className="text-xs text-muted-foreground">댓글</p>
          </div>
        </div>
      </div>
    </div>
  )
}
