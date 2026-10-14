import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Clock,
  Phone,
  
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import type { EnquiryFormData } from '../types';

export function ContactPage() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    occupation: 'Student',
    interestedProject: 'project-01',
    workMode: 'Flexible Hours (Part-time)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [acknowledgedPolicy, setAcknowledgedPolicy] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'PDEEPS-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <Mail size={14} />
            Connect With Admissions
          </span>
          <h1>Contact Us & Apply for Projects</h1>
          <p className="subpage-lead">
            Submit your application for upcoming training batches or connect with our admissions desk for program eligibility.
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Contact & Apply</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding subpage-content">
        <div className="container">
          <div className="contact-page-layout">
            {/* Left: Contact Info & Safety Badges */}
            <div className="contact-info-panel">
              <div className="contact-card-box">
                <span className="card-kicker">Official Channels</span>
                <h3>PDEEPS Institute</h3>
                <p className="contact-desc">
                  {COMPANY_INFO.name} provides industry-oriented e-commerce training and structured project opportunities.
                </p>

                <div className="contact-methods-stack">
                  <div className="contact-method-item">
                    <div className="c-icon-circle phone-call-accent">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="c-label">Admissions Hotline (Call)</span>
                      <a href="tel:+918284081752" className="contact-phone-direct">
                        <strong>Call: 8284081752</strong>
                        <span className="sub-phone-tag">(+91 82840 81752)</span>
                      </a>
                    </div>
                  </div>


                  <div className="contact-method-item">
                    <div className="c-icon-circle">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="c-label">Official Authorized Domain</span>
                      <strong>@pdib.in</strong>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="c-icon-circle">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="c-label">Admissions & Inquiries</span>
                      <a href="mailto:contact@pdib.in">contact@pdib.in</a>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="c-icon-circle">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="c-label">Inquiry Response Hours</span>
                      <strong>Monday – Saturday (10:00 AM – 6:30 PM IST)</strong>
                    </div>
                  </div>
                </div>

                {/* Important Notice Callout */}
                <div className="official-domain-guard">
                  <div className="guard-header">
                    <ShieldCheck size={18} className="guard-icon" />
                    <strong>Anti-Fraud Advisory</strong>
                  </div>
                  <p>
                    PDEEPS Institute does not charge any job placement fee. Official communications, admission letters, and onboarding instructions are dispatched exclusively from <strong>@pdib.in</strong>. Never make payments to personal accounts or unauthorized third-party recruiters.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="contact-form-panel">
              <div className="contact-form-card">
                {isSubmitted ? (
                  <div className="submission-success-view">
                    <div className="success-icon-badge">
                      <CheckCircle2 size={48} className="success-icon" />
                    </div>
                    <h3>Application Submitted Successfully!</h3>
                    <p className="success-ref-text">
                      Application Reference ID: <strong className="ref-tag">{referenceId}</strong>
                    </p>
                    <p className="success-body-text">
                      Thank you, <strong>{formData.fullName}</strong>. Our counseling desk has received your application for <strong>{formData.interestedProject.toUpperCase()}</strong>. We will review your profile and reach out via email shortly.
                    </p>

                    <div className="safety-alert-box">
                      <ShieldCheck size={20} className="alert-shield" />
                      <p>
                        <strong>Security Reminder:</strong> Expect confirmation emails strictly from <strong>@pdib.in</strong>. No job placement fee is required.
                      </p>
                    </div>

                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="btn btn-primary"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-actual-form">
                    <div className="form-head-block">
                      <span className="pill-badge pill-badge-green">Enrollment Form</span>
                      <h3>Submit Your Candidate Profile</h3>
                      <p>Complete the form below to initiate enrollment and verify batch eligibility.</p>
                    </div>

                    <div className="form-grid-2col">
                      <div className="form-field">
                        <label htmlFor="c-name">Full Name *</label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your complete name"
                          className="form-input"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="c-email">Email Address *</label>
                        <input
                          id="c-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@gmail.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2col">
                      <div className="form-field">
                        <label htmlFor="c-phone">Phone / WhatsApp Number *</label>
                        <input
                          id="c-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="form-input"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="c-age">Age (Years) *</label>
                        <input
                          id="c-age"
                          type="number"
                          min="16"
                          max="65"
                          required
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          placeholder="e.g. 23"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2col">
                      <div className="form-field">
                        <label htmlFor="c-occ">Current Occupation *</label>
                        <select
                          id="c-occ"
                          value={formData.occupation}
                          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                          className="form-select"
                        >
                          <option value="Student">Student (College / Graduate)</option>
                          <option value="Homemaker">Homemaker / Housewife</option>
                          <option value="Working Professional">Working Professional</option>
                          <option value="Job Seeker">Job Seeker / Fresher</option>
                          <option value="Entrepreneur">Entrepreneur / Merchant</option>
                          <option value="Other">Other seeking flexible income</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="c-mode">Preferred Work Mode *</label>
                        <select
                          id="c-mode"
                          value={formData.workMode}
                          onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                          className="form-select"
                        >
                          <option value="Flexible Hours (Part-time)">Flexible Hours (Part-time)</option>
                          <option value="Full-time Work Option">Full-time Work Option</option>
                          <option value="Weekend Batches">Weekend Batches</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="c-track">Select Program Track *</label>
                      <select
                        id="c-track"
                        value={formData.interestedProject}
                        onChange={(e) => setFormData({ ...formData, interestedProject: e.target.value })}
                        className="form-select project-dropdown"
                      >
                        <option value="project-01">
                          Project 01: E-Commerce Product Listing Project (15 Days Training • Up to 3 Yrs Engagement)
                        </option>
                        <option value="project-02">
                          Project 02: Customer Email Support & Query Management (60 Days Training • India & USA)
                        </option>
                        <option value="project-03">
                          Project 03: ADMC - Advanced Digital Marketing & AI Certification (4 Months + Internship)
                        </option>
                        <option value="general-inquiry">
                          General Inquiry / Business Catalog Management Services
                        </option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="c-msg">Questions or specific requirements (Optional)</label>
                      <textarea
                        id="c-msg"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention any queries regarding batch start dates or system setup..."
                        className="form-textarea"
                      />
                    </div>

                    <div className="form-checkbox-row">
                      <input
                        type="checkbox"
                        id="contact-policy-ack"
                        checked={acknowledgedPolicy}
                        onChange={(e) => setAcknowledgedPolicy(e.target.checked)}
                        required
                      />
                      <label htmlFor="contact-policy-ack">
                        I acknowledge that training fees are non-refundable, PDEEPS does not charge any job placement fee, and all authorized communications originate exclusively from <strong>@pdib.in</strong>.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={!acknowledgedPolicy}
                      className="btn btn-accent btn-lg full-width-btn"
                    >
                      <Send size={18} />
                      <span>Submit Application Now</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
