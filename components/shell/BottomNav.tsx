"use client";

import { usePathname, useRouter } from "next/navigation";
import { t, isLocale, type Locale } from "../../lib/i18n";

type NavItem = { key: "home" | "discover" | "library" | "profile"; icon: string };

export default function BottomNav({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const loc = (isLocale(locale) ? locale : "ar") as Locale;
  const labels = t(loc);

  const items: NavItem[] = [
    { key: "home", icon: "🏠" },
    { key: "discover", icon: "🧭" },
    { key: "library", icon: "📚" },
    { key: "profile", icon: "👤" },
  ];

  const isActive = (key: NavItem["key"]) =>
    pathname === `/${loc}/${key}` || pathname?.startsWith(`/${loc}/${key}/`);

  return (
    <nav className="bottomnav" aria-label="Bottom Navigation">
      {items.map((it) => {
        const active = isActive(it.key);
        const label = labels[it.key];

        return (
          <button
            key={it.key}
            type="button"
            className="navItem"
            aria-current={active ? "page" : undefined}
            onClick={() => router.push(`/${loc}/${it.key}`)}
          >
            <div aria-hidden="true">{it.icon}</div>
            <div className="navLabel">{label}</div>
            <div className={`indicator ${active ? "indicatorActive" : ""}`} />
          </button>
        );
      })}
    </nav>
  );
}
