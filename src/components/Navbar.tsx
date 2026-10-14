import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  Briefcase, 
  Layers, 
  Compass, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  Lock,
  Phone
} from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (courseId?: string) => void;
  onOpenVerify: () => void;
}

export function Navbar({ onOpenEnquiry, onOpenVerify }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Dropdown states for desktop & mobile
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({
    programs: false,
    guide: false
  });

  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or route change
  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (key: string) => {
    setMobileExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isProgramsActive = ['/projects', '/services'].includes(location.pathname);
  const isGuideActive = ['/process', '/policy', '/testimonials', '/faqs', '/FaqSection', '/privacy-policy', '/terms'].includes(location.pathname);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
      {/* Top Notification Strip */}
      <div className="navbar-top-strip">
        <div className="container top-strip-inner">
          <span className="top-strip-item">
            <ShieldCheck size={14} className="strip-icon" />
            <span>Official Email Verification: Only <strong>@pdib.in</strong> is authorized</span>
          </span>
          <div className="top-strip-actions">
            <a 
              href="tel:+918284081752"
              className="top-strip-phone"
              title="Call PDEEPS Admissions: 8284081752"
            >
              <Phone size={12} />
              <span>Call: 8284081752</span>
            </a>
            <span className="divider">•</span>
            <button 
              onClick={() => {
                navigate('/policy');
                onOpenVerify();
              }} 
              className="top-strip-btn"
              title="Verify an email address from PDEEPS"
            >
              Verify Sender
            </button>
            <span className="divider">•</span>
            <span className="top-strip-tag">Zero Placement Fee Policy</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container navbar-main">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand">
          <div className="nav-logo-box">
            <img 
              src="/logo.jpeg" 
              alt="PDEEPS Logo" 
              className="nav-logo-img" 
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="logo-fallback-badge">P</span>
          </div>
          <div className="nav-brand-text">
            <span className="brand-title">PDEEPS INSTITUTE</span>
            <span className="brand-subtitle">E-Commerce & Digital Business</span>
          </div>
        </Link>

        {/* Desktop Navigation with Menus & Submenus */}
        <nav className="desktop-nav">
          {/* Home */}
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>

          {/* About */}
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>

          {/* Submenu 1: Programs & Services */}
          <div 
            className={`nav-dropdown-item ${openDropdown === 'programs' ? 'open' : ''}`}
            onMouseEnter={() => setOpenDropdown('programs')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              className={`nav-link dropdown-toggle ${isProgramsActive ? 'active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'programs' ? null : 'programs')}
              aria-expanded={openDropdown === 'programs'}
            >
              <span>Programs & Services</span>
              <ChevronDown size={14} className="dropdown-chevron" />
            </button>

            <div className="nav-submenu-card">
              <Link to="/projects" className="submenu-entry">
                <div className="submenu-icon-box">
                  <Briefcase size={18} />
                </div>
                <div className="submenu-entry-text">
                  <strong>Projects & Courses</strong>
                  <span>Product Listing, Email Support & ADMC tracks</span>
                </div>
              </Link>

              <Link to="/services" className="submenu-entry">
                <div className="submenu-icon-box">
                  <Layers size={18} />
                </div>
                <div className="submenu-entry-text">
                  <strong>What We Do & Services</strong>
                  <span>Catalog management, vendor solutions & training</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Submenu 2: Candidate Guide & Policies (Groups Process, Verification, Testimonials, FAQs) */}
          <div 
            className={`nav-dropdown-item ${openDropdown === 'guide' ? 'open' : ''}`}
            onMouseEnter={() => setOpenDropdown('guide')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              className={`nav-link dropdown-toggle ${isGuideActive ? 'active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'guide' ? null : 'guide')}
              aria-expanded={openDropdown === 'guide'}
            >
              <span>Candidate Guide</span>
              <ChevronDown size={14} className="dropdown-chevron" />
            </button>

            <div className="nav-submenu-card grid-submenu">
              <Link to="/process" className="submenu-entry">
                <div className="submenu-icon-box">
                  <Compass size={18} />
                </div>
                <div className="submenu-entry-text">
                  <strong>5-Step Process</strong>
                  <span>Training to project allocation workflow</span>
                </div>
              </Link>

              <Link to="/policy" className="submenu-entry">
                <div className="submenu-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div className="submenu-entry-text">
                  <strong>Official Policy & Verification</strong>
                  <span>Domain verification & zero placement fee</span>
                </div>
              </Link>

              <Link to="/testimonials" className="submenu-entry">
                <div className="submenu-icon-box">
                  <MessageSquare size={18} />
                </div>
                <div className="submenu-entry-text">
                  <strong>Testimonials</strong>
                  <span>Verified candidate experiences & reviews</span>
                </div>
              </Link>

              <Link to="/faqs" className="submenu-entry">
                <div className="submenu-icon-box">
                  <HelpCircle size={18} />
                </div>
                <div className="submenu-entry-text">
                  <strong>Frequently Asked Questions</strong>
                  <span>Quick answers on stipends, fees & hours</span>
                </div>
              </Link>

              <div className="submenu-divider-line"></div>

              <div className="submenu-legal-mini-row">
                <Link to="/privacy-policy" className="legal-mini-link">
                  <Lock size={13} />
                  <span>Privacy Policy</span>
                </Link>
                <span className="dot">•</span>
                <Link to="/terms" className="legal-mini-link">
                  <FileText size={13} />
                  <span>Terms of Service</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop Action */}
        <div className="nav-cta-group">
          <a 
            href="tel:+918284081752" 
            className="btn btn-outline-light btn-sm nav-call-btn"
            title="Call Admissions: 8284081752"
          >
            <Phone size={14} />
            <span>Call 8284081752</span>
          </a>

          <button 
            onClick={() => onOpenEnquiry()} 
            className="btn btn-accent btn-sm nav-cta"
          >
            <span>Enquire Now</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Accordion Submenus */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            <div className="mobile-drawer-links">
              <NavLink 
                to="/" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                end
              >
                Home
              </NavLink>

              <NavLink 
                to="/about" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </NavLink>

              {/* Mobile Accordion 1: Programs & Services */}
              <div className="mobile-accordion-section">
                <button 
                  className="mobile-accordion-trigger"
                  onClick={() => toggleMobileSubmenu('programs')}
                >
                  <span>Programs & Services</span>
                  <ChevronDown size={16} className={`acc-chevron ${mobileExpanded.programs ? 'rotate' : ''}`} />
                </button>
                {mobileExpanded.programs && (
                  <div className="mobile-submenu-body">
                    <Link 
                      to="/projects" 
                      className="mobile-sublink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Briefcase size={16} />
                      <span>Projects & Courses</span>
                    </Link>
                    <Link 
                      to="/services" 
                      className="mobile-sublink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Layers size={16} />
                      <span>What We Do & Services</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Accordion 2: Candidate Guide & Policies */}
              <div className="mobile-accordion-section">
                <button 
                  className="mobile-accordion-trigger"
                  onClick={() => toggleMobileSubmenu('guide')}
                >
                  <span>Candidate Guide</span>
                  <ChevronDown size={16} className={`acc-chevron ${mobileExpanded.guide ? 'rotate' : ''}`} />
                </button>
                {mobileExpanded.guide && (
                  <div className="mobile-submenu-body">
                    <Link 
                      to="/process" 
                      className="mobile-sublink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Compass size={16} />
                      <span>5-Step Process</span>
                    </Link>
                    <Link 
                      to="/policy" 
                      className="mobile-sublink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <ShieldCheck size={16} />
                      <span>Official Policy & Verification</span>
                    </Link>
                    <Link 
                      to="/testimonials" 
                      className="mobile-sublink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MessageSquare size={16} />
                      <span>Candidate Testimonials</span>
                    </Link>
                    <Link 
                      to="/faqs" 
                      className="mobile-sublink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <HelpCircle size={16} />
                      <span>Frequently Asked Questions</span>
                    </Link>
                    <Link 
                      to="/privacy-policy" 
                      className="mobile-sublink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Lock size={16} />
                      <span>Privacy Policy</span>
                    </Link>
                    <Link 
                      to="/terms" 
                      className="mobile-sublink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FileText size={16} />
                      <span>Terms of Service</span>
                    </Link>
                  </div>
                )}
              </div>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>

            <div className="mobile-drawer-footer">
              <a 
                href="tel:+918284081752"
                className="btn btn-outline-light mobile-drawer-btn"
              >
                <Phone size={18} />
                <span>Call Admissions: 8284081752</span>
              </a>
              <Link 
                to="/policy" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-outline-light mobile-drawer-btn"
              >
                <ShieldCheck size={18} />
                <span>Verify Official Email</span>
              </Link>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn btn-accent mobile-drawer-btn"
              >
                <span>Enquire Now / Apply</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
