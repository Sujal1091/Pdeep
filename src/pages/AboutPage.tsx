import { Link } from 'react-router-dom';
import { Target, Eye, HeartHandshake, ShieldCheck, CheckCircle2, ArrowRight, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export function AboutPage({ onOpenEnquiry }: AboutPageProps) {
  return (
    <div className="subpage-wrapper">
      {/* Subpage Header Banner */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <Building size={14} />
            About Our Organization
          </span>
          <h1>About PDEEPS Institute</h1>
          <p className="subpage-lead">
            Empowering individuals with practical e-commerce skills and digital capabilities to succeed in the evolving world of online business.
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding subpage-content">
        <div className="container">
          <div className="about-full-grid">
            <div className="about-full-narrative">
              <span className="card-kicker">Our Background & Focus</span>
              <h2>Bridging Theory and Real-World Marketplace Demands</h2>
              <p className="narrative-p">
                At <strong>Pdeeps Institute of E-Commerce & Digital Business</strong>, we are committed to building practical e-commerce skills and empowering individuals with the knowledge, experience, and digital capabilities needed to grow in the evolving world of online business.
              </p>
              <p className="narrative-p">
                We specialize in e-commerce training, product listing services, and practical project-based learning designed to bridge the gap between theoretical knowledge and real-world business requirements.
              </p>
              <p className="narrative-p">
                Traditional education frequently covers concepts without operational execution. At PDEEPS, our candidates work on actual marketplace interfaces—learning product title conventions, catalog creation, SKU variations, pricing rules, image quality guidelines, and ticketing software workflows.
              </p>

              {/* 4-Pillar Philosophy Block */}
              <div className="philosophy-box-detailed">
                <h3>Our Core Operational Philosophy</h3>
                <div className="philosophy-steps-grid">
                  <div className="phi-step">
                    <span className="phi-num">01</span>
                    <strong>Train</strong>
                    <p>Rigorous, task-based initial learning covering marketplace dynamics and tools.</p>
                  </div>
                  <div className="phi-step">
                    <span className="phi-num">02</span>
                    <strong>Apply</strong>
                    <p>Simulated catalog uploads, data validation, and real scenario problem-solving.</p>
                  </div>
                  <div className="phi-step">
                    <span className="phi-num">03</span>
                    <strong>Work on Projects</strong>
                    <p>Live client tasks, catalog maintenance, and customer query tickets.</p>
                  </div>
                  <div className="phi-step highlight">
                    <span className="phi-num">04</span>
                    <strong>Grow</strong>
                    <p>Earn performance-based stipends and build a long-term professional portfolio.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="about-full-sidebar">
              <div className="sidebar-info-card">
                <div className="sidebar-card-badge">Authorized Policy</div>
                <h3>Official Communication</h3>
                <p>
                  All official correspondence, letters, and project assignments are issued exclusively from our authorized domain:
                </p>
                <div className="domain-highlight">
                  <ShieldCheck size={18} />
                  <span>@pdib.in</span>
                </div>
                <p className="sidebar-subtext">
                  Candidates are advised to never respond to personal Gmail accounts claiming to represent PDEEPS Institute.
                </p>
              </div>

              <div className="sidebar-info-card stat-highlight-box">
                <h4>Inclusive Demographics</h4>
                <p>
                  Our programs are specifically designed for college students, homemakers, housewives, and working professionals seeking flexible work opportunities up to <strong>60 years of age</strong>.
                </p>
                <div className="sidebar-check-list">
                  <div className="check-item">
                    <CheckCircle2 size={16} className="check-ico" />
                    <span>No prior listing experience required</span>
                  </div>
                  <div className="check-item">
                    <CheckCircle2 size={16} className="check-ico" />
                    <span>Flexible part-time & full-time schedules</span>
                  </div>
                  <div className="check-item">
                    <CheckCircle2 size={16} className="check-ico" />
                    <span>Long-term projects up to 3 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, and Commitment */}
          <div className="core-values-detailed-section">
            <div className="section-header">
              <span className="pill-badge pill-badge-green">Core Foundations</span>
              <h2>Mission, Vision & Commitment</h2>
              <p>The guiding principles that steer every training module and client project at PDEEPS.</p>
            </div>

            <div className="core-values-grid">
              <div className="value-card">
                <div className="value-icon mission">
                  <Target size={28} />
                </div>
                <h3>Our Mission</h3>
                <p>{COMPANY_INFO.mission}</p>
              </div>

              <div className="value-card">
                <div className="value-icon vision">
                  <Eye size={28} />
                </div>
                <h3>Our Vision</h3>
                <p>{COMPANY_INFO.vision}</p>
              </div>

              <div className="value-card">
                <div className="value-icon commitment">
                  <HeartHandshake size={28} />
                </div>
                <h3>Our Commitment</h3>
                <p>{COMPANY_INFO.commitment}</p>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="subpage-action-banner">
            <div>
              <h3>Explore How You Can Get Started</h3>
              <p>Learn about our 3 flagship training and project tracks.</p>
            </div>
            <div className="action-buttons-wrap">
              <button onClick={onOpenEnquiry} className="btn btn-accent btn-lg">
                <span>Enquire Now</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/projects" className="btn btn-outline-dark btn-lg">
                <span>View All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
