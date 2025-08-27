import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  Bot,
  Workflow,
  BarChart3,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();
  
  const services = [
    {
      icon: Code2,
      title: t('webDevelopment'),
      description: t('webDevelopmentDesc'),
      features: ['React & Node.js', 'Flutter & React Native', 'Progressive Web Apps'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Bot,
      title: t('aiSolutions'),
      description: t('aiSolutionsDesc'),
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Cloud,
      title: t('cloudSolutions'),
      description: t('cloudSolutionsDesc'),
      features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipeline'],
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Shield,
      title: t('cyberSecurity'),
      description: t('cyberSecurityDesc'),
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      color: 'text-destructive',
      bgColor: 'bg-destructive/10'
    },
    {
      icon: BarChart3,
      title: t('dataAnalytics'),
      description: t('dataAnalyticsDesc'),
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Database,
      title: t('systemIntegration'),
      description: t('systemIntegrationDesc'),
      features: ['PostgreSQL & MongoDB', 'Data Analytics', 'Real-time Sync'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium">{t('services')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              {t('servicesTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        {/* الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card transition-all duration-300 group cursor-pointer bg-gradient-card border-border/50"
              >
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`text-sm text-muted-foreground flex items-center ${isRTL ? 'mr-2' : 'ml-2'}`}>
                      <div className={`w-1.5 h-1.5 bg-primary rounded-full ${isRTL ? 'mr-2' : 'ml-2'}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* زر الإجراء */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            {t('exploreAllProjects')}
            {isRTL ? <ArrowLeft className="w-5 h-5 mr-2" /> : <ArrowRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;