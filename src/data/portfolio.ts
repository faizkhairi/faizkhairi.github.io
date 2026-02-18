export const profile = {
  name: "Faiz Khairi",
  title: "Full-Stack Developer & DevOps Engineer",
  taglines: [
    "Building production-grade systems",
    "Shipping 5 live applications",
    "Publishing npm packages",
    "Integrating AI into products",
    "Architecting microservices",
  ],
  location: "Kuala Lumpur, Malaysia",
  email: "faizkhairi@outlook.com",
  github: "https://github.com/faizkhairi",
  linkedin: "https://www.linkedin.com/in/faizkhairi",
  npm: "https://www.npmjs.com/~faizkhairi",
};

export const about = {
  summary: `Full-Stack Developer & DevOps Engineer with 4+ years of professional software development experience spanning enterprise systems, freelance web engineering, and open-source contributions. Currently developing a digital management platform serving 200+ pages for a government agency, while actively contributing to open-source with 5 production-ready applications and 2 published npm packages.`,
  highlights: [
    { label: "Years Experience", value: "4+" },
    { label: "Live Applications", value: "5" },
    { label: "npm Packages", value: "2" },
    { label: "Passing Tests", value: "69" },
  ],
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  npmInstall?: string;
  type: "web" | "cli" | "boilerplate" | "infra";
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Code Reviewer",
    description:
      "Multi-provider AI code review platform with real-time streaming output. Supports OpenAI GPT-4o and Claude Sonnet with 4 review types and 19 languages.",
    tech: ["Next.js 16", "React 19", "Vercel AI SDK", "OpenAI", "Claude", "TypeScript", "Tailwind"],
    liveUrl: "https://ai-code-reviewer-two-pi.vercel.app",
    githubUrl: "https://github.com/faizkhairi/ai-code-reviewer",
    type: "web",
    featured: true,
  },
  {
    title: "Short URL",
    description:
      "URL shortener with comprehensive click analytics, QR code generation, and real-time dashboard. Built with Prisma 7 and Neon serverless PostgreSQL.",
    tech: ["Next.js 16", "Prisma 7", "Neon PostgreSQL", "Recharts", "TypeScript", "Tailwind"],
    liveUrl: "https://short-url-livid-six.vercel.app",
    githubUrl: "https://github.com/faizkhairi/short-url",
    type: "web",
    featured: true,
  },
  {
    title: "Repo Insights",
    description:
      "GitHub repository visualization tool showing commit patterns, language breakdown, and contributor stats with optional OAuth for increased rate limits.",
    tech: ["Next.js 16", "Auth.js v5", "SWR", "Recharts", "GitHub API", "TypeScript"],
    liveUrl: "https://repo-insights-mu.vercel.app",
    githubUrl: "https://github.com/faizkhairi/repo-insights",
    type: "web",
    featured: true,
  },
  {
    title: "loadtest-cli",
    description:
      "CLI tool for benchmarking HTTP endpoints with concurrent requests, latency percentiles (p50/p95/p99), and HTML reports.",
    tech: ["TypeScript", "Commander.js", "undici", "Chart.js", "chalk"],
    githubUrl: "https://github.com/faizkhairi/loadtest-cli",
    npmInstall: "npm i -g @faizkhairi/loadtest-cli",
    type: "cli",
    featured: true,
  },
  {
    title: "migra-cli",
    description:
      "Database migration management CLI with rollback support, destructive operation safety checks, SQL templates, and multi-database support.",
    tech: ["TypeScript", "Commander.js", "Knex.js", "SQLite", "PostgreSQL", "MySQL"],
    githubUrl: "https://github.com/faizkhairi/migra-cli",
    npmInstall: "npm i -g @faizkhairi/migra-cli",
    type: "cli",
    featured: true,
  },
  {
    title: "Microservices Demo",
    description:
      "Production-grade microservices platform with 6 NestJS services, API Gateway, BullMQ job queues, and Docker Compose orchestration.",
    tech: ["NestJS", "Nuxt 4", "Prisma", "PostgreSQL", "Redis", "Docker", "BullMQ"],
    githubUrl: "https://github.com/faizkhairi/microservices-demo",
    type: "infra",
    featured: false,
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React 19", "Nuxt 3", "Vue 3", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Recharts", "SWR", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "Express.js", "PHP", "Laravel", "Java", "Spring Boot", "RESTful APIs", "Streaming APIs"],
  },
  {
    category: "AI / ML",
    items: ["Vercel AI SDK", "OpenAI GPT-4o", "Claude Sonnet", "Streaming AI", "Custom Prompts"],
  },
  {
    category: "Database",
    items: ["Prisma (v6 & v7)", "PostgreSQL", "MySQL", "SQLite", "Knex.js", "Neon Serverless", "Database Design"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS (EC2, ECR)", "Vercel", "GitHub Actions", "CI/CD", "Nginx", "Linux"],
  },
  {
    category: "Architecture",
    items: ["Microservices", "System Design", "API Design", "Serverless", "Service Integration", "OAuth / RBAC"],
  },
  {
    category: "Developer Tools",
    items: ["CLI Development", "npm Publishing", "Load Testing", "Database Migrations", "Git", "VS Code"],
  },
  {
    category: "Testing & QA",
    items: ["Vitest", "React Testing Library", "Playwright", "Unit Testing", "Integration Testing", "API Testing"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Open Source Contributor",
    company: "Personal Projects",
    period: "Jan 2026 - Present",
    location: "Remote",
    description:
      "Built and deployed 5 production-ready applications demonstrating full-stack capabilities, AI integration, and DevOps expertise.",
    achievements: [
      "Shipped 5 applications with 69 passing tests, all live on Vercel",
      "Published 2 scoped packages to npm registry (@faizkhairi/*)",
      "Built multi-provider AI code review system (OpenAI + Claude)",
      "Configured CI/CD pipelines for all projects using GitHub Actions",
    ],
    tech: ["Next.js", "React 19", "Vercel AI SDK", "Prisma 7", "Auth.js", "TypeScript", "Vitest", "GitHub Actions"],
  },
  {
    role: "Software Developer",
    company: "Datascience Sdn. Bhd.",
    period: "Jun 2025 - Present",
    location: "Malaysia",
    description:
      "Developed and integrated components of a microservices-based digital management system with 7 interconnected services, serving 200+ application pages.",
    achievements: [
      "Built 200+ responsive pages with Nuxt 3, Vue 3, and TailwindCSS",
      "Reduced deployment time by 80% via CI/CD with Docker and AWS EC2/ECR",
      "Implemented JWT/Better-Auth authentication with RBAC across frontend and backend",
      "Integrated with R&D API engine services (Auth, Notifications, Job Queue)",
      "Mentored interns and junior developers through PR reviews and code standards",
    ],
    tech: ["Nuxt 3", "Vue 3", "NestJS", "Prisma", "MySQL", "Docker", "AWS", "TypeScript"],
  },
  {
    role: "Web Engineer",
    company: "Atiera Technology Enterprise",
    period: "Sep 2024 - May 2025",
    location: "Remote",
    description:
      "Developed a comprehensive booking system engine for multiple resorts at Baron Langkawi under Sinergy Solution Sdn. Bhd.",
    achievements: [
      "Built scalable booking platform with real-time availability updates",
      "Integrated Billplz payment gateway for secure online transactions",
      "Collaborated with resort management to design system architecture",
      "Delivered seamless reservation management for the tourism industry",
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS", "Billplz API"],
  },
  {
    role: "Software Developer Intern",
    company: "PSI Incontrol Sdn. Bhd.",
    period: "Mar 2024 - Jul 2024",
    location: "Sungai Buloh",
    description:
      "Contributed to internal web application development using enterprise Java technologies, enhancing department efficiency.",
    achievements: [
      "Developed internal web apps using Java, Spring Boot, and Vue.js",
      "Implemented WBS sequences to improve project tracking for Project Department",
      "Maintained and optimized existing applications with bug fixes and enhancements",
      "Participated in code reviews and documentation to ensure code quality",
    ],
    tech: ["Java", "Spring Boot", "Vue.js", "HTML", "CSS", "Git"],
  },
  {
    role: "Web Developer / Technician",
    company: "Bayam Teknologi",
    period: "Feb 2016 - Jun 2018",
    location: "Selangor",
    description:
      "Early career role combining web development with IT operations, delivering websites for corporate and client projects.",
    achievements: [
      "Designed, developed, and hosted responsive websites for corporate clients",
      "Built Hostel Management System for Kolej Profesional MARA Beranang",
      "Developed College Management System for Kolej MARA Seremban",
      "Runner-Up at Malaysia Developers Day (MYDD) 2016 — Big Data & IoT",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "WordPress"],
  },
];
