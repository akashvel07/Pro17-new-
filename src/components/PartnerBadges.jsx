import React from 'react';

/**
 * Partner and compliance certification marks accurately representing the marks in Pro17 profile:
 * - Microsoft Solutions Partner (Data & AI Azure)
 * - TimeXtender Partner
 * - ISO 27001 (Intercert)
 * - AICPA SOC
 * - HIPAA Compliant
 * - GDPR Compliant
 */
export default function PartnerBadges({ isDark = false }) {
  const badgeBg = isDark ? '#383235' : '#FFFFFF';
  const borderColor = isDark ? '#4A4346' : '#E7E5E3';
  const textColor = isDark ? '#FFFFFF' : '#2D282A';
  const subTextColor = isDark ? '#C7C1C4' : '#6B6B70';

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch'
        }}
      >
        {/* Microsoft Solutions Partner */}
        <div
          style={{
            backgroundColor: badgeBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          {/* Microsoft 4-color grid icon */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 9px)', gap: '3px', marginBottom: '0.6rem' }}>
            <div style={{ width: '9px', height: '9px', backgroundColor: '#F25022' }}></div>
            <div style={{ width: '9px', height: '9px', backgroundColor: '#7FBA00' }}></div>
            <div style={{ width: '9px', height: '9px', backgroundColor: '#00A4EF' }}></div>
            <div style={{ width: '9px', height: '9px', backgroundColor: '#FFB900' }}></div>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor, lineHeight: 1.2 }}>
            Microsoft
          </div>
          <div style={{ fontSize: '0.72rem', color: subTextColor, fontWeight: 500, marginTop: '2px' }}>
            Solutions Partner
          </div>
          <div style={{ fontSize: '0.68rem', color: '#00A4EF', fontWeight: 600, marginTop: '4px' }}>
            Data &amp; AI · Azure
          </div>
        </div>

        {/* TIMEXTENDER Partner */}
        <div
          style={{
            backgroundColor: badgeBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '1px', color: textColor, marginBottom: '4px' }}>
            TIMEXTENDER
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#981B25', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Certified Partner
          </div>
          <div style={{ fontSize: '0.68rem', color: subTextColor, marginTop: '2px' }}>
            Holistic Data Integration
          </div>
        </div>

        {/* ISO 27001 Certified */}
        <div
          style={{
            backgroundColor: badgeBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.5rem' }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor }}>
            ISO 27001
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor }}>
            Information Security
          </div>
          <div style={{ fontSize: '0.65rem', color: '#D97706', fontWeight: 600, marginTop: '2px' }}>
            INTERCERT Certified
          </div>
        </div>

        {/* AICPA SOC */}
        <div
          style={{
            backgroundColor: badgeBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#1E659E',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              fontWeight: 800,
              marginBottom: '0.4rem'
            }}
          >
            SOC
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor }}>
            AICPA SOC
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor }}>
            Service Organization Controls
          </div>
        </div>

        {/* HIPAA Compliant */}
        <div
          style={{
            backgroundColor: badgeBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.5rem' }}>
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor }}>
            HIPAA Compliant
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor }}>
            Health Data Protection
          </div>
        </div>

        {/* GDPR Compliant */}
        <div
          style={{
            backgroundColor: badgeBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.5rem' }}>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor }}>
            GDPR Compliant
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor }}>
            EU Privacy Standards
          </div>
        </div>
      </div>
    </div>
  );
}
