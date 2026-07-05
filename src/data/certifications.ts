export interface Certification {
  id: string;
  name: string;
  nameEs?: string;
  nameEn?: string;
  namePt?: string;
  issuer: string;
  type: 'academic' | 'technical';
  year?: number;
  month?: string;
  monthEs?: string;
  monthEn?: string;
  monthPt?: string;
  hours?: string;
  icon: string;
  credentialId?: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 'java-android-unam',
    name: 'Programando con Java para aplicacións Android',
    nameEs: 'Programando con Java para aplicaciones Android',
    nameEn: 'Programming with Java for Android Applications',
    namePt: 'Programando com Java para aplicações Android',
    issuer: 'Universidad Nacional Autónoma de México (UNAM)',
    type: 'technical',
    year: 2016,
    month: 'ago.',
    monthEs: 'ago.',
    monthEn: 'Aug.',
    monthPt: 'ago.',
    icon: '📱',
    credentialId: '8ZTS3VML2SBS',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/8ZTS3VML2SBS',
  },
  {
    id: 'gestion-proyectos-agile',
    name: 'Xestión de Proxectos e Fundamentos de metodoloxía Agile',
    nameEs: 'Gestión de Proyectos y Fundamentos de metodología Agile',
    nameEn: 'Project Management and Agile Methodology Fundamentals',
    namePt: 'Gestão de Projetos e Fundamentos de metodologia Agile',
    issuer: 'Santander Open Academy',
    type: 'technical',
    year: 2026,
    month: 'xuñ.',
    monthEs: 'jun.',
    monthEn: 'Jun.',
    monthPt: 'jun.',
    icon: '🏗️',
    credentialId: 'OA-2026-0629002807567',
  },
  {
    id: 'competencias-informacion-usc',
    name: 'Competencias avanzadas da información',
    nameEs: 'Competencias avanzadas de la información',
    nameEn: 'Advanced Information Competencies',
    namePt: 'Competências avançadas da informação',
    issuer: 'Universidade de Santiago de Compostela (USC)',
    type: 'academic',
    year: 2023,
    month: 'abr.',
    monthEs: 'abr.',
    monthEn: 'Apr.',
    monthPt: 'abr.',
    hours: '25h (+25h)',
    icon: '📚',
  },
  {
    id: 'gdpr-advance-learning',
    name: 'Regulamento Xeral de Protección de Datos (GDPR)',
    nameEs: 'Reglamento General de Protección de Datos (GDPR)',
    nameEn: 'General Data Protection Regulation (GDPR)',
    namePt: 'Regulamento Geral de Proteção de Dados (GDPR)',
    issuer: 'Advance Learning – Human Resources (HR)',
    type: 'technical',
    hours: '1.5 – 3h',
    icon: '🔒',
  },
];
