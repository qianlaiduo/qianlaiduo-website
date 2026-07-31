'use client';

import { useState } from 'react';

interface StairStep {
  level: number;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverColor: string;
  icon: string;
  summary: string;
  details: string[];
  tags?: string[];
  hoverContent: {
    positioning: string;
    keyPoints: string[];
    price?: string;
  };
  modalContent: {
    title: string;
    sections: {
      subtitle: string;
      items: string[];
    }[];
  };
}

const stairSteps: StairStep[] = [
  {
    level: 1,
    title: '社保',
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/20',
    borderColor: 'border-gray-500/30',
    hoverColor: 'hover:bg-gray-500/30',
    icon: '🏛️',
    summary: '基础医疗保障，人人必备',
    details: [
      '社保特点是低水平、广覆盖',
      '是基础保障，但不够用',
    ],
    hoverContent: {
      positioning: '全民基础医疗保障',
      keyPoints: [
        '门诊 + 住院基础报销',
        '有起付线和封顶线',
        '医保目录内才报',
        '进口药/靶向药/特需部不报',
      ],
      price: '保基本，需商业保险补缺口',
    },
    modalContent: {
      title: '社保 - 基础保障',
      sections: [
        {
          subtitle: '社保特点',
          items: [
            '低水平、广覆盖的基础保障',
            '门诊 + 住院基础报销',
            '有起付线和封顶线限制',
            '仅报销医保目录内费用',
            '进口药、靶向药、特需部不在报销范围',
          ],
        },
        {
          subtitle: '为什么需要商业保险',
          items: [
            '社保报销有上限，大病不够用',
            '自费药、进口药不报销',
            '特需部、VIP 部无法使用',
            '收入损失无法补偿',
          ],
        },
      ],
    },
  },
  {
    level: 2,
    title: '意外险',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    hoverColor: 'hover:bg-blue-500/30',
    icon: '️',
    summary: '全年龄段覆盖',
    details: [
      '少儿版：出生 30 天 -17 岁，78 元/年起',
      '成人版：18-50 岁，138 元/年起（含猝死责任）',
      '老年版：50-75 岁，228 元/年起',
    ],
    hoverContent: {
      positioning: '全年龄段意外保障，一杯奶茶钱保一年',
      keyPoints: [
        '意外身故/伤残赔付',
        '意外医疗报销',
        '交通意外额外赔',
        '猝死责任（成人版）',
      ],
      price: '少儿 78 元起 / 成人 138 元起 / 老年 228 元起',
    },
    modalContent: {
      title: '意外险 - 全年龄段覆盖',
      sections: [
        {
          subtitle: '【少儿版：平安小顽童 8 号】',
          items: [
            '适用：出生 30 天 -17 岁',
            '意外身故 20 万/伤残 40 万',
            '意外医疗 5 万：0 免赔 100% 赔，不限社保范围',
            '烧烫伤意外医疗 1 万（少儿高发）',
            '误食异物意外医疗 8000 元',
            '预防接种意外身故残疾 10 万',
            '航空意外 40 万/公共交通 20 万',
            '可选：面部美容医疗 5000 元、住院津贴寒暑假翻倍',
            '价格：78 元起/年',
          ],
        },
        {
          subtitle: '【成人版：人保大护甲 8 号旗舰版】',
          items: [
            '适用：18-50 岁',
            '四个版本：经典版 30 万/尊贵版 50 万/至尊版 100 万/至尊 PRO 150 万',
            '意外医疗 3 万（免赔 100 元）',
            '交通意外：航空 300 万/火车 30 万/轮船 30 万/汽车 15 万（节假日翻倍）',
            '急性病身故 15 万（含猝死）',
            '骨折脱臼 2000 元/救护车 500 元',
            '家庭单 95 折',
            '价格：138 元起/年',
          ],
        },
        {
          subtitle: '【老年版：人保大护甲 8 号高龄版】',
          items: [
            '适用：50-75 岁',
            '意外身故 10 万/意外医疗 5 万（免赔 200 元）',
            '意外住院津贴 50 元/天（累计 180 天）',
            '骨折后期医疗 2000 元',
            '交通意外：航空 10 万/轨道 10 万/轮船 10 万/汽车 3 万',
            '健康要求宽松：能正常生活工作即可',
            '价格：228 元起/年',
          ],
        },
      ],
    },
  },
  {
    level: 3,
    title: '医疗险',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    hoverColor: 'hover:bg-green-500/30',
    icon: '🏥',
    summary: '解决看病贵的后顾之忧',
    details: [
      '0 免赔百万医疗：住院全报销，全家投保享折扣',
      '特需部中端医疗：120 种重疾 0 免赔 100% 赔付',
      '带病可投方案：非标体也有保障',
      '家庭折扣：2 人 95 折/3 人 9 折/4 人 +85 折',
    ],
    tags: ['门诊安排', '暖心陪诊', '住院陪护', '垫付医疗费', '质子重离子', 'CAR-T', '院外靶向药'],
    hoverContent: {
      positioning: '百万医疗，解决大病医疗费用',
      keyPoints: [
        '4 套方案适配不同人群',
        '0 免赔可选',
        '20 年保证续保可选',
        '含特药/CAR-T/质子重离子',
        '带病可投方案',
      ],
      price: '家庭折扣：2 人 95 折 / 3 人 9 折 / 4 人 +85 折',
    },
    modalContent: {
      title: '医疗险 - 解决看病贵',
      sections: [
        {
          subtitle: '【方案一：寿险常规方案】',
          items: [
            '组成：舒享医疗 + 惠享版 (20 年)+ 加享计划一',
            '保额：800 万 +200 万 +1 万',
            '免赔：实际 0 免赔（舒享抵扣）',
            '续保：20 年保证续保写进合同',
            '适合：追求续保稳定性',
          ],
        },
        {
          subtitle: '【方案二 A：悦享版计划四】',
          items: [
            '保额：600 万',
            '免赔：0 免赔（1 万以下 50%/1 万以上 100%）',
            '续保：1 年期',
            '适合：预算有限 + 要 0 免赔',
          ],
        },
        {
          subtitle: '【方案二 B：安医保尊享版计划一】',
          items: [
            '保额：600 万',
            '免赔：0 免赔（1 万以下 80%/1 万以上 100%）',
            '特色：重疾可赔特需/VIP 部 +76 种海外特药',
            '适合：重疾保障 + 特需部',
          ],
        },
        {
          subtitle: '【方案三：众安众民保·中高端医疗险 2026】',
          items: [
            '保额：600 万（一般 300 万 + 重疾 300 万）',
            '免赔：0 免赔',
            '核心优势：免健康告知 + 带病可投 + 一般既往症可赔',
            '可投年龄：18-80 岁，续保至 105 岁',
            '覆盖：结节 (1-3 级)/三高/糖尿病/乙肝小三阳/息肉/囊肿/结石',
            '特药 250 种含 7 款 CAR-T',
            '质子重离子 300 万 100% 赔',
            '适合：过不了平安健告的客户',
          ],
        },
        {
          subtitle: '【家庭费率折扣】',
          items: [
            '2 人 95 折 / 3 人 9 折 / 4 人 +85 折（同一产品才享折扣）',
          ],
        },
      ],
    },
  },
  {
    level: 4,
    title: '重疾险',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-500/30',
    hoverColor: 'hover:bg-orange-500/30',
    icon: '💪',
    summary: '确诊即赔，保额持续增长',
    details: [
      '120 种重疾 +40 种轻症 +20 种中症',
      '保额每年递增，越老越高',
      '含豁免功能，确诊后保费免缴',
      '35 岁男性 50 万保额案例：保额随时间增长',
    ],
    hoverContent: {
      positioning: '确诊即赔，保额随分红持续增长',
      keyPoints: [
        '120 种重疾 +40 种轻症 +20 种中症',
        '红利自动增额，越老保额越高',
        '终身保障',
        '可搭配万能账户',
      ],
      price: '3000 元/年起',
    },
    modalContent: {
      title: '重疾险 - 确诊即赔',
      sections: [
        {
          subtitle: '【平安倍佑福组合计划】',
          items: [
            '组成：倍佑福终身寿险（分红型）+ 附加倍佑福提前给付重疾',
            '上市时间：2025 年 8 月 1 日',
            '交费期：8/10/15/20 年',
            '保障范围：120 种重疾 +40 种轻症 +20 种中症',
            '保额递增：红利自动增额，越老保额越高',
            '豁免功能：确诊后后续保费免缴',
            '可搭配万能账户二次增值',
          ],
        },
        {
          subtitle: '【案例演示】',
          items: [
            '30 岁男性，50 万保额，30 年交',
            '年缴约 XXXX 元',
            '保额随时间递增，70 岁时保额可达约 XX 万',
            '分红演示基于中档利率，实际以公司公布为准',
          ],
        },
      ],
    },
  },
  {
    level: 5,
    title: '定期寿险',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/20',
    borderColor: 'border-cyan-500/30',
    hoverColor: 'hover:bg-cyan-500/30',
    icon: '‍👩‍👧',
    summary: '低保费高杠杆，家庭责任保障',
    details: [
      '几百元保费撬动百万保额',
      '健康告知宽松，仅 3 条免责',
      '适用：家庭经济支柱 | 有房贷 | 创业者 | 已婚有娃',
    ],
    hoverContent: {
      positioning: '留爱不留债，低保费高杠杆',
      keyPoints: [
        '身故/全残即赔',
        '健康告知仅 4 条',
        '免责仅 3 条（行业最少）',
        '最高 400 万免体检',
      ],
      price: '30 岁女 100 万保额仅 820 元/年',
    },
    modalContent: {
      title: '定期寿险 - 家庭责任保障',
      sections: [
        {
          subtitle: '【核心优势】',
          items: [
            '低保费高杠杆：几百元保费撬动百万保额',
            '健康告知宽松：仅 4 条健康告知',
            '免责条款最少：仅 3 条免责（行业最少）',
            '最高 400 万免体检',
          ],
        },
        {
          subtitle: '【适用人群】',
          items: [
            '家庭经济支柱',
            '有房贷车贷',
            '创业者',
            '已婚有娃',
          ],
        },
        {
          subtitle: '【案例】',
          items: [
            '30 岁女性，100 万保额，保至 60 岁，30 年交',
            '年缴仅 820 元',
            '留爱不留债，家庭责任保障',
          ],
        },
      ],
    },
  },
  {
    level: 6,
    title: '养老年金险',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/30',
    hoverColor: 'hover:bg-yellow-500/30',
    icon: '',
    summary: '锁定终身利率，活多久领多久',
    details: [
      '复利增值 vs 银行单利',
      '灵活领取：年领/月领/一次性',
      '锁定利率不受下行影响',
      '倒推法：告诉我退休目标，倒推现在该存多少',
    ],
    hoverContent: {
      positioning: '锁定终身利率，品质养老准备',
      keyPoints: [
        '保底 1.75% 写入合同',
        '分红实现率近 10 年 107%',
        '可搭配居家服务 + 家庭医生',
        '服务随保单传承',
      ],
      price: '银行利率持续下降，保险锁定终身',
    },
    modalContent: {
      title: '养老年金险 - 品质养老',
      sections: [
        {
          subtitle: '【银行 VS 保险对比】',
          items: [
            '收益方式：银行单利 vs 保险复利',
            '领取方式：银行一次性取完 vs 保险活多久领多久',
            '风险：银行利率下行风险 vs 保险锁定终身利率',
            '灵活性：银行随时取 vs 保险灵活减保/保单贷款',
            '传承：银行需走继承程序 vs 保险指定受益人直接给付',
          ],
        },
        {
          subtitle: '【核心卖点】',
          items: [
            '复利增值：时间越长收益越明显',
            '灵活领取：可年领/月领/一次性领取',
            '锁定利率：不受未来利率下行影响',
            '保底 1.75% 写入合同',
            '分红实现率近 10 年 107%',
          ],
        },
        {
          subtitle: '【倒推法】',
          items: [
            '告诉我你的退休目标',
            '我帮你倒推现在该存多少',
            '提前规划，品质养老',
          ],
        },
      ],
    },
  },
  {
    level: 7,
    title: '终身寿险',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-600/20',
    borderColor: 'border-yellow-600/30',
    hoverColor: 'hover:bg-yellow-600/30',
    icon: '',
    summary: '财富传承，指定受益人直接给付',
    details: [
      '资产隔离与传承规划',
      '指定受益人，免继承纠纷',
      '保单贷款灵活周转',
    ],
    hoverContent: {
      positioning: '财富定向传承',
      keyPoints: [
        '身故保险金指定受益人',
        '定向传承不留纠纷',
        '可对接家族办公室服务',
        '法税咨询 + 企业上市辅导',
      ],
    },
    modalContent: {
      title: '终身寿险 - 财富传承',
      sections: [
        {
          subtitle: '【核心功能】',
          items: [
            '身故保险金指定受益人',
            '定向传承不留纠纷',
            '资产隔离与传承规划',
            '保单贷款灵活周转',
          ],
        },
        {
          subtitle: '【增值服务】',
          items: [
            '可对接家族办公室服务',
            '法税咨询',
            '企业上市辅导',
            '财富传承规划',
          ],
        },
      ],
    },
  },
];

