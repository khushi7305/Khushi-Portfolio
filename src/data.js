
/* ============================================================
   KHUSHI ARORA — PORTFOLIO DATA
   ============================================================ */

export const profile = {
  name: 'Khushi',
  full: 'Khushi Arora',
  role: 'Full-Stack Developer',
  location: 'Toronto, Ontario, Canada',
  email: 'khushiarora7305@gmail.com',

  intro:
    'I turn ideas into meaningful digital experiences — building responsive interfaces, scalable backend systems, and practical applications using React, Angular, Node.js, .NET, and SQL.',

  github: 'https://github.com/karora63',

  linkedin:
    'https://www.linkedin.com/in/khushi-arora-b119a22a9/',

  resume: '',

  avatar: 'img/faces/khushi-illustrated.png',
}

export const heroCounts = [
  { value: '1+', label: 'Year of Experience' },
  { value: '6', label: 'Featured Projects' },
  { value: '3.8', label: 'GPA / 4.0' },
]

export const about = {
  photos: [
    'img/faces/khushi-illustrated.png',
  ],

  roles: [
    'Full-Stack Developer',
    'Backend Developer',
    'Creative Problem Solver',
    'Software Developer',
  ],

  paragraphs: [
    "Hey! I'm Khushi, a Full-Stack Developer based in Toronto, Canada. I'm completing my Advanced Diploma in Computer Programming and Analysis at Seneca Polytechnic, graduating in December 2026.",

    "I currently work as a Part-Time Developer at York Region District School Board, where I contribute to enterprise application development, backend functionality, database operations, and software enhancements. I previously completed an eight-month Software Developer Co-op at YRDSB.",

    "I enjoy working across the entire development process — from designing intuitive interfaces to building APIs, managing databases, and integrating AI-powered features. I love creating technology that makes everyday tasks easier.",
  ],

  stats: [
    { value: '3.8', label: 'GPA / 4.0' },
    { value: '1+', label: 'Year of Experience' },
    { value: '6', label: 'Featured Projects' },
    { value: '2026', label: 'Graduation Year' },
  ],
}

// ============================================================
// FEATURED PROJECTS
// ============================================================

export const projects = [
  {
    title: 'Smart Basket',
    tag: 'Full-Stack · Mobile Application',
    visual: 'basket',

    text:
      'A smart grocery shopping application that helps users discover products, compare store prices, and manage shopping baskets. Developed REST APIs using Node.js, Express, Prisma, and MySQL, implementing product search, JWT authentication, email OTP verification, location-based store discovery, and automated tax calculations.',

    tech: [
      'React Native',
      'Node.js',
      'Express',
      'Prisma',
      'MySQL',
      'REST APIs',
      'JWT',
    ],

    link: 'https://github.com/ThiriAg/SmartBasket_Group3',
    github: 'https://github.com/ThiriAg/SmartBasket_Group3',
    live: '',

    color: '#FFE5D9',
  },

  {
    title: 'LazyMe — AI Resume Assistant',
    tag: 'AI · Full-Stack Development',
    visual: 'resume',

    text:
      'An AI-powered resume generation application that creates tailored resume content using large language models. Implemented prompt chaining, structured data extraction, and context-aware generation. Integrated MongoDB for data storage and Docker with GitHub Actions for development and deployment workflows.',

    tech: [
      'Next.js',
      'MongoDB',
      'Cohere',
      'Docker',
      'GitHub Actions',
      'Azure',
    ],

    link: 'https://lazy-me-five.vercel.app/',
    github: '',
    live: 'https://lazy-me-five.vercel.app/',

    color: '#FFD9CC',
  },

  {
    title: 'Smart Shelf Inventory System',
    tag: 'Hackathon · Inventory Automation',
    visual: 'shelf',

    text:
      'Developed a smart inventory management application during Seneca Hackathon 2025. Integrated barcode scanning, REST APIs, and product expiry tracking to improve inventory monitoring and automate manual processes. Reduced manual tracking time by approximately 40% during project testing.',

    tech: [
      'Python',
      'JavaScript',
      'REST APIs',
      'Barcode Scanning',
    ],

    link: 'https://github.com/gurmehakkaur/SmartShelf',
    github: 'https://github.com/gurmehakkaur/SmartShelf',
    live: '',

    color: '#FFEDE5',
  },

  {
    title: 'Desk Reservation Application',
    tag: 'Enterprise · Business Automation',
    visual: 'desk',

    text:
      'Designed and developed an internal desk reservation application at York Region District School Board using Microsoft Power Apps and SharePoint. Implemented desk booking, recurring reservations, administrative management, and automated email notifications through Power Automate.',

    tech: [
      'Power Apps',
      'SharePoint',
      'Power Automate',
    ],

    link: '',
    github: '',
    live: '',

    color: '#F8E0D5',
  },

  {
    title: 'Retail Manager',
    tag: 'C++ · Database Development',
    visual: 'retail',

    text:
      'Developed a retail management system supporting product management, inventory tracking, order processing, and sales operations. Designed normalized relational database schemas and optimized SQL queries, achieving approximately 40% faster query performance during testing.',

    tech: [
      'C++',
      'SQL',
      'Database Design',
    ],

    link: 'https://github.com/karora63/Retail-Manager',
    github: 'https://github.com/karora63/Retail-Manager',
    live: '',

    color: '#FFE1D2',
  },

  {
    title: 'Portfolio Website',
    tag: 'Full-Stack · Web Development',
    visual: 'portfolio',

    text:
      'Designed and developed a responsive personal portfolio showcasing software development projects and technical skills. Integrated dynamic GitHub content and REST APIs, implemented responsive layouts, and used Docker and GitHub Actions to support development and deployment workflows.',

    tech: [
      'React',
      'JavaScript',
      'Node.js',
      'Express',
      'Docker',
      'GitHub Actions',
    ],

    link: 'https://monumental-chaja-3d84f3.netlify.app/',
    github: '',
    live: 'https://monumental-chaja-3d84f3.netlify.app/',

    color: '#FCE6DE',
  },
]

