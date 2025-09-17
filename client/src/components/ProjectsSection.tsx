import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Heart, BookOpen } from 'lucide-react';
import grativerseImage from '@assets/generated_images/Grativerse_app_mockup_1c679411.png';
import ultimatelyImage from '@assets/generated_images/Ultimately_app_mockup_afb19748.png';

interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  url: string;
  icon: any;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: 'grativerse',
    name: 'Grativerse',
    description: 'A wellness platform that unlocks the power of a social gratitude practice',
    longDescription: 'Grativerse combines the proven benefits of gratitude journaling with social connection, creating a supportive community where users can share their gratitude and inspire others. The platform encourages daily mindfulness and positive thinking through structured gratitude exercises.',
    image: grativerseImage,
    url: 'https://grativerse.io/',
    icon: Heart,
    tags: ['Wellness', 'Social', 'Cross-platform'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'ultimately',
    name: 'Ultimately',
    description: 'A digital journaling platform that helps you leave a meaningful legacy to future generations',
    longDescription: 'Ultimately is more than just a journaling app – it\'s a legacy builder. Users can create meaningful content, document their life stories, and preserve their wisdom for future generations. The platform focuses on intentional reflection and creating lasting connections across time.',
    image: ultimatelyImage,
    url: 'https://utlimate.ly/',
    icon: BookOpen,
    tags: ['Legacy', 'Journaling', 'Family'],
    color: 'from-amber-500 to-orange-500'
  }
];

export default function ProjectsSection() {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two applications that embody my mission of creating meaningful technology 
            that emphasizes intentionality and human connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => {
            const Icon = project.icon;
            
            return (
              <Card 
                key={project.id} 
                className="overflow-hidden hover-elevate cursor-pointer"
                data-testid={`card-project-${project.id}`}
                onClick={() => handleProjectClick(project.url)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} app mockup`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-project-${project.id}`}
                  />
                </div>
                
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">
                        {project.name}
                      </CardTitle>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        data-testid={`badge-tag-${tag.toLowerCase()}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {project.longDescription}
                  </p>

                  <Button 
                    className="w-full"
                    data-testid={`button-visit-${project.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.url);
                    }}
                  >
                    Visit {project.name}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Both applications are built using modern cross-platform technologies 
            and emphasize user privacy and meaningful engagement.
          </p>
          <Button 
            variant="outline"
            data-testid="button-view-skills"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Technical Skills
          </Button>
        </div>
      </div>
    </section>
  );
}