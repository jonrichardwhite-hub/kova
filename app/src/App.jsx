import React, { useState } from 'react';
import MarketingHome from './pages/MarketingHome.jsx';
import KioskDemo from './pages/KioskDemo.jsx';
import DesignSystem from './pages/DesignSystem.jsx';

const TABS = [
  { id: 'marketing', label: 'Marketing site' },
  { id: 'kiosk', label: 'Kiosk' },
  { id: 'system', label: 'Design system' },
];

export default function App() {
  const [tab, setTab] = useState('marketing');
  return (
    <>
      <div className="app-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={`app-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <main className="app-view">
        {tab === 'marketing' && <MarketingHome />}
        {tab === 'kiosk' && <KioskDemo />}
        {tab === 'system' && <DesignSystem />}
      </main>
    </>
  );
}
