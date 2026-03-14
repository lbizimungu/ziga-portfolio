export const profile = {
  name: 'Larissa Bizimungu',
  title: 'Software Engineer · Project Manager',
  tagline: 'Software, product, and project work with a clean execution style.',
  summary:
    'Hybrid builder focused on health tech, education, operations, and digital strategy.',
  about:
    'Hey, I am Ziga — a project manager with a software engineering background and a growing love for building things that actually make sense in the real world. I have worked across software development, quality assurance, and Agile delivery, and I am especially drawn to work that sits between structure, creativity, and execution.',
  email: 'b.zigalarissa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/larissa-bizimungu/',
  github: 'https://github.com/ZigaLarissa',
  cv: 'https://docs.google.com/document/d/1HGfpuk3qxgUDFsSFHU6sYTbC3krXc0W7/edit?usp=sharing&ouid=106587305231885245445&rtpof=true&sd=true',
  location: 'Kigali, Rwanda',
  photo: '/profile.jpeg',
};

export const navItems = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Tools', '#tools'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
] as const;

export const strengths = ['Product', 'Projects', 'Software', 'HealthTech', 'AI', 'Strategy'];

export const services = [
  {
    title: 'Project Management',
    body:
      'Planning, coordination, delivery tracking, stakeholder follow-up, and keeping work moving with structure.',
  },
  {
    title: 'Software Development',
    body:
      'Building practical digital products with a focus on clear workflows, usability, and implementation reality.',
  },
  {
    title: 'UI/UX Design',
    body:
      'Translating ideas into usable interfaces, thoughtful user journeys, and product experiences that feel clear.',
  },
] as const;

export const tools = [
  { name: 'Figma', icon: 'figma' },
  { name: 'VSCode', icon: 'code' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Jira', icon: 'jira' },
  { name: 'SharePoint', icon: 'sharepoint' },
  { name: 'Canva', icon: 'canva' },
  { name: 'Pinterest', icon: 'pinterest' },
] as const;

export const projects = [
  {
    title: 'EduAssist',
    subtitle: 'Parent-teacher communication and learning support',
    tags: ['Product Design', 'Mobile App', 'EdTech'],
    theme: 'green',
  },
  {
    title: 'eFiche Healthcare + AI Work',
    subtitle: 'Digital health, documentation, rollout planning, and AI framing',
    tags: ['HealthTech', 'Project Management', 'AI'],
    theme: 'gold',
  },
  {
    title: 'Optimum Communication Agency',
    subtitle: 'Digital communication strategy and brand-facing client work',
    tags: ['Brand Strategy', 'Creative Work', 'Client Projects'],
    theme: 'slate',
  },
  {
    title: 'Sawa Telematics Fleet Work',
    subtitle: 'QA, reporting, planning, and cross-team coordination',
    tags: ['QA', 'Operations', 'Delivery'],
    theme: 'olive',
  },
] as const;

export const education = [
  {
    period: '2021–2025',
    title: 'African Leadership University',
    subtitle: 'BSc (Hons) in Software Engineering',
  },
  {
    period: 'Machine Learning Track',
    title: 'Software Engineering Focus',
    subtitle: 'Built practical interest in AI-supported systems and product thinking',
  },
] as const;

export const workJourney = [
  {
    period: 'Current',
    title: 'Project Manager / Hybrid Builder',
    subtitle: 'Working across project delivery, product thinking, and software-related work',
  },
  {
    period: 'Current',
    title: 'Optimum Communication Agency',
    subtitle: 'Co-building a communication venture with active client outreach',
  },
  {
    period: 'Earlier',
    title: 'Sawa Telematics',
    subtitle: 'Quality assurance, reporting, coordination, and execution discipline',
  },
] as const;

export const contactInfo = [
  { label: 'Email', value: 'b.zigalarissa@gmail.com' },
  { label: 'GitHub', value: 'github.com/ZigaLarissa' },
  { label: 'LinkedIn', value: 'linkedin.com/in/larissa-bizimungu' },
  { label: 'Location', value: 'Kigali, Rwanda' },
] as const;

export const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/larissa-bizimungu/' },
  { label: 'GitHub', href: 'https://github.com/ZigaLarissa' },
  { label: 'Email', href: 'mailto:b.zigalarissa@gmail.com' },
  {
    label: 'CV',
    href: 'https://docs.google.com/document/d/1HGfpuk3qxgUDFsSFHU6sYTbC3krXc0W7/edit?usp=sharing&ouid=106587305231885245445&rtpof=true&sd=true',
  },
] as const;
