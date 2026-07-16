'use client';

import { useState } from 'react';

interface PlanRow {
  year: number;
  age: number;
  premium: number; // 当年保费
  totalPremium: number; // 累计保费
  cashValue: number; // 现金价值
  deathBenefit: number; // 身故保额
  surrender: number; // 退保收益
}

interface PlanResult {
  productName: string;
  rows: PlanRow[];
  totalPremium: number;
  finalCashValue: number;
  totalReturn: number;
  returnRate: number;
}

const productTypes = [
  { id: 'wholelife', name: '增额终身寿', rate: 0.03, desc: '保额递增，灵活减保' },
  { id: 'annuity', name: '年金险', rate: 0.03, desc: '定期领取，与生命等长' },
  { id: 'dividend', name: '分红险', rate: 0.025, desc: '保底+分红，浮动收益' },
];

function generatePlan(
  age: number,
  annualPremium: number,
  payYears: number,
  productType: string,
  rate: number
): PlanRow[] {
  const rows: PlanRow[] = [];
  let totalPremium = 0;
  let cashValue = 0;
  let deathBenefit = annualPremium * payYears; // 初始身故保额约等于总保费

  const totalYears = 30; // 展示前30年

  for (let year = 1; year <= totalYears; year++) {
    const currentAge = age + year;
    const yearPremium = year <= payYears ? annualPremium : 0;
    totalPremium += yearPremium;

    if (productType === 'wholelife') {
      // 增额终身寿：现金价值按3%复利增长，保费年初交
      if (year <= payYears) {
        cashValue = (cashValue + annualPremium * (year === 1 ? 0.75 : 0.9)) * (1 + rate);
      } else {
        cashValue = cashValue * (1 + rate);
      }
      deathBenefit = Math.max(totalPremium, cashValue * 1.2);
    } else if (productType === 'annuity') {
      // 年金险：积累期增值，领取期开始领取
      const startPayYear = Math.max(payYears + 1, 10); // 缴费结束或第10年开始领
      if (year <= payYears) {
        cashValue = (cashValue + annualPremium * 0.8) * (1 + rate);
      } else if (year < startPayYear) {
        cashValue = cashValue * (1 + rate);
      } else {
        // 开始领取，每月领年缴保费的30%
        const annualIncome = annualPremium * 0.35;
        cashValue = cashValue * (1 + rate) - annualIncome;
      }
      deathBenefit = Math.max(totalPremium, cashValue);
    } else {
      // 分红险：保底2.5% + 浮动演示
      if (year <= payYears) {
        cashValue = (cashValue + annualPremium * 0.7) * (1 + rate);
      } else {
        cashValue = cashValue * (1 + rate);
      }
      deathBenefit = Math.max(totalPremium * 1.1, cashValue);
    }

    const surrender = Math.max(0, cashValue - totalPremium);

    rows.push({
      year,
      age: currentAge,
      premium: yearPremium,
      totalPremium,
      cashValue: Math.round(cashValue),
      deathBenefit: Math.round(deathBenefit),
      surrender: Math.round(surrender),
    });
  }

  return rows;
}