const supplementarySteps: StairStep[] = [
  {
    level: 0,
    title: '团体险',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
    hoverColor: 'hover:bg-purple-500/30',
    icon: '🏢',
    summary: '企业员工福利保障',
    details: [
      '团体医疗：200 万保障，送体检，10 人起保',
      '综合团险：意外 + 疾病都保，460 元/人起',
      '意外团险：3 人起投，84 元/人起',
    ],
    hoverContent: {
      positioning: '企业员工福利保障',
      keyPoints: [
        '3 人起投',
        '疾病 + 意外都保',
        '可增减员按天计费',
        '送体检',
      ],
      price: '84 元/人起',
    },
    modalContent: {
      title: '团体险 - 企业员工福利',
      sections: [
        {
          subtitle: '【团体医疗】',
          items: [
            '200 万医疗保障',
            '含住院/门急诊/特殊门诊/质重离子',
            '送入职体检服务',
            '10 人起保',
          ],
        },
        {
          subtitle: '【综合团险】',
          items: [
            '意外 + 疾病都保',
            '24 小时全天保障',
            '含猝死责任 +120 种特疾 0 免赔',
            '460 元/人起',
          ],
        },
        {
          subtitle: '【意外团险】',
          items: [
            '3 人起投',
            '十档方案灵活选',
            '可增减员按天计费',
            '84 元/人起',
          ],
        },
      ],
    },
  },
  {
    level: 0,
    title: '财产险',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
    hoverColor: 'hover:bg-purple-500/30',
    icon: '🏠',
    summary: '家庭财产安全保障',
    details: [
      '家庭财产险：7 大保障，168 元/年起',
      '高端家财险：千万级保障，1488 元/年起',
    ],
    hoverContent: {
      positioning: '家庭财产安全保障',
      keyPoints: [
        '房屋主体 + 室内财产 + 装修',
        '水暖管爆裂',
        '盗抢损失',
        '居家责任',
        '燃气意外',
      ],
      price: '168 元起',
    },
    modalContent: {
      title: '财产险 - 守护您的家',
      sections: [
        {
          subtitle: '【家庭财产保险】',
          items: [
            '7 大保障：房屋主体 + 装修 + 室内财产 + 盗窃 + 水暖管 + 居家责任',
            '自有房产/租房均可保',
            '最高 200 万保额',
            '168 元/年起（0.47 元/天）',
          ],
        },
        {
          subtitle: '【高端家财保险】',
          items: [
            '10 大保障：家财 + 燃气意外 + 银行卡盗刷 + 临时住宿津贴',
            '千万级保障，最高 5000 万',
            '火灾责任翻倍',
            '1488 元/年起',
          ],
        },
      ],
    },
  },
];

