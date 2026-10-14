import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export function PrivacyPolicyPage() {
  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <Lock size={14} />
            Data Protection & Privacy
          </span>
          <h1>Privacy Policy</h1>
          <p className="subpage-lead">
            Last Updated: October 2026 • PDEEPS Institute of E-Commerce & Digital Business
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding subpage-content">
        <div className="container">
          <div className="legal-document-card">
            <div className="legal-notice-box">
              <ShieldCheck size={24} className="legal-shield-icon" />
              <div>
                <strong>Official Domain Integrity Notice</strong>
                <p>
                  All official correspondence regarding your data, application status, or enrollment is conducted solely through our authorized email domain: <strong>@pdib.in</strong>. We never ask for sensitive financial credentials through unauthorized emails or personal messaging apps.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2>1. Introduction & Scope</h2>
              <p>
                <strong>{COMPANY_INFO.name}</strong> ("PDEEPS Institute", "we", "our", or "us") is dedicated to protecting your personal information and respecting your privacy. This Privacy Policy details how we collect, handle, process, and safeguard information submitted by learners, applicants, students, and website visitors when accessing our programs, catalog management services, or digital platforms.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Information We Collect</h2>
              <p>We may collect and process the following categories of information:</p>
              <ul>
                <li>
                  <strong>Personal Identity Details:</strong> Full name, contact phone number, WhatsApp number, email address, age, current occupation status, and city/state of residence.
                </li>
                <li>
                  <strong>Enrollment & Academic Data:</strong> Selected training course/project track, educational background, preferred working shifts (flexible, full-time, part-time), and assessment completion data.
                </li>
                <li>
                  <strong>Project & Task Deliverables:</strong> Assignment submissions, catalog listing quality scores, mock customer query handling evaluations, and performance records for project allocation.
                </li>
                <li>
                  <strong>Technical Browsing Data:</strong> Standard web server logs, IP addresses, browser types, device information, and anonymous usage telemetry to ensure platform stability and security.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>We utilize the collected information strictly for legitimate operational purposes:</p>
              <ul>
                <li>To evaluate candidate eligibility for enrollment in specific project tracks (Product Listing, Email Support, ADMC).</li>
                <li>To conduct structured training sessions, deliver syllabus materials, and grade milestone assessments.</li>
                <li>To coordinate project-based work allocation and process performance-based stipends/payments upon verified milestone completion.</li>
                <li>To communicate official batch schedules, notices, and onboarding instructions strictly from authorized accounts under <code>@pdib.in</code>.</li>
                <li>To uphold our compliance safeguards, resolve participant queries, and prevent unauthorized third-party fraud.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>4. No Sale or Commercial Rental of Data</h2>
              <p>
                PDEEPS Institute maintains a strict policy: <strong>We do not sell, rent, lease, or monetize your personal candidate data to third-party marketing companies, advertisers, or lead brokers.</strong>
              </p>
              <p>
                Your data is only accessed by authorized admissions coordinators, project supervisors, and operational team members strictly on a need-to-know basis to fulfill training and project delivery obligations.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Data Security & Storage</h2>
              <p>
                We implement robust physical, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration. Submissions received through our online enrollment forms are encrypted during transit using modern SSL/TLS protocols.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Official Communication Policy</h2>
              <p>
                To safeguard our community against impersonation and scam recruitment activities:
              </p>
              <ul>
                <li>All official communications, including letters of training, onboarding materials, invoices, and project instructions, originate solely from addresses ending in <strong>@pdib.in</strong>.</li>
                <li>Any communication received from free personal webmail accounts (e.g., <code>@gmail.com</code>, <code>@yahoo.com</code>) claiming to represent PDEEPS Institute is unauthorized and should be reported to our desk immediately.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>7. Candidate Rights</h2>
              <p>
                You retain the right to request access to your candidate records, request correction of inaccurate phone/email data, or request deletion of preliminary enquiry records, subject to applicable regulatory recordkeeping requirements.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Updates to this Policy</h2>
              <p>
                We reserve the right to revise this Privacy Policy periodically to reflect updates in our operational workflows or applicable laws. Any modifications will be posted to this page with an updated revision date.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Contacting Our Data Privacy Team</h2>
              <p>
                If you have questions, feedback, or concerns regarding your personal data or this Privacy Policy, please contact our authorized team:
              </p>
              <div className="legal-contact-callout">
                <Mail size={18} />
                <span>
                  Authorized Privacy Desk: <a href="mailto:contact@pdib.in">contact@pdib.in</a> (Domain: <strong>@pdib.in</strong>)
                </span>
              </div>
            </div>

            <div className="legal-bottom-bar">
              <Link to="/terms" className="btn btn-outline-dark">
                <span>View Terms of Service</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/" className="btn btn-accent">
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
