export interface Skill {
  name: string;
  level: 'básico' | 'intermedio' | 'avanzado';
  levelEn: 'basic' | 'intermediate' | 'advanced';
  icon?: string;
}

export const skills: Skill[] = [
  {
    name: 'C',
    level: 'avanzado',
    levelEn: 'advanced',
    icon: '💻'
  },
  {
    name: 'C++',
    level: 'básico',
    levelEn: 'basic',
    icon: '⚙️'
  },
  {
    name: 'Ensamblador MIPS',
    level: 'intermedio',
    levelEn: 'intermediate',
    icon: '🔧'
  },
  {
    name: 'Java',
    level: 'intermedio',
    levelEn: 'intermediate',
    icon: '☕'
  },
  {
    name: 'Arduino',
    level: 'básico',
    levelEn: 'basic',
    icon: '🔌'
  },
  {
    name: 'PostgreSQL',
    level: 'intermedio',
    levelEn: 'intermediate',
    icon: '🐘'
  },
  {
    name: 'Linux',
    level: 'intermedio',
    levelEn: 'intermediate',
    icon: '🐧'
  },
  {
    name: 'Bash',
    level: 'intermedio',
    levelEn: 'intermediate',
    icon: '💻'
  },
  {
    name: 'PowerShell',
    level: 'básico',
    levelEn: 'basic',
    icon: '🔷'
  },
  {
    name: 'VHDL',
    level: 'básico',
    levelEn: 'basic',
    icon: '🔌'
  },
  {
    name: 'Vivado',
    level: 'básico',
    levelEn: 'basic',
    icon: '⚡'
  }
];

