import { site } from "@/../content/site";
import { Reveal, SectionHeader } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
      <SectionHeader index="01" title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
        <Reveal delay={0}>
          <p className="font-serif text-[clamp(1.7rem,3.2vw,2.5rem)] leading-[1.2] m-0">
            {site.about.statement.before}
            <em className="text-accent not-italic italic">{site.about.statement.em}</em>
            {site.about.statement.after}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="text-muted-foreground">
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "mt-0" : ""}>
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
