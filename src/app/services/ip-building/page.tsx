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
              {
                step: '01',
                title: '精准定位',
                desc: '深度分析你的专业背景、性格特质和目标市场，找到独特的差异化定位。明确 IP 人设方向，让目标客户一眼记住你。',
              },
              {
                step: '02',
                title: '内容策划',
                desc: '根据定位制定内容策略，设计爆款内容模板和选题库。结合 AI 工具批量生成高质量内容，保持稳定的输出频率。',
              },
              {
                step: '03',
                title: '运营增长',
                desc: '制定多平台运营策略（抖音/小红书/视频号等），掌握平台算法逻辑。通过数据反馈持续优化内容，快速积累精准粉丝。',
              },
              {
                step: '04',
                title: '商业变现',
                desc: '设计多元化变现路径（咨询/课程/产品推荐等），建立从流量到收入的完整闭环。让 IP 影响力转化为实际商业价值。',
              },
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
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-4">
            成功案例
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">已帮助 100+ 保险人成功打造个人 IP</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'M 女士',
                background: '前银行理财经理，转行保险 2 年',
                positioning: '家庭保障规划师',
                results: {
                  followers: '1.2 万',
                  customers: '月均获客 15+',
                  conversion: '转化率 8%',
                },
              },
              {
                name: 'T 先生',
                background: '保险团队主管，从业 5 年',
                positioning: '保险人成长导师',
                results: {
                  followers: '3.5 万',
                  customers: '月均获客 30+',
                  conversion: '转化率 12%',
                },
              },
              {
                name: 'L 女士',
                background: '全职妈妈，保险新人',
                positioning: '宝妈保障专家',
                results: {
                  followers: '8000',
                  customers: '月均获客 10+',
                  conversion: '转化率 10%',
                },
              },
            ].map((item, index) => (
              <div
                key={item.name}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5d06a] flex items-center justify-center text-[#0a0e1a] font-bold">
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="text-[#f1f5f9] font-bold">{item.name}</div>
                    <div className="text-[#94a3b8] text-xs">{item.background}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-[#d4af37] text-xs font-medium mb-1">IP 定位</div>
                  <div className="text-[#f1f5f9] text-sm">{item.positioning}</div>
                </div>
                <div className="pt-4 border-t border-[rgba(212,175,55,0.15)]">
                  <div className="text-[#d4af37] text-xs font-medium mb-2">执行 3 个月成果</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#94a3b8]">粉丝数</span>
                      <span className="text-[#f1f5f9] font-medium">{item.results.followers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94a3b8]">月均获客</span>
                      <span className="text-[#f1f5f9] font-medium">{item.results.customers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94a3b8]">转化率</span>
                      <span className="text-[#f1f5f9] font-medium">{item.results.conversion}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP 打造方法论 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            IP 打造方法论
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: '差异化定位法',
                desc: '不是简单地贴标签，而是找到你独特的"人设三角"：专业背景 × 性格特质 × 目标客户需求。三者交汇处就是你的差异化定位，让客户在众多保险人中一眼记住你。',
              },
              {
                title: 'AI 内容流水线',
                desc: '建立标准化的内容生产流程：选题库→AI 生成初稿→人工优化→发布。用 AI 工具将内容创作效率提升 5-10 倍，保持日更不断更，同时保证内容质量。',
              },
              {
                title: '多平台矩阵运营',
                desc: '不同平台有不同的算法逻辑和用户偏好。制定"一源多用"策略：一条核心内容适配抖音/小红书/视频号/公众号等平台，最大化内容价值。',
              },
              {
                title: '数据驱动迭代',
                desc: '建立数据追踪体系：播放量、互动率、转化率等核心指标。每周分析数据，找出高表现内容规律，持续优化内容策略，让增长可复制。',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[rgba(212,175,55,0.15)] flex items-center justify-center text-[#d4af37] text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务套餐 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            服务套餐
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: '基础版',
                price: '2999',
                features: ['IP 定位咨询', '内容模板 5 套', '运营指导 1 个月'],
                recommended: false,
              },
              {
                name: '标准版',
                price: '5999',
                features: ['IP 定位咨询', '内容模板 15 套', '运营指导 3 个月', '数据分析报告'],
                recommended: true,
              },
              {
                name: '尊享版',
                price: '9999',
                features: ['IP 定位咨询', '内容模板不限', '运营指导 6 个月', '数据分析报告', '1 对 1 辅导'],
                recommended: false,
              },
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl border transition-all ${
                  plan.recommended
                    ? 'bg-[rgba(212,175,55,0.08)] border-[rgba(212,175,55,0.4)] scale-105'
                    : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)]'
                }`}
              >
                {plan.recommended && (
                  <div className="inline-block px-3 py-1 rounded-full bg-[#d4af37] text-[#0a0e1a] text-xs font-bold mb-4">
                    推荐
                  </div>
                )}
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
                <a
                  href="https://weixin.qq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a0e1a] font-bold text-center hover:shadow-lg hover:shadow-[rgba(212,175,55,0.3)] transition-all"
                >
                  立即咨询
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-16 md:py-24 bg-[rgba(212,175,55,0.05)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6">
            开始打造你的个人 IP
          </h2>
          <p className="text-[#94a3b8] mb-8">
            添加微信咨询，获取专属 IP 打造方案
          </p>
          <a
            href="https://weixin.qq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a0e1a] font-bold text-lg hover:shadow-lg hover:shadow-[rgba(212,175,55,0.3)] transition-all"
          >
            添加微信咨询
          </a>
        </div>
      </section>
    </ServiceDetailLayout>
  );
}
