import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Phone } from 'lucide-react';
import type { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  initialCourseId?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ 
  isOpen, 
  initialCourseId, 
  onClose 
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    occupation: 'Student',
    interestedProject: 'project-01',
    workMode: 'Flexible Hours (Part-time)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [acknowledgedPolicy, setAcknowledgedPolicy] = useState(true);

  useEffect(() => {
    if (initialCourseId) {
      setFormData(prev => ({
        ...prev,
        interestedProject: initialCourseId
      }));
    }
  }, [initialCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'PDEEPS-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog enquiry-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top */}
        <div className="modal-header">
          <div>
            <span className="pill-badge pill-badge-green modal-sub-pill">
              Enrollment & Eligibility Enquiry
            </span>
            <h3 className="modal-title">Apply for Training & Project Allocation</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close form">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {isSubmitted ? (
            <div className="submission-success-view">
              <div className="success-icon-badge">
                <CheckCircle2 size={48} className="success-icon" />
              </div>
              <h3>Enquiry Submitted Successfully!</h3>
              <p className="success-ref-text">
                Your Reference ID: <strong className="ref-tag">{referenceId}</strong>
              </p>
              <p className="success-body-text">
                Thank you, <strong>{formData.fullName}</strong>. Our counseling team will review your eligibility criteria for <strong>{formData.interestedProject.toUpperCase()}</strong> and reach out shortly with batch schedules, syllabus details, and onboarding instructions.
              </p>

              <div className="safety-alert-box">
                <ShieldCheck size={20} className="alert-shield" />
                <p>
                  <strong>Security Note:</strong> All official emails from PDEEPS Institute will be sent strictly from our authorized domain: <strong>@pdib.in</strong>. Remember, PDEEPS charges <strong>no job placement fees</strong>.
                </p>
              </div>

              <div className="success-actions">
                <button onClick={handleReset} className="btn btn-primary">
                  Done & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-notice-strip">
                <ShieldCheck size={16} />
                <span>Zero Job Placement Fee • Authentic Official Communications via @pdib.in</span>
              </div>

              {/* Form Grid */}
              <div className="form-grid-2col">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priyanshu Sharma"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid-2col">
                <div className="form-field">
                  <label htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="age">Age (Years) *</label>
                  <input
                    id="age"
                    type="number"
                    min="16"
                    max="65"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 24"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid-2col">
                <div className="form-field">
                  <label htmlFor="occupation">Current Occupation / Status *</label>
                  <select
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="form-select"
                  >
                    <option value="Student">Student (College / Undergrad / Postgrad)</option>
                    <option value="Homemaker">Homemaker / Housewife</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Job Seeker">Job Seeker / Fresher</option>
                    <option value="Entrepreneur">Entrepreneur / Small Business Owner</option>
                    <option value="Other">Other seeking flexible work</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="workMode">Preferred Work Mode *</label>
                  <select
                    id="workMode"
                    value={formData.workMode}
                    onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                    className="form-select"
                  >
                    <option value="Flexible Hours (Part-time)">Flexible Hours (Part-time)</option>
                    <option value="Full-time Work Option">Full-time Work Option</option>
                    <option value="Weekend Sessions">Weekend Sessions</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="interestedProject">Select Program / Project Track *</label>
                <select
                  id="interestedProject"
                  value={formData.interestedProject}
                  onChange={(e) => setFormData({ ...formData, interestedProject: e.target.value })}
                  className="form-select project-dropdown"
                >
                  <option value="project-01">
                    Project 01: E-Commerce Product Listing (15 Days Training • Up to 3 Yrs Engagement)
                  </option>
                  <option value="project-02">
                    Project 02: Customer Email Support & Query Management (60 Days • India & USA)
                  </option>
                  <option value="project-03">
                    Project 03: ADMC - Advanced Digital Marketing & AI Certification (4 Months + Internship)
                  </option>
                  <option value="general-inquiry">
                    General Inquiry / Catalog Services for Business Sellers
                  </option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Any questions or message for admissions? (Optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask any question about batch dates, syllabus, stipend structure, or eligibility..."
                  className="form-textarea"
                />
              </div>

              {/* Policy Checkbox */}
              <div className="form-checkbox-row">
                <input
                  type="checkbox"
                  id="policy-ack"
                  checked={acknowledgedPolicy}
                  onChange={(e) => setAcknowledgedPolicy(e.target.checked)}
                  required
                />
                <label htmlFor="policy-ack">
                  I understand that training fees are non-refundable, no job placement fee is charged, and all legitimate communication originates solely from <strong>@pdib.in</strong>.
                </label>
              </div>

              <div className="modal-footer-actions">
                <button type="button" onClick={onClose} className="btn btn-outline-dark">
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={!acknowledgedPolicy}
                  className="btn btn-accent modal-submit-btn"
                >
                  <Send size={16} />
                  <span>Submit Application Enquiry</span>
                </button>
              </div>

              <div className="modal-call-strip">
                <Phone size={13} className="strip-phone-ico" />
                <span>Need immediate assistance? Call Admissions at <a href="tel:+918284081752"><strong>+91 82840 81752</strong></a></span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
