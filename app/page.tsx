import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="w-full py-8 border-t border-border/40 text-center font-mono text-[10px] text-muted-foreground">
        © Copyright 2026 libyzxy0. All rights reserved.
      </footer>
    </main>
  );
}