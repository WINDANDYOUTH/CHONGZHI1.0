"use client";

import type { FC } from "react";
import ColorBends from "@/components/ColorBends"; // 按你的真实路径调整

const PricingSection: FC = () => {
  return (
    <section className="relative w-full overflow-hidden text-white py-16 sm:py-24 border-t border-white/10">
      {/* ========= 背景层：ColorBends ========= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.1}
            transparent={false} // 🔥 关键：让它自己画满背景，而不是透明
          />
        </div>
      </div>

      {/* ========= 内容层 ========= */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6">
        {/* 标题区 */}
        <div className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-emerald-100/90">
            价格
          </p>
          <h2 className="mt-3 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            更优势的价格 · 更灵活的会员升级方案
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            根据你的使用频率与预算，选择合适的 ChatGPT Plus / AI 会员代充方案。
            价格区间灵活，可按需调整，长期使用性价比更高。
          </p>
        </div>

        {/* 价格卡片区 */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
          {/* 账户购买方案 */}
          <div className="flex flex-col rounded-3xl border border-white/25 bg-black/45 p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-sans text-lg sm:text-xl font-semibold">
                账户购买方案
              </h3>
              <span className="rounded-full border border-white/25 px-2 py-0.5 text-[11px] text-white/80">
                适合先体验
              </span>
            </div>

            <p className="text-sm text-white/80">
              想先体验 ChatGPT Plus 带来的效率提升？购买成品账户方案适合短期试用或阶段性使用。
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold">¥40</span>
              <span className="text-xs sm:text-sm text-white/70">/ 起</span>
            </div>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/85">
              <li>• 极速代充，通常数分钟内处理</li>
              <li>• 无需外卡，无需账号折腾</li>
              <li>• 适合临时项目 / 阶段性使用</li>
            </ul>

            <a
              href="https://fe.dtyuedan.cn/shop/2VDGQW4N/h4htfv"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full rounded-full bg-white/15 py-2.5 text-sm font-semibold text-white hover:bg-white/25 text-center block"
            >
              购买成品 AI 账户
            </a>

          </div>

          {/* 季度方案（推荐） */}
          <div className="relative flex flex-col rounded-3xl border border-emerald-300 bg-black/55 p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_60px_rgba(16,185,129,0.6)] scale-[1.02]">
            <div className="absolute -top-3 right-4 rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-semibold text-black shadow-lg">
              推荐
            </div>

            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-sans text-lg sm:text-xl font-semibold">
                月度稳定方案
              </h3>
              <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[11px] text-emerald-100">
                热门选择
              </span>
            </div>

            <p className="text-sm text-white/85">
              综合价格与稳定性，适合长期学习、创作、工作场景，单月成本更低，是大部分用户的首选。
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold">¥168</span>
              <span className="text-xs sm:text-sm text-white/70">/月</span>
            </div>
            <p className="mt-1 text-xs text-emerald-200/90">
              最推荐 · 稳定性最高
            </p>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/90">
              <li>• 更优惠的整体价格，适合连续使用</li>
              <li>• 充值异常有专人协助处理</li>
              <li>• 支持按需续费 / 延长</li>
              <li>• 日常使用更省心、省时间</li>
              <li>• 不需要重新登录/换号</li>
            </ul>

            <a
              href="https://fe.dtyuedan.cn/item/wu0l29"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full rounded-full bg-emerald-400 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 text-center block"
            >
             立即选择（推荐）
            </a>

            </div>

           {/* 特殊 AI 账户 / 高阶定制方案 */}
           <div className="flex flex-col rounded-3xl border border-white/25 bg-black/45 p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
           <div className="mb-3 flex items-center justify-between">
            <h3 className="font-sans text-lg sm:text-xl font-semibold">
              多平台高级 AI 账户 · 定制方案
           </h3>
           <span className="rounded-full border border-white/25 px-2 py-0.5 text-[11px] text-white/80">
              高需求专用
           </span>
           </div>

           <p className="text-sm text-white/80">
             适合深度创作者、开发者、团队使用者。可按需求开通 Grok、Claude、Cursor Pro、
             Midjourney、Replit、Perplexity Pro 等多种 AI 平台，并提供一站式稳定续费。
           </p>

           <div className="mt-6 flex items-baseline gap-1">
           <span className="text-2xl sm:text-3xl font-bold">联系咨询</span>
           </div>

           <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/85">
            <li>• 可按年、半年、季度等形式灵活定制</li>
            <li>• 支持组合多平台顶级 AI 会员（Grok / Claude / Cursor / MJ）</li>
            <li>• 适合企业团队、开发者、高频使用者</li>
            <li>• 专属客服一对一分析需求并报价</li>
            </ul>

          {/* 客服按钮（主推微信 chongzhiGPT + 一键复制） */}
            <button
             onClick={() => {
             navigator.clipboard.writeText("chongzhiGPT");
              alert("已复制微信号：chongzhiGPT");
            }}
             className="mt-6 w-full rounded-full bg-white/15 py-2.5 text-sm font-semibold text-white hover:bg-white/25 text-center"
             >
              添加客服咨询详情（微信：chongzhiGPT）
             </button>
            </div>

        </div>

        <p className="mt-4 text-center text-[11px] sm:text-xs text-white/75">
          * 页面中价格为示意文案，可根据实时汇率、官方价格和渠道成本进行灵活调整。
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
