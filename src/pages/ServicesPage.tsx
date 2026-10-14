import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Layers, 
  Briefcase, 
  LineChart, 
  CheckCircle2, 
  ShoppingBag, 
  ArrowRight
} from 'lucide-react';
import { WHAT_WE_DO } from '../data/content';

interface ServicesPageProps {
  onOpenEnquiry: () => void;
}

export function ServicesPage({ onOpenEnquiry }: ServicesPageProps) {
  const serviceIcons = [
    <GraduationCap key="0" size={32} />,
    <Layers key="1" size={32} />,
    <Briefcase key="2" size={32} />,
    <LineChart key="3" size={32} />
  ];

  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <ShoppingBag size={14} />
            Capabilities & Solutions
          </span>
          <h1>What We Do & Our Services</h1>
          <p className="subpage-lead">
            Comprehensive e-commerce training, product listing services, and enterprise catalog management across leading marketplaces.
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Services & What We Do</span>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding subpage-content">
        <div className="container">
          <div className="section-header">
            <span className="pill-badge pill-badge-green">Core Capabilities</span>
            <h2>Bridging Practical Skills & Seller Demands</h2>
            <p>
              We cater both to aspiring candidates looking to build viable digital careers and business clients requiring structured catalog operations.
            </p>
          </div>

          <div className="services-detailed-list">
            {WHAT_WE_DO.map((item, idx) => (
              <div key={item.id} className="service-detail-row">
                <div className="service-row-icon-col">
                  <div className="service-icon-box-lg">
                    {serviceIcons[idx]}
                  </div>
                  <span className="service-row-number">{item.number}</span>
                </div>

                <div className="service-row-main-col">
                  <h3>{item.title}</h3>
                  <p className="service-row-lead">{item.description}</p>

                  <div className="service-deliverables">
                    <h4>Key Deliverables & Methodologies:</h4>
                    <div className="deliverables-grid">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="deliverable-item">
                          <CheckCircle2 size={18} className="deliverable-icon" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-row-action-col">
                  <div className="action-card-mini">
                    <span className="action-card-tag">For Candidates & Clients</span>
                    <p>Interested in exploring this capability or enrolling in upcoming batches?</p>
                    <button onClick={onOpenEnquiry} className="btn btn-primary btn-sm">
                      <span>Submit Enquiry</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* Bottom Action */}
          <div className="subpage-action-banner">
            <div>
              <h3>Need Catalog Management or Skills Training?</h3>
              <p>Speak to our team today to discuss batch timings or vendor client support.</p>
            </div>
            <div className="action-buttons-wrap">
              <button onClick={onOpenEnquiry} className="btn btn-accent btn-lg">
                <span>Contact Admissions</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/projects" className="btn btn-outline-dark btn-lg">
                <span>View Flagship Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
