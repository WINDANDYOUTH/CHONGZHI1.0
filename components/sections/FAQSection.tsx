"use client";

import Prism from "@/components/Prism";
import { useState } from "react";

const faqs = [
    {
        question: "到账时间是多久？",
        answer:
            "正常情况下支付完成后约 20 秒即可自动到账，大多数订单会在 1 分钟内完成。如果遇到高峰期或接口排队，可能略有延迟，但我们会实时监控并优先处理异常订单。",
    },
    {
        question: "支持哪些支付方式？",
        answer:
            "支持微信、支付宝、云闪付、银行卡、PayPal 等多种支付方式。不同商品会自动匹配当前可用的支付渠道，尽量保证你在任意设备上都能顺利完成付款。",
    },
    {
        question: "账号是否安全？",
        answer:
            "我们不会索取或保存你的账号密码，所有操作都通过加密通道完成。升级过程中仅在必要时使用官方提供的安全接口，账号始终由你本人掌控，不会被用作其他用途。",
    },
    {
        question: "什么是 ChatGPT Plus？都能做什么？",
        answer:
            "ChatGPT Plus 是 OpenAI 官方提供的付费会员服务，一般包含更快的响应速度、更高的稳定性，以及对更强大模型的优先访问权限（具体功能以官方政策为准）。适合高频创作、工作辅助、学习提升等场景。",
    },
    {
        question: "国内用户可以直接使用吗？",
        answer:
            "可以，我们的服务就是专门为国内用户做的充值与升级通道，帮助你规避复杂流程。实际使用时仍需遵守 OpenAI 等平台的使用条款和合规要求。",
    },
    {
        question: "升级失败或者长时间未到账怎么办？",
        answer:
            "如果超过 10 分钟仍未到账，你可以通过订单页面或联系客服提交【订单号 + 支付截图】，我们会优先排查并处理。若确认支付成功但系统异常，我们会为你补单或协商解决方案。",
    },
    {
        question: "会不会有封号风险？",
        answer:
            "我们只提供充值与会员服务本身，并不会对你的账号做任何违规操作。账号是否安全主要取决于你自己的使用行为，例如是否滥用、是否违反平台使用政策等。请务必合理、合规使用各类 AI 服务。",
    },
    {
        question: "支持哪些平台的会员升级？",
        answer:
            "目前主要支持 ChatGPT Plus 等热门 AI 产品的会员充值与升级，后续我们会根据需求逐步上线更多平台（如其他对话式 AI、绘画类 AI 等），具体以页面展示为准。",
    },
    {
        question: "可以开发票或提供账单记录吗？",
        answer:
            "目前支持提供电子订单记录和基础账单信息；如有发票或报销需求，可以先联系客服确认当前支持的开票类型与抬头要求，以免影响你的报销进度。",
    },
    {
        question: "有退款或售后保障吗？",
        answer:
            "若因我们原因导致的重复扣款、明显充值错误等情况，在核实后可为你处理退款或其他补偿方案。虚拟服务一经正常到账原则上不支持无理由退款，如有特殊情况请第一时间联系客服，我们会尽力协助解决。",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full pt-10 pb-24 sm:pt-12 sm:pb-28">
            <div className="mx-auto max-w-3xl px-4">
                {/* 这个容器负责高度，Prism 完全按官方推荐用法来 */}
                <div
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
                    style={{ width: "100%", height: "600px" }}
                >
                    {/* Prism 背景 */}
                    <Prism
                        animationType="rotate"
                        timeScale={0.5}
                        height={3.5}
                        baseWidth={5.5}
                        scale={3.6}
                        hueShift={0}
                        colorFrequency={1}
                        noise={0.5}
                        glow={1}
                    />

                    {/* 内容层盖在上面 */}
                    <div className="pointer-events-auto absolute inset-0 z-10 flex flex-col px-4 py-8 sm:px-6 sm:py-10 text-white">
                        {/* 小标签 */}
                        <div className="mb-3 inline-flex items-center self-center rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[11px] text-white/75 backdrop-blur-sm sm:text-xs">
                            <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            流程搞懂了？下面是大家最关心的问题
                        </div>

                        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
                            常见问题 FAQ
                        </h2>
                        <p className="mb-6 text-center text-sm text-white/70 sm:mb-8 sm:text-base">
                            如果你对到账时间、支付方式、账号安全或售后保障还有疑问，可以在这里找到更详细的解答。
                        </p>

                        <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 pr-1">
                            {faqs.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-white/12 bg-black/35 p-3 backdrop-blur-lg sm:p-4"
                                    >
                                        <button
                                            className="flex w-full items-center justify-between text-left"
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                        >
                                            <span className="text-sm font-semibold sm:text-base">
                                                {item.question}
                                            </span>
                                            <span className="text-2xl font-light">
                                                {isOpen ? "—" : "+"}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* 下面留一点间距，避免跟后续区块太挤 */}
                <p className="mt-6 text-center text-xs text-white/55 sm:text-sm">
                    还有其他个性化需求？随时可以联系我们的人工客服获取一对一协助。
                </p>
            </div>
        </section>
    );
}
