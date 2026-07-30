'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  items: FAQItem[];
  title?: string;
}

export function AccordionFAQ({ items, title }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-16">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          {title}
        </h2>
      )}
      
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-[rgba(212,175,55,0.15)] rounded-xl overflow-hidden bg-[rgba(15,23,42,0.6)] backdrop-blur-sm"
          >
            {/* 问题标题 */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[rgba(212,175,55,0.05)] transition-colors"
            >
              <span className="text-white font-medium text-lg">
                {item.question}
              </span>
              <span
                className={`text-[#d4af37] text-2xl ml-4 transition-transform ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            
            {/* 答案内容 */}
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-[#94a3b8] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
