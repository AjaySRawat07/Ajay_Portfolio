import { siteSchema } from "../src/lib/schema";

const rawSite = {
  person: {
    name: "Ajay Singh Rawat",
    nameLines: ["Ajay Singh", "Rawat"],      // hero renders one mask line each
    greeting: "Hello! I'm",
    logoLetter: "A",
    monogram: "AR",
    role: "Software Engineer",
    company: "Vaultize Technologies",
    email: "ajay.work72@gmail.com",
    location: "India",
    yearsExperience: "3+ years",
    photo: { src: "/images/ajay.jpg", alt: "Ajay Singh Rawat — Full Stack Developer & Software Engineer", objectPosition: "50% 30%" },
    resume: { file: "/resume/Ajay-Singh-Rawat-Resume.pdf", label: "Resume" },
  },
  nav: { cta: { label: "Hire me", href: "#contact" } },
  hero: {
    eyebrow: "Software Engineer · Vaultize Technologies",
    lead: "I am a Full Stack Developer in Pune specializing in MERN and PERN stack applications with Next.js and TypeScript. I design and build secure, dependable software for enterprise systems, with a focus on clean engineering and calm, considered interfaces.",
    secondaryCta: { label: "View selected work", href: "#projects" },
    meta: [
      { label: "Focus", value: "MERN, PERN stack" },
      { label: "Based in", value: "India" },
      { label: "Experience", value: "3+ years" },
    ],
    orbit: [ // icon = lucide name; ring = 1 | 2; position = top | bottom | left | right
      { icon: "lock-keyhole", ring: 1, position: "top", label: "Security" },
      { icon: "cloud", ring: 1, position: "bottom", label: "Cloud" },
      { icon: "share-2", ring: 2, position: "left", label: "Sharing" },
      { icon: "shield-check", ring: 2, position: "right", label: "Protection" },
    ],
  },
  about: {
    statement: { before: "Software built to be ", em: "secure", after: ", dependable and a pleasure to use." },
    paragraphs: [
      "I'm a Full-stack Software Engineer at Vaultize Technologies, working on enterprise file-sharing products. As a freelance full stack developer India relies on for high-performance applications, I specialize in building MERN and PERN stack applications.",
      "I have 3+ years of experience designing, building, and shipping production-grade web applications end-to-end. I work daily across ReactJS, Next.js, TypeScript, and Node.js to build robust REST APIs and scalable, secure client experiences. Whether you need to hire a full stack developer for complex architecture or reliable frontend performance, I am passionate about rigorous test automation and engineering software that performs flawlessly."
    ],
  },
  skills: [
    { title: "Frontend", icon: "layout-template", items: ["ReactJS", "Next.js", "Redux", "Zustand", "Tailwind CSS"] },
    { title: "Backend", icon: "server", items: ["Node.js", "Express.js", "REST APIs", "Prisma ORM", "TypeScript"] },
    { title: "Databases", icon: "database", items: ["PostgreSQL", "MongoDB", "SQL", "Supabase"] },
    { title: "Cloud & DevOps", icon: "cloud-cog", items: ["Docker", "GitHub Actions", "CI/CD", "Vercel", "Linux"] },
    { title: "Tools & Testing", icon: "test-tubes", items: ["Jest", "Playwright", "Unit Testing", "Integration Testing", "Git"] },
    { title: "Security", icon: "shield-check", items: ["Access Controls", "Audit Trails", "Data Encryption", "Secure File Sharing"] },
  ],
  experience: [
    {
      org: "Vaultize Technologies",
      orgUrl: "",
      location: "Pune, India",
      type: "Full-time",
      current: true,
      dates: "April 2024 — Present",
      duration: "2 yrs 7 mos",
      roles: [
        {
          title: "Software Engineer",
          dates: "April 2024 — Present",
          bullets: [
            "Developed 15+ reusable React.js components for an enterprise file-sharing platform (EFSS), reducing feature delivery time by 30%.",
            "Contributed to DRM functionality, implementing secure document-sharing workflows, role-based access controls, and permission-based restrictions to protect sensitive enterprise data.",
            "Designed and executed 200+ Jest and Playwright test cases, reducing production bugs by 40%.",
            "Migrated key workflows to Next.js SSR, improving page load speed by 45%.",
            "Optimized real-time document collaboration to handle 100,000+ requests/hour and 100+ concurrent users with zero production downtime."
          ]
        }
      ],
      companyProjects: [
        {
          title: "Enterprise File Sharing (EFSS + DRM)",
          description: "Enhanced an enterprise-grade file-sharing platform with Digital Rights Management (DRM), secure document access, permission-based sharing, and audit trails to strengthen data protection, document governance, and collaboration.",
          stack: ["React.js", "Next.js", "Node.js", "REST APIs", "Jest", "Playwright", "EFSS", "DRM"]
        }
      ]
    },
    {
      org: "Geekster",
      orgUrl: "",
      location: "Remote",
      type: "Apprenticeship",
      current: false,
      dates: "June 2023 — February 2024",
      duration: "9 mos",
      roles: [
        {
          title: "Full Stack Development Apprentice",
          dates: "June 2023 — February 2024",
          bullets: [
            "Developed and deployed 8+ full-stack MERN applications, implementing REST APIs, database integration, authentication, and responsive UI development.",
            "Secured 1st place in a competitive hackathon by architecting and delivering a fully functional OTT streaming platform.",
            "Collaborated on real-world development tasks, debugging, code reviews, and application optimization while strengthening full-stack engineering skills."
          ]
        }
      ]
    },
  ],
  education: [
    { dates: "Completed", title: "Master of Computer Applications (MCA)", org: "Graphic Era University, Dehradun, India", note: "" },
    { dates: "Completed", title: "Bachelor of Computer Applications (BCA)", org: "Shri Guru Ram Rai University, Dehradun, India", note: "" },
  ],
  achievements: [],
  projects: [
    {
      title: "TalentGraph",
      summary: "AI-powered resume builder generating job-description-tailored suggestions with custom PDF export.",
      stack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Zustand", "Tailwind CSS"],
      links: { live: "https://talentgraph.netlify.app/", repo: "" },
      draft: false,
      caseStudy: {
        problem: "Creating tailored resumes manually is time-consuming and often lacks specific job description keywords needed for ATS optimization.",
        approach: "Integrated the OpenAI API for context-aware content generation and Supabase for secure authentication. Built a reusable 20-component UI library and established a complete CI/CD pipeline.",
        outcome: "Launched a production-ready application in under 6 weeks, reducing average resume creation time by 70% compared to manual drafting.",
        role: "Full Stack Engineer"
      }
    },
    {
      title: "Finance Management System",
      summary: "Full-stack expense tracker featuring AI-powered financial summaries, automated receipt scanning, and real-time analytics.",
      stack: ["Next.js", "TypeScript", "Prisma", "Inngest", "Supabase"],
      links: { live: "https://finance-buddy-murex.vercel.app/", repo: "" },
      draft: false,
      caseStudy: {
        problem: "Users struggle to efficiently track and categorize expenses, leading to poor financial insights and time spent on manual data entry.",
        approach: "Architected a scalable full-stack solution with automated scheduled alerts and secure authentication. Implemented robust GitHub Actions CI/CD for reliable deployments.",
        outcome: "Optimized Prisma and PostgreSQL queries to handle 500+ transactions with sub-200ms query response times, achieving 3x faster data retrieval.",
        role: "Full Stack Engineer"
      }
    },
  ],
  contact: {
    heading: { before: "Let's build ", em: "together." },
    socials: [
      { icon: "github", label: "GitHub", href: "https://github.com/AjaySRawat07" },
      { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/engineer-ajay" },
      { icon: "mail", label: "Email", href: "mailto:ajay.work72@gmail.com" },
    ],
  },
  seo: {
    title: "Ajay Singh Rawat | Full Stack Developer & Software Engineer",
    description: "Ajay Singh Rawat is a top Full Stack Developer in Pune, India specializing in MERN & PERN stack applications using Next.js, React, and TypeScript.",
    url: "https://ajay-portfolio-seven.vercel.app", 
    ogImageAlt: "Ajay Singh Rawat — Full Stack Developer & Software Engineer",
    keywords: [
      "Ajay Singh Rawat",
      "Full Stack Developer",
      "Software Engineer",
      "React Developer",
      "Next.js Developer",
      "MERN Stack Developer",
      "PERN Stack Developer",
      "full stack developer in Pune",
      "hire full stack developer",
      "best Next.js developer",
      "freelance full stack developer India"
    ],
  },
  footer: { left: "© 2026 Ajay Singh Rawat", right: "Software Engineer · Vaultize Technologies" },
};

export const site = siteSchema.parse(rawSite);
