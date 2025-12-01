import {
  bundles,
  heroContent,
  supportContent,
  trustPillars,
  workflow,
} from "./content";
import FloatingLines from "@/components/FloatingLines";


export default function Home() {
  return (
    <div className="page">
      <section className="hero-aurora">
        <div className="hero-lines" aria-hidden>
          <FloatingLines
           enabledWaves={['top', 'middle', 'bottom']}
           // Array - specify line count per wave; Number - same count for all waves
           lineCount={[6, 6, 6]}
           // Array - specify line distance per wave; Number - same distance for all waves
           lineDistance={[5, 5, 5]}
           bendRadius={5.0}
           bendStrength={-0.5}
           interactive={true}
           parallax={true}
          />
          <div className="hero-fade" />
        </div>

        <div className="hero-shell">
          <div className="hero-center">
            <div className="pill pill-aurora">
              <span className="pill-dot" />
              {heroContent.badge}
            </div>
            <h1 className="hero-heading">
              {heroContent.title}
              <span>{heroContent.highlight}</span>
            </h1>
            <p className="hero-lede">{heroContent.description}</p>
            <div className="hero-actions">
              {heroContent.actions.map((action) => (
                <a
                  key={action.label}
                  className={`hero-btn ${action.variant === "ghost" ? "ghost" : "primary"}`}
                  href={action.href}
                >
                  {action.label}
                </a>
              ))}
            </div>

            <div className="hero-stats">
              {heroContent.stats.map((stat) => (
                <div key={stat.label} className="hero-stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <div className="orb orb-a" aria-hidden />
        <div className="orb orb-b" aria-hidden />

        <main className="page-content">
          <section className="section-card">
            <div className="section-head">
              <div>
                <p className="eyebrow">信赖之选</p>
                <h2>像 ai.google 一样简洁的未来感</h2>
              </div>
              <p className="section-note">
                透明、克制、极简的设计语言，突出核心信息，不打扰用户
              </p>
            </div>
            <div className="feature-grid">
              {trustPillars.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <span className="chip subtle">{feature.accent}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="products" className="section-card">
            <div className="section-head">
              <div>
                <p className="eyebrow">热门套餐</p>
                <h2>主力模型，随时升级</h2>
              </div>
              <p className="section-note">
                官方直连渠道，会员、接口、团队版本均可咨询定制
              </p>
            </div>
            <div className="bundle-grid">
              {bundles.map((bundle) => (
                <div key={bundle.name} className="bundle-card">
                  <div className="bundle-meta">
                    <div>
                      <p className="bundle-name">{bundle.name}</p>
                      <p className="bundle-desc">{bundle.description}</p>
                    </div>
                    {bundle.badge && <span className="badge">{bundle.badge}</span>}
                  </div>
                  <p className="bundle-price">{bundle.price}</p>
                  <ul className="perk-list">
                    {bundle.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                  <a className="cta slim" href="#support">
                    立即咨询
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="workflow" className="section-card">
            <div className="section-head">
              <div>
                <p className="eyebrow">操作流程</p>
                <h2>三步完成，自动发货</h2>
              </div>
              <p className="section-note">
                轻量级流程设计，让升级体验像 ai.google 一样顺滑
              </p>
            </div>
            <div className="timeline">
              {workflow.map((step, index) => (
                <div key={step.title} className="timeline-row">
                  <div className="timeline-index">{index + 1}</div>
                  <div>
                    <p className="item-title">{step.title}</p>
                    <p className="item-desc">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="support" className="section-card support-card">
            <div className="support-visual">{supportContent.qrPlaceholder}</div>
            <div className="support-copy">
              <p className="eyebrow">专属客服</p>
              <h3>微信 / 支付宝 · 全天候响应</h3>
              <p className="support-id">{supportContent.wechatId}</p>
              <p className="support-note">{supportContent.note}</p>
              <div className="support-footer">
                <p>{supportContent.copyright}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
