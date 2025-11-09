export interface Language {
  name: {
    gl: string;
    es: string;
    en: string;
    pt: string;
  };
  level: {
    gl: string;
    es: string;
    en: string;
    pt: string;
  };
  flag: string;
}

export const languages: Language[] = [
  {
    name: {
      gl: 'Galego',
      es: 'Gallego',
      en: 'Galician',
      pt: 'Galego'
    },
    level: {
      gl: 'Nativo',
      es: 'Nativo',
      en: 'Native',
      pt: 'Nativo'
    },
    flag: 'galician' // Usa o compoñente SVG GalicianFlag
  },
  {
    name: {
      gl: 'Español',
      es: 'Español',
      en: 'Spanish',
      pt: 'Espanhol'
    },
    level: {
      gl: 'Nativo',
      es: 'Nativo',
      en: 'Native',
      pt: 'Nativo'
    },
    flag: '🇪🇸'
  },
  {
    name: {
      gl: 'Inglés',
      es: 'Inglés',
      en: 'English',
      pt: 'Inglês'
    },
    level: {
      gl: 'Avanzado C1 (Cambridge)',
      es: 'Avanzado C1 (Cambridge)',
      en: 'Advanced C1 (Cambridge)',
      pt: 'Avançado C1 (Cambridge)'
    },
    flag: '🇬🇧'
  },
  {
    name: {
      gl: 'Portugués',
      es: 'Portugués',
      en: 'Portuguese',
      pt: 'Português'
    },
    level: {
      gl: 'Básico',
      es: 'Básico',
      en: 'Basic',
      pt: 'Básico'
    },
    flag: '🇵🇹'
  }
];

