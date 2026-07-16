'use client';

import { useState, useEffect } from 'react';

interface Result {
  planName: string;
  premium: number;
  originalPremium: number;
  coverage: string;
  discount: number;
  familyMembers: number;
}

const premiumTable: { min: number; max: number; base: number }[] = [
  { min: 0, max: 5, base: 320 },
  { min: 6, max: 17, base: 200 },
  { min: 18, max: 30, base: 280 },
  { min: 31, max: 40, base: 420 },
  { min: 41, max: 50, base: 680 },
  { min: 51, max: 55, base: 980 },
  { min: 56, max: 60, base: 1380 },
  { min: 61, max: 65, base: 1880 },
  { min: 66, max: 70, base: 2580 },
  { min: 71, max: 80, base: 3280 },
];

const familyDiscounts: { members: number; discount: number; label: string }[] = [
  { members: 1, discount: 1, label: '单人价' },
  { members: 2, discount: 0.95, label: '2人 95折' },
  { members: 3, discount: 0.9, label: '3人 9折' },
  { members: 4, discount: 0.85, label: '4人+ 85折' },
];

function getBasePremium(age: number): number {
  const tier = premiumTable.find((t) => age >= t.min && age <= t.max);
  return tier ? tier.base : 3280;
}

export function MedicalInsuranceCalculator() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [hasSocial, setHasSocial] = useState(true);
  const [familyMembers, setFamilyMembers] = useState(1);
  const [result, setResult] = useState<Result | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [displayPremium, setDisplayPremium] = useState(0);

  const calculate = () => {
    setIsCalculating(true);
    setResult(null);

    setTimeout(() => {
      const base = getBasePremium(age);
      // 有社保便宜约40%
      const socialFactor = hasSocial ? 0.62 : 1;
      // 女性稍贵（医疗险女性赔付率略高）
      const genderFactor = gender === 'female' ? 1.05 : 1;
      // 家庭折扣
      const discountTier = familyDiscounts.find(
        (d) => familyMembers <= d.members
      ) || familyDiscounts[familyDiscounts.length - 1];

      const premiumBeforeDiscount = base * socialFactor * genderFactor;
      const finalPremium = Math.round(premiumBeforeDiscount * discountTier.discount);

      const planName =
        age <= 60 ? '平安e生保·长期医疗' : '平安尊享·中老年医疗';

      setResult({
        planName,
        premium: finalPremium,
        originalPremium: Math.round(base * socialFactor * genderFactor),
        coverage: age <= 60 ? '400万一般医疗 + 400万重疾医疗' : '200万一般医疗 + 200万癌症医疗',
        discount: discountTier.discount,
        familyMembers,
      });

      // 数字动画
      let current = 0;
      const target = finalPremium;
      const duration = 800;
      const steps = 40;
      const increment = target / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.round(increment * step);
        setDisplayPremium(current);
        if (step >= steps) {
          setDisplayPremium(target);
          clearInterval(timer);
        }
      }, duration / steps);

      setIsCalculating(false);
    }, 400);
  };

  const livePremium = Math.round(
    getBasePremium(age) *
      (hasSocial ? 0.62 : 1) *
      (gender === 'female' ? 1.05 : 1) *
      (familyDiscounts.find((d) => familyMembers <= d.members)?.discount || 1)
  );

  return (
    <div className="pt-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 左侧：输入区 */}
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
              max="80"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-2 bg-[#1e293b] rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br
                [&::-webkit-slider-thumb]:from-[#f5d06a] [&::-webkit-slider-thumb]:to-[#d4af37]
                [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:shadow-[rgba(212,175,55,0.4)]
                [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-[#d4af37]"
              style={{
                background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${(age / 80) * 100}%, #1e293b ${(age / 80) * 100}%, #1e293b 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-[#64748b] mt-2">
              <span>0岁</span>
              <span>30岁</span>
              <span>60岁</span>
              <span>80岁</span>
            </div>
          </div>

          {/* 性别选择 */}
          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-3">
              性别
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setGender('male')}
                className={`flex-1 py-3 rounded-xl border font-medium transition-all duration-300 ${
                  gender === 'male'
                    ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                    : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(212,175,55,0.3)]'
                }`}
              >
                男
              </button>
              <button
                onClick={() => setGender('female')}
                className={`flex-1 py-3 rounded-xl border font-medium transition-all duration-300 ${
                  gender === 'female'
                    ? 'bg-[rgba(212,175,55,0.15)] border-[#d4af37] text-[#d4af37]'
                    : 'bg-[rgba(15,23,42,0.6)] border-[rgba(212,175,55,0.15)] text-[#94a3b8] hover:border-[rgba(212,175,55,0.3)]'
                }`}
              >
                女
              </button>
            </div>
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
                ✓ 有社保可享约40%保费优惠
              </p>
            )}
          </div>

          {/* 家庭人数 */}
          <div>
            <label className="text-[#f1f5f9] text-sm font-medium block mb-3">
              家庭参保人数
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((num) => (
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
              💡 家庭投保更优惠：2人95折、3人9折、4人及以上85折
            </p>
          </div>

          {/* 实时预估 */}
          <div className="p-4 rounded-xl bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.1)]">
            <div className="flex items-center justify-between">
              <span className="text-[#94a3b8] text-sm">实时保费预估</span>
              <span className="text-[#d4af37] text-xl font-bold">
                ¥{livePremium}
                <span className="text-xs text-[#64748b] font-normal">/年</span>
              </span>
            </div>
          </div>

          {/* 计算按钮 */}
          <button
            onClick={calculate}
            disabled={isCalculating}
            className="btn-gold w-full text-base !py-4"
          >
            {isCalculating ? (
              <>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                计算中...
              </>
            ) : (
              '开始报价'
            )}
          </button>
        </div>

        {/* 右侧：结果区 */}
        <div className="relative">
          <div className="sticky top-24">
            {result ? (
              <div className="rounded-2xl border border-[rgba(212,175,55,0.3)] bg-gradient-to-br from-[rgba(212,175,55,0.08)] to-[rgba(15,23,42,0.8)] p-6 overflow-hidden relative">
                {/* 装饰光效 */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl" />

                <div className="relative">
                  {/* 方案名称 */}
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-[rgba(212,175,55,0.15)] text-[#d4af37] text-xs font-medium mb-3">
                      推荐方案
                    </span>
                    <h4 className="text-xl font-bold text-[#f1f5f9] mb-1">
                      {result.planName}
                    </h4>
                    <p className="text-[#94a3b8] text-sm">{result.coverage}</p>
                  </div>

                  {/* 保费展示 */}
                  <div className="text-center py-6 border-y border-[rgba(212,175,55,0.15)] mb-6">
                    <p className="text-[#94a3b8] text-sm mb-2">年缴保费</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-[#d4af37] text-lg">¥</span>
                      <span className="gold-gradient-text text-5xl font-black">
                        {displayPremium.toLocaleString()}
                      </span>
                      <span className="text-[#94a3b8] text-sm">/年</span>
                    </div>
                    {result.discount < 1 && (
                      <div className="mt-3 flex items-center justify-center gap-2">
                        <span className="text-[#64748b] text-sm line-through">
                          ¥{result.originalPremium.toLocaleString()}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[rgba(239,68,68,0.15)] text-[#f87171] text-xs font-medium">
                          省 ¥{(result.originalPremium - result.premium).toLocaleString()}
                        </span>
                      </div>
                    )}
                    {result.familyMembers > 1 && (
                      <p className="text-[#34d399] text-xs mt-2">
                        已享家庭{Math.round((1 - result.discount) * 100)}%优惠
                      </p>
                    )}
                  </div>

                  {/* 保障亮点 */}
                  <div className="space-y-3 mb-6">
                    {[
                      '保证续保20年',
                      '120种重疾0免赔',
                      '住院垫付服务',
                      '质子重离子100%报销',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#cbd5e1]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a href="#contact" className="btn-gold w-full text-sm !py-3">
                    联系我获取详细方案
                  </a>

                  <p className="text-[#64748b] text-xs text-center mt-4">
                    * 以上为预估保费，实际保费以核保结果为准
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[rgba(212,175,55,0.2)] bg-[rgba(15,23,42,0.3)] p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-20 h-20 rounded-full bg-[rgba(212,175,55,0.08)] flex items-center justify-center mb-4">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <p className="text-[#94a3b8] text-center">
                  调整左侧参数<br />
                  点击「开始报价」查看详细方案
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
