'use client';

const socialLinks = [
  {
    name: '微信',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.533c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
      </svg>
    ),
  },
  {
    name: '抖音',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: '小红书',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    name: '知乎',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0H5.72zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.168H8.442c-.074.32-.142.64-.204.96h4.269s.137 1.18-.403 1.18H7.89c-.08.244-.16.487-.242.73h3.873c-.07 1.2-.605 2.093-1.845 2.645v2.78c1.364-.372 2.479-1.213 3.088-2.475h1.78v-1.7h-1.06c.173-.316.332-.646.474-.985h2.185v-1.72h-2.65c.076-.313.144-.63.203-.95h2.905v-1.73h-3.105c.052-.32.088-.643.11-1.03h3.372v-1.77H12.69c-.018-.344-.045-.688-.088-1.03h3.927V4.078H7.685z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(212,175,55,0.1)]">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] to-[#0d1424]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* 品牌区 */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center text-[#0a0e1a] font-bold text-xl shadow-lg shadow-[rgba(212,175,55,0.3)] group-hover:shadow-[rgba(212,175,55,0.5)] transition-shadow">
                钱
              </div>
              <div>
                <div className="text-2xl font-bold gold-gradient-text">
                  钱来多
                </div>
                <div className="text-[#64748b] text-xs">Qian Lai Duo</div>
              </div>
            </a>
            <p className="text-[#94a3b8] leading-relaxed max-w-md mb-6">
              AI赋能保险 · 让科技成为你的竞争力。十年保险深耕经验，专注于AI在保险行业的实战落地，帮助保险人用科技提升效率、打造个人品牌。
            </p>
            {/* 社交媒体 */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  title={social.name}
                  className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center text-[#94a3b8] hover:text-[#d4af37] hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-5 h-5">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-[#f1f5f9] font-bold mb-4">快速导航</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-[#94a3b8] hover:text-[#d4af37] transition-colors text-sm"
                >
                  关于我
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#94a3b8] hover:text-[#d4af37] transition-colors text-sm"
                >
                  我的服务
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  className="text-[#94a3b8] hover:text-[#d4af37] transition-colors text-sm"
                >
                  为什么选择我
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#94a3b8] hover:text-[#d4af37] transition-colors text-sm"
                >
                  联系我
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-[rgba(212,175,55,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-sm text-center md:text-left">
            © {new Date().getFullYear()} 湖南钱来多科技有限公司 · 钱来多个人品牌
          </p>
          <p className="text-[#64748b] text-sm">
            让AI成为保险人的核心竞争力
          </p>
        </div>
      </div>
    </footer>
  );
}
