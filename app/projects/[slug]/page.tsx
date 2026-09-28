import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { Eyebrow } from "../../../components/ui/Eyebrow";
import { Reveal } from "../../../components/animations/Reveal";
import { StatCard } from "../../../components/ui/StatCard";
import { Chip } from "../../../components/ui/Chip";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  return { title: project.title };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden min-h-screen">
      <Navbar />

      <main className="pt-[140px] pb-[88px] max-md:py-[100px] max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px]">
        <Reveal>
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans font-medium text-[14px] text-muted hover:text-text transition-colors mb-12">
            <ArrowLeft size={16} /> All projects
          </Link>
          
          <Eyebrow>Case study · Professional work</Eyebrow>
          <h1 className="font-serif font-normal text-[clamp(44px,6vw,64px)] leading-[1.05] tracking-[-0.01em] text-text mb-12 max-w-[900px]">
            {project.title}
          </h1>

          {/* Meta row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-y border-border mb-16">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-faint">Company</span>
              <span className="font-sans font-medium text-[15px] text-text">Vaultize Technologies</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-faint">Role</span>
              <span className="font-sans font-medium text-[15px] text-text">Software Engineer</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-faint">Period</span>
              <span className="font-sans font-medium text-[15px] text-text">Apr 2024 – Present</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-faint">Team</span>
              <span className="font-sans font-medium text-[15px] text-text">6-person engineering team</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[640px_1fr] gap-[64px] lg:gap-[80px]">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <Reveal delay={0.1}>
              <h2 className="font-mono font-medium text-[13px] uppercase tracking-wider text-accent mb-4">Problem</h2>
              <p className="font-sans text-[16px] leading-[1.7] text-body">
                {project.problem}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="font-mono font-medium text-[13px] uppercase tracking-wider text-accent mb-4">My contribution</h2>
              <p className="font-sans text-[16px] leading-[1.7] text-body">
                {project.contribution}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <h2 className="font-mono font-medium text-[13px] uppercase tracking-wider text-accent mb-4">Key technical challenges</h2>
              <ul className="flex flex-col gap-4">
                {project.challenges?.map((challenge, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span className="font-sans text-[16px] leading-[1.7] text-body">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            <Reveal delay={0.2}>
              <div className="h-[250px] rounded-[16px] border-[1.5px] border-dashed border-border-outline flex items-center justify-center p-8 text-center bg-card/50">
                <span className="font-sans text-[14px] text-muted">
                  [Product screenshot placeholder] — Add only visuals that contain no confidential company data
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                {project.stats?.map((stat, i) => (
                  <StatCard key={i} value={stat.value} label={stat.label} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip key={tag} variant="tech">{tag}</Chip>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.5} className="mt-[120px] pt-8 border-t border-border text-center">
          <p className="font-sans text-[14px] text-muted">
            My contribution to a team-built product. Outcomes may be team-level rather than individually measured.
          </p>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
