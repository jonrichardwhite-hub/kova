import React from 'react';

export function Hero() {
  return (
    <section className="mk-hero">
      <div>
        <div className="kova-tag">AUTONOMOUS PHARMACY PLATFORM</div>
        <h1 className="kova-hero" style={{marginTop: 16}}>
          Autonomous pharmacy, with a <strong>pharmacist</strong> still in the loop.
        </h1>
        <p className="kova-body-lg" style={{marginTop: 20, maxWidth: 520}}>
          Kova is a clinical reasoning platform and an autonomous dispensing
          kiosk, built for retail pharmacy. Twenty-four hour access,
          documented decisions, and time back on the bench.
        </p>
        <div className="mk-hero-actions">
          <button className="btn-primary">See the product</button>
          <button className="btn-secondary">Book a demo</button>
        </div>
      </div>
      <div className="mk-hero-visual" aria-hidden="true" />
    </section>
  );
}

export function StatGrid() {
  const stats = [
    {n: '90', u: '%', t: 'of drug interaction alerts get overridden. Your safety system is noise.'},
    {n: '53', u: '%', t: 'pharmacist burnout. Your most expensive role is your most at risk role.'},
    {n: '$40', u: 'B', t: 'annual medication error cost in the US. Every script is a liability surface.'},
  ];
  return (
    <section className="mk-section">
      <div className="kova-display" style={{maxWidth: 780, marginBottom: 36}}>
        Your pharmacists are drowning. Your overrides are climbing. Your stores close at 6pm.
      </div>
      <div className="mk-stat-grid">
        {stats.map((s, i) => (
          <div className="mk-stat" key={i}>
            <div className="mk-stat-num">{s.n}<small>{s.u}</small></div>
            <div className="mk-stat-label">{s.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Pillars() {
  const items = [
    {t: 'Staff leverage.', d: 'Free your pharmacists from 200+ insurance rejections a day, routine counseling, and queue pressure. Give them back the hours they were hired for.', icon: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'},
    {t: '24/7 trading, without 24/7 rosters.', d: 'Collection, counseling, and refill processing continue after the shutter comes down. No shift premium, no overtime, no gap in service.', icon: 'M12 6v6l4 2 M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'},
    {t: 'Documented decisions.', d: 'Every override, every interaction, every counseling moment is logged with clinical rationale. Audit-ready by default.', icon: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'},
  ];
  return (
    <section className="mk-section">
      <div className="kova-tag">WHY RETAIL PHARMACY CHAINS PICK KOVA</div>
      <div className="kova-display" style={{marginTop: 16, marginBottom: 40}}>
        Three numbers that move the P&amp;L.
      </div>
      <div className="mk-pillars">
        {items.map((it, i) => (
          <div className="mk-pillar" key={i}>
            <div className="mk-pillar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {it.icon.split(' M').map((d, j) => <path key={j} d={j===0?d:'M'+d}/>)}
              </svg>
            </div>
            <div className="mk-pillar-title">{it.t}</div>
            <div className="mk-pillar-text">{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mk-footer">
      <div className="mk-footer-inner">
        <div>
          <div className="kova-wordmark" style={{fontSize: 24, letterSpacing: '8px'}}>KOVA</div>
          <p className="kova-body-sm" style={{marginTop: 12, maxWidth: 260}}>
            Autonomous pharmacy, with a pharmacist still in the loop.
          </p>
        </div>
        <div className="mk-foot-col">
          <div className="mk-foot-head">Product</div>
          <a>Platform</a><a>Kiosk</a><a>Specialists</a>
        </div>
        <div className="mk-foot-col">
          <div className="mk-foot-head">Company</div>
          <a>About</a><a>Careers</a><a>Press</a>
        </div>
        <div className="mk-foot-col">
          <div className="mk-foot-head">Trust</div>
          <a>Privacy</a><a>Security</a><a>Regulatory</a>
        </div>
      </div>
      <div className="mk-foot-bottom">
        <span className="kova-mono-tag">© 2026 KOVA HEALTH · MELBOURNE</span>
      </div>
    </footer>
  );
}
