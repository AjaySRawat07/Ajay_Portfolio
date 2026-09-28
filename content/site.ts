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
    location: "Pune, India",
    yearsExperience: "3+ years",
    photo: { src: "/images/ajay.jpg", alt: "Portrait of Ajay Singh Rawat", objectPosition: "50% 30%" },
    resume: { file: "/resume/Ajay-Singh-Rawat-Resume.pdf", label: "Resume" },
  },
  nav: { cta: { label: "Hire me", href: "#contact" } },
  hero: {
    eyebrow: "Software Engineer · Vaultize Technologies",
    lead: "I design and build secure, dependable software for enterprise file sharing, with a focus on clean engineering and calm, considered interfaces.",
    secondaryCta: { label: "View selected work", href: "#projects" },
    meta: [
      { label: "Focus", value: "Enterprise file sharing" },
      { label: "Based in", value: "Pune, India" },
      { label: "Experience", value: "3+ years" },
    ],
    orbit: [ // icon = lucide name; ring = 1 | 2; position = top | bottom | left | right
      { icon: "lock-keyhole", ring: 1, position: "top",    label: "Security" },
      { icon: "cloud",        ring: 1, position: "bottom", label: "Cloud" },
      { icon: "share-2",      ring: 2, position: "left",   label: "Sharing" },
      { icon: "shield-check", ring: 2, position: "right",  label: "Protection" },
    ],
  },
  about: {
    statement: { before: "Software built to be ", em: "secure", after: ", dependable and a pleasure to use." },
    paragraphs: [
      "I'm a Full-stack Software Engineer at Vaultize Technologies, working on enterprise file-sharing products.",
      "I have 3+ years of experience designing, building, and shipping production-grade web applications end-to-end. I work daily across ReactJS, Next.js, TypeScript, and Node.js to build robust REST APIs and scalable, secure client experiences. I am passionate about clean technical documentation, rigorous test automation, and engineering software that performs flawlessly under pressure."
    ],
  },
  skills: [ // any number of groups; grid auto-fits
    { title: "Frontend",        icon: "layout-template", items: ["ReactJS", "Next.js", "Redux", "Zustand", "Tailwind CSS"] },
    { title: "Backend",         icon: "server",          items: ["Node.js", "Express.js", "REST API", "Prisma ORM"] },
    { title: "Data",            icon: "database",        items: ["PostgreSQL", "MongoDB", "SQL", "Supabase"] },
    { title: "Cloud & DevOps",  icon: "cloud-cog",       items: ["Docker", "GitHub Actions", "CI/CD", "Vercel", "Linux"] },
    { title: "Languages",       icon: "code",            items: ["JavaScript", "TypeScript", "Python", "C++", "C#"] },
    { title: "Testing",         icon: "test-tubes",      items: ["Jest", "Playwright", "Unit Testing", "Integration Testing"] },
  ],
  experience: [
    { dates: "April 2024 — Present", title: "Software Engineer", org: "Vaultize Technologies",
      bullets: [
        "Engineered 15+ reusable ReactJS components for an enterprise file-sharing platform, cutting feature delivery time by 30%.",
        "Designed and executed 200+ test cases using Jest and Playwright for unit and integration testing, reducing production bugs by 40%.",
        "Led the migration from client-side to server-side rendering with Next.js, improving page load speed by 45%.",
        "Optimized real-time document review features to sustain 100,000+ requests/hour and 100+ concurrent users with zero production downtime.",
        "Implemented access controls and audit trails to reinforce security across the codebase, driving a 20% increase in user engagement."
      ] 
    },
    { dates: "June 2023 — February 2024", title: "Full Stack Development Apprentice", org: "Geekster",
      bullets: [
        "Developed and deployed 8+ full-stack MERN applications covering REST API design, relational database modeling, and responsive UI development.",
        "Secured first place in a competitive hackathon by architecting and shipping a polished OTT streaming platform.",
        "Solved 250+ Data Structures & Algorithms problems in Java and C++, applying optimization patterns to front-end performance."
      ]
    },
  ],
  education: [
    { dates: "Completed", title: "Master of Computer Applications (MCA)", org: "Graphic Era University, Dehradun, India", note: "" },
    { dates: "Completed", title: "Bachelor of Computer Applications (BCA)", org: "Shri Guru Ram Rai University, Dehradun, India", note: "" },
  ],
  achievements: [],
  projects: [
    { slug: "enterprise-file-sharing", index: "01", title: "Enterprise File Sharing",
      summary: "Case study covering the problem, my approach and the outcome for an enterprise file-sharing platform.",
      stack: ["React", "Next.js", "Security", "REST API"], href: "/projects/enterprise-file-sharing", draft: false,
      caseStudy: { 
        problem: "Enterprise clients required a highly secure, performant, and reliable file-sharing platform capable of handling real-time document reviews at scale, with strict access controls and zero downtime.", 
        approach: "Led the migration to Next.js for server-side rendering, engineered 15+ reusable ReactJS components, and implemented rigorous automated testing using Jest and Playwright to ensure platform stability. I also architected robust access controls and audit trails.", 
        outcome: "Improved page load speed by 45%, reduced production bugs by 40%, and optimized the system to effortlessly sustain 100,000+ requests per hour and 100+ concurrent users with zero downtime.", 
        role: "Software Engineer focusing on front-end performance, component architecture, and test automation." 
      } 
    },
    { slug: "talentgraph", index: "02", title: "TalentGraph", summary: "AI-powered resume builder with JD-tailored suggestions and PDF export.", stack: ["Next.js", "TypeScript", "OpenAI API", "Supabase", "Zustand"], href: "https://talentgraph.netlify.app", draft: false },
    { slug: "finance-management-system", index: "03", title: "Finance Management System", summary: "Full-stack expense tracker with AI-powered summaries and real-time charts.", stack: ["Next.js", "Prisma", "Inngest", "Supabase"], href: "https://finance-buddy-murex.vercel.app", draft: false },
  ],
  contact: {
    heading: { before: "Let's build ", em: "together." },
    socials: [
      { icon: "github",   label: "GitHub",   href: "https://github.com/AjaySRawat07" },
      { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/engineer-ajay" },
      { icon: "mail",     label: "Email",    href: "mailto:ajay.work72@gmail.com" },
    ],
  },
  seo: {
    title: "Ajay Singh Rawat — Software Engineer",
    description: "Ajay Singh Rawat, Software Engineer at Vaultize Technologies, building secure enterprise file-sharing software.",
    url: "https://ajay-portfolio-seven.vercel.app", ogImageAlt: "Ajay Singh Rawat — Software Engineer",
  },
  footer: { left: "© 2026 Ajay Singh Rawat", right: "Software Engineer · Vaultize Technologies" },
};

export const site = siteSchema.parse(rawSite);
