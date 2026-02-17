'use client';

import { forwardRef } from 'react';
import type { ReactNode } from 'react';

const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px', // Visual height
  minWidth: '44px', // Minimum touch target width
  borderRadius: 'var(--radius-chip)',
  padding: '0 var(--space-3)',
  fontFamily: 'var(--font-family-arabic)',
  fontSize: '13px', 
  fontWeight: 500,
  cursor: 'pointer',
  border: '1px solid var(--control-border)',
  backgroundColor: 'transparent',
  color: 'var(--ink)',
  transition: `background-color var(--motion-press), border-color var(--motion-press), color var(--motion-press)`,
};

const variantStyles = {
  default: {
    borderColor: 'var(--control-border)',
    backgroundColor: 'transparent',
  },
  selected: {
    borderColor: 'var(--brand-soft)', // To avoid transparent border on selection
    backgroundColor: 'var(--brand-soft)',
    color: 'var(--brand-primary)',
  },
  highlight: {
    backgroundColor: 'rgba(176, 89, 32, 0.12)', // --copper-ui 12%
    color: 'var(--copper-text)',
    borderColor: 'transparent',
  },
};

const disabledStyles = {
  borderColor: 'var(--divider-line)',
  backgroundColor: 'var(--skeleton)',
  color: 'var(--slate)',
  cursor: 'not-allowed',
};

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  highlight?: boolean;
  as?: 'div' | 'button';
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ children, selected = false, disabled = false, highlight = false, as: Component = 'div', style, ...props }, ref) => {

    const variant = highlight ? 'highlight' : selected ? 'selected' : 'default';

    const combinedStyles = {
      ...baseStyles,
      ...(variantStyles[variant]),
      ...(disabled ? disabledStyles : {}),
      ...style,
    };

    return (
      <Component
        ref={ref}
        style={combinedStyles}
        role="button" // For semantics, even if it's a div
        tabIndex={disabled ? -1 : 0}
        aria-pressed={selected}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Chip.displayName = 'Chip';

export { Chip };
