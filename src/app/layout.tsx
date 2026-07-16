import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: '钱来多 | AI赋能保险 · 让科技成为你的竞争力',
  description:
    '钱磊 - 中国平安保险代理人（长沙），10年+保险行业深耕经验。保险资深从业者 / AI应用探索者 / 个人IP打造者 / 保险人AI实战导师。',
  keywords: [
    '保险',
    'AI保险',
    '钱来多',
    '钱磊',
    '平安保险',
    '保险AI培训',
    '保险个人IP',
    '长沙保险',
  ],
  authors: [{ name: '钱磊' }],
  openGraph: {
    title: '钱来多 | AI赋能保险 · 让科技成为你的竞争力',
    description:
      '10年+保险行业经验，AI实战落地专家。帮保险人打造个人IP，用AI实现高效获客。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
