import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Certifications } from "@/components/Certifications/Certifications";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen selection:bg-primary/30 selection:text-white">
      <BackgroundGrid />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="relative py-8 z-10 border-t border-white/10 bg-black/80 backdrop-blur-md text-center">
        <p className="text-muted-foreground font-mono text-sm">
          &copy; {new Date().getFullYear()} Dhivagar Pakkirisamy. All systems secured.
        </p>
      </footer>
    </main>
  );
}
