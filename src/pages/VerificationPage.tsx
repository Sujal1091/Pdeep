import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Mail, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  FileText
} from 'lucide-react';
import { POLICIES_NOTICE } from '../data/content';

interface VerificationPageProps {
  onOpenEnquiry: () => void;
}

export function VerificationPage({ onOpenEnquiry }: VerificationPageProps) {
  const [inputEmail, setInputEmail] = useState('');
  const [result, setResult] = useState<{ status: 'idle' | 'valid' | 'invalid'; message: string }>({
    status: 'idle',
    message: ''
  });

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputEmail.trim().toLowerCase();
    if (!clean) return;

    if (clean.endsWith('@pdib.in')) {
      setResult({
        status: 'valid',
        message: `✅ AUTHENTIC DOMAIN VERIFIED: "${clean}" is recognized as an authorized official email address under the PDEEPS Institute domain (@pdib.in).`
      });
    } else {
      setResult({
        status: 'invalid',
        message: `⚠️ CAUTION: "${clean}" is NOT an authorized institute sender! All legitimate communications from PDEEPS Institute originate exclusively from @pdib.in. Never transfer funds or disclose personal credentials to personal Gmail or unverified senders.`
      });
    }
  };

  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <ShieldCheck size={14} />
            Transparency & Safeguard Policy
          </span>
          <h1>Official Communication, Training & Payment Policy</h1>
          <p className="subpage-lead">
            Mandatory notice for all candidates, applicants, and partners regarding authorized communications, training charges, and zero job placement fees.
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Policy & Verification</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding subpage-content">
        <div className="container">
          <div className="policy-page-top-alert">
            <div className="alert-icon-col">
              <ShieldAlert size={32} />
            </div>
            <div className="alert-text-col">
              <h3>Important Notice Regarding Official Communications</h3>
              <p>
                All official communication—including training letters, onboarding details, and project-related instructions—will be sent strictly through the institute's authorized official email domain: <strong>@pdib.in</strong>. Candidates are strictly advised to verify the sender's email address before responding to any communication.
              </p>
            </div>
          </div>

          <div className="verification-page-grid">
            {/* Policy Points */}
            <div className="policy-points-detailed-stack">
              {POLICIES_NOTICE.points.map((p, idx) => (
                <div key={idx} className="policy-card-extended">
                  <div className="policy-ext-header">
                    <span className="policy-ext-num">0{idx + 1}</span>
                    <h3>{p.title}</h3>
                  </div>
                  <p className="policy-ext-body">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Verifier Tool Card */}
            <div className="verifier-tool-sticky">
              <div className="verifier-widget-box">
                <div className="verifier-badge">
                  <ShieldCheck size={18} />
                  <span>Sender Authenticity Verifier</span>
                </div>

                <h3>Verify Sender Email Address</h3>
                <p>
                  Received an email or payment request claiming to be from PDEEPS Institute? Check if the domain is authorized below.
                </p>

                <form onSubmit={handleCheck} className="verifier-form">
                  <div className="form-input-wrap">
                    <Mail className="input-icon" size={18} />
                    <input 
                      type="email"
                      value={inputEmail}
                      onChange={(e) => setInputEmail(e.target.value)}
                      placeholder="e.g. hr@pdib.in or contact@pdib.in"
                      className="verifier-input"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-accent verifier-btn">
                    Check Authenticity
                  </button>
                </form>

                {result.status !== 'idle' && (
                  <div className={`verification-result-box ${result.status}`}>
                    {result.status === 'valid' ? (
                      <CheckCircle2 size={22} className="res-icon success" />
                    ) : (
                      <AlertTriangle size={22} className="res-icon warning" />
                    )}
                    <p>{result.message}</p>
                  </div>
                )}

                <div className="verifier-rules-list">
                  <div className="rule-item">
                    <CheckCircle2 size={15} className="rule-check" />
                    <span>Authorized domain: <strong>@pdib.in</strong></span>
                  </div>
                  <div className="rule-item">
                    <CheckCircle2 size={15} className="rule-check" />
                    <span>No separate job placement fee charged</span>
                  </div>
                  <div className="rule-item">
                    <CheckCircle2 size={15} className="rule-check" />
                    <span>Training fees are non-refundable</span>
                  </div>
                  <div className="rule-item">
                    <CheckCircle2 size={15} className="rule-check" />
                    <span>Stipends disbursed per approved work deliverables</span>
                  </div>
                </div>

                <div className="verifier-support-note">
                  <HelpCircle size={15} />
                  <span>
                    Report suspicious communications directly to our compliance desk: <strong>contact@pdib.in</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="subpage-action-banner">
            <div>
              <h3>Have Questions Regarding Our Terms & Policies?</h3>
              <p>Review our Terms of Service or submit an enquiry to our admissions team.</p>
            </div>
            <div className="action-buttons-wrap">
              <Link to="/terms" className="btn btn-outline-dark btn-lg">
                <FileText size={18} />
                <span>Read Terms of Service</span>
              </Link>
              <button onClick={onOpenEnquiry} className="btn btn-accent btn-lg">
                <span>Contact Admissions</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
