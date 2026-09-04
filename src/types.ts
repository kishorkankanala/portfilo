export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  githubUrl: string;
  demoUrl?: string;
  accentColor?: string;
  details: {
    problem: string;
    solution: string;
    keyFeatures: string[];
    techStack: string[];
    metrics?: string[];
    codeSnippet?: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  details: string;
  year: string;
  score?: string;
  highlights?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  badgeType: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  color?: string;
}

export interface DetailedSkill {
  name: string;
  level: number;
}

export interface DetailedSkillCategory {
  title: string;
  skills: DetailedSkill[];
}

export interface SoftSkill {
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  displayPhone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  location: string;
}
