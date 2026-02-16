import type { ReactNode } from "react";
import AppShell from "../../../components/shell/AppShell";

export default function ShellLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return <AppShell locale={params.locale}>{children}</AppShell>;
}
