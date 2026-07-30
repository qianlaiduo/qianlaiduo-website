import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';

export default function AITrainingPage() {
  return (
    <ServiceDetailLayout
      title="AI 实战培训"
      subtitle="掌握 AI 工具，提升保险营销效率"
      icon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
          <path d="M12 12 2.1 12a10.1 10.1 0 0 0 9.9 10v-10z" />
          <path d="M12 12V2a10 10 0 0 1 10 10h-10z" />
        </svg>
      }
    >
      {/* Hero 区域 */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(56,189,248,0.05)] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(56,189,248,0.08)] border border-[rgba(56,189,248,0.15)] mb-6">
            <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full" />
            <span className="text-[#38bdf8] text-xs font-medium tracking-wider">
              AI TRAINING
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#f1f5f9] mb-6">
            AI<span className="text-[#38bdf8]">实战培训</span>
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto">
            从基础工具到高级应用，全面提升你的 AI 实战能力
          </p>
        </div>
      </section>

      {/* 课程大纲 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            课程大纲
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { module: '模块一', title: 'AI 基础工具', lessons: ['ChatGPT 使用技巧', 'AI 绘图工具', '语音转文字', '视频生成基础'] },
              { module: '模块二', title: 'AI 文案创作', lessons: ['朋友圈文案', '产品说明书', '客户沟通话术', '营销活动策划'] },
              { module: '模块三', title: 'AI 获客转化', lessons: ['智能客服搭建', '客户画像分析', '自动化营销', '转化漏斗优化'] },
              { module: '模块四', title: 'AI 数据分析', lessons: ['业绩数据可视化', '客户行为分析', '市场趋势预测', 'ROI 计算'] },
            ].map((item, index) => (
              <div
                key={item.module}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(56,189,248,0.15)] hover:border-[rgba(56,189,248,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm text-[#38bdf8] font-medium mb-2">{item.module}</div>
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.lessons.map((lesson) => (
                    <li key={lesson} className="flex items-center gap-2 text-[#94a3b8] text-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 适合人群 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            适合人群
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: '保险新人', desc: '快速掌握 AI 工具，提升工作效率' },
              { title: '资深保险人', desc: '用 AI 打造个人品牌，实现业绩突破' },
              { title: '团队主管', desc: '用 AI 赋能团队，提升整体产能' },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[rgba(56,189,248,0.1)] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#f1f5f9] mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习方式 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            学习方式
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)]">
              <h3 className="text-xl font-bold text-[#f1f5f9] mb-4">线上直播课</h3>
              <ul className="space-y-3 text-[#94a3b8]">
                <li>• 每周六晚 8 点直播</li>
                <li>• 可回放复习</li>
                <li>• 互动答疑</li>
                <li>• 作业点评</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)]">
              <h3 className="text-xl font-bold text-[#f1f5f9] mb-4">线下实战营</h3>
              <ul className="space-y-3 text-[#94a3b8]">
                <li>• 每月一期（长沙）</li>
                <li>• 2 天集中训练</li>
                <li>• 现场实操指导</li>
                <li>• 学员交流分享</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 报名咨询 */}
      <section className="py-16 md:py-24 bg-[rgba(56,189,248,0.05)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6">
            立即报名
          </h2>
          <p className="text-[#94a3b8] mb-8">
            下一期课程即将开班，名额有限，先到先得
          </p>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-bold text-lg hover:shadow-lg hover:shadow-[rgba(56,189,248,0.3)] transition-all">
            咨询报名
          </button>
        </div>
      </section>
    </ServiceDetailLayout>
  );
}
