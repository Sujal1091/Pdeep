import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ArrowUp, Lock, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onOpenEnquiry: (courseId?: string) => void;
  onOpenVerify: () => void;
}

export function Footer({ onOpenEnquiry, onOpenVerify }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      {/* Top Banner inside Footer */}
      <div className="footer-banner">
        <div className="container footer-banner-inner">
          <div className="footer-banner-text">
            <span className="footer-banner-tag">Start Your Digital Business Career</span>
            <h3>Empowering Candidates with Practical Skills & Real Projects</h3>
            <p>Connect with our admissions team to explore available training batches and project allocations.</p>
          </div>
          <div className="footer-banner-actions">
            <button onClick={() => onOpenEnquiry()} className="btn btn-accent btn-lg">
              <span>Apply for Training & Projects</span>
            </button>
            <Link to="/policy" onClick={onOpenVerify} className="btn btn-outline-light">
              <ShieldCheck size={18} />
              <span>Verify Sender Email</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container footer-main">
        <div className="footer-col footer-col-brand">
          <Link to="/" className="footer-logo-row">
            <img 
              src="/logo.jpeg" 
              alt="PDEEPS Logo" 
              className="footer-logo-img" 
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="footer-logo-text">
              <span className="footer-brand-title">PDEEPS INSTITUTE</span>
              <span className="footer-brand-sub">E-Commerce & Digital Business</span>
            </div>
          </Link>

          <p className="footer-about-text">
            {COMPANY_INFO.aboutSummary}
          </p>

          <div className="footer-auth-box">
            <div className="auth-box-header">
              <Lock size={15} className="auth-icon" />
              <span>Official Verification Notice</span>
            </div>
            <p>
              All official communications are conducted solely via authorized domain: <strong>@pdib.in</strong>. No job placement fee is ever collected.
            </p>
          </div>
        </div>

        {/* Column 2: Flagship Programs */}
        <div className="footer-col">
          <h4 className="footer-col-title">Programs & Projects</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/projects">
                E-Commerce Product Listing (15 Days)
              </Link>
            </li>
            <li>
              <Link to="/projects">
                Customer Email Support (60 Days)
              </Link>
            </li>
            <li>
              <Link to="/projects">
                ADMC Digital Marketing & AI (4 Months)
              </Link>
            </li>
            <li>
              <Link to="/services">
                Product Listing & Catalog Management Services
              </Link>
            </li>
            <li>
              <Link to="/process">
                Project-Based Work Opportunities & Stipends
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Institute & Pages */}
        <div className="footer-col">
          <h4 className="footer-col-title">Explore Pages</h4>
          <ul className="footer-links-list">
            <li><Link to="/about">About Our Institute</Link></li>
            <li><Link to="/services">What We Do & Services</Link></li>
            <li><Link to="/process">5-Step Training & Work Process</Link></li>
            <li><Link to="/testimonials">Participant Reviews & Feedback</Link></li>
            <li><Link to="/FaqSection">Frequently Asked Questions</Link></li>
            <li><Link to="/contact">Contact & Enrollment Desk</Link></li>
          </ul>
        </div>

        {/* Column 4: Legal & Official Policy */}
        <div className="footer-col">
          <h4 className="footer-col-title">Policy & Legal Terms</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/policy">
                <ShieldCheck size={14} className="inline-icon" />
                <span>Official Email & Fee Policy</span>
              </Link>
            </li>
            
            <li>
              <a href="tel:+918284081752" className="footer-contact-link-highlight">
                <Phone size={14} className="inline-icon" />
                <span>Call Admissions: 8284081752</span>
              </a>
            </li>
            <li>
              <Link to="/contact">
                <Mail size={14} className="inline-icon" />
                <span>Official Contact: @pdib.in</span>
              </Link>
            </li>
          </ul>

          <div className="footer-security-check" style={{ marginTop: '16px' }}>
            <span className="security-title">Zero Placement Fee:</span>
            <p>
              We do not charge any fee for job placement. Training fees are non-refundable.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </p>
          <div className="footer-bottom-badges">
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <span className="divider">•</span>
            <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
            <span className="divider">•</span>
            <span className="bottom-badge">
              <ShieldCheck size={13} />
              Authorized: @pdib.in
            </span>
            <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
