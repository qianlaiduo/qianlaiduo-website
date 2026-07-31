'use client';

import { useState } from 'react';

interface HatChartProps {
  onScrollToProducts?: () => void;
}

export default function HatChart({ onScrollToProducts }: HatChartProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;

  const goNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goPrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const scrollToProducts = () => {
    if (onScrollToProducts) {
      onScrollToProducts();
    }
  };

  const stepTitles: Record<number, string> = {
    1: '人生三阶段',
    2: '支出伴随一生',
    3: '奋斗创造财富',
    4: '人生四件大事',
    5: '努力积累盈余',
    6: '风险不期而至',
    7: '不仅是钱，更是责任',
    8: '养老至少 100 万',
    9: '保险=财务保护罩',
    10: '为您完善保障方案',
  };

  return (
    <div className="w-full bg-white rounded-2xl p-6 md:p-10 shadow-lg">
      {/* 标题 */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">认知我们的一生</h2>
        <p className="text-sm md:text-base text-gray-500">点击"下一步"，逐步了解人生财务规划</p>
      </div>

      {/* 步骤标题 */}
      <div className="text-center mb-4">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm md:text-base font-medium">
          {stepTitles[currentStep]}
        </div>
      </div>

      {/* SVG 画布 */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 1200 500"
          className="w-full h-auto min-w-[800px]"
          style={{ maxHeight: '500px' }}
        >
          {/* 背景 */}
          <rect width="1200" height="500" fill="#ffffff" />

          {/* 第 1 步：人生三阶段背景 */}
          {currentStep >= 1 && (
            <g className="animate-fadeIn">
              {/* 教育期背景 */}
              <rect x="100" y="100" width="250" height="300" fill="#e3f2fd" opacity="0.5" rx="8" />
              {/* 奋斗期背景 */}
              <rect x="350" y="100" width="500" height="300" fill="#e8f5e9" opacity="0.5" rx="8" />
              {/* 养老期背景 */}
              <rect x="850" y="100" width="250" height="300" fill="#fff3e0" opacity="0.5" rx="8" />

              {/* 阶段标注 */}
              <text x="225" y="130" textAnchor="middle" className="text-sm" fill="#1976d2" fontWeight="600">
                教育期
              </text>
              <text x="225" y="150" textAnchor="middle" className="text-xs" fill="#666">
                0-25 岁
              </text>

              <text x="600" y="130" textAnchor="middle" className="text-sm" fill="#388e3c" fontWeight="600">
                奋斗期
              </text>
              <text x="600" y="150" textAnchor="middle" className="text-xs" fill="#666">
                25-60 岁
              </text>

              <text x="975" y="130" textAnchor="middle" className="text-sm" fill="#f57c00" fontWeight="600">
                养老期
              </text>
              <text x="975" y="150" textAnchor="middle" className="text-xs" fill="#666">
                60 岁+
              </text>

              {/* 分隔线 */}
              <line x1="350" y1="100" x2="350" y2="400" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="850" y1="100" x2="850" y2="400" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
            </g>
          )}

          {/* 时间轴线 */}
          {currentStep >= 1 && (
            <g className="animate-fadeIn">
              <line x1="100" y1="400" x2="1100" y2="400" stroke="#333" strokeWidth="2" />
              {/* 箭头 */}
              <polygon points="1100,395 1110,400 1100,405" fill="#333" />

              {/* 年龄标注 */}
              <text x="100" y="430" textAnchor="middle" className="text-sm" fill="#333" fontWeight="600">
                0
              </text>
              <text x="100" y="450" textAnchor="middle" className="text-xs" fill="#666">
                出生
              </text>

              <text x="350" y="430" textAnchor="middle" className="text-sm" fill="#333" fontWeight="600">
                25
              </text>

              <text x="850" y="430" textAnchor="middle" className="text-sm" fill="#333" fontWeight="600">
                60
              </text>

              <text x="1100" y="430" textAnchor="middle" className="text-sm" fill="#333" fontWeight="600">
                80+
              </text>
              <text x="1100" y="450" textAnchor="middle" className="text-xs" fill="#666">
                终老
              </text>
            </g>
          )}

          {/* 第 2 步：支出线 */}
          {currentStep >= 2 && (
            <g className="animate-drawLine">
              <line
                x1="100"
                y1="320"
                x2="1100"
                y2="320"
                stroke="#ff6b35"
                strokeWidth="3"
                strokeDasharray="1000"
                strokeDashoffset="0"
                className="animate-drawPath"
              />
              <text x="1120" y="325" fill="#ff6b35" fontWeight="600" fontSize="14">
                支出线
              </text>
            </g>
          )}

          {/* 第 3 步：收入线（草帽曲线） */}
          {currentStep >= 3 && (
            <g className="animate-drawLine">
              <path
                d="M 350 320 Q 450 280, 550 220 T 750 180 T 850 220 L 950 280"
                fill="none"
                stroke="#2196f3"
                strokeWidth="3"
                strokeDasharray="1000"
                strokeDashoffset="0"
                className="animate-drawPath"
              />
              <text x="600" y="160" textAnchor="middle" fill="#2196f3" fontWeight="600" fontSize="14">
                收入线
              </text>
            </g>
          )}

          {/* 第 4 步：人生大事节点 */}
          {currentStep >= 4 && (
            <g className="animate-fadeIn">
              {/* 买房买车 */}
              <circle cx="450" cy="260" r="20" fill="#ffd700" opacity="0.9" />
              <text x="450" y="265" textAnchor="middle" fontSize="16">
                🏠
              </text>
              <text x="450" y="295" textAnchor="middle" className="text-xs" fill="#666">
                买房买车
              </text>

              {/* 创业成家 */}
              <circle cx="600" cy="200" r="20" fill="#ffd700" opacity="0.9" />
              <text x="600" y="205" textAnchor="middle" fontSize="16">
                💼
              </text>
              <text x="600" y="235" textAnchor="middle" className="text-xs" fill="#666">
                创业成家
              </text>

              {/* 生育赡养 */}
              <circle cx="750" cy="190" r="20" fill="#ffd700" opacity="0.9" />
              <text x="750" y="195" textAnchor="middle" fontSize="16">
                👨‍👩‍👧
              </text>
              <text x="750" y="225" textAnchor="middle" className="text-xs" fill="#666">
                生育赡养
              </text>

              {/* 养老准备 */}
              <circle cx="850" cy="220" r="20" fill="#ffd700" opacity="0.9" />
              <text x="850" y="225" textAnchor="middle" fontSize="16">
                🏦
              </text>
              <text x="850" y="255" textAnchor="middle" className="text-xs" fill="#666">
                养老准备
              </text>
            </g>
          )}

          {/* 第 5 步：财富盈余区域 */}
          {currentStep >= 5 && (
            <g className="animate-fadeIn">
              <path
                d="M 350 320 Q 450 280, 550 220 T 750 180 T 850 220 L 950 280 L 950 320 Z"
                fill="#4caf50"
                opacity="0.2"
              />
              <text x="600" y="280" textAnchor="middle" fill="#2e7d32" fontWeight="600" fontSize="16">
                财富盈余
              </text>
            </g>
          )}

          {/* 第 6 步：风险闪电线 */}
          {currentStep >= 6 && (
            <g className="animate-fadeIn">
              {/* 疾病闪电线 */}
              <path
                d="M 500 150 L 520 200 L 510 220 L 540 280"
                fill="none"
                stroke="#f44336"
                strokeWidth="2"
                strokeDasharray="5,3"
              />
              <text x="480" y="140" fill="#f44336" fontWeight="600" fontSize="14">
                ⚡ 疾病
              </text>

              {/* 意外闪电线 */}
              <path
                d="M 700 160 L 720 210 L 710 230 L 740 290"
                fill="none"
                stroke="#f44336"
                strokeWidth="2"
                strokeDasharray="5,3"
              />
              <text x="680" y="150" fill="#f44336" fontWeight="600" fontSize="14">
                ⚡ 意外
              </text>

              {/* 破洞效果 */}
              <circle cx="530" cy="260" r="15" fill="#f44336" opacity="0.3" />
              <circle cx="730" cy="270" r="15" fill="#f44336" opacity="0.3" />
            </g>
          )}

          {/* 第 7 步：情感责任 */}
          {currentStep >= 7 && (
            <g className="animate-fadeIn">
              {/* 父母 */}
              <text x="300" y="470" textAnchor="middle" fontSize="24">
                👴
              </text>
              <text x="300" y="490" textAnchor="middle" className="text-xs" fill="#666">
                父母 - 赡养责任
              </text>

              {/* 爱人 */}
              <text x="600" y="470" textAnchor="middle" fontSize="24">
                💑
              </text>
              <text x="600" y="490" textAnchor="middle" className="text-xs" fill="#666">
                爱人 - 相互责任
              </text>

              {/* 孩子 */}
              <text x="900" y="470" textAnchor="middle" fontSize="24">
                👶
              </text>
              <text x="900" y="490" textAnchor="middle" className="text-xs" fill="#666">
                孩子 - 育儿责任
              </text>
            </g>
          )}

          {/* 第 8 步：养老算账 */}
          {currentStep >= 8 && (
            <g className="animate-fadeIn">
              <rect x="850" y="250" width="280" height="120" fill="#fff3e0" rx="8" opacity="0.9" />
              <text x="990" y="280" textAnchor="middle" fill="#f57c00" fontWeight="600" fontSize="14">
                养老算账
              </text>
              <text x="990" y="310" textAnchor="middle" fill="#333" fontSize="13">
                30 元/天 × 365 天 × 20 年 × 2 人
              </text>
              <text x="990" y="335" textAnchor="middle" fill="#f44336" fontWeight="700" fontSize="18">
                = 45 万
              </text>
              <text x="990" y="360" textAnchor="middle" fill="#2e7d32" fontWeight="700" fontSize="16">
                真正需要：≥100 万
              </text>
            </g>
          )}

          {/* 第 9 步：保险保护罩 */}
          {currentStep >= 9 && (
            <g className="animate-fadeIn">
              {/* 保护罩 */}
              <path
                d="M 100 100 Q 600 50, 1100 100 L 1100 200 Q 600 150, 100 200 Z"
                fill="#2196f3"
                opacity="0.15"
                stroke="#2196f3"
                strokeWidth="2"
              />
              <text x="600" y="130" textAnchor="middle" fill="#1976d2" fontWeight="700" fontSize="20">
                保险
              </text>

              {/* 险种标注 */}
              <text x="225" y="380" textAnchor="middle" fill="#1976d2" fontSize="11" fontWeight="600">
                教育年金险
              </text>

              <text x="600" y="380" textAnchor="middle" fill="#1976d2" fontSize="11" fontWeight="600">
                年金险 / 重疾 + 报销型
              </text>
              <text x="600" y="395" textAnchor="middle" fill="#1976d2" fontSize="11" fontWeight="600">
                百万意外 + 寿险
              </text>

              <text x="975" y="380" textAnchor="middle" fill="#1976d2" fontSize="11" fontWeight="600">
                养老年金险
              </text>

              <text x="1100" y="380" textAnchor="middle" fill="#1976d2" fontSize="11" fontWeight="600">
                终身寿险
              </text>
              <text x="1100" y="395" textAnchor="middle" fill="#666" fontSize="10">
                财富传承
              </text>
            </g>
          )}

          {/* 第 10 步：CTA 按钮 */}
          {currentStep >= 10 && (
            <g className="animate-fadeIn" onClick={scrollToProducts} style={{ cursor: 'pointer' }}>
              <rect x="450" y="440" width="300" height="50" fill="#d4af37" rx="25" />
              <text x="600" y="470" textAnchor="middle" fill="#fff" fontWeight="600" fontSize="16">
                看看我家配置了哪些保险 →
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* 进度指示器 */}
      <div className="flex justify-center items-center gap-2 mt-6 mb-4">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              step === currentStep ? 'bg-blue-600 w-6' : step < currentStep ? 'bg-blue-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* 步骤数字 */}
      <div className="text-center text-sm text-gray-500 mb-4">{currentStep} / {totalSteps}</div>

      {/* 导航按钮 */}
      <div className="flex justify-center gap-4">
        <button
          onClick={goPrev}
          disabled={currentStep === 1}
          className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-medium transition-all duration-300 hover:border-blue-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← 上一步
        </button>
        {currentStep < totalSteps ? (
          <button
            onClick={goNext}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            下一步 →
          </button>
        ) : (
          <button
            onClick={scrollToProducts}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            查看保险方案 →
          </button>
        )}
      </div>
    </div>
  );
}
