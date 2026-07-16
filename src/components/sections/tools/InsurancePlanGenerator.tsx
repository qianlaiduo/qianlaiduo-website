'use client';

import { useState } from 'react';

interface PlanRow {
  year: number;
  age: number;
  yearlyPremium: number;
  cumulativePremium: number;
  cashValueGuaranteed: number; // 保证现金价值
  cashValueDividend: number;   // 分红现价（中档）
  deathBenefit: number;        // 身故保额
  isBreakeven?: boolean;       // 回本年份
}

// 产品列表
const products = [
  {
    id: 'shengshi-jinyue',
    name: '平安盛世金越（分红型）',
    type: 'endowment',
    desc: '增额终身寿 · 保证2.5% + 分红',
    guaranteeRate: 0.025,
    dividendRate: 0.03,
    features: ['保额每年递增', '灵活减保取现', '财富传承'],
  },
  {
    id: 'jinyue-annuity',
    name: '平安金越养老年金',
    type: 'annuity',
    desc: '养老年金险 · 固定领取终身',
    guaranteeRate: 0.025,
    annuityStartAge: 60,
    features: ['终身领取', '保证领取20年', '与生命等长现金流'],
  },
  {
    id: 'shengshifu-2026',
    name: '平安盛世福2026版',
    type: 'critical',
    desc: '重疾险 · 120种重疾+20中症+40轻症',
    features: ['终身保障', '重疾多次赔', '身故/全残保障'],
  },
];

// 重疾险费率表（30万保额，元/年，简化估算）
// 按年龄段估算
function getCriticalPremium(age: number, gender: 'male' | 'female', years: number): number {
  // 简化估算：30岁男30年交≈6500，每岁+约80
  const baseMale = 5000 + age * 80;
  const baseFemale = 4600 + age * 75;
  const base = gender === 'male' ? baseMale : baseFemale;

  // 不同缴费期调整
  const factor = years === 3 ? 3.2 : years === 5 ? 2.1 : years === 10 ? 1.3 : years === 20 ? 1 : 1.2;
  return Math.round(base * factor);
}

