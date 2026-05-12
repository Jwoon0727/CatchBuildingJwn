'use client'

import { Button } from '@/components/ui/button'
import { Menu, User } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const subNavLink =
    'flex items-center justify-center py-3 px-1 text-center align-middle whitespace-nowrap text-black'

  return (
    <>
      <div className="sticky top-0 z-50 font-pretendard">
        <header className="bg-white border-border">
          <div className="w-full px-4 py-3">
            <div className="mx-auto flex max-w-[75rem] items-center justify-between">
              <div className="flex items-center gap-5 lg:gap-6">
                <h1 className="shrink-0">
                  <a href="/" className="flex items-center">
                    <Image
                      src="/logo/mainlogo2.svg"
                      alt="부동산마켓"
                      width={100}
                      height={30}
                      className="h-5 w-auto"
                      priority
                    />
                  </a>
                </h1>
                <nav className="hidden lg:flex gap-8 text-sm">
                  <a href="#" className="text-muted-foreground hover:text-foreground font-medium">부동산</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground font-medium">강의</a>
                  <a href="/community" className="text-muted-foreground hover:text-foreground font-medium">커뮤니티</a>
                </nav>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-9 rounded-lg border-border bg-white px-4 text-foreground shadow-none hover:bg-muted/50"
                >
                  <a href="/login" className="gap-2">
                    <User className="size-[18px] stroke-[1.75]" aria-hidden />
                    로그인
                  </a>
                </Button>
                <Button size="sm" asChild className="h-9 rounded-lg bg-[#2C62EB] px-4 text-white hover:bg-primary/90">
                  <a href="/login">무료 회원가입</a>
                </Button>
                <button type="button" className="lg:hidden p-2" aria-label="메뉴">
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        <nav className="-mt-2 bg-white border-b border-border text-sm font-medium leading-5 tracking-normal">
          <div className="w-full px-4 py-0">
            <div className="max-w-[74rem] mx-auto flex items-center gap-5 overflow-x-auto">
              <a href="/" className={`${subNavLink} border-b-2 border-primary`}>
                전체
              </a>
              <a href="/search" className={subNavLink}>
                매물 검색
              </a>
              <a href="#" className={subNavLink}>
                추천매물
              </a>
              <a href="/community" className={subNavLink}>
                커뮤니티
              </a>
              <a href="/map-search" className={subNavLink}>
                지도검색
              </a>
              <a href="#" className={subNavLink}>
                Q&A
              </a>
              <a href="#" className={subNavLink}>
                카톡방
              </a>
              <a href="#" className={subNavLink}>
                자금확보
              </a>
              <a href="#" className={subNavLink}>
                현금흐름
              </a>
              <a href="#" className={subNavLink}>
                분석요청
              </a>
              <a href="#" className={subNavLink}>
                입장요청
              </a>
              <a href="/my-page" className={subNavLink}>
                [임시 마이페이지]
              </a>
              <a href="/building-search" className={subNavLink}>
                [임시 건물검색]
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
