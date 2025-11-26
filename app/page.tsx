import React from 'react';

export default function Home() {
  return (
    <main className="container">
      {/* 1. Above the Fold */}
      <section className="hero">
        <h1 className="floating">一站式 ChatGPT Plus 官方代充：安全、极速、微信支付宝</h1>
        <p className="hero-sub">50000+ 用户信赖，轻松升级 GPT-4，即刻享受优先体验。</p>
        <a href="#products" className="cta-btn primary">立即升级 Plus →</a>
      </section>

      {/* 2. Trust & Security */}
      <section className="features-grid">
        <div className="glass-card feature-item">
          <div className="feature-icon">🔒</div>
          <div>
            <h3>绝不封号 账户安全</h3>
            <p>正规渠道，独享账号</p>
          </div>
        </div>
        <div className="glass-card feature-item">
          <div className="feature-icon">⚡</div>
          <div>
            <h3>20 秒自动极速到账</h3>
            <p>全天候自动发货</p>
          </div>
        </div>
        <div className="glass-card feature-item">
          <div className="feature-icon">✅</div>
          <div>
            <h3>50000+ 用户信赖</h3>
            <p>口碑见证，值得信赖</p>
          </div>
        </div>
        <div className="glass-card feature-item">
          <div className="feature-icon">💰</div>
          <div>
            <h3>全网性价比之选</h3>
            <p>价格透明，无隐形消费</p>
          </div>
        </div>
      </section>

      {/* 3. Products & Pricing */}
      <section id="products" className="products-list">
        <h2>热门套餐</h2>

        <div className="glass-card product-card">
          <div className="product-header">
            <h3>ChatGPT Plus (官方通道)</h3>
            <span className="price">¥168</span>
          </div>
          <p>正规充值，稳定不掉</p>
          <a href="#" className="cta-btn">立即升级 Plus →</a>
        </div>

        <div className="glass-card product-card">
          <div className="product-header">
            <h3>ChatGPT Plus 新账号</h3>
            <span className="price">¥158</span>
          </div>
          <p>含一个月会员，独享</p>
          <a href="#" className="cta-btn">购买新号 →</a>
        </div>

        <div className="glass-card product-card">
          <div className="product-header">
            <h3>Gemini 2.5 Pro 会员</h3>
            <span className="price">¥140</span>
          </div>
          <p>谷歌最强模型体验</p>
          <a href="#" className="cta-btn">立即购买 →</a>
        </div>

        <div className="glass-card product-card">
          <div className="product-header">
            <h3>Claude / Grok 会员</h3>
            <span className="price">¥180</span>
          </div>
          <p>多模型支持，灵活选择</p>
          <a href="#" className="cta-btn">立即购买 →</a>
        </div>
      </section>

      {/* 4. Process */}
      <section className="steps">
        <h2>操作流程</h2>
        <div className="step-item">
          <div className="step-icon">1</div>
          <div>
            <h3>选择套餐</h3>
            <p>选择您需要的会员服务</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-icon">2</div>
          <div>
            <h3>扫码支付</h3>
            <p>支持微信/支付宝，安全快捷</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-icon">3</div>
          <div>
            <h3>自动激活</h3>
            <p>支付成功后，系统自动充值/发货</p>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="footer glass-card">
        <div className="payment-methods">
          <div className="payment-icon">支</div>
          <div className="payment-icon">微</div>
        </div>

        <div className="support-qr">
          [二维码占位]
        </div>
        <p>扫码添加微信客服</p>
        <p style={{ marginTop: '5px', fontWeight: 'bold' }}>微信号：vipgpt01</p>

        <div className="disclaimer">
          <p>本服务仅提供代充/账号服务，与 OpenAI 官方无关。</p>
          <p>© 2025 AI 会员代充服务</p>
        </div>
      </footer>
    </main>
  );
}
