
# Change Audit 002

This audit document tracks the changes made to implement the visual identity and the core UI component library, based on the project blueprint.

## Step 1: Visual Identity Tokens

### `styles/tokens.css`

A file was created to define all CSS variables for the project's visual identity.

```css
:root {
  /* (A) Tokens الإلزامية — تُعرَّف الآن وتُستخدم لاحقًا */

  /* Brand */
  --brand-primary: #0D47A1;
  --brand-deep: #06152B;
  --brand-soft: #D6E4FF;
  --warm-paper: #F6F3EE;
  --card-white: #FFFFFF;

  /* Signature (ممنوع كنص صغير) */
  --copper-ui: #B05920;
  --mint-ui: #00B3A4;

  /* Text-Safe Accents */
  --copper-text: #A65520;
  --mint-text: #00796B;

  /* Neutrals */
  --ink: #0B1220;
  --slate: #22324A;
  --skeleton: #E0D7CC;

  /* Lines */
  --divider-line: #E0DBD4;
  --control-border: #8A7C6E;

  /* Dark */
  --dark-bg: #060B14;
  --dark-surface: #111623;
  --dark-text: #F2F5FA;
  --dark-subtext: #B9C2D0;
  --blue-night: #4A8CFF; /* للروابط/النشط كنص على الداكن فقط */

  /* On-Color */
  --on-brand-primary: var(--card-white);
  --on-brand-deep: var(--card-white);
  --on-brand-soft: var(--ink);
  --on-warm-paper: var(--ink);
  --on-card-white: var(--ink);
  --on-dark-bg: var(--dark-text);
  --on-dark-surface: var(--dark-text);
  
  /* Semantic states */
  --success-text: var(--mint-text);
  --warning-text: var(--copper-text);
  --error-text: #B3261E;
  --info-text: var(--brand-primary);

  /* (B) قواعد الهوية الأساسية */
  
  /* Typography */
  /* IBM Plex Sans Arabic Fallback -> Noto Sans Arabic UI */
  --font-family-arabic: 'IBM Plex Sans Arabic', 'Noto Sans Arabic UI', sans-serif;

  /* Grid/Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;
  --space-9: 64px;

  /* Radii */
  --radius-card: 18px;
  --radius-input: 14px;
  --radius-button: 14px;
  --radius-chip: 999px;

  /* Motion */
  --motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --motion-press: 120ms;
  --motion-card: 180ms;
  --motion-panel: 220ms;
  --motion-reduced-fade: 120ms;

  /* Skeleton */
  --skeleton-shimmer-duration: 1.2s;
}
```

### `styles/globals.css`

The global stylesheet was updated to import and use the new visual tokens.

```css
@import './tokens.css';
:root {
  --background: var(--warm-paper);
  --foreground: var(--ink);
}
@media (prefers-color-scheme: dark) {
  :root {
    --background: var(--dark-bg);
    --foreground: var(--dark-text);
  }
}
body {
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-family-arabic);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## Step 2: Core Component Library

The following UI components were created in the `components/ui/` directory.

### `components/ui/Button.tsx`

```tsx
'use client';

import { forwardRef } from 'react';
import type { ReactNode } from 'react';

// Define styles in a separate object for clarity
const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--radius-button)',
  padding: '0 var(--space-4)',
  minHeight: '44px', // Touch target
  fontFamily: 'var(--font-family-arabic)',
  fontWeight: 600,
  cursor: 'pointer',
  border: '1px solid transparent',
  transition: `background-color var(--motion-press), border-color var(--motion-press)`,
};

const variantStyles = {
  primary: {
    backgroundColor: 'var(--brand-primary)',
    color: 'var(--on-brand-primary)',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: 'var(--ink)',
    borderColor: 'var(--control-border)',
  },
  quiet: {
    backgroundColor: 'transparent',
    color: 'var(--slate)',
    textDecoration: 'none',
  },
};

