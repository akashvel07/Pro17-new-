import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Radio, 
  Cpu, 
  Layers, 
  MessageSquare,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { PRODUCTS, ALSO_AVAILABLE, BRAND_INFO } from '../data/content';
import { BinaraIQDemo, ProNexaIQDemo, EduceERPDemo, ProSageIQDemo } from '../components/ProductSimulators';
import SpiderButton from '../components/SpiderButton';

export default function ProductsPage({ onNavigate, onOpenContact }) {
  const [activeProductTab, setActiveProductTab] = useState(0);

  const productDemos = [
    <BinaraIQDemo key="binaraiq" />,
    <ProNexaIQDemo key="pronexaiq" />,
    <EduceERPDemo key="educe" />,
    <ProSageIQDemo key="prosage" />
  ];

  return (
    <main>
      {/* Products Page Hero */}
      <section className="section-spacing bg-white" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: '3rem' }}>
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="label-eyebrow">Enterprise Products &amp; Platforms</span>
            <h1 className="display-title" style={{ marginTop: '0.75rem', marginBottom: '1.25rem', color: '#2D282A' }}>
              Built Through <span className="text-red">Real Delivery.</span>
            </h1>
            <p className="body-large">
              Products, accelerators and custom solutions designed to solve real-world challenges. From asset tracking to automated data control towers and conversational business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Product Selector & Deep Dive */}
      <section className="section-spacing bg-warm-gray" style={{ borderTop: '1px solid #E7E5E3', borderBottom: '1px solid #E7E5E3' }}>
        <div className="site-container">
          {/* Product Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.75rem',
              marginBottom: '3rem'
            }}
          >
            {PRODUCTS.map((prod, idx) => (
              <button
                key={prod.id}
                onClick={() => setActiveProductTab(idx)}
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  backgroundColor: activeProductTab === idx ? '#2D282A' : '#FFFFFF',
                  color: activeProductTab === idx ? '#FFFFFF' : '#2D282A',
                  border: `1.5px solid ${activeProductTab === idx ? '#2D282A' : '#E7E5E3'}`,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeProductTab === idx ? '0 10px 25px rgba(45, 40, 42, 0.18)' : 'none'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: activeProductTab === idx ? '#F87171' : '#981B25', marginBottom: '0.25rem' }}>
                  {prod.badge}
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                  {prod.name}
                </div>
                <div style={{ fontSize: '0.8rem', opacity: activeProductTab === idx ? 0.8 : 0.6, marginTop: '0.2rem' }}>
                  {prod.tagline}
                </div>
              </button>
            ))}
          </div>

          {/* Active Product Feature Deep Dive */}
          {(() => {
            const product = PRODUCTS[activeProductTab];
            return (
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E7E5E3',
                  padding: 'clamp(2rem, 4vw, 3.5rem)',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.05)'
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center'
                  }}
                >
                  {/* Left Column: Specs & Offerings */}
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span className="pill-badge pill-badge-red">{product.badge}</span>
                      {product.poweredBy && (
                        <span className="pill-badge" style={{ backgroundColor: '#F6F4F2', color: '#6B6B70' }}>
                          ExcelForte Partner
                        </span>
                      )}
                    </div>

                    <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#2D282A', marginBottom: '0.25rem' }}>
                      {product.name}
                    </h2>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#981B25', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                      "{product.tagline}"
                    </div>

                    <p className="body-large" style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
                      {product.description}
                    </p>

                    {/* Capabilities list */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B6B70', marginBottom: '1rem', fontWeight: 700 }}>
                        Core Platform Capabilities
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {product.capabilities.map((cap) => (
                          <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <CheckCircle size={18} color="#981B25" />
                            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#2D282A' }}>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Illustrative Use-case */}
                    <div style={{ backgroundColor: '#F6F4F2', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #E7E5E3', marginBottom: '2rem' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                        Illustrative Enterprise Application
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#242326' }}>
                        {product.useCase}
                      </div>
                    </div>

                    {/* CTA */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      <SpiderButton
                        onClick={onOpenContact}
                        size={46}
                        buttonStyle={{ padding: '0 1.75rem', fontSize: '0.925rem' }}
                      >
                        <span>Request a Product Demo</span>
                        <ArrowRight size={16} />
                      </SpiderButton>
                    </div>
                  </div>

                  {/* Right Column: Interactive Simulator */}
                  <div>
                    <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Live Concept Interface
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#88888D' }}>
                        Illustrative Simulation
                      </span>
                    </div>
                    {productDemos[activeProductTab]}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Complete Product Grid */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">Product Catalog</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#2D282A' }}>
              All 4 Specialized Platforms
            </h2>
            <p className="body-large">
              Each platform addresses a targeted enterprise bottleneck, engineered with interoperability and speed-to-value at its core.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {PRODUCTS.map((prod, idx) => (
              <div key={prod.id} className="editorial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="pill-badge" style={{ marginBottom: '0.75rem' }}>{prod.badge}</span>
                  <h3 style={{ fontSize: '1.45rem', color: '#2D282A', marginBottom: '0.25rem' }}>
                    {prod.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#981B25', marginBottom: '0.85rem' }}>
                    {prod.tagline}
                  </div>
                  <p className="body-normal" style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                    {prod.description}
                  </p>

                  <div style={{ borderTop: '1px solid #E7E5E3', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Key Capabilities
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {prod.capabilities.map((c) => (
                        <li key={c} style={{ fontSize: '0.825rem', color: '#2D282A', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle size={13} color="#981B25" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    onClick={() => {
                      setActiveProductTab(idx);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="btn btn-outline"
                    style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                  >
                    <span>View Interactive UI</span>
                    <ArrowRight size={14} />
                  </button>
                  <SpiderButton
                    onClick={onOpenContact}
                    size={38}
                    buttonStyle={{ padding: '0 1.15rem', fontSize: '0.85rem' }}
                  >
                    <span>Request Demo</span>
                  </SpiderButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Available Offerings */}
      <section className="section-spacing bg-warm-gray" style={{ borderTop: '1px solid #E7E5E3' }}>
        <div className="site-container">
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <span className="label-eyebrow">Complementary Offerings</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#2D282A' }}>
              Also Available
            </h2>
            <p className="body-large">
              Beyond standalone platforms, we provide custom delivery frameworks, accelerators, and deployment governance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {ALSO_AVAILABLE.map((item) => (
              <div key={item.title} className="editorial-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: '#2D282A', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p className="body-normal" style={{ fontSize: '0.925rem', marginBottom: '1.5rem' }}>
                  {item.description}
                </p>
                <button onClick={onOpenContact} className="btn-link">
                  <span>Inquire about this offering</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', fontSize: '0.8rem', color: '#7E8B99', textAlign: 'center', borderTop: '1px solid #E7E5E3', paddingTop: '1.5rem' }}>
            {BRAND_INFO.legalDisclaimer}
          </div>
        </div>
      </section>
    </main>
  );
}
