'use client';

import { useState } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessFlowProps {
  steps: Step[];
  title?: string;
}

export function ProcessFlow({ steps, title }: ProcessFlowProps) {
  return (
    <div className="mb-16">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          {title}
        </h2>
      )}
      
      <div className="relative">
        {/* 连接线（桌面端） */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />
        
        {/* 步骤卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* 圆形数字 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5d06a] flex items-center justify-center text-[#0a0e1a] font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                
                {/* 标题 */}
                <h3 className="text-white font-semibold text-center mb-2 text-lg">
                  {step.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-[#94a3b8] text-sm text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* 箭头（桌面端，非最后一个） */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-3 text-[#d4af37] text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
