export type IconName =
  | "users"
  | "message"
  | "lightbulb"
  | "target"
  | "eye"
  | "search"
  | "calendar"
  | "mapPin"
  | "briefcase"
  | "mail"
  | "github"
  | "linkedin"
  | "arrowRight"
  | "arrowDown"
  | "menu"
  | "close"
  | "externalLink"
  | "code";

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface HeroData {
  headingStart: string;
  headingAccent: string;
  headingEnd: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: `#${string}`;
}

export interface SoftSkill {
  title: string;
  description: string;
  icon: IconName;
}

export interface AboutData {
  bio: string[];
  highlightTerms: string[];
  softSkills: SoftSkill[];
}

export type SkillCategory =
  | "Language"
  | "Framework"
  | "Database"
  | "Cloud/DevOps"
  | "AI"
  | "Architecture"
  | "Tool";

export interface Skill {
  name: string;
  category: SkillCategory;
  shortLabel: string;
  accent: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  details: string;
}

export interface EducationRecord {
  degree: string;
  school: string;
  period: string;
  location: string;
  coursework: string[];
}

export interface Project {
  title: string;
  timeframe: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export interface ContactData {
  email: string;
  location: string;
  github: string;
  linkedin: string;
}
