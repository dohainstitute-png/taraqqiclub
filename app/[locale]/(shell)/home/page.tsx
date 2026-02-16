"use client";

import { isLocale, t, type Locale } from "../../../lib/i18n";
import AsyncTemplate from "../../../components/templates/AsyncTemplate";

export default function HomePage({ params }: { params: { locale: string } }) {
  const loc = (isLocale(params.locale) ? params.locale : "ar") as Locale;
  const labels = t(loc);
  const isRtl = loc === "ar";

  return (
    <AsyncTemplate locale={loc}>
      <div
        style={{
          textAlign: "center",
          padding: "32px 16px",
          margin: "16px 0",
          border: "1px solid var(--divider-line)",
          borderRadius: "var(--radius-card)",
        }}
      >
        <h2>Feed (Placeholder)</h2>
        <p>This is where the main feed will be.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <h3 style={{ margin: 0 }}>{labels.localNav}</h3>
        <p style={{ margin: 0, fontWeight: 700 }}>
          {isRtl ? "← اسحب" : "Swipe →"}
        </p>
      </div>

      <div
        className="tabs"
        style={{
          overflowX: "auto",
          paddingBlock: 12,
          scrollbarWidth: "none",
        }}
      >
        <button type="button" className="tabLink tabLinkActive">For you</button>
        <button type="button" className="tabLink">Popular</button>
        <button type="button" className="tabLink">Following</button>
        <button type="button" className="tabLink">Recommended</button>
        <button type="button" className="tabLink">All</button>
      </div>

      <div className="hr" />

      <h3 style={{ marginTop: 0 }}>{labels.contextual}</h3>
      <div className="chips">
        <button type="button" className="chip">{labels.related}</button>
        <button type="button" className="chip">{labels.because}</button>
      </div>
    </AsyncTemplate>
  );
}
