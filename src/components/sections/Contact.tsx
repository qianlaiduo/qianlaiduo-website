'use client';

const contacts = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: '电话 / 微信',
    value: '15211094685',
    subValue: '钱磊（主号）',
    type: 'phone',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    label: '微信 2',
    value: '15388008792',
    subValue: '添加备用号',
    type: 'phone',
  },
];

const infoItems = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: '公司名称',
    value: '湖南钱来多科技有限公司',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: '所在地',
    value: '湖南 · 长沙',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a] to-[#0a0e1a]" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* 光晕 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] mb-5">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <span className="text-[#d4af37] text-xs font-medium tracking-wider">
              CONTACT ME
            </span>
          </div>
          <h2 className="reveal text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            联系<span className="gold-gradient-text">我</span>
          </h2>
          <p className="reveal text-[#94a3b8] text-lg max-w-xl mx-auto">
            期待与你合作，共同探索AI时代的保险新机遇
          </p>
        </div>

        {/* 联系方式卡片 */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {contacts.map((contact, index) => (
            <div
              key={contact.label}
              className="reveal-scale group relative rounded-2xl p-8 border border-[rgba(212,175,55,0.2)] bg-gradient-to-br from-[rgba(212,175,55,0.06)] to-[rgba(15,23,42,0.6)] backdrop-blur-sm transition-all duration-500 hover:border-[rgba(212,175,55,0.5)] hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:-translate-y-1"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* 图标 */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(212,175,55,0.2)] to-[rgba(212,175,55,0.05)] flex items-center justify-center mb-5 text-[#d4af37] group-hover:scale-110 transition-transform duration-500">
                <div className="w-7 h-7">{contact.icon}</div>
              </div>

              {/* 标签 */}
              <p className="text-[#94a3b8] text-sm mb-2">{contact.label}</p>

              {/* 号码 */}
              <p className="text-2xl md:text-3xl font-bold text-[#f1f5f9] mb-1 group-hover:text-[#d4af37] transition-colors">
                {contact.value}
              </p>
              <p className="text-[#64748b] text-sm">{contact.subValue}</p>

              {/* 按钮 */}
              <a
                href={`tel:${contact.value}`}
                className="mt-5 inline-flex items-center gap-2 text-[#d4af37] text-sm font-medium group/link"
              >
                立即拨打
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover/link:translate-x-1 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* 公司信息 */}
        <div className="reveal grid md:grid-cols-2 gap-4 mb-12">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-5 rounded-xl bg-[rgba(15,23,42,0.5)] border border-[rgba(212,175,55,0.1)]"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[#d4af37] flex-shrink-0">
                <div className="w-5 h-5">{item.icon}</div>
              </div>
              <div>
                <p className="text-[#64748b] text-xs mb-0.5">{item.label}</p>
                <p className="text-[#f1f5f9] font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 区域 */}
        <div className="reveal-scale text-center">
          <div className="inline-block rounded-2xl p-8 md:p-10 bg-gradient-to-r from-[rgba(212,175,55,0.08)] via-[rgba(56,189,248,0.08)] to-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)]">
            <h3 className="text-xl md:text-2xl font-bold text-[#f1f5f9] mb-3">
              准备好开启你的AI保险之路了吗？
            </h3>
            <p className="text-[#94a3b8] mb-6 max-w-lg mx-auto">
              添加微信即可获得免费AI工具包一份，以及保险行业AI落地咨询
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:15211094685" className="btn-gold w-full sm:w-auto">
                立即咨询
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a
                href="mailto:contact@qianlaiduo.com"
                className="btn-outline-gold w-full sm:w-auto"
              >
                发送邮件
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
          </div>
        </div>
      </div>
    </section>
  );
}
