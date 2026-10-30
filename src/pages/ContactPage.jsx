import React, { useState } from 'react';
import { Mail, Globe, MapPin, Send, CheckCircle, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, CAPABILITIES, PRODUCTS } from '../data/content';
import PartnerBadges from '../components/PartnerBadges';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    areaOfInterest: 'Data & AI',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [refId, setRefId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required.';
    if (!formData.message.trim()) errs.message = 'Please provide a brief outline of your goals or questions.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    setTimeout(() => {
      const generatedRef = `P17-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefId(generatedRef);

      const record = {
        ...formData,
        referenceId: generatedRef,
        submittedAt: new Date().toISOString()
      };

      try {
        const existing = JSON.parse(localStorage.getItem('pro17_inquiries') || '[]');
        existing.push(record);
        localStorage.setItem('pro17_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.warn('Storage fallback', err);
      }

      setStatus('success');
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      areaOfInterest: 'Data & AI',
      message: ''
    });
    setErrors({});
    setStatus('idle');
  };

  return (
    <main>
      {/* Contact Header */}
      <section className="section-spacing bg-white" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: '3rem' }}>
        <div className="site-container">
          <div style={{ maxWidth: '780px' }}>
            <span className="label-eyebrow">Contact &amp; Engagement</span>
            <h1 className="display-title" style={{ marginTop: '0.75rem', marginBottom: '1.25rem', color: '#0B2340' }}>
              Let’s Build <span className="text-red">What’s Next.</span>
            </h1>
            <p className="body-large">
              Discuss your challenges, explore our products, request a live demo, or discover how we can work together as an extension of your team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-spacing bg-warm-gray" style={{ borderTop: '1px solid #E7E5E3', borderBottom: '1px solid #E7E5E3' }}>
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Contact Info & Delivery Channels */}
            <div>
              <div style={{ backgroundColor: '#0B2340', borderRadius: '16px', padding: '2.5rem', color: '#FFFFFF', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 700 }}>
                  Direct Contact
                </h3>
                <p style={{ color: '#B4C4D6', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Our solution architects and engineering leads are available to assist with solution scoping, capability assessments, and product demonstrations.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#102C4E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={18} color="#981B25" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#88A3BF', textTransform: 'uppercase' }}>Email Inquiry</div>
                      <a href={`mailto:${BRAND_INFO.contactEmail}`} style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1rem' }}>
                        {BRAND_INFO.contactEmail}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#102C4E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={18} color="#00A4EF" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#88A3BF', textTransform: 'uppercase' }}>Official Portal</div>
                      <a href={`https://${BRAND_INFO.website}`} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1rem' }}>
                        {BRAND_INFO.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Delivery Hubs */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '2rem', border: '1px solid #E7E5E3' }}>
                <h4 style={{ fontSize: '1.15rem', color: '#0B2340', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Global Delivery Presence
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#6B6B70', marginBottom: '1.25rem' }}>
                  Coordinated multi-country operations providing enterprise coverage:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                  {BRAND_INFO.globalLocations.map((loc) => (
                    <div key={loc} style={{ padding: '0.75rem', backgroundColor: '#F6F4F2', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={15} color="#981B25" />
                      <span style={{ fontWeight: 600, color: '#0B2340', fontSize: '0.9rem' }}>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Functional Inquiry Form */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: 'clamp(2rem, 4vw, 3rem)',
                border: '1px solid #E7E5E3',
                boxShadow: '0 10px 35px rgba(0,0,0,0.04)'
              }}
            >
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(152, 27, 37, 0.08)',
                      color: '#981B25',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem'
                    }}
                  >
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#0B2340', marginBottom: '0.75rem' }}>
                    Inquiry Received Successfully
                  </h3>
                  <p style={{ color: '#6B6B70', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Your inquiry has been registered under reference <strong>{refId}</strong>. Our enterprise team will follow up at <strong>{formData.email}</strong>.
                  </p>
                  <div style={{ backgroundColor: '#F6F4F2', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '2rem' }}>
                    For immediate escalations, email directly: <a href={`mailto:${BRAND_INFO.contactEmail}`} style={{ color: '#981B25', fontWeight: 600 }}>{BRAND_INFO.contactEmail}</a>
                  </div>
                  <button onClick={handleReset} className="btn btn-navy" style={{ width: '100%' }}>
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontSize: '1.5rem', color: '#0B2340', marginBottom: '0.35rem', fontWeight: 700 }}>
                    Start a Conversation
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#6B6B70', marginBottom: '1.75rem' }}>
                    Complete the details below and an engineering specialist will connect with you.
                  </p>

                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Full Name <span style={{ color: '#981B25' }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="e.g. David Mitchell"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="form-error-msg">{errors.name}</div>}
                  </div>

                  {/* Email & Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        Work Email <span style={{ color: '#981B25' }}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="david@enterprise.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="form-error-msg">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-company">
                        Company Name <span style={{ color: '#981B25' }}>*</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        className="form-input"
                        placeholder="e.g. Global Logistics Inc."
                        value={formData.company}
                        onChange={handleChange}
                      />
                      {errors.company && <div className="form-error-msg">{errors.company}</div>}
                    </div>
                  </div>

                  {/* Area of Interest */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-interest">
                      Primary Area of Interest
                    </label>
                    <select
                      id="contact-interest"
                      name="areaOfInterest"
                      className="form-select"
                      value={formData.areaOfInterest}
                      onChange={handleChange}
                    >
                      <option value="Data & AI">Data &amp; AI</option>
                      <option value="Integration & Automation">Integration &amp; Automation</option>
                      <option value="Cloud & Digital Engineering">Cloud &amp; Digital Engineering</option>
                      <option value="IoT & Connected Operations">IoT &amp; Connected Operations</option>
                      <option value="Enterprise ERP">Enterprise Application &amp; ERP</option>
                      <option value="Products (BinaraIQ / ProNexaIQ / Educe ERP / ProSageIQ)">Products &amp; Platforms Demo</option>
                      <option value="Strategic Partnerships">Strategic Partnerships</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      Project Details / Inquiry Message <span style={{ color: '#981B25' }}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      className="form-textarea"
                      placeholder="Please share your objectives, key systems involved, or timeline..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <div className="form-error-msg">{errors.message}</div>}
                  </div>

                  {/* Privacy note */}
                  <div style={{ fontSize: '0.8rem', color: '#6B6B70', marginBottom: '1.75rem', lineHeight: 1.5 }}>
                    By submitting this form, you acknowledge that your information will be processed in accordance with our enterprise confidentiality and data privacy practices. We never share contact details with third parties.
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.95rem' }}
                  >
                    {status === 'submitting' ? (
                      'Submitting Inquiry...'
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Verified Partner Marks */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <span className="label-eyebrow">Enterprise Credentials</span>
            <h3 style={{ fontSize: '1.65rem', color: '#0B2340', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Verified Partner &amp; Compliance Standards
            </h3>
            <p style={{ color: '#6B6B70', fontSize: '0.9rem' }}>
              Only official, approved credentials backed by Microsoft, TimeXtender, and global audit standards.
            </p>
          </div>
          <PartnerBadges isDark={false} />
        </div>
      </section>
    </main>
  );
}
