import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  ShieldAlert,
  Briefcase
} from 'lucide-react';
import { COURSES_DATA } from '../data/content';
import type { ProjectCourse } from '../types';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectCourse) => void;
  onOpenEnquiry: (courseId?: string) => void;
}

export function ProjectsPage({ onSelectProject, onOpenEnquiry }: ProjectsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filtered = selectedFilter === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter(p => p.id === selectedFilter);

  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <Briefcase size={14} />
            Career Tracks & Projects
          </span>
          <h1>Projects & Certification Courses</h1>
          <p className="subpage-lead">
            Structured skill-development programs followed by practical assessments and opportunities for live business project assignments with performance-based stipends.
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Projects & Courses</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding subpage-content">
        <div className="container">
          {/* Filter Pills */}
          <div className="projects-filter-bar">
            <button 
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All 3 Tracks
            </button>
            {COURSES_DATA.map((p) => (
              <button 
                key={p.id}
                className={`filter-btn ${selectedFilter === p.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(p.id)}
              >
                {p.projectNumber}: {p.title.split(' ')[0]} {p.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Projects Detailed Cards */}
          <div className="projects-full-stack">
            {filtered.map((proj) => (
              <div key={proj.id} className="project-detail-hero-card">
                <div className="card-top-header">
                  <div className="header-badges">
                    <span className="badge-num">{proj.projectNumber}</span>
                    <span className="badge-highlight">{proj.badge}</span>
                  </div>
                  <h2>{proj.title}</h2>
                  <p className="card-top-desc">{proj.shortDescription}</p>
                </div>

                {/* Specs Bar */}
                <div className="specs-bar-full">
                  <div className="spec-col">
                    <Clock size={18} className="spec-ico" />
                    <div>
                      <span className="spec-heading">Training Period</span>
                      <strong>{proj.duration}</strong>
                    </div>
                  </div>

                  <div className="spec-col">
                    <Calendar size={18} className="spec-ico" />
                    <div>
                      <span className="spec-heading">Engagement & Schedule</span>
                      <strong>{proj.schedule}</strong>
                    </div>
                  </div>

                  <div className="spec-col">
                    <Award size={18} className="spec-ico" />
                    <div>
                      <span className="spec-heading">Certification</span>
                      <strong>{proj.certification}</strong>
                    </div>
                  </div>

                  <div className="spec-col">
                    <Users size={18} className="spec-ico" />
                    <div>
                      <span className="spec-heading">Age Eligibility</span>
                      <strong>{proj.ageEligibility}</strong>
                    </div>
                  </div>
                </div>

                {/* 2-Column Content Layout */}
                <div className="project-body-grid">
                  <div className="project-body-left">
                    <h3>Curriculum & Skills Acquired</h3>
                    <ul className="curriculum-checklist">
                      {proj.learningPoints.map((pt, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="check-bullet" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {proj.marketplaces && (
                      <div className="marketplaces-pill-group">
                        <span className="pill-group-title">Marketplace Exposure:</span>
                        <div className="pill-group-items">
                          {proj.marketplaces.map((m) => (
                            <span key={m} className="platform-tag">{m}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {proj.coverage && (
                      <div className="marketplaces-pill-group">
                        <span className="pill-group-title">Client Coverage:</span>
                        <div className="pill-group-items">
                          <span className="platform-tag highlight-green">🇮🇳 India Client Projects</span>
                          <span className="platform-tag highlight-green">🇺🇸 USA Client Projects</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="project-body-right">
                    <h3>Training & Project Process</h3>
                    <div className="workflow-steps-mini">
                      {proj.processSteps.map((step, sIdx) => (
                        <div key={sIdx} className="wf-mini-step">
                          <span className="wf-step-idx">{sIdx + 1}</span>
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>

                    <div className="target-candidate-box">
                      <h4>Who Can Apply:</h4>
                      <p>{proj.whoCanApply.join(' • ')}</p>
                    </div>

                    <div className="project-stipend-notice">
                      <ShieldAlert size={16} className="notice-icon" />
                      <p>
                        Eligible candidates assigned to projects receive performance-based stipends according to task milestones. Training fee is non-refundable. Zero placement fee.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="card-actions-bar">
                  <button 
                    onClick={() => onSelectProject(proj)}
                    className="btn btn-outline-dark"
                  >
                    <span>Inspect Full Syllabus & Details</span>
                    <ExternalLink size={16} />
                  </button>
                  <button 
                    onClick={() => onOpenEnquiry(proj.id)}
                    className="btn btn-accent btn-lg"
                  >
                    <span>Apply / Enquire for {proj.projectNumber}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Help */}
          <div className="subpage-action-banner">
            <div>
              <h3>Need Guidance on Which Project Fits You Best?</h3>
              <p>Our counseling team will assess your background, daily availability, and goals.</p>
            </div>
            <div className="action-buttons-wrap">
              <button onClick={() => onOpenEnquiry()} className="btn btn-accent btn-lg">
                <span>Request Free Counseling</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/process" className="btn btn-outline-dark btn-lg">
                <span>View 5-Step Process</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
