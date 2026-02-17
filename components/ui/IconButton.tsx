'use client';

import { forwardRef } from 'react';
import type { ReactNode } from 'react';

const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',         // Touch target 48x48
  height: '48px',        // Touch target 48x48
  borderRadius: '50%',    // Circular shape
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: 0, // Reset padding
  transition: `background-color var(--motion-press)`,
};

const disabledStyles = {
  cursor: 'not-allowed',
  opacity: 0.5, 
};

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, disabled, style, ...props }, ref) => {
    
    // Accessibility check: Ensure aria-label is provided for icon buttons
    if (!props['aria-label']) {
      console.warn('IconButton requires an `aria-label` attribute for accessibility.');
    }

    const combinedStyles = {
      ...baseStyles,
      ...(disabled ? disabledStyles : {}),
      ...style,
    };

    return (
      <button
        ref={ref}
        style={combinedStyles}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };
