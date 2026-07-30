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
              { title: '医疗险', desc: '百万医疗、高端医疗、少儿医疗', icon: '🏥' },
              { title: '重疾险', desc: '多次赔付、消费型、储蓄型', icon: '️' },
              { title: '车险', desc: '交强险、商业险、快速理赔', icon: '🚗' },
              { title: '家庭保障', desc: '全家保障规划、教育金、养老金', icon: '👨‍👩‍👧‍👦' },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#f1f5f9] mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm">{item.desc}</p>
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
              { step: '01', title: '需求分析', desc: '了解你的保障需求' },
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

      {/* 为什么选择我 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            为什么选择我
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: '10 年 + 经验', desc: '深耕保险行业，熟悉各类产品' },
              { title: '1000+ 客户', desc: '服务超千位客户，口碑良好' },
              { title: '理赔协助', desc: '全程协助理赔，省心省力' },
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

      {/* 在线咨询 */}
      <section className="py-16 md:py-24 bg-[rgba(212,175,55,0.05)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6">
            在线咨询
          </h2>
          <p className="text-[#94a3b8] mb-8">
            免费获取专属保障方案，专业顾问 1 对 1 服务
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a0e1a] font-bold text-lg hover:shadow-lg hover:shadow-[rgba(212,175,55,0.3)] transition-all">
              微信咨询
            </button>
            <button className="px-8 py-4 rounded-xl border border-[rgba(212,175,55,0.4)] text-[#d4af37] font-bold text-lg hover:bg-[rgba(212,175,55,0.1)] transition-all">
              电话咨询
            </button>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
}
