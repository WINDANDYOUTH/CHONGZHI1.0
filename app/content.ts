export type NavLink = {
  label: string;
  href: string;
};

export type Action = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

export type Stat = {
  label: string;
  value: string;
};

export type Feature = {
  title: string;
  description: string;
  accent: string;
};

export type Bundle = {
  name: string;
  price: string;
  description: string;
  perks: string[];
  badge?: string;
};

export type WorkflowStep = {
  title: string;
  detail: string;
};

export const navLinks: NavLink[] = [
  { label: "套餐", href: "#products" },
  { label: "流程", href: "#workflow" },
  { label: "保障", href: "#support" },
];

export const heroContent = {
  badge: "AI 会员充值 · 官方通道",
  title: "一站式升级全球顶尖模型",
  highlight: "极快到账 · 不封号 · 可开发票",
  description:
    "50000+ 用户信赖，ChatGPT Plus / Gemini / Claude / Grok 代充服务。极速自动发货，支持微信与支付宝。",
  actions: [
    { label: "立即升级 Plus", href: "#products", variant: "primary" as const },
    { label: "咨询客服", href: "#support", variant: "ghost" as const },
  ],
  stats: [
    { label: "服务人次", value: "50K+" },
    { label: "平均到账", value: "20 秒" },
    { label: "可选模型", value: "6 款" },
  ] as Stat[],
};

export const trustPillars: Feature[] = [
  {
    title: "官方直连，不封号",
    description: "正规通道直充，独享账户权益，全程可追踪。",
    accent: "安全",
  },
  {
    title: "极速自动发货",
    description: "24/7 自动化到账，支付成功即刻可用。",
    accent: "速度",
  },
  {
    title: "全网性价比",
    description: "透明标价，无隐藏消费，支持开票报销。",
    accent: "价格",
  },
  {
    title: "多模型灵活选",
    description: "ChatGPT Plus / Gemini / Claude / Grok 等多种套餐。",
    accent: "自由",
  },
];

export const bundles: Bundle[] = [
  {
    name: "ChatGPT Plus（官方通道）",
    price: "¥168",
    description: "稳定不掉线，解锁 GPT-4 / GPT-o1，支持插件与网页浏览。",
    perks: ["可开发票", "独享账号", "全程可查"],
    badge: "爆款",
  },
  {
    name: "ChatGPT Plus 新账号",
    price: "¥158",
    description: "全新账号 + 1 个月会员，无历史占用，可自定义邮箱。",
    perks: ["专属绑定", "到期可续", "售后保障"],
  },
  {
    name: "Gemini 2.5 Pro 会员",
    price: "¥140",
    description: "谷歌顶级模型，原生搜索与多模态体验，团队协同可选。",
    perks: ["原生接口", "团队版可选", "高速节省"],
  },
  {
    name: "Claude / Grok 会员",
    price: "¥180",
    description: "多模型任意切换，超长上下文，代码/文档场景更友好。",
    perks: ["官方通道", "随时切换", "企业套餐"],
  },
];

export const workflow: WorkflowStep[] = [
  {
    title: "选择套餐",
    detail: "挑选需要的模型与时长，下单前可咨询客服。",
  },
  {
    title: "扫码支付",
    detail: "支持微信 / 支付宝 / 银行转账，自动匹配最优通道。",
  },
  {
    title: "自动激活",
    detail: "支付后 20 秒内自动到账，配置完成即可使用。",
  },
];

export const supportContent = {
  qrPlaceholder: "客服二维码",
  wechatId: "微信号：vipgpt01",
  note: "本服务仅提供代充 / 账号服务，与 OpenAI / Google / Anthropic 官方无关。",
  copyright: "© 2025 AI 会员代充服务",
};
