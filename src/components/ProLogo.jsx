import React from 'react';

/**
 * Official Pro17Analytics Logo Component
 * Uses the supplied official brand asset: /images/pro17-logo.png
 */
export default function ProLogo({ variant = 'light', size = 'default', className = '' }) {
  const isDark = variant === 'dark';

  const heights = {
    small: 32,
    default: 40,
    large: 54
  };

  const height = heights[size] || 40;

  if (isDark) {
    return (
      <div
        className={`pro-logo-wrap pro-logo-dark ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          padding: '6px 14px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
          lineHeight: 1
        }}
      >
        <img
          src="/images/pro17-logo.png"
          alt="Pro17Analytics Logo"
          style={{
            height: `${height - 8}px`,
            width: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`pro-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1
      }}
    >
      <img
        src="/images/pro17-logo.png"
        alt="Pro17Analytics Logo"
        style={{
          height: `${height}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}
