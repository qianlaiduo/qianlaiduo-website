'use client';

import { useState, useEffect, useRef } from 'react';
import { Shield, Activity, Heart } from 'lucide-react';
import ratesData from '@/data/medical_rates_correct.json';

// 家庭费率因子
const FAMILY_FACTORS: Record<number, number> = {
  1: 1.0,
  2: 0.95,
  3: 0.9,
  4: 0.85,
  5: 0.85,
  6: 0.85,
};

interface PlanResult {
  key: string;
  name: string;
  description: string;
  deductible: string;
  renewal: string;
  coverage: string;
  sellingPoint: string;
  premium: number;
  originalPremium: number;
  discount: number;
  isUnavailable?: boolean;
  tag?: string;
}

// 数字滚动动画 Hook
function useAnimatedNumber(target: number, duration = 1200): number {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(0);

  useEffect(() => {
    if (target <= 0) {
      setValue(0);
      return;
    }
    startValueRef.current = value;
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValueRef.current + (target - startValueRef.current) * eased;
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return value;
}

function formatMoney(n: number): string {
  return Math.round(n).toLocaleString('zh-CN');
}

export default function MedicalInsuranceCalculator() {
  const [age, setAge] = useState(35);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [hasSocial, setHasSocial] = useState(true);
  const [familyCount, setFamilyCount] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [premiums, setPremiums] = useState<PlanResult[]>([]);

  const calculate = () => {
    const familyFactor = FAMILY_FACTORS[familyCount] || 1.0;
    const results: PlanResult[] = [];

    // ===== 方案一：舒享+惠享+加享 =====
    const p1 = ratesData.plan1;
    let p1Premium = 0;
    let p1Unavailable = false;
    if (age > p1.max_age) {
      p1Unavailable = true;
    } else {
      const key = hasSocial
        ? gender === 'male'
          ? 'with_social_male'
          : 'with_social_female'
        : gender === 'male'
          ? 'without_social_male'
          : 'without_social_female';
      const rateArr = (p1 as any)[key] as number[];
      p1Premium = Math.round(rateArr[age] * familyFactor);
    }

    results.push({
      key: 'plan1',
      name: p1.name,
      description: p1.description,
      deductible: p1.deductible,
      renewal: p1.renewal,
      coverage: p1.coverage,
      sellingPoint: p1.selling_point,
      premium: p1Premium,
      originalPremium: p1Premium / familyFactor,
      discount: (1 - familyFactor) * 100,
      isUnavailable: p1Unavailable,
      tag: '主力推荐',
    });

    // ===== 方案二A：悦享版·计划四 =====
    const p2A = ratesData.plan2A;
    const p2ARate = getRangeRate(p2A.with_social_ranges, p2A.without_social_ranges, age, hasSocial);
    results.push({
      key: 'plan2A',
      name: p2A.name,
      description: p2A.description,
      deductible: p2A.deductible,
      renewal: p2A.renewal,
      coverage: p2A.coverage,
      sellingPoint: p2A.selling_point,
      premium: Math.round(p2ARate * familyFactor),
      originalPremium: p2ARate,
      discount: (1 - familyFactor) * 100,
    });

    // ===== 方案二B：安医保尊享版·计划一 =====
    const p2B = ratesData.plan2B;
    const p2BRate = getRangeRate(p2B.with_social_ranges, p2B.without_social_ranges, age, hasSocial);
    results.push({
      key: 'plan2B',
      name: p2B.name,
      description: p2B.description,
      deductible: p2B.deductible,
      renewal: p2B.renewal,
      coverage: p2B.coverage,
      sellingPoint: p2B.selling_point,
      premium: Math.round(p2BRate * familyFactor),
      originalPremium: p2BRate,
      discount: (1 - familyFactor) * 100,
    });

    setPremiums(results);
    setShowResult(true);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      {/* 左侧：参数输入 */}
      <div className="lg:col-span-2 space-y-5">
        <div className="p-5 rounded-xl bg-slate-800/40 border border-amber-500/10">
          <h4 className="text-amber-400 font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4" />
            投保信息
          </h4>

          {/* 年龄滑块 */}
          <div className="mb-5">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300">被保人年龄</span>
              <span className="text-amber-400 font-bold text-lg">{age} 岁</span>
            </div>
            <input
              type="range"
              min={0}
              max={70}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0岁</span>
              <span>35岁</span>
              <span>70岁</span>
            </div>
          </div>

          {/* 性别选择 */}
          <div className="mb-5">
            <label className="text-sm text-slate-300 mb-2 block">性别</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'male', label: '男' },
                { value: 'female', label: '女' },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setGender(item.value as 'male' | 'female')}
                  className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all border ${
                    gender === item.value
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                      : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 社保情况 */}
          <div className="mb-5">
            <label className="text-sm text-slate-300 mb-2 block">是否有社保</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: true, label: '有社保' },
                { value: false, label: '无社保' },
              ].map((item) => (
                <button
                  key={String(item.value)}
                  onClick={() => setHasSocial(item.value)}
                  className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all border ${
                    hasSocial === item.value
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                      : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 家庭人数 */}
          <div className="mb-5">
            <label className="text-sm text-slate-300 mb-2 block">
              家庭参保人数
              <span className="text-slate-500 ml-2 text-xs">
                {familyCount >= 2 ? `享${FAMILY_FACTORS[familyCount] === 0.95 ? '95折' : FAMILY_FACTORS[familyCount] === 0.9 ? '9折' : '85折'}` : '2人起享家庭折扣'}
              </span>
            </label>
            <div className="grid grid-cols-6 gap-1.5">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <button
                  key={n}
                  onClick={() => setFamilyCount(n)}
                  className={`py-2 rounded-lg text-sm font-medium transition-all border ${
                    familyCount === n
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                      : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {n}人
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              💡 家庭费率：2人95折 / 3人9折 / 4人及以上85折
            </p>
          </div>

          <button
            onClick={calculate}
            className="w-full py-3.5 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <Shield className="w-5 h-5" />
            获取三家产品报价
          </button>
        </div>
      </div>

      {/* 右侧：结果展示 */}
      <div className="lg:col-span-3">
        {!showResult ? (
          <div className="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-slate-700 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-slate-500" />
            </div>
            <h4 className="text-slate-300 font-medium mb-2">等待获取报价</h4>
            <p className="text-slate-500 text-sm text-center">
              调整左侧参数，点击「获取三家产品报价」<br />
              一次对比三款平安医疗险方案
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {premiums.map((plan) => (
              <PlanCard key={plan.key} plan={plan} />
            ))}

            {/* 推荐组合 */}
            {!premiums[0].isUnavailable && (
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-amber-400 font-bold mb-1">推荐组合：方案一 + 方案二B</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      方案一打底20年保证续保 + 方案二B补充重疾特需部/海外特药，实现 0免赔全覆盖
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-slate-400">
                        合计年保费：
                        <span className="text-amber-400 font-bold text-lg ml-1">
                          ¥{formatMoney(premiums[0].premium + premiums[2].premium)}
                        </span>
                      </span>
                      <span className="text-slate-500">/ 年</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-4 flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-amber-500/50 text-amber-400 font-medium hover:bg-amber-500/10 transition-all"
              >
                联系我获取详细方案
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 区间费率查找
function getRangeRate(
  withSocialRanges: Array<{ min: number; max: number; rate: number }>,
  withoutSocialRanges: Array<{ min: number; max: number; rate: number }>,
  age: number,
  hasSocial: boolean,
): number {
  const ranges = hasSocial ? withSocialRanges : withoutSocialRanges;
  const found = ranges.find((r) => age >= r.min && age <= r.max);
  return found ? found.rate : ranges[ranges.length - 1].rate;
}

function PlanCard({ plan }: { plan: PlanResult }) {
  const animatedPremium = useAnimatedNumber(plan.premium);
  const isMainPlan = plan.key === 'plan1';

  if (plan.isUnavailable) {
    return (
      <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 opacity-60 relative overflow-hidden">
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-700 text-slate-400 text-xs font-medium">
          超龄不可投
        </div>
        <h4 className="text-slate-400 font-bold text-lg mb-1 pr-24">{plan.name}</h4>
        <p className="text-slate-500 text-sm mb-4">{plan.description}</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-slate-500 text-xs">免赔额</p>
            <p className="text-slate-400">{plan.deductible.split('（')[0]}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs">续保条件</p>
            <p className="text-slate-400">{plan.renewal.split('（')[0]}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <p className="text-slate-500 text-xs">该方案最高投保年龄55岁</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-5 rounded-2xl border transition-all hover:scale-[1.01] relative overflow-hidden ${
        isMainPlan
          ? 'bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/40 shadow-lg shadow-amber-500/10'
          : 'bg-slate-800/50 border-slate-700/60 hover:border-amber-500/30'
      }`}
    >
      {plan.tag && (
        <div className="absolute top-0 right-0">
          <div className="px-3 py-1 bg-gradient-to-l from-amber-500 to-yellow-500 text-slate-900 text-xs font-bold rounded-bl-lg">
            {plan.tag}
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <h4 className={`font-bold text-lg mb-0.5 ${isMainPlan ? 'text-amber-400' : 'text-white'}`}>
            {plan.name}
          </h4>
          <p className="text-slate-400 text-xs">{plan.description}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-slate-500 text-xs">年缴保费</p>
          <p className={`text-2xl font-bold ${isMainPlan ? 'text-amber-400' : 'text-white'}`}>
            ¥{formatMoney(animatedPremium)}
          </p>
          {plan.discount > 0 && (
            <p className="text-green-400 text-xs">已省 ¥{formatMoney(plan.originalPremium * plan.discount / 100)}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs mb-3">
        <div className="p-2 rounded-lg bg-slate-900/40">
          <p className="text-slate-500 mb-0.5">免赔额</p>
          <p className="text-slate-300 leading-tight line-clamp-2">{plan.deductible.split('（')[0]}</p>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/40">
          <p className="text-slate-500 mb-0.5">续保</p>
          <p className={`leading-tight ${plan.renewal.includes('20年') ? 'text-green-400' : 'text-orange-400'}`}>
            {plan.renewal.split('（')[0]}
          </p>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/40">
          <p className="text-slate-500 mb-0.5">保额</p>
          <p className="text-slate-300 leading-tight">{plan.coverage}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <span className="text-amber-400">✨</span>
        <span className="text-slate-400">{plan.sellingPoint}</span>
      </div>
    </div>
  );
}
