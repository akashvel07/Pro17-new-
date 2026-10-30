import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Stethoscope, 
  Factory, 
  Wheat, 
  Zap, 
  ShoppingBag, 
  Truck,
  Building2,
  ArrowUpRight
} from 'lucide-react';
import { INDUSTRIES, BRAND_INFO } from '../data/content';

export default function IndustriesPage({ onNavigate, onOpenContact }) {
  const industryIcons = {
    healthcare: <Stethoscope size={28} color="#981B25" />,
    manufacturing: <Factory size={28} color="#981B25" />,
    agriculture: <Wheat size={28} color="#981B25" />,
    energy: <Zap size={28} color="#981B25" />,
    retail: <ShoppingBag size={28} color="#981B25" />,
    logistics: <Truck size={28} color="#981B25" />
  };

  return (
    <main>
      {/* Industries Hero */}
      <section className="section-spacing bg-white" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: '3rem' }}>
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="label-eyebrow">Industry Experience</span>
            <h1 className="display-title" style={{ marginTop: '0.75rem', marginBottom: '1.25rem', color: '#0B2340' }}>
              Deep Domain Knowledge. <br />
              <span className="text-red">Proven Enterprise Focus.</span>
            </h1>
            <p className="body-large">
              Serving 5+ core global industries with practical solutions across connected operations, real-time data governance, cloud modernization, and ERP management.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Grid of All 6 Industries */}
      <section className="section-spacing bg-warm-gray" style={{ borderTop: '1px solid #E7E5E3', borderBottom: '1px solid #E7E5E3' }}>
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem'
            }}
          >
            {INDUSTRIES.map((ind, idx) => (
              <div
                key={ind.id}
                className="editorial-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2.25rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#F6F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {industryIcons[ind.id]}
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#981B25' }}>
                      0{idx + 1}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0B2340', marginBottom: '0.35rem' }}>
                    {ind.name}
                  </h2>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#981B25', marginBottom: '1.25rem' }}>
                    {ind.focus}
                  </div>

                  {/* Challenge */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                      Operational Challenge
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#242326', lineHeight: 1.5 }}>
                      {ind.challenges}
                    </p>
                  </div>

                  {/* Practical Solutions */}
                  <div style={{ backgroundColor: '#F6F4F2', padding: '1rem', borderRadius: '8px', border: '1px solid #E7E5E3', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                      Practical Solution Approach
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#4A5568', lineHeight: 1.5 }}>
                      {ind.solutions}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="btn-link"
                  style={{ alignSelf: 'flex-start' }}
                >
                  <span>Discuss {ind.name} Solutions</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Across Sectors */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div
            style={{
              backgroundColor: '#0B2340',
              borderRadius: '20px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#FFFFFF',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="label-eyebrow" style={{ color: '#F87171' }}>Delivery Model</span>
              <h3 style={{ fontSize: 'clamp(1.85rem, 3vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '0.5rem', marginBottom: '1rem' }}>
                Outcome-Focused Engineering Across Borders
              </h3>
              <p style={{ color: '#B4C4D6', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                No matter your sector or geography, Pro17Analytics brings practical technical execution across our delivery hubs in the USA, Canada, India, and Singapore.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={onOpenContact} className="btn btn-primary">
                  <span>Start a Sector Discussion</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {BRAND_INFO.deliveryImpacts.map((imp) => (
                <div key={imp.title} style={{ backgroundColor: '#102C4E', border: '1px solid #1F426F', padding: '1.25rem', borderRadius: '10px' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.3rem' }}>
                    {imp.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#88A3BF', lineHeight: 1.4 }}>
                    {imp.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
