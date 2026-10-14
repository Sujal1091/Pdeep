import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Award, 
  Briefcase, 
  DollarSign, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Compass
} from 'lucide-react';

interface ProcessPageProps {
  onOpenEnquiry: () => void;
}

export function ProcessPage({ onOpenEnquiry }: ProcessPageProps) {
  const detailedStages = [
    {
      num: "01",
      title: "Structured Training Phase",
      subtitle: "15 to 60 Days Hands-On Curriculum",
      icon: <BookOpen size={28} />,
      desc: "Candidates enter an intensive training environment tailored to their chosen track. Our curriculum covers marketplace dashboards, product categorization, SKU taxonomy, attribute mapping, ticketing software, and AI optimization tools.",
      details: [
        "Interactive daily sessions with live practical demonstrations",
        "Assignments mirroring real seller catalog workflows",
        "Understanding marketplace compliance rules and catalog rejection avoidance"
      ]
    },
    {
      num: "02",
      title: "Assessment & Certification",
      subtitle: "Milestone Evaluation & Quality Checks",
      icon: <Award size={28} />,
      desc: "Upon concluding training, candidates complete comprehensive assessment tasks to prove their speed, catalog accuracy, attention to detail, and query resolution readiness.",
      details: [
        "Practical task assessment evaluated against live industry benchmarks",
        "Official Certificate issued upon successful completion",
        "Detailed feedback to polish any operational deficiencies"
      ]
    },
    {
      num: "03",
      title: "Project-Based Work Opportunities",
      subtitle: "Live Client Tasks & Onboarding",
      icon: <Briefcase size={28} />,
      desc: "After completing training and satisfying applicable criteria, candidates may be assigned projects based on their skills, eligibility, and project requirements. Tasks involve product listing, catalog creation, product information management, and customer query support.",
      details: [
        "Clear onboarding instructions and task allocation documentation",
        "Structured task requirements and productivity criteria",
        "Assignments across Indian domestic and international (USA) client workflows"
      ]
    },
    {
      num: "04",
      title: "Project-Based Payments & Stipends",
      subtitle: "Transparent Performance-Based Compensation",
      icon: <DollarSign size={28} />,
      desc: "Candidates receive payments or stipends for eligible work completed under their assigned projects. Payment rates, assessment processes, and payment schedules are communicated transparently before project participation.",
      details: [
        "Payments aligned directly with approved, quality-checked work output",
        "Productivity benchmarks communicated prior to task execution",
        "Performance incentives for high-accuracy contributors"
      ]
    },
    {
      num: "05",
      title: "Long-Term Engagement & Growth",
      subtitle: "Up to 3 Years Project Duration",
      icon: <TrendingUp size={28} />,
      desc: "Certain projects are designed for an engagement period of up to three years, subject to the specific project agreement and applicable terms. Candidates gain steady professional exposure and build genuine digital business authority.",
      details: [
        "Flexible working hours accommodating part-time and full-time contributors",
        "Clear exit terms allowing candidates to continue or transition smoothly",
        "Proven foundation for career advancement or starting personal digital ventures"
      ]
    }
  ];

  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <Compass size={14} />
            Step-by-Step Pathway
          </span>
          <h1>Our 5-Stage Training & Project Methodology</h1>
          <p className="subpage-lead">
            A transparent, industry-tested approach: Train. Apply. Work on Projects. Grow with Digital Business.
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Training & Work Process</span>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding subpage-content">
        <div className="container">
          <div className="section-header">
            <span className="pill-badge pill-badge-green">From Learner to Project Contributor</span>
            <h2>How You Progress Through PDEEPS</h2>
            <p>
              Each phase is designed to ensure you develop verified, real-world competence before handling live client catalogs or queries.
            </p>
          </div>

          <div className="process-stages-stack">
            {detailedStages.map((stage) => (
              <div key={stage.num} className="stage-deep-card">
                <div className="stage-card-num-box">
                  <span className="stage-card-num">{stage.num}</span>
                  <div className="stage-card-icon">{stage.icon}</div>
                </div>

                <div className="stage-card-main">
                  <span className="stage-card-sub">{stage.subtitle}</span>
                  <h3>{stage.title}</h3>
                  <p className="stage-card-desc">{stage.desc}</p>

                  <div className="stage-checkpoints">
                    <h4>Key Checkpoints:</h4>
                    <div className="checkpoints-grid">
                      {stage.details.map((d, dIdx) => (
                        <div key={dIdx} className="checkpoint-row">
                          <CheckCircle2 size={16} className="cp-icon" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="subpage-action-banner">
            <div>
              <h3>Ready to Take Stage 01?</h3>
              <p>Enroll in an upcoming batch for Product Listing, Email Support, or ADMC.</p>
            </div>
            <div className="action-buttons-wrap">
              <button onClick={onOpenEnquiry} className="btn btn-accent btn-lg">
                <span>Start Enrollment Enquiry</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/policy" className="btn btn-outline-dark btn-lg">
                <span>Review Official Policies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
