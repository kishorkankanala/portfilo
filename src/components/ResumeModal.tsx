import React from 'react';
import { personalDetails, educationList, skillCategories, projectsList, certificationsList, contactData } from '../data/portfolioData';
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Award, Briefcase, Code2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onShowToast('Preparing Resume for download...');
    window.print();
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-white/15 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4 bg-[#181818] rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff4b22]" />
            <h3 className="font-display text-sm sm:text-base font-bold text-white uppercase tracking-wider">
              Curriculum Vitae — {personalDetails.shortName}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/10"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-lg bg-[#ff4b22] hover:bg-[#e03a13] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors glow-effect"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0f0f0f] text-[#e5e2e1]">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {personalDetails.name}
            </h1>
            <p className="text-sm font-semibold text-[#ff4b22] mt-1">
              Full Stack Developer | Computer Science Engineer | AI Enthusiast
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-white/70 mt-3 pt-2">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ff4b22]" />
                <a href={`mailto:${contactData.email}`} className="hover:underline">{contactData.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ff4b22]" />
                <span>{contactData.displayPhone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#ff4b22]" />
                <a href={contactData.linkedin} target="_blank" rel="noreferrer" className="hover:underline">{contactData.linkedinDisplay}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff4b22]" />
                <span>{contactData.location}</span>
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#ff4b22]">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {personalDetails.about} {personalDetails.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#ff4b22] flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                    <span className="text-xs text-[#ff4b22] font-semibold">{edu.year}</span>
                  </div>
                  <p className="text-xs text-white/70 mt-0.5">{edu.institution}</p>
                  {edu.score && <p className="text-xs text-[#ffb4a3] font-medium mt-1">{edu.score}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#ff4b22] flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-white">{cat.name}: </span>
                  <span className="text-white/75">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#ff4b22] flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Key Projects
            </h2>
            <div className="space-y-3">
              {projectsList.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                    <span className="text-xs font-mono text-[#ff4b22]">{proj.tags.slice(0, 3).join(' • ')}</span>
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="text-[11px] text-white/65 list-disc list-inside space-y-0.5 pt-1">
                    {proj.details.keyFeatures.slice(0, 2).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3 pb-2">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#ff4b22] flex items-center gap-2">
              <Award className="w-4 h-4" /> Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsList.map((cert) => (
                <div key={cert.id} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b22] shrink-0" />
                  <div>
                    <span className="font-semibold text-white">{cert.title}</span>
                    <span className="text-white/50 text-[11px] block">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
