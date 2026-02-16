"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function TopAppBar({ locale, t }: { locale: Locale; t: Record<string, string> }) {
  const router = useRouter();
  const pathname = usePathname();

  const title =
    pathname?.includes("/discover") ? t.discover :
    pathname?.includes("/library") ? t.library :
    pathname?.includes("/notifications") ? t.notifications :
    pathname?.includes("/profile") ? t.profile :
    t.home;

  return (
    <header
      style={{
        height: 56,
        background: "var(--warm-paper)",
        borderBottom: "1px solid var(--divider-line)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image src="/brand/logo.png" alt="TaraqqiClub" width={44} height={44} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
          {/* CopperKeyline 2px بطول 48px ملاصق للعنوان (RTL: يمين العنوان) */} 
          <span
            aria-hidden
            style={{
              width: 2,
              height: 48,
              background: "var(--copper-ui)",
              borderRadius: 2,
              order: locale === "ar" ? 2 : 0,
            }}
          />
          <h1 style={{ margin: 0, fontSize: 18, fontWeight: 600, flex: 1 }}>{title}</h1>

          {/* بحث عالمي داخل Top Bar يفتح Discover/Search */} 
          <button
            onClick={() => router.push(`/${locale}/discover`)}
            style={{
              height: 40,
              padding: "0 12px",
              borderRadius: 999,
              border: "1px solid var(--control-border)",
              background: "var(--card-white)",
              cursor: "pointer",
            }}
          >
            {t.search}
          </button>
        </div>
      </div>
    </header>
  );
}
