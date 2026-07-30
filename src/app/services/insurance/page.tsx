import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';

export default function InsurancePage() {
  return (
    <ServiceDetailLayout
      title="保险服务"
      subtitle="专业保险规划，守护你的未来"
      icon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
              INSURANCE SERVICE
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#f1f5f9] mb-6">
            专业<span className="gold-gradient-text">保险服务</span>
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto">
            10 年 + 行业经验，为你量身定制保障方案
          </p>
        </div>
      </section>

      {/* 服务范围 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            服务范围
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '医疗险',
                desc: '涵盖百万医疗、高端医疗、少儿医疗等多种类型。帮你筛选免赔额低、报销比例高、续保条件优的产品，解决看病贵的后顾之忧。',
                icon: '🏥',
              },
              {
                title: '重疾险',
                desc: '包括多次赔付、消费型、储蓄型等不同形态。根据预算和需求配置合适保额，确保确诊即赔，不影响家庭生活质量。',
                icon: '🛡️',
              },
              {
                title: '车险',
                desc: '提供交强险、商业险一站式服务。快速报价、对比多家方案，出险后全程协助理赔，让你省时省心省力。',
                icon: '🚗',
              },
              {
                title: '家庭保障',
                desc: '从全家保障规划到教育金、养老金配置。根据家庭结构和财务状况，设计科学的保障体系，守护每一代人的未来。',
                icon: '‍👩‍👧‍👦',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#f1f5f9] mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 投保流程 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            投保流程
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '01', title: '需求分析', desc: '了解你的保障需求和预算' },
              { step: '02', title: '方案定制', desc: '量身定制保障方案' },
              { step: '03', title: '产品对比', desc: '对比多家产品优劣' },
              { step: '04', title: '投保办理', desc: '协助完成投保手续' },
              { step: '05', title: '售后服务', desc: '理赔协助 + 保单管理' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-black gold-gradient-text mb-3">{item.step}</div>
                <h3 className="text-base font-bold text-[#f1f5f9] mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 理赔指南 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-4">
            理赔指南
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">5 步完成理赔，全程协助</p>
          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { step: '01', title: '出险报案', desc: '第一时间拨打保险公司客服电话报案，说明事故情况和保单信息' },
              { step: '02', title: '准备材料', desc: '根据理赔类型准备相关材料：病历、发票、检查报告、事故证明等' },
              { step: '03', title: '提交申请', desc: '将完整材料提交给保险公司，可选择线上上传或线下递交' },
              { step: '04', title: '审核赔付', desc: '保险公司审核材料，一般 3-10 个工作日出具理赔结论' },
              { step: '05', title: '到账确认', desc: '理赔款打入指定银行账户，确认金额无误后完成理赔' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-black gold-gradient-text mb-2">{item.step}</div>
                <h3 className="text-sm font-bold text-[#f1f5f9] mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 为什么选择我 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            为什么选择我
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: '10 年 + 经验', desc: '深耕保险行业，熟悉各类产品条款和理赔流程' },
              { title: '1000+ 客户', desc: '服务超千位客户，口碑良好，转介绍率高' },
              { title: '理赔协助', desc: '全程协助理赔，从报案到到账一站式服务' },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold gold-gradient-text mb-3">
                  {item.title}
                </div>
                <p className="text-[#94a3b8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            常见问题
          </h2>
          <div className="space-y-4">
            {[
              {
                q: '医疗险免赔额怎么选？',
                a: '0 免赔产品保费稍高但理赔门槛低，1 万免赔保费更实惠。推荐 0 免赔，理赔体验好能带来转介绍。核心观点：医疗险不用做长远规划，10 年后产品形态完全不同，现在最重要的是这几年找个合适的。',
              },
              {
                q: '续保条件怎么看？',
                a: '续保看规模非文字，更重要的是"能否升级"而非"能否续保"。四五年前的产品没更新就等于被淘汰。我会优先推荐保证续保的产品，避免因理赔或健康变化被拒保。',
              },
              {
                q: '家庭投保有优惠吗？',
                a: '平安家庭费率：1 人 100%/2 人 95%/3 人 90%/4 人 +85%。很多产品支持家庭单投保，共享免赔额，保费更优惠。我会帮你计算最优方案。',
              },
              {
                q: '网上买的保险和线下有什么区别？',
                a: '不是产品不好是体况变了，网上买的版本太老了。线下服务能提供专业的需求分析和理赔协助，这是线上无法替代的。',
              },
              {
                q: '非标体能买吗？',
                a: '先解决准入问题再谈产品对比，有不用健康告知的产品可选。既往症解释关键："先问后答"——客户问"XX 能报吗"别直接说能或不能，先问"之前得过吗？"',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)]"
              >
                <h3 className="text-[#f1f5f9] font-bold mb-3 flex items-start gap-2">
                  <span className="text-[#d4af37]">Q</span>
                  {item.q}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 在线咨询 */}
      <section className="py-16 md:py-24 bg-[rgba(212,175,55,0.05)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6">
            获取专属保障方案
          </h2>
          <p className="text-[#94a3b8] mb-4">
            添加微信，免费获取专业顾问 1 对 1 服务
          </p>
          <p className="text-[#d4af37] text-lg mb-8">
            微信：<span className="font-bold">15211094685</span>
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
