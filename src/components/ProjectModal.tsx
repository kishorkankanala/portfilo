import React, { useState } from 'react';
import { Project } from '../types';
import { X, Code2, ExternalLink, Check, Copy, Sparkles, Layers, Cpu, Database } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onShowToast,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.details.codeSnippet) {
      navigator.clipboard.writeText(project.details.codeSnippet);
      setCopiedCode(true);
      onShowToast('Code snippet copied to clipboard!');
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4 sticky top-0 bg-[#121212]/95 backdrop-blur-md z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff4b22] font-semibold mb-1">
              <span>PROJECT {project.number}</span>
              <span>•</span>
              <span className="uppercase text-white/60">CASE STUDY</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#ffb4a3] flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#ff4b22]" /> Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#ffb4a3] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#ff4b22]" /> Architectural Solution
              </h4>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white/80">
              Key Engineering Innovations:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.details.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-white/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b22] mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics if available */}
          {project.details.metrics && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white/80">
                Performance & Validation Metrics:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.details.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#ff4b22]/10 border border-[#ff4b22]/20 text-center"
                  >
                    <span className="text-sm font-bold text-white font-mono">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet Box */}
          {project.details.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white/80 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#ff4b22]" /> Core Implementation Excerpt
                </h4>
                <button
                  onClick={handleCopyCode}
                  className="text-xs text-white/60 hover:text-[#ff4b22] flex items-center gap-1 hover:underline"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy Snippet
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-[#090909] border border-white/10 font-code text-xs text-[#ffdad2] overflow-x-auto leading-relaxed">
                <code>{project.details.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white/60">
              Technologies Utilized:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.details.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-md border border-white/10 text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-white/10 flex items-center justify-between gap-4 bg-[#121212]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#ff4b22] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#e03a13] transition-colors flex items-center gap-2 glow-effect shadow-[0_0_15px_rgba(255,75,34,0.4)]"
          >
            <Code2 className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
