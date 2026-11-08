// ─────────────────────────────────────────────────────────────
// Portfolio content — edit everything here.
// All personal information is centralized in this file.
// ─────────────────────────────────────────────────────────────

export type SkillLevel = 'Advanced' | 'Intermediate' | 'Familiar';

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  /** Short label shown on the thumbnail, e.g. initials or emoji-free tag */
  tag: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  kind: 'work' | 'education';
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const portfolio = {
  name: 'Redouane',
  role: 'Junior Full-Stack Developer',
  tagline:
    'I build clean, maintainable web applications — from responsive interfaces to reliable APIs.',
  bio: [
    'TODO: Write a short paragraph about yourself, your background and what you enjoy building.',
    'TODO: Mention your current focus, e.g. Angular, TypeScript and Node.js.',
  ],
  location: 'TODO: Your City, Country',
  email: 'hello@example.com',
  heroTech: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Node.js'],
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-username', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-username', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:hello@example.com', icon: 'email' },
  ] as SocialLink[],
  skills: [
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'HTML5 / CSS3', level: 'Advanced' },
        { name: 'Bootstrap', level: 'Intermediate' },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', level: 'Familiar' },
        { name: 'REST APIs', level: 'Familiar' },
        { name: 'SQL / Databases', level: 'Familiar' },
      ],
    },
    {
      title: 'Tools & Workflow',
      items: [
        { name: 'Git / GitHub', level: 'Intermediate' },
        { name: 'npm', level: 'Intermediate' },
        { name: 'VS Code', level: 'Advanced' },
      ],
    },
  ] as SkillGroup[],
  projects: [
    {
      title: 'Project One',
      description:
        'TODO: One or two sentences describing the project, the problem it solves and your role.',
      tech: ['Angular', 'TypeScript', 'REST API'],
      link: 'https://github.com/your-username/project-one',
      tag: 'P1',
    },
    {
      title: 'Project Two',
      description:
        'TODO: Describe the project and highlight interesting technical decisions.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/your-username/project-two',
      tag: 'P2',
    },
    {
      title: 'Project Three',
      description:
        'TODO: Describe the project — a full-stack app, a learning project, a freelance piece, etc.',
      tech: ['Angular', 'Node.js', 'SQL'],
      link: 'https://github.com/your-username/project-three',
      tag: 'P3',
    },
  ] as Project[],
  experience: [
    {
      role: 'Junior Full-Stack Developer',
      company: 'Company Name',
      period: '2024 — Present',
      description:
        'TODO: What you work on, technologies used, and one measurable achievement.',
      kind: 'work',
    },
    {
      role: 'Frontend Developer (Internship / Freelance)',
      company: 'Company or Client',
      period: '2023 — 2024',
      description:
        'TODO: Brief description of responsibilities and what you learned.',
      kind: 'work',
    },
    {
      role: 'BSc Computer Science',
      company: 'University Name',
      period: '2020 — 2024',
      description: 'TODO: Degree, relevant coursework or highlights.',
      kind: 'education',
    },
  ] as ExperienceItem[],
};
