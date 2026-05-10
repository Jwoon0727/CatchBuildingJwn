'use client'

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

export default function MyPageSubscription() {
  return (
    <div className="flex-1 min-w-0">
      {/* Header */}
      <h1 className="text-2xl font-bold text-foreground mb-8">매물 알림</h1>

      {/* Pricing Plans */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border border-border rounded-xl p-6 text-center"
          >
            <p className="text-sm text-muted-foreground mb-2">{plan.name}</p>
            <p className="text-2xl font-bold text-foreground mb-1">{plan.price}</p>
            <p className="text-xs text-muted-foreground mb-4">{plan.period}</p>
            
            <div className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  {feature.included ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <X size={16} className="text-gray-300" />
                  )}
                  <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {plan.current ? (
              <button
                disabled
                className="w-full py-2.5 border border-border rounded-full text-sm text-muted-foreground"
              >
                현재 플랜
              </button>
            ) : (
              <button className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-white rounded-full text-sm font-medium transition-colors">
                플랜 변경
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Current Subscription */}
      <div className="mb-8">
        <h2 className="font-bold text-foreground mb-4">구독중인 상품</h2>
      </div>

      {/* Payment Method */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-foreground">결제 수단</h2>
          <button className="text-sm text-primary hover:underline">변경</button>
        </div>
        <div className="border border-border rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
            <CreditCard size={20} className="text-white" />
          </div>
          <div>
            <p className="font-medium text-foreground">국민카드 VISA</p>
            <p className="text-sm text-muted-foreground">•••• •••• •••• 4827</p>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div>
        <h2 className="font-bold text-foreground mb-4">결제 내역</h2>
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary/50">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">결제일</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">상품명</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">금액</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">상태</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="py-3 px-4 text-sm text-foreground">{payment.date}</td>
                  <td className="py-3 px-4 text-sm text-foreground">{payment.product}</td>
                  <td className="py-3 px-4 text-sm text-foreground">{payment.amount}</td>
                  <td className="py-3 px-4 text-sm text-foreground">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
