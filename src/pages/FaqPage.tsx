import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

interface FaqPageProps {
  onOpenEnquiry: () => void;
}

export function FaqPage({ onOpenEnquiry }: FaqPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['gen-1', 'pl-1', 'pay-1']);

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'general', label: 'General Institute' },
    { id: 'product-listing', label: 'Product Listing (Project 01)' },
    { id: 'email-support', label: 'Email Support (Project 02)' },
    { id: 'admc', label: 'ADMC & AI (Project 03)' },
    { id: 'payment-policy', label: 'Fees & Policies' },
  ];

  const filtered = FAQ_DATA.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(i => i !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div className="subpage-wrapper">
      {/* Header */}
      <section className="subpage-header">
        <div className="container subpage-header-inner">
          <span className="pill-badge pill-badge-dark">
            <HelpCircle size={14} />
            Knowledge Base
          </span>
          <h1>Frequently Asked Questions</h1>
          <p className="subpage-lead">
            Find answers regarding training schedules, marketplace eligibility, stipends, non-refundable fees, and authorized communication channels.
          </p>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">FAQs</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding subpage-content">
        <div className="container">
          {/* Search Bar & Filters */}
          <div className="faq-search-wrapper">
            <div className="faq-search-bar">
              <Search className="search-icon" size={18} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. stipend, fee, online, hours, marketplaces)..."
                className="faq-search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="search-clear-btn">
                  Clear
                </button>
              )}
            </div>

            <div className="faq-page-pills">
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`faq-page-pill ${activeCategory === c.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="faq-list-container">
            {filtered.length === 0 ? (
              <div className="faq-no-results">
                <HelpCircle size={40} className="no-res-icon" />
                <h3>No matching questions found</h3>
                <p>Try searching for other terms or contact our counseling desk directly.</p>
                <button onClick={() => setSearchQuery('')} className="btn btn-outline-dark btn-sm">
                  Reset Search
                </button>
              </div>
            ) : (
              filtered.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                  <div key={item.id} className={`faq-card-full ${isOpen ? 'open' : ''}`}>
                    <button 
                      onClick={() => toggleAccordion(item.id)}
                      className="faq-card-trigger"
                      aria-expanded={isOpen}
                    >
                      <span className="faq-card-q">{item.question}</span>
                      <ChevronDown size={20} className={`faq-arrow ${isOpen ? 'rotate' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-card-content">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Action */}
          <div className="subpage-action-banner">
            <div>
              <h3>Still Have Unanswered Questions?</h3>
              <p>Our admissions desk will assist you with batch dates, computer requirements, and onboarding.</p>
            </div>
            <div className="action-buttons-wrap">
              <button onClick={onOpenEnquiry} className="btn btn-accent btn-lg">
                <MessageSquare size={18} />
                <span>Submit an Enquiry</span>
              </button>
              <Link to="/contact" className="btn btn-outline-dark btn-lg">
                <span>View Contact Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
