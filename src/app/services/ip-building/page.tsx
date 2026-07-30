import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';

export default function IPBuildingPage() {
  return (
    <ServiceDetailLayout
      title="自媒体 IP 打造"
      subtitle="从 0 到 1 构建你的个人品牌影响力"
      icon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      }
    >
      {/* Hero 区域 */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(212,175,55,0.05)] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] mb-6">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <span className="text-[#d4af37] text-xs font-medium tracking-wider">
              IP BUILDING
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#f1f5f9] mb-6">
            自媒体<span className="gold-gradient-text">IP 打造</span>
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto">
            从定位到变现，全流程指导你打造高价值个人 IP
          </p>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            服务流程
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '精准定位', desc: '找到你的差异化优势，明确目标受众' },
              { step: '02', title: '内容策划', desc: '制定内容策略，打造爆款内容模板' },
              { step: '03', title: '运营增长', desc: '多平台运营策略，快速积累粉丝' },
              { step: '04', title: '商业变现', desc: '设计变现路径，实现商业价值' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-black gold-gradient-text mb-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例展示位 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-4">
            成功案例
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">已帮助 100+ 保险人成功打造个人 IP</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center"
              >
                <span className="text-[#64748b]">案例展示位 {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务套餐 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            服务套餐
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: '基础版', price: '2999', features: ['IP 定位咨询', '内容模板 5 套', '运营指导 1 个月'] },
              { name: '标准版', price: '5999', features: ['IP 定位咨询', '内容模板 15 套', '运营指导 3 个月', '数据分析报告'] },
              { name: '尊享版', price: '9999', features: ['IP 定位咨询', '内容模板不限', '运营指导 6 个月', '数据分析报告', '1 对 1 辅导'] },
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl border transition-all ${
                  index === 1
                    ? 'bg-[rgba(212,175,55,0.08)] border-[rgba(212,175,55,0.4)] scale-105'
                    : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)]'
                }`}
              >
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold gold-gradient-text mb-6">
                  ¥{plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[#94a3b8] text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a0e1a] font-bold hover:shadow-lg hover:shadow-[rgba(212,175,55,0.3)] transition-all">
                  立即咨询
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
}
