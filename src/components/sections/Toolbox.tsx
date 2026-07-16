'use client';

import { useState } from 'react';
import MedicalInsuranceCalculator from './tools/MedicalInsuranceCalculator';
import { PensionCalculator } from './tools/PensionCalculator';
import { AnnuityReverseCalculator } from './tools/AnnuityReverseCalculator';
import { InsurancePlanGenerator } from './tools/InsurancePlanGenerator';

const tools = [
  {
    id: 'medical',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: '医疗险自助报价',
    description: '输入年龄、性别、社保情况，一键获取医疗险方案和保费预估',
    badge: '热门',
    color: '#d4af37',
    component: MedicalInsuranceCalculator,
  },
  {
    id: 'pension',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
        <path d="M7 19v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    title: '社保养老金推算',
    description: '输入当前信息，估算退休后每月可领养老金',
    badge: '实用',
    color: '#38bdf8',
    component: PensionCalculator,
  },
  {
    id: 'annuity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="12" y2="14" />
        <path d="M12 18v-4" />
        <path d="M10 16l2 2 2-2" />
      </svg>
    ),
    title: '商保本金倒推',
    description: '输入期望领取金额，倒推需要投入的保费本金',
    badge: '专业',
    color: '#a78bfa',
    component: AnnuityReverseCalculator,
  },
  {
    id: 'plan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="14" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: '理财保险计划书',
    description: '快速生成专业保险理财计划书，含利益演示',
    badge: '推荐',
    color: '#34d399',
    component: InsurancePlanGenerator,
  },
];

export function Toolbox() {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const toggleTool = (id: string) => {
    setActiveTool(activeTool === id ? null : id);
  };

  return (
    <section id="toolbox" className="relative py-24 md:py-32 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a]/30 to-[#0a0e1a]" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* 装饰光晕 */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#38bdf8]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] mb-5">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
            <span className="text-[#d4af37] text-xs font-medium tracking-wider">
              SMART TOOLBOX
            </span>
          </div>
          <h2 className="reveal text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            智能保险<span className="gold-gradient-text">工具箱</span>
          </h2>
          <p className="reveal text-[#94a3b8] text-lg max-w-xl mx-auto">
            AI驱动 · 即算即得 · 专业透明
          </p>
        </div>

        {/* 工具卡片列表 */}
        <div className="space-y-4">
          {tools.map((tool, index) => {
            const ToolComponent = tool.component;
            const isActive = activeTool === tool.id;

            return (
              <div
                key={tool.id}
                className="reveal-scale group rounded-2xl border border-[rgba(212,175,55,0.15)] bg-[rgba(15,23,42,0.5)] backdrop-blur-sm transition-all duration-500 overflow-hidden"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* 卡片头部 */}
                <button
                  onClick={() => toggleTool(tool.id)}
                  className="w-full p-6 md:p-8 flex items-center gap-4 md:gap-6 text-left hover:bg-[rgba(212,175,55,0.03)] transition-colors"
                >
                  {/* 图标 */}
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `${tool.color}12`,
                      color: tool.color,
                      boxShadow: `0 0 30px ${tool.color}10`,
                    }}
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8">{tool.icon}</div>
                  </div>

                  {/* 文字内容 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#f1f5f9] group-hover:text-[#d4af37] transition-colors">
                        {tool.title}
                      </h3>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          background: `${tool.color}15`,
                          color: tool.color,
                          border: `1px solid ${tool.color}30`,
                        }}
                      >
                        {tool.badge}
                      </span>
                    </div>
                    <p className="text-[#94a3b8] text-sm md:text-base line-clamp-2">
                      {tool.description}
                    </p>
                  </div>

                  {/* 展开箭头 */}
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] flex-shrink-0 transition-all duration-500 ${
                      isActive ? 'bg-[#d4af37] text-[#0a0e1a] rotate-180' : 'hover:border-[#d4af37]'
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {/* 展开的操作面板 */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isActive ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8 border-t border-[rgba(212,175,55,0.1)]">
                    <ToolComponent />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
