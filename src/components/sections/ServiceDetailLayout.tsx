'use client';

import { useRouter } from 'next/navigation';

interface ServiceDetailLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export function ServiceDetailLayout({ children, title, subtitle, icon }: ServiceDetailLayoutProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* 背景装饰 */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a] to-[#0a0e1a]" />
      <div className="fixed inset-0 bg-grid opacity-30" />

      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[rgba(212,175,55,0.15)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center text-[#0a0e1a] font-bold text-lg shadow-lg shadow-[rgba(212,175,55,0.3)]">
              钱
            </div>
            <span className="text-[#f1f5f9] font-bold text-lg group-hover:text-[#d4af37] transition-colors">
              钱来多
            </span>
          </button>

          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-[#94a3b8] hover:text-[#d4af37] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            返回首页
          </button>
        </div>
      </nav>

      {/* 内容区 */}
      <div className="relative z-10 pt-16">
        {children}
      </div>

      {/* 页脚 CTA */}
      <footer className="relative z-10 border-t border-[rgba(212,175,55,0.15)] bg-[rgba(10,14,26,0.8)]">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#f1f5f9] mb-4">
            准备好开始了吗？
          </h3>
          <p className="text-[#94a3b8] mb-8 max-w-xl mx-auto">
            立即咨询，获取专属方案
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                router.push('/#contact');
              }}
              className="btn-gold"
            >
              联系咨询
            </a>
            <button
              onClick={() => router.push('/')}
              className="btn-outline-gold"
            >
              了解更多服务
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
