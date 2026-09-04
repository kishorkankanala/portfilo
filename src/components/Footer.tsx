import React from 'react';
import { personalDetails, contactData } from '../data/portfolioData';
import { ArrowUp, Code2, Users2, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer
      id="footer"
      className="w-full pt-16 pb-12 px-6 sm:px-8 bg-[#080808] border-t border-white/5 relative z-10 text-center space-y-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Scroll to Top Button */}
        <button
          id="scroll-to-top-btn"
          onClick={onScrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-white/5 hover:bg-[#ff4b22] border border-white/10 hover:border-[#ff4b22] text-white/70 hover:text-white transition-all shadow-lg hover:scale-105 active:scale-95"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Branding */}
        <div className="space-y-1">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {personalDetails.name}
          </h2>
          <p className="text-xs text-[#ff4b22] font-mono uppercase tracking-widest">
            Full Stack Developer • Computer Science Engineer
          </p>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-4">
          <a
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-[#ff4b22] text-white/70 hover:text-white transition-all duration-200 border border-white/10 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-[#ff4b22] text-white/70 hover:text-white transition-all duration-200 border border-white/10 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Users2 className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${contactData.email}`}
            className="p-3 rounded-full bg-white/5 hover:bg-[#ff4b22] text-white/70 hover:text-white transition-all duration-200 border border-white/10 hover:scale-110"
            aria-label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="text-xs text-white/40 pt-4 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} {personalDetails.shortName}. All rights reserved.</span>
          <span className="flex items-center gap-1 text-white/30">
            Crafted with passion & precision
          </span>
        </div>
      </div>
    </footer>
  );
};
