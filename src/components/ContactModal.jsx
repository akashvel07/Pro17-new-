import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Send, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import SpiderButton from './SpiderButton';

export default function ContactModal({ isOpen, onClose, initialInterest = 'Data & AI' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    areaOfInterest: initialInterest,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submissionRef, setSubmissionRef] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid work email address.';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required.';
    if (!formData.message.trim()) errs.message = 'Please provide brief details about your inquiry.';
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

    // Simulate reliable submission and persistent local logging
    setTimeout(() => {
      const refId = `P17-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionRef(refId);

      const payload = {
        ...formData,
        refId,
        submittedAt: new Date().toISOString()
      };

      try {
        const stored = JSON.parse(localStorage.getItem('pro17_inquiries') || '[]');
        stored.push(payload);
        localStorage.setItem('pro17_inquiries', JSON.stringify(stored));
      } catch (e) {
        console.warn('Storage fallback', e);
      }

      setStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      areaOfInterest: initialInterest,
      message: ''
    });
    setErrors({});
    setStatus('idle');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(45, 40, 42, 0.7)',
        backdropFilter: 'blur(6px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '580px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderBottom: '1px solid #E7E5E3',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#F6F4F2'
          }}
        >
          <div>
            <div className="label-eyebrow" style={{ marginBottom: '0.35rem' }}>Let's Talk</div>
            <h3 style={{ fontSize: '1.45rem', color: '#2D282A', fontWeight: 700 }}>
              Let's Build What's Next
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6B6B70', marginTop: '0.25rem' }}>
              Discuss your challenges, explore product demos, or start a long-term partnership.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              padding: '0.4rem',
              borderRadius: '6px',
              color: '#6B6B70',
              cursor: 'pointer'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem', overflowY: 'auto' }}>
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
              <h4 style={{ fontSize: '1.35rem', color: '#2D282A', marginBottom: '0.5rem' }}>
                Thank you for reaching out
              </h4>
              <p style={{ color: '#6B6B70', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Your enquiry has been received under reference <strong>{submissionRef}</strong>. Our engineering and solutions team will review your requirements and respond promptly at <strong>{formData.email}</strong>.
              </p>
              <div
                style={{
                  backgroundColor: '#F6F4F2',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#242326',
                  marginBottom: '1.75rem'
                }}
              >
                Direct contact: <a href={`mailto:${BRAND_INFO.contactEmail}`} style={{ color: '#981B25', fontWeight: 600 }}>{BRAND_INFO.contactEmail}</a>
              </div>
              <button onClick={handleReset} className="btn btn-navy" style={{ width: '100%' }}>
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="modal-name">
                  Full Name <span style={{ color: '#981B25' }}>*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="form-error-msg">{errors.name}</div>}
              </div>

              {/* Email & Company */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-email">
                    Work Email <span style={{ color: '#981B25' }}>*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="form-error-msg">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-company">
                    Company Name <span style={{ color: '#981B25' }}>*</span>
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    name="company"
                    className="form-input"
                    placeholder="e.g. Apex Global"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {errors.company && <div className="form-error-msg">{errors.company}</div>}
                </div>
              </div>

              {/* Area of Interest */}
              <div className="form-group">
                <label className="form-label" htmlFor="modal-interest">
                  Area of Interest
                </label>
                <select
                  id="modal-interest"
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
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="modal-message">
                  How can we help? <span style={{ color: '#981B25' }}>*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  className="form-textarea"
                  placeholder="Tell us about your upcoming project, technical landscape, or questions..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <div className="form-error-msg">{errors.message}</div>}
              </div>

              {/* Privacy Notice */}
              <p style={{ fontSize: '0.78rem', color: '#6B6B70', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                We respect your privacy. Inquiries are handled strictly by Pro17Analytics engineering and solution specialists in accordance with enterprise data protection standards.
              </p>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <SpiderButton
                  type="submit"
                  disabled={status === 'submitting'}
                  size={48}
                  style={{ width: '100%', flex: 1 }}
                  buttonStyle={{ width: '100%', padding: '0 1.5rem', fontSize: '0.95rem' }}
                >
                  {status === 'submitting' ? (
                    'Submitting Enquiry...'
                  ) : (
                    <>
                      <span>Start a Conversation</span>
                      <Send size={16} />
                    </>
                  )}
                </SpiderButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
