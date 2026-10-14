import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { TrustNoticeSection } from '../components/TrustNoticeSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import type { ProjectCourse } from '../types';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  onOpenEnquiry: (courseId?: string) => void;
  onOpenVerify: () => void;
  onSelectProject: (project: ProjectCourse) => void;
}

export function HomePage({ onOpenEnquiry, onOpenVerify, onSelectProject }: HomePageProps) {
  return (
    <div className="home-page-view">
      {/* Hero Section */}
      <Hero 
        onOpenEnquiry={onOpenEnquiry} 
        onOpenVerify={onOpenVerify} 
      />

      {/* About Summary */}
      <AboutSection />

      {/* What We Do */}
      <WhatWeDoSection onOpenEnquiry={() => onOpenEnquiry()} />

      {/* Flagship Projects */}
      <ProjectsSection 
        onSelectProject={onSelectProject}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 5-Step Process */}
      <ProcessTimeline onOpenEnquiry={() => onOpenEnquiry()} />

      {/* Verification & Official Policy Notice */}
      <TrustNoticeSection />

      {/* Candidate Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <FaqSection onOpenEnquiry={() => onOpenEnquiry()} />

      {/* Quick Action Bottom Banner */}
      <section className="section-padding home-bottom-cta">
        <div className="container">
          <div className="cta-highlight-card">
            <div className="cta-badge-line">
              <span className="pill-badge pill-badge-dark">
                <Sparkles size={14} />
                Begin Your Journey Today
              </span>
              <span className="cta-verify-tag">
                <ShieldCheck size={14} />
                Authorized Communication: @pdib.in
              </span>
            </div>
            <h2>Ready to Build Practical Skills in Digital Business?</h2>
            <p>
              Join hundreds of candidates learning e-commerce product listing, customer email query handling, and AI-powered digital marketing with real client assignments and performance-based stipends.
            </p>
            <div className="cta-actions-row">
              <button onClick={() => onOpenEnquiry()} className="btn btn-accent btn-lg">
                <span>Submit Enrollment Enquiry</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                <span>View Contact & Office Info</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
