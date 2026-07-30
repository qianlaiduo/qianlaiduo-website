import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';

export default function AITrainingPage() {
  return (
    <ServiceDetailLayout
      title="AI 实战培训"
      subtitle="保险人自媒体实战营——AI 工具驱动的一人公司"
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
            保险人自媒体实战营——AI 工具驱动的一人公司
          </p>
        </div>
      </section>

      {/* 课程大纲 - 7 模块 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] text-center mb-12">
            课程大纲
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                module: '模块一',
                title: '认知破冰（30 分钟）',
                lessons: [
                  { name: '短视频是防守不是红利', desc: '你不做你的私域就是别人的公域，保险人必须占领短视频阵地' },
                  { name: 'AI 工具才是真正的红利', desc: '95%的人发完第一批内容就放弃，你的对手不多，坚持就是胜利' },
                  { name: '私域>公域', desc: '保险人做视频号 100%能激活私域，99%做不了公域，先做好私域再考虑公域' },
                  { name: '小公寓概念', desc: '邻居圈、校友群——不加微信但能覆盖的半熟人，是你的天然流量池' },
                ],
              },
              {
                module: '模块二',
                title: '定位三要素（60 分钟）',
                lessons: [
                  { name: '人群定位', desc: '标签要清晰到具体人名，不是"600 万以下高净值"而是"长沙做建筑行业年收入 50-100 万"' },
                  { name: '产品定位', desc: '不是讲保险功能意义，是告诉客户为什么这个产品能解决他的问题' },
                  { name: '人设定位', desc: '人设=人生品牌，做真实的自己才能做好 IP，不要刻意表演' },
                  { name: '核心方法', desc: '定位是跑出来的不是想出来的，先选方向再迭代，在实践中找到最佳定位' },
                ],
              },
              {
                module: '模块三',
                title: '内容创作与智能体（90 分钟）',
                lessons: [
                  { name: '观点是文案核心', desc: '不能直接问 AI"年轻人买什么保险"，要给 AI 一个观点，让 AI 围绕观点展开' },
                  { name: '智能体文案创作流程', desc: '输入观点→智能体生成→检查钩子/短句/金句→迭代优化，形成标准化流程' },
                  { name: '朋友圈排第一', desc: '一天 3-4 条，有工具可以发 8-10 条，轻营销重人设，保持专业形象' },
                  { name: '现场演示', desc: '输入一个观点→生成文案→对比质量，让你亲眼看到 AI 的创作能力' },
                ],
              },
              {
                module: '模块四',
                title: '拍摄与剪辑（90 分钟）',
                lessons: [
                  { name: '开拍 APP 一站式解决', desc: '拍摄 + 剪辑一个 APP 搞定，不需要学复杂的剪辑软件' },
                  { name: '口播是主力', desc: '真人出镜讲观点，做真实的自己不要刻意表演，真实比完美更重要' },
                  { name: '拍摄类型', desc: '口播/Vlog 工作日常/过程记录/产品展示，多种类型丰富内容' },
                  { name: '不需要 100 分', desc: '80 分就超过 90%的人，完成比完美重要，先开始再优化' },
                ],
              },
              {
                module: '模块五',
                title: '私域运营与激活（45 分钟）',
                lessons: [
                  { name: '自媒体排序', desc: '朋友圈>视频号>小红书，保险人要把朋友圈作为第一阵地' },
                  { name: '500 播放量的价值', desc: '500 播放量=500 个熟人看到你，客户不需要看完刷到 23 秒就够了' },
                  { name: '拍视频=创造共同话题', desc: '"我看到你那个视频"是最好的破冰，让陌生变熟悉' },
                  { name: '核心金句', desc: '"你一天能拜访 50 个客户吗？但 50 个人看完了你的视频"' },
                ],
              },
              {
                module: '模块六',
                title: 'AI 工具实操（进阶课程）',
                lessons: [
                  { name: '豆包', desc: '不是用来提问的是用来对话的，语音输入>文字输入，像跟朋友聊天一样用 AI' },
                  { name: '智能体', desc: '=拥有聪明大脑但什么都不懂的新员工，需要调教，给它观点、风格、框架' },
                  { name: '扣子', desc: '搭建个性化智能体，工作流自动化，让 AI 成为你的数字员工' },
                  { name: 'Get 笔记', desc: '随时录音记录想法，自动整理成文字 + 观点，灵感不丢失' },
                  { name: '自研工具展示', desc: '朋友圈文案智能体（7 类文案一键出）、视频号提取器、PA 计划书工具、赋能工作台' },
                ],
              },
              {
                module: '模块七',
                title: '数据迭代与知识库',
                lessons: [
                  { name: '录音=数据', desc: '每次培训每次客户沟通都录音，这是你最宝贵的数据资产' },
                  { name: '个人知识库', desc: '观点库 + 客户库 + 课程库，建立自己的知识体系' },
                  { name: '迭代循环', desc: '录音→数据→AI 整理→观点→文案→视频→数据反馈→再迭代' },
                  { name: '核心金句', desc: '"录音就是数据，数据就是 AI 的核心"' },
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
                content: '以前写朋友圈文案要憋半天，现在用智能体十分钟生成一周的内容。课程很实用，都是能马上落地的方法。',
                initials: 'L',
              },
              {
                name: 'Z 先生',
                role: '团队主管 · 从业 8 年',
                content: '最有用的是客户画像分析，现在拓客精准多了。给团队报了名，人均产能提升了 30%。',
                initials: 'Z',
              },
              {
                name: 'W 女士',
                role: '保险新人 · 从业半年',
                content: '零基础也能学会，学完第一个月就用 AI 帮我把产品说明书写出来了，客户反馈很好。',
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
                a: '线下实战营为主（长沙），每月一期，2 天集中训练 + 现场实操。线上直播课作为补充，每周六晚 8 点。',
              },
              {
                q: '学完能直接用吗？',
                a: '课程设计就是实战导向，每个模块都有实操练习。学完当天就能应用到工作中。不承诺保过但保证教的内容都能落地。',
              },
              {
                q: '需要什么设备？',
                a: '一台能上网的手机即可。课程用到的 AI 工具大部分有免费版，不需要额外购买昂贵的软件或设备。',
              },
              {
                q: '费用多少？',
                a: '单次课程收费不超过 5000 元，具体根据课程形式和模块选择。添加微信咨询详情，我们会给你推荐最适合的方案。',
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
