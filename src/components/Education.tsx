import React, { useState } from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';

export const Education: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="education"
      aria-label="Education History"
      className="py-20 md:py-28 relative"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff4b22]">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Background</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Education
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="max-w-3xl mx-auto relative pl-6 sm:pl-10">
        {/* Glowing gradient vertical line */}
        <div className="timeline-line" />

        <div className="space-y-10">
          {educationList.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                id={`education-item-${item.id}`}
                className="relative group text-left"
              >
                {/* Timeline Dot */}
                <div
                  className="timeline-dot top-5 sm:top-6 transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />

                {/* Content Card */}
                <div className="bento-card p-6 sm:p-7 rounded-2xl ml-6 sm:ml-8 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#ff4b22] transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-[#ff4b22] text-sm sm:text-base font-semibold mt-1">
                        {item.institution}
                      </p>
                      <p className="text-white/60 text-xs sm:text-sm mt-2 flex items-center gap-2 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#ff4b22]" />
                        <span>{item.details}</span>
                      </p>
                    </div>

                    {item.highlights && item.highlights.length > 0 && (
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-colors shrink-0"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Expandable Key Coursework & Achievements */}
                  {isExpanded && item.highlights && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2 animate-fadeIn">
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#ff4b22]/90">
                        Highlights & Focus Areas:
                      </p>
                      <ul className="space-y-1.5 pl-1 text-xs sm:text-sm text-white/70">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b22] mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
