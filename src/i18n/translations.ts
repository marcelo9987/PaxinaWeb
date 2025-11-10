export const translations = {
  gl: {
    nav: {
      home: 'Inicio',
      about: 'Sobre min',
      skills: 'Competencias',
      languages: 'Idiomas',
      projects: 'Proxectos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Marcelo Fort Muñoz',
      subtitle: 'Desenvolvedor e Enxeñeiro de Software',
      description: 'Apaixonado pola tecnoloxía e o desenvolvemento de software. Especializado en múltiples linguaxes de programación e tecnoloxías modernas.',
      cta: 'Ver Proxectos'
    },
    about: {
      title: 'Sobre min',
      description: 'Sou un desenvolvedor de software con experiencia en múltiples linguaxes e tecnoloxías. Traballo en proxectos que combinan creatividade e solucións técnicas innovadoras.'
    },
    skills: {
      title: 'Competencias Técnicas',
      subtitle: 'Linguaxes de programación e tecnoloxías que domino'
    },
    languages: {
      title: 'Idiomas',
      subtitle: 'Linguaxes que falo e o meu nivel de competencia'
    },
    projects: {
      title: 'Proxectos',
      subtitle: 'Algúns dos meus traballos e creacións',
      viewProject: 'Ver Proxecto',
      viewCode: 'Ver Código'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estou aberto a novas oportunidades e colaboracións',
      email: 'Correo electrónico',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      text: 'Feito con ❤️ usando Astro e Tailwind CSS',
      gnu: 'Visitar GNU',
      support: 'Apoia o software libre!'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Competencias',
      languages: 'Idiomas',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Marcelo Fort Muñoz',
      subtitle: 'Desarrollador e Ingeniero de Software',
      description: 'Apasionado por la tecnología y el desarrollo de software. Especializado en múltiples lenguajes de programación y tecnologías modernas.',
      cta: 'Ver Proyectos'
    },
    about: {
      title: 'Sobre mí',
      description: 'Soy un desarrollador de software con experiencia en múltiples lenguajes y tecnologías. Trabajo en proyectos que combinan creatividad y soluciones técnicas innovadoras.'
    },
    skills: {
      title: 'Competencias Técnicas',
      subtitle: 'Lenguajes de programación y tecnologías que domino'
    },
    languages: {
      title: 'Idiomas',
      subtitle: 'Lenguajes que hablo y mi nivel de competencia'
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Algunos de mis trabajos y creaciones',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estoy abierto a nuevas oportunidades y colaboraciones',
      email: 'Correo electrónico',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      text: 'Hecho con ❤️ usando Astro y Tailwind CSS',
      gnu: 'Visitar GNU',
      support: '¡Apoya el software libre!'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      languages: 'Languages',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'Marcelo Fort Muñoz',
      subtitle: 'Software Developer & Engineer',
      description: 'Passionate about technology and software development. Specialized in multiple programming languages and modern technologies.',
      cta: 'View Projects'
    },
    about: {
      title: 'About Me',
      description: 'I am a software developer with experience in multiple languages and technologies. I work on projects that combine creativity and innovative technical solutions.'
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Programming languages and technologies I master'
    },
    languages: {
      title: 'Languages',
      subtitle: 'Languages I speak and my level of competence'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of my work and creations',
      viewProject: 'View Project',
      viewCode: 'View Code'
    },
    contact: {
      title: 'Contact',
      subtitle: 'I am open to new opportunities and collaborations',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      text: 'Made with ❤️ using Astro and Tailwind CSS',
      gnu: 'Visit GNU',
      support: 'Support free software!'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre mim',
      skills: 'Competências',
      languages: 'Idiomas',
      projects: 'Projetos',
      contact: 'Contato'
    },
    hero: {
      title: 'Marcelo Fort Muñoz',
      subtitle: 'Desenvolvedor e Engenheiro de Software',
      description: 'Apaixonado por tecnologia e desenvolvimento de software. Especializado em múltiplas linguagens de programação e tecnologias modernas.',
      cta: 'Ver Projetos'
    },
    about: {
      title: 'Sobre mim',
      description: 'Sou um desenvolvedor de software com experiência em múltiplas linguagens e tecnologias. Trabalho em projetos que combinam criatividade e soluções técnicas inovadoras.'
    },
    skills: {
      title: 'Competências Técnicas',
      subtitle: 'Linguagens de programação e tecnologias que domino'
    },
    languages: {
      title: 'Idiomas',
      subtitle: 'Linguagens que falo e meu nível de competência'
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns dos meus trabalhos e criações',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código'
    },
    contact: {
      title: 'Contato',
      subtitle: 'Estou aberto a novas oportunidades e colaborações',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      text: 'Feito com ❤️ usando Astro e Tailwind CSS',
      gnu: 'Visitar GNU',
      support: 'Apoia o software livre!'
    }
  }
} as const;

export type Locale = keyof typeof translations;
