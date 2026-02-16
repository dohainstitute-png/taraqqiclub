"use client";

import type { ReactNode } from "react";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <TopAppBar />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <BottomNav />
    </div>
  );
}