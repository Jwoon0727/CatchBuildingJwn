'use client'

const notableMembers = [
  { name: '부자마인드', followers: 128, posts: 45 },
  { name: '부자마인드', followers: 128, posts: 45 },
  { name: '부자마인드', followers: 128, posts: 45 },
  { name: '부자마인드', followers: 128, posts: 45 },
  { name: '부자마인드', followers: 128, posts: 45 },
]

export default function CommunityMembers() {
  return (
    <div className="w-56 flex-shrink-0 space-y-6">
      {/* Notable Members Section 1 */}
      <div>
        <h3 className="font-bold text-foreground mb-4">주목받는 멤버</h3>
        <div className="space-y-3">
          {notableMembers.map((member, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-foreground">
                  홍
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">팔로워 {member.followers} | 팔로잉 {member.posts}</p>
                </div>
              </div>
              <button className="px-3 py-1 border border-primary text-primary text-xs rounded-full hover:bg-primary/5 transition-colors">
                구독하기
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notable Members Section 2 */}
      <div>
        <h3 className="font-bold text-foreground mb-4">주목받는 멤버</h3>
        <div className="space-y-3">
          {notableMembers.map((member, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-foreground">
                  홍
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">팔로워 {member.followers} | 팔로잉 {member.posts}</p>
                </div>
              </div>
              <button className="px-3 py-1 border border-primary text-primary text-xs rounded-full hover:bg-primary/5 transition-colors">
                구독하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
