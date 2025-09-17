import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Linkedin, 
  MessageCircle, 
  Calendar,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

interface ContactMethod {
  title: string;
  description: string;
  icon: any;
  action: string;
  url?: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    title: 'Professional Inquiries',
    description: 'For business opportunities, partnerships, or technical consulting',
    icon: Mail,
    action: 'Send Email',
    url: 'mailto:hello@scottkirker.com', // todo: remove mock functionality - replace with real email
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Connect on LinkedIn',
    description: 'Let\'s connect and expand our professional network',
    icon: Linkedin,
    action: 'View Profile',
    url: 'https://www.linkedin.com/in/scottkirker/',
    color: 'from-blue-600 to-blue-700'
  },
  {
    title: 'Life Coaching',
    description: 'Ready to unlock your potential? Schedule a coaching consultation',
    icon: MessageCircle,
    action: 'Book Session',
    url: 'mailto:coaching@scottkirker.com', // todo: remove mock functionality - replace with real coaching email
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Speaking & Events',
    description: 'Available for conferences, workshops, and speaking engagements',
    icon: Calendar,
    action: 'Get in Touch',
    url: 'mailto:speaking@scottkirker.com', // todo: remove mock functionality - replace with real speaking email
    color: 'from-orange-500 to-red-500'
  }
];

export default function ContactSection() {
  const handleContactClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log('Contact method clicked');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking for technical expertise, coaching guidance, or collaboration opportunities, 
            I'd love to hear from you. Let's build something meaningful together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            
            return (
              <Card 
                key={index} 
                className="hover-elevate cursor-pointer transition-all duration-300"
                data-testid={`card-contact-${index}`}
                onClick={() => handleContactClick(method.url)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {method.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between p-0 h-auto hover:bg-transparent"
                    data-testid={`button-contact-${index}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContactClick(method.url);
                    }}
                  >
                    <span>{method.action}</span>
                    <div className="flex items-center gap-1">
                      <ArrowRight className="h-4 w-4" />
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Open to Opportunities
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                I'm always interested in discussing new projects, innovative ideas, 
                or opportunities to make a meaningful impact through technology and coaching.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  data-testid="button-email-primary"
                  onClick={() => handleContactClick('mailto:hello@scottkirker.com')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  hello@scottkirker.com
                </Button>
                <Button 
                  variant="outline"
                  data-testid="button-linkedin-primary"
                  onClick={() => handleContactClick('https://www.linkedin.com/in/scottkirker/')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}