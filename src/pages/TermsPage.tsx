import { Link } from 'react-router-dom';
import { AlertTriangle, FileText, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export function TermsPage() {
  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <FileText size={14} />
            Institutional Terms & Conditions
          </span>
          <h1>Terms of Service & Program Agreement</h1>
          <p className="subpage-lead">
            Last Updated: October 2026 • PDEEPS Institute of E-Commerce & Digital Business
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Terms of Service</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding subpage-content">
        <div className="container">
          <div className="legal-document-card">
            {/* Top Critical Notice */}
            <div className="legal-notice-box warning">
              <AlertTriangle size={24} className="legal-warning-icon" />
              <div>
                <strong>Mandatory Transparency & Fee Notice</strong>
                <p>
                  PDEEPS Institute does NOT charge any job placement fee. Training fees are applicable, clearly communicated, and are <strong>strictly non-refundable</strong>. All official institute communications are sent exclusively through <strong>@pdib.in</strong>.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2>1. Agreement to Terms</h2>
              <p>
                By enrolling in any program, training track, or service offered by <strong>{COMPANY_INFO.name}</strong> ("PDEEPS Institute", "we", "our"), or by submitting an enquiry through this website, you ("Candidate", "Participant", or "User") agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must refrain from enrolling or submitting payments.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Scope of Institute Programs & Objectives</h2>
              <p>
                PDEEPS Institute provides skill-development training and practical learning opportunities in e-commerce operations, product listing, customer email support, and digital marketing/AI. Our objective is to empower individuals with practical operational abilities and bridge the gap between academic theory and marketplace workflows.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. Strict No Job Placement Fee Policy</h2>
              <p>
                <strong>We do NOT charge any separate job placement fee.</strong> No payment is required, solicited, or accepted specifically for securing or guaranteeing employment. Any party or agent demanding a job placement fee under the name of PDEEPS Institute is unauthorized and engaging in fraudulent activity.
              </p>
            </div>

            <div className="legal-section">
              <h2>4. Training Charges & Non-Refundable Fee Policy</h2>
              <ul>
                <li>Training charges are applicable and vary according to the selected project or program track (e.g., 15-day Product Listing, 60-day Email Support, or 4-month ADMC).</li>
                <li><strong>The training fee is strictly non-refundable</strong> under any circumstances once enrollment is confirmed, materials are provided, or training sessions commence.</li>
                <li>Candidates are required to review the course requirements, eligibility parameters, syllabus, and hardware requirements thoroughly before making any training fee payment.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. Assessment, Certification & Project Eligibility</h2>
              <ul>
                <li>Enrollment in a training course does not automatically guarantee project allocation. Candidates must actively participate, complete required training hours, and pass the applicable milestone assessments.</li>
                <li>Official Certification is awarded upon meeting the required training and assessment benchmarks.</li>
                <li>After completing the required training and meeting eligibility criteria, candidates may be considered for available project-based work opportunities subject to project demand and availability.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>6. Project-Based Work & Performance Stipends</h2>
              <ul>
                <li>Candidates assigned to eligible projects may receive payments or stipends based on eligible work completed.</li>
                <li>Payment structures, task rates, productivity criteria, and assessment processes are determined by the specific project's agreement and communicated prior to participation.</li>
                <li>Stipends are disbursed only for approved, quality-checked work output that satisfies client and marketplace accuracy benchmarks.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>7. Long-Term Engagements & Exit Terms</h2>
              <ul>
                <li>Certain projects offer long-term engagements of up to three (3) years, subject to the specific project agreement, candidate performance, and project availability.</li>
                <li>Work hours are structured to offer flexibility (part-time or full-time) subject to project deadlines and task deliverables.</li>
                <li>Candidates may continue working throughout the agreed project period or discontinue earlier in accordance with the applicable project exit terms.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>8. Official Communication & Payment Verification</h2>
              <ul>
                <li>All official letters, onboarding documents, training links, and payment instructions are sent exclusively via our authorized domain: <strong>@pdib.in</strong>.</li>
                <li>Candidates must verify the sender's email address before responding or remitting any training fee. Emails received from personal Gmail accounts or unauthorized domains should not be considered official institute communication.</li>
                <li>Always confirm payment details with authorized staff at <code>hr@pdib.in</code> prior to initiating any transaction.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>9. Confidentiality & Non-Disclosure of Client Data</h2>
              <p>
                During training and project execution, candidates may access proprietary catalog structures, merchant account guidelines, or client query databases. Candidates agree to maintain strict confidentiality and must not copy, download, disclose, or distribute client product data or sensitive business details to any third party.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Code of Conduct</h2>
              <p>
                Candidates are expected to maintain professional conduct, timely communication, and integrity during training and project delivery. Plagiarism, deliberate submission of fabricated catalog data, or harassment will result in immediate disqualification without any fee refund.
              </p>
            </div>

            <div className="legal-section">
              <h2>11. Contact & Grievance Redressal</h2>
              <p>
                For any clarifications regarding these Terms of Service, please reach out to our administration desk:
              </p>
              <div className="legal-contact-callout">
                <Mail size={18} />
                <span>
                  Official Legal & Compliance Desk: <a href="mailto:hr@pdib.in">hr@pdib.in</a> (Domain: <strong>@pdib.in</strong>)
                </span>
              </div>
            </div>

            <div className="legal-bottom-bar">
              <Link to="/privacy-policy" className="btn btn-outline-dark">
                <span>View Privacy Policy</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn btn-accent">
                <span>Explore Project Tracks</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
