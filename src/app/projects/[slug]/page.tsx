import { site } from "@/../content/site";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import Link from "next/link";
import { Icon } from "@/lib/icons";

export function generateStaticParams() {
  return site.projects
    .filter((p) => !p.draft)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projectIndex = site.projects.findIndex((p) => p.slug === resolvedParams.slug && !p.draft);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = site.projects[projectIndex];
  const nextProject = site.projects.slice(projectIndex + 1).find((p) => !p.draft) || site.projects.find((p) => !p.draft);
  const cs = project.caseStudy;

  const renderBlock = (title: string, content?: string) => {
    if (!content || content.includes("[…]")) return null;
    return (
      <div className="mb-[40px]">
        <h3 className="mono mb-[14px] !text-[0.78rem] tracking-[0.1em]">{title}</h3>
        <p className="text-muted-foreground m-0">{content}</p>
      </div>
    );
  };

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main-content" className="pt-[140px] max-w-[800px] mx-auto px-[max(5vw,20px)] min-h-[80vh]">
        <Link href="/#projects" className="inline-flex items-center gap-[8px] no-underline text-muted-foreground text-[0.86rem] mb-[50px] transition-colors duration-200 hover:text-foreground">
          <Icon name="arrow-right" className="w-[16px] h-[16px] rotate-180" /> Back to projects
        </Link>
        
        <div className="mb-[70px]">
          <span className="mono mb-[18px] block">{project.index}</span>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] m-0 leading-[1.05] tracking-tight">{project.title}</h1>
          <p className="text-[1.2rem] text-muted-foreground mt-[20px]">{project.summary}</p>
        </div>

        {cs && (
          <div className="grid gap-[30px]">
            {renderBlock("The Problem", cs.problem)}
            {renderBlock("My Approach", cs.approach)}
            {renderBlock("My Role", cs.role)}
            {renderBlock("The Outcome", cs.outcome)}
          </div>
        )}

        {nextProject && nextProject.slug !== project.slug && (
          <div className="mt-[100px] pt-[40px] border-t border-border">
            <span className="mono block mb-[20px]">Next Project</span>
            <Link href={nextProject.href} className="group flex items-center justify-between no-underline border border-border rounded-[18px] p-[30px] transition-colors duration-300 hover:bg-secondary">
              <div>
                <h3 className="font-serif text-[2rem] m-0">{nextProject.title}</h3>
              </div>
              <span className="w-[46px] h-[46px] border border-border rounded-full grid place-items-center transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-white">
                <Icon name="arrow-right" className="w-[18px] h-[18px]" />
              </span>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
