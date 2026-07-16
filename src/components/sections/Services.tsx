'use client';

const services = [
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
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: '自媒体IP打造',
    description:
      '帮保险人打造个人IP，用AI内容工具实现高效获客。从账号定位到内容生产，全流程AI赋能。',
    features: ['账号定位', 'AI文案', '短视频脚本', '获客转化'],
    color: '#d4af37',
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
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'AI实战培训',
    description:
      '保险人AI实战课程，从文案到获客全链路AI赋能。零基础也能快速上手，用AI为你的保险事业加速。',
    features: ['AI工具实操', '文案生成', '客户画像', '智能跟进'],
    color: '#38bdf8',
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: '保险服务',
    description:
      '专业医疗险/车险方案，家庭保障规划。1000+客户服务经验，为你量身定制最适合的保障方案。',
    features: ['医疗险', '车险', '家庭保障', '理赔协助'],
    color: '#a78bfa',
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
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'AI企业赋能',
    description:
      '为保险团队提供AI工具落地+自动化流程解决方案。从团队培训到系统搭建，全面提升团队战斗力。',
    features: ['团队培训', '流程自动化', '客户管理', '数据看板'],
    color: '#34d399',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a]/50 to-[#0a0e1a]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] mb-5">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <span className="text-[#d4af37] text-xs font-medium tracking-wider">
              MY SERVICES
            </span>
          </div>
          <h2 className="reveal text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            我的<span className="gold-gradient-text">服务</span>
          </h2>
          <p className="reveal text-[#94a3b8] text-lg max-w-xl mx-auto">
            四大业务线，全方位助力保险从业者升级转型
          </p>
        </div>

        {/* 服务卡片 */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal-scale group relative rounded-2xl p-8 border border-[rgba(212,175,55,0.15)] bg-[rgba(15,23,42,0.5)] backdrop-blur-sm transition-all duration-500 hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(15,23,42,0.8)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[rgba(212,175,55,0.1)]"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* 顶部装饰线 */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.color}40, transparent)`,
                }}
              />

              {/* 图标 */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `${service.color}15`,
                  color: service.color,
                  boxShadow: `0 0 30px ${service.color}10`,
                }}
              >
                <div className="w-7 h-7">{service.icon}</div>
              </div>

              {/* 标题 */}
              <h3 className="text-xl md:text-2xl font-bold text-[#f1f5f9] mb-3 group-hover:text-[#d4af37] transition-colors">
                {service.title}
              </h3>

              {/* 描述 */}
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* 特性标签 */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.1)] text-[#94a3b8] text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* 箭头指示器 */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
