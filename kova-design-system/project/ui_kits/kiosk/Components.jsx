import React from 'react';

export function KioskHeader({ step, total, title }) {
  return (
    <div className="kiosk-header">
      <div className="kiosk-wordmark">KOVA</div>
      <div className="kiosk-step">
        <span className="kova-mono-tag">STEP {String(step).padStart(2,'0')} · {title}</span>
        <div className="kiosk-dots">
          {Array.from({length: total}).map((_, i) => (
            <span key={i} className={`kiosk-dot ${i < step ? 'done' : ''} ${i === step-1 ? 'active' : ''}`}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ScriptCard({ drug, generic, days, refills, status = 'All clear' }) {
  return (
    <div className="script-card">
      <div className="script-head">
        <div>
          <div className="script-drug">{drug}</div>
          <div className="script-gen">{generic}</div>
        </div>
        <span className="status-pill success">{status}</span>
      </div>
      <div className="script-meta">
        <div><div className="meta-lbl">Days supply</div><div className="meta-val">{days}</div></div>
        <div><div className="meta-lbl">Refills left</div><div className="meta-val">{refills}</div></div>
      </div>
    </div>
  );
}

export function InfoPanel({ tone = 'default', label, children }) {
  return (
    <div className={`info-panel ${tone}`}>
      <div className="info-panel-label">{label}</div>
      <div className="info-panel-text">{children}</div>
    </div>
  );
}

export function ChatBubble({ who = 'ai', name, children }) {
  return (
    <div className={`chat-row ${who}`}>
      <div className="chat-av">
        {who === 'ai' ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        )}
      </div>
      <div className={`chat-bubble ${who}`}>
        {name && <div className="chat-name">{name}</div>}
        {children}
      </div>
    </div>
  );
}

export function KioskCTA({ children, onClick, variant = 'primary' }) {
  return (
    <button className={`kiosk-cta ${variant}`} onClick={onClick}>{children}</button>
  );
}

export function ReplyChips({ options, onPick }) {
  return (
    <div className="reply-chips">
      {options.map((o, i) => (
        <button key={i} className="chip" onClick={() => onPick(o)}>{o}</button>
      ))}
    </div>
  );
}
