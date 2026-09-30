import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/sections/experience").then(m => m.Experience), { ssr: true });
const Education = dynamic(() => import("@/components/sections/education").then(m => m.Education), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/projects").then(m => m.Projects), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/contact").then(m => m.Contact), { ssr: true });

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
