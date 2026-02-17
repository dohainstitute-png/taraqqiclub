import { TopAppBar } from "@/components/shell/TopAppBar";
import { BottomNav } from "@/components/shell/BottomNav";
import { CreateEntry } from "@/components/shell/CreateEntry";
import { isLocale, type Locale } from "@/lib/i18n";
import type { ReactNode } from "react";

export default function ShellLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = (isLocale(params.locale) ? params.locale : "ar") as Locale;

  return (
    <div className="shell-container">
      <TopAppBar locale={locale} />
      <main className="main-content">
        {children}
      </main>
      <BottomNav locale={locale} />
      <CreateEntry locale={locale} />
    </div>
  );
}
