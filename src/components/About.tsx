import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { Award, BookOpen, Layers, CheckCircle2, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-16 md:py-24 relative"
    >
      <div className="space-y-12">
        {/* Main "Hello!" Card matching video design */}
        <div className="bento-card p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Avatar with Glow */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden border-2 border-[#ff4b22]/50 shadow-[0_0_30px_rgba(255,75,34,0.3)] group">
                <img
                  src={personalDetails.avatarUrl}
                  alt={personalDetails.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Intro Description & Chips */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                    Hello!
                  </h2>
                  <span className="text-2xl">👋</span>
                </div>

                <p className="text-base sm:text-lg text-[#e5e2e1]/85 leading-relaxed">
                  Hi, my name is <span className="text-white font-bold">{personalDetails.shortName}</span>, an aspiring software engineer based in <span className="text-[#ff4b22] font-semibold">Vijayawada, India</span>. {personalDetails.about}
                </p>
              </div>

              {/* 3 Featured Tech Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff4b22]" />
                  <span className="text-xs font-mono font-bold text-white uppercase">JAVA & SPRING</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff4b22]" />
                  <span className="text-xs font-mono font-bold text-white uppercase">FULL STACK REACT</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff4b22]" />
                  <span className="text-xs font-mono font-bold text-white uppercase">AI & PYTHON</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          {/* CGPA */}
          <div
            id="stat-cgpa-card"
            className="bento-card p-8 rounded-2xl flex flex-col items-center justify-center group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-14 h-14 text-[#ff4b22]" />
            </div>
            <span className="font-display text-5xl font-extrabold text-[#ff4b22] tracking-tight">
              {personalDetails.stats.cgpa}
            </span>
            <span className="text-xs font-semibold text-white/70 mt-2 uppercase tracking-widest">
              {personalDetails.stats.cgpaLabel}
            </span>
            <p className="text-[11px] text-white/40 mt-1">Dhanekula Institute of Engg.</p>
          </div>

          {/* Major Projects */}
          <div
            id="stat-projects-card"
            className="bento-card p-8 rounded-2xl flex flex-col items-center justify-center group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers className="w-14 h-14 text-[#ff4b22]" />
            </div>
            <span className="font-display text-5xl font-extrabold text-[#ff4b22] tracking-tight">
              {personalDetails.stats.projects}
            </span>
            <span className="text-xs font-semibold text-white/70 mt-2 uppercase tracking-widest">
              {personalDetails.stats.projectsLabel}
            </span>
            <p className="text-[11px] text-white/40 mt-1">Full-stack & AI Systems</p>
          </div>

          {/* Certifications */}
          <div
            id="stat-certs-card"
            className="bento-card p-8 rounded-2xl flex flex-col items-center justify-center group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen className="w-14 h-14 text-[#ff4b22]" />
            </div>
            <span className="font-display text-5xl font-extrabold text-[#ff4b22] tracking-tight">
              {personalDetails.stats.certifications}
            </span>
            <span className="text-xs font-semibold text-white/70 mt-2 uppercase tracking-widest">
              {personalDetails.stats.certificationsLabel}
            </span>
            <p className="text-[11px] text-white/40 mt-1">Infosys & IIT Bombay</p>
          </div>
        </div>
      </div>
    </section>
  );
};
