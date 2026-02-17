'use client';

import type { ReactNode } from "react";

interface ListRowProps {
  leading?: ReactNode;
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  meta?: ReactNode;
}

export function ListRow({ leading, title, subtitle, trailing, meta }: ListRowProps) {
  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      {leading && <div className="mr-4 flex-shrink-0">{leading}</div>}
      <div className="flex-grow">
        <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-900">{title}</div>
            {meta && <div className="text-xs text-gray-500 ml-2">{meta}</div>}
        </div>
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      </div>
      {trailing && <div className="ml-4 flex-shrink-0">{trailing}</div>}
    </div>
  );
}
