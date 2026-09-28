import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
