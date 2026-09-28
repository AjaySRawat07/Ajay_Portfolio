import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

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
      {/* Ambient glow for contact section will be added there */}

      <Navbar />

      <main className="pt-[72px]">
        <section id="home" className="h-[780px] flex items-center justify-center">
          <h1 className="text-text">Hero Placeholder</h1>
        </section>
        
        {/* Placeholder sections for scroll spy */}
        <section id="about" className="h-[500px]" />
        <section id="experience" className="h-[500px]" />
        <section id="projects" className="h-[500px]" />
        <section id="skills" className="h-[500px]" />
        <section id="highlights" className="h-[500px]" />
        <section id="contact" className="h-[500px]" />
      </main>

      <Footer />
    </div>
  );
}
