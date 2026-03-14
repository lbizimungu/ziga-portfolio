const base = import.meta.env.BASE_URL;

export const profile = {
  name: 'Larissa Bizimungu',
  title: 'Software Engineer · Project Manager',
  tagline: 'Product and project work with a clean execution style.',
  summary:
    'Dynamic builder focused on health tech, education, operations, and digital strategy.',
  about:
    'Hey, I am Ziga — a project manager with a software engineering background and a growing love for building things that actually make sense in the real world. I have worked across software development, quality assurance, and Agile delivery, and I am especially drawn to work that sits between structure, creativity, and execution.',
  email: 'b.zigalarissa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/larissa-bizimungu/',
  github: 'https://github.com/ZigaLarissa',
  cv: 'https://drive.google.com/file/d/1kU_wZ8rmBE8Mos-tBcmwruHamJzh4wVb/view?usp=sharing',
  location: 'Kigali, Rwanda',
  photo: `${base}profile.jpeg`,
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
  { name: 'Google Colab', icon: 'Google Colab' },
  { name: 'Canva', icon: 'canva' },
  { name: 'Pinterest', icon: 'pinterest' },
] as const;

export const projects = [
  {
    title: 'Optimum Communication Agency',
    subtitle: 'Digital communication strategy and brand client work',
    tags: ['Brand Strategy', 'Creative Work', 'Client Projects'],
    theme: 'slate',
    image: `${base}projects/optimum.jpeg`,
  },
  {
    title: 'EduAssist',
    subtitle: 'Parent-teacher communication and learning support',
    tags: ['Product Design', 'Mobile App', 'EdTech'],
    theme: 'green',
    image: `${base}projects/EduAssist.png`,
  },
] as const;

export const education = [
  {
    period: '2022–2025',
    title: 'African Leadership University',
    subtitle: 'BSc (Hons) in Software Engineering',
  },
  {
    period: 'May–July 2024',
    title: 'ALX',
    subtitle: 'Ai Career Essentials Program Certificate',
  },
  {
    period: '2018–2021',
    title: 'FAWE Girls School',
    subtitle: 'PCM High School Diploma',
  },
] as const;

export const workJourney = [
  {
    period: 'Current',
    title: 'Project Manager at eFiche',
    subtitle: 'Working across project delivery, product thinking, and stakeholder liaison for a health tech startup',
  },
  {
    period: 'Current',
    title: 'Optimum Communication Agency',
    subtitle: 'Co-building a communication venture with active client outreach',
  },
  {
    period: 'Earlier',
    title: 'Sawa Telematics',
    subtitle: 'Quality assurance, reporting, coordination, and product delivery at a fleet management company',
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
