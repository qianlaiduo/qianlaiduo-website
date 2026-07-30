'use client';

import { useState, useEffect } from 'react';

interface Message {
  id: string;
  nickname: string;
  content: string;
  timestamp: number;
}

const STORAGE_KEY = 'qianlaiduo_guestbook';

// 预设示例留言
const SAMPLE_MESSAGES: Message[] = [
  {
    id: 'sample-1',
    nickname: '保险同行',
    content: '钱老师的服务太专业了！AI 工具帮我提升了 3 倍效率，强烈推荐给同行们！🔥',
    timestamp: Date.now() - 3600000 * 2,
  },
  {
    id: 'sample-2',
    nickname: '创业小白',
    content: '自媒体 IP 打造课程很实用，从零开始学会了内容创作，现在已经有 500 粉丝了！',
    timestamp: Date.now() - 3600000 * 5,
  },
  {
    id: 'sample-3',
    nickname: '企业 HR',
    content: '公司团队参加了 AI 培训，工作效率明显提升，准备继续合作企业赋能项目。',
    timestamp: Date.now() - 3600000 * 8,
  },
  {
    id: 'sample-4',
    nickname: '匿名访客',
    content: '网站设计很高级，金色风格很有质感！👍',
    timestamp: Date.now() - 3600000 * 12,
  },
  {
    id: 'sample-5',
    nickname: '老客户',
    content: '医疗险报价工具太好用了，帮客户快速对比方案，专业度拉满！',
    timestamp: Date.now() - 3600000 * 24,
  },
];

// 常用表情
const EMOJIS = ['😀', '😄', '😊', '🥰', '😎', '', '😇', '', '😋', '', '👍', '👏', '🔥', '❤️', '✨', '🎉', '💪', '🙏', '😂', '🌟'];

function loadMessages(): Message[] {
  if (typeof window === 'undefined') return SAMPLE_MESSAGES;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load messages:', e);
  }
  return SAMPLE_MESSAGES;
}

function saveMessages(messages: Message[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (e) {
    console.error('Failed to save messages:', e);
  }
}

function formatTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
  if (diff < 604800000) return `${Math.floor(diff / 86400000)}天前`;
  
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [onlineCount] = useState(Math.floor(Math.random() * 5) + 2);

  useEffect(() => {
    setMessages(loadMessages());
  }, []);

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      nickname: nickname.trim() || '匿名访客',
      content: content.trim(),
      timestamp: Date.now(),
    };
    
    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    saveMessages(updatedMessages);
    
    setNickname('');
    setContent('');
    setShowEmojiPicker(false);
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const addEmoji = (emoji: string) => {
    setContent(prev => prev + emoji);
  };

  return (
    <section id="guestbook" className="py-20 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a] to-[#0a0e1a]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题区 */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#f5d06a] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#0a0e1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              访客留言
            </h2>
          </div>
          <p className="text-[#94a3b8] text-lg mb-4">
            留下你的声音，分享你的想法
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.2)]">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-[#94a3b8]">
              当前 <span className="text-[#d4af37] font-semibold">{onlineCount}</span> 人在线
            </span>
          </div>
        </div>

        {/* 留言输入区 */}
        <div className="mb-12 reveal">
          <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-sm rounded-2xl border border-[rgba(212,175,55,0.15)] p-6 shadow-xl">
            <div className="mb-4">
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="你的昵称（可选，不填默认匿名）"
                className="w-full px-4 py-3 bg-[rgba(10,14,26,0.6)] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-[#64748b] focus:outline-none focus:border-[#d4af37] transition-colors"
                maxLength={20}
              />
            </div>
            
            <div className="mb-4 relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="说点什么吧...（200 字以内）"
                className="w-full px-4 py-3 bg-[rgba(10,14,26,0.6)] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-[#64748b] focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                rows={4}
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 text-xs text-[#64748b]">
                {content.length}/200
              </div>
            </div>
            
            {/* 表情选择器 */}
            <div className="mb-4">
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="px-4 py-2 text-sm text-[#94a3b8] hover:text-[#d4af37] transition-colors flex items-center gap-2"
              >
                <span>😊</span>
                <span>表情</span>
              </button>
              
              {showEmojiPicker && (
                <div className="mt-2 p-3 bg-[rgba(10,14,26,0.9)] border border-[rgba(212,175,55,0.2)] rounded-lg grid grid-cols-10 gap-2">
                  {EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => addEmoji(emoji)}
                      className="text-xl hover:scale-125 transition-transform p-1"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* 提交按钮 */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-[#64748b]">
                 留言仅保存在你的浏览器本地
              </div>
              <button
                onClick={handleSubmit}
                disabled={!content.trim()}
                className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f5d06a] text-[#0a0e1a] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                提交留言
              </button>
            </div>
            
            {/* 成功提示 */}
            {showSuccess && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center animate-fade-in">
                ✅ 留言成功！感谢你的分享！
              </div>
            )}
          </div>
        </div>

        {/* 留言展示区 */}
        <div className="space-y-4 reveal">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              最新留言 <span className="text-[#94a3b8] text-base font-normal">({messages.length})</span>
            </h3>
          </div>
          
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className="bg-[rgba(15,23,42,0.6)] backdrop-blur-sm rounded-xl border border-[rgba(212,175,55,0.1)] p-5 hover:border-[rgba(212,175,55,0.3)] transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5d06a] flex items-center justify-center text-[#0a0e1a] font-bold text-sm">
                      {message.nickname.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                        {message.nickname}
                      </div>
                      <div className="text-xs text-[#64748b]">
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[#cbd5e1] leading-relaxed pl-13">
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
