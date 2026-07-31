'use client';

import { useState } from 'react';

interface StairStep {
  level: number;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  summary: string;
  details: string[];
  tags?: string[];
}

const stairSteps: StairStep[] = [
  {
    level: 1,
    title: '社保',
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/20',
    borderColor: 'border-gray-500/30',
    icon: '🏛️',
    summary: '基础医疗保障，人人必备',
    details: [
      '社保特点是低水平、广覆盖',
      '是基础保障，但不够用',
    ],
  },
  {
    level: 2,
    title: '意外险',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    icon: '🛡️',
    summary: '全年龄段覆盖',
    details: [
      '少儿版：出生 30 天 -17 岁，78 元/年起',
      '成人版：18-50 岁，138 元/年起（含猝死责任）',
      '老年版：50-75 岁，228 元/年起',
    ],
  },
  {
    level: 3,
    title: '医疗险',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    icon: '🏥',
    summary: '解决看病贵的后顾之忧',
    details: [
      '0 免赔百万医疗：住院全报销，全家投保享折扣',
      '特需部中端医疗：120 种重疾 0 免赔 100% 赔付',
      '带病可投方案：非标体也有保障',
      '家庭折扣：2 人 95 折/3 人 9 折/4 人 +85 折',
    ],
    tags: ['门诊安排', '暖心陪诊', '住院陪护', '垫付医疗费', '质子重离子', 'CAR-T', '院外靶向药'],
  },
  {
    level: 4,
    title: '重疾险',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-500/30',
    icon: '',
    summary: '确诊即赔，保额持续增长',
    details: [
      '120 种重疾 +40 种轻症 +20 种中症',
      '保额每年递增，越老越高',
      '含豁免功能，确诊后保费免缴',
      '35 岁男性 50 万保额案例：保额随时间增长',
    ],
  },
  {
    level: 5,
    title: '定期寿险',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/20',
    borderColor: 'border-cyan-500/30',
    icon: '👨‍‍👧',
    summary: '低保费高杠杆，家庭责任保障',
    details: [
      '几百元保费撬动百万保额',
      '健康告知宽松，仅 3 条免责',
      '适用：家庭经济支柱 | 有房贷 | 创业者 | 已婚有娃',
    ],
  },
  {
    level: 6,
    title: '养老年金险',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/30',
    icon: '🏦',
    summary: '锁定终身利率，活多久领多久',
    details: [
      '复利增值 vs 银行单利',
      '灵活领取：年领/月领/一次性',
      '锁定利率不受下行影响',
      '倒推法：告诉我退休目标，倒推现在该存多少',
    ],
  },
  {
    level: 7,
    title: '终身寿险',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
    borderColor: 'border-amber-500/30',
    icon: '👑',
    summary: '财富传承，指定受益人直接给付',
    details: [
      '资产隔离与传承规划',
      '指定受益人，免继承纠纷',
      '保单贷款灵活周转',
    ],
  },
];

const supplementaryProducts = {
  title: '团体险 & 财产险',
  color: 'text-purple-400',
  bgColor: 'bg-purple-500/20',
  borderColor: 'border-purple-500/30',
  icon: '🏢',
  summary: '企业员工福利 + 家庭财产保障',
  details: [
    '团体医疗：200 万保障，送体检，10 人起保',
    '综合团险：意外 + 疾病都保，460 元/人起',
    '家财险：7 大保障，168 元/年起',
    '高端家财：千万级保障，1488 元/年起',
  ],
};

