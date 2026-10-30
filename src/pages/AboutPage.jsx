import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle, Globe2, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { BRAND_INFO, VALUE_PILLARS, DELIVERY_STEPS, INDUSTRIES } from '../data/content';
import PartnerBadges from '../components/PartnerBadges';

export default function AboutPage({ onNavigate, onOpenContact }) {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-spacing bg-white" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="label-eyebrow">About Pro17Analytics</span>
            <h1 className="display-title" style={{ marginTop: '0.75rem', marginBottom: '1.5rem', color: '#0B2340' }}>
              Technology works best when it starts with <span className="text-red">understanding.</span>
            </h1>
            <p className="body-large" style={{ fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {BRAND_INFO.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenContact} className="btn btn-primary">
                <span>Start a Conversation</span>
                <ArrowRight size={17} />
              </button>
              <button onClick={() => onNavigate('capabilities')} className="btn btn-outline">
                <span>Our Capabilities</span>
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Extension of Your Team Manifesto */}
      <section className="section-spacing bg-warm-gray" style={{ borderTop: '1px solid #E7E5E3', borderBottom: '1px solid #E7E5E3' }}>
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="label-eyebrow">Partnership Model</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem', color: '#0B2340' }}>
                An extension of your team — from idea to scale.
              </h2>
              <p className="body-normal" style={{ fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                At Pro17Analytics, we reject one-size-fits-all software dogma. Modern enterprise engineering requires high alignment with business drivers, rigorous listening, and hands-on delivery.
              </p>
              <p className="body-normal" style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                We embed deeply into your technical workflows, bridging business aspirations with robust, production-grade cloud, data, IoT, and ERP implementations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {BRAND_INFO.deliveryImpacts.map((imp) => (
                  <div key={imp.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle size={18} color="#981B25" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#0B2340', fontSize: '0.95rem' }}>{imp.title}:</strong>{' '}
                      <span style={{ color: '#6B6B70', fontSize: '0.9rem' }}>{imp.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 45px rgba(0,0,0,0.08)', border: '1px solid #E7E5E3' }}>
                <img
                  src="/images/hero-summit.jpg"
                  alt="High viewpoint summit perspective symbolizing clarity and perspective"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Positioning Pillars */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">Guiding Values</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#0B2340' }}>
              Four Pillars of Our Practice
            </h2>
            <p className="body-large">
              Clear principles that define how we engineer solutions and maintain enduring client trust.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {VALUE_PILLARS.map((p, idx) => (
              <div key={p.title} className="editorial-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#981B25', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Pillar 0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#0B2340', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p className="body-normal" style={{ fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                  {p.description}
                </p>
                <div className="pill-badge" style={{ backgroundColor: '#F6F4F2', color: '#0B2340' }}>
                  {p.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Step Journey */}
      <section className="section-spacing bg-warm-gray" style={{ borderTop: '1px solid #E7E5E3' }}>
        <div className="site-container">
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">Delivery Lifecycle</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#0B2340' }}>
              Understand · Build · Operate · Scale
            </h2>
            <p className="body-large">
              A dependable framework ensuring projects move systematically from initial alignment to ongoing operational scale.
            </p>
          </div>

          <div className="process-grid">
            {DELIVERY_STEPS.map((step) => (
              <div key={step.number} className="process-step-card">
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: step.color, marginBottom: '0.75rem' }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#0B2340', marginBottom: '0.35rem' }}>
                  {step.title}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#981B25', marginBottom: '0.85rem' }}>
                  {step.subtitle}
                </div>
                <p className="body-normal" style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  {step.description}
                </p>
                <div style={{ borderTop: '1px solid #E7E5E3', paddingTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {step.outcomes.map((o) => (
                    <div key={o} style={{ fontSize: '0.8rem', color: '#0B2340', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle size={13} color="#981B25" />
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery & Industry Reach */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="label-eyebrow">Enterprise Footprint</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem', color: '#0B2340' }}>
                Global Delivery Capabilities
              </h2>
              <p className="body-normal" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Pro17Analytics coordinates multi-region delivery across <strong>USA, Canada, India, and Singapore</strong>, ensuring our clients benefit from agile engineering execution, domain depth, and round-the-clock continuity.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {BRAND_INFO.globalLocations.map((loc) => (
                  <div key={loc} style={{ padding: '0.85rem 1rem', border: '1px solid #E7E5E3', borderRadius: '8px', backgroundColor: '#F6F4F2' }}>
                    <div style={{ fontWeight: 700, color: '#0B2340', fontSize: '0.95rem' }}>{loc}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6B6B70' }}>Delivery Hub</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#0B2340', marginBottom: '0.6rem', fontWeight: 700 }}>
                  5+ Core Industries
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {INDUSTRIES.map((ind) => (
                    <span key={ind.id} className="pill-badge" style={{ fontSize: '0.8rem' }}>
                      {ind.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E7E5E3', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
                <img
                  src="/images/global-cityscape.jpg"
                  alt="Global modern waterfront towers"
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Partner Marks */}
      <section className="section-spacing bg-warm-gray" style={{ borderTop: '1px solid #E7E5E3' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <span className="label-eyebrow">Enterprise Trust</span>
            <h3 style={{ fontSize: '1.65rem', color: '#0B2340', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Partnerships &amp; Compliance Standards
            </h3>
            <p style={{ color: '#6B6B70', fontSize: '0.9rem' }}>
              Verified platform credentials and strict data governance across our delivery hubs.
            </p>
          </div>
          <PartnerBadges isDark={false} />
        </div>
      </section>

      {/* CTA Band */}
      <section className="stats-band">
        <div className="site-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem', color: '#FFFFFF' }}>
            Ready to build what matters?
          </h2>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '580px', margin: '0 auto 2rem' }}>
            Let's discuss your current operational challenges and discover how practical engineering can accelerate your business outcomes.
          </p>
          <button onClick={onOpenContact} className="btn btn-navy" style={{ backgroundColor: '#0B2340', padding: '0.9rem 2.25rem' }}>
            <span>Start a Conversation</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
}
