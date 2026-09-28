export const projects = [
  {
    isFeatured: true,
    slug: "enterprise-file-sharing",
    title: "Enterprise File Sharing & Document Collaboration",
    label: "Professional work · Vaultize Technologies",
    problem: "Teams need to share and review sensitive documents securely and in real time, with control over who can see what.",
    contribution: "Frontend contributor on a team-built product: reusable React UI, Next.js SSR, Jest and Playwright tests, real-time review work.",
    tags: ["React.js", "Next.js", "TypeScript", "Node.js", "Jest", "Playwright", "AWS"],
    challenges: [
      "Handling real-time document review at 100,000+ requests per hour with 100+ concurrent users and no production downtime.",
      "Moving client-side rendering to Next.js server-side rendering without regressions.",
      "Implementing access controls and audit trails for secure collaboration.",
      "Keeping quality high with 200+ Jest and Playwright tests."
    ],
    stats: [
      { value: "45%", label: "faster page load" },
      { value: "200+", label: "automated tests" },
      { value: "100k+", label: "requests per hour" }
    ],
    demoLink: "", // proprietary
    githubLink: "", // proprietary
  },
  {
    isFeatured: false,
    slug: "talentgraph",
    title: "TalentGraph",
    label: "Project · placeholder",
    problem: "Users needed an AI-powered resume builder with JD-tailored suggestions and PDF export.",
    contribution: "Built full-stack application with OpenAI integration and Supabase auth.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Supabase", "Zustand", "Tailwind CSS"],
    demoLink: "https://talentgraph.netlify.app",
    githubLink: "https://github.com/AjaySRawat07", // placeholder
  },
  {
    isFeatured: false,
    slug: "finance-management-system",
    title: "Finance Management System",
    label: "Project · placeholder",
    problem: "Need an expense tracker with AI-powered summaries, receipt scanning, and real-time charts.",
    contribution: "Architected a full-stack system handling 500+ transactions with sub-200ms query response times.",
    tags: ["Next.js", "TypeScript", "Prisma", "Inngest", "Supabase"],
    demoLink: "https://finance-buddy-murex.vercel.app",
    githubLink: "https://github.com/AjaySRawat07", // placeholder
  }
];
