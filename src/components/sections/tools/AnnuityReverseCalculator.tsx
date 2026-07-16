'use client';

import { useState } from 'react';

interface PlanRow {
  years: number;
  yearlyPremium: number;
  totalPremium: number;
  totalReceive: number;
  ratio: number;
  monthlyReceive: number;
}

interface TierResult {
  rate: number;
  label: string;
  color: string;
  targetAmount: number; // 退休时需要账户总额
  plans: PlanRow[];
}

// 三档利率演示
const RATE_TIERS = [
  { rate: 0.0175, label: '保证利益 1.75%', color: '#94a3b8' },
  { rate: 0.025, label: '中档分红 2.5%', color: '#38bdf8' },
  { rate: 0.035, label: '高档演示 3.5%', color: '#d4af37' },
];

const PAYMENT_OPTIONS = [3, 5, 10, 15, 20];

// 年金现值系数
function annuityPV(rate: number, n: number): number {
  if (rate === 0) return n;
  return (1 - Math.pow(1 + rate, -n)) / rate;
}

// 年金终值系数
function annuityFV(rate: number, n: number): number {
  if (rate === 0) return n;
  return (Math.pow(1 + rate, n) - 1) / rate;
}

export function AnnuityReverseCalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpect, setMonthlyExpect] = useState(5000);
  const [endAge, setEndAge] = useState(85); // 领完年龄
  const [results, setResults] = useState<TierResult[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTier, setActiveTier] = useState(2); // 默认高档

  const calculate = () => {
    setIsCalculating(true);
    setResults([]);

    setTimeout(() => {
      const receiveYears = endAge - retireAge;
      const yearsToRetire = retireAge - currentAge;
      const totalMonthly = monthlyExpect * 12 * receiveYears;

      const newResults: TierResult[] = RATE_TIERS.map((tier) => {
        // 退休时需要的账户总额 = 年金现值（月领转换为年领再算）
        // 精确按月计算更准，这里用简化年领取近似
        const yearlyReceive = monthlyExpect * 12;
        const targetAmount = yearlyReceive * annuityPV(tier.rate, receiveYears);

        const plans = PAYMENT_OPTIONS.map((payYears) => {
          if (payYears > yearsToRetire + 1) {
            return null; // 缴费年限不能超过到退休的时间
          }
          // 年缴保费 = 目标金额 / 年金终值系数(利率, 缴费年数)
          // 但缴费完到退休还有积累时间，要算进去
          const fvAtEndPay = targetAmount / Math.pow(1 + tier.rate, yearsToRetire - payYears);
          const yearlyPremium = Math.round(fvAtEndPay / annuityFV(tier.rate, payYears) * (1 + tier.rate));

          const totalPremium = yearlyPremium * payYears;
          const totalReceive = yearlyReceive * receiveYears;
          const ratio = totalReceive / totalPremium;

          return {
            years: payYears,
            yearlyPremium,
            totalPremium,
            totalReceive: Math.round(totalReceive),
            ratio,
            monthlyReceive: monthlyExpect,
          };
        }).filter((p): p is PlanRow => p !== null);

        return {
          rate: tier.rate,
          label: tier.label,
          color: tier.color,
          targetAmount: Math.round(targetAmount),
          plans,
        };
      });

      // 数字动画
      const duration = 800;
      const steps = 40;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const ease = 1 - Math.pow(1 - progress, 3);

        setResults(
          newResults.map((tier) => ({
            ...tier,
            targetAmount: Math.round(tier.targetAmount * ease),
            plans: tier.plans.map((p) => ({
              ...p,
              yearlyPremium: Math.round(p.yearlyPremium * ease),
              totalPremium: Math.round(p.totalPremium * ease),
              totalReceive: Math.round(p.totalReceive * ease),
            })),
          }))
        );

        if (step >= steps) {
          clearInterval(timer);
          setResults(newResults);
        }
      }, duration / steps);

      setIsCalculating(false);
    }, 400);
  };

  const yearsToRetire = retireAge - currentAge;
  const receiveYears = endAge - retireAge;

  // 找到推荐方案：缴费10年（中档）
  const recommendedPlan = results[1]?.plans.find((p) => p.years === 10);

  return (
    <div className="pt-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 左侧：输入区 */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                当前年龄
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Math.max(0, Math.min(70, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">岁</span>
              </div>
            </div>

            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                退休年龄
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={retireAge}
                  onChange={(e) => setRetireAge(Math.max(currentAge + 5, Math.min(75, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">岁</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                期望月领金额
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={monthlyExpect}
                  onChange={(e) => setMonthlyExpect(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">元</span>
              </div>
            </div>

            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                领取至多少岁
              </label>
              <div className="grid grid-cols-4 gap-1">
                {[75, 80, 85, 90].map((age) => (
                  <button
                    key={age}
                    onClick={() => setEndAge(age)}
                    className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                      endAge === age
                        ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                        : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(212,175,55,0.3)]'
                    }`}
                  >
                    {age}岁
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 信息摘要 */}
          <div className="p-4 rounded-xl bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.15)] space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">距离退休</span>
              <span className="text-[#f1f5f9] font-medium">{yearsToRetire} 年</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">预计领取</span>
              <span className="text-[#f1f5f9] font-medium">{receiveYears} 年 / {receiveYears * 12} 个月</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">累计领取</span>
              <span className="text-[#d4af37] font-bold">
                ¥{(monthlyExpect * 12 * receiveYears).toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={calculate}
            disabled={isCalculating}
            className="w-full text-base !py-4 btn-gold"
          >
            {isCalculating ? '倒推计算中...' : '开始倒推保费'}
          </button>

          {/* 产品说明 */}
          <div className="p-4 rounded-xl bg-[rgba(15,23,42,0.5)] border border-[rgba(212,175,55,0.1)]">
            <p className="text-[#d4af37] text-sm font-medium mb-2">📋 演示产品：平安盛世金越（分红型）</p>
            <p className="text-[#64748b] text-xs leading-relaxed">
              展示三档利率演示：<br />
              • 保证利益：1.75%（写入合同，100%保证）<br />
              • 中档分红：2.5%（中档红利演示）<br />
              • 高档演示：3.5%（高档红利演示，非保证）
            </p>
          </div>
        </div>

        {/* 右侧：结果区 */}
        <div className="space-y-4">
          {results.length > 0 ? (
            <>
              {/* 三档利率切换 */}
              <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)]">
                {RATE_TIERS.map((tier, idx) => (
                  <button
                    key={tier.rate}
                    onClick={() => setActiveTier(idx)}
                    className={`py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                      activeTier === idx
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#f5d06a] text-[#0a0e1a]'
                        : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              {/* 当前档位目标额 */}
              <div className="p-5 rounded-2xl border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.06)] text-center">
                <p className="text-[#94a3b8] text-sm mb-2">
                  退休时需积累账户额度（{results[activeTier]?.label}）
                </p>
                <p className="text-3xl font-black gold-gradient-text">
                  ¥{results[activeTier]?.targetAmount.toLocaleString()}
                </p>
              </div>

              {/* 缴费方案表格 */}
              <div className="rounded-2xl border border-[rgba(212,175,55,0.15)] bg-[rgba(15,23,42,0.6)] overflow-hidden">
                <div className="grid grid-cols-5 gap-1 px-4 py-3 bg-[rgba(212,175,55,0.06)] border-b border-[rgba(212,175,55,0.15)]">
                  <span className="text-[#d4af37] text-xs font-medium text-center">缴费期</span>
                  <span className="text-[#d4af37] text-xs font-medium text-right">年缴</span>
                  <span className="text-[#d4af37] text-xs font-medium text-right">总投入</span>
                  <span className="text-[#d4af37] text-xs font-medium text-right">月领</span>
                  <span className="text-[#d4af37] text-xs font-medium text-right">投入产出比</span>
                </div>

                {results[activeTier]?.plans.map((plan, idx) => (
                  <div
                    key={plan.years}
                    className={`grid grid-cols-5 gap-1 px-4 py-3 border-b border-[rgba(212,175,55,0.08)] last:border-0 transition-colors ${
                      plan.years === 10 ? 'bg-[rgba(212,175,55,0.04)]' : ''
                    }`}
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <span className="text-[#f1f5f9] text-sm text-center font-medium">
                      {plan.years}年交
                      {plan.years === 10 && (
                        <span className="ml-1 px-1.5 py-0.5 rounded bg-[rgba(212,175,55,0.2)] text-[#d4af37] text-[10px]">
                          推荐
                        </span>
                      )}
                    </span>
                    <span className="text-[#f1f5f9] text-sm text-right font-medium">
                      ¥{plan.yearlyPremium.toLocaleString()}
                    </span>
                    <span className="text-[#94a3b8] text-sm text-right">
                      ¥{plan.totalPremium.toLocaleString()}
                    </span>
                    <span className="text-[#d4af37] text-sm text-right font-medium">
                      ¥{plan.monthlyReceive.toLocaleString()}
                    </span>
                    <span className="text-[#34d399] text-sm text-right font-bold">
                      {plan.ratio.toFixed(2)}倍
                    </span>
                  </div>
                ))}
              </div>

              {/* 推荐方案卡片 */}
              {recommendedPlan && (
                <div className="relative p-5 rounded-2xl border border-[rgba(212,175,55,0.4)] bg-gradient-to-br from-[rgba(212,175,55,0.1)] to-[rgba(15,23,42,0.6)] overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[#d4af37] text-[#0a0e1a] text-xs font-bold">
                      ⭐ 推荐方案
                    </span>
                  </div>
                  <p className="text-[#94a3b8] text-sm mb-2">
                    平安盛世金越（分红型）· 中档演示 · 10年缴
                  </p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-[#d4af37] text-3xl font-black">
                      ¥{recommendedPlan.yearlyPremium.toLocaleString()}
                    </span>
                    <span className="text-[#94a3b8] text-sm">元/年 × 10年</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-[#64748b] text-xs">总投入</p>
                      <p className="text-[#f1f5f9] font-bold">
                        ¥{(recommendedPlan.totalPremium / 10000).toFixed(1)}万
                      </p>
                    </div>
                    <div>
                      <p className="text-[#64748b] text-xs">月领</p>
                      <p className="text-[#d4af37] font-bold">
                        ¥{recommendedPlan.monthlyReceive.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#64748b] text-xs">领取总领</p>
                      <p className="text-[#34d399] font-bold">
                        {recommendedPlan.ratio.toFixed(2)}倍
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <a href="#contact" className="btn-gold w-full text-sm !py-3">
                联系我获取详细方案
              </a>

              <p className="text-[#64748b] text-xs text-center">
                * 以上为利益演示，分红非保证，实际以保单合同为准
              </p>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-[rgba(212,175,55,0.2)] bg-[rgba(15,23,42,0.3)] p-8 flex flex-col items-center justify-center min-h-[480px]">
              <div className="w-20 h-20 rounded-full bg-[rgba(212,175,55,0.08)] flex items-center justify-center mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                  <path d="M7 10h10M7 14h10M9 6h6" />
                </svg>
              </div>
              <p className="text-[#94a3b8] text-center">
                输入期望月领金额<br />
                倒推需要准备多少养老金<br />
                一次对比5种缴费方案
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
