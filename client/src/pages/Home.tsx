import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <WorkSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      <footer className="bg-muted/50 py-8">
        <div className="container px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Scott Kirker. Built with passion for meaningful technology.
          </p>
        </div>
      </footer>
    </div>
  );
}