'use client'

const notableMembers = [
  { name: '부자마인드', followers: 128, following: 45 },
  { name: '부자마인드', followers: 128, following: 45 },
  { name: '부자마인드', followers: 128, following: 45 },
  { name: '부자마인드', followers: 128, following: 45 },
  { name: '부자마인드', followers: 128, following: 45 },
]

const subscribeBtnClass =
  'shrink-0 rounded-[4px] border border-[#BEDBFF] bg-transparent px-3 py-1 text-[11px] font-medium text-[#2567E7] transition-colors hover:bg-[#BEDBFF]/15'

export default function CommunityMembers() {
  return (
    <div className="w-56 shrink-0 rounded-xl border border-border bg-white p-4 font-pretendard antialiased [&_*]:font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_input]:placeholder:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard [&_option]:font-pretendard [&_label]:font-pretendard [&_a]:font-pretendard">
      {[0, 1].map((sectionIndex) => (
        <div key={sectionIndex}>
          {sectionIndex > 0 && <div className="my-5 border-t border-border" aria-hidden />}
          <h3 className="font-bold text-foreground">주목받는 멤버</h3>
          <ul className="mt-3 flex flex-col gap-4">
            {notableMembers.map((member, index) => (
              <li key={`${sectionIndex}-${index}`}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-xs font-light text-[#2567E7]">
                        홍
                      </div>
                      <p className="truncate text-sm font-semibold text-foreground">{member.name}</p>
                    </div>
                    <button type="button" className={subscribeBtnClass}>
                      구독하기
                    </button>
                  </div>
                  <p className="text-xs leading-snug text-[#777777]">
                    팔로워 {member.followers} | 팔로잉 {member.following}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
