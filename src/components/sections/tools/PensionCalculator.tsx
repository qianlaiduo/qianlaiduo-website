'use client';

import { useState } from 'react';

interface Result {
  monthlyPension: number;
  basicPension: number;
  personalPension: number;
  replacementRate: number;
  totalYears: number;
  monthlySalary: number;
}

// 计发月数
const paymentMonths: Record<number, number> = {
  50: 195,
  55: 170,
  60: 139,
  65: 101,
};

export function PensionCalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retireAge, setRetireAge] = useState(60);
  const [paidYears, setPaidYears] = useState(10);
  const [monthlySalary, setMonthlySalary] = useState(8000);
  const [avgSalary, setAvgSalary] = useState(6500);
  const [personalBalance, setPersonalBalance] = useState(80000);
  const [result, setResult] = useState<Result | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [displayValues, setDisplayValues] = useState({
    monthly: 0,
    basic: 0,
    personal: 0,
  });

  const calculate = () => {
    setIsCalculating(true);
    setResult(null);

    setTimeout(() => {
      const remainingYears = retireAge - currentAge;
      const totalYears = paidYears + remainingYears;

      // 假设工资指数为 1.2（工资略高于社平）
      const salaryIndex = Math.min(3, Math.max(0.6, monthlySalary / avgSalary));

      // 基础养老金 = 社平工资 × (1 + 本人指数) ÷ 2 × 缴费年限 × 1%
      const basicPension = Math.round(
        (avgSalary * (1 + salaryIndex)) / 2 * totalYears * 0.01
      );

      // 个人账户养老金 = 个人账户余额 ÷ 计发月数
      // 加上剩余工作年限的积累（个人缴纳8%进入个人账户）
      const monthlyPersonalContribution = monthlySalary * 0.08;
      const futurePersonalBalance =
        personalBalance +
        monthlyPersonalContribution * 12 * remainingYears * 1.02; // 假设2%年收益
      const personalPension = Math.round(
        futurePersonalBalance / (paymentMonths[retireAge] || 139)
      );

      const monthlyPension = basicPension + personalPension;
      const replacementRate = (monthlyPension / monthlySalary) * 100;

      setResult({
        monthlyPension,
        basicPension,
        personalPension,
        replacementRate,
        totalYears,
        monthlySalary,
      });

      // 数字动画
      const duration = 1000;
      const steps = 50;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

        setDisplayValues({
          monthly: Math.round(monthlyPension * easeProgress),
          basic: Math.round(basicPension * easeProgress),
          personal: Math.round(personalPension * easeProgress),
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      setIsCalculating(false);
    }, 500);
  };

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
                  onChange={(e) => setCurrentAge(Math.max(18, Math.min(65, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">
                  岁
                </span>
              </div>
            </div>

            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                退休年龄
              </label>
              <div className="grid grid-cols-3 gap-1">
                {[55, 60, 65].map((age) => (
                  <button
                    key={age}
                    onClick={() => setRetireAge(age)}
                    className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                      retireAge === age
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                已缴年限
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={paidYears}
                  onChange={(e) => setPaidYears(Math.max(0, Math.min(40, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">
                  年
                </span>
              </div>
            </div>

            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                月均工资
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">
                  元
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                当地社平工资
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">
                  元
                </span>
              </div>
            </div>

            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                个人账户余额
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={personalBalance}
                  onChange={(e) => setPersonalBalance(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">
                  元
                </span>
              </div>
            </div>
          </div>

          {/* 提示 */}
          <div className="p-4 rounded-xl bg-[rgba(56,189,248,0.06)] border border-[rgba(56,189,248,0.15)]">
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              <span className="text-[#38bdf8] font-medium">💡 计算公式：</span><br />
              基础养老金 = 社平工资 × (1+工资指数) ÷ 2 × 缴费年限 × 1%<br />
              个人账户养老金 = 个人账户余额 ÷ 计发月数
            </p>
          </div>

          <button
            onClick={calculate}
            disabled={isCalculating}
            className="btn-gold w-full text-base !py-4"
          >
            {isCalculating ? '计算中...' : '开始计算养老金'}
          </button>
        </div>

        {/* 右侧：结果区 */}
        <div className="relative">
          <div className="sticky top-24">
            {result ? (
              <div className="rounded-2xl border border-[rgba(56,189,248,0.3)] bg-gradient-to-br from-[rgba(56,189,248,0.08)] to-[rgba(15,23,42,0.8)] p-6 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#38bdf8]/10 rounded-full blur-3xl" />

                <div className="relative">
                  {/* 主结果 */}
                  <div className="text-center mb-6 pb-6 border-b border-[rgba(56,189,248,0.15)]">
                    <span className="inline-block px-3 py-1 rounded-full bg-[rgba(56,189,248,0.15)] text-[#38bdf8] text-xs font-medium mb-3">
                      每月可领养老金
                    </span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-[#38bdf8] text-lg">¥</span>
                      <span className="text-[#38bdf8] text-5xl font-black">
                        {displayValues.monthly.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[#64748b] text-sm mt-2">
                      退休后每月领取（按当前水平预估）
                    </p>
                  </div>

                  {/* 明细 */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[rgba(15,23,42,0.5)]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[rgba(56,189,248,0.15)] flex items-center justify-center text-[#38bdf8]">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                          </svg>
                        </div>
                        <span className="text-[#94a3b8] text-sm">基础养老金</span>
                      </div>
                      <span className="text-[#f1f5f9] font-bold">
                        ¥{displayValues.basic.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-[rgba(15,23,42,0.5)]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[rgba(167,139,250,0.15)] flex items-center justify-center text-[#a78bfa]">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <span className="text-[#94a3b8] text-sm">个人账户养老金</span>
                      </div>
                      <span className="text-[#f1f5f9] font-bold">
                        ¥{displayValues.personal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* 替代率 */}
                  <div className="p-4 rounded-xl bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.2)] mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#94a3b8] text-sm">养老金替代率</span>
                      <span className="text-[#d4af37] font-bold text-lg">
                        {result.replacementRate.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#38bdf8] to-[#d4af37] rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(100, result.replacementRate)}%` }}
                      />
                    </div>
                    <p className="text-[#64748b] text-xs mt-2">
                      国际建议替代率 70-80% 才能维持退休前生活水平
                    </p>
                  </div>

                  {/* 补充信息 */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center p-3 rounded-lg bg-[rgba(15,23,42,0.5)]">
                      <p className="text-[#64748b] text-xs mb-1">累计缴费年限</p>
                      <p className="text-[#f1f5f9] font-bold">{result.totalYears}年</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-[rgba(15,23,42,0.5)]">
                      <p className="text-[#64748b] text-xs mb-1">距离退休</p>
                      <p className="text-[#f1f5f9] font-bold">{retireAge - currentAge}年</p>
                    </div>
                  </div>

                  <a href="#contact" className="btn-gold w-full text-sm !py-3" style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)' }}>
                    了解商保补充方案
                  </a>

                  <p className="text-[#64748b] text-xs text-center mt-4">
                    * 以上为估算值，实际养老金以社保局核定为准
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[rgba(56,189,248,0.2)] bg-[rgba(15,23,42,0.3)] p-8 flex flex-col items-center justify-center min-h-[480px]">
                <div className="w-20 h-20 rounded-full bg-[rgba(56,189,248,0.08)] flex items-center justify-center mb-4">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <p className="text-[#94a3b8] text-center">
                  填写左侧信息<br />
                  点击「开始计算」预估养老金
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
