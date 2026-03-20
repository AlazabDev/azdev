import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Bot,
  BarChart3,
  ArrowLeft,
  ArrowRight,
  Sparkles
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
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500'
    },
    {
      icon: Bot,
      title: t('aiSolutions'),
      description: t('aiSolutionsDesc'),
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
      gradient: 'from-cyan-500 to-blue-500',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-500'
    },
    {
      icon: Cloud,
      title: t('cloudSolutions'),
      description: t('cloudSolutionsDesc'),
      features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipeline'],
      gradient: 'from-orange-500 to-amber-500',
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-500'
    },
    {
      icon: Shield,
      title: t('cyberSecurity'),
      description: t('cyberSecurityDesc'),
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      gradient: 'from-red-500 to-rose-500',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-500'
    },
    {
      icon: BarChart3,
      title: t('dataAnalytics'),
      description: t('dataAnalyticsDesc'),
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics'],
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-500'
    },
    {
      icon: Database,
      title: t('systemIntegration'),
      description: t('systemIntegrationDesc'),
      features: ['PostgreSQL & MongoDB', 'Data Analytics', 'Real-time Sync'],
      gradient: 'from-indigo-500 to-violet-500',
      iconBg: 'bg-indigo-500/10',
      iconColor: 'text-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse will-change-transform" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse will-change-transform" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">{t('services')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in delay-100">
            <span className="text-gradient animate-gradient bg-[length:200%_auto]">{t('servicesTitle')}</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="feature-card group animate-fade-in hover:scale-[1.02] hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}>
                  <Icon className={`w-7 h-7 ${service.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-5 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={`text-sm text-muted-foreground flex items-center gap-2 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1 ${isRTL ? 'flex-row-reverse group-hover:-translate-x-1' : ''}`}
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} transition-transform duration-300 group-hover:scale-150`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in delay-700">
          <Button 
            size="lg" 
            className="group bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
          >
            {t('exploreAllProjects')}
            {isRTL ? (
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-2" />
            ) : (
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
