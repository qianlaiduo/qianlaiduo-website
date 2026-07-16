'use client';

import { useState } from 'react';

// ==================== 产品数据 ====================
const products = [
  {
    id: 'esb-long',
    name: '平安e生保长期医疗（2025版）',
    coverage: '年度400万 + 质子重离子400万',
    renewLabel: '20年保证续保',
    renewDesc: '写入合同，续保稳定',
    highlights: ['院外特药含CAR-T', '800万保证续保期内', '家庭共享免赔额'],
    color: '#d4af37',
  },
  {
    id: 'esb-yue',
    name: '平安e生保悦享版',
    coverage: '600万医疗保障',
    renewLabel: '1年期',
    renewDesc: '60天内续保免等待期',
    highlights: ['0免赔可选', '70岁可投', '4档计划灵活选'],
    color: '#38bdf8',
  },
  {
    id: 'anyibao',
    name: '平安安医保',
    coverage: '20万医疗 + 意外保障',
    renewLabel: '1年期',
    renewDesc: '住院+意外双保障',
    highlights: ['0免赔住院医疗', '意外医疗同步享', '性价比优选'],
    color: '#34d399',
  },
];

// ==================== 费率表（有社保，元/年）====================
const rateTableWithSocial = [
  { minAge: 0, maxAge: 5, 'esb-long': 730, 'esb-yue': 730, anyibao: 880 },
  { minAge: 6, maxAge: 15, 'esb-long': 197, 'esb-yue': 197, anyibao: 350 },
  { minAge: 16, maxAge: 25, 'esb-long': 186, 'esb-yue': 186, anyibao: 280 },
  { minAge: 26, maxAge: 35, 'esb-long': 309, 'esb-yue': 309, anyibao: 450 },
  { minAge: 36, maxAge: 45, 'esb-long': 572, 'esb-yue': 572, anyibao: 780 },
  { minAge: 46, maxAge: 55, 'esb-long': 1041, 'esb-yue': 1041, anyibao: 1280 },
  { minAge: 56, maxAge: 65, 'esb-long': 2292, 'esb-yue': 2292, anyibao: 2200 },
  { minAge: 66, maxAge: 70, 'esb-long': 3500, 'esb-yue': 3500, anyibao: 0 }, // 0 = 不支持
];

// 无社保系数
const NO_SOCIAL_FACTOR = 2.27;

// 家庭折扣
const familyDiscounts = [
  { members: 1, discount: 1, label: '单人价' },
  { members: 2, discount: 0.95, label: '2人 95折' },
  { members: 3, discount: 0.9, label: '3人 9折' },
  { members: 4, discount: 0.85, label: '4-6人 85折' },
  { members: 5, discount: 0.85, label: '4-6人 85折' },
  { members: 6, discount: 0.85, label: '4-6人 85折' },
];

// ==================== 计算函数 ====================
function getPremium(age: number, hasSocial: boolean, productId: string): number {
  const tier = rateTableWithSocial.find(
    (t) => age >= t.minAge && age <= t.maxAge
  );
  if (!tier) return 0;

  const baseRate = tier[productId as keyof typeof tier] as number;
  if (baseRate === 0) return 0; // 不支持

  return hasSocial ? baseRate : Math.round(baseRate * NO_SOCIAL_FACTOR);
}

function getDiscount(members: number): number {
  const d = familyDiscounts.find((f) => f.members === members);
  return d ? d.discount : 1;
}