const disabledStyles = {
  backgroundColor: 'var(--skeleton)',
  color: 'var(--slate)',
  cursor: 'not-allowed',
  borderColor: 'transparent',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', disabled, style, ...props }, ref) => {

    const combinedStyles = {
      ...baseStyles,
      ...(variantStyles[variant] || variantStyles.primary),
      ...(disabled ? disabledStyles : {}),
      ...style, // Allow overriding styles
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

Button.displayName = 'Button';

export { Button };
```

### `components/ui/IconButton.tsx`

```tsx
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
```

### `components/ui/Chip.tsx`

```tsx
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
```

### `components/ui/Card.tsx`

```tsx
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
```

### `components/ui/Tabs.tsx`

```tsx
'use client';

import { useState, Children, cloneElement, isValidElement } from 'react';
import type { ReactNode, FunctionComponentElement, HTMLAttributes } from 'react';

// --- Style Objects --- //
const tabsListStyles = {
  display: 'flex',
  borderBottom: '1px solid var(--divider-line)',
  width: '100%',
};

const tabBaseStyles = {
  padding: 'var(--space-3) var(--space-4)',
  cursor: 'pointer',
  borderBottom: '2px solid transparent',
  marginBottom: '-1px', // To overlap the container's border
  color: 'var(--slate)',
  fontWeight: 500,
  fontSize: '15px',
  background: 'none',
  border: 'none',
  fontFamily: 'inherit'
};

const tabActiveStyles = {
  color: 'var(--brand-primary)',
  borderBottomColor: 'var(--brand-primary)',
  fontWeight: 600,
};

const tabPanelStyles = {
  padding: 'var(--space-4)',
};

interface SimpleTabProps {
    title: ReactNode;
    children: ReactNode;
}

const SimpleTab = ({title, children}: SimpleTabProps) => {
    // This component is a data carrier, it doesn't render anything itself.
    return <>{children}</>;
}

interface SimpleTabsProps extends HTMLAttributes<HTMLDivElement> {
    children: FunctionComponentElement<SimpleTabProps> | FunctionComponentElement<SimpleTabProps>[];
    defaultIndex?: number;
}

const RefinedTabs = ({ children, defaultIndex = 0, ...props }: SimpleTabsProps) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const tabs = Children.toArray(children).filter(isValidElement);

    return (
        <div {...props}>
            <div style={tabsListStyles} role="tablist">
                {tabs.map((tab, index) => (
                    <button 
                        key={index}
                        style={{
                            ...tabBaseStyles,
                            ...(index === activeIndex ? tabActiveStyles : {}),
                        }}
                        role="tab"
                        aria-selected={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.props.title}
                    </button>
                ))}
            </div>
            <div style={tabPanelStyles} role="tabpanel">
                {tabs[activeIndex]}
            </div>
        </div>
    )
}

RefinedTabs.displayName = "Tabs";
SimpleTab.displayName = "Tab";

export { RefinedTabs as Tabs, SimpleTab as Tab };
```

### `components/ui/Badge.tsx`

```tsx
'use client';

import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-1)',
  padding: 'var(--space-1) var(--space-2)',
  borderRadius: 'var(--radius-chip)', // Using chip radius for a pill shape
  fontFamily: 'var(--font-family-arabic)',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '1',
};

const variantStyles = {
  default: {
    backgroundColor: 'var(--brand-soft)',
    color: 'var(--ink)',
  },
  verified: {
    backgroundColor: 'var(--mint-text)',
    color: 'var(--card-white)', // High contrast
  },
  availability: {
    backgroundColor: 'var(--slate)',
    color: 'var(--card-white)',
  },
  ai: {
    backgroundColor: 'var(--brand-soft)',
    color: 'var(--ink)',
  },
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'verified' | 'availability' | 'ai';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'default', style, ...props }, ref) => {

    const combinedStyles = {
      ...baseStyles,
      ...(variantStyles[variant] || variantStyles.default),
      ...style,
    };

    return (
      <span ref={ref} style={combinedStyles} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
```

### `components/ui/Modal.tsx`

```tsx
'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

// --- Style Objects --- //
const overlayStyles: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalContainerStyles: React.CSSProperties = {
  backgroundColor: 'var(--card-white)',
  borderRadius: 'var(--radius-card)',
  padding: 'var(--space-5)',
  width: '90%',
  maxWidth: '500px',
  position: 'relative',
};

const closeButtonStyles: React.CSSProperties = {
    position: 'absolute',
    top: 'var(--space-3)',
    right: 'var(--space-3)',
    // Using the IconButton styles would be ideal here, but for simplicity:
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '24px',
    color: 'var(--slate)',
}

// --- Type Definitions --- //
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

// --- Modal Component --- //
const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen]);

  if (typeof document === 'undefined' || !isOpen) {
    return null;
  }

  return createPortal(
    <div style={overlayStyles} onClick={onClose}>
      <div
        ref={modalRef}
        style={modalContainerStyles}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button style={closeButtonStyles} onClick={onClose} aria-label="Close modal">&times;</button>
        {title && <h2 style={{marginBottom: 'var(--space-4)'}}>{title}</h2>}
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.displayName = 'Modal';

export { Modal };
```

### `components/ui/BottomSheet.tsx`

```tsx
'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

// --- Style Objects --- //
const overlayStyles: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'flex-end', // Align to the bottom
  justifyContent: 'center',
};

const sheetContainerStyles: React.CSSProperties = {
  backgroundColor: 'var(--card-white)',
  borderTopLeftRadius: 'var(--radius-card)',
  borderTopRightRadius: 'var(--radius-card)',
  padding: 'var(--space-4)',
  width: '100%',
  maxWidth: '640px', // Max width for larger screens
  boxShadow: '0 -2px 16px rgba(0,0,0,0.1)',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  transform: 'translateY(100%)',
  transition: 'transform 220ms var(--motion-easing)',
};

const sheetOpenStyles: React.CSSProperties = {
    transform: 'translateY(0)',
}

