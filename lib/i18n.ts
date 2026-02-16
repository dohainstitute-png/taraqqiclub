export type Locale = "ar" | "en";

export function isLocale(v: string): v is Locale {
  return v === "ar" || v === "en";
}

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
  };

  return locale === "ar" ? ar : en;
}
