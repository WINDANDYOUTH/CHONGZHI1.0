"use client";

import FloatingLines from "@/components/FloatingLines";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* 背景：只用 FloatingLines，不加额外背景样式 */}
      <div className="absolute inset-0 z-0">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
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
      </div>

      {/* 内容层 */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-24 text-center sm:px-6 sm:pb-20 sm:pt-28">
        {/* 小标签：在手机上也不显得太挤 */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          极速开通 · 国内用户友好 · 支持多种支付方式
        </div>

        {/* 主标题 */}
        <h1 className="font-sans text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-8xl">
          提供全面的 AI 账户以及
          <br />
          <span className="sm:whitespace-nowrap">
            ChatGPT Plus 充值服务
          </span>
        </h1>

        {/* 副标题 */}
        <h2 className="mt-4 font-sans text-base text-white/80 sm:mt-5 sm:text-lg lg:text-2xl">
          国内用户首选的 ChatGPT 会员升级网站
        </h2>

        {/* 文案 */}
        <p className="mt-4 mx-auto max-w-xl text-sm text-white/70 sm:mt-5 sm:text-base">
          极速充值，减少繁琐流程；更优势的价格体验多平台 AI 会员账号；
          快人一步，享受最前沿的智能服务。
        </p>

        {/* CTA 按钮：移动端默认纵向排，行间距更舒服 */}
        <div className="mt-7 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <button className="w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300 sm:flex-1 sm:text-base">
            立即升级会员
          </button>
          <button className="w-full rounded-full border border-white/30 bg-black/30 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:border-white/40 sm:flex-1 sm:text-base">
            查看套餐与价格
          </button>
        </div>

        {/* 下滑提示：在手机上占空间不大 */}
        <div className="mt-8 flex flex-col items-center gap-2 text-[11px] text-white/55 sm:mt-10 sm:text-xs">
          <span>向下了解更多优势</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
