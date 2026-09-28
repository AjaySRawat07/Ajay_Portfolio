import { site } from "@/../content/site";
import { Reveal, SectionHeader } from "@/components/motion/reveal";
import { Icon } from "@/lib/icons";

export function Skills() {
  if (site.skills.length === 0) return null;

  return (
    <section id="skills" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
      <SectionHeader index="02" title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {site.skills.map((group, idx) => (
          <Reveal key={idx} delay={idx * 0.1} className="h-full">
            <div
              className="h-full rounded-2xl border border-border bg-card/60 p-7 transition-colors duration-300 hover:border-primary/50 hover:bg-card group"
            >
              <Icon
                name={group.icon as any}
                className="w-[22px] h-[22px] text-accent mb-[16px] transition-transform duration-400 group-hover:-translate-y-1 group-hover:-rotate-6"
              />
              <h3 className="font-serif text-[1.5rem] mb-[10px]">{group.title}</h3>
              <ul className="m-0 p-0 list-none break-words">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-[0.9rem] py-[7px] border-t border-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
