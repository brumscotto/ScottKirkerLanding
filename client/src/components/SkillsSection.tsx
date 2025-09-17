import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Award, 
  Database,
  Server,
  Layers,
  Zap
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  color: string;
}

const technicalSkills: SkillCategory[] = [
  {
    title: 'Full-Stack Development',
    icon: Layers,
    skills: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['Ionic Framework', 'Capacitor', 'Cross-platform Apps', 'iOS', 'Android'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Web Platforms',
    icon: Globe,
    skills: ['Shopify', 'WordPress', 'Squarespace', 'Wix', 'Weebly'],
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['RESTful APIs', 'Database Design', 'Cloud Services', 'Authentication'],
    color: 'from-orange-500 to-red-500'
  }
];

const certifications = [
  {
    title: 'Professional Life Coach',
    issuer: 'Empowerment Coach Academy',
    year: '2018',
    description: 'Comprehensive certification in life coaching methodologies and practices'
  },
  {
    title: 'Ionic Framework Certification',
    issuer: 'Ionic',
    year: '2023',
    description: 'Advanced cross-platform mobile app development with Ionic and Capacitor'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical expertise and human-centered skills 
            developed through years of hands-on experience.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">
              Technical Skills
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category) => {
              const Icon = category.icon;
              
              return (
                <Card 
                  key={category.title} 
                  className="h-full hover-elevate"
                  data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardHeader className="text-center">
                    <div className={`mx-auto p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">
              Certifications & Credentials
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="hover-elevate"
                data-testid={`card-certification-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {cert.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5" />
            <p>
              Continuously learning and staying current with emerging technologies and best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}