import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Highlights } from "../components/sections/Highlights";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Ambient glow top right */}
      <div 
        className="absolute w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "var(--accent)",
          opacity: 0.08,
          filter: "blur(120px)",
          right: "-140px",
          top: "-160px",
          zIndex: -1
        }}
      />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Highlights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
