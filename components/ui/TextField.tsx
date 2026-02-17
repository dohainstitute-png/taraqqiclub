'use client';

import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

// --- Style Objects --- //
const wrapperStyles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const inputBaseStyles = {
  width: '100%',
  height: '44px', // Consistent height with buttons
  padding: '0 var(--space-3)',
  borderRadius: 'var(--radius-input)',
  border: '1px solid var(--control-border)',
  backgroundColor: 'var(--card-white)',
  color: 'var(--ink)',
  fontFamily: 'var(--font-family-arabic)',
  fontSize: '15px',
  transition: 'border-color var(--motion-press), box-shadow var(--motion-press)',
};

const inputFocusStyles = {
  outline: '2px solid var(--brand-primary)',
  outlineOffset: '2px',
  borderColor: 'transparent', // Hide the default border on focus
};

const inputErrorStyles = {
  borderColor: 'var(--error-text)',
  outline: 'none',
};

const labelStyles = {
    marginBottom: 'var(--space-2)',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--slate)',
}

const helperTextStyles = {
    marginTop: 'var(--space-1)',
    fontSize: '13px',
    color: 'var(--slate)',
}

const errorTextStyles = {
    ...helperTextStyles,
    color: 'var(--error-text)',
}

// --- Type Definitions --- //
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

// --- TextField Component --- //
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, helperText, error, containerProps, style, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };
    
    const hasError = !!error;

    const combinedInputStyles = {
        ...inputBaseStyles,
        ...(hasError ? inputErrorStyles : {}),
        ...(isFocused && !hasError ? inputFocusStyles : {}),
        ...style,
    }

    return (
      <div style={wrapperStyles} {...containerProps}>
        {label && <label style={labelStyles}>{label}</label>}
        <input
          ref={ref}
          style={combinedInputStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {hasError ? (
            <span style={errorTextStyles}>{error}</span>
        ) : helperText ? (
            <span style={helperTextStyles}>{helperText}</span>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export { TextField };
