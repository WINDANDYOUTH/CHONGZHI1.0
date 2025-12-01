import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "充智 · AI 会员代充 | ChatGPT Plus / Gemini / Claude",
  description: "官方通道代充，20 秒自动到账，支持微信 / 支付宝，50000+ 用户信赖。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
