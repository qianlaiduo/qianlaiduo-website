import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';

export default function EnterprisePage() {
  return (
    <ServiceDetailLayout
      title="AI 企业赋能"
      subtitle="用 AI 提升企业效率，降低运营成本"
      icon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      }
    >
      {/* Hero 区域 */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(56,189,248,0.05)] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(56,189,248,0.08)] border border-[rgba(56,189,248,0.15)] mb-6">
            <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full" />
            <span className="text-[#38bdf8] text-xs font-medium tracking-wider">
              ENTERPRISE AI
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#f1f5f9] mb-6">
            AI<span className="text-[#38bdf8]">企业赋能</span>
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto">
            为保险企业提供全方位 AI 解决方案
          </p>
        </div>
      </section>

      {/* 服务内容 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            服务内容
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '团队 AI 培训',
                desc: '为企业团队提供系统化 AI 培训，提升全员 AI 应用能力',
                features: ['基础 AI 工具培训', '业务场景应用', '实战案例演练', '效果评估跟踪'],
              },
              {
                title: '流程自动化',
                desc: '用 AI 自动化重复性工作，提升运营效率',
                features: ['客户跟进自动化', '报表自动生成', '智能客服系统', '数据分析自动化'],
              },
              {
                title: '客户管理系统',
                desc: 'AI 驱动的客户管理，提升客户转化率',
                features: ['客户画像分析', '智能推荐系统', '流失预警', '精准营销'],
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(56,189,248,0.15)] hover:border-[rgba(56,189,248,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-4">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[#94a3b8] text-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作流程 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            合作流程
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '需求调研', desc: '深入了解企业现状和需求' },
              { step: '02', title: '方案设计', desc: '定制专属 AI 解决方案' },
              { step: '03', title: '实施部署', desc: '系统部署 + 团队培训' },
              { step: '04', title: '持续优化', desc: '效果跟踪 + 持续优化' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-black gold-gradient-text mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-[#f1f5f9] mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例展示 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-4">
            成功案例
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">已为 50+ 企业提供 AI 赋能服务</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[16/9] rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center"
              >
                <span className="text-[#64748b]">案例展示位 {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作咨询 */}
      <section className="py-16 md:py-24 bg-[rgba(56,189,248,0.05)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6">
            企业咨询
          </h2>
          <p className="text-[#94a3b8] mb-8">
            预约免费企业诊断，获取专属 AI 解决方案
          </p>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-bold text-lg hover:shadow-lg hover:shadow-[rgba(56,189,248,0.3)] transition-all">
            预约诊断
          </button>
        </div>
      </section>
    </ServiceDetailLayout>
  );
}
