// Type definitions for the portfolio website

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
  icon?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  avatarUrl: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
}