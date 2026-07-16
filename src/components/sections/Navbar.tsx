'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#about', label: '关于我' },
  { href: '#services', label: '我的服务' },
  { href: '#advantages', label: '为什么选择我' },
  { href: '#contact', label: '联系我' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-[rgba(212,175,55,0.1)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center text-[#0a0e1a] font-bold text-lg shadow-lg shadow-[rgba(212,175,55,0.3)] group-hover:shadow-[rgba(212,175,55,0.5)] transition-shadow">
            钱
          </div>
          <span className="text-xl font-bold gold-gradient-text">钱来多</span>
        </a>

        {/* 桌面导航 */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#94a3b8] hover:text-[#d4af37] transition-colors text-sm font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="#contact" className="btn-gold text-sm !py-2 !px-5">
            联系合作
          </a>
        </div>

        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden text-[#d4af37] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="菜单"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-[rgba(212,175,55,0.1)] mt-3">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#94a3b8] hover:text-[#d4af37] transition-colors text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-gold text-sm !w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              联系合作
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
