import { z } from "zod";

export const siteSchema = z.object({
  person: z.object({
    name: z.string(),
    nameLines: z.array(z.string()),
    greeting: z.string(),
    logoLetter: z.string(),
    monogram: z.string(),
    role: z.string(),
    company: z.string(),
    email: z.string(),
    location: z.string(),
    yearsExperience: z.string(),
    photo: z.object({
      src: z.string(),
      alt: z.string(),
      objectPosition: z.string(),
    }),
    resume: z.object({
      file: z.string(),
      label: z.string(),
    }),
  }),
  nav: z.object({
    cta: z.object({ label: z.string(), href: z.string() }),
  }),
  hero: z.object({
    eyebrow: z.string(),
    lead: z.string(),
    secondaryCta: z.object({ label: z.string(), href: z.string() }),
    meta: z.array(z.object({ label: z.string(), value: z.string() })),
    orbit: z.array(z.object({
      icon: z.string(),
      ring: z.number(),
      position: z.enum(["top", "bottom", "left", "right"]),
      label: z.string(),
    })),
  }),
  about: z.object({
    statement: z.object({ before: z.string(), em: z.string(), after: z.string() }),
    paragraphs: z.array(z.string()),
  }),
  skills: z.array(z.object({
    title: z.string(),
    icon: z.string(),
    items: z.array(z.string()),
  })),
  experience: z.array(z.object({
    dates: z.string(),
    title: z.string(),
    org: z.string(),
    bullets: z.array(z.string()),
  })),
  education: z.array(z.object({
    dates: z.string(),
    title: z.string(),
    org: z.string(),
    note: z.string().optional(),
  })).optional(),
  achievements: z.array(z.object({
    dates: z.string(),
    title: z.string(),
    org: z.string(),
    note: z.string().optional(),
  })).optional(),
  projects: z.array(z.object({
    slug: z.string(),
    index: z.string(),
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    href: z.string(),
    draft: z.boolean(),
    caseStudy: z.object({
      problem: z.string(),
      approach: z.string(),
      outcome: z.string(),
      role: z.string(),
    }).optional(),
  })),
  contact: z.object({
    heading: z.object({ before: z.string(), em: z.string() }),
    socials: z.array(z.object({
      icon: z.string(),
      label: z.string(),
      href: z.string(),
    })),
  }),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    ogImageAlt: z.string(),
  }),
  footer: z.object({
    left: z.string(),
    right: z.string(),
  }),
});
