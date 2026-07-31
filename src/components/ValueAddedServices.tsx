'use client';

import { useState } from 'react';

interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  colorBg: string;
  highlights: string[];
}

const services: ServiceCard[] = [
  {
    id: 'anyouyi',
    icon: '',
    title: '安有医',
    subtitle: '从院前到院后，就医全程有人管',
    color: 'from-blue-500 to-blue-600',
    colorBg: 'bg-blue-500',
    highlights: [
      '院前就医：平安自聘全职医生团在线问诊不限次，小病直接手机看诊开药；门诊预约协助 T+7 工作日安排；就医陪诊 4 小时专人陪同',
      '院中治疗：住院安排协助 48 小时响应安排床位；7 天 6 晚住院护工全程照护；专家会诊可约北上广三甲副主任专家；CAR-T 免疫治疗协助订购；质子重离子就医协助不限次；国内特药申请不限次含直付；住院垫付不限次不用自己先掏钱',
      '院后康复：远程康复指导最长跟踪 1 年；上门康复护理 5 次 +6 个月远程指导；康复门诊/住院协助预约',
      '六档服务等级：从惠享版 9 项到颐享版 25 项，保费越高服务越全，最高享海外就医 + 全球急难援助 + 高端医疗直付',
    ],
  },
  {
    id: 'jiuyitong',
    icon: '💉',
    title: '就医通',
    subtitle: '看病不排队、名医约得上',
    color: 'from-cyan-500 to-cyan-600',
    colorBg: 'bg-cyan-500',
    highlights: [
      '门诊预约协助：集齐资料后 T+7 工作日内安排，含名医大咖预约，告别凌晨排队挂号',
      '住院安排协助：48 小时响应，协助安排三甲医院住院床位，不用等床位等到病加重',
      '重疾专案管理：确诊重疾后专人全程跟进，北上广三甲医院副主任专家二诊或会诊，第二诊疗意见避免误诊',
      '海外就医协助：海外远程书面咨询获取国际权威专家意见 + 海外住院安排协助，不出国也能获得国际诊疗方案',
      '手术安排（尊享版）：可指定医生完成手术，不用等排期',
    ],
  },
  {
    id: 'zhenxiang',
    icon: '👨‍️',
    title: '臻享家医',
    subtitle: '全家人的专属医生，24 小时在线',
    color: 'from-green-500 to-green-600',
    colorBg: 'bg-green-500',
    highlights: [
      '专业背书：北大国际医院+WONCA 国际认证，不是普通在线问诊，是三甲医院级别服务',
      'AI 科技赋能：AI 解读 778 项异常指标，精准率 95% 以上，3 秒响应，体检报告不再看不懂',
      '主动健康管理：体检报告深度解读 +21 天健康训练营，从"生病才看医生"变成"有人帮你管健康"',
      '慢病管理：专属医生盯指标、用药提醒、数字化跟踪，高血压糖尿病不用反复跑医院',
      '疾病全程管理：从疑似确诊到专家问诊到就医协助到住院安排到术后康复，一条龙全程跟进',
      '覆盖全家：本人 + 配偶 + 父母 + 子女，全家健康都有人管',
    ],
  },
  {
    id: 'juyang',
    icon: '',
    title: '居家养老',
    subtitle: '让父母在家享受专业照护，好养老在平安',
    color: 'from-orange-500 to-orange-600',
    colorBg: 'bg-orange-500',
    highlights: [
      '三位一体养老管家：智能管家（7x24 小时智能响应）+ 生活管家（专人对接日常需求）+ 医生管家（专业医疗健康服务）',
      '居家管家服务：日常起居协助、生活代办、家政对接',
      '健康管理服务：健康监测、用药管理、定期健康评估，配套智能健康终端',
      '医疗服务：上门巡诊、紧急医疗响应、互联网医院在线问诊',
      '安全及照护服务：防跌倒监测、紧急呼叫、智能安防，独居老人也有安全保障',
      '覆盖范围广：权益人包括本人/配偶/双方父母/祖父母/外祖父母/子女/兄弟姐妹',
    ],
  },
  {
    id: 'kangyang',
    icon: '💎',
    title: '高品质康养',
    subtitle: '高净值人群的养老天花板',
    color: 'from-purple-500 to-purple-600',
    colorBg: 'bg-purple-500',
    highlights: [
      '三尊服务体系：尊享时光、礼遇颐年，为长者提供家一般温馨舒适的高品质服务',
      '解决四大痛点：高端养老凤毛麟角 + 高端医疗千金难求 + 定制服务供给同质化 + 高净值人群社交难寻',
      '专为高净值家庭打造：不是普通养老院，是高品质康养社区',
      '对接家族办公室：名企探访 + 法税咨询 + 企业上市辅导，养老 + 财富管理一站式',
    ],
  },
];

export default function ValueAddedServices() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="relative py-16 md:py-24">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#0f172a]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full text-[#d4af37] text-sm font-medium mb-6">
            <span>✨</span>
            <span>增值服务</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            保险之外的<span className="text-[#d4af37]">增值服务</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            买保险不只是理赔，更是一整套医养服务体系
          </p>
        </div>

        {/* 服务卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#0f172a]/60 backdrop-blur-sm rounded-2xl border border-[#d4af37]/10 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#d4af37]/10 hover:border-[#d4af37]/30"
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
            >
              {/* 顶部彩色色带 */}
              <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>

              {/* 卡片内容 */}
              <div className="p-4 md:p-6">
                {/* 图标 */}
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{service.icon}</div>

                {/* 标题 */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>

                {/* 副标题 */}
                <p className="text-xs md:text-sm text-[#94a3b8] mb-4 line-clamp-2">{service.subtitle}</p>

                {/* 亮点列表 - 默认显示前 2 条 */}
                <ul className="space-y-2">
                  {service.highlights.slice(0, 2).map((highlight, index) => (
                    <li key={index} className="text-xs text-[#cbd5e1] flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${service.colorBg} mt-1.5 flex-shrink-0`}></span>
                      <span className="line-clamp-2">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* 展开提示 */}
                {service.highlights.length > 2 && (
                  <div className="mt-3 pt-3 border-t border-[#d4af37]/10">
                    <span className="text-xs text-[#d4af37] flex items-center gap-1">
                      {expandedId === service.id ? '收起' : '查看更多'}
                      <svg
                        className={`w-3 h-3 transition-transform ${expandedId === service.id ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                )}

                {/* 展开的完整内容 */}
                {expandedId === service.id && service.highlights.length > 2 && (
                  <ul className="mt-3 space-y-2 pt-3 border-t border-[#d4af37]/10">
                    {service.highlights.slice(2).map((highlight, index) => (
                      <li key={index} className="text-xs text-[#cbd5e1] flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${service.colorBg} mt-1.5 flex-shrink-0`}></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#94a3b8]">
            💡 点击卡片可展开/收起完整服务内容
          </p>
        </div>
      </div>
    </section>
  );
}
