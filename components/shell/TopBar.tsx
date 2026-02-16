"use client";

import { useRouter } from "next/navigation";
import { t, isLocale, type Locale } from "../../lib/i18n";
import { useCreateSheet } from "./create-context";

export default function TopBar({ locale }: { locale: string }) {
  const router = useRouter();
  const { open } = useCreateSheet();

  const loc = (isLocale(locale) ? locale : "ar") as Locale;
  const labels = t(loc);
  const isRtl = loc === "ar";

  return (
    <div className="topbar" role="banner" aria-label="Top App Bar">
      <div className="topbarTitle" aria-label="App title">
        {isRtl ? null : <span className="copperKeyline" aria-hidden="true" />}
        <span>{labels.appName}</span>
        {isRtl ? <span className="copperKeyline" aria-hidden="true" /> : null}
      </div>

      <div className="topActions" aria-label="Global actions">
        {/* Search */}
        <button
          className="iconBtn"
          type="button"
          aria-label={labels.search}
          onClick={() => router.push(`/${loc}/discover`)}
        >
          🔎
        </button>

        {/* Create */}
        <button
          className="iconBtn"
          type="button"
          aria-label={labels.create}
          onClick={open}
        >
          ＋
        </button>

        {/* Notifications */}
        <button
          className="iconBtn"
          type="button"
          aria-label={labels.notifications}
          onClick={() => router.push(`/${loc}/notifications`)}
        >
          🔔
        </button>
      </div>
    </div>
  );
}
