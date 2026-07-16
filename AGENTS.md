# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   ├── components/ui/      # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

- 项目文件（如 app 目录、pages 目录、components 等）默认初始化到 `src/` 目录下。

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 页面结构

这是一个**单页滚动式个人品牌展示网站**（钱来多 - AI赋能保险），所有页面组件位于 `src/components/sections/`：

| 组件 | 路径 | 说明 |
|------|------|------|
| Navbar | `components/sections/Navbar.tsx` | 顶部导航栏（透明→毛玻璃滚动效果，内嵌音乐播放器，移动端菜单） |
| Hero | `components/sections/Hero.tsx` | 首屏大标题区（粒子背景、数据亮点、CTA按钮） |
| About | `components/sections/About.tsx` | 关于我（头像、个人介绍、标签、数据统计） |
| Services | `components/sections/Services.tsx` | 四大服务卡片（自媒体IP/AI培训/保险服务/企业赋能） |
| Toolbox | `components/sections/Toolbox.tsx` | 智能保险工具箱（4个交互式计算器，手风琴展开） |
| Advantages | `components/sections/Advantages.tsx` | 三大优势（行业深度/技术前沿/实战导向） |
| Contact | `components/sections/Contact.tsx` | 联系信息（电话/微信/公司地址/CTA） |
| Footer | `components/sections/Footer.tsx` | 页脚（品牌/导航/社交图标/版权） |

## 自定义组件与Hooks

- `components/ui-custom/ParticleBackground.tsx` — Canvas 粒子动效背景（金色粒子+连线）
- `components/ui-custom/MusicPlayer.tsx` — 背景音乐播放器（右下固定，深色金色风格）
- `hooks/useScrollReveal.ts` — 滚动渐入动画 Hook（基于 IntersectionObserver）

## 保险工具箱工具（4个交互式计算器 · 平安真实产品数据）

| 工具 | 路径 | 说明 |
|------|------|------|
| 医疗险自助报价 | `components/sections/tools/MedicalInsuranceCalculator.tsx` | 3款平安医疗险产品对比（e生保长期2025/e生保悦享版/安医保），8档年龄费率表，家庭折扣，推荐组合方案 |
| 社保养老金推算 | `components/sections/tools/PensionCalculator.tsx` | 国标公式计算：基础养老金+个人账户养老金，含缴费指数、替代率进度条可视化 |
| 商保本金倒推 | `components/sections/tools/AnnuityReverseCalculator.tsx` | 平安盛世金越（分红型），三档利率演示（1.75%/2.5%/3.5%），5种缴费方案对比，推荐10年缴 |
| 理财保险计划书 | `components/sections/tools/InsurancePlanGenerator.tsx` | 3款产品：盛世金越分红/金越养老年金/盛世福2026重疾，30年利益演示表，回本年份标注 |

## 设计系统

- **主题**：深色商务风（墨黑 #0a0e1a + 深蓝 #0f172a + 金色 #d4af37 点缀）
- **字体**：Noto Sans SC（思源黑体），已在 `globals.css` 中通过 Google Fonts CN 引入
- **动效**：
  - 滚动渐入：`.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale` 类名 + `visible` 触发
  - 卡片悬停：上浮 + 金色边框增强
  - 按钮悬停：金色光晕 + 光扫动画
  - 平滑滚动：`scroll-behavior: smooth`
- **详细设计规范**见 `DESIGN.md`

## 构建和测试命令

- 开发：`pnpm dev`
- 构建：`pnpm build`
- Lint：`pnpm lint`
- 类型检查：`pnpm ts-check`

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码；优先复用当前作用域已声明的变量、函数、类型和导入，禁止引用未声明标识符或拼错变量名。
- 禁止隐式 `any` 和 `as any`；函数参数、返回值、解构项、事件对象、`catch` 错误在使用前应有明确类型或先完成类型收窄，并清理未使用的变量和导入。

### next.config 配置规范

- 配置的路径不要写死绝对路径，必须使用 path.resolve(__dirname, ...)、import.meta.dirname 或 process.cwd() 动态拼接。

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。**必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染**；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。
2. **禁止使用 head 标签**，优先使用 metadata，详见文档：https://nextjs.org/docs/app/api-reference/functions/generate-metadata
   1. 三方 CSS、字体等资源可在 `globals.css` 中顶部通过 `@import` 引入或使用 next/font
   2. preload, preconnect, dns-prefetch 通过 ReactDOM 的 preload、preconnect、dns-prefetch 方法引入
   3. json-ld 可阅读 https://nextjs.org/docs/app/guides/json-ld

## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**
