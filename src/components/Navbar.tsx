import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick('home', e)}
            className="group flex items-center gap-2 text-white font-bold text-xl sm:text-2xl tracking-tight transition-colors"
          >
            <span className="font-display">
              {personalDetails.shortName}
              <span className="text-[#ff4b22]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 bg-white/[0.03] backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#ff4b22] font-bold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#ff4b22] rounded-full shadow-[0_0_8px_#ff4b22]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Buttons Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-white px-4 py-2 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#ff4b22]" />
              Resume
            </button>

            <a
              id="nav-hire-btn"
              href="#contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className="bg-[#ff4b22] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#e03a13] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(255,75,34,0.35)] flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation"
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl md:hidden flex flex-col pt-24 px-6 pb-8 border-b border-white/10 animate-fadeIn"
        >
          <div className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`text-base font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#ff4b22] text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-xl border border-white/20 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/5 text-sm"
            >
              <Download className="w-4 h-4 text-[#ff4b22]" />
              View & Download Resume
            </button>
            <a
              id="mobile-hire-btn"
              href="#contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className="w-full py-3.5 rounded-xl bg-[#ff4b22] text-white font-semibold text-center flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(255,75,34,0.4)]"
            >
              <Send className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
};
