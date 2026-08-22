export interface Project {
  number: string;
  title: string;
  tagline: string;
  context: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  contributions: string[];
  githubUrl: string;
}

export interface SkillCategory {
  index: string;
  category: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Abdul Ghani",
    role: "AI & Data Science Student",
    education: {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Rizvi College of Engineering",
      location: "Mumbai, India",
      period: "2024–2028",
    },
    heroStatement:
      "Building practical software across AI/ML, backend systems, and full-stack engineering.",
    subStatement:
      "AI & Data Science student at Rizvi College of Engineering learning by building practical systems across AI applications, cybersecurity, backend engineering, and modern web development.",
    philosophyQuote:
      "My approach is simple: learn something, build with it, understand what breaks, and improve.",
    aboutParagraphs: [
      "I am an Artificial Intelligence & Data Science student at Rizvi College of Engineering in Mumbai, currently focused on building software systems while strengthening my fundamentals in machine learning.",
      "I learn primarily through hands-on development. Rather than only studying theory, my projects span AI-powered cybersecurity platforms, backend microservices, full-stack applications, and security tooling.",
      "Through these projects, I have worked across Python, FastAPI, React, Spring Boot, databases, APIs, and AI integrations—always seeking to understand the complete engineering lifecycle from architecture to deployment.",
    ],
  },
  projects: [
    {
      number: "01",
      title: "Nexora AI",
      tagline: "AI-Powered Cybersecurity Learning & Threat-Detection Platform",
      context: "Team Project · NeoFuture 2026 · S.E. Mini Project",
      role: "Backend Microservices & API Architecture",
      stack: [
        "Python",
        "FastAPI",
        "React",
        "Vite",
        "React Native",
        "Supabase",
        "PostgreSQL",
        "Redis",
        "Groq",
        "VirusTotal",
      ],
      problem:
        "Cybersecurity education and threat analysis are frequently separated into isolated tools. Learners study theoretical concepts in one environment, while defensive threat monitoring and message analysis live in disconnected enterprise platforms.",
      solution:
        "Nexora brings together scenario-based phishing simulations, automated threat analysis, and gamified cybersecurity learning into a unified ecosystem spanning web, mobile, and browser environments.",
      contributions: [
        "Designed and implemented high-throughput FastAPI backend microservices and REST API contracts.",
        "Integrated threat-intelligence feeds including VirusTotal and Google Safe Browsing.",
        "Engineered scenario-progression workflows and AI scenario generation with Groq LLM.",
        "Integrated Supabase PostgreSQL and Redis for session state and progression tracking.",
      ],
      githubUrl: "https://github.com/Hellbot15/Nexora2.0.git",
    },
    {
      number: "02",
      title: "Vulnerability Detection",
      tagline: "Cybersecurity Vulnerability Inspection & Management Interface",
      context: "Security Frontend Project",
      role: "Frontend Engineering & Interface Implementation",
      stack: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      problem:
        "Security telemetry and vulnerability scan results often overwhelm developers and analysts with fragmented data and unclear severity prioritization.",
      solution:
        "Engineered a focused cybersecurity interface dedicated to managing, categorizing, and inspecting system vulnerabilities with clean status indicators and structured triage workflows.",
      contributions: [
        "Engineered responsive dashboard views for vulnerability inspection workflows.",
        "Implemented real-time status filtering and severity classification visual hierarchy.",
        "Designed accessible, high-contrast layouts for critical security telemetry review.",
      ],
      githubUrl: "https://github.com/Hellbot15/Vulnerability-detection.git",
    },
    {
      number: "03",
      title: "CampusBarter",
      tagline: "Campus-Focused Student Resource Exchange Platform",
      context: "Full-Stack Project",
      role: "Full-Stack Development",
      stack: [
        "React",
        "Vite",
        "Java",
        "Spring Boot",
        "REST APIs",
        "Spring Data JPA",
        "H2 / PostgreSQL",
      ],
      problem:
        "University students frequently lack a dedicated, secure internal marketplace to exchange academic resources, textbooks, and equipment without relying on chaotic social media groups.",
      solution:
        "Built a peer-to-peer campus exchange application bridging a fast React client with a robust Java Spring Boot backend service for item listings, category management, and barter transactions.",
      contributions: [
        "Developed React/Vite client interface with intuitive listing creation and filter flows.",
        "Implemented Java Spring Boot REST API endpoints with Spring Data JPA entities.",
        "Configured relational database models for item catalogs, user profiles, and barter statuses.",
      ],
      githubUrl: "https://github.com/Hellbot15/CampusBarter.git",
    },
  ] as Project[],
  technicalIndex: [
    {
      index: "01",
      category: "PROGRAMMING & CORE",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      index: "02",
      category: "BACKEND & APIS",
      skills: [
        "FastAPI",
        "Spring Boot",
        "REST APIs",
        "Spring Data JPA",
        "PostgreSQL",
        "Redis",
      ],
    },
    {
      index: "03",
      category: "AI & MACHINE LEARNING",
      skills: [
        "LLM Applications",
        "AI API Integration",
        "Google Gemini",
        "Groq",
        "AI Agents",
        "ML Foundations",
      ],
    },
    {
      index: "04",
      category: "CLIENT & UI",
      skills: [
        "React",
        "Vite",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "Chrome Extensions",
      ],
    },
    {
      index: "05",
      category: "SECURITY & INTELLIGENCE",
      skills: [
        "Threat Intelligence",
        "VirusTotal Integration",
        "Google Safe Browsing",
        "Vulnerability Management",
      ],
    },
    {
      index: "06",
      category: "TOOLS & PLATFORMS",
      skills: ["Git", "GitHub", "Docker", "Vercel", "Chrome Extensions"],
    },
  ] as SkillCategory[],
  currentFocus: [
    "Deepening Machine Learning and Data Science mathematical foundations.",
    "Designing autonomous AI agent workflows and tool-calling systems.",
    "Strengthening backend system architecture, API scalability, and database design.",
    "Expanding full-stack capabilities through continuous hands-on project building.",
  ],
  links: {
    github: "https://github.com/Hellbot15",
    email: "mailto:abdulghani.dev@gmail.com",
    linkedin: "https://linkedin.com",
  },
};
