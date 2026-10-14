import React from 'react';
import { X, CheckCircle2, Clock, Calendar, Award, Users, ShieldAlert, ArrowRight, IndianRupee } from 'lucide-react';
import type { ProjectCourse } from '../types';

interface ProjectDetailModalProps {
  project: ProjectCourse | null;
  onClose: () => void;
  onApply: (courseId: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  onClose, 
  onApply 
}) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog project-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div className="modal-badge-row">
              <span className="project-num-tag">{project.projectNumber}</span>
              {project.earnings && (
                <span className="modal-badge-price">
                  <IndianRupee size={13} />
                  Earnings {project.earnings}
                </span>
              )}
              <span className="modal-subtitle-tag">{project.badge}</span>
            </div>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <p className="modal-lead-desc">{project.shortDescription}</p>

          {/* Key Specifications Grid */}
          <div className="modal-specs-row">
            {project.earnings && (
              <div className="modal-spec-cell modal-spec-price">
                <IndianRupee size={16} />
                <span>Student Earnings: <strong>{project.earnings}</strong></span>
              </div>
            )}
            <div className="modal-spec-cell">
              <Clock size={16} />
              <span>Training: <strong>{project.duration}</strong></span>
            </div>
            <div className="modal-spec-cell">
              <Award size={16} />
              <span>Certification: <strong>{project.certification}</strong></span>
            </div>
            <div className="modal-spec-cell">
              <Calendar size={16} />
              <span>Engagement: <strong>{project.engagement}</strong></span>
            </div>
            <div className="modal-spec-cell">
              <Users size={16} />
              <span>Age Eligibility: <strong>{project.ageEligibility}</strong></span>
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="modal-section-block">
              <h4>Program Highlights & Benefits</h4>
              <div className="modal-highlights-grid">
                {project.highlights.map((h, i) => (
                  <div key={i} className="highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Syllabus / Learning Points */}
          <div className="modal-section-block">
            <h4>Detailed Curriculum & Skills Acquired</h4>
            <ul className="modal-curriculum-list">
              {project.learningPoints.map((pt, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} className="curriculum-check" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Training & Project Process */}
          <div className="modal-section-block">
            <h4>Step-by-Step Training & Project Workflow</h4>
            <div className="modal-process-timeline">
              {project.processSteps.map((step, idx) => (
                <div key={idx} className="timeline-step">
                  <div className="timeline-step-badge">{idx + 1}</div>
                  <div className="timeline-step-content">
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Apply */}
          <div className="modal-section-block">
            <h4>Eligibility & Target Candidates</h4>
            <div className="modal-audiences-pills">
              {project.whoCanApply.map((item, idx) => (
                <span key={idx} className="audience-pill">{item}</span>
              ))}
            </div>
          </div>

          {/* Terms Note */}
          <div className="modal-disclaimer">
            <ShieldAlert size={16} className="disclaimer-icon" />
            <p>
              Project allocation and performance-based payments/stipends are subject to completing training, assessment criteria, and project agreements. Training fee is non-refundable. Official notices are issued strictly from <strong>@pdib.in</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-outline-dark">
            Close
          </button>
          <button 
            onClick={() => {
              onClose();
              onApply(project.id);
            }} 
            className="btn btn-accent"
          >
            <span>Apply / Enquire for {project.projectNumber}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
