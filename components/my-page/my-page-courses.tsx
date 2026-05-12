'use client'

import { Star } from 'lucide-react'

/** 하단 정보 행 아이콘 — `public` 기준 경로를 원하는 이미지로 바꿔 주세요. */
const COURSE_DETAIL_ICONS = {
  lessons: '/icon/airplay.svg',
  period: '/icon/book4.svg',
} as const

const courses = [
  {
    id: 1,
    title: '처음 하는 상업용 부동산 투자 완전정복',
    image:
      '/building/building_type02.png',
    rating: 4.0,
    instructor: '강사 김영호',
    progress: 64,
    completedLessons: 18,
    totalLessons: 28,
    expiryDate: '2025. 12. 31',
    isExpired: false,
  },
  {
    id: 2,
    title: '처음 하는 상업용 부동산 투자 완전정복',
    image:
      '/building/building_type02.png',
    rating: 4.0,
    instructor: '강사 김영호',
    progress: 20,
    completedLessons: 18,
    totalLessons: 28,
    expiryDate: null,
    isExpired: true,
  },
  {
    id: 3,
    title: '처음 하는 상업용 부동산 투자 완전정복',
    image:
      '/building/building_type02.png',
    rating: 4.0,
    instructor: '강사 김영호',
    progress: 20,
    completedLessons: 18,
    totalLessons: 28,
    expiryDate: null,
    isExpired: true,
  },
]

export default function MyPageCourses() {
  return (
    <div className="min-w-0 flex-1 text-left ">
      <h1 className="mt-5  border-border pb-9 text-xl font-bold text-foreground">수강목록</h1>

      <p className="mb-2 text-sm font-bold text-foreground">
        수강 중인 강의{' '}
        <span className="font-bold text-[#2B7FFF]">{courses.length}건</span>
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border-b border-border bg-white py-5 pl-0 pr-2 sm:pr-4"          >
            <div className="mb-4 flex items-start gap-4">
              <div className="relative aspect-[2/2] w-[4rem] shrink-0 overflow-hidden rounded-lg bg-muted">
                <img
                  src={course.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1 text-left">
                <h3 className="mt-0.5 mb-5 text-left text-sm font-semibold leading-snug text-foreground">
                  {course.title}
                </h3>
                <div className="flex flex-wrap items-center justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(course.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }
                    />
                  ))}
                  <span className="ml-1 text-left text-xs text-muted-foreground">
                    {course.rating} | {course.instructor}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-4 text-left">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground">수강 진행률</span>
                <span className="shrink-0 font-semibold text-[#2B7FFF]">
                  {course.progress}%
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-[#E8E8E8]">
                <div
                  className="h-full rounded-full bg-[#2B7FFF] transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            <div className="mb-5 space-y-2 text-left">
              <div className="flex items-center justify-start gap-2 text-xs text-muted-foreground">
                <img
                  src={COURSE_DETAIL_ICONS.lessons}
                  alt=""
                  className="size-4 shrink-0 object-contain"
                />
                <span>
                  총 {course.totalLessons}강 중 {course.completedLessons}강 완료
                </span>
              </div>
              <div className="flex items-center justify-start gap-2 text-xs text-muted-foreground">
                <img
                  src={COURSE_DETAIL_ICONS.period}
                  alt=""
                  className="size-4 shrink-0 object-contain"
                />
                <span>
                  {course.isExpired
                    ? '수강기간 만료'
                    : `수강기간 ~${course.expiryDate}`}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg border border-[#2B7FFF] px-2.5 py-2.5 text-center text-sm font-semibold text-[#2567E7] transition-colors hover:bg-[#2B7FFF]/5"
            >
              이어보기
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
