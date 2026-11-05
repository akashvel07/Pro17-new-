import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Database, 
  Radio, 
  Globe2, 
  CheckCircle2, 
  Network, 
  Server, 
  Users,
  Sparkles 
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';

/**
 * 1. HeroTechConsole:
 * Ultra-professional enterprise architecture cockpit that replaces generic mountain stock photos.
 * Showcases real-time data pipelines, cloud topologies, and AI governance with interactive switches.
 */
export function HeroTechConsole() {
  const [activeTab, setActiveTab] = useState('data');
  const [counter, setCounter] = useState(1420840);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'data', label: 'Data & AI Fabric', icon: <Database size={14} /> },
    { id: 'cloud', label: 'Cloud & APIs', icon: <Network size={14} /> },
    { id: 'edge', label: 'IoT & ERP Core', icon: <Cpu size={14} /> }
  ];

  return (
    <div
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(45, 40, 42, 0.22)',
        border: '1px solid #3F373A',
        backgroundColor: '#1E1A1B',
        color: '#FFFFFF',
        position: 'relative'
      }}
    >
      {/* Top Console Bar */}
      <div
        style={{
          padding: '0.85rem 1.25rem',
          backgroundColor: '#2D282A',
          borderBottom: '1px solid #3F373A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#D4CED1', fontFamily: 'var(--font-mono)' }}>
            PRO17 // ARCHITECTURE ENGINE
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }} />
          <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 600 }}>OPERATIONAL</span>
        </div>
      </div>

      {/* Interactive Architecture Mode Selector */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          backgroundColor: '#252022',
          borderBottom: '1px solid #3F373A'
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              border: 'none',
              background: activeTab === tab.id ? '#352E31' : 'transparent',
              color: activeTab === tab.id ? '#FFFFFF' : '#A8A0A3',
              borderBottom: activeTab === tab.id ? '2px solid #981B25' : '2px solid transparent',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ color: activeTab === tab.id ? '#F87171' : '#981B25' }}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Visual Architecture Stage */}
      <div style={{ padding: '1.75rem 1.5rem', position: 'relative' }}>
        {activeTab === 'data' && (
          <div>
            {/* Stage Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.68rem', color: '#9E979A', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                  Active Data Pipeline
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginTop: '3px' }}>
                  Enterprise Data &amp; AI Fabric
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '4px 10px', borderRadius: '9999px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 700 }}>SYNCHRONIZED</span>
              </div>
            </div>

            {/* Architecture Node Flow (Spacious 3-Stage Pipeline) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Node 1: Ingestion */}
              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Database size={16} color="#981B25" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Ingestion</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>Kafka · Batch · APIs</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F87171', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  {counter.toLocaleString()}
                  <span style={{ fontSize: '0.65rem', color: '#9E979A', fontWeight: 500, marginLeft: '4px' }}>evt/s</span>
                </div>
              </div>

              {/* Node 2: Governance */}
              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Cpu size={16} color="#00A4EF" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Governance</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>Feature Store &amp; Lineage</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#00A4EF', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  99.98%
                  <span style={{ fontSize: '0.65rem', color: '#9E979A', fontWeight: 500, marginLeft: '4px' }}>quality</span>
                </div>
              </div>

              {/* Node 3: AI Copilots */}
              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} color="#F59E0B" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>AI Reasoning</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>ProSageIQ Agents</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F59E0B', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  Autonomous
                  <span style={{ fontSize: '0.65rem', color: '#9E979A', fontWeight: 500, marginLeft: '4px' }}>state</span>
                </div>
              </div>
            </div>

            {/* Minimalist Live Telemetry Bar */}
            <div
              style={{
                backgroundColor: '#241E20',
                border: '1px solid #3B3235',
                borderRadius: '10px',
                padding: '0.85rem 1.1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.74rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D4CED1' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                <span>Zero Drift Model Guarantee</span>
              </div>
              <span style={{ color: '#F87171', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
                Event-Driven Architecture
              </span>
            </div>
          </div>
        )}

        {activeTab === 'cloud' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.68rem', color: '#9E979A', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                  Hybrid Topology
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginTop: '3px' }}>
                  Multi-Region Cloud Modernization
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(0, 164, 239, 0.12)', border: '1px solid rgba(0, 164, 239, 0.25)', padding: '4px 10px', borderRadius: '9999px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00A4EF' }} />
                <span style={{ fontSize: '0.7rem', color: '#00A4EF', fontWeight: 700 }}>HIGH AVAILABILITY</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Service Mesh</div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>Kubernetes Native</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10B981', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  Zero-Downtime
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>API Ingress</div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>Global Edge CDN</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#00A4EF', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  &lt; 14ms Latency
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Deploys</div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>Automated CI/CD</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F87171', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  Immutable
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#241E20',
                border: '1px solid #3B3235',
                borderRadius: '10px',
                padding: '0.85rem 1.1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.74rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D4CED1' }}>
                <Server size={15} color="#981B25" />
                <span>Multi-Region Azure &amp; AWS Sync</span>
              </div>
              <span style={{ color: '#10B981', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>99.99% Uptime SLA</span>
            </div>
          </div>
        )}

        {activeTab === 'edge' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.68rem', color: '#9E979A', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                  Edge Operations
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginTop: '3px' }}>
                  IoT Connected Assets &amp; Educe ERP
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.25)', padding: '4px 10px', borderRadius: '9999px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <span style={{ fontSize: '0.7rem', color: '#F59E0B', fontWeight: 700 }}>BINARAIQ™ LIVE</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Sensor Mesh</div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>UHF / BLE / QR</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10B981', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  Sub-second
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Maintenance</div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>AI Anomaly Detect</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#00A4EF', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  Zero Outages
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#272123',
                  border: '1px solid #43393C',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Reconciliation</div>
                <div style={{ fontSize: '0.72rem', color: '#9E979A' }}>Educe ERP Engine</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F87171', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  Real-time
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#241E20',
                border: '1px solid #3B3235',
                borderRadius: '10px',
                padding: '0.85rem 1.1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.74rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D4CED1' }}>
                <Radio size={15} color="#981B25" />
                <span>BinaraIQ™ Connected Edge Stream</span>
              </div>
              <span style={{ color: '#10B981', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>Telemetry Active</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 2. GlobalOperationsMap:
 * Interactive international delivery hub console replacing generic cityscape stock photos.
 * Interactive matrix for USA, Canada, India, and Singapore with live status and engineering continuity.
 */
export function GlobalOperationsMap() {
  const [selectedHub, setSelectedHub] = useState('usa');

  const hubs = {
    usa: {
      name: 'United States',
      region: 'Americas Strategic Hub',
      city: 'New York / Chicago / Dallas',
      focus: 'Enterprise Solutions Architecture, Client Strategy, Regulatory Governance',
      status: 'Active Engagement',
      continuity: '24/7 Coordinated SLA',
      sprintVelocity: 'Sprint Day 8 of 10'
    },
    canada: {
      name: 'Canada',
      region: 'FinTech & Cloud Engineering',
      city: 'Toronto / Vancouver',
      focus: 'Cross-Border Cloud Modernization, Data Residency, Security Compliance',
      status: 'Active Engagement',
      continuity: 'Synchronized Sprint Pods',
      sprintVelocity: 'Pipeline Validated'
    },
    india: {
      name: 'India',
      region: 'Technology Delivery & CoE',
      city: 'Bengaluru / Hyderabad',
      focus: 'Data Engineering, AI/ML Pipelines, Large-scale Integration & Testing CoE',
      status: 'Core Delivery Active',
      continuity: 'Follow-the-Sun Operations',
      sprintVelocity: 'Full Velocity Sprints'
    },
    singapore: {
      name: 'Singapore',
      region: 'APAC Regional Operations',
      city: 'Singapore Central',
      focus: 'IoT Connected Operations, Supply Chain Telemetry, Regional Distribution',
      status: 'Operational Node',
      continuity: 'Asia-Pacific Regional Alignment',
      sprintVelocity: 'Real-time Edge Sync'
    }
  };

  const current = hubs[selectedHub];

  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #4D4548',
        backgroundColor: '#1E1A1B',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        color: '#FFFFFF'
      }}
    >
      {/* Top Header */}
      <div
        style={{
          padding: '0.85rem 1.25rem',
          backgroundColor: '#2D282A',
          borderBottom: '1px solid #3F373A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Globe2 size={18} color="#00A4EF" />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', color: '#EDE8EA' }}>
            GLOBAL OPERATIONS NETWORK
          </span>
        </div>
        <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 600 }}>
          ● 4 Hubs Synchronized
        </span>
      </div>

      {/* Hub Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderBottom: '1px solid #3F373A',
          backgroundColor: '#252022'
        }}
      >
        {[
          { id: 'usa', label: 'USA' },
          { id: 'canada', label: 'Canada' },
          { id: 'india', label: 'India' },
          { id: 'singapore', label: 'Singapore' }
        ].map((h) => (
          <button
            key={h.id}
            onClick={() => setSelectedHub(h.id)}
            style={{
              padding: '0.65rem 0.25rem',
              textAlign: 'center',
              border: 'none',
              background: selectedHub === h.id ? '#3A3336' : 'transparent',
              color: selectedHub === h.id ? '#FFFFFF' : '#A8A0A3',
              borderBottom: selectedHub === h.id ? '2px solid #981B25' : '2px solid transparent',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {h.label}
          </button>
        ))}
      </div>

      {/* Hub Details Panel */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#A8A0A3', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {current.region}
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
              {current.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#C2BCBE', marginTop: '2px' }}>
              Key Centers: {current.city}
            </div>
          </div>
          <span className="pill-badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', border: '1px solid #10B981', fontSize: '0.7rem' }}>
            {current.status}
          </span>
        </div>

        {/* Focus & Continuity Matrix */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ backgroundColor: '#252022', border: '1px solid #3F373A', padding: '0.85rem 1rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.7rem', color: '#A8A0A3', textTransform: 'uppercase', marginBottom: '3px' }}>
              Core Technical Mandate
            </div>
            <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>
              {current.focus}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            <div style={{ backgroundColor: '#252022', border: '1px solid #3F373A', padding: '0.75rem 1rem', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.7rem', color: '#A8A0A3' }}>Operating Model</div>
              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#00A4EF', marginTop: '2px' }}>
                {current.continuity}
              </div>
            </div>
            <div style={{ backgroundColor: '#252022', border: '1px solid #3F373A', padding: '0.75rem 1rem', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.7rem', color: '#A8A0A3' }}>Cadence</div>
              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#10B981', marginTop: '2px' }}>
                {current.sprintVelocity}
              </div>
            </div>
          </div>
        </div>

        {/* Global Connection Strip */}
        <div style={{ borderTop: '1px solid #3F373A', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#A8A0A3' }}>
          <span>USA · Canada · India · Singapore</span>
          <span style={{ color: '#F87171', fontWeight: 600 }}>Seamless Co-location</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. TeamExtensionFramework:
 * Interactive engineering pod architecture replacing mountain stock photos in the About page.
 * Illustrates how Pro17 integrates directly with client teams.
 */
export function TeamExtensionFramework() {
  const [activeTier, setActiveTier] = useState(0);

  const tiers = [
    {
      title: "Embedded Agile Pods",
      badge: "Delivery Layer",
      desc: "Cross-functional engineering pods (Data Engineers, Cloud Architects, Full-stack Developers) co-located with your product owners for rapid weekly velocity.",
      metrics: ["Direct pairing with client tech leads", "Daily standup integration", "Zero hand-off bureaucracy"]
    },
    {
      title: "Solutions & Architecture Governance",
      badge: "Strategy Layer",
      desc: "Senior principal architects ensure technical decisions align with long-term enterprise scalability, security standards, and cost optimization.",
      metrics: ["Enterprise architecture review", "SOC & ISO 27001 compliance validation", "Total Cost of Ownership optimization"]
    },
    {
      title: "Follow-The-Sun Continuity",
      badge: "Operations Layer",
      desc: "Multi-timezone coverage across USA, Canada, India, and Singapore ensuring ongoing 24/7 pipeline health, incident response, and continuous build progression.",
      metrics: ["Round-the-clock progress", "Immediate turnaround on blockers", "High SLA reliability"]
    }
  ];

  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #E7E5E3',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 15px 35px rgba(0,0,0,0.06)'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '1rem 1.25rem',
          backgroundColor: '#F6F4F2',
          borderBottom: '1px solid #E7E5E3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Users size={18} color="#981B25" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2D282A' }}>
            OPERATING MODEL ARCHITECTURE
          </span>
        </div>
        <span className="pill-badge" style={{ backgroundColor: '#FFFFFF', color: '#2D282A', border: '1px solid #E7E5E3', fontSize: '0.72rem' }}>
          Extension Model
        </span>
      </div>

      {/* Tier Switcher */}
      <div style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {tiers.map((t, idx) => (
            <div
              key={t.title}
              onClick={() => setActiveTier(idx)}
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: activeTier === idx ? '1.5px solid #981B25' : '1px solid #E7E5E3',
                backgroundColor: activeTier === idx ? '#FAF9F8' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#2D282A' }}>{t.title}</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: activeTier === idx ? '#981B25' : '#6B6B70' }}>
                  {t.badge}
                </span>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#6B6B70', lineHeight: 1.5, margin: 0 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Active Tier Highlights */}
        <div style={{ backgroundColor: '#F6F4F2', padding: '1rem', borderRadius: '10px', border: '1px solid #E7E5E3' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2D282A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            Operating Guarantees:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {tiers[activeTier].metrics.map((m) => (
              <div key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#2D282A' }}>
                <CheckCircle2 size={13} color="#981B25" />
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
