'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS = [
  { href: '/', label: 'Marketing site' },
  { href: '/kiosk', label: 'Kiosk' },
  { href: '/system', label: 'Design system' },
];

export default function NavTabs() {
  const pathname = usePathname();
  return (
    <div className="app-tabs" role="tablist">
      {TABS.map((t) => {
        const active = t.href === '/' ? pathname === '/' : pathname.startsWith(t.href);
        return (
          <Link key={t.href} href={t.href} className={`app-tab ${active ? 'active' : ''}`}>
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
