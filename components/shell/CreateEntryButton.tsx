"use client";

import { isLocale, t, type Locale } from "../../lib/i18n";
import { useCreateSheet } from "./create-context";

export default function CreateEntryButton({ locale }: { locale: string }) {
  const loc = (isLocale(locale) ? locale : "ar") as Locale;
  const labels = t(loc);
  const { open } = useCreateSheet();

  return (
    <button
      type="button"
      className="createEntry"
      aria-label={labels.contribute}
      onClick={open}
    >
      ＋ {labels.create}
    </button>
  );
}
