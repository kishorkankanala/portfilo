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
import { ScrollReveal } from './components/ScrollReveal';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scrollspy to detect active section in viewport
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'education',
      'skills',
      'projects',
      'certifications',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

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
      const navOffset = 70;
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
      {/* Top Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Left Fixed Social Icons */}
      <SocialSidebar />

      {/* Hero Section */}
      <div id="home">
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />
      </div>

      {/* Main Sections Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Education />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <ScrollReveal>
          <Certifications />
        </ScrollReveal>
        <ScrollReveal>
          <Contact onShowToast={showToast} />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal threshold={0.05} rootMargin="0px 0px -20px 0px">
        <Footer onScrollToTop={handleScrollToTop} />
      </ScrollReveal>

      {/* Modals & Toast */}
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

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
