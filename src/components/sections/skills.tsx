import { site } from "@/../content/site";
import { Reveal, SectionHeader } from "@/components/motion/reveal";
import { Icon } from "@/lib/icons";

export function Skills() {
  if (site.skills.length === 0) return null;

  return (
    <section id="skills" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
      <SectionHeader index="02" title="Skills" />
      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-px bg-border border border-border rounded-[18px] overflow-hidden">
        {site.skills.map((group, idx) => (
          <div
            key={idx}
            className="bg-background p-[28px] transition-colors duration-300 hover:bg-secondary group"
          >
            <Icon
              name={group.icon as any}
              className="w-[22px] h-[22px] text-accent mb-[16px] transition-transform duration-400 group-hover:-translate-y-1 group-hover:-rotate-6"
            />
            <h3 className="font-serif text-[1.5rem] mb-[10px]">{group.title}</h3>
            <ul className="m-0 p-0 list-none">
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
        ))}
      </Reveal>
    </section>
  );
}
