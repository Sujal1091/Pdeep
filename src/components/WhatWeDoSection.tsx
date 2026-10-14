import React from 'react';
import { 
  GraduationCap, 
  Layers, 
  Briefcase, 
  LineChart, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { WHAT_WE_DO } from '../data/content';

interface WhatWeDoSectionProps {
  onOpenEnquiry: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onOpenEnquiry }) => {
  const icons = [
    <GraduationCap key="0" size={32} />,
    <Layers key="1" size={32} />,
    <Briefcase key="2" size={32} />,
    <LineChart key="3" size={32} />
  ];

  return (
    <section id="what-we-do" className="section-padding what-we-do-section">
      <div className="container">
        <div className="section-header">
          <span className="pill-badge pill-badge-green">What We Do</span>
          <h2>Comprehensive E-Commerce Capabilities</h2>
          <p>
            Whether you want to acquire high-demand digital skills or need specialized catalog support for your brand, we provide end-to-end expertise.
          </p>
        </div>

        <div className="what-we-do-grid">
          {WHAT_WE_DO.map((item, idx) => (
            <div key={item.id} className="service-card">
              <div className="service-header">
                <div className="service-icon-box">
                  {icons[idx]}
                </div>
                <span className="service-number">{item.number}</span>
              </div>

              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.description}</p>

              <div className="service-points">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="service-point-item">
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="service-card-action">
                <button 
                  onClick={onOpenEnquiry} 
                  className="service-link-btn"
                >
                  <span>Inquire about this capability</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