// ============================================================
// PROFESSIONAL JOURNEY
// ============================================================

export const journey = [
  {
    year: '2026',
    title: 'Part-Time Developer',
    org: 'York Region District School Board',

    text:
      'May 2026 – Present. Working on enterprise application development, backend functionality, database operations, debugging, and software enhancements.',

    photo: 'img/faces/khushi-illustrated.png',
    note: 'Continuing my developer journey',
  },

  {
    year: '2025',
    title: 'Software Developer Co-op',
    org: 'York Region District School Board',

    text:
      'September 2025 – April 2026. Completed an eight-month software development co-op, developing internal Power Apps applications, integrating SharePoint, automating business workflows, and collaborating with stakeholders.',

    photo: 'img/faces/khushi-illustrated.png',
    note: 'My first professional developer role',
  },

  {
    year: '2025',
    title: 'Smart Shelf Hackathon',
    org: 'Seneca Polytechnic',

    text:
      'Collaborated on a smart inventory solution using barcode scanning, product expiry monitoring, and REST APIs to improve inventory management.',

    photo: 'img/faces/khushi-illustrated.png',
    note: 'Turning ideas into solutions',
  },

  {
    year: '2024',
    title: 'Computer Programming and Analysis',
    org: 'Seneca Polytechnic',

    text:
      'January 2024 – December 2026 (expected). Advanced Diploma in Computer Programming and Analysis. GPA: 3.8/4.0. Studied full-stack development, databases, AI, cloud computing, software testing, and system design.',

    photo: 'img/faces/khushi-illustrated.png',
    note: 'Where my journey began',
  },
]

// ============================================================
// TECHNICAL SKILLS
// ============================================================

export const skills = [
  'JavaScript', 'TypeScript', 'Python', 'C#',
  'C', 'C++', 'Java', 'SQL',
  'React', 'React Native', 'Next.js', 'Angular',
  'Node.js', 'Express', 'ASP.NET Core', 'REST APIs',
  'MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB',
  'Prisma', 'Power Apps', 'SharePoint', 'Power Automate',
  'Docker', 'Git', 'GitHub', 'GitHub Actions',
  'Postman', 'AWS', 'Figma', 'Jira',
  'Selenium', 'JWT', 'Prompt Engineering',
  'LLM Integration',
]

// ============================================================
// MILESTONES
// ============================================================

export const scoreboard = [
  {
    brand: 'github',
    label: 'Featured Projects',
    note: 'selected applications',
    value: 6,
    suffix: '',
    goal: 6,
  },
  {
    brand: 'github',
    label: 'Technologies',
    note: 'tools and technologies',
    value: 35,
    suffix: '+',
    goal: 40,
  },
]

export const certifications = []

// Retained for compatibility with the original template.
export const lookFrames = { from: 0, to: 28 }

export const contactSticker =
  'img/stickers/lg/f239.webp'
