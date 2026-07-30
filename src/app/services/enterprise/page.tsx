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
                desc: '从豆包基础操作到智能体搭建，理论 + 实操 + 效果评估。9 个自研工具的搭建过程全拆解，确保团队真正掌握 AI 应用能力，提升整体工作效率。',
                features: ['豆包/扣子基础操作', '智能体搭建实战', '9 个自研工具拆解', '效果评估跟踪'],
              },
              {
                title: '流程自动化',
                desc: '客户跟进自动化（催访行动令每日推优先级 + 话术）、报表自动生成、智能客服。用 AI 自动化重复性工作，释放人力专注于高价值任务，降低人力成本 30% 以上。',
                features: ['催访行动令自动化', '报表自动生成', '智能客服系统', '营销流程自动化'],
              },
              {
                title: '客户管理系统',
                desc: '微信截图→AI 识别→自动建档（赋能工作台），客户画像分析，智能推荐。AI 驱动的智能客户管理，从获客到转化全流程优化，提升客户转化率和留存率。',
                features: ['赋能工作台自动建档', '客户画像分析', '智能推荐系统', '流失预警'],
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(56,189,248,0.15)] hover:border-[rgba(56,189,248,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-4">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">{item.desc}</p>
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

      {/* 核心定位 */}
      <section className="py-16 md:py-24 bg-[rgba(212,175,55,0.05)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6">
            核心定位
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)]">
              <div className="text-[#d4af37] text-sm font-bold mb-2">核心理念</div>
              <p className="text-[#f1f5f9] text-lg leading-relaxed">
                "一个人+AI=一支队伍"，用 AI 替掉获客/内容/管理/跟进/进化 5 个部门
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(56,189,248,0.15)]">
              <div className="text-[#38bdf8] text-sm font-bold mb-2">Slogan</div>
              <p className="text-[#f1f5f9] text-lg leading-relaxed">
                保险人的全能 AI 搭档：从获客到成交，一个工具全搞定
              </p>
            </div>
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
              { step: '01', title: '需求调研', desc: '深入了解企业现状和痛点' },
              { step: '02', title: '方案设计', desc: '定制专属 AI 解决方案' },
              { step: '03', title: '实施部署', desc: '系统部署 + 团队培训' },
              { step: '04', title: '持续优化', desc: '效果跟踪 + 持续迭代' },
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

      {/* 成功案例 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-4">
            成功案例
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">已为 50+ 企业提供 AI 赋能服务</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '某保险公司省级分公司',
                bg: '背景',
                pain: '痛点',
                painDesc: '团队 200 人，AI 应用率不足 10%，获客成本高',
                solution: 'AI 解决方案',
                solutionDesc: '全员 AI 培训 + 智能客服系统 + 自动化营销流程',
                result: '实施效果',
                resultDesc: '3 个月 AI 应用率达 85%，获客成本降低 40%',
              },
              {
                title: '某保险经纪公司总部',
                bg: '背景',
                pain: '痛点',
                painDesc: '客户管理混乱，转化率仅 5%，流失率高',
                solution: 'AI 解决方案',
                solutionDesc: 'AI 客户管理系统 + 画像分析 + 智能推荐',
                result: '实施效果',
                resultDesc: '6 个月转化率提升至 18%，客户留存率提高 35%',
              },
              {
                title: '某个险团队（50 人）',
                bg: '背景',
                pain: '痛点',
                painDesc: '人均产能低，新人成长慢，离职率高',
                solution: 'AI 解决方案',
                solutionDesc: 'AI 话术库 + 智能陪练 + 自动化跟进',
                result: '实施效果',
                resultDesc: '人均产能提升 60%，新人开单周期缩短 50%',
              },
              {
                title: '某跨界合作企业',
                bg: '背景',
                pain: '痛点',
                painDesc: '传统企业转型保险，缺乏行业经验和客户资源',
                solution: 'AI 解决方案',
                solutionDesc: 'AI 获客系统 + 内容营销 + 数据分析',
                result: '实施效果',
                resultDesc: '6 个月积累客户 3000+，月均保费突破 100 万',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-[#f1f5f9] mb-6">{item.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[#d4af37] text-xs font-bold mb-1">{item.bg}</div>
                    <p className="text-[#94a3b8] text-sm">{item.painDesc}</p>
                  </div>
                  <div>
                    <div className="text-[#38bdf8] text-xs font-bold mb-1">{item.solution}</div>
                    <p className="text-[#94a3b8] text-sm">{item.solutionDesc}</p>
                  </div>
                  <div>
                    <div className="text-[#10b981] text-xs font-bold mb-1">{item.result}</div>
                    <p className="text-[#94a3b8] text-sm">{item.resultDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务套餐 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-4">
            服务套餐
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">按需选择，灵活合作</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: '轻量版',
                price: '价格面议',
                desc: '适合小型团队，快速上手 AI 工具',
                features: [
                  'AI 基础工具培训（2 天）',
                  '业务场景应用指导',
                  '1 个月线上答疑',
                  '培训资料包',
                ],
              },
              {
                name: '标准版',
                price: '价格面议',
                desc: '适合中型企业，系统化 AI 升级',
                features: [
                  'AI 系统培训（5 天）',
                  '流程自动化方案设计',
                  '客户管理系统部署',
                  '3 个月技术支持',
                  '效果评估报告',
                ],
                popular: true,
              },
              {
                name: '定制版',
                price: '价格面议',
                desc: '适合大型企业，全方位 AI 转型',
                features: [
                  '定制 AI 解决方案',
                  '全流程系统部署',
                  '专属技术团队支持',
                  '6 个月持续优化',
                  '定期效果复盘',
                  '优先响应服务',
                ],
              },
            ].map((item, index) => (
              <div
                key={item.name}
                className={`p-8 rounded-2xl border text-center ${
                  item.popular
                    ? 'bg-[rgba(212,175,55,0.08)] border-[rgba(212,175,55,0.4)]'
                    : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)]'
                } hover:border-[rgba(212,175,55,0.4)] transition-all`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {item.popular && (
                  <div className="inline-block px-3 py-1 rounded-full bg-[rgba(212,175,55,0.2)] text-[#d4af37] text-xs font-bold mb-4">
                    推荐
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{item.name}</h3>
                <p className="text-[#d4af37] text-lg font-bold mb-2">{item.price}</p>
                <p className="text-[#94a3b8] text-sm mb-6">{item.desc}</p>
                <ul className="space-y-2 text-left">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[#94a3b8] text-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" className="mt-0.5 flex-shrink-0">
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

      {/* 企业咨询 */}
      <section className="py-16 md:py-24 bg-[rgba(56,189,248,0.05)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6">
            预约免费企业诊断
          </h2>
          <p className="text-[#94a3b8] mb-4">
            添加微信 15211094685 预约免费企业诊断
          </p>
          <p className="text-[#d4af37] text-lg mb-8">
            微信：<span className="font-bold">15211094685</span>
          </p>
          <a
            href="https://weixin.qq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-bold text-lg hover:shadow-lg hover:shadow-[rgba(56,189,248,0.3)] transition-all"
          >
            添加微信咨询
          </a>
        </div>
      </section>
    </ServiceDetailLayout>
  );
}