export default function StaircaseChart() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [selectedStep, setSelectedStep] = useState<StairStep | null>(null);

  return (
    <div className="py-16 md:py-24">
      {/* 模块标题 */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          保障阶梯 — <span className="text-gradient-gold">您的家庭在第几层？</span>
        </h2>
        <p className="text-slate-400 text-lg">
          从基础保障到财富传承，7 层阶梯守护您的一生
        </p>
      </div>

      {/* 阶梯容器 */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Hover 信息面板 */}
        {hoveredStep !== null && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-[rgba(212,175,55,0.2)] shadow-xl">
            {(() => {
              const step = [...stairSteps, ...supplementarySteps].find(s => s.level === hoveredStep || (hoveredStep === 0 && s.level === 0));
              if (!step) return null;
              return (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{step.icon}</span>
                    <h3 className={`text-2xl font-bold ${step.color}`}>{step.title}</h3>
                    <span className="text-slate-400 text-sm ml-2">{step.hoverContent.positioning}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#d4af37] mb-2">核心保障</h4>
                      <ul className="space-y-1">
                        {step.hoverContent.keyPoints.map((point, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-[#d4af37] mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {step.hoverContent.price && (
                      <div>
                        <h4 className="text-sm font-semibold text-[#d4af37] mb-2">关键信息</h4>
                        <p className="text-slate-300 text-sm">{step.hoverContent.price}</p>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 text-center">点击查看详情 →</p>
                </>
              );
            })()}
          </div>
        )}

        {/* 阶梯网格 */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 mb-8">
          {stairSteps.map((step, index) => (
            <div
              key={step.level}
              className={`relative cursor-pointer transition-all duration-300 ${step.hoverColor} rounded-lg border ${step.borderColor} ${step.bgColor} p-4 ${
                hoveredStep === step.level ? 'scale-105 shadow-lg' : ''
              }`}
              style={{
                minHeight: `${120 + index * 40}px`,
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredStep(step.level)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => setSelectedStep(step)}
            >
              {/* 台阶编号 */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}>
                <span className={`text-sm font-bold ${step.color}`}>{step.level}</span>
              </div>

              {/* 图标 */}
              <div className="text-3xl mb-2">{step.icon}</div>

              {/* 标题 */}
              <h3 className={`text-lg font-bold ${step.color} mb-2`}>{step.title}</h3>

              {/* 摘要 */}
              <p className="text-slate-300 text-xs mb-3">{step.summary}</p>

              {/* 详情列表 */}
              <ul className="space-y-1">
                {step.details.slice(0, 2).map((detail, idx) => (
                  <li key={idx} className="text-slate-400 text-xs flex items-start gap-1">
                    <span className="text-[#d4af37] mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* 标签 */}
              {step.tags && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {step.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 补充区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supplementarySteps.map((step, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all duration-300 ${step.hoverColor} rounded-lg border ${step.borderColor} ${step.bgColor} p-6 ${
                hoveredStep === 0 && index === 0 ? 'scale-105 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredStep(0)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => setSelectedStep(step)}
            >
              {/* 图标 */}
              <div className="text-4xl mb-3">{step.icon}</div>

              {/* 标题 */}
              <h3 className={`text-xl font-bold ${step.color} mb-2`}>{step.title}</h3>

              {/* 摘要 */}
              <p className="text-slate-300 text-sm mb-4">{step.summary}</p>

              {/* 详情列表 */}
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部总结 */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-lg">
            从基础保障到财富传承，<span className="text-[#d4af37] font-semibold">7 层阶梯</span>守护您的一生
          </p>
        </div>
      </div>

      {/* 详情弹窗 */}
      {selectedStep && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-[rgba(212,175,55,0.2)] shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 弹窗头部 */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-[rgba(212,175,55,0.2)] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedStep.icon}</span>
                <h2 className={`text-2xl font-bold ${selectedStep.color}`}>{selectedStep.modalContent.title}</h2>
              </div>
              <button
                onClick={() => setSelectedStep(null)}
                className="w-10 h-10 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* 弹窗内容 */}
            <div className="p-6 space-y-6">
              {selectedStep.modalContent.sections.map((section, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-[#d4af37] mb-3">{section.subtitle}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-slate-300 flex items-start gap-2">
                        <span className="text-[#d4af37] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 弹窗底部 */}
            <div className="sticky bottom-0 bg-gradient-to-r from-slate-800 to-slate-900 border-t border-[rgba(212,175,55,0.2)] p-6">
              <a
                href="https://work.weixin.qq.com/ca/cawcde81e9a19229c6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f5d06a] text-slate-900 font-bold text-center hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300"
              >
                添加微信 15211094685 咨询详情
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
