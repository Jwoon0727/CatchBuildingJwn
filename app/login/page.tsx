'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, MessageCircle, X } from 'lucide-react'
import Header from '@/components/header'

const fieldLabel = (text: string, required?: boolean) => (
  <span className="text-sm font-medium text-foreground">
    {text}
    {required && <span className="text-red-500">*</span>}
  </span>
)

const outlineBtn =
  'shrink-0 whitespace-nowrap rounded-lg border border-[#2567E7] bg-white px-3 py-3 text-sm font-medium text-[#2567E7] transition-colors hover:bg-[#2567E7]/5'

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [autoLogin, setAutoLogin] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const [agreeMarketing, setAgreeMarketing] = useState(false)

  const allAgreed = agreeTerms && agreePrivacy && agreeMarketing
  const toggleAgreeAll = () => {
    const next = !allAgreed
    setAgreeTerms(next)
    setAgreePrivacy(next)
    setAgreeMarketing(next)
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background font-pretendard antialiased [&_button]:font-pretendard [&_input]:font-pretendard [&_input]:placeholder:font-pretendard [&_textarea]:font-pretendard [&_select]:font-pretendard">
      {/* 데스크톱 헤더 */}
      <div className="hidden font-pretendard lg:block">
        <Header />
      </div>

      {/* 모바일 헤더: X 버튼만 */}
      <div className="lg:hidden flex items-center px-6 py-6 font-pretendard">
        <button
          type="button"
          aria-label="닫기"
          onClick={() => window.history.back()}
          className="text-foreground"
        >
          <X size={22} strokeWidth={2} />
        </button>
      </div>
      <main className="flex flex-1 min-h-0 w-full items-start justify-center overflow-y-auto px-4 pt-8 pb-6">
        <div className="w-full max-w-md px-6 font-pretendard lg:px-0">
        {/* Logo */}
        <div className="text-center mb-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo/mainlogo2.svg"
              alt="영끝남월드"
              width={70}
              height={30}
              className="h-5 w-auto mx-auto"
              priority
            />
          </Link>
          <p className="text-sm text-muted-foreground mt-2">부동산 매물 · 강의 · 컨설팅을 한 곳에서</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-4">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-4 text-center font-medium transition-colors relative ${
              activeTab === 'login' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            로그인
            {activeTab === 'login' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2567E7]" />
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
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2567E7]" />
            )}
          </button>
        </div>

        {activeTab === 'login' ? (
          <>
            {/* Social Login Buttons */}
            <div className="space-y-3 mb-5">
              <button className="w-full py-3 bg-[#FEE500] text-[#3C1E1E] rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#FDD800] transition-colors">
                <MessageCircle size={15} fill="#3C1E1E" />
                카카오톡으로 로그인
              </button>
              <button className="w-full py-3 bg-[#03C75A] text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#02B350] transition-colors">
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
                  className="w-full px-4 py-4  border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                    className="w-full px-4 py-4  border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 pr-12"
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
                className="w-full py-4 bg-[#2567E7] text-white rounded-lg font-medium hover:bg-primary/90 transition-colors mt-4"
              >
                로그인
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="space-y-3 mb-5">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] py-3 font-medium text-[#3C1E1E] transition-colors hover:bg-[#FDD800]"
              >
                <MessageCircle size={15} fill="#3C1E1E" />
                카카오톡으로 로그인
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#03C75A] py-3 font-medium text-white transition-colors hover:bg-[#02B350]"
              >
                <span className="text-lg font-bold">N</span>
                회원가입
              </button>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-muted-foreground">또는 이메일로 가입</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div>
                <label className="mb-2 block">{fieldLabel('이름', true)}</label>
                <input
                  type="text"
                  placeholder="실명을 입력해 주세요."
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2567E7]/20"
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="mb-2 block">{fieldLabel('이메일', true)}</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="min-w-0 flex-1 rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2567E7]/20"
                    autoComplete="email"
                  />
                  <button type="button" className={outlineBtn}>
                    중복확인
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block">{fieldLabel('휴대폰 번호', true)}</label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder={'"-"없이 숫자만 입력해 주세요.'}
                    className="min-w-0 flex-1 rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2567E7]/20"
                    autoComplete="tel"
                  />
                  <button type="button" className={outlineBtn}>
                    인증번호
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block">{fieldLabel('비밀번호', true)}</label>
                <div className="relative">
                  <input
                    type={showRegisterPassword ? 'text' : 'password'}
                    placeholder="비밀번호를 입력해 주세요."
                    className="w-full rounded-lg border border-border px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#2567E7]/20"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegisterPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showRegisterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="rounded-lg border border-border  p-4">
                <label className="flex cursor-pointer items-center gap-2 border-b border-border pb-3">
                  <input
                    type="checkbox"
                    checked={allAgreed}
                    onChange={toggleAgreeAll}
                    className="h-5 w-5 rounded border-border text-[#2567E7] focus:ring-[#2567E7]"
                  />
                  <span className="text-sm font-medium text-foreground">전체 동의</span>
                </label>
                <ul className="divide-y divide-border">
                  <li className="flex items-center justify-between gap-2 pt-3">
                    <label className="flex flex-1 cursor-pointer items-center gap-2 mb-3">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="h-5 w-5 shrink-0 rounded border-border text-[#2567E7] focus:ring-[#2567E7]"
                      />
                      <span className="text-sm text-foreground">[필수] 이용약관 동의</span>
                    </label>
                    <button type="button" className="mb-3 shrink-0 text-sm font-medium text-[#2567E7]">
                      보기
                    </button>
                  </li>
                  <li className="flex items-center justify-between gap-2 pt-3">
                    <label className="flex flex-1 cursor-pointer items-center gap-2 mb-3">
                      <input
                        type="checkbox"
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                        className="h-5 w-5 shrink-0 rounded border-border text-[#2567E7] focus:ring-[#2567E7]"
                      />
                      <span className="text-sm text-foreground">[필수] 개인정보 수집·이용 동의</span>
                    </label>
                    <button type="button" className="mb-3 shrink-0 text-sm font-medium text-[#2567E7]">
                      보기
                    </button>
                  </li>
                  <li className="flex items-center justify-between gap-2 pt-3">
                    <label className="flex flex-1 cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={agreeMarketing}
                        onChange={(e) => setAgreeMarketing(e.target.checked)}
                        className="h-5 w-5 shrink-0 rounded border-border text-[#2567E7] focus:ring-[#2567E7]"
                      />
                      <span className="text-sm text-foreground">[선택] 마케팅 정보 수신 동의</span>
                    </label>
                    <button type="button" className="shrink-0 text-sm font-medium text-[#2567E7]">
                      보기
                    </button>
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-[#2567E7] py-4 font-medium text-white transition-colors hover:bg-[#2567E7]/90"
              >
                로그인
              </button>

              <p className="text-center text-sm text-muted-foreground">
                이미 회원이신가요?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className="font-medium text-[#2567E7] hover:underline"
                >
                  로그인
                </button>
              </p>
            </form>
          </>
        )}
        </div>
      </main>
    </div>
  )
}
