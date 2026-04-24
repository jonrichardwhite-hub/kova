'use client';
import { MarketingNav } from '@ds/ui_kits/marketing/MarketingNav.jsx';
import { StatGrid, Pillars, Footer } from '@ds/ui_kits/marketing/Sections.jsx';

function Hero() {
  return (
    <>
      <section className="mk-hero-frame">
        <div className="mk-hero">
          <div>
            <div className="kova-tag">AUTONOMOUS PHARMACY PLATFORM</div>
            <h1 className="kova-hero" style={{ marginTop: 20 }}>
              Autonomous pharmacy, with a <strong>pharmacist</strong> still in the loop.
            </h1>
            <p className="kova-body-lg" style={{ marginTop: 24, maxWidth: 500 }}>
              Kova is a clinical reasoning platform and an autonomous
              dispensing kiosk, built for retail pharmacy. Twenty four
              hour access, documented decisions, and time back on the bench.
            </p>
            <div className="mk-hero-actions">
              <button className="btn-primary">See the product</button>
              <button className="btn-secondary">Book a demo</button>
            </div>
          </div>
          <div className="mk-hero-visual" aria-hidden="true">
            <div className="mk-hero-device">
              <div className="mk-hero-device-top">
                <span className="mk-hero-device-wm">KOVA</span>
                <span className="mk-hero-device-tag">STEP 01 · WELCOME</span>
              </div>
              <div className="mk-hero-device-body">
                <div className="mk-hero-device-greet">Good morning.</div>
                <div className="mk-hero-device-sub">Tap below to begin a private consult.</div>
                <div className="mk-hero-device-cta">Begin consult</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mk-supported">
        <div className="mk-supported-label">SUPPORTED BY</div>
        <div className="mk-supported-row">
          <span>Partner one</span>
          <span>Partner two</span>
          <span>Partner three</span>
          <span>Partner four</span>
        </div>
      </div>
    </>
  );
}

export default function MarketingHome() {
  return (
    <div data-screen-label="Marketing · Home">
      <MarketingNav />
      <Hero />
      <StatGrid />
      <Pillars />
      <Footer />
    </div>
  );
}
