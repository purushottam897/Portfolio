import {
  BadgeCheck,
  Brain,
  BriefcaseBusiness,
  Code2,
  Database,
  FileCheck2,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Rocket,
  Target,
} from 'lucide-react'

export const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export const socials = [
  { label: 'GitHub', href: 'https://github.com/purushottam897', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/purushottam-naidu-0abb3b34b', icon: BriefcaseBusiness },
  { label: 'Email', href: 'mailto:2300090339csit@gmail.com', icon: Mail },
]

export const profileHighlights = [
  { label: 'Degree', value: 'B.Tech CSIT' },
  { label: 'CGPA', value: '8.75' },
  { label: 'Internship', value: 'ServiceNow' },
]

export const aboutCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    text: 'B.Tech student in Computer Science and Information Technology at KL University, Vaddeswaram, with a CGPA of 8.75.',
  },
  {
    icon: Target,
    title: 'Career Goals',
    text: 'Interested in software development, problem solving, data analysis, and gaining industry experience through practical work.',
  },
  {
    icon: Rocket,
    title: 'Mindset',
    text: 'Willing to learn new technologies, work in team environments, and turn technical knowledge into useful applications.',
  },
]

export const skills = [
  {
    name: 'Python',
    icon: Code2,
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    tone: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Pandas',
    icon: Brain,
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
    tone: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'NumPy',
    icon: Brain,
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
    tone: 'from-sky-400 to-indigo-500',
  },
  { name: 'Data Cleaning', icon: FileCheck2, tone: 'from-rose-400 to-pink-500' },
  {
    name: 'Tableau',
    icon: LayoutDashboard,
    logoUrl: 'https://cdn.simpleicons.org/tableau/E97627',
    tone: 'from-blue-300 to-cyan-500',
  },
  {
    name: 'Power BI',
    icon: LayoutDashboard,
    logoUrl: 'https://cdn.simpleicons.org/powerbi/F2C811',
    tone: 'from-yellow-300 to-amber-500',
  },
  {
    name: 'Matplotlib',
    icon: LayoutDashboard,
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',
    tone: 'from-cyan-300 to-violet-500',
  },
  {
    name: 'MySQL',
    icon: Database,
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    tone: 'from-amber-300 to-orange-500',
  },
  {
    name: 'Git',
    icon: Code2,
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    tone: 'from-orange-300 to-red-500',
  },
  {
    name: 'VS Code',
    icon: Code2,
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    tone: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Excel',
    icon: LayoutDashboard,
    logoUrl: 'https://cdn.simpleicons.org/microsoftexcel/217346',
    tone: 'from-green-300 to-emerald-500',
  },
]

export const projects = [
  {
    title: 'AI Sales Forecasting System',
    description:
      'A forecasting system that analyzes customer purchase patterns, applies linear regression, performs EDA, and supports dashboards for daily, weekly, and monthly analytics.',
    stack: ['Python', 'Machine Learning', 'Flask', 'MySQL'],
    icon: LayoutDashboard,
    codeUrl: 'https://github.com/purushottam897/Smart-Grocery-Tracking-System',
    githubUrl: 'https://github.com/purushottam897',
  },
  {
    title: 'ServiceNow Virtual Internship',
    description:
      'Hands-on internship experience with workflow automation, enterprise-level systems, structured data, and business process optimization.',
    stack: ['ServiceNow', 'Workflow Automation', 'Enterprise Systems'],
    icon: BriefcaseBusiness,
    codeUrl: '/ServiceNow_Virtual_Internship_Certificate.pdf',
  },
  {
    title: 'Certifications',
    description:
      'Certified in ServiceNow System Administration and Oracle Foundations, strengthening platform and database fundamentals.',
    stack: ['ServiceNow CSA', 'Oracle Foundations'],
    icon: BadgeCheck,
    codeUrl: '/ServiceNow_CSA_Certificate.pdf',
  },
]

export const contactItems = [
  { label: 'Email', value: '2300090339csit@gmail.com', href: 'mailto:2300090339csit@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/purushottam897', href: 'https://github.com/purushottam897', icon: Code2 },
  {
    label: 'LinkedIn',
    value: 'purushottam-naidu',
    href: 'https://linkedin.com/in/purushottam-naidu-0abb3b34b',
    icon: BriefcaseBusiness,
  },
]
