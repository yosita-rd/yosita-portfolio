/**
 * Edit portfolio projects and experience here.
 * Set pinned: true to show an entry first within its section.
 * All entries remain visible; array order is kept within each pin group.
 * Project images and links are optional. Use public-relative paths for images.
 */
export type ProjectEntry = {
  title: string;
  pinned: boolean;
  date: string;
  org: string;
  desc: string;
  keyResponsibilities: string[];
  tags: string[];
  tools: string;
  toolsIcon: string[];
  link?: string;
  type: string;
  image?: string;
};

export type ExperienceEntry = {
  company: string;
  logo?: string;
  /** Use only to compensate for whitespace inside the source image. */
  logoScale?: number;
  pinned: boolean;
  role: string;
  date: string;
  points: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
};

export function pinnedFirst<T extends { pinned: boolean }>(
  entries: readonly T[],
): T[] {
  return [...entries].sort((a, b) => Number(b.pinned) - Number(a.pinned));
}

export const projects: ProjectEntry[] = [
  {
    title: 'NexusProcure',
    pinned: true,
    date: 'December 2025 – September 2026',
    org: 'Chulalongkorn University',
    desc: 'A procurement management system currently used by Chulalongkorn University’s Procurement Division.',
    keyResponsibilities: [
      'Led stakeholder communication from functional requirements through implementation, UAT, and final delivery.',
      'Co-designed the architecture, relational data models, role-based access control, and workflow state machines.',
      'Built the multi-step frontend in React and TypeScript with complex state transitions, dynamic schema validation, and role-based views.',
      'Built a notification engine for real-time alerts and scheduled email reminders at task handoffs.',
    ],
    tags: ['Workflow design', 'RBAC'],
    tools: 'React, TypeScript',
    toolsIcon: ['react', 'typescript'],
    link: '',
    type: 'Web Dev',
  },
  {
    title: 'FloraMate',
    date: 'Nov 2024',
    org: 'University Assignment',
    desc: 'Web application to monitor and maintain plants by providing real-time updates on images, temperature, soil and air humidity, and light levels.',
    keyResponsibilities: [
      'UX/UI design, Implemented responsive frontend development.',
    ],
    tags: ['frontend', 'responsive', 'UX/UI'],
    tools: 'Next.js, React, Tailwind CSS, TypeScript, REST API, Firebase',
    toolsIcon: ['nextjs', 'react', 'tailwind', 'typescript', 'firebase'],
    link: '',
    type: 'Web Dev',
    image: '/projects/floramate.png',
    pinned: false,
  },
  {
    title: 'Friday Activity System',
    date: 'Nov 2024 - Sep 2025',
    org: 'Chula Engineering',
    desc: 'A production-ready system used by CEDT students to manage activities, knowledge-sharing workshops, company collaborations, and score tracking.',
    keyResponsibilities: [
      'Built user-facing pages and custom components with React and TypeScript, and contributed to UX/UI design and responsive frontend development.',
    ],
    tags: ['frontend', 'responsive', 'UX/UI'],
    tools: 'Next.js, React, Tailwind CSS, TypeScript, REST API',
    toolsIcon: ['nextjs', 'react', 'tailwind', 'typescript'],
    link: 'https://talent.cedt.community/',
    type: 'Web Dev',
    image: '/projects/friday_activity_system.png',
    pinned: true,
  },
  {
    title: 'Mindlink System',
    date: 'Aug 2024 - Aug 2025',
    org: 'MindLink',
    desc: 'System to manage and maintain organizational tasks for tutors, including class management, payment processing, and dashboards.',
    keyResponsibilities: [
      'Assisted in UX/UI design, Implemented responsive frontend development.',
    ],
    tags: ['frontend', 'responsive', 'UX/UI'],
    tools: 'Next.js, React, Tailwind CSS, TypeScript, REST API',
    toolsIcon: ['nextjs', 'react', 'tailwind', 'typescript'],
    link: '',
    type: 'Web Dev',
    image: '/projects/mindlink_system.png',
    pinned: false,
  },
  {
    title: 'A2K',
    date: 'Nov 2024 - Dec 2024',
    org: 'University Assignment',
    desc: 'A data science project utilizing data from the Chula University academic resource office to train models, extract keywords, and visualize results.',
    keyResponsibilities: [
      'UX/UI design, Implemented frontend, Created data visualizations, Contributed to project proposal.',
    ],
    tags: ['data-visualization', 'frontend', 'UX/UI'],
    tools: 'Next.js, React, Tailwind CSS, Plotly.js, D3.js, JavaScript',
    toolsIcon: ['nextjs', 'react', 'tailwind', 'plotly', 'd3'],
    link: '',
    type: 'Web Dev',
    image: '/projects/a2k.png',
    pinned: false,
  },
  {
    title: 'Net Down, Sprout Up',
    date: 'Feb 2024 - Apr 2024',
    org: 'University Assignment',
    desc: 'Farming simulation game where players cultivate, plant, harvest, cook, and manage energy and inventory systems while advancing the storyline.',
    keyResponsibilities: [
      'Designed features, Created gameplay mechanics, Developed interface.',
    ],
    tags: ['game-design', 'gameplay', 'UI'],
    tools: 'Java, JavaFX',
    toolsIcon: ['java', 'javafx'],
    link: '',
    type: 'Game',
    image: '/projects/net_down_sprout_up.png',
    pinned: false,
  },
];

export const experiences: ExperienceEntry[] = [
  {
    company: 'ExxonMobil',
    logo: '/companies/exxonmobil.svg',
    role: 'Application Developer Intern',
    date: 'June 2026 — November 2026',
    points: [
      'Developed and maintained revenue analytics dashboards, resolving data-binding bugs and improving UX/UI.',
      'Built pre-calculation data flows in Pricefx to aggregate monthly data ahead of time and optimize dashboard load times.',
      'Created a reusable GitHub Actions CI/CD workflow using GitHub Copilot CLI and structured prompt engineering to track codebase changes and automatically publish documentation to GitHub or Azure DevOps wikis.',
    ],
    tags: ['Revenue analytics', 'Pricefx', 'GitHub Actions', 'CI/CD'],
    pinned: true,
  },
  {
    company: 'Cleverse Corporation CO., LTD.',
    logo: '/companies/cleverse.png',
    logoScale: 2,
    link: 'https://www.aerogram.ai/',
    linkLabel: 'Visit Aerogram',
    role: 'Frontend Developer Intern',
    date: 'June 2025 — July 2025',
    points: [
      'Built key features for Aerogram, a board-style AI workspace: folder systems, prompt history, team plans, and shared workspaces using React, Next.js, and TypeScript.',
      'Collaborated closely with backend developers and a mentor to integrate APIs and refine system functionality.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'API integration'],
    pinned: false,
  },
  {
    company: 'Obodroid Corporation Limited',
    logo: '/companies/obodroid.png',
    role: 'Software Developer Intern',
    date: 'June 2024 — July 2024',
    points: [
      'Contributed to a dashboard for SR1, a security robot, gaining hands-on experience in software development and team collaboration.',
    ],
    tags: ['Dashboard development', 'Robotics', 'Collaboration'],
    pinned: false,
  },
];

export default projects;
