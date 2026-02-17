'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t, type Locale } from '@/lib/i18n';

// Placeholder component for BottomNav
export function BottomNav({ locale }: { locale: Locale }) {
  const T = t(locale);
  const pathname = usePathname();

  const navItems = [
    { href: `/${locale}/shell/home`, label: T.home, icon: '🏠' },
    { href: `/${locale}/shell/explore`, label: T.explore, icon: '🌍' },
    { href: `/${locale}/shell/communities`, label: T.communities, icon: '🧑‍🤝‍🧑' },
    { href: `/${locale}/shell/direct`, label: T.direct, icon: '💬' },
  ];

  return (
    <footer className="bottom-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className={isActive ? 'active' : ''}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </Link>
        );
      })}
    </footer>
  );
}
