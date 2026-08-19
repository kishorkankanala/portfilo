import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { Award, BookOpen, Layers, Terminal, Sparkles, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-20 md:py-28 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Bio Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff4b22]">
            <span className="w-6 h-[2px] bg-[#ff4b22]" />
            <span>Profile Summary</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-[#e5e2e1]/80 leading-relaxed">
            {personalDetails.about}
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <CheckCircle className="w-5 h-5 text-[#ff4b22] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Full Stack Engineering</h4>
                <p className="text-xs text-[#e5e2e1]/60 mt-0.5">Java, Spring Boot, React & modern cloud tools</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <Sparkles className="w-5 h-5 text-[#ff4b22] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">AI & Deep Learning</h4>
                <p className="text-xs text-[#e5e2e1]/60 mt-0.5">YOLOv8 vision, Scikit-learn & Python pipelines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Bento Stats Column */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* CGPA Card (Spans full width on 2 cols) */}
          <div
            id="stat-cgpa-card"
            className="bento-card p-8 rounded-2xl flex flex-col items-center justify-center text-center sm:col-span-2 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-16 h-16 text-[#ff4b22]" />
            </div>
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-[#ff4b22] tracking-tight">
              {personalDetails.stats.cgpa}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#e5e2e1]/70 mt-2 uppercase tracking-widest">
              {personalDetails.stats.cgpaLabel}
            </span>
            <p className="text-xs text-white/40 mt-1">Dhanekula Institute of Engg. & Tech</p>
          </div>

          {/* Major Projects Card */}
          <div
            id="stat-projects-card"
            className="bento-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers className="w-10 h-10 text-[#ff4b22]" />
            </div>
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#ff4b22] tracking-tight">
              {personalDetails.stats.projects}
            </span>
            <span className="text-xs font-semibold text-[#e5e2e1]/70 mt-2 uppercase tracking-widest">
              {personalDetails.stats.projectsLabel}
            </span>
          </div>

          {/* Certifications Card */}
          <div
            id="stat-certs-card"
            className="bento-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen className="w-10 h-10 text-[#ff4b22]" />
            </div>
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#ff4b22] tracking-tight">
              {personalDetails.stats.certifications}
            </span>
            <span className="text-xs font-semibold text-[#e5e2e1]/70 mt-2 uppercase tracking-widest">
              {personalDetails.stats.certificationsLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
