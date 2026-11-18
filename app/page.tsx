
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ExperienceSection />

      <ProjectsSection />

      <ArchitectureSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
