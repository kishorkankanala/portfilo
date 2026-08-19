import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SocialSidebar } from './components/SocialSidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scrollspy observer to highlight current navigation item
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setActiveSection('home');
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#e5e2e1] relative selection:bg-[#ff4b22] selection:text-white">
      {/* Fixed Ambient Background Shaders */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-gradient-to-br from-[#ff4b22]/5 via-transparent to-[#ff4b22]/5"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#ff4b22]/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff4b22]/4 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating Social Icons (Left Side) */}
      <SocialSidebar />

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About />
        <Education />
        <Skills />
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={handleScrollToTop} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShowToast={showToast}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToast}
      />

      {/* Global Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
