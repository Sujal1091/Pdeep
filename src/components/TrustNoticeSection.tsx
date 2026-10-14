import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Lock,
  HelpCircle,
  Mail
} from 'lucide-react';
import { POLICIES_NOTICE } from '../data/content';

export const TrustNoticeSection: React.FC = () => {
  const [testEmail, setTestEmail] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    status: 'idle' | 'valid' | 'invalid';
    message: string;
  }>({ status: 'idle', message: '' });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = testEmail.trim().toLowerCase();
    if (!clean) {
      setVerificationResult({
        status: 'idle',
        message: ''
      });
      return;
    }

    if (clean.endsWith('@pdib.in')) {
      setVerificationResult({
        status: 'valid',
        message: `✅ Authorized Domain Verified: "${clean}" ends with the official institute domain (@pdib.in). This is recognized as an official channel.`
      });
    } else {
      setVerificationResult({
        status: 'invalid',
        message: `⚠️ WARNING: "${clean}" is NOT an authorized domain. All legitimate PDEEPS correspondence comes strictly from @pdib.in. Never share payments or sensitive details with personal Gmail or unverified senders.`
      });
    }
  };

  return (
    <section id="verification" className="section-padding trust-notice-section">
      <div className="container">
        {/* Header */}
        <div className="section-header trust-header">
          <span className="pill-badge pill-badge-dark">
            <Lock size={14} />
            Compliance & Authenticity Guarantee
          </span>
          <h2>Official Communication, Training & Payment Policy</h2>
          <p>
            Please review our mandatory operational transparency standards. Protect yourself from unauthorized communications and understand our zero placement fee guarantee.
          </p>
        </div>

        {/* 2-Column Layout: Policies List on Left, Interactive Verifier on Right */}
        <div className="trust-content-grid">
          {/* Left Column: Official Policy Statements */}
          <div className="policies-cards-col">
            {POLICIES_NOTICE.points.map((pt, idx) => (
              <div key={idx} className="policy-block-card">
                <div className="policy-card-icon">
                  {idx === 0 ? <Mail size={22} /> :
                    idx === 1 ? <ShieldCheck size={22} /> :
                      idx === 4 ? <AlertTriangle size={22} /> :
                        <CheckCircle2 size={22} />}
                </div>
                <div className="policy-card-body">
                  <h4 className="policy-item-title">{pt.title}</h4>
                  <p className="policy-item-desc">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive Sender Email Checker Widget */}
          <div className="interactive-verifier-col">
            <div className="verifier-widget-box">
              <div className="verifier-badge">
                <ShieldCheck size={18} />
                <span>Instant Sender Check Tool</span>
              </div>

              <h3>Verify Institute Email Authenticity</h3>
              <p>
                Received an email claiming to represent PDEEPS Institute? Check the sender address below to verify if it belongs to our authorized domain (<strong>@pdib.in</strong>).
              </p>

              <form onSubmit={handleVerify} className="verifier-form">
                <div className="form-input-wrap">
                  <Mail className="input-icon" size={18} />
                  <input
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    placeholder="e.g. hr@pdib.in or hr@pdib.in"
                    className="verifier-input"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-accent verifier-btn">
                  Check Authenticity
                </button>
              </form>

              {/* Result Notification */}
              {verificationResult.status !== 'idle' && (
                <div className={`verification-result-box ${verificationResult.status}`}>
                  {verificationResult.status === 'valid' ? (
                    <CheckCircle2 size={22} className="res-icon success" />
                  ) : (
                    <AlertTriangle size={22} className="res-icon warning" />
                  )}
                  <p>{verificationResult.message}</p>
                </div>
              )}

              {/* Policy Badges inside Widget */}
              <div className="verifier-rules-list">
                <div className="rule-item">
                  <CheckCircle2 size={15} className="rule-check" />
                  <span>Only <strong>@pdib.in</strong> emails are legitimate</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={15} className="rule-check" />
                  <span>No placement fees charged — 100% policy</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={15} className="rule-check" />
                  <span>Stipends disbursed upon task milestones</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={15} className="rule-check" />
                  <span>Training fee is strictly non-refundable</span>
                </div>
              </div>

              <div className="verifier-support-note">
                <HelpCircle size={15} />
                <span>Still have doubts? Email our compliance team directly at <strong>hr@pdib.in</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
