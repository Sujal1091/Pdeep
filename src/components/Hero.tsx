import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenEnquiry: (courseId?: string) => void;
  onOpenVerify: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onOpenVerify }) => {
  return (
    <section className="hero-section">
      <div className="hero-pattern-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Badge */}
          <div className="hero-badge-row">
            <span className="pill-badge pill-badge-dark hero-badge">
              <Sparkles size={14} className="badge-glow" />
              <span>{COMPANY_INFO.tagline}</span>
            </span>
            <button 
              onClick={onOpenVerify}
              className="hero-verify-pill"
              title="Official communication check"
            >
              <ShieldCheck size={14} />
              <span>Authorized Domain: @pdib.in</span>
            </button>
          </div>

          {/* Main Headings */}
          <h1 className="hero-title">
            Master Real-World <span className="highlight-text">E-Commerce</span> & Digital Business Operations
          </h1>

          <p className="hero-description">
            We provide structured e-commerce training, product listing services, customer email query management, and practical project-based learning designed to bridge the gap between theoretical knowledge and industry execution.
          </p>

          {/* Core Approach Tag */}
          <div className="hero-philosophy">
            <span className="philosophy-label">Our Approach:</span>
            <div className="philosophy-steps">
              <span className="step-tag">1. Train</span>
              <span className="step-arrow">→</span>
              <span className="step-tag">2. Apply</span>
              <span className="step-arrow">→</span>
              <span className="step-tag">3. Work on Projects</span>
              <span className="step-arrow">→</span>
              <span className="step-tag step-highlight">4. Grow with Digital Business</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <button 
              onClick={() => onOpenEnquiry()}
              className="btn btn-accent btn-lg hero-cta-btn"
            >
              <span>Apply for Available Projects</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="#projects" 
              className="btn btn-outline-light hero-cta-btn"
            >
              <span>Explore 3 Flagship Projects</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="hero-trust-bullets">
            <div className="trust-bullet">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>No Job Placement Fee</span>
            </div>
            <div className="trust-bullet">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>Performance-Based Project Stipends</span>
            </div>
            <div className="trust-bullet">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>Flexible Hours up to 60 Yrs Age</span>
            </div>
          </div>
        </div>

        {/* Hero Quick Stats Grid */}
        <div className="hero-stats-card">
          <div className="hero-card-header">
            <div className="card-badge">Industry Opportunity</div>
            <h3>Practical Digital Career Tracks</h3>
            <p>Designed for students, homemakers, entrepreneurs, and working professionals.</p>
          </div>

          <div className="hero-metrics-grid">
            <div className="metric-box">
              <div className="metric-number">15 - 60</div>
              <div className="metric-unit">Days Training</div>
              <div className="metric-desc">Structured learning before project onboarding</div>
            </div>

            <div className="metric-box">
              <div className="metric-number">Up to 3</div>
              <div className="metric-unit">Years Engagement</div>
              <div className="metric-desc">Long-term project assignments based on performance</div>
            </div>

            <div className="metric-box">
              <div className="metric-number">7+</div>
              <div className="metric-unit">Marketplaces</div>
              <div className="metric-desc">Major e-commerce & quick-commerce channels</div>
            </div>

            <div className="metric-box">
              <div className="metric-number">India & USA</div>
              <div className="metric-unit">Client Coverage</div>
              <div className="metric-desc">Domestic & international email query management</div>
            </div>
          </div>

          {/* Floating Verified Stamp */}
          <div className="hero-card-footer">
            <div className="verified-stamp">
              <ShieldCheck size={20} className="stamp-icon" />
              <div>
                <strong>Official Institute Policy</strong>
                <p>Authentic training & project workflows under @pdib.in</p>
              </div>
            </div>
            <a href="#verification" className="learn-more-link">
              <span>View Policy</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Marketplaces Ticker Section */}

    </section>
  );
};
