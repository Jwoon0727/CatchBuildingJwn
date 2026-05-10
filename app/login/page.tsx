'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, MessageCircle } from 'lucide-react'

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [autoLogin, setAutoLogin] = useState(false)

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">영끝남</span>
              <span className="text-foreground">월드</span>
            </h1>
          </Link>
          <p className="text-muted-foreground mt-2">부동산 매물 · 강의 · 컨설팅을 한 곳에서</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-8">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-4 text-center font-medium transition-colors relative ${
              activeTab === 'login' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            로그인
            {activeTab === 'login' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-4 text-center font-medium transition-colors relative ${
              activeTab === 'register' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            회원가입
            {activeTab === 'register' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {activeTab === 'login' ? (
          <>
            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full py-4 bg-[#FEE500] text-[#3C1E1E] rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#FDD800] transition-colors">
                <MessageCircle size={20} fill="#3C1E1E" />
                카카오톡으로 고 로그인
              </button>
              <button className="w-full py-4 bg-[#03C75A] text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#02B350] transition-colors">
                <span className="font-bold text-lg">N</span>
                회원가입
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">또는 이메일로 가입</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Login Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  이메일 또는 휴대폰 번호
                </label>
                <input
                  type="text"
                  placeholder={'이메일 또는 "-" 없이  휴대폰 번호를 입력해 주세요.'}
                  className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  비밀번호
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="비밀번호를 입력해 주세요."
                    className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoLogin}
                    onChange={(e) => setAutoLogin(e.target.checked)}
                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">자동로그인</span>
                </label>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <button type="button" className="hover:text-foreground transition-colors">
                    아이디 찾기
                  </button>
                  <span>|</span>
                  <button type="button" className="hover:text-foreground transition-colors">
                    비밀번호 재설정
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors mt-4"
              >
                로그인
              </button>
            </form>
          </>
        ) : (
          /* Register Tab Content */
          <div className="space-y-4">
            <p className="text-center text-muted-foreground mb-6">
              회원가입 페이지로 이동합니다.
            </p>
            <Link
              href="/register"
              className="block w-full py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
            >
              회원가입 하러 가기
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
