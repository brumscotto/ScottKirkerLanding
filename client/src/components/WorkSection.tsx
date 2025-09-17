import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Code, Users, ChevronRight, ExternalLink } from 'lucide-react';

interface RoleData {
  id: string;
  title: string;
  icon: any;
  description: string;
  details: string[];
  color: string;
}

const roles: RoleData[] = [
  {
    id: 'founder',
    title: 'Founder',
    icon: Building,
    description: 'Leading Ultimately LLC in creating social applications that emphasize intentionality and meaningful connection.',
    details: [
      'Founder of Ultimately LLC',
      'Creator of Grativerse - wellness platform for social gratitude practice',
      'Creator of Ultimately - digital journaling platform for meaningful legacy',
      'Focus on intentional technology that connects people'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'developer',
    title: 'Developer',
    icon: Code,
    description: 'Full-stack web developer specializing in MEAN architecture and cross-platform mobile development.',
    details: [
      'Full-stack MEAN architecture (MongoDB, Express, Angular, Node.js)',
      'Certified in Ionic cross-platform app development',
      'Expert in Capacitor native runtime for mobile deployment',
      'Experienced with Shopify, Weebly, Wix, Squarespace, and WordPress'
    ],
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'coach',
    title: 'Coach',
    icon: Users,
    description: 'Certified Professional Life Coach helping clients from diverse backgrounds achieve their goals.',
    details: [
      'Certified Professional Life Coach (2018)',
      'Trained at Empowerment Coach Academy',
      'Experience with clients from photographers to investment bankers',
      'Focus on empowering individuals to reach their potential'
    ],
    color: 'from-green-500 to-teal-500'
  }
];

export default function WorkSection() {
  const [activeRole, setActiveRole] = useState<string>('founder');
  const activeRoleData = roles.find(role => role.id === activeRole);

  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three passions, one mission: creating meaningful impact through technology and human connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Role Selection */}
          <div className="space-y-4">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole === role.id;
              
              return (
                <Card
                  key={role.id}
                  className={`cursor-pointer transition-all duration-300 hover-elevate ${
                    isActive ? 'ring-2 ring-primary' : ''
                  }`}
                  data-testid={`card-role-${role.id}`}
                  onClick={() => setActiveRole(role.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${role.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">
                          {role.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {role.description}
                        </p>
                      </div>
                      <ChevronRight 
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          isActive ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Active Role Details */}
          <div className="lg:pl-8">
            {activeRoleData && (
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${activeRoleData.color} mb-4`}>
                      <activeRoleData.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {activeRoleData.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {activeRoleData.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {activeRoleData.details.map((detail, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3"
                        data-testid={`text-detail-${index}`}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>

                  {activeRole === 'founder' && (
                    <div className="mt-8">
                      <Button 
                        className="w-full"
                        data-testid="button-view-projects"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        View My Projects
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}