export function InsurancePlanGenerator() {
  const [age, setAge] = useState(30);
  const [annualPremium, setAnnualPremium] = useState(30000);
  const [payYears, setPayYears] = useState(10);
  const [productType, setProductType] = useState('wholelife');
  const [result, setResult] = useState<PlanResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAllYears, setShowAllYears] = useState(false);

  const selectedProduct = productTypes.find((p) => p.id === productType)!;

  const generate = () => {
    setIsCalculating(true);
    setResult(null);

    setTimeout(() => {
      const rows = generatePlan(age, annualPremium, payYears, productType, selectedProduct.rate);
      const totalPremium = annualPremium * payYears;
      const finalRow = rows[rows.length - 1];
      const totalReturn = finalRow.cashValue - totalPremium;
      const returnRate = ((finalRow.cashValue / totalPremium) ** (1 / rows.length) - 1) * 100;

      setResult({
        productName: selectedProduct.name,
        rows,
        totalPremium,
        finalCashValue: finalRow.cashValue,
        totalReturn,
        returnRate,
      });

      setIsCalculating(false);
    }, 600);
  };

  const displayRows = showAllYears ? (result?.rows || []) : (result?.rows.slice(0, 10) || []);

  return (
    <div className="pt-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 左侧：输入区 */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                投保人年龄
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Math.max(0, Math.min(70, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#34d399] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">岁</span>
              </div>
            </div>

            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                年缴保费
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={annualPremium}
                  onChange={(e) => setAnnualPremium(Math.max(1000, Number(e.target.value)))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] font-bold focus:border-[#34d399] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">元/年</span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
              缴费年限
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[3, 5, 10].map((y) => (
                <button
                  key={y}
                  onClick={() => setPayYears(y)}
                  className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                    payYears === y
                      ? 'bg-[rgba(52,211,153,0.15)] border-[#34d399] text-[#34d399]'
                      : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(52,211,153,0.3)]'
                  }`}
                >
                  {y}年交
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
              保险产品类型
            </label>
            <div className="space-y-2">
              {productTypes.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setProductType(product.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    productType === product.id
                      ? 'bg-[rgba(52,211,153,0.1)] border-[#34d399]'
                      : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] hover:border-[rgba(52,211,153,0.3)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-medium ${productType === product.id ? 'text-[#34d399]' : 'text-[#f1f5f9]'}`}>
                      {product.name}
                    </span>
                    <span className={`text-xs ${productType === product.id ? 'text-[#34d399]' : 'text-[#64748b]'}`}>
                      预定利率 {(product.rate * 100).toFixed(1)}%
                    </span>
                  </div>
                  <p className="text-[#64748b] text-xs">{product.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 保费汇总 */}
          <div className="p-4 rounded-xl bg-[rgba(52,211,153,0.06)] border border-[rgba(52,211,153,0.15)]">
            <div className="flex items-center justify-between">
              <span className="text-[#94a3b8] text-sm">累计投入保费</span>
              <span className="text-[#34d399] text-xl font-bold">
                ¥{(annualPremium * payYears).toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={generate}
            disabled={isCalculating}
            className="w-full text-base !py-4 btn-gold"
            style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)' }}
          >
            {isCalculating ? '生成中...' : '生成保险计划书'}
          </button>
        </div>

        {/* 右侧：结果区 */}
        <div>
          {result ? (
            <div className="rounded-2xl border border-[rgba(52,211,153,0.3)] bg-gradient-to-br from-[rgba(52,211,153,0.06)] to-[rgba(15,23,42,0.8)] p-6 relative overflow-hidden max-h-[700px] overflow-y-auto">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#34d399]/10 rounded-full blur-3xl" />

              <div className="relative">
                {/* 标题 */}
                <div className="text-center mb-6 pb-4 border-b border-[rgba(52,211,153,0.15)]">
                  <span className="inline-block px-3 py-1 rounded-full bg-[rgba(52,211,153,0.15)] text-[#34d399] text-xs font-medium mb-2">
                    利益演示计划书
                  </span>
                  <h4 className="text-xl font-bold text-[#f1f5f9] mb-1">
                    {result.productName}
                  </h4>
                  <p className="text-[#64748b] text-sm">
                    {age}岁 · 年缴¥{annualPremium.toLocaleString()} · {payYears}年交
                  </p>
                </div>

                {/* 关键数据概览 */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-3 rounded-xl bg-[rgba(15,23,42,0.6)]">
                    <p className="text-[#64748b] text-xs mb-1">总投入</p>
                    <p className="text-[#f1f5f9] font-bold text-sm">
                      ¥{result.totalPremium.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-[rgba(15,23,42,0.6)]">
                    <p className="text-[#64748b] text-xs mb-1">30年现价</p>
                    <p className="text-[#34d399] font-bold text-sm">
                      ¥{result.finalCashValue.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-[rgba(15,23,42,0.6)]">
                    <p className="text-[#64748b] text-xs mb-1">总收益</p>
                    <p className="text-[#d4af37] font-bold text-sm">
                      +¥{result.totalReturn.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* 利益演示表格 */}
                <div className="mb-4">
                  <p className="text-[#f1f5f9] text-sm font-medium mb-3">
                    利益演示表（{showAllYears ? '全部30年' : '前10年'}）
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-[rgba(212,175,55,0.1)]">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-[rgba(15,23,42,0.8)] text-[#94a3b8]">
                          <th className="py-2 px-2 text-left font-medium">保单年度</th>
                          <th className="py-2 px-2 text-right font-medium">年龄</th>
                          <th className="py-2 px-2 text-right font-medium">当年保费</th>
                          <th className="py-2 px-2 text-right font-medium">现金价值</th>
                          <th className="py-2 px-2 text-right font-medium">身故保额</th>
                        </tr>
                      </thead>
                      <tbody>
                        {displayRows.map((row, index) => (
                          <tr
                            key={row.year}
                            className={`border-t border-[rgba(212,175,55,0.05)] transition-colors hover:bg-[rgba(212,175,55,0.03)] ${
                              row.premium > 0 ? 'bg-[rgba(212,175,55,0.02)]' : ''
                            }`}
                            style={{
                              animation: `fadeInUp 0.3s ease-out ${index * 0.03}s both`,
                            }}
                          >
                            <td className="py-2 px-2 text-[#94a3b8]">第{row.year}年</td>
                            <td className="py-2 px-2 text-right text-[#94a3b8]">{row.age}岁</td>
                            <td className="py-2 px-2 text-right text-[#d4af37]">
                              {row.premium > 0 ? `¥${row.premium.toLocaleString()}` : '-'}
                            </td>
                            <td className="py-2 px-2 text-right text-[#34d399] font-medium">
                              ¥{row.cashValue.toLocaleString()}
                            </td>
                            <td className="py-2 px-2 text-right text-[#f1f5f9]">
                              ¥{row.deathBenefit.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {result.rows.length > 10 && (
                    <button
                      onClick={() => setShowAllYears(!showAllYears)}
                      className="w-full mt-3 py-2 text-[#94a3b8] text-sm hover:text-[#d4af37] transition-colors"
                    >
                      {showAllYears ? '收起' : `展开全部 ${result.rows.length} 年数据`}
                      <span className="ml-1">{showAllYears ? '↑' : '↓'}</span>
                    </button>
                  )}
                </div>

                {/* 回本提示 */}
                {result.rows.length > 0 && (() => {
                  const breakEvenYear = result.rows.find((r) => r.cashValue >= r.totalPremium);
                  return breakEvenYear ? (
                    <div className="p-3 rounded-lg bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.2)] mb-5">
                      <p className="text-[#34d399] text-sm font-medium">
                        💡 第 {breakEvenYear.year} 年现金价值超过已交保费（回本）
                      </p>
                    </div>
                  ) : null;
                })()}

                <a href="#contact" className="w-full text-sm !py-3 btn-gold flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)' }}>
                  联系我获取定制方案
                </a>

                <p className="text-[#64748b] text-xs text-center mt-4">
                  * 以上为利益演示，实际收益以保险合同约定为准
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[rgba(52,211,153,0.2)] bg-[rgba(15,23,42,0.3)] p-8 flex flex-col items-center justify-center min-h-[500px]">
              <div className="w-20 h-20 rounded-full bg-[rgba(52,211,153,0.08)] flex items-center justify-center mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <p className="text-[#94a3b8] text-center">
                设定你的投保方案<br />
                一键生成专业保险计划书
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
