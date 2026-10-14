import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProcessPage } from './pages/ProcessPage';
import { VerificationPage } from './pages/VerificationPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

import type { ProjectCourse } from './types';
import './App.css';

export function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);
  const [detailProject, setDetailProject] = useState<ProjectCourse | null>(null);

  const handleOpenEnquiry = (courseId?: string) => {
    setSelectedCourseId(courseId);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedCourseId(undefined);
  };

  const handleOpenVerify = () => {
    const el = document.getElementById('verification');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="pdeeps-app-root">
        {/* Top Navbar */}
        <Navbar 
          onOpenEnquiry={handleOpenEnquiry} 
          onOpenVerify={handleOpenVerify} 
        />

        {/* Page Routes */}
        <main className="main-content-flow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onOpenVerify={handleOpenVerify} 
                  onSelectProject={(project) => setDetailProject(project)}
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/projects" 
              element={
                <ProjectsPage 
                  onSelectProject={(project) => setDetailProject(project)}
                  onOpenEnquiry={handleOpenEnquiry}
                />
              } 
            />
            <Route 
              path="/process" 
              element={<ProcessPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/policy" 
              element={<VerificationPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/testimonials" 
              element={<TestimonialsPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/faqs" 
              element={<FaqPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/FaqSection" 
              element={<FaqPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/privacy-policy" 
              element={<PrivacyPolicyPage />} 
            />
            <Route 
              path="/terms" 
              element={<TermsPage />} 
            />
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onOpenVerify={handleOpenVerify} 
                  onSelectProject={(project) => setDetailProject(project)}
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer 
          onOpenEnquiry={handleOpenEnquiry} 
          onOpenVerify={handleOpenVerify} 
        />

        {/* Project Detail Modal */}
        <ProjectDetailModal 
          project={detailProject}
          onClose={() => setDetailProject(null)}
          onApply={(courseId) => {
            setDetailProject(null);
            handleOpenEnquiry(courseId);
          }}
        />

        {/* Enrollment & Enquiry Modal */}
        <EnquiryModal 
          isOpen={isEnquiryOpen}
          initialCourseId={selectedCourseId}
          onClose={handleCloseEnquiry}
        />

        {/* Global Floating WhatsApp Contact Action */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
