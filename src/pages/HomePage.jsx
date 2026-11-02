import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Database, 
  Network, 
  Cloud, 
  Radio, 
  Layers, 
  CheckCircle, 
  Globe2 
} from 'lucide-react';
import { 
  BRAND_INFO, 
  VALUE_PILLARS, 
  DELIVERY_STEPS, 
  CAPABILITIES, 
  PRODUCTS, 
  ALSO_AVAILABLE, 
  INDUSTRIES 
} from '../data/content';
import PartnerBadges from '../components/PartnerBadges';
import { BinaraIQDemo, ProNexaIQDemo, EduceERPDemo, ProSageIQDemo } from '../components/ProductSimulators';
import { HeroTechConsole, GlobalOperationsMap } from '../components/ProfessionalVisuals';

export default function HomePage({ onNavigate, onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);

  const capabilityIcons = {
    'data-ai': <Database size={24} color="#981B25" />,
    'integration-automation': <Network size={24} color="#981B25" />,
    'cloud-digital': <Cloud size={24} color="#981B25" />,
    'iot-connected': <Radio size={24} color="#981B25" />,
    'enterprise-erp': <Layers size={24} color="#981B25" />
  };

  return (
    <main>
      {/* ========================================================
          HERO SECTION
          Asymmetric editorial composition, bold typography,
          summit vision imagery, restrained micro-interactions
          ======================================================== */}
      <section className="section-spacing bg-white" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Narrative Column */}
            <div>
              {/* Supporting Brand Tagline */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span className="pill-badge pill-badge-red" style={{ letterSpacing: '0.08em', fontWeight: 700 }}>
                  {BRAND_INFO.supportingStatement}
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="display-title" style={{ marginBottom: '1.5rem', color: '#2D282A' }}>
                Understand First.<br />
                <span className="text-red">Build What Matters.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="body-large" style={{ marginBottom: '2.25rem', maxWidth: '580px' }}>
                {BRAND_INFO.description}
              </p>

              {/* Primary & Secondary CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <button
                  onClick={() => onNavigate('capabilities')}
                  className="btn btn-primary"
                  style={{ padding: '0.95rem 1.85rem' }}
                >
                  <span>Explore What We Do</span>
                  <ArrowRight size={17} />
                </button>
                <button
                  onClick={onOpenContact}
                  className="btn btn-outline"
                  style={{ padding: '0.95rem 1.85rem' }}
                >
                  <span>Talk to Our Team</span>
                  <ArrowUpRight size={17} />
                </button>
              </div>

              {/* Positioning Pillars Micro-list */}
              <div
                style={{
                  borderTop: '1px solid #E7E5E3',
                  paddingTop: '1.5rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem 2rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#2D282A'
                }}
              >
                {VALUE_PILLARS.map((p) => (
                  <div key={p.title} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#981B25' }}></div>
                    <span>{p.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Visual Column - Interactive Architecture Cockpit */}
            <div style={{ position: 'relative' }}>
              <HeroTechConsole />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CAPABILITY STRIP
          Restrained icon system, consistent stroke weight & size
          ======================================================== */}
      <section style={{ backgroundColor: '#F6F4F2', borderTop: '1px solid #E7E5E3', borderBottom: '1px solid #E7E5E3', padding: '1.75rem 0' }}>
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '1rem',
              alignItems: 'center'
            }}
          >
            {[
              { id: 'data-ai', label: 'Data & AI', icon: <Database size={20} strokeWidth={2} /> },
              { id: 'integration-automation', label: 'Integration', icon: <Network size={20} strokeWidth={2} /> },
              { id: 'cloud-digital', label: 'Cloud', icon: <Cloud size={20} strokeWidth={2} /> },
              { id: 'iot-connected', label: 'IoT', icon: <Radio size={20} strokeWidth={2} /> },
              { id: 'enterprise-erp', label: 'Enterprise ERP', icon: <Layers size={20} strokeWidth={2} /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate('capabilities')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E7E5E3',
                  color: '#2D282A',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left'
                }}
                className="capability-pill-btn"
              >
                <div style={{ color: '#981B25', display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PROOF / POSITIONING BAND
          Strong contrasting band: 5+ Industries Served,
          Global Delivery, Enterprise Solutions & Expertise
          ======================================================== */}
      <section className="stats-band">
        <div className="site-container">
          <div className="stats-grid">
            <div style={{ padding: '0.5rem 1rem' }}>
              <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1 }}>5+</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.4rem' }}>Industries Served</div>
              <div style={{ fontSize: '0.825rem', opacity: 0.85, marginTop: '0.2rem' }}>Healthcare · Manufacturing · Agriculture · Energy · Retail · Logistics</div>
            </div>

            <div style={{ padding: '0.5rem 1rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)', borderRight: '1px solid rgba(255, 255, 255, 0.25)' }}>
              <div style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 800, lineHeight: 1.2 }}>Global Delivery</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.4rem' }}>Enterprise Footprint</div>
              <div style={{ fontSize: '0.825rem', opacity: 0.85, marginTop: '0.2rem' }}>USA · Canada · India · Singapore</div>
            </div>

            <div style={{ padding: '0.5rem 1rem' }}>
              <div style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 800, lineHeight: 1.2 }}>Enterprise Solutions</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.4rem' }}>&amp; Proven Expertise</div>
              <div style={{ fontSize: '0.825rem', opacity: 0.85, marginTop: '0.2rem' }}>Practical engineering for real business outcomes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHAT WE DO: DELIVERY PHILOSOPHY
          Understand -> Build -> Operate -> Scale
          ======================================================== */}
      <section className="section-spacing bg-white" id="approach">
        <div className="site-container">
          {/* Section Header */}
          <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">Delivery Approach</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#2D282A' }}>
              From idea to impact.
            </h2>
            <p className="body-large">
              We partner across the journey — from understanding your business to building, operating, and scaling practical solutions.
            </p>
          </div>

          {/* Interactive Process 4 Steps */}
          <div className="process-grid">
            {DELIVERY_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="process-step-card"
                onClick={() => setActiveStep(idx)}
                style={{
                  cursor: 'pointer',
                  borderTop: activeStep === idx ? `4px solid ${step.color}` : '1px solid #E7E5E3',
                  backgroundColor: activeStep === idx ? '#FAF9F8' : '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: step.color }}>{step.number}</span>
                  <span className="pill-badge" style={{ backgroundColor: '#F6F4F2', color: '#2D282A' }}>Phase {idx + 1}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#2D282A', marginBottom: '0.35rem' }}>
                  {step.title}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#981B25', marginBottom: '0.85rem' }}>
                  {step.subtitle}
                </div>
                <p className="body-normal" style={{ fontSize: '0.9rem', marginBottom: '1.25rem', minHeight: '65px' }}>
                  {step.description}
                </p>
                <div style={{ borderTop: '1px solid #E7E5E3', paddingTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {step.outcomes.map((o) => (
                    <div key={o} style={{ fontSize: '0.78rem', color: '#2D282A', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle size={13} color="#981B25" />
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Team Extension Callout */}
          <div
            style={{
              marginTop: '2.5rem',
              backgroundColor: '#2D282A',
              borderRadius: '12px',
              padding: '1.75rem 2rem',
              color: '#FFFFFF',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', color: '#EDE8EA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                Collaborative Model
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                {BRAND_INFO.extensionMessage}
              </div>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="btn btn-outline-white"
              style={{ padding: '0.7rem 1.5rem', fontSize: '0.875rem' }}
            >
              <span>Explore Our Approach</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          CAPABILITIES SECTION
          5 core capability modules with service lists & links
          ======================================================== */}
      <section className="section-spacing bg-warm-gray" id="capabilities">
        <div className="site-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', gap: '1.5rem' }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="label-eyebrow">Enterprise Capabilities</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', color: '#2D282A' }}>
                Practical engineering across core domains.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('capabilities')}
              className="btn btn-outline"
            >
              <span>View Full Services Breakdown</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="capability-grid">
            {CAPABILITIES.map((cap) => (
              <div key={cap.id} className="editorial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#F6F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    {capabilityIcons[cap.id]}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: '#2D282A', marginBottom: '0.5rem' }}>
                    {cap.title}
                  </h3>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#981B25', marginBottom: '0.85rem' }}>
                    {cap.positioning}
                  </div>
                  <p className="body-normal" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    {cap.summary}
                  </p>

                  <div style={{ borderTop: '1px solid #E7E5E3', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                      Key Focus Areas
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {cap.services.map((svc) => (
                        <span key={svc} className="pill-badge" style={{ fontSize: '0.75rem', backgroundColor: '#FFFFFF', border: '1px solid #E7E5E3' }}>
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('capabilities')}
                  className="btn-link"
                >
                  <span>Explore capability</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PRODUCTS & PLATFORMS SHOWCASE
          BinaraIQ, ProNexaIQ, Educe ERP, ProSageIQ
          with realistic interactive simulators
          ======================================================== */}
      <section className="section-spacing bg-white" id="products">
        <div className="site-container">
          <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">Products &amp; Platforms</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#2D282A' }}>
              What We Build
            </h2>
            <p className="body-large">
              Products, accelerators and custom solutions designed to solve real-world challenges.
            </p>
          </div>

          {/* Featured Product: BinaraIQ™ */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              backgroundColor: '#2D282A',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#FFFFFF',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <span className="pill-badge pill-badge-red" style={{ marginBottom: '1rem', color: '#FFFFFF', backgroundColor: '#981B25' }}>
                Featured Intelligence Platform
              </span>
              <h3 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                BinaraIQ™
              </h3>
              <div style={{ fontSize: '1.15rem', color: '#EDE8EA', fontWeight: 600, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                Connected Asset Intelligence · "Every asset has a story"
              </div>
              <p style={{ color: '#D4CED1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Real-time asset visibility &amp; tracking powered by UHF, IoT, Bar-code, Camera &amp; QR intelligence, with predictive insights and automated workflows.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {PRODUCTS[0].capabilities.map((cap) => (
                  <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0', fontSize: '0.9rem' }}>
                    <CheckCircle size={16} color="#981B25" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  onClick={() => onNavigate('products')}
                  className="btn btn-primary"
                >
                  <span>Explore BinaraIQ™</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={onOpenContact}
                  className="btn btn-outline-white"
                >
                  <span>Request Demo</span>
                </button>
              </div>
            </div>

            <div>
              <BinaraIQDemo />
            </div>
          </div>

          {/* Down-by-down Stack for ProNexaIQ, Educe ERP, ProSageIQ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              marginBottom: '3.5rem'
            }}
          >
            {/* ProNexaIQ */}
            <div
              className="editorial-card"
              style={{
                borderRadius: '20px',
                padding: 'clamp(2rem, 3.5vw, 3rem)'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span className="pill-badge pill-badge-red" style={{ marginBottom: '1rem' }}>
                    {PRODUCTS[1].badge}
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', color: '#2D282A', marginBottom: '0.4rem', fontWeight: 800 }}>
                    {PRODUCTS[1].name}
                  </h3>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#981B25', fontStyle: 'italic', marginBottom: '1rem' }}>
                    {PRODUCTS[1].tagline}
                  </div>
                  <p className="body-large" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {PRODUCTS[1].description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                    {PRODUCTS[1].capabilities.map((c) => (
                      <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2D282A', fontSize: '0.9rem', fontWeight: 600 }}>
                        <CheckCircle size={16} color="#981B25" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <button onClick={() => onNavigate('products')} className="btn btn-navy" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                      <span>Explore ProNexaIQ™</span>
                      <ArrowRight size={15} />
                    </button>
                    <button onClick={onOpenContact} className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                      <span>Request Demo</span>
                    </button>
                  </div>
                </div>

                <div>
                  <ProNexaIQDemo />
                </div>
              </div>
            </div>

            {/* Educe ERP */}
            <div
              className="editorial-card"
              style={{
                borderRadius: '20px',
                padding: 'clamp(2rem, 3.5vw, 3rem)'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <span className="pill-badge">{PRODUCTS[2].badge}</span>
                    <span style={{ fontSize: '0.75rem', color: '#6B6B70', fontWeight: 600 }}>
                      ExcelForte Partner
                    </span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', color: '#2D282A', marginBottom: '0.25rem', fontWeight: 800 }}>
                    {PRODUCTS[2].name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#6B6B70', fontWeight: 500, marginBottom: '0.5rem' }}>
                    {PRODUCTS[2].poweredBy}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#981B25', fontStyle: 'italic', marginBottom: '1rem' }}>
                    {PRODUCTS[2].tagline}
                  </div>
                  <p className="body-large" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {PRODUCTS[2].description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                    {PRODUCTS[2].capabilities.map((c) => (
                      <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2D282A', fontSize: '0.9rem', fontWeight: 600 }}>
                        <CheckCircle size={16} color="#981B25" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <button onClick={() => onNavigate('products')} className="btn btn-navy" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                      <span>Explore Educe ERP</span>
                      <ArrowRight size={15} />
                    </button>
                    <button onClick={onOpenContact} className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                      <span>Request Demo</span>
                    </button>
                  </div>
                </div>

                <div>
                  <EduceERPDemo />
                </div>
              </div>
            </div>

            {/* ProSageIQ */}
            <div
              className="editorial-card"
              style={{
                borderRadius: '20px',
                padding: 'clamp(2rem, 3.5vw, 3rem)'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span className="pill-badge pill-badge-red" style={{ marginBottom: '1rem' }}>
                    {PRODUCTS[3].badge}
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', color: '#2D282A', marginBottom: '0.4rem', fontWeight: 800 }}>
                    {PRODUCTS[3].name}
                  </h3>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#981B25', fontStyle: 'italic', marginBottom: '1rem' }}>
                    {PRODUCTS[3].tagline}
                  </div>
                  <p className="body-large" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {PRODUCTS[3].description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                    {PRODUCTS[3].capabilities.map((c) => (
                      <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2D282A', fontSize: '0.9rem', fontWeight: 600 }}>
                        <CheckCircle size={16} color="#981B25" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <button onClick={() => onNavigate('products')} className="btn btn-navy" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                      <span>Explore ProSageIQ™</span>
                      <ArrowRight size={15} />
                    </button>
                    <button onClick={onOpenContact} className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                      <span>Request Demo</span>
                    </button>
                  </div>
                </div>

                <div>
                  <ProSageIQDemo />
                </div>
              </div>
            </div>
          </div>

          {/* Also Available Offerings */}
          <div style={{ backgroundColor: '#F6F4F2', borderRadius: '16px', padding: 'clamp(1.75rem, 3vw, 2.5rem)', border: '1px solid #E7E5E3' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#2D282A', marginBottom: '1.25rem', fontWeight: 700 }}>
              Also Available
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {ALSO_AVAILABLE.map((item) => (
                <div key={item.title} style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid #E7E5E3' }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: '#2D282A', marginBottom: '0.4rem' }}>
                    {item.title}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#6B6B70', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Impact Proof Strip */}
          <div
            style={{
              marginTop: '2.5rem',
              backgroundColor: '#981B25',
              borderRadius: '12px',
              padding: '1.5rem 2rem',
              color: '#FFFFFF',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center'
            }}
          >
            {BRAND_INFO.deliveryImpacts.map((imp) => (
              <div key={imp.title}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.2rem' }}>{imp.title}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>{imp.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.75rem', color: '#88888D', marginTop: '1rem', textAlign: 'center' }}>
            {BRAND_INFO.legalDisclaimer}
          </div>
        </div>
      </section>

      {/* ========================================================
          INDUSTRIES SECTION
          Healthcare, Manufacturing, Agriculture, Energy, Retail, Logistics
          ======================================================== */}
      <section className="section-spacing bg-warm-gray" id="industries">
        <div className="site-container">
          <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">Industry Experience</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#2D282A' }}>
              Engineered for 5+ Core Enterprise Sectors
            </h2>
            <p className="body-large">
              Proven domain understanding translating technology into measurable operational impact.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="editorial-card"
                style={{ backgroundColor: '#FFFFFF', padding: '1.75rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#2D282A', fontWeight: 700 }}>
                    {ind.name}
                  </h3>
                  <span className="pill-badge" style={{ fontSize: '0.7rem' }}>Domain Focus</span>
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#981B25', marginBottom: '0.85rem' }}>
                  {ind.focus}
                </div>

                <p className="body-normal" style={{ fontSize: '0.875rem', marginBottom: '1rem', color: '#6B6B70' }}>
                  <strong>Key Challenge:</strong> {ind.challenges}
                </p>

                <div style={{ backgroundColor: '#F6F4F2', padding: '0.85rem', borderRadius: '6px', fontSize: '0.825rem', color: '#242326' }}>
                  <strong style={{ color: '#2D282A' }}>Practical Solution:</strong> {ind.solutions}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <button onClick={() => onNavigate('industries')} className="btn btn-navy">
              <span>Explore Detailed Industry Solutions</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY PRO17ANALYTICS: 4 VALUE PILLARS
          People · Technology · Practical Solutions · Long-term Partnership
          ======================================================== */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">Why Pro17Analytics</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#2D282A' }}>
              Built on enduring principles.
            </h2>
            <p className="body-large">
              We focus on people, technology, practical solutions, and long-term partnership rather than transient technology hype.
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
              <div
                key={p.title}
                className="editorial-card"
                style={{ padding: '2rem 1.75rem' }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#981B25', marginBottom: '0.5rem' }}>
                  0{idx + 1} · {p.highlight}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#2D282A', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p className="body-normal" style={{ fontSize: '0.9rem' }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          GLOBAL PRESENCE & DELIVERY
          USA · Canada · India · Singapore with city visual
          ======================================================== */}
      <section className="section-spacing bg-navy" id="global-delivery">
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
              <span className="label-eyebrow" style={{ color: '#F87171' }}>Global Delivery</span>
              <h2 className="section-title" style={{ color: '#FFFFFF', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                Seamless Cross-Border Engineering
              </h2>
              <p style={{ color: '#B4C4D6', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our global delivery model combines enterprise solutions leadership with international delivery centers across key markets, offering round-the-clock agility and localized governance.
              </p>

              {/* Geographic Hubs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {BRAND_INFO.globalLocations.map((loc) => (
                  <div
                    key={loc}
                    style={{
                      backgroundColor: '#3A3336',
                      border: '1px solid #4D4548',
                      padding: '1rem',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <Globe2 size={20} color="#00A4EF" />
                    <div>
                      <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>{loc}</div>
                      <div style={{ color: '#C2BCBE', fontSize: '0.75rem' }}>Enterprise Delivery</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={onOpenContact} className="btn btn-primary">
                  <span>Connect With Our Team</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div>
              <GlobalOperationsMap />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PARTNERS & VERIFIED COMPLIANCE MARKS
          Microsoft Solutions Partner, TimeXtender, ISO 27001, SOC, HIPAA, GDPR
          ======================================================== */}
      <section className="section-spacing bg-white" style={{ paddingBottom: '3rem' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <span className="label-eyebrow">Enterprise Credentials</span>
            <h3 style={{ fontSize: '1.65rem', color: '#2D282A', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Partners &amp; Verified Security Standards
            </h3>
            <p style={{ color: '#6B6B70', fontSize: '0.9rem' }}>
              Industry partnerships and rigorous compliance certifications backing our engineering delivery.
            </p>
          </div>

          <PartnerBadges isDark={false} />
        </div>
      </section>

      {/* ========================================================
          FINAL CALL TO ACTION
          Headline: "Let’s Build What’s Next."
          Options: Discuss Your Challenges, Explore Products, Strategic Partnerships
          ======================================================== */}
      <section
        style={{
          backgroundColor: '#F6F4F2',
          borderTop: '1px solid #E7E5E3',
          padding: 'clamp(4rem, 7vw, 6rem) 0'
        }}
      >
        <div className="site-container">
          <div
            style={{
              backgroundColor: '#2D282A',
              borderRadius: '24px',
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#FFFFFF',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(45, 40, 42, 0.2)'
            }}
          >
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <span className="pill-badge pill-badge-red" style={{ marginBottom: '1.25rem', backgroundColor: '#981B25', color: '#FFFFFF' }}>
                Next Step
              </span>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.15 }}>
                Let’s Build What’s Next.
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#B4C4D6', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Discuss your challenges, explore our products, or discover how we can work together as an extension of your team.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <button
                  onClick={onOpenContact}
                  className="btn btn-primary"
                  style={{ padding: '0.95rem 2rem' }}
                >
                  <span>Start a Conversation</span>
                  <ArrowRight size={17} />
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="btn btn-outline-white"
                  style={{ padding: '0.95rem 1.85rem' }}
                >
                  <span>Explore Products &amp; Demos</span>
                </button>
              </div>

              <div style={{ fontSize: '0.85rem', color: '#88A3BF', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <span>✓ Discuss Your Challenges</span>
                <span>✓ Explore Products &amp; Demos</span>
                <span>✓ Explore Strategic Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
