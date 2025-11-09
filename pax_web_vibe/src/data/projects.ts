export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // Add your projects here
  // Example:
  // {
  //   id: 'project-1',
  //   title: 'Mi Proyecto',
  //   description: 'Descripción del proyecto en español',
  //   descriptionEn: 'Project description in English',
  //   technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  //   githubUrl: 'https://github.com/username/project',
  //   liveUrl: 'https://project-demo.com',
  //   featured: true
  // }
];

