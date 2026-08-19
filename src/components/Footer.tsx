import React from 'react';
import { personalDetails, contactData } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer
      id="footer"
      className="w-full py-12 px-6 sm:px-8 flex flex-col items-center gap-4 bg-[#080808] border-t border-white/5 relative z-10 text-center"
    >
      {/* Scroll to Top Floating Button */}
      <button
        id="scroll-to-top-btn"
        onClick={onScrollToTop}
        aria-label="Scroll to top of page"
        className="mb-2 p-3 rounded-full bg-white/5 hover:bg-[#ff4b22] border border-white/10 hover:border-[#ff4b22] text-white/60 hover:text-white transition-all duration-300 group"
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Brand Title */}
      <div className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
        {personalDetails.shortName}
      </div>

      {/* Available for Hire Status */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <a
          href="#contact"
          className="text-xs sm:text-sm font-medium text-white/70 hover:text-[#ff4b22] transition-colors"
        >
          Available for hire
        </a>
      </div>

      {/* Copyright */}
      <div className="text-xs text-white/40 mt-2">
        &copy; {new Date().getFullYear()} {personalDetails.shortName}. All rights reserved.
      </div>
    </footer>
  );
};
