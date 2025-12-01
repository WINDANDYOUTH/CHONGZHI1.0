"use client";

import type { FC } from "react";

const PricingSection: FC = () => {
  return (
    <section className="relative w-full bg-black py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        {/* 标题区 */}
        <div className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-emerald-300/80">
            PRICING
          </p>
          <h2 className="mt-3 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            更优势的价格 · 更灵活的会员升级方案
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/65 max-w-2xl mx-auto">
            根据你的使用频率与预算，选择合适的 ChatGPT Plus / AI 会员代充方案。
            价格区间灵活，可按需调整，长期使用性价比更高。
          </p>
        </div>

        {/* 价格卡片区 */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
          {/* 月付方案 */}
          <div className="flex flex-col rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-sans text-lg sm:text-xl font-semibold text-white">
                月付体验方案
              </h3>
              <span className="rounded-full border border-white/20 px-2 py-0.5 text-[11px] text-white/70">
                适合先体验
              </span>
            </div>

            <p className="text-sm text-white/60">
              想先体验 ChatGPT Plus 带来的效率提升？月付方案非常适合短期试用或阶段性使用。
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                ¥XXX
              </span>
              <span className="text-xs sm:text-sm text-white/50">/ 月</span>
            </div>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/70">
              <li>• 极速代充，通常数分钟内处理</li>
              <li>• 无需外卡，无需账号折腾</li>
              <li>• 适合临时项目 / 阶段性使用</li>
            </ul>

            <button className="mt-6 w-full rounded-full border border-white/25 bg-white/5 py-2.5 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10 hover:border-white/40">
              选这个方案
            </button>
          </div>

          {/* 季度方案（推荐） */}
          <div className="relative flex flex-col rounded-3xl border border-emerald-400/60 bg-white/8 p-6 sm:p-7 backdrop-blur-md shadow-[0_0_60px_rgba(16,185,129,0.5)] scale-[1.02]">
            {/* 推荐角标 */}
            <div className="absolute -top-3 right-4 rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-semibold text-black shadow-lg">
              推荐
            </div>

            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-sans text-lg sm:text-xl font-semibold text-white">
                季度高性价比方案
              </h3>
              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] text-emerald-300">
                热门选择
              </span>
            </div>

            <p className="text-sm text-white/60">
              综合价格与稳定性，适合长期学习、创作、工作场景，
              单月成本相对更低，是大部分用户的首选。
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                ¥XXX
              </span>
              <span className="text-xs sm:text-sm text-white/50">/ 3 个月</span>
            </div>
            <p className="mt-1 text-xs text-emerald-300/85">
              平均 ¥XX / 月 · 比月付更划算
            </p>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/75">
              <li>• 更优惠的整体价格，适合连续使用</li>
              <li>• 充值异常有专人协助处理</li>
              <li>• 支持按需续费 / 延长</li>
              <li>• 可搭配其他 AI 会员组合使用</li>
            </ul>

            <button className="mt-6 w-full rounded-full bg-emerald-400 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300">
              立即选择（推荐）
            </button>
          </div>

          {/* 年度 / 自定义方案 */}
          <div className="flex flex-col rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-sans text-lg sm:text-xl font-semibold text-white">
                年度 / 自定义方案
              </h3>
              <span className="rounded-full border border-white/20 px-2 py-0.5 text-[11px] text-white/70">
                长期深度使用
              </span>
            </div>

            <p className="text-sm text-white/60">
              适合深度创作者、团队使用，或需要长期稳定访问 ChatGPT Plus
              及其他 AI 会员的用户，可根据需求单独沟通报价。
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                ¥联系咨询
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/70">
              <li>• 可按年、半年等形式灵活定制</li>
              <li>• 支持组合多种 AI 会员账号</li>
              <li>• 更适合企业 / 团队 / 重度使用者</li>
            </ul>

            <button className="mt-6 w-full rounded-full border border-white/25 bg-white/5 py-2.5 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10 hover:border-white/40">
              添加客服咨询详情
            </button>
          </div>
        </div>

        {/* 备注文案 */}
        <p className="mt-4 text-center text-[11px] sm:text-xs text-white/45">
          * 页面中价格为示意文案，可根据实时汇率、官方价格调整与渠道成本进行灵活配置。
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
