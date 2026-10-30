import React, { useState } from 'react';
import { 
  Radio, 
  Activity, 
  Database, 
  CheckCircle2, 
  Cpu, 
  BarChart3, 
  MessageSquare, 
  Layers, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';

/* 1. BinaraIQ™ Simulator: Live Asset Intelligence Console */
export function BinaraIQDemo() {
  const [activeAsset, setActiveAsset] = useState(0);

  const assets = [
    { id: 'AST-8041', name: 'Mobile Surgical Imaging Unit', type: 'Clinical Asset', location: 'Wing B · OR Suite 4', signal: 'UHF Active', status: 'Optimal', temp: '20.4°C', battery: '94%' },
    { id: 'AST-5120', name: 'Automated Guided Vehicle (AGV-03)', type: 'Robotics', location: 'Assembly Line 2 · Bay 6', signal: 'IoT Telemetry', status: 'In Transit', temp: '34.1°C', battery: '78%' },
    { id: 'AST-9932', name: 'Cold-Chain Biological Consignment', type: 'Cold Storage', location: 'Logistics Dock 12', signal: 'Sensory Beacon', status: 'Monitored', temp: '-18.2°C', battery: '99%' }
  ];

  return (
    <div style={{ backgroundColor: '#07172B', borderRadius: '14px', border: '1px solid #1E3A5F', overflow: 'hidden', color: '#FFFFFF', fontSize: '0.875rem' }}>
      {/* Console Top Bar */}
      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0B2340' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }}></div>
          <span style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', color: '#DCEEF5' }}>BINARAIQ™ LIVE ASSET RADAR</span>
        </div>
        <div style={{ fontSize: '0.75rem', color: '#7E9BB8', display: 'flex', gap: '0.75rem' }}>
          <span>Protocol: UHF / BLE / QR</span>
          <span>Status: 100% Synced</span>
        </div>
      </div>

      {/* Asset Switcher */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #1E3A5F', backgroundColor: '#091E36' }}>
        {assets.map((asset, idx) => (
          <button
            key={asset.id}
            onClick={() => setActiveAsset(idx)}
            style={{
              padding: '0.65rem 0.5rem',
              textAlign: 'center',
              background: activeAsset === idx ? '#102C4E' : 'transparent',
              border: 'none',
              borderBottom: activeAsset === idx ? '2px solid #981B25' : 'none',
              color: activeAsset === idx ? '#FFFFFF' : '#88A3BF',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {asset.id}
          </button>
        ))}
      </div>

      {/* Asset Detail */}
      <div style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>{assets[activeAsset].name}</div>
            <div style={{ fontSize: '0.75rem', color: '#88A3BF', marginTop: '2px' }}>{assets[activeAsset].type} · {assets[activeAsset].location}</div>
          </div>
          <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', border: '1px solid #10B981', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
            {assets[activeAsset].status}
          </span>
        </div>

        {/* Telemetry Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          <div style={{ backgroundColor: '#0B2340', padding: '0.75rem', borderRadius: '8px', border: '1px solid #16365C' }}>
            <div style={{ fontSize: '0.7rem', color: '#7E9BB8' }}>Signal Type</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '2px', color: '#DCEEF5' }}>{assets[activeAsset].signal}</div>
          </div>
          <div style={{ backgroundColor: '#0B2340', padding: '0.75rem', borderRadius: '8px', border: '1px solid #16365C' }}>
            <div style={{ fontSize: '0.7rem', color: '#7E9BB8' }}>Sensor Reading</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '2px', color: '#DCEEF5' }}>{assets[activeAsset].temp}</div>
          </div>
          <div style={{ backgroundColor: '#0B2340', padding: '0.75rem', borderRadius: '8px', border: '1px solid #16365C' }}>
            <div style={{ fontSize: '0.7rem', color: '#7E9BB8' }}>Battery Health</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '2px', color: '#10B981' }}>{assets[activeAsset].battery}</div>
          </div>
        </div>

        <div style={{ marginTop: '1rem', padding: '0.6rem 0.8rem', backgroundColor: 'rgba(152, 27, 37, 0.12)', border: '1px solid rgba(152, 27, 37, 0.3)', borderRadius: '6px', fontSize: '0.75rem', color: '#F6A8B0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Radio size={14} color="#981B25" />
          <span>Real-time predictive telemetry: No maintenance anomalies detected in past 30 days.</span>
        </div>
      </div>
    </div>
  );
}

/* 2. ProNexaIQ™ Simulator: AI Data Control Tower */
export function ProNexaIQDemo() {
  const [activeTab, setActiveTab] = useState('quality');

  return (
    <div style={{ backgroundColor: '#07172B', borderRadius: '14px', border: '1px solid #1E3A5F', overflow: 'hidden', color: '#FFFFFF', fontSize: '0.875rem' }}>
      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0B2340' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Cpu size={16} color="#00A4EF" />
          <span style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', color: '#DCEEF5' }}>PRONEXAIQ™ DATA CONTROL TOWER</span>
        </div>
        <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>● Pipelines Healthy</span>
      </div>

      <div style={{ padding: '1.25rem' }}>
        {/* Control Tower Architecture Pipeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1.25rem', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#0B2340', border: '1px solid #1F426F', padding: '0.6rem 0.4rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: '#88A3BF' }}>01 CONNECT</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>14 Connectors</div>
          </div>
          <div style={{ backgroundColor: '#0B2340', border: '1px solid #1F426F', padding: '0.6rem 0.4rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: '#88A3BF' }}>02 GOVERN</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00A4EF', marginTop: '2px' }}>Catalog &amp; RBAC</div>
          </div>
          <div style={{ backgroundColor: '#0B2340', border: '1px solid #1F426F', padding: '0.6rem 0.4rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: '#88A3BF' }}>03 OBSERVE</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', marginTop: '2px' }}>99.8% Quality</div>
          </div>
          <div style={{ backgroundColor: '#0B2340', border: '1px solid #1F426F', padding: '0.6rem 0.4rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: '#88A3BF' }}>04 ACT</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#981B25', marginTop: '2px' }}>Auto-Dispatch</div>
          </div>
        </div>

        {/* Live Observability Matrix */}
        <div style={{ backgroundColor: '#091E36', borderRadius: '8px', padding: '1rem', border: '1px solid #16365C' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#DCEEF5' }}>AI-Ready Data Assets</span>
            <span style={{ fontSize: '0.7rem', color: '#7E9BB8' }}>Auto-validated across 24 rules</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.2rem' }}>
                <span style={{ color: '#B4C4D6' }}>Customer 360 Feature Store</span>
                <span style={{ color: '#10B981', fontWeight: 600 }}>100% Integrity</span>
              </div>
              <div style={{ width: '100%', height: '5px', backgroundColor: '#102C4E', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#10B981' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.2rem' }}>
                <span style={{ color: '#B4C4D6' }}>Enterprise Financial Ledgers</span>
                <span style={{ color: '#00A4EF', fontWeight: 600 }}>99.8% Verified</span>
              </div>
              <div style={{ width: '100%', height: '5px', backgroundColor: '#102C4E', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '99.8%', height: '100%', backgroundColor: '#00A4EF' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. Educe ERP Simulator: Modern Business Cockpit */
export function EduceERPDemo() {
  const [tab, setTab] = useState('finance');

  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', border: '1px solid #E7E5E3', overflow: 'hidden', color: '#242326', fontSize: '0.875rem', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
      {/* Top Header */}
      <div style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid #E7E5E3', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F6F4F2' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#0B2340', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem' }}>e</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0B2340' }}>Educe ERP</div>
            <div style={{ fontSize: '0.65rem', color: '#6B6B70' }}>Intelligent Business Management</div>
          </div>
        </div>
        <span className="pill-badge" style={{ fontSize: '0.7rem' }}>Integrated Operations</span>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #E7E5E3', backgroundColor: '#FFFFFF' }}>
        {[
          { id: 'finance', label: 'Finance & P&L' },
          { id: 'sales', label: 'Sales Orders' },
          { id: 'procurement', label: 'Procurement & Stock' }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex: 1,
              padding: '0.7rem 0.5rem',
              border: 'none',
              background: 'none',
              borderBottom: tab === t.id ? '2px solid #981B25' : 'none',
              color: tab === t.id ? '#981B25' : '#6B6B70',
              fontWeight: tab === t.id ? 700 : 500,
              fontSize: '0.78rem',
              cursor: 'pointer'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: '1.25rem' }}>
        {tab === 'finance' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#F6F4F2', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.7rem', color: '#6B6B70' }}>Monthly Revenue Run-Rate</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0B2340', marginTop: '2px' }}>$1,420,800</div>
                <div style={{ fontSize: '0.68rem', color: '#059669', fontWeight: 600, marginTop: '2px' }}>+12.4% vs budget</div>
              </div>
              <div style={{ padding: '0.75rem', backgroundColor: '#F6F4F2', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.7rem', color: '#6B6B70' }}>Days Sales Outstanding (DSO)</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0B2340', marginTop: '2px' }}>34 Days</div>
                <div style={{ fontSize: '0.68rem', color: '#059669', fontWeight: 600, marginTop: '2px' }}>-6 Days improvement</div>
              </div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6B6B70', borderTop: '1px solid #E7E5E3', paddingTop: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#059669" />
              <span>Multi-entity reconciliation automated across international accounts.</span>
            </div>
          </div>
        )}

        {tab === 'sales' && (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: '#F6F4F2', borderRadius: '6px', fontSize: '0.78rem' }}>
                <span style={{ fontWeight: 600 }}>SO-8849 · Enterprise Contract</span>
                <span style={{ color: '#059669', fontWeight: 600 }}>Dispatched</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: '#F6F4F2', borderRadius: '6px', fontSize: '0.78rem' }}>
                <span style={{ fontWeight: 600 }}>SO-8850 · Distributor Order</span>
                <span style={{ color: '#D97706', fontWeight: 600 }}>Credit Verification</span>
              </div>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#6B6B70' }}>Real-time sync with customer fulfillment and invoice automation.</div>
          </div>
        )}

        {tab === 'procurement' && (
          <div>
            <div style={{ padding: '0.75rem', backgroundColor: '#F6F4F2', borderRadius: '8px', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600 }}>
                <span>Inventory Turn Ratio</span>
                <span style={{ color: '#0B2340' }}>6.2x</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#6B6B70', marginTop: '0.2rem' }}>Automated purchase re-orders trigger at dynamic minimum safety thresholds.</div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6B6B70', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#059669" />
              <span>Direct vendor EDI integration active.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* 4. ProSageIQ™ Simulator: Conversational Enterprise Intelligence */
export function ProSageIQDemo() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const prompts = [
    {
      q: "Compare Q3 operating margins across manufacturing plants",
      a: "Analyzing ERP ledgers and plant telemetry: Plant Alpha achieved a 22.4% operating margin (highest), driven by automated batch scheduling. Plant Beta averaged 18.1%, with a 4.2% dip attributed to auxiliary equipment maintenance in August."
    },
    {
      q: "What were our top 3 supply chain bottlenecks this month?",
      a: "1. Logistics inbound buffer at Dock 4 (average 42 min delay).\n2. Critical SKU component AST-401 custom clearance backlog.\n3. Regional warehouse cross-dock handoff variance."
    },
    {
      q: "Show projected inventory shortage risks for next quarter",
      a: "Based on historical run-rates and incoming ERP sales orders, 2 raw material categories (Polymer Batch 9 and Circuit Modules) will reach re-order threshold within 18 days if current production rate sustains."
    }
  ];

  return (
    <div style={{ backgroundColor: '#07172B', borderRadius: '14px', border: '1px solid #1E3A5F', overflow: 'hidden', color: '#FFFFFF', fontSize: '0.875rem' }}>
      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0B2340' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Sparkles size={16} color="#981B25" />
          <span style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', color: '#DCEEF5' }}>PROSAGEIQ™ ENTERPRISE COPILOT</span>
        </div>
        <span style={{ fontSize: '0.75rem', color: '#88A3BF' }}>Natural Language Query</span>
      </div>

      <div style={{ padding: '1.25rem' }}>
        {/* Sample Prompt Selector */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.72rem', color: '#88A3BF', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Click an enterprise question to test:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {prompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPrompt(idx)}
                style={{
                  textAlign: 'left',
                  padding: '0.55rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: selectedPrompt === idx ? '#102C4E' : '#0B2340',
                  border: `1px solid ${selectedPrompt === idx ? '#00A4EF' : '#1F3856'}`,
                  color: selectedPrompt === idx ? '#FFFFFF' : '#B4C4D6',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Search size={12} color={selectedPrompt === idx ? '#00A4EF' : '#7E9BB8'} />
                <span>"{p.q}"</span>
              </button>
            ))}
          </div>
        </div>

        {/* Simulated Conversational Response */}
        <div style={{ backgroundColor: '#091E36', borderRadius: '8px', padding: '1rem', border: '1px solid #16365C' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '18px', height: '18px', borderRadius: '4px', backgroundColor: '#981B25', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={11} color="#FFFFFF" />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#DCEEF5' }}>ProSageIQ Response:</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
            {prompts[selectedPrompt].a}
          </p>
        </div>
      </div>
    </div>
  );
}
