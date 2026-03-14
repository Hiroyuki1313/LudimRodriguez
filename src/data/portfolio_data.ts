import { Profile, Education, Experience, Project, Certification } from "../core/contracts.js";

export const profileData: Profile = {
  id: "prof_1",
  name: "Grace",
  title: "Senior Frontend Architect",
  bio: "Especialista en desarrollo UI/UX minimalista, con un enfoque estructural en Arquitectura de Componentes y los principios SOLID para escalar aplicaciones de clase mundial.",
  githubUrl: "https://github.com/cecexp",
  socials: [
    { id: "soc_1", platform: "GitHub", url: "https://github.com/cecexp", iconName: "github" },
    { id: "soc_2", platform: "LinkedIn", url: "#", iconName: "linkedin" }
  ]
};

export const educationData: Education[] = [
  { id: "edu_1", institution: "Tech University", degree: "B.S. Software Engineering", graduationYear: "2020" },
  { id: "edu_2", institution: "Design Institute", degree: "Master in HCI & UI/UX", graduationYear: "2022" }
];

export const experienceData: Experience[] = [
  { id: "exp_1", company: "TechCorp Global", role: "Frontend UI Developer", period: "2022 - Present", description: "Liderando la arquitectura de componentes y sistemas de diseño a nivel empresarial bajo estrictos protocolos de performance." },
  { id: "exp_2", company: "Creative Web Agency", role: "Web Developer", period: "2020 - 2022", description: "Construcción de landing pages y web apps interactivas priorizando la separación de responsabilidades y accesibilidad." }
];

export const projectData: Project[] = [
  { id: "proj_1", title: "Órbita UI System", description: "Sistema de diseño escalable y monocromático que reduce el layout shift.", technologies: ["TypeScript", "CSS Variables", "HTML5"], linkUrl: "#" },
  { id: "proj_2", title: "Arquitectura Modular React", description: "Migración de un entorno SPA monolítico hacia una arquitectura Hexagonal distribuida.", technologies: ["React", "TypeScript", "Vite"], linkUrl: "#" }
];

export const certificationData: Certification[] = [
  { id: "cert_1", name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
  { id: "cert_2", name: "Advanced UI/UX Patterns", issuer: "Frontend Masters", year: "2024" }
];
