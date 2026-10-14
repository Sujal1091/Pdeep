import React, { useState } from 'react';
import { 
  Clock, 
  Award, 
  Calendar, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  IndianRupee
} from 'lucide-react';
import { COURSES_DATA } from '../data/content';
import type { ProjectCourse } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCourse) => void;
  onOpenEnquiry: (courseId?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  onSelectProject, 
  onOpenEnquiry 
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProjects = activeTab === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(p => p.id === activeTab);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="pill-badge pill-badge-green">Flagship Programs & Work Projects</span>
          <h2>Explore Our Structured Career & Project Tracks</h2>
          <p>
            Each track combines rigorous initial training with practical assessments, followed by eligibility for real client assignments and performance-based stipends.
          </p>

          {/* Filter Pills */}
          <div className="project-filter-pills">
            <button 
              className={`filter-pill ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All 3 Programs
            </button>
            {COURSES_DATA.map((proj) => (
              <button 
                key={proj.id}
                className={`filter-pill ${activeTab === proj.id ? 'active' : ''}`}
                onClick={() => setActiveTab(proj.id)}
              >
                {proj.projectNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-master-card">
              {/* Card Top Banner */}
              <div className="project-card-top">
                <div className="project-meta-badges">
                  <span className="project-num-tag">{project.projectNumber}</span>
                  {project.earnings && (
                    <span className="project-price-tag">
                      <IndianRupee size={13} />
                      Earnings {project.earnings}
                    </span>
                  )}
                  <span className="project-feature-tag">{project.badge}</span>
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-lead">{project.shortDescription}</p>
              </div>

              {/* Quick Specs Matrix */}
              <div className="project-specs-grid">
                {project.earnings && (
                  <div className="spec-item spec-item-price">
                    <IndianRupee size={16} className="spec-icon price-spec-icon" />
                    <div>
                      <span className="spec-label">Student Earnings</span>
                      <strong className="spec-val price-spec-val">{project.earnings}</strong>
                    </div>
                  </div>
                )}

                <div className="spec-item">
                  <Clock size={16} className="spec-icon" />
                  <div>
                    <span className="spec-label">Training Period</span>
                    <strong className="spec-val">{project.duration}</strong>
                  </div>
                </div>

                <div className="spec-item">
                  <Calendar size={16} className="spec-icon" />
                  <div>
                    <span className="spec-label">Engagement / Schedule</span>
                    <strong className="spec-val">{project.schedule}</strong>
                  </div>
                </div>

                <div className="spec-item">
                  <Award size={16} className="spec-icon" />
                  <div>
                    <span className="spec-label">Certification</span>
                    <strong className="spec-val">{project.certification}</strong>
                  </div>
                </div>

                <div className="spec-item">
                  <Users size={16} className="spec-icon" />
                  <div>
                    <span className="spec-label">Age Eligibility</span>
                    <strong className="spec-val">{project.ageEligibility}</strong>
                  </div>
                </div>
              </div>

              {/* Extra details if available (Coverage / Marketplaces) */}
              {project.marketplaces && (
                <div className="project-pill-section">
                  <span className="pill-sec-title">Marketplace Platforms Covered:</span>
                  <div className="sub-pills-wrap">
                    {project.marketplaces.map((m) => (
                      <span key={m} className="mini-pill">{m}</span>
                    ))}
                  </div>
                </div>
              )}

              {project.coverage && (
                <div className="project-pill-section">
                  <span className="pill-sec-title">Coverage & Geographies:</span>
                  <div className="sub-pills-wrap">
                    <span className="mini-pill highlight-pill">🇮🇳 India Client Projects</span>
                    <span className="mini-pill highlight-pill">🇺🇸 USA International Projects</span>
                  </div>
                </div>
              )}

              {project.modules && (
                <div className="project-pill-section">
                  <span className="pill-sec-title">Curriculum Depth:</span>
                  <div className="sub-pills-wrap">
                    <span className="mini-pill">{project.modules}</span>
                    <span className="mini-pill">{project.classes}</span>
                    <span className="mini-pill">15+ Live Case Studies</span>
                  </div>
                </div>
              )}

              {/* What You Will Learn List */}
              <div className="project-curriculum-box">
                <h4>What You Will Learn & Practice:</h4>
                <ul className="project-learn-list">
                  {project.learningPoints.slice(0, 4).map((pt, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="learn-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Can Apply Preview */}
              <div className="who-can-apply-box">
                <span className="who-title">Who Can Apply:</span>
                <p className="who-content">
                  {project.whoCanApply.join(' • ')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="project-card-actions">
                <button 
                  onClick={() => onSelectProject(project)}
                  className="btn btn-outline-dark project-details-btn"
                >
                  <span>View Full Details & Process</span>
                  <ExternalLink size={16} />
                </button>
                <button 
                  onClick={() => onOpenEnquiry(project.id)}
                  className="btn btn-accent project-apply-btn"
                >
                  <span>Enquire / Apply</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
