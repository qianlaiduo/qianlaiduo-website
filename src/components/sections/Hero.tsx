'use client';

import { ParticleBackground } from '../ui-custom/ParticleBackground';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a] to-[#0a0e1a]" />
      <div className="absolute inset-0 bg-grid" />

      {/* 光晕效果 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl" />

      {/* 粒子背景 */}
      <ParticleBackground />

      {/* 内容 */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] mb-8">
          <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
          <span className="text-[#d4af37] text-sm font-medium">
            AI赋能保险 · 科技驱动增长
          </span>
        </div>

        <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="block text-[#f1f5f9]">钱来多</span>
          <span className="block gold-gradient-text mt-2">个人品牌</span>
        </h1>

        <p
          className="reveal text-lg md:text-xl lg:text-2xl text-[#94a3b8] mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ transitionDelay: '0.2s' }}
        >
          AI赋能保险 · 让科技成为你的竞争力
          <br className="hidden md:block" />
          <span className="text-[#cbd5e1]">
            十年保险深耕 + AI实战落地，助你在新时代抢占先机
          </span>
        </p>

        <div
          className="reveal flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ transitionDelay: '0.4s' }}
        >
          <a href="#services" className="btn-gold text-base">
            了解我的服务
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline-gold text-base">
            联系合作
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        {/* 数据亮点 */}
        <div
          className="reveal grid grid-cols-3 gap-6 md:gap-12 mt-20 max-w-2xl mx-auto"
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gold-gradient-text mb-1">
              10年+
            </div>
            <div className="text-[#94a3b8] text-sm md:text-base">行业经验</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gold-gradient-text mb-1">
              1000+
            </div>
            <div className="text-[#94a3b8] text-sm md:text-base">服务客户</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gold-gradient-text mb-1">
              100+
            </div>
            <div className="text-[#94a3b8] text-sm md:text-base">AI学员</div>
          </div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-[#64748b] animate-bounce">
          <span className="text-xs">向下滚动</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
