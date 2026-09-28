"use client";

import * as React from "react";
import Link from "next/link";
import { projects } from "../../data/projects";
import { Eyebrow } from "../ui/Eyebrow";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../animations/Reveal";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const Projects = () => {
  const featured = projects.find((p) => p.isFeatured);
  const others = projects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="w-full pt-[88px] pb-[88px] max-md:py-[56px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px]">
        <Reveal>
          <Eyebrow>03 / Projects</Eyebrow>
          <SectionHeading className="mb-12">Selected work.</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 xl:grid-cols-[800px_1fr] gap-8">
          {featured && (
            <Reveal delay={0.1}>
              <Link href={`/projects/${featured.slug}`} className="block h-full group">
                <Card interactive className="h-full overflow-hidden flex flex-col">
                  {/* Mock thumbnail */}
                  <div className="h-[230px] bg-card-inset border-b border-border p-6 flex gap-6 overflow-hidden">
                    {/* Sidebar skeleton */}
                    <div className="w-[120px] flex-shrink-0 flex flex-col gap-4 border-r border-border/50 pr-6">
                      <div className="h-3 w-3/4 bg-border rounded-full" />
                      <div className="h-3 w-1/2 bg-border rounded-full" />
                      <div className="h-3 w-2/3 bg-border rounded-full" />
                      <div className="h-3 w-1/2 bg-border rounded-full" />
                    </div>
                    {/* Main rows skeleton */}
                    <div className="flex-1 flex flex-col gap-4">
                      {[1, 2, 3, 4].map((row, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card">
                          <div className="flex items-center gap-4 w-1/2">
                            <div className="w-6 h-6 rounded bg-border flex-shrink-0" />
                            <motion.div
                              className="h-2 bg-text/20 rounded-full"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.6, delay: 0.6 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
                              style={{ transformOrigin: "left", width: `${40 + Math.random() * 40}%` }}
                            />
                          </div>
                          {i === 1 ? (
                            <span className="font-mono text-[10px] uppercase text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded">
                              Reviewing
                            </span>
                          ) : (
                            <div className="w-16 h-2 bg-border rounded-full" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className="font-mono text-[13px] text-muted">{featured.label}</div>
                      <div className="font-sans font-medium text-[14px] text-text group-hover:text-accent transition-colors flex items-center gap-1">
                        View case study <span>→</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-[36px] text-text leading-tight mb-8">
                      {featured.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 flex-1">
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-wider text-faint mb-2">Problem</div>
                        <p className="font-sans text-[15px] leading-relaxed text-body">{featured.problem}</p>
                      </div>
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-wider text-faint mb-2">My contribution</div>
                        <p className="font-sans text-[15px] leading-relaxed text-body">{featured.contribution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border">
                      {featured.tags.map((tag) => (
                        <Chip key={tag} variant="tech">{tag}</Chip>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </Reveal>
          )}

          <div className="flex flex-col gap-8 h-full">
            {others.map((project, i) => (
              <Reveal key={i} delay={0.3 + i * 0.2} className="flex-1">
                <div className="h-full rounded-[16px] border-[1.5px] border-dashed border-border-outline p-8 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[12px] text-muted mb-4">{project.label}</div>
                    <h3 className="font-serif text-[28px] text-text leading-tight mb-6">{project.title}</h3>
                    
                    <div className="flex flex-col gap-4 mb-8">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-accent mr-2">Problem:</span>
                        <span className="font-sans text-[14px] text-body">{project.problem}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-accent mr-2">Contribution:</span>
                        <span className="font-sans text-[14px] text-body">{project.contribution}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Chip key={tag} variant="tech" className="bg-transparent">{tag}</Chip>
                      ))}
                    </div>
                    <div className="flex items-center gap-6">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-sans font-medium text-[14px] text-text hover:text-accent transition-colors">
                        Live demo <ArrowUpRight size={14} />
                      </Link>
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-sans font-medium text-[14px] text-muted hover:text-text transition-colors">
                        GitHub <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
