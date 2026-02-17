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

