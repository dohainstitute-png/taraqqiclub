'use client';

import { useState, useRef } from 'react';
import type { ReactNode } from 'react';

// --- Style Objects --- //
const wrapperStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
};

const tooltipStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: 'calc(100% + 8px)', // Position above the element
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'var(--ink)',
    color: 'var(--dark-text)',
    padding: 'var(--space-2) var(--space-3)',
    borderRadius: 'var(--radius-input)',
    fontSize: '13px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    zIndex: 1010, // Above modal overlay
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 150ms var(--motion-easing), visibility 150ms var(--motion-easing)',
};

const tooltipVisibleStyles: React.CSSProperties = {
    opacity: 1,
    visibility: 'visible',
};

// --- Type Definitions --- //
export interface TooltipProps {
  children: ReactNode;
  text: string;
}

// --- Tooltip Component --- //
const Tooltip = ({ children, text }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Small delay to prevent accidental triggers
  };

  const hideTooltip = () => {
    clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  return (
    <div 
        style={wrapperStyles} 
        onMouseEnter={showTooltip} 
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
    >
      {children}
      <div style={{
          ...tooltipStyles,
          ...(isVisible && tooltipVisibleStyles),
      }}>
        {text}
      </div>
    </div>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
