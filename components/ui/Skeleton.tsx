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
