"use client";

export default function MobileStickyCTA() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-30 md:hidden">
            <div className="mx-auto max-w-6xl px-3 pb-3">
                <div className="rounded-2xl bg-black/80 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] backdrop-blur-lg border border-white/10">
                    {/* 文案 + 按钮竖排，紧凑不压抑 */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="text-left">
                            <p className="text-xs text-white/70">
                                快人一步升级 ChatGPT Plus
                            </p>
                            <p className="text-[11px] text-white/50">
                                支持国内支付 · 极速代充 · 多种 AI 会员账号
                            </p>
                        </div>

                        <button className="shrink-0 rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-black shadow-md shadow-emerald-500/40 hover:bg-emerald-300">
                            立即升级
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
