"use client";

import { createContext, useContext, useMemo, useState } from "react";

type CreateCtx = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const Ctx = createContext<CreateCtx | null>(null);

export function CreateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  const value = useMemo<CreateCtx>(
    () => ({
      isOpen,
      open: () => setOpen(true),
      close: () => setOpen(false),
    }),
    [isOpen]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCreateSheet() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCreateSheet must be used within CreateProvider");
  return ctx;
}
