'use client';

const advantages = [
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
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: '行业深度',
    subtitle: '10年保险老兵',
    description:
      '深耕保险行业10年+，服务过1000+家庭客户。懂保险、懂销售、懂保险人的真实痛点，不做空谈的理论派。',
    highlights: ['1000+客户服务', '单日4单1.7万保费', '平安星级讲师'],
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: '技术前沿',
    subtitle: '9个自研AI工具',
    description:
      '不是教你AI概念，是带你照着我的工具，一步一步搭出自己的数字员工团队。9个自研AI工具覆盖获客→内容→客户管理→跟进→学习全链路。',
    highlights: ['全链路AI赋能', '持续迭代更新', '工具+方法双输出'],
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: '实战导向',
    subtitle: '只给方案不做空话',
    description:
      '所有课程和服务均来自真实业务场景的提炼。学完就能用，用完就有结果。拒绝纸上谈兵，只做结果导向。',
    highlights: ['实战案例教学', '一对一辅导', '可复制方法论'],
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="relative py-24 md:py-32 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1424] to-[#0a0e1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

      {/* 装饰光晕 */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-[#38bdf8]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] mb-5">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <span className="text-[#d4af37] text-xs font-medium tracking-wider">
              WHY CHOOSE ME
            </span>
          </div>
          <h2 className="reveal text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            为什么选择<span className="gold-gradient-text">我</span>
          </h2>
          <p className="reveal text-[#94a3b8] text-lg max-w-xl mx-auto">
            保险老兵 + AI先锋，给你最实战的解决方案
          </p>
        </div>

        {/* 三大优势 */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv, index) => (
            <div
              key={adv.title}
              className="reveal-scale relative group"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* 连接线（仅中间和右侧） */}
              {index < advantages.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[rgba(212,175,55,0.4)] to-transparent z-0" />
              )}

              {/* 卡片内容 */}
              <div className="relative h-full rounded-2xl p-8 border border-[rgba(212,175,55,0.12)] bg-gradient-to-br from-[rgba(15,23,42,0.8)] to-[rgba(10,14,26,0.8)] backdrop-blur-sm transition-all duration-500 group-hover:border-[rgba(212,175,55,0.35)] group-hover:-translate-y-2">
                {/* 序号 */}
                <div className="absolute top-6 right-6 text-6xl font-black text-[rgba(212,175,55,0.06)] leading-none select-none">
                  0{index + 1}
                </div>

                {/* 图标 */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(212,175,55,0.05)] flex items-center justify-center mb-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8">{adv.icon}</div>
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold text-[#f1f5f9] mb-2">
                  {adv.title}
                </h3>
                <p className="text-[#d4af37] text-sm font-medium mb-4">
                  {adv.subtitle}
                </p>

                {/* 描述 */}
                <p className="text-[#94a3b8] leading-relaxed mb-6">
                  {adv.description}
                </p>

                {/* 亮点列表 */}
                <ul className="space-y-2">
                  {adv.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-[#cbd5e1] text-sm"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* 底部装饰 */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
