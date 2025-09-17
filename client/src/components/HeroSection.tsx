import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import headshot from '@assets/generated_images/Professional_headshot_for_Scott_cc0462d5.png';

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Founder', 'Developer', 'Coach'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <img
            src={headshot}
            alt="Scott Kirker"
            className="mx-auto mb-8 h-48 w-48 rounded-full object-cover shadow-xl ring-4 ring-primary/10"
            data-testid="img-headshot"
          />
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Scott Kirker
          </h1>
          
          <div className="mb-8 h-16">
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Tech{' '}
              <span className="text-primary transition-all duration-500 ease-in-out">
                {roles[currentRole]}
              </span>
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Building meaningful technology that connects people and creates lasting impact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              data-testid="button-explore-work"
              onClick={() => scrollToSection('work')}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              data-testid="button-get-in-touch"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button 
              size="icon" 
              variant="ghost"
              data-testid="button-linkedin"
              onClick={() => window.open('https://www.linkedin.com/in/scottkirker/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              data-testid="button-github"
              onClick={() => console.log('GitHub clicked')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              data-testid="button-email"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
          onClick={() => scrollToSection('work')}
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}