"use client";

import { isLocale, t, type Locale } from "../../lib/i18n";
import { useCreateSheet } from "./create-context";

export default function CreateSheet({ locale }: { locale: string }) {
  const loc = (isLocale(locale) ? locale : "ar") as Locale;
  const labels = t(loc);
  const { isOpen, close } = useCreateSheet();

  if (!isOpen) return null;

  return (
    <div
      className="sheetOverlay"
      role="dialog"
      aria-modal="true"
      aria-label={labels.sheetTitle}
      onClick={close}
    >
      <div className="sheetPanel" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontWeight: 800 }}>{labels.sheetTitle}</div>
          <button className="iconBtn" type="button" onClick={close} aria-label={labels.close}>
            ✕
          </button>
        </div>

        <div className="hr" />

        <p className="muted" style={{ marginTop: 0 }}>{labels.sheetHint}</p>

        <div style={{ display: "grid", gap: 10 }}>
          <button className="primaryBtn" type="button" onClick={close}>
            {loc === "ar" ? "نشر (Placeholder)" : "Post (Placeholder)"}
          </button>
          <button className="primaryBtn" type="button" onClick={close}>
            {loc === "ar" ? "رفع (Placeholder)" : "Upload (Placeholder)"}
          </button>
          <button className="primaryBtn" type="button" onClick={close}>
            {loc === "ar" ? "إنشاء (Placeholder)" : "Create (Placeholder)"}
          </button>
        </div>
      </div>
    </div>
  );
}
