
# Change Audit 001 - المحطة الأولى: بناء الهيكل وتدفق الدخول

**تحذير:** هذا الملف هو سجل دقيق للتغييرات في الكود. كل حرف مدون هنا هو جزء من تاريخ المشروع. لا يجوز حذف أو تعديل أي محتوى في هذا الملف إطلاقاً. يُسمح فقط بإضافة ملفات تدقيق جديدة بأرقام تسلسلية لاحقة. أي محاولة لتغيير هذا السجل تعتبر تخريباً للمشروع.

---

## `components/shell/TopAppBar.tsx` (New File)

```tsx
\'use client\';

import Link from \'next/link\';
import { t, type Locale } from \'@/lib/i18n\';

// Placeholder component for TopAppBar
export function TopAppBar({ locale }: { locale: Locale }) {
  const T = t(locale);

  return (
    <header className="top-app-bar">
      <div className="start">
        {/* App Logo/Name */}
        <Link href={`/${locale}/shell/home`}>{T.appName}</Link>
      </div>
      <div className="end">
        {/* Action Buttons */}
        <button aria-label={T.search}>🔍</button>
        <button aria-label={T.create}>➕</button>
        <button aria-label={T.notifications}>🔔</button>
        {/* Profile Link/Avatar */}
        <Link href={`/${locale}/shell/profile`}>
          <div className="avatar-placeholder"></div>
        </Link>
      </div>
    </header>
  );
}
```

---

## `components/shell/BottomNav.tsx` (New File)

```tsx
\'use client\';

import Link from \'next/link\';
import { usePathname } from \'next/navigation\';
import { t, type Locale } from \'@/lib/i18n\';

// Placeholder component for BottomNav
export function BottomNav({ locale }: { locale: Locale }) {
  const T = t(locale);
  const pathname = usePathname();

  const navItems = [
    { href: `/${locale}/shell/home`, label: T.home, icon: \'🏠\' },
    { href: `/${locale}/shell/explore`, label: T.explore, icon: \'🌍\' },
    { href: `/${locale}/shell/communities`, label: T.communities, icon: \'🧑‍🤝‍🧑\' },
    { href: `/${locale}/shell/direct`, label: T.direct, icon: \'💬\' },
  ];

  return (
    <footer className="bottom-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className={isActive ? \'active\' : \'\'}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </Link>
        );
      })}
    </footer>
  );
}
```

---

## `components/shell/CreateEntry.tsx` (New File)

```tsx
\'use client\';

import { t, type Locale } from \'@/lib/i18n\';

// Placeholder for the Create Entry modal/view
export function CreateEntry({ locale }: { locale: Locale }) {
    const T = t(locale);

    // In the future, this would be a modal or a separate screen
    // Triggered by the create button in the TopAppBar

    return (
        <div style={{display: \'none\'}}> {/* Hidden for now */}
            <h2>{T.createEntry.title}</h2>
        </div>
    );
}
```

---

## `app/shell/layout.tsx` (New File)

```tsx
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
```

---

## `lib/i18n.ts` (Modified)