export function InsurancePlanGenerator() {
  const [age, setAge] = useState(35);
  const [premium, setPremium] = useState(20000);
  const [payYears, setPayYears] = useState(10);
  const [productId, setProductId] = useState('shengshi-jinyue');
  const [rows, setRows] = useState<PlanRow[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAllYears, setShowAllYears] = useState(false);
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const product = products.find((p) => p.id === productId)!;

  const generate = () => {
    setIsCalculating(true);
    setRows([]);

    setTimeout(() => {
      const displayYears = 30; // 演示30年
      const plan: PlanRow[] = [];

      if (product.type === 'endowment') {
        // 增额终身寿 / 分红型
        let cashGuaranteed = 0;
        let cashDividend = 0;
        let deathBenefit = 0;
        let cumulative = 0;
        let breakevenFound = false;

        for (let y = 1; y <= displayYears; y++) {
          cumulative = y <= payYears ? premium * y : premium * payYears;

          // 保证现价：年缴复利2.5%，但早期有费用扣除，简化模拟
          if (y <= payYears) {
            cashGuaranteed = Math.round(
              cashGuaranteed * (1 + (product.guaranteeRate || 0.025)) + premium * 0.85
            );
            cashDividend = Math.round(
              cashDividend * (1 + (product.dividendRate || 0.03)) + premium * 0.9
            );
          } else {
            cashGuaranteed = Math.round(cashGuaranteed * (1 + (product.guaranteeRate || 0.025)));
            cashDividend = Math.round(cashDividend * (1 + (product.dividendRate || 0.03)));
          }

          // 身故保额：取已交保费或现价较大者
          deathBenefit = Math.max(cumulative, cashGuaranteed);

          const isBreak = !breakevenFound && cashGuaranteed >= cumulative;
          if (isBreak) breakevenFound = true;

          plan.push({
            year: y,
            age: age + y,
            yearlyPremium: y <= payYears ? premium : 0,
            cumulativePremium: cumulative,
            cashValueGuaranteed: cashGuaranteed,
            cashValueDividend: cashDividend,
            deathBenefit,
            isBreakeven: isBreak,
          });
        }
      } else if (product.type === 'annuity') {
        // 年金险
        let cashGuaranteed = 0;
        let cumulative = 0;
        const startAge = product.annuityStartAge || 60;
        const yearlyAnnuity = Math.round(premium * payYears * 0.05); // 简化，每年领约总投入5%

        for (let y = 1; y <= displayYears; y++) {
          cumulative = y <= payYears ? premium * y : premium * payYears;
          const currentAge = age + y;

          if (y <= payYears) {
            cashGuaranteed = Math.round(cashGuaranteed * 1.025 + premium * 0.82);
          } else if (currentAge < startAge) {
            cashGuaranteed = Math.round(cashGuaranteed * 1.03);
          } else {
            // 开始领取
            cashGuaranteed = Math.round(cashGuaranteed * 1.03 - yearlyAnnuity);
          }

          const deathBenefit = Math.max(cumulative, cashGuaranteed);

          plan.push({
            year: y,
            age: currentAge,
            yearlyPremium: y <= payYears ? premium : 0,
            cumulativePremium: cumulative,
            cashValueGuaranteed: cashGuaranteed,
            cashValueDividend: Math.round(cashGuaranteed * 1.15),
            deathBenefit,
          });
        }
      } else if (product.type === 'critical') {
        // 重疾险
        const sumInsured = Math.round(premium * payYears * 3.5); // 简化估算保额
        const cumulative = premium * payYears;

        for (let y = 1; y <= displayYears; y++) {
          const cum = y <= payYears ? premium * y : cumulative;
          // 重疾险现价较低，逐年缓慢增长
          const cv = Math.round(
            y <= payYears
              ? cum * (0.2 + y * 0.06)
              : cum * (0.8 + (y - payYears) * 0.005)
          );

          plan.push({
            year: y,
            age: age + y,
            yearlyPremium: y <= payYears ? premium : 0,
            cumulativePremium: cum,
            cashValueGuaranteed: cv,
            cashValueDividend: 0,
            deathBenefit: sumInsured,
          });
        }
      }

      // 数字动画
      const duration = 800;
      const steps = 30;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const ease = 1 - Math.pow(1 - progress, 3);

        setRows(
          plan.map((r) => ({
            ...r,
            cashValueGuaranteed: Math.round(r.cashValueGuaranteed * ease),
            cashValueDividend: Math.round(r.cashValueDividend * ease),
            deathBenefit: Math.round(r.deathBenefit * ease),
            cumulativePremium: Math.round(r.cumulativePremium * ease),
          }))
        );

        if (step >= steps) {
          clearInterval(timer);
          setRows(plan);
        }
      }, duration / steps);

      setIsCalculating(false);
    }, 400);
  };

  const displayRows = showAllYears ? rows : rows.slice(0, 10);
  const lastRow = rows[rows.length - 1];
  const totalPremium = premium * payYears;
  const breakevenRow = rows.find((r) => r.isBreakeven);

  return (
    <div className="pt-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* 左侧：输入区 */}
        <div className="md:col-span-1 space-y-5">
          {/* 产品选择 */}
          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-3">
              选择产品
            </label>
            <div className="space-y-2">
              {products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setProductId(p.id)}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    productId === p.id
                      ? 'bg-[rgba(212,175,55,0.1)] border-[#d4af37]'
                      : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.3)]'
                  }`}
                >
                  <p
                    className={`text-sm font-bold ${
                      productId === p.id ? 'text-[#d4af37]' : 'text-[#f1f5f9]'
                    }`}
                  >
                    {p.name}
                  </p>
                  <p className="text-[#64748b] text-xs mt-1">{p.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 投保人信息 */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                投保人年龄
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Math.max(0, Math.min(65, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(15,23,42,0.8)] border border-[rgba(212,175,55,0.2)] text-[#f1f5f9] focus:border-[#d4af37] focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm">岁</span>
              </div>
            </div>

            <div>
              <label className="text-[#f1f5f9] text-sm font-medium block mb-2">
                性别
              </label>
              <div className="grid grid-cols-2 gap-1">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                      gender === g
                        ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                        : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8]'
                    }`}
                  >
                    {g === 'male' ? '男' : '女'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 年缴保费 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[#f1f5f9] text-sm font-medium">年缴保费</label>
              <span className="text-[#d4af37] font-bold">¥{premium.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="3000"
              max="200000"
              step="1000"
              value={premium}
              onChange={(e) => setPremium(Number(e.target.value))}
              className="w-full h-2 bg-[#1e293b] rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br
                [&::-webkit-slider-thumb]:from-[#f5d06a] [&::-webkit-slider-thumb]:to-[#d4af37]
                [&::-webkit-slider-thumb]:cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${((premium - 3000) / 197000) * 100}%, #1e293b ${((premium - 3000) / 197000) * 100}%, #1e293b 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-[#64748b] mt-1">
              <span>3千</span>
              <span>5万</span>
              <span>20万</span>
            </div>
          </div>

          {/* 缴费年限 */}
          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-3">
              缴费年限
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[3, 5, 10, 20].map((y) => (
                <button
                  key={y}
                  onClick={() => setPayYears(y)}
                  className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                    payYears === y
                      ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                      : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(212,175,55,0.3)]'
                  }`}
                >
                  {y}年交
                </button>
              ))}
            </div>
          </div>

          {/* 汇总信息 */}
          <div className="p-4 rounded-xl bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.15)]">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#94a3b8]">总投入保费</span>
              <span className="text-[#d4af37] font-bold">
                ¥{totalPremium.toLocaleString()}
              </span>
            </div>
            {product.type === 'critical' && (
              <div className="flex justify-between text-sm">
                <span className="text-[#94a3b8]">重疾保额(估)</span>
                <span className="text-[#f1f5f9] font-medium">
                  ¥{Math.round(totalPremium * 3.5).toLocaleString()}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={generate}
            disabled={isCalculating}
            className="w-full text-base !py-4 btn-gold"
          >
            {isCalculating ? '生成中...' : '生成利益演示表'}
          </button>
        </div>

        {/* 右侧：计划书表格 */}
        <div className="md:col-span-2">
          {rows.length > 0 ? (
            <div className="rounded-2xl border border-[rgba(212,175,55,0.15)] bg-[rgba(15,23,42,0.6)] overflow-hidden">
              {/* 概览 */}
              <div className="p-4 border-b border-[rgba(212,175,55,0.15)] bg-[rgba(212,175,55,0.04)]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[#f1f5f9] font-bold">{product.name}</h4>
                  <span className="px-2 py-1 rounded-full bg-[rgba(212,175,55,0.15)] text-[#d4af37] text-xs">
                    {payYears}年交 · 年缴¥{premium.toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-[#64748b] text-xs mb-1">累计保费</p>
                    <p className="text-[#f1f5f9] font-bold">
                      ¥{totalPremium.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#64748b] text-xs mb-1">30年现价（中档）</p>
                    <p className="text-[#d4af37] font-bold">
                      ¥{lastRow?.cashValueDividend.toLocaleString() || '0'}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#64748b] text-xs mb-1">
                      {product.type === 'critical' ? '重疾保额' : '第30年身故金'}
                    </p>
                    <p className="text-[#38bdf8] font-bold">
                      ¥{lastRow?.deathBenefit.toLocaleString() || '0'}
                    </p>
                  </div>
                </div>

                {breakevenRow && product.type !== 'critical' && (
                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-[rgba(52,211,153,0.15)] text-[#34d399] font-medium">
                      ✓ 第{breakevenRow.year}年回本
                    </span>
                    <span className="text-[#64748b]">
                      现金价值超过已交保费（{breakevenRow.age}岁）
                    </span>
                  </div>
                )}
              </div>

              {/* 表格 */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[rgba(212,175,55,0.15)] bg-[rgba(15,23,42,0.8)]">
                      <th className="px-3 py-3 text-left text-[#d4af37] text-xs font-medium">保单年度</th>
                      <th className="px-3 py-3 text-left text-[#d4af37] text-xs font-medium">年龄</th>
                      <th className="px-3 py-3 text-right text-[#d4af37] text-xs font-medium">年缴保费</th>
                      <th className="px-3 py-3 text-right text-[#d4af37] text-xs font-medium">累计保费</th>
                      <th className="px-3 py-3 text-right text-[#d4af37] text-xs font-medium">现金价值(保证)</th>
                      {product.type !== 'critical' && (
                        <th className="px-3 py-3 text-right text-[#d4af37] text-xs font-medium">现金价值(中档)</th>
                      )}
                      <th className="px-3 py-3 text-right text-[#d4af37] text-xs font-medium">身故保额</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayRows.map((row, idx) => (
                      <tr
                        key={row.year}
                        className={`border-b border-[rgba(212,175,55,0.08)] last:border-0 transition-colors hover:bg-[rgba(212,175,55,0.04)] ${
                          row.isBreakeven ? 'bg-[rgba(52,211,153,0.06)]' : ''
                        }`}
                        style={{ animationDelay: `${idx * 40}ms` }}
                      >
                        <td className="px-3 py-2.5 text-[#f1f5f9] font-medium">
                          第{row.year}年
                          {row.isBreakeven && (
                            <span className="ml-1 px-1.5 py-0.5 rounded bg-[rgba(52,211,153,0.2)] text-[#34d399] text-[10px]">
                              回本
                            </span>
                          )}
                        </td>
                        <td className="px-3 py-2.5 text-[#94a3b8]">{row.age}岁</td>
                        <td className="px-3 py-2.5 text-right text-[#94a3b8]">
                          {row.yearlyPremium > 0 ? `¥${row.yearlyPremium.toLocaleString()}` : '—'}
                        </td>
                        <td className="px-3 py-2.5 text-right text-[#f1f5f9]">
                          ¥{row.cumulativePremium.toLocaleString()}
                        </td>
                        <td className="px-3 py-2.5 text-right text-[#f1f5f9] font-medium">
                          ¥{row.cashValueGuaranteed.toLocaleString()}
                        </td>
                        {product.type !== 'critical' && (
                          <td className="px-3 py-2.5 text-right text-[#d4af37] font-medium">
                            ¥{row.cashValueDividend.toLocaleString()}
                          </td>
                        )}
                        <td className="px-3 py-2.5 text-right text-[#38bdf8] font-medium">
                          ¥{row.deathBenefit.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {rows.length > 10 && (
                <div className="p-3 border-t border-[rgba(212,175,55,0.15)] text-center">
                  <button
                    onClick={() => setShowAllYears(!showAllYears)}
                    className="text-[#d4af37] text-sm hover:underline"
                  >
                    {showAllYears ? '收起' : `展开全部 ${rows.length} 年 →`}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[rgba(212,175,55,0.2)] bg-[rgba(15,23,42,0.3)] p-8 flex flex-col items-center justify-center min-h-[480px]">
              <div className="w-20 h-20 rounded-full bg-[rgba(212,175,55,0.08)] flex items-center justify-center mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <p className="text-[#94a3b8] text-center">
                选择产品并填写信息<br />
                点击「生成利益演示表」<br />
                查看专业保险计划书
              </p>
            </div>
          )}

          {rows.length > 0 && (
            <>
              <a href="#contact" className="btn-gold w-full text-sm !py-3 mt-4">
                联系我获取详细方案
              </a>
              <p className="text-[#64748b] text-xs text-center mt-3">
                * 以上为利益演示，分红非保证，实际以保单合同为准
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
