import React from 'react';
import { projectsList } from '../data/portfolioData';
import { Project } from '../types';
import { Code2, ExternalLink, Vote, Utensils, Trees, Layers, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'how_to_vote':
        return <Vote className="w-20 h-20 text-[#ff4b22]/70 group-hover:text-[#ff4b22] group-hover:scale-110 transition-all duration-500" />;
      case 'restaurant':
        return <Utensils className="w-20 h-20 text-[#ff4b22]/70 group-hover:text-[#ff4b22] group-hover:scale-110 transition-all duration-500" />;
      case 'nature':
        return <Trees className="w-20 h-20 text-[#ff4b22]/70 group-hover:text-[#ff4b22] group-hover:scale-110 transition-all duration-500" />;
      default:
        return <Layers className="w-20 h-20 text-[#ff4b22]/70 group-hover:text-[#ff4b22] group-hover:scale-110 transition-all duration-500" />;
    }
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-20 md:py-28 relative"
    >
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff4b22]">
            <Layers className="w-4 h-4" />
            <span>Selected Portfolio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Work
          </h2>
        </div>
      </ScrollReveal>

      {/* Projects List */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {projectsList.map((project, index) => {
          const isEven = index % 2 === 1; // Project 02 has content on left, visual on right

          return (
            <ScrollReveal key={project.id}>
              <div
                id={`project-card-${project.id}`}
                className="bento-card rounded-2xl overflow-hidden group transition-all duration-500"
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
                {/* Visual Art Box Column */}
                <div
                  className={`lg:col-span-6 bg-[#161616] relative overflow-hidden flex items-center justify-center p-12 min-h-[260px] lg:min-h-full border-b lg:border-b-0 ${
                    isEven ? 'order-1 lg:order-2 lg:border-l border-white/5' : 'order-1 lg:border-r border-white/5'
                  }`}
                >
                  {/* Subtle Grid Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  
                  {/* Gradient Light Vignette */}
                  <div className="absolute inset-0 bg-radial from-[#ff4b22]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Icon */}
                  <div className="relative z-10 p-8 rounded-full bg-[#0d0d0d]/80 border border-white/10 group-hover:border-[#ff4b22]/40 shadow-2xl transition-all duration-500">
                    {getProjectIcon(project.icon)}
                  </div>

                  {/* Corner Badge */}
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-white/30 px-2.5 py-1 rounded bg-white/5 border border-white/5">
                    Case Study #{project.number}
                  </span>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center text-left ${
                    isEven ? 'order-2 lg:order-1' : 'order-2'
                  }`}
                >
                  {/* Project Number */}
                  <span className="font-code text-sm sm:text-base font-bold text-[#ff4b22] mb-3">
                    {project.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#ff4b22] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#e5e2e1]/75 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-tag text-[10px] sm:text-xs uppercase font-semibold tracking-wider px-2.5 py-1 bg-white/5 rounded border border-white/10 text-[#e5e2e1]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/90 hover:text-[#ff4b22] transition-colors flex items-center gap-2 text-sm font-semibold py-2 px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
                    >
                      <Code2 className="w-4 h-4 text-[#ff4b22]" />
                      <span>GitHub</span>
                    </a>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs uppercase tracking-wider font-semibold text-white/70 hover:text-white flex items-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 hover:bg-[#ff4b22] hover:text-white border border-white/10 hover:border-[#ff4b22] transition-all"
                    >
                      <span>Explore Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
