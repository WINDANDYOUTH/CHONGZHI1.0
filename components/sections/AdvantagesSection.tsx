"use client";

import type { FC } from "react";

const AdvantagesSection: FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        {/* 标题区域 */}
        <div className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-emerald-300/80">
            选择我们的理由
          </p>
          <h2 className="mt-3 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            极速充值 · 更优价格 · 一站式 AI 会员升级体验
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            告别繁琐流程与支付障碍，让你更快、更稳、更划算地体验
            ChatGPT Plus 等主流 AI 会员服务。
          </p>
        </div>

        {/* 卖点卡片区域 */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* 卖点 1：极速充值 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md transition hover:border-emerald-400/60 hover:bg-white/10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              极速充值
            </div>
            <h3 className="font-sans text-lg sm:text-xl font-semibold text-white">
              减少不必要的繁琐流程，快人一步升级会员
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/65">
              专为国内用户优化充值路径，精简操作步骤，下单后快速处理，
              无需自己折腾外卡、虚拟号，一键完成 ChatGPT Plus 等会员升级。
            </p>
          </div>

          {/* 卖点 2：更优势的价格 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md transition hover:border-emerald-400/60 hover:bg-white/10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              优势价格
            </div>
            <h3 className="font-sans text-lg sm:text-xl font-semibold text-white">
              更优惠的价格体验多种 AI 会员账号
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/65">
              通过集中采购与长期合作渠道，为你争取更有优势的价格，
              轻松体验 ChatGPT Plus 等多种 AI 会员账号，降低长期使用成本。
            </p>
          </div>

          {/* 卖点 3：多平台 / 全面 AI 生态 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md transition hover:border-emerald-400/60 hover:bg-white/10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              全面 AI 账号
            </div>
            <h3 className="font-sans text-lg sm:text-xl font-semibold text-white">
              覆盖主流 AI 工具，一站式升级与管理
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/65">
              不止 ChatGPT Plus，可根据你的需求逐步扩展到更多 AI 会员账号，
              让创作、学习、办公、开发都拥有更强大的智能助手。
            </p>
          </div>

          {/* 卖点 4：如果你只想要 3 个卡片，可以删掉这个 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md transition hover:border-emerald-400/60 hover:bg-white/10 sm:col-span-2 lg:col-span-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  安全 · 稳定 · 售后无忧
                </div>
                <h3 className="font-sans text-lg sm:text-xl font-semibold text-white">
                  更懂国内用户使用场景的 AI 会员服务伙伴
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white/65">
                  清晰透明的服务说明与售后支持，账号异常、充值问题都有人工对接，
                  让你真正专注于使用 AI 提升效率，而不是与各种账号问题周旋。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
