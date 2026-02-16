"use client";

import type { ReactNode } from "react";
import { CreateProvider } from "./create-context";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";
import CreateEntryButton from "./CreateEntryButton";
import CreateSheet from "./CreateSheet";

export default function AppShell({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <CreateProvider>
      <div className="topbar">
        <TopBar locale={locale} />
      </div>

      <div className="shell">
        <div className="container">{children}</div>
      </div>

      <CreateEntryButton locale={locale} />
      <BottomNav locale={locale} />
      <CreateSheet locale={locale} />
    </CreateProvider>
  );
}