// ==================== 组件 ====================
export function MedicalInsuranceCalculator() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [hasSocial, setHasSocial] = useState(true);
  const [familyMembers, setFamilyMembers] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [displayedPremiums, setDisplayedPremiums] = useState<Record<string, number>>({
    'esb-long': 0,
    'esb-yue': 0,
    anyibao: 0,
  });

  const calculate = () => {
    setIsCalculating(true);
    setShowResult(false);

    setTimeout(() => {
      const discount = getDiscount(familyMembers);
      const premiums: Record<string, number> = {};

      products.forEach((p) => {
        const base = getPremium(age, hasSocial, p.id);
        premiums[p.id] = base > 0 ? Math.round(base * discount) : 0;
      });

      // 数字动画
      const duration = 800;
      const steps = 40;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const next: Record<string, number> = {};
        products.forEach((p) => {
          next[p.id] = Math.round(premiums[p.id] * easeProgress);
        });
        setDisplayedPremiums(next);

        if (step >= steps) {
          clearInterval(timer);
          setDisplayedPremiums(premiums);
        }
      }, duration / steps);

      setShowResult(true);
      setIsCalculating(false);
    }, 400);
  };

  const discount = getDiscount(familyMembers);
  const comboPremium =
    displayedPremiums['esb-long'] > 0 && displayedPremiums['anyibao'] > 0
      ? displayedPremiums['esb-long'] + displayedPremiums['anyibao']
      : 0;

  return (
    <div className="pt-6">
      {/* 输入区 */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* 年龄滑块 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-[#f1f5f9] text-sm font-medium">
                被保险人年龄
              </label>
              <span className="text-[#d4af37] text-2xl font-bold">
                {age} <span className="text-sm text-[#94a3b8] font-normal">岁</span>
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="70"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-2 bg-[#1e293b] rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br
                [&::-webkit-slider-thumb]:from-[#f5d06a] [&::-webkit-slider-thumb]:to-[#d4af37]
                [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:shadow-[rgba(212,175,55,0.4)]"
              style={{
                background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${(age / 70) * 100}%, #1e293b ${(age / 70) * 100}%, #1e293b 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-[#64748b] mt-2">
              <span>0岁</span>
              <span>30岁</span>
              <span>50岁</span>
              <span>70岁</span>
            </div>
          </div>

          {/* 性别选择 */}
          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-3">
              性别
            </label>
            <div className="flex gap-3">
              {(['male', 'female'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-3 rounded-xl border font-medium transition-all duration-300 ${
                    gender === g
                      ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                      : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(212,175,55,0.3)]'
                  }`}
                >
                  {g === 'male' ? '男' : '女'}
                </button>
              ))}
            </div>
            <p className="text-[#64748b] text-xs mt-2">* 性别对保费影响较小，展示用</p>
          </div>

          {/* 社保情况 */}
          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-3">
              是否有社保
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setHasSocial(true)}
                className={`flex-1 py-3 rounded-xl border font-medium transition-all duration-300 ${
                  hasSocial
                    ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                    : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(212,175,55,0.3)]'
                }`}
              >
                有社保
              </button>
              <button
                onClick={() => setHasSocial(false)}
                className={`flex-1 py-3 rounded-xl border font-medium transition-all duration-300 ${
                  !hasSocial
                    ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                    : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(212,175,55,0.3)]'
                }`}
              >
                无社保
              </button>
            </div>
            {hasSocial && (
              <p className="text-[#34d399] text-xs mt-2">
                ✓ 有社保保费约为无社保的 44%，更划算
              </p>
            )}
          </div>

          {/* 家庭人数 */}
          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-3">
              家庭参保人数
            </label>
            <div className="grid grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setFamilyMembers(num)}
                  className={`py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    familyMembers === num
                      ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                      : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(212,175,55,0.3)]'
                  }`}
                >
                  {num}人
                </button>
              ))}
            </div>
            <p className="text-[#94a3b8] text-xs mt-2">
              💡 家庭投保：2人95折、3人9折、4-6人85折（当前：{Math.round((1 - discount) * 100)}%优惠）
            </p>
          </div>

          <button
            onClick={calculate}
            disabled={isCalculating}
            className="btn-gold w-full text-base !py-4"
          >
            {isCalculating ? '报价中...' : '获取三家产品报价'}
          </button>
        </div>

        {/* 结果区 */}
        <div className="space-y-4">
          {showResult ? (
            <>
              {/* 三个产品卡片 */}
              {products.map((product) => {
                const premium = displayedPremiums[product.id];
                const notSupported = premium === 0 && showResult;

                return (
                  <div
                    key={product.id}
                    className="relative rounded-2xl border bg-[rgba(15,23,42,0.6)] overflow-hidden transition-all duration-500 hover:bg-[rgba(15,23,42,0.9)]"
                    style={{ borderColor: `${product.color}30` }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, transparent, ${product.color}60, transparent)` }}
                    />

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <h4
                            className="font-bold text-[#f1f5f9] text-base leading-tight"
                            style={{ color: product.color }}
                          >
                            {product.name}
                          </h4>
                          <p className="text-[#94a3b8] text-xs mt-1">
                            {product.coverage}
                          </p>
                        </div>

                        {notSupported ? (
                          <div className="flex-shrink-0 px-3 py-1 rounded bg-[rgba(100,116,139,0.15)] text-[#64748b] text-xs">
                            不支持
                          </div>
                        ) : (
                          <div className="text-right flex-shrink-0">
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-xs" style={{ color: product.color }}>¥</span>
                              <span className="text-2xl font-bold" style={{ color: product.color }}>
                                {premium.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-[#64748b] text-xs">元/年</p>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{ background: `${product.color}15`, color: product.color, border: `1px solid ${product.color}30` }}
                        >
                          {product.renewLabel}
                        </span>
                        <span className="text-[#64748b] text-xs">{product.renewDesc}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {product.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2 py-1 rounded text-[#94a3b8] text-xs bg-[rgba(255,255,255,0.04)]"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* 推荐组合 */}
              {displayedPremiums['esb-long'] > 0 && displayedPremiums['anyibao'] > 0 && (
                <div className="relative rounded-2xl border border-[rgba(212,175,55,0.4)] bg-gradient-to-br from-[rgba(212,175,55,0.1)] to-[rgba(52,211,153,0.05)] p-5 overflow-hidden">
                  <div className="absolute top-2 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#34d399] text-[#0a0e1a] text-xs font-bold">
                      推荐组合
                    </span>
                  </div>

                  <div className="mb-3">
                    <p className="text-[#f1f5f9] font-bold text-base">
                      e生保长期 + 安医保 = 0免赔全覆盖
                    </p>
                    <p className="text-[#94a3b8] text-xs mt-1">
                      大额风险靠e生保扛，小额住院安医保报，0免赔更省心
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-[#d4af37] text-sm">合计 ¥</span>
                    <span className="text-3xl font-black gold-gradient-text">
                      {comboPremium.toLocaleString()}
                    </span>
                    <span className="text-[#94a3b8] text-sm">/年</span>
                  </div>
                </div>
              )}

              <a href="#contact" className="btn-gold w-full text-sm !py-3">
                联系我获取详细方案
              </a>

              <p className="text-[#64748b] text-xs text-center">
                * 以上为标准费率参考，实际保费以核保结果为准
              </p>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-[rgba(212,175,55,0.2)] bg-[rgba(15,23,42,0.3)] p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-20 h-20 rounded-full bg-[rgba(212,175,55,0.08)] flex items-center justify-center mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <p className="text-[#94a3b8] text-center">
                调整左侧参数<br />
                点击「获取三家产品报价」<br />
                一次对比三款平安医疗险
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
