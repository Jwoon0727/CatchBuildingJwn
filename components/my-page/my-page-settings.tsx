'use client'

import { useState } from 'react'

const notificationSettings = [
  { id: 'price', label: '매물 가격 변동 알림', defaultValue: false },
  { id: 'lecture', label: '새 강의 업로드 알림', defaultValue: true },
  { id: 'community', label: '커뮤니티 댓글 알림', defaultValue: true },
  { id: 'events', label: '이벤트 및 혜택 알림', defaultValue: true },
]

export default function MyPageSettings() {
  const [settings, setSettings] = useState<Record<string, boolean>>(
    notificationSettings.reduce(
      (acc, setting) => {
        acc[setting.id] = setting.defaultValue
        return acc
      },
      {} as Record<string, boolean>,
    ),
  )

  const toggleSetting = (id: string) => {
    setSettings((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="min-w-0 flex-1 font-pretendard [&_button]:font-pretendard [&_input]:font-pretendard [&_textarea]:font-pretendard">
      <h1 className="mt-5 hidden border-border pb-9 text-xl font-bold text-foreground lg:block">설정</h1>

      <h3 className="mt-8 mb-2 text-lg font-bold text-foreground lg:hidden">알림 설정</h3>
      <div>
        {notificationSettings.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between gap-4 border-b border-border py-5"
          >
            <span className="text-sm text-foreground">{setting.label}</span>

            <button
              type="button"
              role="switch"
              aria-checked={settings[setting.id]}
              onClick={() => toggleSetting(setting.id)}
              className={`relative h-8 w-14 shrink-0 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2567E7] ${
                settings[setting.id] ? 'bg-[#2567E7]' : 'bg-[#CCCCCC]'
              }`}
            >
              <span
                className={`pointer-events-none absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform ${
                  settings[setting.id] ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <p className="mt-120 flex justify-center lg:hidden">
        <a
          href="#"
          className="text-sm text-[#757575] underline underline-offset-2 transition-opacity hover:opacity-80"
        >
          회원탈퇴
        </a>
      </p>
    </div>
  )
}
