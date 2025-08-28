import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateSEO } from '@/lib/seo';
import { useEffect } from 'react';
import ContactModal from '@/components/ContactModal';

const Services = () => {
  const { t, language, isRTL } = useLanguage();

  useEffect(() => {
    updateSEO({
      title: language === 'ar' ? 'خدماتنا التقنية | العزب تك' : 'Our Technical Services | Alazab Tech',
      description: language === 'ar' 
        ? 'اكتشف مجموعة شاملة من الخدمات التقنية المتطورة: تطوير التطبيقات، الذكاء الاصطناعي، الحلول السحابية، الأمن السيبراني وأكثر'
        : 'Discover our comprehensive range of advanced technical services: application development, AI, cloud solutions, cybersecurity and more',
      keywords: language === 'ar' 
        ? ['خدمات تقنية', 'تطوير التطبيقات', 'الذكاء الاصطناعي', 'الحلول السحابية', 'الأمن السيبراني']
        : ['technical services', 'application development', 'artificial intelligence', 'cloud solutions', 'cybersecurity']
    });
  }, [language]);
  
  const services = [
    {
      icon: Code2,
      title: t('webDevelopment'),
      description: t('webDevelopmentDesc'),
      features: [
        language === 'ar' ? 'تطبيقات ويب متجاوبة' : 'Responsive Web Applications',
        language === 'ar' ? 'تطبيقات جوال أصلية' : 'Native Mobile Applications',
        language === 'ar' ? 'تطبيقات ويب تقدمية' : 'Progressive Web Apps',
        language === 'ar' ? 'واجهات برمجة التطبيقات' : 'API Development'
      ],
      technologies: ['React', 'Node.js', 'Flutter', 'React Native'],
      price: language === 'ar' ? 'حسب المشروع' : 'Project Based',
      duration: language === 'ar' ? '4-12 أسبوع' : '4-12 Weeks',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Bot,
      title: t('aiSolutions'),
      description: t('aiSolutionsDesc'),
      features: [
        language === 'ar' ? 'تعلم الآلة المتقدم' : 'Advanced Machine Learning',
        language === 'ar' ? 'معالجة اللغات الطبيعية' : 'Natural Language Processing',
        language === 'ar' ? 'رؤية الحاسوب' : 'Computer Vision',
        language === 'ar' ? 'التحليل التنبؤي' : 'Predictive Analytics'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
      price: language === 'ar' ? 'حسب التعقيد' : 'Complexity Based',
      duration: language === 'ar' ? '6-16 أسبوع' : '6-16 Weeks',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Cloud,
      title: t('cloudSolutions'),
      description: t('cloudSolutionsDesc'),
      features: [
        language === 'ar' ? 'نشر سحابي آمن' : 'Secure Cloud Deployment',
        language === 'ar' ? 'أتمتة البنية التحتية' : 'Infrastructure Automation',
        language === 'ar' ? 'مراقبة متقدمة' : 'Advanced Monitoring',
        language === 'ar' ? 'النسخ الاحتياطي التلقائي' : 'Automated Backup'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      price: language === 'ar' ? 'اشتراك شهري' : 'Monthly Subscription',
      duration: language === 'ar' ? '2-6 أسابيع' : '2-6 Weeks',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Shield,
      title: t('cyberSecurity'),
      description: t('cyberSecurityDesc'),
      features: [
        language === 'ar' ? 'تدقيق الأمان' : 'Security Auditing',
        language === 'ar' ? 'اختبار الاختراق' : 'Penetration Testing',
        language === 'ar' ? 'مراقبة الأمان' : 'Security Monitoring',
        language === 'ar' ? 'الامتثال للمعايير' : 'Compliance Standards'
      ],
      technologies: ['Security Tools', 'Firewalls', 'SIEM', 'Compliance'],
      price: language === 'ar' ? 'حسب النطاق' : 'Scope Based',
      duration: language === 'ar' ? '3-8 أسابيع' : '3-8 Weeks',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10'
    },
    {
      icon: BarChart3,
      title: t('dataAnalytics'),
      description: t('dataAnalyticsDesc'),
      features: [
        language === 'ar' ? 'لوحات تحكم تفاعلية' : 'Interactive Dashboards',
        language === 'ar' ? 'تقارير آلية' : 'Automated Reports',
        language === 'ar' ? 'تحليل البيانات الضخمة' : 'Big Data Analysis',
        language === 'ar' ? 'ذكاء الأعمال' : 'Business Intelligence'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'SQL'],
      price: language === 'ar' ? 'حسب حجم البيانات' : 'Data Volume Based',
      duration: language === 'ar' ? '4-10 أسابيع' : '4-10 Weeks',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Database,
      title: t('systemIntegration'),
      description: t('systemIntegrationDesc'),
      features: [
        language === 'ar' ? 'ربط الأنظمة المختلفة' : 'Different Systems Integration',
        language === 'ar' ? 'مزامنة البيانات' : 'Data Synchronization',
        language === 'ar' ? 'واجهات برمجية موحدة' : 'Unified APIs',
        language === 'ar' ? 'أتمتة سير العمل' : 'Workflow Automation'
      ],
      technologies: ['REST APIs', 'GraphQL', 'Message Queues', 'ETL'],
      price: language === 'ar' ? 'حسب التعقيد' : 'Complexity Based',
      duration: language === 'ar' ? '6-12 أسبوع' : '6-12 Weeks',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: language === 'ar' ? 'التحليل والتخطيط' : 'Analysis & Planning',
      description: language === 'ar' ? 'نحلل متطلباتك ونضع خطة شاملة للمشروع' : 'We analyze your requirements and create a comprehensive project plan'
    },
    {
      step: '02',
      title: language === 'ar' ? 'التصميم والتطوير' : 'Design & Development',
      description: language === 'ar' ? 'نصمم ونطور الحل التقني باستخدام أحدث التقنيات' : 'We design and develop the technical solution using latest technologies'
    },
    {
      step: '03',
      title: language === 'ar' ? 'الاختبار والمراجعة' : 'Testing & Review',
      description: language === 'ar' ? 'نختبر الحل بدقة ونراجعه معك قبل النشر' : 'We thoroughly test the solution and review it with you before deployment'
    },
    {
      step: '04',
      title: language === 'ar' ? 'النشر والدعم' : 'Deployment & Support',
      description: language === 'ar' ? 'ننشر الحل ونقدم دعم مستمر لضمان الأداء الأمثل' : 'We deploy the solution and provide ongoing support for optimal performance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Zap className={`w-4 h-4 text-white ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm text-white font-medium">{t('services')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('servicesTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('servicesDescription')}
            </p>

            <ContactModal 
              trigger={
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
                  <Users className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                </Button>
              }
              title={t('contact')}
              description={t('contactDescription')}
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-gradient-card border-border/50"
                >
                  <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">{t('keyFeatures')}</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`text-sm text-muted-foreground flex items-center ${isRTL ? 'mr-2' : 'ml-2'}`}>
                          <CheckCircle className={`w-4 h-4 text-secondary ${isRTL ? 'mr-2' : 'ml-2'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">{t('technologiesUsed')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pricing & Duration */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 mb-6">
                    <div className="text-sm text-muted-foreground">
                      <div className="font-semibold">{language === 'ar' ? 'السعر' : 'Price'}</div>
                      <div>{service.price}</div>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <div className="font-semibold flex items-center">
                        <Clock className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                        {language === 'ar' ? 'المدة' : 'Duration'}
                      </div>
                      <div>{service.duration}</div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <ContactModal 
                    trigger={
                      <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                        {language === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}
                        {isRTL ? <ArrowLeft className="w-4 h-4 mr-2" /> : <ArrowRight className="w-4 h-4 ml-2" />}
                      </Button>
                    }
                    title={service.title}
                    description={language === 'ar' ? 'احصل على عرض سعر مخصص لهذه الخدمة' : 'Get a custom quote for this service'}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'كيف نعمل' : 'How We Work'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'منهجية عمل مدروسة تضمن تحقيق أفضل النتائج في الوقت المحدد'
                : 'A studied work methodology that ensures achieving the best results on time'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card hover:shadow-card transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <Card className="container mx-auto px-4 py-16 bg-gradient-hero/10 border-primary/20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            {language === 'ar' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'ar' 
              ? 'تواصل معنا اليوم واحصل على استشارة مجانية لمناقشة احتياجاتك التقنية'
              : 'Contact us today and get a free consultation to discuss your technical needs'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal 
              trigger={
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  {language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                  {isRTL ? <ArrowLeft className="w-5 h-5 mr-2" /> : <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              }
              title={language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
              description={language === 'ar' ? 'احصل على استشارة مجانية من خبرائنا' : 'Get a free consultation from our experts'}
            />
            <Button variant="outline" size="lg">
              {language === 'ar' ? 'تحميل نبذة الخدمات' : 'Download Services Brochure'}
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Services;