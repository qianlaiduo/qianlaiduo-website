'use client';

import { useState } from 'react';

interface Result {
  annualPremium: number;
  totalPremium: number;
  accountValueAtRetire: number;
  monthlyIncome: number;
  bankComparison: number;
  bankTotal: number;
}

const ANNUAL_RATE = 0.03; // 3.0% 年复利

function calcFutureValue(payment: number, years: number, rate: number): number {
  // 期交保费复利增值（年初缴纳）
  let fv = 0;
  for (let i = 0; i < years; i++) {
    fv = (fv + payment) * (1 + rate);
  }
  return fv;
}

function reverseCalc(
  targetMonthly: number,
  receiveYears: number,
  retireAge: number,
  currentAge: number,
  payYears: number,
  rate: number,
  isLifelong: boolean
): number {
  // 退休时需要的账户总额
  let requiredAtRetire: number;

  if (isLifelong) {
    // 终身领取：假设领至100岁，用永续年金近似 + 本金安全
    const receivePeriod = 100 - retireAge;
    // 用年金现值公式
    requiredAtRetire = targetMonthly * 12 * ((1 - Math.pow(1 + rate, -receivePeriod)) / rate);
  } else {
    // 定期领取
    requiredAtRetire = targetMonthly * 12 * ((1 - Math.pow(1 + rate, -receiveYears)) / rate);
  }

  // 倒推每年需要交多少保费
  // FV = PMT * ((1+r)^n - 1) / r * (1+r)  →  PMT = FV / (((1+r)^n - 1) / r * (1+r))
  const growthYears = retireAge - currentAge;
  const accumulateYears = Math.min(payYears, growthYears);

  if (accumulateYears <= 0) return 0;

  // 先算缴费期结束时的价值
  // 然后这笔钱继续复利增值到退休
  const fvFactor = ((Math.pow(1 + rate, accumulateYears) - 1) / rate) * (1 + rate);
  const remainingYears = growthYears - accumulateYears;
  const growthFactor = Math.pow(1 + rate, remainingYears);

  const annualPremium = requiredAtRetire / (fvFactor * growthFactor);
  return Math.ceil(annualPremium / 1000) * 1000; // 取整到千位
}

