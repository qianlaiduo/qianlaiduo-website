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
              {
                module: '模块一',
                title: 'AI 基础工具',
                lessons: [
                  { name: 'ChatGPT/DeepSeek 提示词技巧', desc: '掌握高质量提示词编写方法，让 AI 输出更精准' },
                  { name: 'AI 绘图工具实操', desc: 'Midjourney/文心一格等工具，快速生成营销素材' },
                  { name: '语音转文字工具', desc: '会议记录、客户沟通自动转写，提升工作效率' },
                  { name: '视频生成基础', desc: 'AI 视频剪辑与生成，打造个人 IP 内容' },
                ],
              },
              {
                module: '模块二',
                title: 'AI 文案创作',
                lessons: [
                  { name: '朋友圈文案批量生成', desc: '一套提示词生成 30 天朋友圈内容，保持专业形象' },
                  { name: '产品说明书写法', desc: '用 AI 将复杂条款转化为客户易懂的语言' },
                  { name: '客户沟通话术优化', desc: '针对不同客户类型，生成个性化沟通方案' },
                  { name: '营销活动策划', desc: '从主题到执行方案，AI 辅助完成全流程策划' },
                ],
              },
              {
                module: '模块三',
                title: 'AI 获客转化',
                lessons: [
                  { name: '智能客服搭建', desc: '用 AI 工具搭建 24 小时在线的自动回复系统' },
                  { name: '客户画像分析', desc: '通过数据分析精准定位目标客户群体' },
                  { name: '自动化营销流程', desc: '从引流到转化，设计自动化营销 SOP' },
                  { name: '转化漏斗优化', desc: '用数据驱动方法，持续提升各环节转化率' },
                ],
              },
              {
                module: '模块四',
                title: 'AI 数据分析',
                lessons: [
                  { name: '业绩数据可视化', desc: '用 AI 工具快速生成直观的业绩报表' },
                  { name: '客户行为分析', desc: '分析客户互动数据，预测购买意向' },
                  { name: '市场趋势预测', desc: '借助 AI 分析行业动态，把握市场机会' },
                  { name: 'ROI 计算', desc: '精准计算营销投入产出比，优化资源配置' },
                ],
              },
            ].map((item, index) => (
              <div
                key={item.module}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(56,189,248,0.15)] hover:border-[rgba(56,189,248,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm text-[#38bdf8] font-medium mb-2">{item.module}</div>
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.lessons.map((lesson) => (
                    <li key={lesson.name} className="text-[#94a3b8] text-sm">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <div>
                          <span className="text-[#f1f5f9] font-medium">{lesson.name}</span>
                          <p className="text-xs mt-0.5">{lesson.desc}</p>
                        </div>
                      </div>
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
              { title: '保险新人', desc: '快速掌握 AI 工具，提升工作效率，缩短成长周期' },
              { title: '资深保险人', desc: '用 AI 打造个人品牌，实现业绩突破，建立竞争壁垒' },
              { title: '团队主管', desc: '用 AI 赋能团队，提升整体产能，降低培训成本' },
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

      {/* 学员评价 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            学员评价
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'L 女士',
                role: '保险代理人 · 从业 3 年',
                content: '以前写朋友圈文案要憋半天，现在用 AI 十分钟生成一周的内容。课程很实用，都是能马上落地的方法。',
                initials: 'L',
              },
              {
                name: 'Z 先生',
                role: '团队主管 · 从业 8 年',
                content: '给团队报了名，整体产能提升了 30%。最有用的是客户画像分析那块，现在拓客精准多了。',
                initials: 'Z',
              },
              {
                name: 'W 女士',
                role: '保险新人 · 从业半年',
                content: '零基础也能学会，老师讲得很细致。学完第一个月就用 AI 帮我把产品说明书写出来了，客户反馈很好。',
                initials: 'W',
              },
              {
                name: 'C 先生',
                role: '独立经纪人 · 从业 5 年',
                content: 'AI 数据分析模块对我帮助最大，现在能清晰看到哪些渠道转化率高，营销预算花得更值了。',
                initials: 'C',
              },
              {
                name: 'Y 女士',
                role: '银保渠道经理 · 从业 10 年',
                content: '本来对 AI 有抵触心理，学完发现真香。智能客服那块帮我们网点节省了大量重复咨询的时间。',
                initials: 'Y',
              },
              {
                name: 'H 先生',
                role: '保险经纪人 · 从业 2 年',
                content: '课程性价比高，单次收费不到 5000，但学到的东西远超这个价值。已经推荐给同事了。',
                initials: 'H',
              },
            ].map((item, index) => (
              <div
                key={item.name}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5d06a] flex items-center justify-center text-[#0a0e1a] font-bold text-sm">
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-[#f1f5f9] font-medium text-sm">{item.name}</div>
                    <div className="text-[#94a3b8] text-xs">{item.role}</div>
                  </div>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习方式 */}
      <section className="py-16 md:py-24 bg-[rgba(15,23,42,0.3)]">
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

      {/* 常见问题 */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            常见问题
          </h2>
          <div className="space-y-4">
            {[
              {
                q: '零基础能学会吗？',
                a: '完全可以。课程从最基础的 AI 工具操作讲起，循序渐进。只要会用手机和电脑，就能跟上进度。我们有很多零基础的学员都学得很好。',
              },
              {
                q: '课程是线上还是线下？',
                a: '两种形式都有。线上直播课适合时间灵活的学员，线下实战营适合想要集中训练、现场实操的学员。可以根据自己情况选择。',
              },
              {
                q: '学完能直接用吗？',
                a: '课程设计就是实战导向，每个模块都有实操练习。学完当天就能应用到工作中。我们不提供"保过"承诺，但保证教的内容都能落地。',
              },
              {
                q: '需要什么设备？',
                a: '一台能上网的电脑或手机即可。课程中用到的 AI 工具大部分有免费版，不需要额外购买昂贵的软件或设备。',
              },
              {
                q: '费用多少？',
                a: '单次课程收费不超过 5000 元，具体价格根据课程形式（线上/线下）和模块选择有所不同。添加微信咨询详情，我们会给你推荐最适合的方案。',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.15)]"
              >
                <h3 className="text-[#f1f5f9] font-bold mb-3 flex items-start gap-2">
                  <span className="text-[#d4af37]">Q</span>
                  {item.q}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 报名咨询 */}
      <section className="py-16 md:py-24 bg-[rgba(56,189,248,0.05)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6">
            咨询课程详情
          </h2>
          <p className="text-[#94a3b8] mb-4">
            单次课程收费不超过 5000 元，不承诺保过，专注实战落地
          </p>
          <p className="text-[#d4af37] text-lg mb-8">
            添加微信：<span className="font-bold">15211094685</span>
          </p>
          <a
            href="https://weixin.qq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-bold text-lg hover:shadow-lg hover:shadow-[rgba(56,189,248,0.3)] transition-all"
          >
            添加微信咨询课程详情
          </a>
        </div>
      </section>
    </ServiceDetailLayout>
  );
}
