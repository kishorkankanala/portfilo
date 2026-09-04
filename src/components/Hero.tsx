import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Send, Code2, Users2 } from 'lucide-react';
import { personalDetails, contactData } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume, onShowToast }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Full Stack Developer',
    'Computer Science Engineer',
    'AI & ML Enthusiast',
    'Java & Python Builder'
  ];

  // Cycling Typewriter Effect for Role Title
  useEffect(() => {
    const currentFullTitle = titles[titleIdx % titles.length];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedTitle(currentFullTitle.slice(0, typedTitle.length + 1));
        if (typedTitle === currentFullTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedTitle(currentFullTitle.slice(0, typedTitle.length - 1));
        if (typedTitle === '') {
          setIsDeleting(false);
          setTitleIdx((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedTitle, isDeleting, titleIdx]);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(255,75,34,0.12)_0,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Greeting & Bio */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Opportunities</span>
            <span className="text-white/20">•</span>
            <span className="text-[#ff4b22] font-semibold">Vijayawada, India</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">{personalDetails.shortName}</span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="h-10 sm:h-12 flex items-center">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#ff4b22] tracking-tight typing-cursor pr-1">
                {typedTitle}
              </span>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-[#e5e2e1]/75 max-w-xl leading-relaxed">
            {personalDetails.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              id="hero-view-work-btn"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('projects');
              }}
              className="bg-[#ff4b22] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase hover:bg-[#e03a13] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_25px_rgba(255,75,34,0.4)] flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="hero-contact-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#ff4b22]" />
              <span>Contact Me</span>
            </a>

            <button
              id="hero-download-resume-btn"
              onClick={onOpenResume}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#ff4b22]" />
              <span>Resume</span>
            </button>

            {/* Quick Profile Links */}
            <div className="flex items-center gap-2 pl-1">
              <a
                id="hero-github-link"
                href={contactData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 rounded-full bg-white/5 hover:bg-[#ff4b22] text-white/70 hover:text-white border border-white/15 hover:border-[#ff4b22] transition-all hover:scale-110 active:scale-95"
                title="View GitHub (github.com/kishorkankanala)"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                id="hero-linkedin-link"
                href={contactData.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 rounded-full bg-white/5 hover:bg-[#ff4b22] text-white/70 hover:text-white border border-white/15 hover:border-[#ff4b22] transition-all hover:scale-110 active:scale-95"
                title="Connect on LinkedIn"
              >
                <Users2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Dark Avatar Frame with Glowing Ambient Rings */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 sm:w-72 md:w-80 aspect-square group">
            {/* Ambient Radial Halo */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#ff4b22]/30 via-transparent to-[#ff4b22]/10 blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
            
            {/* Outer Ring */}
            <div className="absolute -inset-2 rounded-full border border-white/10 group-hover:border-[#ff4b22]/40 transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-0 rounded-full border-2 border-[#ff4b22]/60 shadow-[0_0_35px_rgba(255,75,34,0.3)] z-20 pointer-events-none" />

            {/* Photo */}
            <div className="absolute inset-1.5 rounded-full overflow-hidden bg-[#121212] z-10">
              <img
                src={personalDetails.avatarUrl}
                alt={personalDetails.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
            </div>

            {/* Floating Mini Tech Badges */}
            <div className="absolute -bottom-2 -left-2 z-30 px-3 py-1.5 rounded-full bg-[#161616]/95 border border-white/15 shadow-xl flex items-center gap-2 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff4b22]" />
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">Java & Spring</span>
            </div>

            <div className="absolute -top-2 -right-2 z-30 px-3 py-1.5 rounded-full bg-[#161616]/95 border border-white/15 shadow-xl flex items-center gap-2 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff4b22]" />
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">Full Stack & AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
