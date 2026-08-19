import React, { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight, Sparkles, Send } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  const [typedName, setTypedName] = useState('');
  const [isNameDone, setIsNameDone] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const portraitRef = useRef<HTMLDivElement>(null);

  const fullName = personalDetails.name;

  // Typewriter effect for Hero Name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        index++;
      } else {
        setIsNameDone(true);
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [fullName]);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 35;
      const y = (e.clientY - innerHeight / 2) / 35;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="min-h-[80vh] md:min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-8 pb-16 relative"
    >
      {/* Subtle Background Glow behind Hero */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-[#ff4b22]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff4b22]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left Content Column */}
      <div className="flex-1 space-y-7 z-10 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4b22]/10 border border-[#ff4b22]/20 text-[#ff4b22] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Software Engineer & AI Specialist</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#e5e2e1] leading-[1.12] tracking-tight">
          Hi, I&apos;m <br />
          <span
            id="hero-name"
            className={`text-[#ff4b22] transition-all inline-block ${
              !isNameDone ? 'typing-cursor pr-1' : ''
            }`}
          >
            {typedName || fullName}
          </span>
        </h1>

        {/* Roles Subtitle */}
        <div className="min-h-8">
          <p className="font-display text-base sm:text-lg md:text-xl text-[#e5e2e1]/90 font-medium tracking-wide">
            <span className="text-[#ff4b22] font-semibold">Full Stack Developer</span>
            <span className="mx-2 text-white/30">|</span>
            <span className="text-white/90">Computer Science Engineer</span>
            <span className="mx-2 text-white/30">|</span>
            <span className="text-[#ffb4a3] font-medium">AI Enthusiast</span>
          </p>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-[#e5e2e1]/75 max-w-2xl leading-relaxed">
          {personalDetails.bio}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <a
            id="hero-view-work-btn"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
            }}
            className="bg-[#ff4b22] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#e03a13] transition-all duration-300 glow-effect flex items-center gap-2 shadow-[0_0_25px_rgba(255,75,34,0.35)] group"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            id="hero-contact-btn"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-xl text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Contact Me</span>
          </a>

          <button
            id="hero-resume-btn"
            onClick={onOpenResume}
            className="bg-transparent text-white border border-white/20 px-7 py-4 rounded-xl text-sm font-semibold hover:bg-white/10 hover:border-[#ff4b22]/50 hover:text-[#ff4b22] transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>
      </div>

      {/* Right Column: Hero Portrait */}
      <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center items-center relative py-6">
        <div
          ref={portraitRef}
          id="hero-portrait-card"
          style={{
            transform: `translate3d(${-mousePos.x}px, ${-mousePos.y}px, 0)`,
          }}
          className="relative w-[280px] sm:w-[360px] md:w-[410px] aspect-square transition-transform duration-300 ease-out"
        >
          {/* Animated Ambient Halo */}
          <div className="absolute -inset-4 rounded-full border border-[#ff4b22]/30 animate-pulse pointer-events-none" />
          <div className="absolute -inset-8 rounded-full border border-[#ff4b22]/10 pointer-events-none" />
          
          {/* Glowing Ring Frame */}
          <div className="absolute inset-0 rounded-full border-2 border-[#ff4b22] shadow-[0_0_35px_rgba(255,75,34,0.5)] z-20 pointer-events-none" />

          {/* Portrait Image Container */}
          <div className="absolute inset-2 rounded-full overflow-hidden bg-[#151515] z-10 border border-white/10">
            <img
              src={personalDetails.avatarUrl}
              alt={personalDetails.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
          </div>

          {/* Floating Technology Badge */}
          <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 z-30 bg-[#121212]/90 backdrop-blur-md border border-[#ff4b22]/40 rounded-xl px-4 py-2.5 shadow-2xl flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff4b22] animate-ping" />
            <div className="text-xs">
              <p className="text-[#e5e2e1]/60 font-medium">Status</p>
              <p className="text-white font-semibold">Available for Hire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
