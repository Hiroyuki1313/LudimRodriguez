export interface BaseEntity {
  id: string;
}

export interface SocialLink extends BaseEntity {
  platform: string;
  url: string;
  iconName: string;
}

export interface Profile extends BaseEntity {
  name: string;
  title: string;
  bio: string;
  githubUrl: string;
  socials: SocialLink[];
}

export interface Education extends BaseEntity {
  institution: string;
  degree: string;
  graduationYear: string;
}

export interface Experience extends BaseEntity {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project extends BaseEntity {
  title: string;
  description: string;
  technologies: string[];
  linkUrl: string;
}

export interface Certification extends BaseEntity {
  name: string;
  issuer: string;
  year: string;
}
