"use client";

import { useEffect, useMemo, useState } from "react";
import Skeleton from "./Skeleton";
import { isLocale, t, type Locale } from "../../lib/i18n";

export default function AsyncTemplate({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const loc = (isLocale(locale) ? locale : "ar") as Locale;
  const labels = useMemo(() => t(loc), [loc]);

  const [loading, setLoading] = useState(true);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSlow(false);

    const done = window.setTimeout(() => setLoading(false), 900); // Skeleton قصير
    const slowT = window.setTimeout(() => setSlow(true), 5000);   // بعد 5s: رسالة + Retry

    return () => {
      window.clearTimeout(done);
      window.clearTimeout(slowT);
    };
  }, []);

  if (loading) {
    return (
      <div className="card" aria-busy="true">
        <Skeleton />
        {slow ? (
          <div style={{ marginTop: 12 }}>
            <p className="muted" style={{ marginTop: 0 }}>{labels.loadingSlow}</p>
            <button
              className="primaryBtn"
              type="button"
              onClick={() => window.location.reload()}
            >
              {labels.retry}
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  return <>{children}</>;
}
