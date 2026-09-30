"use client";

import { site } from "@/../content/site";
import { Reveal, SectionHeader } from "@/components/motion/reveal";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { LazyMotion, domAnimation, m } from "motion/react";

export function Projects() {
  if (site.projects.length === 0) return null;

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
        <SectionHeader index="04" title="Selected work" />
      <div className="flex flex-col gap-12">
        {site.projects.map((project, idx) => {
          if (project.draft) return null;

          return (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-[24px] md:p-[40px] rounded-3xl border border-border bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_var(--color-primary)]"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                <div>
                  <h3 className="font-serif text-[clamp(1.8rem,4vw,2.5rem)] text-foreground m-0 leading-tight">
                    {project.title}
                  </h3>
                  {project.caseStudy?.role && (
                    <span className="mono text-[0.8rem] text-primary mt-2 inline-block px-3 py-1 bg-primary/10 rounded-full">
                      {project.caseStudy.role}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  {project.links?.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[0.85rem] font-mono uppercase tracking-wider bg-secondary/80 px-4 py-2 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors shadow-sm"
                    >
                      <Icon name="github" className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Icon name="external-link" className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Summary */}
              <p className="text-muted-foreground text-[1.1rem] leading-relaxed mb-10 max-w-[850px]">
                {project.summary}
              </p>

              {/* Case Study Grid */}
              {project.caseStudy && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 p-6 md:p-8 rounded-2xl bg-background/50 border border-border/50">
                  {/* Problem */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-foreground font-medium mb-1">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Icon name="cloud-cog" className="w-4 h-4" />
                      </div>
                      <h4 className="text-[1.05rem] tracking-tight">Real-World Problem</h4>
                    </div>
                    <p className="text-[0.92rem] text-muted-foreground leading-relaxed">
                      {project.caseStudy.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-foreground font-medium mb-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Icon name="code" className="w-4 h-4" />
                      </div>
                      <h4 className="text-[1.05rem] tracking-tight">Technical Solution</h4>
                    </div>
                    <p className="text-[0.92rem] text-muted-foreground leading-relaxed">
                      {project.caseStudy.approach}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-foreground font-medium mb-1">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <Icon name="arrow-up-right" className="w-4 h-4" />
                      </div>
                      <h4 className="text-[1.05rem] tracking-tight">Measurable Impact</h4>
                    </div>
                    <p className="text-[0.92rem] text-muted-foreground leading-relaxed">
                      {project.caseStudy.outcome}
                    </p>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-border/50">
                <span className="mono text-[0.75rem] text-muted-foreground mr-2">TECH STACK</span>
                {project.stack.map((tag, i) => (
                  <span
                    key={i}
                    className="mono text-[0.75rem] px-[12px] py-[6px] border border-border/60 rounded-full text-foreground bg-secondary/30 transition-all hover:bg-secondary hover:border-primary/40 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </m.div>
          );
        })}
      </div>
    </section>
    </LazyMotion>
  );
}
