import { profileData, educationData, experienceData, projectData, certificationData } from "./data/portfolio_data";
import { Profile, Education, Experience, Project, Certification } from "./core/contracts";

// Herramienta de inyección base (Render Utility - Responsabilidad Única)
function injectToDOM(elementId: string, htmlContent: string): void {
  const container = document.getElementById(elementId);
  if (container) container.innerHTML = htmlContent;
}

// Motores de Render atómico (Limites < 20 líneas. Principio LSP intacto)
function renderProfileCard(data: Profile): string {
  return `
    <div class="profile-img-container">
      <img src="https://avatars.githubusercontent.com/u/1024025?v=4" alt="${data.name} Foto de Perfil" />
    </div>
    <h1 style="font-size: var(--text-title-size); color: var(--color-ice); margin-bottom: var(--spacing-sm);">
      Hola, soy <span class="text-accent">${data.name}.</span>
    </h1>
    <h2 style="font-size: var(--text-xl); color: var(--color-slate-light); margin-bottom: var(--spacing-md);">
      ${data.title}
    </h2>
    <p style="max-width: 600px; margin-bottom: var(--spacing-lg); font-size: var(--text-lg); color: var(--color-slate-light);">
      ${data.bio}
    </p>
    <a href="${data.githubUrl}" class="btn" target="_blank" rel="noopener">Ir a GitHub</a>
  `;
}

function renderExperienceNodes(experiences: Experience[]): string {
  return experiences.map(exp => `
    <article class="card">
      <h3>${exp.role}</h3>
      <p><strong>${exp.company}</strong> | <small>${exp.period}</small></p>
      <p>${exp.description}</p>
    </article>
  `).join("");
}

function renderEducationNodes(educations: Education[]): string {
  return educations.map(edu => `
    <article class="card">
      <h3>${edu.degree}</h3>
      <p>${edu.institution} | <small>${edu.graduationYear}</small></p>
    </article>
  `).join("");
}

function renderProjectNodes(projects: Project[]): string {
  return projects.map(proj => `
    <article class="card">
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <div style="margin-top: var(--spacing-md)">
        ${proj.technologies.map(tech => `<span class="pill">${tech}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderCertificationNodes(certs: Certification[]): string {
  return certs.map(cert => `
    <article class="card">
      <h3>${cert.name}</h3>
      <p>${cert.issuer} | <small>${cert.year}</small></p>
    </article>
  `).join("");
}

// Orquestador Principal
export function bootstrapApplication(): void {
  injectToDOM("profile-slot", renderProfileCard(profileData));
  injectToDOM("experience-slot", renderExperienceNodes(experienceData));
  injectToDOM("education-slot", renderEducationNodes(educationData));
  injectToDOM("projects-slot", renderProjectNodes(projectData));
  injectToDOM("certifications-slot", renderCertificationNodes(certificationData));
}

// Inicio del flujo
bootstrapApplication();
