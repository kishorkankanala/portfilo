import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Globe, Database, Brain, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code_blocks':
        return <Code2 className="w-8 h-8 text-[#ff4b22]" />;
      case 'web':
        return <Globe className="w-8 h-8 text-[#ff4b22]" />;
      case 'database':
        return <Database className="w-8 h-8 text-[#ff4b22]" />;
      case 'psychology':
        return <Brain className="w-8 h-8 text-[#ff4b22]" />;
      case 'build':
        return <Wrench className="w-8 h-8 text-[#ff4b22]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#ff4b22]" />;
    }
  };

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-20 md:py-28 relative"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff4b22]">
          <Sparkles className="w-4 h-4" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Technical Arsenal
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            activeFilter === 'all'
              ? 'bg-[#ff4b22] text-white shadow-[0_0_15px_rgba(255,75,34,0.4)]'
              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
          }`}
        >
          All Skills
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeFilter === cat.id
                ? 'bg-[#ff4b22] text-white shadow-[0_0_15px_rgba(255,75,34,0.4)]'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            id={`skill-category-${category.id}`}
            className="bento-card p-7 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient Background Watermark Icon */}
            <div className="absolute top-2 right-2 p-2 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all pointer-events-none">
              {getIcon(category.icon)}
            </div>

            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2 rounded-xl bg-[#ff4b22]/10 border border-[#ff4b22]/20">
                  {getIcon(category.icon)}
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#ff4b22] transition-colors">
                  {category.name}
                </h3>
              </div>

              {/* Skill Tag Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag text-xs uppercase font-semibold tracking-wider px-3.5 py-1.5 bg-white/[0.05] rounded-lg border border-white/10 text-[#e5e2e1]/80 hover:text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Micro subtle footer bar */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-medium">
              <span>Proficiency Level</span>
              <span className="text-[#ff4b22]">Advanced</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
