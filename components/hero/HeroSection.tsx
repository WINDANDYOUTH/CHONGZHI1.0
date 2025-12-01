"use client";

import FloatingLines from "@/components/FloatingLines";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden">
      {/* ========== 背景层：只放 FloatingLines，不加任何额外样式 ========== */}
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

      {/* ========== 内容层 ========== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        
        {/* 标签 */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-[11px] backdrop-blur-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          极速开通 · 国内用户友好 · 支持多种支付方式
        </div>

        {/* 文案 */}
        <h1 className="font-sans text-4xl sm:text-8xl lg:text-20xl font-extrabold leading-tight">
          提供全面的 AI 账户以及
          <br />
          <span className="whitespace-nowrap">ChatGPT Plus 充值服务</span>
        </h1>

        <h2 className="mt-5 text-lg sm:text-xl lg:text-2xl text-white/80">
          国内用户首选的 ChatGPT 会员升级网站
        </h2>

        <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base text-white/70">
          极速充值，减少繁琐流程；更优势的价格体验多平台 AI 会员账号；
          快人一步，享受最前沿的智能服务。
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-black shadow-lg hover:bg-emerald-300 sm:text-base">
            立即升级会员
          </button>

          <button className="rounded-full border border-white/30 bg-black/20 px-8 py-3 text-sm font-medium text-white/80 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 sm:text-base">
            查看套餐与价格
          </button>
        </div>

      </div>
    </section>
  );
}
