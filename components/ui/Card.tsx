'use client';

import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

// --- Base Card Container --- //
const cardBaseStyles = {
  borderRadius: 'var(--radius-card)',
  backgroundColor: 'var(--card-white)',
  border: '1px solid var(--control-border)', // Added for non-text contrast
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

// --- Card Slots --- //
const headerStyles = { padding: 'var(--space-4)', borderBottom: '1px solid var(--divider-line)' };
const bodyStyles = { padding: 'var(--space-4)', flex: '1' };
const metaStyles = { padding: '0 var(--space-4) var(--space-2)', color: 'var(--slate)' };
const actionsStyles = { padding: 'var(--space-2) var(--space-4)', display: 'flex', gap: 'var(--space-2)' };

// --- Type Definitions --- //
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardSlotProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// --- Card Component --- //
const Card = forwardRef<HTMLDivElement, CardProps>(({ children, style, ...props }, ref) => {
  const combinedStyles = { ...cardBaseStyles, ...style };
  return (
    <div ref={ref} style={combinedStyles} {...props}>
      {children}
    </div>
  );
});
Card.displayName = 'Card';

// --- Slot Components --- //
const CardHeader = ({ children, style, ...props }: CardSlotProps) => (
  <div style={{ ...headerStyles, ...style }} {...props}>
    {children}
  </div>
);

const CardBody = ({ children, style, ...props }: CardSlotProps) => (
  <div style={{ ...bodyStyles, ...style }} {...props}>
    {children}
  </div>
);

const CardMeta = ({ children, style, ...props }: CardSlotProps) => (
  <div style={{ ...metaStyles, ...style }} {...props}>
    {children}
  </div>
);

const CardActions = ({ children, style, ...props }: CardSlotProps) => (
  <div style={{ ...actionsStyles, ...style }} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardBody, CardMeta, CardActions };
