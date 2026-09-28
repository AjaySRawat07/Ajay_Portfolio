import Link from "next/link";
import { site } from "@/../content/site";
import { Reveal, SectionHeader } from "@/components/motion/reveal";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Projects() {
  if (site.projects.length === 0) return null;

  return (
    <section id="projects" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
      <SectionHeader index="04" title="Selected work" />
      <div>
        {site.projects.map((project, idx) => {
          const isDraft = project.draft;
          const Wrapper = isDraft ? "div" : Link;
          
          return (
            <Reveal key={idx} delay={idx * 0.1}>
              <Wrapper
                href={project.href}
                className={cn(
                  "group relative grid grid-cols-1 sm:grid-cols-[60px_1fr_auto] gap-[24px] items-center py-[30px] px-[12px] border-t border-border no-underline transition-all duration-300 hover:bg-secondary hover:pl-[26px]",
                  idx === site.projects.length - 1 && "border-b",
                  isDraft && "opacity-55 cursor-default"
                )}
              >
                <span className="mono hidden sm:block">{project.index}</span>
                
                <div>
                  <h3 className="font-serif text-[clamp(1.6rem,3vw,2.3rem)] m-0">{project.title}</h3>
                  <p className="text-muted-foreground text-[0.92rem] max-w-[560px] my-[6px] mb-[10px]">{project.summary}</p>
                  <div className="flex gap-[8px] flex-wrap">
                    {project.stack.map((tag, i) => (
                      <span
                        key={i}
                        className="mono !text-[0.68rem] px-[10px] py-[4px] border border-border rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {!isDraft && (
                  <span className="w-[46px] h-[46px] border border-border rounded-full grid place-items-center transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:-rotate-45">
                    <Icon name="arrow-right" className="w-[18px] h-[18px]" />
                  </span>
                )}
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
