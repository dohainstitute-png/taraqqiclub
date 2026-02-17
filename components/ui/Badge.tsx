'use client';

import type { ReactNode } from "react";

type BadgeProps = {
  variant?: 'default' | 'ai';
  children: ReactNode;
};

export function Badge({ variant = 'default', children }: BadgeProps) {
  const baseClasses = "text-xs font-semibold px-2 py-0.5 rounded-full";
  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    ai: "bg-purple-200 text-purple-800",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
