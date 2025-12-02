"use client";

import FloatingLines from "@/components/FloatingLines";
import GradientText from "@/components/GradientText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* 背景 */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[5, 5, 5]}
          lineDistance={[5, 5, 5]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* 内容 */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-16 pb-12 text-center sm:px-6">

        {/* 顶部小标签（移动端更大、更醒目） */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-black/30 px-4 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-sm sm:text-sm">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          极速开通Plus · 官方通道 · 安全稳定
        </div>

        {/* 主标题（移动端非常大） */}
        <h1 className="font-sans text-5xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          提供各种 AI 账户以及
          <br />
          <span className="sm:whitespace-nowrap">
            ChatGPT Plus 升级服务
          </span>
        </h1>

        {/* 副标题（加大 + 更有存在感） */}
        <div className="mt-4">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            className="text-xl sm:text-2xl font-semibold"
          >
            国内用户首选的 ChatGPT 会员升级网站
          </GradientText>
        </div>

        {/* 文案（移动端更大 + 多铺开） */}
        <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-lg sm:text-xl">
          极速充值，减少繁琐流程；Gemini, Cursor Pro, Claude, Super Grok等AI账号；
          极速自动发货，享受最前沿的智能服务。
        </p>

        {/* 大号徽章组（移动端更大、更突出） */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
          <span className="rounded-full border-2 border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur-md">
            ⚡ 20秒搞定
          </span>
          <span className="rounded-full border-2 border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur-md">
            ⭐ 服务超 5000+ 客户
          </span>
          <span className="rounded-full border-2 border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur-md">
            💬 超快响应客服
          </span>
        </div>

        {/* CTA 按钮（移动端加大 + 视觉强） */}
        <div className="mt-7 flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-md sm:flex-row sm:gap-4">
          <button className="w-full rounded-full bg-emerald-400 px-6 py-4 text-lg font-bold text-black shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300 sm:flex-1">
            立即升级会员
          </button>
          <button className="w-full rounded-full border border-white/40 bg-black/40 px-6 py-4 text-lg font-semibold text-white/85 backdrop-blur-sm transition hover:bg-white/10 hover:border-white/50 sm:flex-1">
            查看套餐与价格
          </button>
        </div>

        {/* 下滑提示 */}
        <div className="mt-12 flex flex-col items-center gap-1 text-sm text-white/55">
          <span>向下了解更多优势</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
