import type { ReactNode } from "react";
import { isLocale, type Locale } from "../../lib/i18n";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = (isLocale(params.locale) ? params.locale : "ar") as Locale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={dir}>
      {children}
    </div>
  );
}
