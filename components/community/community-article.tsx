'use client'

import { useState } from 'react'
import { Eye, MessageCircle, Heart, Share2, Bookmark, MoreVertical, ThumbsUp, ChevronDown } from 'lucide-react'

const comments = [
  {
    id: 1,
    author: '순도24케이굼',
    date: '2026. 02. 22 09:22',
    content: '원베일리는 어떤 사람들이 왜 사는가 궁금했는데 내가 매일보는것, 공간, 사람 그리고 이 환경이 나를 어디로 데려고 가는지 고민해봤습니다! 좋은글 감사합니다 팀튜닝!',
    likes: 2,
  },
  {
    id: 2,
    author: '순도24케이굼',
    date: '2026. 02. 22 09:22',
    content: '원베일리는 어떤 사람들이 왜 사는가 궁금했는데 내가 매일보는것, 공간, 사람 그리고 이 환경이 나를 어디로 데려고 가는지 고민해봤습니다! 좋은글 감사합니다 팀튜닝!',
    likes: 2,
  },
]

export default function CommunityArticle() {
  const [commentText, setCommentText] = useState('')
  const [replyText, setReplyText] = useState('')

  return (
    <div className="flex-1 min-w-0">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
        <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded">투자후기</span>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <Eye size={16} />
            <span>36</span>
          </button>
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <MessageCircle size={16} />
            <span>2</span>
          </button>
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <Bookmark size={16} />
            <span>저장</span>
          </button>
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <Share2 size={16} />
            <span>공유</span>
          </button>
        </div>
      </div>

      {/* Article Title */}
      <h1 className="text-2xl font-bold text-foreground mb-2">
        "부자들은 이것 때문에 60억이나 주고 삽니다" 반포의 그 집, 직접 가보고 깨달았습니다.
      </h1>
      <p className="text-sm text-muted-foreground mb-4">등록일 2025. 03. 26</p>

      {/* Article Stats */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
        <span className="flex items-center gap-1">
          <Eye size={14} /> 123
        </span>
        <span className="flex items-center gap-1">
          <MessageCircle size={14} /> 123
        </span>
        <span className="flex items-center gap-1">
          <Heart size={14} /> 123
        </span>
        <span className="flex items-center gap-1">
          <Share2 size={14} /> 123
        </span>
      </div>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none mb-8">
        <p className="text-foreground leading-relaxed mb-4">
          &quot;전용 84㎡에 60억이요?&quot;
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          솔직히 처음 이 숫자를 접했을 때, 저도 잠깐 멈칫했습니다.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          래미안 원베일리, 전용 84㎡.<br />
          국민평형입니다. 우리가 흔히 아는 그 34평이에요.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          처음 이 숫자를 접했을 때, 솔직히 고개가 가우뚱했어요.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          한강뷰라는 건 압니다. 반포라는 것도 압니다.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          그런데 100평짜리 대형 평수도 아니고,<br />
          우리 부모님 세대가 평생 모아 장만하던 그 34평이 60억이라니.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          이게 단순히 브랜드값이고, 거품이고,<br />
          그냥 비싼 동네니까 비싼 거 아닐까?
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          하지만 원베일리는<br />
          대한민국에서 평당 가격이 가장 높은 대단지 아파트이며,<br />
          강남 일대 아파트의 시세를 리딩하는 단지라는 평가가 따라다닙니다.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          한강뷰 동에서 신고가가 나오면,<br />
          나머지 동들이 줄줄이 따라오는 구조라고 해요.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          저는 이 장면에서 이 질문을 하게 됐습니다.
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-gray-50">
          <p className="text-lg font-medium text-foreground">
            &quot;이 사람들은 대체 뭘 보고,<br />
            이 아파트를 60억씩이나 주고 사는 걸까?&quot;
          </p>
        </blockquote>

        <p className="text-lg font-bold text-foreground mb-4">
          &quot;진짜 부자라고 해서 아무 집이나 사지 않을텐데, 이유가 뭘까?&quot;
        </p>

        <p className="text-foreground leading-relaxed mb-4">
          너무 궁금했고, 그래서 이번에 직접 임장을 다녀왔습니다.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          그럼 지금부터 부자들은 대체 왜 원베일리를 60억을 주고 사는지,<br />
          제가 깨달은 그 이유를 말씀드릴게요.
        </p>

        {/* Main Image */}
        <div className="my-8 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"
            alt="아파트 전경"
            className="w-full h-auto"
          />
        </div>

        <p className="text-foreground leading-relaxed mb-4">
          일단 원베일리에 들어가보니, 가장 먼저 눈에 띈 건...
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          아주 편안한 옷차림의 사람들이었습니다.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          제가 갔을 때 특별히 차려입지 않은 사람들이<br />
          단지 안쪽 중앙구 방향에서 하나둘씩 빠져나오고 있었는데요.<br />
          그냥 집 근처 편의점 다녀올 때 입는 가벼운 옷차림,<br />
          맨발로 슬리퍼, 손에는 힙플리 머니.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          자연스러운 차림 그대로 한강 방향으로 걸어가고 있었습니다.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          마치 그들에게는<br />
          새가 푸르른 시간 맞춰 채비하고, 운거전 찾기고,<br />
          몇 때까지 감해하고, 주차 걱정하며 가는 특별한 날의 행사인 한강이,<br />
          자주 가고 싶어도, 준비가 부담돼서 생각보다 잘 안 가게 되는 한강이,<br />
          그냥 평범한 뒷마당처럼 보였습니다.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          그곳에 사는 부자들은<br />
          지쳐 빠고 소파에서 나기는 것처럼,<br />
          아무 계획 없이 한 잔 들고 잠깐 바람 쐬러 가는 것처럼,<br />
          대단히 준비할 것도 없고, 마음먹을 것도 없이 그냥 슬리퍼 끌고 한강을 즐기는 거죠.
        </p>

        <p className="font-bold text-foreground mb-2">어떻도 돋보적게 날임 머좀어 떨까요?</p>
        <p className="text-foreground leading-relaxed mb-4">
          여의 대부분의 사람들은 얼 시간 전부터 옷차리 피고, 도시락 챙기고, 자리 맡느라 하루를 쏟 거에요.<br />
          하지만 이 동네 사람들은 그냥도 평소처럼 저녁을 먹고, 와인 한 잔 들고 거실 소파에 앉습니다.<br />
          거실 통창이 곧 VIP석이거든요.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          일반 사람들에게 한강뷰는 &quot;한 번 마음먹고 가는 순간&quot;이지만<br />
          여기 거주민들에게는 &quot;거실 커튼을 여는 순간&quot; 입니다.
        </p>
      </article>

      {/* Comments Section */}
      <div className="border-t border-border pt-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-foreground">댓글 21</h3>
          <div className="flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground">내 댓글</button>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              추천순 <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Comment Input */}
        <div className="mb-8">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="댓글을 남겨주세요"
            className="w-full p-4 border border-border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
            rows={3}
          />
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="pb-6 border-b border-border">
              {/* Comment Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-muted-foreground">
                    순
                  </div>
                  <span className="font-medium text-foreground">{comment.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{comment.date}</span>
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>

              {/* Comment Content */}
              <p className="text-sm text-foreground mb-4 leading-relaxed">{comment.content}</p>

              {/* Comment Actions */}
              <div className="flex items-center justify-between">
                <button className="text-sm text-primary hover:underline">답글</button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  추천 {comment.likes} <ThumbsUp size={14} />
                </button>
              </div>

              {/* Reply Input */}
              <div className="mt-4 pl-4 border-l-2 border-border">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="답글을 남겨주세요"
                  className="w-full p-3 border border-border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                  rows={2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
