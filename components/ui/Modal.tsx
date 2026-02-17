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
