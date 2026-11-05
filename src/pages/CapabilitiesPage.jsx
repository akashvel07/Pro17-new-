import React, { useState } from 'react';
import { 
  Database, 
  Network, 
  Cloud, 
  Radio, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Cpu
} from 'lucide-react';
import { CAPABILITIES, BRAND_INFO } from '../data/content';
import SpiderButton from '../components/SpiderButton';

export default function CapabilitiesPage({ onNavigate, onOpenContact }) {
  const [selectedCap, setSelectedCap] = useState(0);

  const icons = [
    <Database size={24} color="#981B25" />,
    <Network size={24} color="#981B25" />,
    <Cloud size={24} color="#981B25" />,
    <Radio size={24} color="#981B25" />,
    <Layers size={24} color="#981B25" />
  ];

  return (
    <main>
      {/* Hero Header */}
      <section className="section-spacing bg-white" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: '3rem' }}>
        <div className="site-container">
          <div style={{ maxWidth: '800px' }}>
            <span className="label-eyebrow">Enterprise Capabilities</span>
            <h1 className="display-title" style={{ marginTop: '0.75rem', marginBottom: '1.25rem', color: '#2D282A' }}>
              Engineered for <span className="text-red">Real Outcomes.</span>
            </h1>
            <p className="body-large">
              We specialize across five core domains to turn fragmented data, disconnected systems, and legacy infrastructure into agile, outcome-focused operations.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Capability Detail Switcher */}
      <section className="section-spacing bg-warm-gray" style={{ borderTop: '1px solid #E7E5E3', borderBottom: '1px solid #E7E5E3' }}>
        <div className="site-container">
          {/* Capability Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2.5rem',
              backgroundColor: '#FFFFFF',
              padding: '0.75rem',
              borderRadius: '12px',
              border: '1px solid #E7E5E3'
            }}
          >
            {CAPABILITIES.map((cap, idx) => (
              <button
                key={cap.id}
                onClick={() => setSelectedCap(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  backgroundColor: selectedCap === idx ? '#2D282A' : 'transparent',
                  color: selectedCap === idx ? '#FFFFFF' : '#2D282A',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {React.cloneElement(icons[idx], {
                    size: 18,
                    color: selectedCap === idx ? '#FFFFFF' : '#981B25'
                  })}
                </div>
                <span>{cap.title}</span>
              </button>
            ))}
          </div>

          {/* Active Capability Deep Dive Block */}
          {(() => {
            const current = CAPABILITIES[selectedCap];
            return (
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E7E5E3',
                  padding: 'clamp(2rem, 4vw, 3.5rem)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
                  {/* Left Column: Positioning & Services */}
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span className="pill-badge pill-badge-red">{current.positioning}</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.85rem, 3vw, 2.5rem)', fontWeight: 800, color: '#2D282A', marginBottom: '1rem' }}>
                      {current.title}
                    </h2>
                    <p className="body-large" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                      {current.summary}
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B6B70', marginBottom: '1rem', fontWeight: 700 }}>
                        Services &amp; Scope of Offering
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {current.services.map((svc) => (
                          <div
                            key={svc}
                            style={{
                              backgroundColor: '#F6F4F2',
                              border: '1px solid #E7E5E3',
                              padding: '0.6rem 1rem',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: '#2D282A',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <CheckCircle size={15} color="#981B25" />
                            <span>{svc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <SpiderButton
                      onClick={onOpenContact}
                      size={46}
                      buttonStyle={{ padding: '0 1.75rem', fontSize: '0.925rem' }}
                    >
                      <span>Discuss Your {current.title} Project</span>
                      <ArrowRight size={16} />
                    </SpiderButton>
                  </div>

                  {/* Right Column: Challenge, Value, Approach */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* The Business Challenge */}
                    <div style={{ backgroundColor: '#FDF7F7', border: '1px solid #FCDADF', borderRadius: '12px', padding: '1.5rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#981B25', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                        The Business Challenge
                      </div>
                      <p style={{ fontSize: '0.95rem', color: '#3E1015', lineHeight: 1.5 }}>
                        {current.challenge}
                      </p>
                    </div>

                    {/* Potential Business Value */}
                    <div style={{ backgroundColor: '#F8F6F7', border: '1px solid #E6E1E3', borderRadius: '12px', padding: '1.5rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2D282A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                        Potential Business Value
                      </div>
                      <p style={{ fontSize: '0.95rem', color: '#3A3437', lineHeight: 1.5 }}>
                        {current.businessValue}
                      </p>
                    </div>

                    {/* Collaborative Model */}
                    <div style={{ backgroundColor: '#F6F4F2', borderRadius: '12px', padding: '1.5rem', border: '1px solid #E7E5E3' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                        Delivery Engagement
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#242326' }}>
                        Delivered through our four-step <strong>Understand → Build → Operate → Scale</strong> model, ensuring continuous stakeholder alignment from day one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Complete Capabilities Overview Cards */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">Service Matrix</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#2D282A' }}>
              All 5 Core Competencies
            </h2>
            <p className="body-large">
              Review our entire capabilities catalog and understand how they work together to create integrated digital operations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {CAPABILITIES.map((cap, idx) => (
              <div key={cap.id} className="editorial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#F6F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icons[idx]}
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#981B25' }}>0{idx + 1}</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#2D282A', marginBottom: '0.35rem' }}>
                    {cap.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#981B25', marginBottom: '0.75rem' }}>
                    {cap.positioning}
                  </div>
                  <p className="body-normal" style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                    {cap.summary}
                  </p>

                  <div style={{ borderTop: '1px solid #E7E5E3', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Scope
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {cap.services.map((s) => (
                        <li key={s} style={{ fontSize: '0.825rem', color: '#2D282A', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#981B25' }}></span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedCap(idx);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="btn-link"
                >
                  <span>Examine details</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="stats-band">
        <div className="site-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem', color: '#FFFFFF' }}>
            Have a specific technical requirement?
          </h2>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '580px', margin: '0 auto 2rem' }}>
            Discuss your system architecture or planned modernization with our solutions team.
          </p>
          <button onClick={onOpenContact} className="btn btn-navy" style={{ backgroundColor: '#2D282A', padding: '0.9rem 2.25rem' }}>
            <span>Connect With Our Engineers</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
}
