'use client';

import type { ReactNode } from "react";

interface StateTemplateProps {
  icon?: ReactNode;
  title: string;
  message: string;
  actions?: ReactNode;
}

export function StateTemplate({ icon, title, message, actions }: StateTemplateProps) {
  return (
    <div className="text-center p-8">
      {icon && <div className="mb-4 text-5xl">{icon}</div>}
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
      {actions && <div className="mt-6">{actions}</div>}
    </div>
  );
}