export function StaircaseChart() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 模块标题 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-yellow-500/10 border border-blue-500/20 mb-6">
            <span className="text-2xl">📊</span>
            <span className="text-sm font-medium text-slate-700">保障阶梯</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            保障阶梯 — 您的家庭在第几层？
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            从基础保障到财富传承，7 层阶梯守护您的一生
          </p>
        </div>

        {/* 桌面端阶梯图 */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* 阶梯容器 */}
            <div className="flex items-end justify-center gap-0 min-h-[600px]">
              {stairSteps.map((step, index) => {
                const height = 80 + index * 70; // 递增高度
                const isHovered = hoveredStep === step.level;

                return (
                  <div
                    key={step.level}
                    className="relative flex-shrink-0 transition-all duration-300 ease-in-out"
                    style={{
                      height: `${height}px`,
                      width: '140px',
                      animationDelay: `${index * 100}ms`,
                    }}
                    onMouseEnter={() => setHoveredStep(step.level)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* 台阶面（水平面） */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-16 ${step.bgColor} ${step.borderColor} border-2 rounded-t-lg transition-all duration-300 ${
                        isHovered ? 'scale-105 shadow-xl z-10' : ''
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center h-full p-2">
                        <span className="text-2xl mb-1">{step.icon}</span>
                        <span className={`text-xs font-bold ${step.color} text-center leading-tight`}>
                          {step.title}
                        </span>
                        <span className="text-[10px] text-slate-500 text-center leading-tight mt-1">
                          第{step.level}层
                        </span>
                      </div>
                    </div>

                    {/* 台阶立面（垂直面） */}
                    <div
                      className={`absolute top-16 left-0 right-0 bottom-0 ${step.bgColor} ${step.borderColor} border-x-2 border-b-2 rounded-b-lg transition-all duration-300 ${
                        isHovered ? 'shadow-xl' : ''
                      }`}
                    >
                      {/* 悬停时显示详情 */}
                      {isHovered && (
                        <div className="p-3 h-full overflow-y-auto">
                          <p className={`text-xs font-bold ${step.color} mb-2`}>{step.summary}</p>
                          <ul className="space-y-1">
                            {step.details.map((detail, i) => (
                              <li key={i} className="text-[10px] text-slate-600 leading-tight">
                                • {detail}
                              </li>
                            ))}
                          </ul>
                          {step.tags && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {step.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-1.5 py-0.5 text-[9px] bg-white/50 rounded-full text-slate-600"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* 补充区域（右侧） */}
              <div
                className="relative flex-shrink-0 ml-4 transition-all duration-300"
                style={{ height: '540px', width: '160px' }}
                onMouseEnter={() => setHoveredStep(8)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className={`h-full ${supplementaryProducts.bgColor} ${supplementaryProducts.borderColor} border-2 rounded-lg transition-all duration-300 ${
                    hoveredStep === 8 ? 'scale-105 shadow-xl' : ''
                  }`}
                >
                  <div className="p-3 h-full">
                    <div className="text-center mb-2">
                      <span className="text-2xl">{supplementaryProducts.icon}</span>
                      <p className={`text-xs font-bold ${supplementaryProducts.color} mt-1`}>
                        {supplementaryProducts.title}
                      </p>
                      <p className="text-[10px] text-slate-500">补充保障</p>
                    </div>
                    {hoveredStep === 8 && (
                      <div className="space-y-1">
                        <p className="text-[10px] text-slate-600 font-medium">
                          {supplementaryProducts.summary}
                        </p>
                        <ul className="space-y-1">
                          {supplementaryProducts.details.map((detail, i) => (
                            <li key={i} className="text-[10px] text-slate-600 leading-tight">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 底部总结 */}
            <div className="text-center mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                <span className="font-medium text-slate-900">从基础保障到财富传承</span>
                ，7 层阶梯守护您的一生
              </p>
            </div>
          </div>
        </div>

        {/* 移动端纵向卡片列表 */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {stairSteps.map((step) => (
              <div
                key={step.level}
                className={`${step.bgColor} ${step.borderColor} border-2 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold ${step.color}`}>第{step.level}层</span>
                      <h3 className={`text-base font-bold ${step.color}`}>{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-700 font-medium mb-2">{step.summary}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-xs text-slate-600 leading-tight">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                    {step.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {step.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[10px] bg-white/50 rounded-full text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* 补充保障卡片 */}
            <div
              className={`${supplementaryProducts.bgColor} ${supplementaryProducts.borderColor} border-2 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
                  <span className="text-2xl">{supplementaryProducts.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold ${supplementaryProducts.color}`}>补充</span>
                    <h3 className={`text-base font-bold ${supplementaryProducts.color}`}>
                      {supplementaryProducts.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 font-medium mb-2">
                    {supplementaryProducts.summary}
                  </p>
                  <ul className="space-y-1">
                    {supplementaryProducts.details.map((detail, i) => (
                      <li key={i} className="text-xs text-slate-600 leading-tight">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 底部总结 */}
          <div className="text-center mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-900">从基础保障到财富传承</span>
              ，7 层阶梯守护您的一生
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
