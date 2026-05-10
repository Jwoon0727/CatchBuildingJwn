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
    notificationSettings.reduce((acc, setting) => {
      acc[setting.id] = setting.defaultValue
      return acc
    }, {} as Record<string, boolean>)
  )

  const toggleSetting = (id: string) => {
    setSettings(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="flex-1 min-w-0">
      {/* Header */}
      <h1 className="text-2xl font-bold text-foreground mb-8">마이페이지</h1>

      {/* Notification Settings */}
      <div>
        {notificationSettings.map((setting) => (
          <div 
            key={setting.id} 
            className="flex items-center justify-between py-5 border-b border-border"
          >
            <span className="text-sm text-foreground">{setting.label}</span>
            
            {/* Toggle Switch */}
            <button
              onClick={() => toggleSetting(setting.id)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                settings[setting.id] ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  settings[setting.id] ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