const handleBarStyles: React.CSSProperties = {
    width: '40px',
    height: '4px',
    backgroundColor: 'var(--divider-line)',
    borderRadius: '2px',
    margin: '0 auto var(--space-3)',
}

// --- Type Definitions --- //
export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

// --- BottomSheet Component --- //
const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen]);

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div style={{...overlayStyles, pointerEvents: isOpen ? 'auto' : 'none'}} onClick={onClose}>
      <div
        ref={sheetRef}
        style={{
            ...sheetContainerStyles,
            ...(isOpen ? sheetOpenStyles : {}),
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={handleBarStyles} />
        {children}
      </div>
    </div>,
    document.body
  );
};

BottomSheet.displayName = 'BottomSheet';

export { BottomSheet };
```

### `components/ui/ListRow.tsx`

```tsx
'use client';

import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

// --- Style Objects --- //
const rowStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: 'var(--space-3) var(--space-4)',
    width: '100%',
    borderBottom: '1px solid var(--divider-line)',
    gap: 'var(--space-3)',
    textAlign: 'right', // RTL default
};

const contentStyles: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-1)',
}

const titleStyles: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 600,
    color: 'var(--ink)',
}

const subtitleStyles: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--slate)',
}

const metaStyles: React.CSSProperties = {
    fontSize: '13px',
    color: 'var(--slate)',
    textAlign: 'left', // Opposite to the main content flow
}

// --- Type Definitions --- //
export interface ListRowProps extends HTMLAttributes<HTMLDivElement> {
  leading?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  trailing?: ReactNode;
}

// --- ListRow Component --- //
const ListRow = forwardRef<HTMLDivElement, ListRowProps>(
  ({ leading, title, subtitle, meta, trailing, ...props }, ref) => {

    return (
      <div ref={ref} style={rowStyles} {...props}>
        {leading && <div>{leading}</div>}

        <div style={contentStyles}>
            <div style={titleStyles}>{title}</div>
            {subtitle && <div style={subtitleStyles}>{subtitle}</div>}
        </div>

        {meta && <div style={metaStyles}>{meta}</div>}
        
        {trailing && <div>{trailing}</div>}
      </div>
    );
  }
);

ListRow.displayName = 'ListRow';

export { ListRow };
```

### `components/ui/Tooltip.tsx`

```tsx
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
```

## Step 3: Uniform System States

### `components/ui/Skeleton.tsx`

```tsx
'use client';

import type { HTMLAttributes } from 'react';

// --- Style Objects --- //
const skeletonBaseStyles: React.CSSProperties = {
  backgroundColor: 'var(--skeleton)',
  borderRadius: '4px',
  position: 'relative',
  overflow: 'hidden',
};

const shimmerStyles: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    transform: 'translateX(-100%)',
    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
    animation: `shimmer var(--skeleton-shimmer-duration) infinite`,
};

const keyframes = `
  @keyframes shimmer {
    100% { transform: translateX(100%); }
  }
`;

// --- Type Definitions --- //
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  // No specific props needed, it's a styled div
}

// --- Skeleton Component --- //
const Skeleton = ({ style, ...props }: SkeletonProps) => {
  return (
    <>
      <style>{keyframes}</style>
      <div style={{ ...skeletonBaseStyles, ...style }} {...props}>
          <div style={shimmerStyles}></div>
      </div>
    </>
  );
};

Skeleton.displayName = 'Skeleton';

export { Skeleton };
```

### `components/ui/StateTemplate.tsx`

```tsx
'use client';

import type { ReactNode } from 'react';
import { Card, CardBody } from './Card'; // Assuming Card is in the same directory

// --- Style Objects --- //
const wrapperStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--space-6) var(--space-4)',
    textAlign: 'center',
    height: '100%',
};

const iconWrapperStyles: React.CSSProperties = {
    marginBottom: 'var(--space-4)',
    color: 'var(--slate)', // Default color for icons
    width: '48px', // Fixed size for consistency
    height: '48px',
}

const titleStyles: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: 'var(--ink)',
    marginBottom: 'var(--space-2)',
};

const messageStyles: React.CSSProperties = {
    fontSize: '15px',
    color: 'var(--slate)',
    maxWidth: '320px',
    marginBottom: 'var(--space-4)',
};

const actionsStyles: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--space-3)',
}

// --- Type Definitions --- //
export interface StateTemplateProps {
  icon?: ReactNode;
  title: ReactNode;
  message: ReactNode;
  actions?: ReactNode;
}

// --- StateTemplate Component --- //
const StateTemplate = ({ icon, title, message, actions }: StateTemplateProps) => {
  return (
    <Card>
        <CardBody>
            <div style={wrapperStyles}>
                {icon && <div style={iconWrapperStyles}>{icon}</div>}
                <h3 style={titleStyles}>{title}</h3>
                <p style={messageStyles}>{message}</p>
                {actions && <div style={actionsStyles}>{actions}</div>}
            </div>
        </CardBody>
    </Card>
  );
};

StateTemplate.displayName = 'StateTemplate';

export { StateTemplate };
```
