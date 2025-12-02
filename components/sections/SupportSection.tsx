"use client";

import { useState } from "react";

export default function SupportSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("chongzhiGPT");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="relative w-full py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 px-5 py-8 text-center text-white shadow-xl backdrop-blur-md sm:px-8 sm:py-10">
          {/* 背景小色块 */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" />
          </div>

          <div className="relative">
            {/* 小标签 */}
            <div className="mb-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] text-white/75 backdrop-blur-sm sm:text-xs">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              还有问题？真人客服来帮你
            </div>

            {/* 标题 */}
            <h2 className="text-2xl font-bold sm:text-3xl">
              添加微信客服，极速为你解决问题
            </h2>

            <p className="mt-3 text-sm text-white/70 sm:text-base">
              无论是升级流程、支付问题还是账号安全，
              加微信客服 <strong>chongzhiGPT</strong>，
              我们会一对一为你处理所有疑问。
            </p>

            {/* 微信号 + 复制按钮 */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3">
              <div className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md sm:text-base">
                微信号：<span className="text-emerald-400">chongzhiGPT</span>
              </div>

              <button
                onClick={handleCopy}
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300 sm:text-base"
              >
                {copied ? "已复制 ✓" : "复制微信号"}
              </button>
            </div>

            {/* 联系方式标签 */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-white/70 sm:text-xs">
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-sm">
                实时人工快速响应
              </span>
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-sm">
                升级/订单问题优先处理
              </span>
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-sm">
                支持截图/远程协助
              </span>
            </div>

            {/* 小提示 */}
            <p className="mt-5 text-[11px] text-white/55 sm:text-xs">
              温馨提示：加客服后，请准备好您的订单编号或支付截图，我们会更快为你处理。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
