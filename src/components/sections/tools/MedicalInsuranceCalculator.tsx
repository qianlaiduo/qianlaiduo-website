'use client';

import { useState, useEffect, useRef } from 'react';
import { Shield, Activity, HeartPulse, Sparkles, ChevronRight, Phone } from 'lucide-react';
import ratesData from '@/data/medical_rates_correct.json';

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
  subtitle: string;
  composition: string;
  deductible: string;
  deductibleDesc: string;
  renewal: string;
  renewalGuaranteed: boolean;
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

// 按区间查找费率（方案二A/二B）
function getRangeRate(
  ranges: Array<{ min: number; max: number; rate: number }>,
  age: number
): number {
  const found = ranges.find(r => age >= r.min && age <= r.max);
  return found ? found.rate : 0;
}

function PremiumCard({ plan, index }: { plan: PlanResult; index: number }) {
  const animatedPremium = useAnimatedNumber(plan.premium, 1200 + index * 200);

  const getIcon = () => {
    if (plan.key === 'plan1') return <Shield className="w-6 h-6" />;
    if (plan.key === 'plan2A') return <Activity className="w-6 h-6" />;
    return <HeartPulse className="w-6 h-6" />;
  };

  return (
    <div
      className={`relative rounded-2xl border p-5 transition-all duration-300 ${
        plan.isUnavailable
          ? 'bg-slate-900/40 border-slate-700/50 opacity-60 grayscale'
          : plan.key === 'plan1'
            ? 'bg-gradient-to-b from-amber-950/30 to-slate-900/60 border-amber-500/30 hover:border-amber-400/60 hover:-translate-y-1'
            : 'bg-slate-900/60 border-slate-700/60 hover:border-amber-500/40 hover:-translate-y-1'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* 标签 */}
      {plan.tag && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 text-xs font-bold rounded-full shadow-lg">
          {plan.tag}
        </div>
      )}

      {/* 头部 */}
      <div className="flex items-center gap-3 mb-4 pt-1">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
            plan.isUnavailable
              ? 'bg-slate-800 text-slate-500'
              : 'bg-gradient-to-br from-amber-400/20 to-amber-600/10 text-amber-400'
          }`}
        >
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-bold text-base truncate ${plan.isUnavailable ? 'text-slate-500' : 'text-white'}`}>
            {plan.name}
          </h4>
          <p className={`text-xs truncate ${plan.isUnavailable ? 'text-slate-600' : 'text-slate-400'}`}>
            {plan.subtitle}
          </p>
        </div>
      </div>

      {/* 保费金额 */}
      <div className="mb-4 pb-4 border-b border-slate-700/50">
        {plan.isUnavailable ? (
          <div className="py-3 text-center">
            <p className="text-slate-500 text-lg font-bold">超龄不可投</p>
            <p className="text-slate-600 text-xs mt-1">最高投保年龄 55 岁</p>
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-1">
              <span className={`text-xs ${plan.isUnavailable ? 'text-slate-600' : 'text-amber-400'}`}>¥</span>
              <span
                className={`text-3xl font-bold tracking-tight ${
                  plan.isUnavailable ? 'text-slate-600' : 'text-amber-400'
                }`}
              >
                {formatMoney(animatedPremium)}
              </span>
              <span className={`text-xs ${plan.isUnavailable ? 'text-slate-600' : 'text-slate-400'}`}>/年</span>
            </div>
            {plan.discount > 0 && (
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs text-slate-500 line-through">
                  ¥{formatMoney(plan.originalPremium)}
                </span>
                <span className="text-xs px-1.5 py-0.5 bg-emerald-500/15 text-emerald-400 rounded font-medium">
                  省{formatMoney(plan.originalPremium - plan.premium)}元
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {/* 详情列表 */}
      <div className="space-y-2.5 text-sm">
        <div className="flex justify-between items-start gap-2">
          <span className="text-slate-500 text-xs shrink-0">组成</span>
          <span className={`text-right text-xs leading-relaxed ${plan.isUnavailable ? 'text-slate-600' : 'text-slate-300'}`}>
            {plan.composition}
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-slate-500 text-xs shrink-0">免赔额</span>
          <span className={`text-xs font-medium ${plan.isUnavailable ? 'text-slate-600' : 'text-slate-200'}`}>
            {plan.deductible}
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-slate-500 text-xs shrink-0">续保</span>
          <span
            className={`text-xs font-medium flex items-center gap-1 ${
              plan.isUnavailable
                ? 'text-slate-600'
                : plan.renewalGuaranteed
                  ? 'text-emerald-400'
                  : 'text-amber-400'
            }`}
          >
            {plan.renewalGuaranteed ? '✓ ' : '○ '}
            {plan.renewal}
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-slate-500 text-xs shrink-0">保额</span>
          <span className={`text-xs font-medium ${plan.isUnavailable ? 'text-slate-600' : 'text-slate-200'}`}>
            {plan.coverage}
          </span>
        </div>
        <div className="pt-2 border-t border-slate-800/60">
          <div className="flex items-start gap-1.5">
            <Sparkles className={`w-3 h-3 mt-0.5 shrink-0 ${plan.isUnavailable ? 'text-slate-600' : 'text-amber-400'}`} />
            <span className={`text-xs leading-relaxed ${plan.isUnavailable ? 'text-slate-600' : 'text-amber-200/80'}`}>
              {plan.sellingPoint}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
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
    if (age > p1.maxAge) {
      p1Unavailable = true;
    } else {
      const key = hasSocial
        ? gender === 'male'
          ? 'with_social_male'
          : 'with_social_female'
        : gender === 'male'
          ? 'without_social_male'
          : 'without_social_female';
      const rateMap = (p1.rates as Record<string, Record<string, number>>)[key];
      const baseRate = rateMap ? rateMap[String(age)] : 0;
      p1Premium = Math.round(baseRate * familyFactor);
    }

    results.push({
      key: 'plan1',
      name: p1.name,
      subtitle: p1.subtitle,
      composition: p1.composition,
      deductible: p1.deductible,
      deductibleDesc: p1.deductibleDesc,
      renewal: p1.renewal,
      renewalGuaranteed: p1.renewalGuaranteed,
      coverage: p1.coverage,
      sellingPoint: p1.sellingPoint,
      premium: p1Premium,
      originalPremium: p1Premium / familyFactor,
      discount: (1 - familyFactor) * 100,
      isUnavailable: p1Unavailable,
      tag: '主力推荐',
    });

    // ===== 方案二A：悦享版·计划四 =====
    const p2A = ratesData.plan2a;
    const p2ABase = getRangeRate(
      hasSocial ? p2A.rates.with_social : p2A.rates.without_social,
      age
    );
    results.push({
      key: 'plan2A',
      name: p2A.name,
      subtitle: p2A.subtitle,
      composition: p2A.composition,
      deductible: p2A.deductible,
      deductibleDesc: p2A.deductibleDesc,
      renewal: p2A.renewal,
      renewalGuaranteed: p2A.renewalGuaranteed,
      coverage: p2A.coverage,
      sellingPoint: p2A.sellingPoint,
      premium: Math.round(p2ABase * familyFactor),
      originalPremium: p2ABase,
      discount: (1 - familyFactor) * 100,
    });

    // ===== 方案二B：安医保尊享版·计划一 =====
    const p2B = ratesData.plan2b;
    const p2BBase = getRangeRate(
      hasSocial ? p2B.rates.with_social : p2B.rates.without_social,
      age
    );
    results.push({
      key: 'plan2B',
      name: p2B.name,
      subtitle: p2B.subtitle,
      composition: p2B.composition,
      deductible: p2B.deductible,
      deductibleDesc: p2B.deductibleDesc,
      renewal: p2B.renewal,
      renewalGuaranteed: p2B.renewalGuaranteed,
      coverage: p2B.coverage,
      sellingPoint: p2B.sellingPoint,
      premium: Math.round(p2BBase * familyFactor),
      originalPremium: p2BBase,
      discount: (1 - familyFactor) * 100,
    });

    setPremiums(results);
    setShowResult(true);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      {/* 输入参数区 */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/60 space-y-4">
          <h4 className="text-amber-400 font-semibold text-sm flex items-center gap-2">
            <Shield className="w-4 h-4" /> 基本信息
          </h4>

          {/* 年龄滑块 */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-slate-300 text-sm">投保年龄</label>
              <span className="text-amber-400 font-bold text-lg">{age} 岁</span>
            </div>
            <input
              type="range"
              min={0}
              max={70}
              value={age}
              onChange={e => setAge(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0岁</span>
              <span>35岁</span>
              <span>70岁</span>
            </div>
          </div>

          {/* 性别选择 */}
          <div>
            <label className="text-slate-300 text-sm block mb-2">性别</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'male', label: '男' },
                { value: 'female', label: '女' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setGender(opt.value as 'male' | 'female')}
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                    gender === opt.value
                      ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 社保情况 */}
          <div>
            <label className="text-slate-300 text-sm block mb-2">社保情况</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: true, label: '有社保' },
                { value: false, label: '无社保' },
              ].map(opt => (
                <button
                  key={String(opt.value)}
                  onClick={() => setHasSocial(opt.value)}
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                    hasSocial === opt.value
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-900 shadow-lg shadow-sky-500/20'
                      : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/60 space-y-4">
          <h4 className="text-amber-400 font-semibold text-sm flex items-center gap-2">
            <Activity className="w-4 h-4" /> 家庭参保
          </h4>

          {/* 家庭人数 */}
          <div>
            <label className="text-slate-300 text-sm block mb-2">家庭成员参保人数</label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(n => (
                <button
                  key={n}
                  onClick={() => setFamilyCount(n)}
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                    familyCount === n
                      ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60'
                  }`}
                >
                  {n}人
                </button>
              ))}
            </div>
            {familyCount >= 4 && (
              <p className="text-xs text-emerald-400 mt-2">✓ 4人及以上享 85 折家庭费率</p>
            )}
          </div>

          {/* 家庭费率提示 */}
          <div className="bg-amber-500/5 rounded-lg p-4 border border-amber-500/10">
            <p className="text-amber-300 text-sm font-medium mb-2">家庭费率优惠</p>
            <div className="grid grid-cols-4 gap-1 text-xs">
              <div className="text-center">
                <p className="text-slate-400">1人</p>
                <p className="text-white font-semibold">原价</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400">2人</p>
                <p className={`font-semibold ${familyCount === 2 ? 'text-amber-400' : 'text-slate-300'}`}>
                  95折
                </p>
              </div>
              <div className="text-center">
                <p className="text-slate-400">3人</p>
                <p className={`font-semibold ${familyCount === 3 ? 'text-amber-400' : 'text-slate-300'}`}>
                  9折
                </p>
              </div>
              <div className="text-center">
                <p className="text-slate-400">4人+</p>
                <p className={`font-semibold ${familyCount >= 4 ? 'text-amber-400' : 'text-slate-300'}`}>
                  85折
                </p>
              </div>
            </div>
          </div>

          {/* 报价按钮 */}
          <button
            onClick={calculate}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-900 font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              获取三家产品报价
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>

      {/* 结果展示区 */}
      {!showResult ? (
        <div className="border-2 border-dashed border-slate-700/60 rounded-2xl p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800/60 flex items-center justify-center">
            <Shield className="w-8 h-8 text-slate-600" />
          </div>
          <p className="text-slate-400">调整上方参数，点击「获取三家产品报价」</p>
          <p className="text-slate-500 text-sm mt-1">一次对比三款平安医疗险，找到最适合你的方案</p>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid md:grid-cols-3 gap-4">
            {premiums.map((plan, i) => (
              <PremiumCard key={plan.key} plan={plan} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              联系我获取详细方案
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