export function AnnuityReverseCalculator() {
  const [retireAge, setRetireAge] = useState(60);
  const [currentAge, setCurrentAge] = useState(35);
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [receiveYears, setReceiveYears] = useState(20);
  const [isLifelong, setIsLifelong] = useState(false);
  const [payYears, setPayYears] = useState(10);
  const [result, setResult] = useState<Result | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [displayValues, setDisplayValues] = useState({
    annual: 0,
    total: 0,
    account: 0,
    monthly: 0,
  });

  const payYearOptions = [3, 5, 10, 15, 20];
  const receiveYearOptions = [10, 15, 20];

  const calculate = () => {
    setIsCalculating(true);
    setResult(null);

    setTimeout(() => {
      const annualPremium = reverseCalc(
        monthlyIncome,
        receiveYears,
        retireAge,
        currentAge,
        payYears,
        ANNUAL_RATE,
        isLifelong
      );

      const totalPremium = annualPremium * payYears;
      const growthYears = retireAge - currentAge;

      // 计算退休时账户价值
      let accountValue = 0;
      for (let i = 0; i < growthYears; i++) {
        if (i < payYears) {
          accountValue = (accountValue + annualPremium) * (1 + ANNUAL_RATE);
        } else {
          accountValue = accountValue * (1 + ANNUAL_RATE);
        }
      }

      // 银行定存对比（按2%单利计算）
      const bankRate = 0.02;
      const bankTotal = totalPremium * (1 + bankRate * Math.min(payYears, growthYears));
      // 银行定存能领的月金额（仅取利息，本金保留）
      const bankMonthlyIncome = Math.round((bankTotal * bankRate) / 12);

      setResult({
        annualPremium,
        totalPremium,
        accountValueAtRetire: Math.round(accountValue),
        monthlyIncome,
        bankComparison: bankMonthlyIncome,
        bankTotal: Math.round(bankTotal),
      });

      // 数字动画
      const duration = 1000;
      const steps = 50;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setDisplayValues({
          annual: Math.round(annualPremium * easeProgress),
          total: Math.round(totalPremium * easeProgress),
          account: Math.round(accountValue * easeProgress),
          monthly: Math.round(monthlyIncome * easeProgress),
        });

        if (step >= steps) clearInterval(timer);
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
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#a78bfa] focus:outline-none transition-colors"
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
                  onChange={(e) => setRetireAge(Math.max(50, Math.min(70, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#a78bfa] focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">岁</span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
              期望月领金额
            </label>
            <div className="relative">
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Math.max(1000, Math.min(100000, Number(e.target.value))))}
                className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] text-lg font-bold focus:border-[#a78bfa] focus:outline-none transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b]">元/月</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full h-2 bg-[#1e293b] rounded-full appearance-none cursor-pointer mt-3
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br
                [&::-webkit-slider-thumb]:from-[#a78bfa] [&::-webkit-slider-thumb]:to-[#7c3aed]
                [&::-webkit-slider-thumb]:cursor-pointer"
              style={{
                background: `linear-gradient(to right, #a78bfa 0%, #a78bfa ${((monthlyIncome - 1000) / 49000) * 100}%, #1e293b ${((monthlyIncome - 1000) / 49000) * 100}%, #1e293b 100%)`,
              }}
            />
          </div>

          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
              领取年限
            </label>
            <div className="grid grid-cols-4 gap-2">
              {receiveYearOptions.map((y) => (
                <button
                  key={y}
                  onClick={() => { setReceiveYears(y); setIsLifelong(false); }}
                  className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    !isLifelong && receiveYears === y
                      ? 'bg-[rgba(167,139,250,0.15)] border-[#a78bfa] text-[#a78bfa]'
                      : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(167,139,250,0.3)]'
                  }`}
                >
                  {y}年
                </button>
              ))}
              <button
                onClick={() => setIsLifelong(true)}
                className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                  isLifelong
                    ? 'bg-[rgba(167,139,250,0.15)] border-[#a78bfa] text-[#a78bfa]'
                    : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(167,139,250,0.3)]'
                }`}
              >
                终身
              </button>
            </div>
          </div>

          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
              缴费年限
            </label>
            <div className="grid grid-cols-5 gap-2">
              {payYearOptions.map((y) => (
                <button
                  key={y}
                  onClick={() => setPayYears(y)}
                  className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    payYears === y
                      ? 'bg-[rgba(167,139,250,0.15)] border-[#a78bfa] text-[#a78bfa]'
                      : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(167,139,250,0.3)]'
                  }`}
                >
                  {y}年
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[rgba(167,139,250,0.06)] border border-[rgba(167,139,250,0.15)]">
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              <span className="text-[#a78bfa] font-medium">💡 测算说明：</span><br />
              按年金险 3.0% 年复利估算，缴费期内每年投入，退休后按月领取。实际收益以合同为准。
            </p>
          </div>

          <button
            onClick={calculate}
            disabled={isCalculating}
            className="w-full text-base !py-4 btn-gold"
            style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)' }}
          >
            {isCalculating ? '测算中...' : '开始倒推保费'}
          </button>
        </div>

        {/* 右侧：结果区 */}
        <div className="relative">
          <div className="sticky top-24">
            {result ? (
              <div className="rounded-2xl border border-[rgba(167,139,250,0.3)] bg-gradient-to-br from-[rgba(167,139,250,0.08)] to-[rgba(15,23,42,0.8)] p-6 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#a78bfa]/10 rounded-full blur-3xl" />

                <div className="relative">
                  {/* 主结果 */}
                  <div className="text-center mb-6 pb-6 border-b border-[rgba(167,139,250,0.15)]">
                    <span className="inline-block px-3 py-1 rounded-full bg-[rgba(167,139,250,0.15)] text-[#a78bfa] text-xs font-medium mb-3">
                      每年需缴保费
                    </span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-[#a78bfa] text-lg">¥</span>
                      <span className="text-[#a78bfa] text-5xl font-black">
                        {displayValues.annual.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[#64748b] text-sm mt-2">
                      连续缴费 {payYears} 年，共投入 ¥{displayValues.total.toLocaleString()}
                    </p>
                  </div>

                  {/* 关键数据 */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-4 rounded-xl bg-[rgba(15,23,42,0.6)] text-center">
                      <p className="text-[#64748b] text-xs mb-1">退休时账户总额</p>
                      <p className="text-[#f1f5f9] text-lg font-bold">
                        ¥{displayValues.account.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[rgba(15,23,42,0.6)] text-center">
                      <p className="text-[#64748b] text-xs mb-1">每月可领</p>
                      <p className="text-[#34d399] text-lg font-bold">
                        ¥{displayValues.monthly.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* 与银行定存对比 */}
                  <div className="p-4 rounded-xl bg-[rgba(15,23,42,0.5)] mb-6">
                    <p className="text-[#f1f5f9] text-sm font-medium mb-3">💎 与银行定存对比</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#64748b]" />
                          <span className="text-[#94a3b8] text-sm">银行定存（2%单利）</span>
                        </div>
                        <span className="text-[#94a3b8] text-sm">
                          ¥{result.bankComparison.toLocaleString()}/月
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
                          <span className="text-[#f1f5f9] text-sm font-medium">年金险（3%复利）</span>
                        </div>
                        <span className="text-[#a78bfa] text-sm font-bold">
                          ¥{result.monthlyIncome.toLocaleString()}/月
                        </span>
                      </div>
                      <div className="pt-2 border-t border-[rgba(167,139,250,0.1)]">
                        <p className="text-[#34d399] text-xs text-center">
                          ↑ 每月多领 ¥{(result.monthlyIncome - result.bankComparison).toLocaleString()}，差距越久越大
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 领取说明 */}
                  <div className="flex items-start gap-2 mb-6 p-3 rounded-lg bg-[rgba(167,139,250,0.06)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <p className="text-[#94a3b8] text-xs leading-relaxed">
                      {isLifelong ? '终身领取模式下，活多久领多久，与生命等长的现金流。' : `${receiveYears}年期领取，领满期后仍有现金价值，可退保或继续持有。`}
                    </p>
                  </div>

                  <a href="#contact" className="w-full text-sm !py-3 btn-gold flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)' }}>
                    获取专属养老方案
                  </a>

                  <p className="text-[#64748b] text-xs text-center mt-4">
                    * 以上为估算演示，实际收益以保险合同约定为准
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[rgba(167,139,250,0.2)] bg-[rgba(15,23,42,0.3)] p-8 flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-20 h-20 rounded-full bg-[rgba(167,139,250,0.08)] flex items-center justify-center mb-4">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <path d="M12 18v-4" />
                    <path d="M10 16l2 2 2-2" />
                  </svg>
                </div>
                <p className="text-[#94a3b8] text-center">
                  设定你的养老目标<br />
                  一键倒推需要投入多少保费
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
