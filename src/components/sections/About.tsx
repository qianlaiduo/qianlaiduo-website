'use client';

const tags = [
  '10年保险老兵',
  '9个自研AI工具',
  '保险人AI实战导师',
  '个人IP打造者',
];

const stats = [
  { value: '10年+', label: '保险行业经验' },
  { value: '9个', label: '自研AI工具' },
  { value: '100+', label: 'AI实战学员' },
  { value: '50+', label: '企业内训场次' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1424] to-[#0a0e1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] mb-5">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <span className="text-[#d4af37] text-xs font-medium tracking-wider">
              ABOUT ME
            </span>
          </div>
          <h2 className="reveal text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            关于<span className="gold-gradient-text">我</span>
          </h2>
          <p className="reveal text-[#94a3b8] text-lg max-w-xl mx-auto">
            从手工写文案到用AI重构保险人全工作流
          </p>
        </div>

        {/* 内容区 */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 左侧 - 头像区域 */}
          <div className="reveal-left flex justify-center">
            <div className="relative">
              {/* 光晕背景 */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d4af37]/20 to-[#38bdf8]/20 rounded-3xl blur-2xl" />

              {/* 头像容器 */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-[rgba(212,175,55,0.4)] gold-border-glow">
                {/* 真实照片 */}
                <img
                  src="/images/avatar.jpg"
                  alt="钱磊 - 钱来多"
                  className="w-full h-full object-cover"
                />

                {/* 装饰角标 */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#d4af37]/60" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#d4af37]/60" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#d4af37]/60" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#d4af37]/60" />
              </div>

              {/* 浮动徽章 */}
              <div className="absolute -bottom-3 -right-3 glass rounded-xl px-4 py-3 border border-[rgba(212,175,55,0.3)]">
                <div className="text-[#d4af37] text-xs font-medium">
                  中国平安
                </div>
                <div className="text-[#f1f5f9] text-sm font-bold">长沙分公司</div>
              </div>
            </div>
          </div>

          {/* 右侧 - 介绍文字 */}
          <div className="reveal-right">
            <h3 className="text-2xl md:text-3xl font-bold text-[#f1f5f9] mb-4">
              钱磊
              <span className="text-base md:text-lg text-[#94a3b8] font-normal ml-3">
                钱来多
              </span>
            </h3>
            <p className="text-[#d4af37] text-sm font-medium mb-6">
              中国平安保险代理人 · 长沙
            </p>

            <p className="text-[#94a3b8] leading-relaxed mb-6 text-base md:text-lg">
              10年保险老兵，从传统保险销售到AI时代的数字化转型先行者。
              <span className="text-[#cbd5e1]">
                自研9个AI工具，覆盖获客→内容→客户管理→跟进→学习全链路，
                用AI替掉了5个部门的工作。
              </span>
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-6 text-base md:text-lg">
              课程从99元体验营迭代到第三期299元实战营，专注实战落地。
              <span className="text-[#d4af37] font-medium">
                2026年6月2日单日4单1.7万保费，
              </span>
              全部来自AI赋能的自媒体获客。
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-8 text-base md:text-lg">
              我始终相信：
              <span className="text-[#cbd5e1]">
                一个人 + AI = 一支队伍。科技不是替代人，而是让专业的人更有价值。
              </span>
            </p>

            {/* 标签 */}
            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag, index) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] text-[#d4af37] text-sm font-medium hover:bg-[rgba(212,175,55,0.15)] transition-colors cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 数据统计 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[rgba(212,175,55,0.1)]"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl md:text-3xl font-bold gold-gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#64748b] text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
