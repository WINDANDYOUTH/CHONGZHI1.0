"use client";

import { useState, type FC } from "react";

const UpgradeStepsSection: FC = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="relative w-full bg-black py-16 sm:py-24 border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
                {/* 标题区 */}
                <div className="text-center">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-emerald-300/80">
                        HOW IT WORKS
                    </p>
                    <h2 className="mt-3 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        三步完成会员升级，无需折腾外卡
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-white/65 max-w-2xl mx-auto">
                        按照下面三个步骤操作，即可完成 ChatGPT Plus / AI 会员升级。
                        全流程有卡密指引和视频教程，新手也可以轻松上手。
                    </p>
                </div>

                {/* 步骤区 */}
                <div className="grid gap-6 sm:grid-cols-3">
                    {/* Step 1 */}
                    <div className="relative flex flex-col gap-3 rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-black">
                                    1
                                </span>
                                <h3 className="font-sans text-base sm:text-lg font-semibold text-white">
                                    点击购买卡密
                                </h3>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-white/70">
                            在价格区块选择合适的套餐，点击购买后即可获得一张
                            <span className="text-white">「卡密」</span>
                            ，其中包含：
                        </p>
                        <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-white/70">
                            <li>• 专属充值地址链接</li>
                            <li>• 一串用于升级的专属代码</li>
                            <li>• 简要文字操作指引</li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col gap-3 rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/90 text-sm font-bold text-black">
                                    2
                                </span>
                                <h3 className="font-sans text-base sm:text-lg font-semibold text-white">
                                    根据指引登录账号
                                </h3>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-white/70">
                            打开卡密中的充值地址，在页面中：
                        </p>
                        <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-white/70">
                            <li>• 使用需要升级的 ChatGPT 账号登录</li>
                            <li>• 按提示确认地区 / 账户信息</li>
                            <li>• 为后续会员升级做好准备</li>
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col gap-3 rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/90 text-sm font-bold text-black">
                                    3
                                </span>
                                <h3 className="font-sans text-base sm:text-lg font-semibold text-white">
                                    完成会员升级
                                </h3>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-white/70">
                            按照页面提示，将卡密中的专属代码粘贴到指定位置，提交后稍等片刻即可完成会员升级：
                        </p>
                        <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-white/70">
                            <li>• 系统自动处理升级，无需手动绑卡</li>
                            <li>• 多数订单会在短时间内完成</li>
                            <li>• 如遇异常，可通过客服协助处理</li>
                        </ul>
                    </div>
                </div>

                {/* 视频教程按钮 */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <button
                        onClick={() => setShowVideo(true)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10 hover:border-white/40"
                    >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-bold text-black">
                            ▶
                        </span>
                        查看图文 + 视频教程
                    </button>
                    <p className="text-xs text-white/50">
                        第一次操作也不用担心，跟着教程一步一步来即可。
                    </p>
                </div>
            </div>

            {/* 视频弹窗（Modal） */}
            {showVideo && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4">
                    <div className="w-full max-w-2xl rounded-2xl border border-white/15 bg-black/90 p-4 sm:p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <h3 className="font-sans text-base sm:text-lg font-semibold text-white">
                                会员升级图文 + 视频教程
                            </h3>
                            <button
                                onClick={() => setShowVideo(false)}
                                className="rounded-full border border-white/30 px-2 py-1 text-xs text-white/70 hover:bg-white/10"
                            >
                                关闭
                            </button>
                        </div>

                        {/* 这里放你的视频，可以替换成实际地址 */}
                        <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/15 bg-black">
                            {/* 示例：本地视频；你也可以改成 iframe 播放 B 站 / YouTube */}
                            <video
                                className="h-full w-full"
                                controls
                                src="/videos/upgrade-tutorial.mp4"
                            >
                                您的浏览器不支持视频播放，请更换浏览器或联系客服获取教程。
                            </video>
                        </div>

                        <p className="mt-3 text-[11px] sm:text-xs text-white/55">
                            * 请将视频地址 <code>/videos/upgrade-tutorial.mp4</code> 替换为你的实际教程视频路径或嵌入代码。
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UpgradeStepsSection;
