import React from 'react';

/**
 * Partner and compliance certification marks:
 * Displayed in a strict single-line horizontal grid on desktop (6 columns).
 * 1. Microsoft Solutions Partner (Data & AI · Azure)
 * 2. TimeXtender Certified Partner (Official Orange Chevron 'X' Mark)
 * 3. ISO/IEC 27001 Certified (Authentic Gold Security Shield & Seal)
 * 4. AICPA SOC (Official Deep Blue AICPA SOC 2 Shield Emblem)
 * 5. HIPAA Compliant (Emerald Green Health Privacy Shield & Caduceus Crest)
 * 6. GDPR Compliant (EU Royal Blue Shield with 12 Gold Stars)
 */
export default function PartnerBadges({ isDark = false }) {
  const badgeBg = isDark ? '#2D282A' : '#FFFFFF';
  const borderColor = isDark ? '#433C3F' : '#E5E1E2';
  const textColor = isDark ? '#FFFFFF' : '#2D282A';
  const subTextColor = isDark ? '#B3ACB0' : '#6E686A';

  const cardStyle = {
    backgroundColor: badgeBg,
    border: `1px solid ${borderColor}`,
    borderRadius: '12px',
    padding: '1.2rem 0.6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxShadow: isDark
      ? '0 4px 20px rgba(0,0,0,0.25)'
      : '0 4px 16px rgba(45, 40, 42, 0.04)',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '152px',
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="partner-badges-grid">
        {/* ============================================================
            1. Microsoft Solutions Partner
           ============================================================ */}
        <div
          style={cardStyle}
          className="partner-badge-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 8px 24px rgba(0,0,0,0.4)'
              : '0 8px 24px rgba(45, 40, 42, 0.08)';
            e.currentTarget.style.borderColor = '#00A4EF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 4px 20px rgba(0,0,0,0.25)'
              : '0 4px 16px rgba(45, 40, 42, 0.04)';
            e.currentTarget.style.borderColor = borderColor;
          }}
        >
          {/* Official Microsoft 4-Color Mark */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 10px)', gap: '3px', marginBottom: '0.6rem' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: '#F25022', borderRadius: '1px' }} />
            <div style={{ width: '10px', height: '10px', backgroundColor: '#7FBA00', borderRadius: '1px' }} />
            <div style={{ width: '10px', height: '10px', backgroundColor: '#00A4EF', borderRadius: '1px' }} />
            <div style={{ width: '10px', height: '10px', backgroundColor: '#FFB900', borderRadius: '1px' }} />
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor, lineHeight: 1.2 }}>
            Microsoft
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor, fontWeight: 500, marginTop: '2px' }}>
            Solutions Partner
          </div>
          <div
            style={{
              fontSize: '0.62rem',
              color: '#0078D4',
              backgroundColor: isDark ? 'rgba(0, 120, 212, 0.15)' : 'rgba(0, 164, 239, 0.1)',
              padding: '2px 6px',
              borderRadius: '9999px',
              fontWeight: 600,
              marginTop: '6px',
              whiteSpace: 'nowrap',
            }}
          >
            Data &amp; AI · Azure
          </div>
        </div>

        {/* ============================================================
            2. TIMEXTENDER Certified Partner
           ============================================================ */}
        <div
          style={cardStyle}
          className="partner-badge-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 8px 24px rgba(0,0,0,0.4)'
              : '0 8px 24px rgba(45, 40, 42, 0.08)';
            e.currentTarget.style.borderColor = '#FF5500';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 4px 20px rgba(0,0,0,0.25)'
              : '0 4px 16px rgba(45, 40, 42, 0.04)';
            e.currentTarget.style.borderColor = borderColor;
          }}
        >
          {/* Official TimeXtender Logomark */}
          <div style={{ marginBottom: '0.55rem' }}>
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8L13 15L9 19L2 12L6 8Z" fill="#FF5500" />
              <path d="M26 8L19 15L23 19L30 12L26 8Z" fill="#FF5500" />
              <path d="M6 24L13 17L9 13L2 20L6 24Z" fill="#F04E23" />
              <path d="M26 24L19 17L23 13L30 20L26 24Z" fill="#F04E23" />
              <circle cx="16" cy="16" r="2.5" fill="#FF7733" />
            </svg>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.04em', color: textColor, lineHeight: 1.2 }}>
            TIMEXTENDER
          </div>
          <div
            style={{
              fontSize: '0.64rem',
              fontWeight: 700,
              color: '#981B25',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginTop: '3px',
              whiteSpace: 'nowrap',
            }}
          >
            CERTIFIED PARTNER
          </div>
          <div style={{ fontSize: '0.66rem', color: subTextColor, marginTop: '2px', whiteSpace: 'nowrap' }}>
            Data Integration
          </div>
        </div>

        {/* ============================================================
            3. ISO 27001 Certified (INTERCERT)
           ============================================================ */}
        <div
          style={cardStyle}
          className="partner-badge-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 8px 24px rgba(0,0,0,0.4)'
              : '0 8px 24px rgba(45, 40, 42, 0.08)';
            e.currentTarget.style.borderColor = '#D97706';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 4px 20px rgba(0,0,0,0.25)'
              : '0 4px 16px rgba(45, 40, 42, 0.04)';
            e.currentTarget.style.borderColor = borderColor;
          }}
        >
          {/* Authentic ISO 27001 Security Emblem */}
          <div style={{ marginBottom: '0.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="isoShieldGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F59E0B" />
                  <stop offset="1" stopColor="#B45309" />
                </linearGradient>
              </defs>
              <path
                d="M18 2L31 7V16.5C31 24.8 25.4 32.4 18 34.5C10.6 32.4 5 24.8 5 16.5V7L18 2Z"
                fill="url(#isoShieldGrad)"
                stroke="#D97706"
                strokeWidth="1"
              />
              <path
                d="M18 5L28 8.8V16.2C28 22.8 23.7 28.8 18 30.7C12.3 28.8 8 22.8 8 16.2V8.8L18 5Z"
                fill={isDark ? '#2D282A' : '#FFFFFF'}
              />
              <path
                d="M13 17.5L16.5 21L23.5 13.5"
                stroke="#D97706"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="18" cy="9" r="1.5" fill="#D97706" />
            </svg>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor, lineHeight: 1.2 }}>
            ISO 27001
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor, marginTop: '2px', whiteSpace: 'nowrap' }}>
            Information Security
          </div>
          <div
            style={{
              fontSize: '0.62rem',
              color: '#B45309',
              fontWeight: 700,
              letterSpacing: '0.03em',
              marginTop: '4px',
              backgroundColor: isDark ? 'rgba(217, 119, 6, 0.15)' : 'rgba(245, 158, 11, 0.12)',
              padding: '2px 6px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            INTERCERT Certified
          </div>
        </div>

        {/* ============================================================
            4. AICPA SOC (Service Organization Controls)
           ============================================================ */}
        <div
          style={cardStyle}
          className="partner-badge-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 8px 24px rgba(0,0,0,0.4)'
              : '0 8px 24px rgba(45, 40, 42, 0.08)';
            e.currentTarget.style.borderColor = '#0F206C';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 4px 20px rgba(0,0,0,0.25)'
              : '0 4px 16px rgba(45, 40, 42, 0.04)';
            e.currentTarget.style.borderColor = borderColor;
          }}
        >
          {/* Official AICPA SOC 2 Circular Seal */}
          <div style={{ marginBottom: '0.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="socNavyGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0F206C" />
                  <stop offset="1" stopColor="#1E3A8A" />
                </linearGradient>
              </defs>
              <circle cx="18" cy="18" r="17" fill="url(#socNavyGrad)" />
              <circle cx="18" cy="18" r="15" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 1.5" />
              <path
                d="M10 11C12 9.5 15 9 18 9C21 9 24 9.5 26 11V13C24 11.5 21 11 18 11C15 11 12 11.5 10 13V11Z"
                fill="#60A5FA"
              />
              <text
                x="18"
                y="22"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontWeight="900"
                fontSize="9.5"
                letterSpacing="0.06em"
              >
                SOC
              </text>
              <text
                x="18"
                y="27"
                textAnchor="middle"
                fill="#93C5FD"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontWeight="700"
                fontSize="4"
                letterSpacing="0.08em"
              >
                FOR SERVICE ORGS
              </text>
            </svg>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor, lineHeight: 1.2 }}>
            AICPA SOC
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor, marginTop: '2px', whiteSpace: 'nowrap' }}>
            Service Controls
          </div>
          <div
            style={{
              fontSize: '0.62rem',
              color: '#0F206C',
              backgroundColor: isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(15, 32, 108, 0.08)',
              padding: '2px 6px',
              borderRadius: '4px',
              fontWeight: 700,
              marginTop: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            SOC 2 Type II
          </div>
        </div>

        {/* ============================================================
            5. HIPAA Compliant (Health Data Protection)
           ============================================================ */}
        <div
          style={cardStyle}
          className="partner-badge-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 8px 24px rgba(0,0,0,0.4)'
              : '0 8px 24px rgba(45, 40, 42, 0.08)';
            e.currentTarget.style.borderColor = '#059669';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 4px 20px rgba(0,0,0,0.25)'
              : '0 4px 16px rgba(45, 40, 42, 0.04)';
            e.currentTarget.style.borderColor = borderColor;
          }}
        >
          {/* Authentic HIPAA Medical Security Shield */}
          <div style={{ marginBottom: '0.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hipaaGreenGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981" />
                  <stop offset="1" stopColor="#047857" />
                </linearGradient>
              </defs>
              <path
                d="M18 2L31 7V16.5C31 24.8 25.4 32.4 18 34.5C10.6 32.4 5 24.8 5 16.5V7L18 2Z"
                fill="url(#hipaaGreenGrad)"
              />
              <rect x="15" y="11" width="6" height="15" rx="1.5" fill="#FFFFFF" />
              <rect x="10.5" y="15.5" width="15" height="6" rx="1.5" fill="#FFFFFF" />
              <circle cx="18" cy="18.5" r="1.8" fill="#047857" />
            </svg>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor, lineHeight: 1.2 }}>
            HIPAA Compliant
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor, marginTop: '2px', whiteSpace: 'nowrap' }}>
            Health Data Protection
          </div>
          <div
            style={{
              fontSize: '0.62rem',
              color: '#059669',
              backgroundColor: isDark ? 'rgba(16, 185, 129, 0.18)' : 'rgba(5, 150, 105, 0.08)',
              padding: '2px 6px',
              borderRadius: '4px',
              fontWeight: 700,
              marginTop: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            Privacy Rule
          </div>
        </div>

        {/* ============================================================
            6. GDPR Compliant (EU Privacy Standards)
           ============================================================ */}
        <div
          style={cardStyle}
          className="partner-badge-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 8px 24px rgba(0,0,0,0.4)'
              : '0 8px 24px rgba(45, 40, 42, 0.08)';
            e.currentTarget.style.borderColor = '#2563EB';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 4px 20px rgba(0,0,0,0.25)'
              : '0 4px 16px rgba(45, 40, 42, 0.04)';
            e.currentTarget.style.borderColor = borderColor;
          }}
        >
          {/* Authentic GDPR European Union Shield with 12 Gold Stars */}
          <div style={{ marginBottom: '0.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gdprBlueGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#1E3A8A" />
                </linearGradient>
              </defs>
              <path
                d="M18 2L31 7V16.5C31 24.8 25.4 32.4 18 34.5C10.6 32.4 5 24.8 5 16.5V7L18 2Z"
                fill="url(#gdprBlueGrad)"
              />
              <rect x="14" y="17" width="8" height="7" rx="1.5" fill="#FFFFFF" />
              <path
                d="M15.5 17V14.5C15.5 13.1 16.6 12 18 12C19.4 12 20.5 13.1 20.5 14.5V17"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const r = 11.5;
                const cx = 18 + r * Math.sin(angle);
                const cy = 17.5 - r * Math.cos(angle);
                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="0.9"
                    fill="#FFCC00"
                  />
                );
              })}
            </svg>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textColor, lineHeight: 1.2 }}>
            GDPR Compliant
          </div>
          <div style={{ fontSize: '0.7rem', color: subTextColor, marginTop: '2px', whiteSpace: 'nowrap' }}>
            EU Privacy Standards
          </div>
          <div
            style={{
              fontSize: '0.62rem',
              color: '#2563EB',
              backgroundColor: isDark ? 'rgba(37, 99, 235, 0.18)' : 'rgba(37, 99, 235, 0.08)',
              padding: '2px 6px',
              borderRadius: '4px',
              fontWeight: 700,
              marginTop: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            Regulation (EU)
          </div>
        </div>
      </div>
    </div>
  );
}
