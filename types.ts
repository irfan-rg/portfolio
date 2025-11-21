import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  highlight?: boolean;
  image?: string; // Path to project screenshot/mockup
}

export interface SkillItem {
  name: string;
  icon?: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  className?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}