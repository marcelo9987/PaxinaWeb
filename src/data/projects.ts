export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionEs: string;
  descriptionEn: string;
  descriptionPt: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'proxecto-SistemaSolar',
    title: 'Sistema solar en OpenGL (USC)',
    description: 'Simulación por computadora do sistema solar con posicionamento relativo ó tempo. Mellor nota dos proxectos presentados ese ano (9.7).',
    descriptionEs: 'Simulación por computadora del sistema solar con posicionamiento relativo al tiempo. Mejor nota de los proyectos presentados ese año (9.7).',
    descriptionEn: 'Computer simulation of the solar system with time relative positioning. Best note of the projects submitted that year (9.7).',
    descriptionPt: 'Simulação computacional do sistema solar com posicionamento em relação ao tempo. Melhor nota entre os projetos apresentados nesse ano (9,7).',
    technologies: ['C', 'OpenGL', 'GLUT'],
      githubUrl: 'https://github.com/marcelo9987/Universidad/tree/main/C2%20S2%20Computacion%20Grafica/Entrega%20SS%20y%20Grua/Practica%205',
      featured: true
  }
  ,{
        id: 'proxecto-ElDuroGym',
        title: 'ElDuroGym (USC)',
        description: 'Aplicación en Java para xestión dun ximnasio; desenvolvida como proxecto académico. Repositorio público e arquivado.',
        descriptionEs: 'Aplicación en Java para la gestión de un gimnasio; desarrollada como proyecto académico. Repositorio público y archivado.',
        descriptionEn: 'Java application for gym management; developed as an academic project. Public repository and archived.',
        descriptionPt: 'Aplicação em Java para gestão de um ginásio; desenvolvida como projeto académico. Repositório público e arquivado.',
        technologies: ['Java', 'SQL', 'PostreSQL'],
        githubUrl: 'https://github.com/marcelo9987/ElDuroGym_GI2',
        featured: true
    }
    ,{
        id: 'proxecto-traingo',
        title: 'TrainGo (UNNE)',
        description: 'Aplicación para quioscos de venda de billetes para trens de cercanías. Inclúe unha pequena API para xestionar a E/S baseada en XML. Desenvolvida con Java 22 e Maven; proporciona datos XML de exemplo e credenciais de proba (a@a.a / a).',
        descriptionEs: 'Aplicación para quioscos de venta de billetes para trenes de cercanías. También incluye una pequeña API para gestionar la E/S basada en XML. Desarrollada con Java 22 y Maven; proporciona datos XML de ejemplo y credenciales de prueba (a@a.a / a).',
        descriptionEn: 'Kiosk application for selling commuter train tickets. Also includes a small API to handle I/O based on XML. Developed with Java 22 and Maven; provides sample XML data and default test credentials (a@a.a / a).',
        descriptionPt: 'Aplicação para quiosques de venda de bilhetes para comboios suburbanos. Inclui uma pequena API para gerir a E/S baseada em XML. Desenvolvida com Java 22 e Maven; fornece dados XML de exemplo e credenciais de teste (a@a.a / a).',
        technologies: ['Java 22', 'Maven', 'XML', 'Logback', 'Hibernate Validator'],
        githubUrl: 'https://github.com/marcelo9987/ProyectoProgramacionAvanzada',
        featured: true
    }
];

