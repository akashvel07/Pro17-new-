import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import ProLogo from './ProLogo';

export default function Header({ currentRoute, onNavigate, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="site-container header-inner">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', padding: 0 }}
            aria-label="Pro17Analytics Home"
          >
            <ProLogo size="default" />
          </button>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className={`nav-link ${currentRoute === item.id ? 'active' : ''}`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={onOpenContact}
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onOpenContact}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.825rem', display: 'none' }}
              id="mobile-header-cta"
            >
              Talk
            </button>
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Backdrop */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <ProLogo size="small" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
              style={{ color: '#2D282A', padding: '0.4rem' }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="label-eyebrow" style={{ fontSize: '0.75rem' }}>Navigation</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLinkClick(item.id)}
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: currentRoute === item.id ? 700 : 500,
                    color: currentRoute === item.id ? '#981B25' : '#2D282A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.5rem 0',
                    textAlign: 'left'
                  }}
                >
                  <span>{item.label}</span>
                  {currentRoute === item.id && (
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#981B25' }}></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ padding: '1rem', backgroundColor: '#F6F4F2', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.85rem' }}>
            <div style={{ fontWeight: 600, color: '#2D282A', marginBottom: '0.2rem' }}>Direct Inquiries</div>
            <a href="mailto:sales@pro17analytics.com" style={{ color: '#981B25' }}>sales@pro17analytics.com</a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem' }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </aside>
    </>
  );
}
