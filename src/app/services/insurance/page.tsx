import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';
import { VisualCardGrid } from '@/components/ui-custom/VisualCardGrid';
import { ProcessFlow } from '@/components/ui-custom/ProcessFlow';
import { AccordionFAQ } from '@/components/ui-custom/AccordionFAQ';
import { useRef } from 'react';
import HatChart from '@/components/HatChart';

export default function InsurancePage() {
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  // 服务范围视觉卡片
  const serviceCards = [
    {
      icon: '🏥',
      title: '医疗险',
      tags: ['0 免赔', '百万医疗', '中端医疗'],
      description: '解决看病贵的后顾之忧',
    },
    {
      icon: '🛡️',
      title: '重疾险',
      tags: ['确诊即赔', '多次赔付'],
      description: '保单实际升值了一倍',
    },
    {
      icon: '🚗',
      title: '车险',
      tags: ['快速报价', '全程理赔'],
      description: '一站式服务省时省心',
    },
    {
      icon: '‍👩‍👧👦',
      title: '家庭保障',
      tags: ['全家规划', '教育金', '养老金'],
      description: '守护每一代人',
    },
  ];

  // 投保流程
  const applicationSteps = [
    { number: 1, title: '需求沟通', description: '了解你的保障需求和预算' },
    { number: 2, title: '方案定制', description: '量身定制保障方案' },
    { number: 3, title: '产品对比', description: '对比多家产品优劣' },
    { number: 4, title: '投保办理', description: '协助完成投保手续' },
    { number: 5, title: '售后服务', description: '理赔协助 + 保单管理' },
  ];

  // 理赔流程
  const claimsSteps = [
    { number: 1, title: '出险报案', description: '第一时间拨打保险公司客服电话报案' },
    { number: 2, title: '准备材料', description: '根据理赔类型准备相关材料' },
    { number: 3, title: '提交申请', description: '将完整材料提交给保险公司' },
    { number: 4, title: '审核赔付', description: '保险公司审核材料，3-10 个工作日' },
    { number: 5, title: '到账确认', description: '理赔款打入指定银行账户' },
  ];

  // FAQ
  const faqItems = [
    {
      question: '免赔额怎么选？',
      answer: '0 免赔产品保费稍高但理赔门槛低，1 万免赔保费更实惠。推荐 0 免赔，理赔体验好能带来转介绍。核心观点：医疗险不用做长远规划，10 年后产品形态完全不同，现在最重要的是这几年找个合适的。',
    },
    {
      question: '续保条件怎么看？',
      answer: '续保看规模非文字，更重要的是"能否升级"而非"能否续保"。四五年前的产品没更新就等于被淘汰。我会优先推荐保证续保的产品，避免因理赔或健康变化被拒保。',
    },
    {
      question: '家庭投保有优惠吗？',
      answer: '平安家庭费率：1 人 100%/2 人 95%/3 人 90%/4 人 +85%。很多产品支持家庭单投保，共享免赔额，保费更优惠。我会帮你计算最优方案。',
    },
    {
      question: '网上买的和线下有什么区别？',
      answer: '不是产品不好是体况变了，网上买的版本太老了。线下服务能提供专业的需求分析和理赔协助，这是线上无法替代的。',
    },
    {
      question: '身体有异常能买吗？',
      answer: '先解决准入问题再谈产品对比，有不用健康告知的产品可选。既往症解释关键："先问后答"——客户问"XX 能报吗"别直接说能或不能，先问"之前得过吗？"',
    },
  ];

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

      {/* 草帽图 - 交互式观念导入 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <HatChart onScrollToProducts={scrollToProducts} />
        </div>
      </section>

      {/* 服务范围 - 视觉卡片 */}
      <section ref={productsRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <VisualCardGrid cards={serviceCards} title="服务范围" />
        </div>
      </section>

      {/* 投保流程 - 横向流程图 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <ProcessFlow steps={applicationSteps} title="投保流程" />
        </div>
      </section>

      {/* 理赔指南 - 横向流程图 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ProcessFlow steps={claimsSteps} title="理赔指南" />
        </div>
      </section>

      {/* 常见问题 - 手风琴 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-4xl mx-auto px-6">
          <AccordionFAQ items={faqItems} title="常见问题" />
        </div>
      </section>

      {/* 咨询入口 CTA */}
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
