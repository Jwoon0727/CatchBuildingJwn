'use client'

import { Star, MessageSquare, Calendar } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: '처음 하는 상업용 부동산 투자 완전정복',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=120&h=80&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=120&h=80&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=80&fit=crop',
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
    <div className="flex-1 min-w-0">
      {/* Header */}
      <h1 className="text-2xl font-bold text-foreground mb-6">마이페이지</h1>

      {/* Subtitle */}
      <p className="text-sm text-foreground mb-6">
        수강 중인 강의 <span className="text-primary font-medium">2건</span>
      </p>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border-b border-border pb-6">
            {/* Course Header */}
            <div className="flex gap-4 mb-4">
              {/* Thumbnail */}
              <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm leading-tight mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    {course.rating} | {course.instructor}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">수강 진행률</span>
                <span className="text-xs text-primary font-medium">{course.progress}%</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            {/* Course Details */}
            <div className="space-y-1 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MessageSquare size={12} />
                <span>총 {course.totalLessons}강 중 {course.completedLessons}강 완료</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar size={12} />
                <span>
                  {course.isExpired ? '수강기간 만료' : `수강기간 ~${course.expiryDate}`}
                </span>
              </div>
            </div>

            {/* Continue Button */}
            <button className="w-full py-3 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">
              이어보기
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
