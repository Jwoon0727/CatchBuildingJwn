'use client'

import { useState } from 'react'
import Header from '@/components/header'
import { 
  ChevronDown, 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  List,
  ListOrdered,
  Minus,
  Quote,
  Image,
  Table,
  Link,
  Upload
} from 'lucide-react'

const topics = [
  { value: '', label: '주제 선택' },
  { value: 'investment', label: '부동산 투자' },
  { value: 'home', label: '내집마련' },
  { value: 'finance', label: '재테크' },
  { value: 'auction', label: '경매/학습' },
  { value: 'loan', label: '신청/대출' },
  { value: 'tax', label: '세금/절세' },
  { value: 'other', label: '기타' },
]

const subTopics = [
  { value: '', label: '하위 주제 선택' },
  { value: 'tip', label: '노하우' },
  { value: 'review', label: '후기' },
  { value: 'question', label: '질문' },
  { value: 'info', label: '정보공유' },
]

export default function CommunityWritePage() {
  const [topic, setTopic] = useState('')
  const [subTopic, setSubTopic] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-16">
        <div className="max-w-[75rem] mx-auto px-4">
          {/* Topic Selects */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                주제<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-3 bg-secondary/50 border-0 rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {topics.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
                <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                하위 주제<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={subTopic}
                  onChange={(e) => setSubTopic(e.target.value)}
                  className="w-full px-4 py-3 bg-secondary/50 border-0 rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {subTopics.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
                <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Title Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              주제<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해 주세요."
              className="w-full px-4 py-3 bg-secondary/50 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Content Editor */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              내용<span className="text-red-500">*</span>
            </label>
            <div className="border border-border rounded-lg overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-1 p-2 border-b border-border bg-white flex-wrap">
                {/* Font Size Dropdown */}
                <div className="relative">
                  <select className="px-3 py-1.5 text-sm border border-border rounded appearance-none cursor-pointer pr-8 focus:outline-none">
                    <option>기본</option>
                    <option>작게</option>
                    <option>크게</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>

                {/* AI Dropdown */}
                <div className="relative">
                  <select className="px-3 py-1.5 text-sm border border-border rounded appearance-none cursor-pointer pr-8 focus:outline-none">
                    <option>AI</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>

                <div className="w-px h-6 bg-border mx-1" />

                {/* Text Formatting */}
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Bold size={16} />
                </button>
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Italic size={16} />
                </button>
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Underline size={16} />
                </button>

                <div className="w-px h-6 bg-border mx-1" />

                {/* Text Color */}
                <button className="p-2 hover:bg-secondary rounded transition-colors flex items-center gap-1">
                  <span className="text-sm font-medium">A</span>
                  <ChevronDown size={12} />
                </button>

                {/* Highlight Color */}
                <button className="p-2 hover:bg-secondary rounded transition-colors flex items-center gap-1">
                  <span className="text-sm font-medium px-1 bg-yellow-200">A</span>
                  <ChevronDown size={12} />
                </button>

                <div className="w-px h-6 bg-border mx-1" />

                {/* Alignment */}
                <button className="p-2 hover:bg-secondary rounded transition-colors flex items-center gap-1">
                  <AlignLeft size={16} />
                  <ChevronDown size={12} />
                </button>

                {/* Lists */}
                <button className="p-2 hover:bg-secondary rounded transition-colors flex items-center gap-1">
                  <List size={16} />
                  <ChevronDown size={12} />
                </button>

                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <ListOrdered size={16} />
                </button>

                <div className="w-px h-6 bg-border mx-1" />

                {/* Other Tools */}
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Minus size={16} />
                </button>
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Quote size={16} />
                </button>
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Image size={16} />
                </button>
                <button className="p-2 hover:bg-secondary rounded transition-colors flex items-center gap-1">
                  <Table size={16} />
                  <ChevronDown size={12} />
                </button>
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Link size={16} />
                </button>
              </div>

              {/* Content Area */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력해 주세요."
                className="w-full h-80 p-4 text-sm resize-none focus:outline-none"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <button className="w-full py-4 border-2 border-dashed border-border rounded-lg text-sm text-muted-foreground hover:bg-secondary/30 transition-colors flex items-center justify-center gap-2">
              <Upload size={18} />
              파일 업로드
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button className="px-8 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              임시 저장
            </button>
            <button className="px-8 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              저장
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
