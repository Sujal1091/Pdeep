import React from 'react';
import { Target, Eye, HeartHandshake, Award, Users, BookOpen } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="pill-badge pill-badge-green">About Our Institute</span>
          <h2>Empowering The Next Wave of Digital Entrepreneurs</h2>
          <p>
            Bridging the gap between theoretical education and real-world business requirements through project-based learning.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="about-overview-grid">
          <div className="about-main-card">
            <span className="card-kicker">Who We Are</span>
            <h3>{COMPANY_INFO.name}</h3>
            <p className="about-text-lead">
              {COMPANY_INFO.aboutSummary}
            </p>
            <p className="about-text-sub">
              We specialize in practical e-commerce training, product catalog management, customer email workflows, and industry-oriented certifications. Instead of rote learning, our candidates practice on live e-commerce environments and leading digital marketplace workflows.
            </p>

            <div className="about-pillars-bar">
              <div className="pillar-item">
                <div className="pillar-number">01</div>
                <div>
                  <strong>Train</strong>
                  <p>Comprehensive foundation</p>
                </div>
              </div>
              <div className="pillar-divider">→</div>
              <div className="pillar-item">
                <div className="pillar-number">02</div>
                <div>
                  <strong>Apply</strong>
                  <p>Practical assignments</p>
                </div>
              </div>
              <div className="pillar-divider">→</div>
              <div className="pillar-item">
                <div className="pillar-number">03</div>
                <div>
                  <strong>Work on Projects</strong>
                  <p>Real business tasks</p>
                </div>
              </div>
              <div className="pillar-divider">→</div>
              <div className="pillar-item highlight">
                <div className="pillar-number">04</div>
                <div>
                  <strong>Grow</strong>
                  <p>Digital business career</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-side-stats">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <BookOpen size={24} />
              </div>
              <div className="stat-info">
                <h4>Hands-On Pedagogy</h4>
                <p>Task-based assignments mirror actual seller dashboard requirements.</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <h4>Inclusive Demographics</h4>
                <p>Open for students, homemakers, working professionals up to 60 years.</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Award size={24} />
              </div>
              <div className="stat-info">
                <h4>Performance-Based Returns</h4>
                <p>Stipends and payments aligned with verified project deliverables.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Commitment 3 Cards */}
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
    </section>
  );
};
