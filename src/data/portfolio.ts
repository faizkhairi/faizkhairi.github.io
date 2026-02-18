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
  summary: `Full-Stack Developer & DevOps Engineer with 2+ years of hands-on experience building production-grade systems. Currently architecting a digital management platform serving 200+ pages for a government agency, while actively contributing to open-source with 5 production-ready applications and 2 published npm packages.`,
  highlights: [
    { label: "Years Experience", value: "2+" },
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
      "Leading development of a comprehensive enterprise digital management platform with 200+ application pages across 7 interconnected microservices.",
    achievements: [
      "Architected 7-service microservices platform serving 200+ pages",
      "Reduced deployment time by 80% through CI/CD automation for 28-member team",
      "Migrated authentication from JWT to Better-Auth with zero downtime",
      "Integrated 5 external systems through bidirectional data flows",
      "Mentored junior developers through code reviews and pair programming",
    ],
    tech: ["Nuxt 3", "Vue 3", "NestJS", "Prisma", "MySQL", "Docker", "AWS", "TypeScript"],
  },
];
