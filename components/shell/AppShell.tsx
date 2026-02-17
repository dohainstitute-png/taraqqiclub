'use client';

import TopAppBar from '@/components/shell/TopAppBar';
import MainNavigation from '@/components/shell/MainNavigation';
import { Locale, getDictionary } from '@/lib/i18n';

interface AppShellProps {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  locale: Locale;
}

const AppShell = ({ children, dictionary, locale }: AppShellProps) => {
  return (
    <div className="flex flex-col h-screen">
      <TopAppBar dictionary={dictionary} />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <MainNavigation dictionary={dictionary} locale={locale} />
    </div>
  );
};

export default AppShell;
