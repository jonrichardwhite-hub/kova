import React from 'react';

export function MarketingNav() {
  return (
    <nav className="mk-nav">
      <a className="mk-logo" href="#">KOVA</a>
      <div className="mk-links">
        <a href="#">Product</a>
        <a href="#">Specialists <span style={{opacity:0.5}}>▾</span></a>
        <a href="#">About</a>
      </div>
      <div className="mk-actions">
        <button className="btn-ghost">Sign in</button>
        <button className="btn-pill">Book demo</button>
      </div>
    </nav>
  );
}
