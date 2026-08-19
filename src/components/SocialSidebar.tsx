import React from 'react';
import { Code2, Users2, Mail, ExternalLink } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export const SocialSidebar: React.FC = () => {
  const socials = [
    {
      id: 'sidebar-github',
      icon: Code2,
      label: 'GitHub',
      href: contactData.github,
      tooltip: 'View Source Code & Repos'
    },
    {
      id: 'sidebar-linkedin',
      icon: Users2,
      label: 'LinkedIn',
      href: contactData.linkedin,
      tooltip: 'Connect on LinkedIn'
    },
    {
      id: 'sidebar-email',
      icon: Mail,
      label: 'Email',
      href: `mailto:${contactData.email}`,
      tooltip: 'Send an Email'
    },
  ];

  return (
    <aside
      id="social-sidebar"
      aria-label="Social links sidebar"
      className="fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40 hidden md:flex"
    >
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20 mx-auto" />
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            id={item.id}
            href={item.href}
            target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noreferrer"
            aria-label={item.label}
            className="group relative p-2.5 rounded-xl text-white/40 hover:text-[#ff4b22] hover:-translate-y-1 hover:bg-[#ff4b22]/10 border border-transparent hover:border-[#ff4b22]/30 transition-all duration-300 glow-effect"
          >
            <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-3 px-2.5 py-1 bg-[#1a1a1a] text-white text-xs rounded-md border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-xl -translate-x-1 group-hover:translate-x-0 font-medium">
              {item.tooltip}
            </span>
          </a>
        );
      })}
      <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-white/20 mx-auto" />
    </aside>
  );
};
