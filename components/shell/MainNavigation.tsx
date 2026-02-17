'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Compass, Library, Bell, User } from 'lucide-react';
import { Locale, getDictionary } from '@/lib/i18n';

interface MainNavigationProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  locale: Locale;
}

const MainNavigation = ({ dictionary, locale }: MainNavigationProps) => {
  const pathname = usePathname();

  const navItems = [
    { href: `/${locale}/home`, label: dictionary.navigation.home, icon: <Home /> },
    { href: `/${locale}/discover`, label: dictionary.navigation.discover, icon: <Compass /> },
    { href: `/${locale}/library`, label: dictionary.navigation.library, icon: <Library /> },
    {
      href: `/${locale}/notifications`,
      label: dictionary.navigation.notifications,
      icon: <Bell />,
    },
    { href: `/${locale}/profile`, label: dictionary.navigation.profile, icon: <User /> },
  ];

  return (
    <nav className="flex justify-around items-center p-2 bg-white dark:bg-gray-800 border-t">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center ${isActive ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}>
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNavigation;
