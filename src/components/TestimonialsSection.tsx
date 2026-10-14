import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="pill-badge pill-badge-green">Participant Feedback</span>
          <h2>Candidate Experiences & Reviews</h2>
          <p>
            Read what candidates and learners have experienced during their training and project assignments at PDEEPS Institute.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-card-top">
                <div className="testimonial-user-row">
                  <div className="avatar-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="testimonial-avatar-img"
                      onError={(e) => {
                        // Fallback avatar
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="avatar-fallback">
                      {item.name.charAt(0)}
                    </div>
                  </div>

                  <div className="user-details">
                    <h4 className="user-name">{item.name}</h4>
                    <span className="user-tag">{item.projectTag}</span>
                    <div className="verified-badge-row">
                      <CheckCircle2 size={13} className="verified-icon" />
                      <span>Verified Participant</span>
                    </div>
                  </div>
                </div>

                <div className="quote-icon-box">
                  <Quote size={28} />
                </div>
              </div>

              {/* Star Rating */}
              <div className="star-rating-row">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <div className="testimonial-card-bottom">
                <span className="course-chip">{item.projectTag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
