import React from 'react';
import { 
  BookOpen, 
  Award, 
  Briefcase, 
  DollarSign, 
  TrendingUp, 
  ArrowRight
} from 'lucide-react';

interface ProcessTimelineProps {
  onOpenEnquiry: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenEnquiry }) => {
  const steps = [
    {
      step: "01",
      icon: <BookOpen size={24} />,
      title: "Structured Training Phase",
      desc: "Candidates undertake intensive, hands-on training (15 to 60 days depending on the track). Master marketplace mechanics, product catalog creation, ticketing software, or full-funnel digital marketing & AI tools.",
      tag: "Foundation & Practical Drills"
    },
    {
      step: "02",
      icon: <Award size={24} />,
      title: "Assessment & Official Certification",
      desc: "Complete practical milestone assignments, quality checks, and real-world simulation assessments to validate proficiency, accuracy, and adherence to marketplace compliance.",
      tag: "Proof of Competence"
    },
    {
      step: "03",
      icon: <Briefcase size={24} />,
      title: "Project-Based Work Opportunities",
      desc: "After passing assessments and satisfying eligibility requirements, candidates are assigned projects matching their skills. Assignments involve live product listing, catalog support, or query tickets.",
      tag: "Live Business Exposure"
    },
    {
      step: "04",
      icon: <DollarSign size={24} />,
      title: "Performance-Based Payments & Stipends",
      desc: "Receive stipends or task-based payments for approved work delivered under project terms. Clear payment structures, quality benchmarks, and schedules are communicated transparently before starting.",
      tag: "Merit-Driven Earnings"
    },
    {
      step: "05",
      icon: <TrendingUp size={24} />,
      title: "Long-Term Engagement & Career Growth",
      desc: "Select projects offer ongoing engagements of up to 3 years with flexible working hours. Candidates develop tangible professional portfolios and career momentum in digital business.",
      tag: "Up to 3 Years Duration"
    }
  ];

  return (
    <section id="process" className="section-padding process-section">
      <div className="container">
        <div className="section-header">
          <span className="pill-badge pill-badge-green">How It Works</span>
          <h2>Our Proven 5-Stage Methodology</h2>
          <p>
            From your very first training session to live project execution and performance-based earnings—here is your clear roadmap.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="process-timeline-grid">
          {steps.map((st, index) => (
            <div key={st.step} className="process-card">
              <div className="process-card-top">
                <span className="process-badge-number">{st.step}</span>
                <div className="process-icon-wrap">
                  {st.icon}
                </div>
              </div>

              <div className="process-content">
                <span className="process-tag">{st.tag}</span>
                <h3 className="process-title">{st.title}</h3>
                <p className="process-desc">{st.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="process-connector-arrow">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Banner Bottom */}
        <div className="process-cta-banner">
          <div className="cta-banner-text">
            <h4>Ready to start your journey with PDEEPS Institute?</h4>
            <p>Enroll today in our upcoming batch and prepare for live marketplace project assignments.</p>
          </div>
          <button 
            onClick={onOpenEnquiry}
            className="btn btn-accent banner-action-btn"
          >
            <span>Begin Enrollment Enquiry</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