```ts
export type Locale = "ar" | "en";

export function isLocale(v: string): v is Locale {
  return v === "ar" || v === "en";
}

export const locales: Locale[] = ["ar", "en"];

export function t(locale: Locale) {
  const ar = {
    appName: "TaraqqiClub",
    search: "بحث",
    create: "إنشاء",
    notifications: "إشعارات",
    home: "الرئيسية",
    discover: "اكتشاف",
    library: "المكتبة",
    profile: "الملف",
    start: "ابدأ",
    skip: "تخطي",
    next: "التالي",
    back: "رجوع",
    close: "إغلاق",
    contribute: "مساهمة",
    sheetTitle: "المساهمة",
    sheetHint: "Placeholder — سيُستبدل لاحقًا حسب الصلاحيات.",
    retry: "إعادة المحاولة",
    loadingSlow: "يبدو أن التحميل يستغرق وقتًا أطول من المعتاد.",
    localNav: "تنقّل محلي",
    contextual: "روابط سياقية",
    related: "Related (Placeholder)",
    because: "السبب: Placeholder للتوسعة لاحقًا",
    timezone: "المنطقة الزمنية",
    contentLang: "لغة المحتوى",
    arabic: "العربية",
    english: "English",
    createEntry: {
        title: "إنشاء إدخال جديد"
    }
  };

  const en = {
    appName: "TaraqqiClub",
    search: "Search",
    create: "Create",
    notifications: "Notifications",
    home: "Home",
    discover: "Discover",
    library: "Library",
    profile: "Profile",
    start: "Start",
    skip: "Skip",
    next: "Next",
    back: "Back",
    close: "Close",
    contribute: "Contribute",
    sheetTitle: "Contribute",
    sheetHint: "Placeholder — will be replaced later by permissions.",
    retry: "Retry",
    loadingSlow: "Loading is taking longer than usual.",
    localNav: "Local navigation",
    contextual: "Contextual links",
    related: "Related (Placeholder)",
    because: "Reason: placeholder to be expanded later",
    timezone: "Timezone",
    contentLang: "Content language",
    arabic: "العربية",
    english: "English",
    createEntry: {
        title: "Create New Entry"
    }
  };

  return locale === "ar" ? ar : en;
}
```

---

## `app/page.tsx` (New File)

```tsx
import { redirect } from "next/navigation";

export default function Root() {
  redirect("/ar");
}
```

---

## `app/[locale]/page.tsx` (New File)

```tsx
import { redirect } from "next/navigation";

export default function LocaleIndex({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/start`);
}
```

---

## `app/[locale]/start/page.tsx` (New File)

```tsx
"use client";

import { useRouter } from "next/navigation";
import { t, isLocale, type Locale } from "../../lib/i18n";
import { useState } from "react";

const STEPS_COUNT = 4;

export default function StartPage({ params }: { params: { locale: string } }) {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const loc = (isLocale(params.locale) ? params.locale : "ar") as Locale;
  const isRtl = loc === "ar";
  const labels = t(loc);

  const onNext = () => {
    if (step < STEPS_COUNT) setStep((s) => s + 1);
    else router.push(`/${loc}/home`);
  };

  const onPrev = () => setStep((s) => s - 1);

  const onSkip = () => router.push(`/${loc}/home`);

  return (
    <div className="startShell">
      <header className="startHeader">
        {/* Logo */}
        <div className="topbarTitle" aria-label="App title">
          {isRtl ? null : <span className="copperKeyline" aria-hidden="true" />}
          <span>{labels.appName}</span>
          {isRtl ? <span className="copperKeyline" aria-hidden="true" /> : null}
        </div>

        {/* Skip */}
        {step < STEPS_COUNT ? (
          <button type="button" className="textBtn" onClick={onSkip}>
            {labels.skip}
          </button>
        ) : null}
      </header>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          gap: 4,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {Array.from({ length: STEPS_COUNT + 1 }).map((_, i) => (
          <div key={i} className={`dot ${i === step ? "dotActive" : ""}`} />
        ))}
      </div>

      <div className="startContent">
        <OnboardingStep step={step} />
      </div>

      {/* Actions */}
      <div className="startActions">
        {step > 0 ? (
          <button type="button" className="textBtn" onClick={onPrev}>
            {labels.back}
          </button>
        ) : (
          <div />
        )}

        <button type="button" className="primaryBtn" onClick={onNext}>
          {step < STEPS_COUNT ? labels.next : labels.start}
        </button>
      </div>
    </div>
  );
}

function OnboardingStep({ step }: { step: number }) {
  if (step === 0) return <div>First step</div>;
  if (step === 1) return <div>Second step</div>;
  if (step === 2) return <div>Third step</div>;
  if (step === 3) return <div>Fourth step</div>;
  return <div>Final step</div>;
}
```

---

## `middleware.ts` (New File)

```ts
import { NextRequest, NextResponse } from "next/server";
import { locales } from "@/lib/i18n";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore next internals
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // If already has locale prefix, pass through
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  // Default Arabic
  const url = req.nextUrl.clone();
  url.pathname = `/ar${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\..*).*)"],
};
```
