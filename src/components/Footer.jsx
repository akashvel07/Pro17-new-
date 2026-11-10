import React from 'react';
import { ArrowUpRight, Mail, Globe, MapPin } from 'lucide-react';
import ProLogo from './ProLogo';
import { BRAND_INFO, CAPABILITIES, PRODUCTS } from '../data/content';
import VectorWordmark from './VectorWordmark';
import Snowfall from './Snowfall';

export default function Footer({ onNavigate, onOpenContact }) {
  const currentYear = new Date().getFullYear();

  const handleLink = (routeId) => {
    onNavigate(routeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Snowfall Animation */}
      <Snowfall
        count={80}
        speedMin={0.3}
        speedMax={1.4}
        sizeMin={0.5}
        sizeMax={1.5}
        opacityMin={15}
        opacityMax={70}
        wind={0}
        windVariation={0.5}
        color="#FFFFFF"
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2, paddingTop: '5rem', paddingBottom: '3.5rem' }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem 2rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <ProLogo variant="dark" size="default" />
            </div>
            <p style={{ color: '#C2BCBE', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {BRAND_INFO.description}
            </p>
            <div
              style={{
                display: 'inline-block',
                borderLeft: '2px solid #981B25',
                paddingLeft: '0.75rem',
                fontSize: '0.825rem',
                color: '#DCD6D8',
                fontWeight: 600,
                fontStyle: 'italic'
              }}
            >
              {BRAND_INFO.supportingStatement}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleLink('home')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('about')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>
                  About Us &amp; Delivery
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('capabilities')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>
                  Capabilities &amp; Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('products')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>
                  Products &amp; Platforms
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('industries')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>
                  Industries Served
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>
                  Contact &amp; Demos
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4>Capabilities</h4>
            <ul className="footer-links">
              {CAPABILITIES.map((cap) => (
                <li key={cap.id}>
                  <button
                    onClick={() => handleLink('capabilities')}
                    style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem' }}
                  >
                    {cap.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Delivery */}
          <div>
            <h4>Products</h4>
            <ul className="footer-links" style={{ marginBottom: '1.75rem' }}>
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => handleLink('products')}
                    style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem' }}
                  >
                    {prod.name}
                  </button>
                </li>
              ))}
            </ul>

            <h4>Global Delivery</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DCD6D8', fontSize: '0.85rem' }}>
              <MapPin size={16} color="#981B25" />
              <span>{BRAND_INFO.globalLocations.join(' · ')}</span>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
              <a
                href={`mailto:${BRAND_INFO.contactEmail}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#FFFFFF', fontSize: '0.9rem' }}
              >
                <Mail size={16} color="#981B25" />
                <span>{BRAND_INFO.contactEmail}</span>
              </a>
              <a
                href={`https://${BRAND_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#FFFFFF', fontSize: '0.9rem' }}
              >
                <Globe size={16} color="#981B25" />
                <span>{BRAND_INFO.website}</span>
              </a>
            </div>

            <button
              onClick={onOpenContact}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem', width: '100%' }}
            >
              <span>Schedule a Discussion</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Global Delivery Strip */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1.5rem 0',
            marginBottom: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#C2BCBE'
          }}
        >
          <div>
            <strong style={{ color: '#FFFFFF' }}>Delivery Ecosystem:</strong> Seamless cross-border collaboration across USA, Canada, India, and Singapore.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>USA</span>
            <span>•</span>
            <span>CANADA</span>
            <span>•</span>
            <span>INDIA</span>
            <span>•</span>
            <span>SINGAPORE</span>
          </div>
        </div>

        {/* Monumental Interactive WebGL Vector Wordmark */}
        <div
          style={{
            margin: '2rem 0 3rem 0',
            width: '100%',
            height: 'clamp(180px, 24vw, 300px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <VectorWordmark
            text="PRO17 ANALYTICS"
            background="transparent"
            textColor="#FFFFFF"
            shade="#9E969A"
            accent="#981B25"
            reach={380}
            speed={50}
            damping={60}
            font={{
              fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 800,
              fontSize: '240px',
              letterSpacing: '-0.025em',
            }}
            handles={{
              size: 110,
              spread: 28,
              labels: true,
            }}
            style={{
              width: '100%',
              height: '100%',
              minHeight: 'unset',
            }}
          />
        </div>

        {/* Legal & Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#9C9498'
          }}
        >
          <div>
            © {currentYear} Pro17Analytics. All rights reserved.
          </div>
          <div style={{ maxWidth: '600px', fontSize: '0.75rem', lineHeight: 1.4, textAlign: 'right' }}>
            {BRAND_INFO.legalDisclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
}
