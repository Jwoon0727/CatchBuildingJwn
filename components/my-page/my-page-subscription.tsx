'use client'

import { useState } from 'react'
import { Check, X, CreditCard } from 'lucide-react'

const plans = [
  {
    id: 'free',
    name: '무료',
    price: '0원',
    period: '매물 열람 5회/월',
    features: [
      { name: '기본 매물 검색', included: true },
      { name: '매물 알림', included: false },
      { name: '전문가 컨설팅', included: false },
    ],
    current: true,
  },
  {
    id: 'basic',
    name: '베이직',
    price: '39,000원',
    period: '매물 열람 5회/월',
    features: [
      { name: '기본 매물 검색', included: true },
      { name: '매물 알림', included: false },
      { name: '전문가 컨설팅', included: false },
    ],
    current: false,
  },
  {
    id: 'silver',
    name: '실버',
    price: '99,000원',
    period: '매물 열람 5회/월',
    features: [
      { name: '기본 매물 검색', included: true },
      { name: '매물 알림', included: false },
      { name: '전문가 컨설팅', included: false },
    ],
    current: false,
  },
  {
    id: 'gold',
    name: '골드',
    price: '99,000원',
    period: '매물 열람 5회/월',
    features: [
      { name: '기본 매물 검색', included: true },
      { name: '매물 알림', included: false },
      { name: '전문가 컨설팅', included: false },
    ],
    current: false,
  },
]

const paymentHistory = [
  { date: '2026. 04. 03', product: '프리미엄(1개월)', amount: '39,000원', status: '결제완료' },
  { date: '2026. 04. 03', product: '프리미엄(1개월)', amount: '39,000원', status: '결제완료' },
]

type ModalType = 'change' | 'cancel' | null

const modalConfig = {
  change: {
    title: '구독 완료',
    message: '프리미엄 상품을 구독해주셔서\n감사합니다.',
  },
  cancel: {
    title: '구독 취소',
    message: '구독이 취소 되었습니다.\n이용해주셔서 감사합니다.',
  },
}

function SubscriptionModal({ type, onClose }: { type: ModalType; onClose: () => void }) {
  if (!type) return null
  const { title, message } = modalConfig[type]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-[260px] rounded-2xl bg-white px-6 py-8 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <Check size={28} className="text-green-500" strokeWidth={2.5} />
        </div>
        <p className="mb-2 text-base font-bold text-foreground">{title}</p>
        <p className="mb-6 whitespace-pre-line text-sm text-muted-foreground">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-lg border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
        >
          확인
        </button>
      </div>
    </div>
  )
}

export default function MyPageSubscription() {
  const [modal, setModal] = useState<ModalType>(null)

  return (
    <div className="min-w-0 flex-1">
      <SubscriptionModal type={modal} onClose={() => setModal(null)} />

      {/* 데스크톱 전용 헤더 */}
      <h1 className="hidden lg:block mt-5 border-border pb-9 mb-2 text-xl font-bold text-foreground">구독 정보</h1>

      <h2 className="text-lg font-bold text-foreground mb-4 lg:mb-8">구독중인 상품</h2>

      {/* 모바일: 가로 스와이프 카드 */}
      <div className="lg:hidden mb-10 -mx-4 px-4">
        <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory pb-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="snap-start shrink-0 w-[calc(50%-6px)] rounded-xl border border-border bg-white p-5 text-center"
            >
              <p className="mb-2 text-sm text-muted-foreground">{plan.name}</p>
              <p className="mb-1 text-base font-bold text-foreground">{plan.price}</p>
              <p className="mb-4 text-xs text-muted-foreground">{plan.period}</p>

              <div className="mb-4 space-y-2 text-left">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <Check size={16} className="shrink-0 text-green-500" />
                    ) : (
                      <X size={16} className="shrink-0 text-gray-300" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {plan.current ? (
                <button
                  type="button"
                  onClick={() => setModal('cancel')}
                  className="w-full rounded-lg border border-border bg-white py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/50"
                >
                  현재 플랜
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setModal('change')}
                  className="w-full rounded-lg bg-[#2567E7] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2567E7]/90"
                >
                  플랜 변경
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 데스크톱: 기존 그리드 */}
      <div className="hidden lg:grid mb-10 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-xl border border-border bg-white p-6 text-center"
          >
            <p className="mb-2 text-sm text-muted-foreground">{plan.name}</p>
            <p className="mb-1 text-base font-bold text-foreground">{plan.price}</p>
            <p className="mb-4 text-xs text-muted-foreground">{plan.period}</p>

            <div className="mb-2 space-y-2 text-left">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  {feature.included ? (
                    <Check size={16} className="shrink-0 text-green-500" />
                  ) : (
                    <X size={16} className="shrink-0 text-gray-300" />
                  )}
                  <span
                    className={
                      feature.included ? 'text-foreground' : 'text-muted-foreground'
                    }
                  >
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {plan.current ? (
              <button
                type="button"
                onClick={() => setModal('cancel')}
                className="w-full rounded-lg border border-border bg-white py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/50"
              >
                현재 플랜
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setModal('change')}
                className="w-full rounded-lg bg-[#2567E7] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2567E7]/90"
              >
                플랜 변경
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Payment Method */}
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bold text-foreground">결제 수단</h2>
          <button
            type="button"
            className="text-sm font-medium text-[#2567E7] transition-colors hover:text-[#2567E7]/80 hover:underline"
          >
            변경
          </button>
        </div>
        <div className="flex items-center gap-4 rounded-xl bg-[#F8F8F8] p-4">
          <CreditCard className="size-14 shrink-0 text-[#2567E7]" strokeWidth={0.7} />
          <div className="min-w-0 text-left">
            <p className="font-semibold text-foreground mb-1">국민카드 VISA</p>
            <p className="text-sm font-medium tabular-nums text-muted-foreground">
              .... .... .... 4827
            </p>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div>
        <h2 className="mb-4 font-bold text-foreground">결제 내역</h2>
        <div className="overflow-hidden rounded-xl border-y border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F8F8F8]">
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">
                  결제일
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">
                  상품명
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">
                  금액
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">
                  상태
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="px-4 py-3 text-left text-xs text-foreground">
                    {payment.date}
                  </td>
                  <td className="px-4 py-3 text-left text-xs text-foreground">
                    {payment.product}
                  </td>
                    <td className="px-4 py-3 text-left text-xs text-foreground">
                    {payment.amount}
                  </td>
                  <td className="px-4 py-3 text-left text-xs text-foreground">
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
