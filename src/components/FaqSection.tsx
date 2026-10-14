import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

interface FaqSectionProps {
  onOpenEnquiry: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['gen-1', 'pl-1', 'pay-1']);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General Institute' },
    { id: 'product-listing', label: 'Project 01: Product Listing' },
    { id: 'email-support', label: 'Project 02: Email Support' },
    { id: 'admc', label: 'Project 03: ADMC Course' },
    { id: 'payment-policy', label: 'Fees & Policies' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faqs" className="section-padding faq-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="pill-badge pill-badge-green">Common Queries</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Have questions about training schedules, live project eligibility, stipends, or official policies? Browse through answers below.
          </p>

          {/* Filter Pills */}
          <div className="faq-category-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`faq-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Container */}
        <div className="faq-accordion-list">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div 
                key={faq.id} 
                className={`faq-item-card ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    <ChevronDown size={20} className={`chevron ${isOpen ? 'rotate' : ''}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Prompt Box */}
        <div className="faq-still-questions">
          <div className="faq-prompt-text">
            <h4>Still have questions that aren't answered here?</h4>
            <p>Our counseling and admissions team will assist you with batch timings, technical requirements, and project slots.</p>
          </div>
          <button 
            onClick={onOpenEnquiry}
            className="btn btn-outline-dark prompt-btn"
          >
            <MessageSquare size={16} />
            <span>Submit a Question / Enquiry</span>
          </button>
        </div>
      </div>
    </section>
  );
};
