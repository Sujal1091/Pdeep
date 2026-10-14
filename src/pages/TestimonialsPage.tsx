import { Link } from 'react-router-dom';
import { Star, Quote, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

interface TestimonialsPageProps {
  onOpenEnquiry: () => void;
}

export function TestimonialsPage({ onOpenEnquiry }: TestimonialsPageProps) {
  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <MessageSquare size={14} />
            Verified Feedback
          </span>
          <h1>Candidate Reviews & Testimonials</h1>
          <p className="subpage-lead">
            Hear from participants who completed our practical training and worked on structured marketplace projects.
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Testimonials</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding subpage-content">
        <div className="container">
          <div className="section-header">
            <span className="pill-badge pill-badge-green">Real Candidate Experiences</span>
            <h2>Practical Learning & Project Impact</h2>
            <p>
              Candidates develop operational accuracy, catalog organization, and customer communication skills that directly prepare them for digital commerce.
            </p>
          </div>

          <div className="testimonials-grid-extended">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="testimonial-card-lg">
                <div className="t-card-top">
                  <div className="t-user-info-row">
                    <div className="avatar-lg">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="avatar-img-lg"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="avatar-fallback-lg">{t.name.charAt(0)}</div>
                    </div>
                    <div>
                      <h3>{t.name}</h3>
                      <span className="t-role-text">{t.role}</span>
                      <div className="t-badge-verified">
                        <CheckCircle2 size={13} />
                        <span>Verified Participant</span>
                      </div>
                    </div>
                  </div>

                  <div className="t-quote-mark">
                    <Quote size={32} />
                  </div>
                </div>

                <div className="t-rating-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p className="t-quote-full">"{t.quote}"</p>

                <div className="t-bottom-tag">
                  <span className="t-track-chip">{t.projectTag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="subpage-action-banner">
            <div>
              <h3>Ready to Build Your Own Success Story?</h3>
              <p>Enroll in our upcoming batch and start developing practical e-commerce capabilities.</p>
            </div>
            <div className="action-buttons-wrap">
              <button onClick={onOpenEnquiry} className="btn btn-accent btn-lg">
                <span>Submit Enrollment Enquiry</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/projects" className="btn btn-outline-dark btn-lg">
                <span>Explore 3 Project Tracks</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
