import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  Calendar,
  CheckCircle,
  Building2,
  Smartphone,
  Database,
  Cloud,
  ArrowLeft,
  ArrowRight,
  Eye,
  Code,
  Layers,
  Target
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateSEO } from '@/lib/seo';
import { useEffect } from 'react';
import ContactModal from '@/components/ContactModal';

const Projects = () => {
  const { t, language, isRTL } = useLanguage();

  useEffect(() => {
    updateSEO({
      title: language === 'ar' ? 'مشاريعنا التقنية | العزب تك' : 'Our Technical Projects | Alazab Tech',
      description: language === 'ar' 
        ? 'استعرض مجموعة من أهم المشاريع التقنية التي قمنا بتطويرها في مجال الإنشاءات والخدمات المعمارية'
        : 'Explore a collection of our most important technical projects developed in construction and architectural services',
      keywords: language === 'ar' 
        ? ['مشاريع تقنية', 'نظام إدارة المشاريع', 'تطبيق الصيانة', 'منصة البيانات', 'البنية السحابية']
        : ['technical projects', 'project management system', 'maintenance app', 'data platform', 'cloud infrastructure']
    });
  }, [language]);

  const projectCategories = [
    {
      name: language === 'ar' ? 'جميع المشاريع' : 'All Projects',
      count: 15,
      active: true
    },
    {
      name: language === 'ar' ? 'تطبيقات الويب' : 'Web Applications',
      count: 6,
      active: false
    },
    {
      name: language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Apps',
      count: 4,
      active: false
    },
    {
      name: language === 'ar' ? 'الذكاء الاصطناعي' : 'AI Solutions',
      count: 3,
      active: false
    },
    {
      name: language === 'ar' ? 'البنية السحابية' : 'Cloud Infrastructure',
      count: 2,
      active: false
    }
  ];

  const featuredProjects = [
    {
      title: language === 'ar' ? 'نظام إدارة المشاريع الإنشائية الشامل' : 'Comprehensive Construction Project Management System',
      category: language === 'ar' ? 'تطبيق ويب متقدم' : 'Advanced Web Application',
      description: language === 'ar' 
        ? 'منصة متكاملة لإدارة جميع جوانب المشاريع الإنشائية من التخطيط إلى التسليم، مع تتبع الموارد والجداول الزمنية وإدارة الفرق والتقارير المتقدمة'
        : 'Integrated platform for managing all aspects of construction projects from planning to delivery, with resource tracking, schedules, team management and advanced reporting',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
      status: t('completed'),
      duration: `12 ${t('months')}`,
      icon: Building2,
      image: '/placeholder-project-1.jpg',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      features: language === 'ar' ? [
        'لوحة تحكم شاملة للمشاريع',
        'تتبع المهام والموارد في الوقت الفعلي',
        'إدارة الفرق والصلاحيات',
        'تقارير مالية وتحليلية متقدمة',
        'تكامل مع أنظمة المحاسبة',
        'تطبيق جوال للمشرفين'
      ] : [
        'Comprehensive project dashboard',
        'Real-time task and resource tracking',
        'Team and permissions management',
        'Advanced financial and analytical reports',
        'Integration with accounting systems',
        'Mobile app for supervisors'
      ],
      results: language === 'ar' ? [
        'زيادة الكفاءة بنسبة 40%',
        'تقليل التأخير بنسبة 60%',
        'توفير 25% من التكاليف',
        'رضا العملاء 95%'
      ] : [
        '40% increase in efficiency',
        '60% reduction in delays',
        '25% cost savings',
        '95% client satisfaction'
      ]
    },
    {
      title: language === 'ar' ? 'تطبيق الصيانة الذكية للمحلات التجارية' : 'Smart Maintenance App for Commercial Stores',
      category: language === 'ar' ? 'تطبيق جوال + ذكاء اصطناعي' : 'Mobile App + AI',
      description: language === 'ar' 
        ? 'تطبيق جوال متطور يربط المحلات التجارية بفرق الصيانة المعمارية، مدعوم بتقنيات الذكاء الاصطناعي للتشخيص المبكر والصيانة التنبؤية'
        : 'Advanced mobile app connecting commercial stores with architectural maintenance teams, powered by AI for early diagnosis and predictive maintenance',
      technologies: ['Flutter', 'Firebase', 'Python', 'TensorFlow', 'Google Cloud'],
      status: t('inProgress'),
      duration: `8 ${t('months')}`,
      icon: Smartphone,
      image: '/placeholder-project-2.jpg',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      features: language === 'ar' ? [
        'طلب صيانة فوري بالموقع والصور',
        'تشخيص الأعطال بالذكاء الاصطناعي',
        'تتبع حالة الطلبات لحظياً',
        'تقييم جودة الخدمة',
        'إشعارات ذكية',
        'تحليل التكاليف'
      ] : [
        'Instant maintenance request with location and photos',
        'AI-powered fault diagnosis',
        'Real-time request tracking',
        'Service quality rating',
        'Smart notifications',
        'Cost analysis'
      ],
      results: language === 'ar' ? [
        'تقليل وقت الاستجابة بنسبة 70%',
        'دقة التشخيص 85%',
        'رضا المستخدمين 92%',
        'زيادة الطلبات بنسبة 150%'
      ] : [
        '70% reduction in response time',
        '85% diagnosis accuracy',
        '92% user satisfaction',
        '150% increase in requests'
      ]
    },
    {
      title: language === 'ar' ? 'منصة البيانات التحليلية والذكاء الاصطناعي' : 'Analytics Data Platform and AI',
      category: language === 'ar' ? 'نظام تحليل البيانات' : 'Data Analytics System',
      description: language === 'ar' 
        ? 'منصة متقدمة لتحليل بيانات المشاريع الإنشائية باستخدام تقنيات التعلم الآلي لاستخراج الرؤى الذكية واتخاذ القرارات المدروسة'
        : 'Advanced platform for analyzing construction project data using machine learning techniques to extract smart insights and make informed decisions',
      technologies: ['Python', 'TensorFlow', 'Apache Spark', 'D3.js', 'PostgreSQL', 'Docker'],
      status: t('completed'),
      duration: `10 ${t('months')}`,
      icon: Database,
      image: '/placeholder-project-3.jpg',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      features: language === 'ar' ? [
        'تحليل البيانات الضخمة',
        'لوحات تحكم تفاعلية',
        'تعلم آلة متقدم',
        'تقارير آلية ذكية',
        'توقعات المشاريع',
        'تحسين الموارد'
      ] : [
        'Big data analysis',
        'Interactive dashboards',
        'Advanced machine learning',
        'Smart automated reports',
        'Project predictions',
        'Resource optimization'
      ],
      results: language === 'ar' ? [
        'تحسين اتخاذ القرارات بنسبة 50%',
        'توقع المشاكل مبكراً بدقة 80%',
        'تحسين استخدام الموارد بنسبة 35%',
        'توفير الوقت في التقارير 60%'
      ] : [
        '50% improvement in decision making',
        '80% accuracy in early problem prediction',
        '35% improvement in resource utilization',
        '60% time savings in reporting'
      ]
    }
  ];

  const otherProjects = [
    {
      title: language === 'ar' ? 'البنية التحتية السحابية المتقدمة' : 'Advanced Cloud Infrastructure',
      category: language === 'ar' ? 'حلول سحابية' : 'Cloud Solutions',
      technologies: ['Kubernetes', 'AWS', 'Terraform'],
      status: t('completed'),
      icon: Cloud
    },
    {
      title: language === 'ar' ? 'نظام إدارة المخازن الذكي' : 'Smart Warehouse Management System',
      category: language === 'ar' ? 'إنترنت الأشياء' : 'IoT System',
      technologies: ['React', 'IoT', 'Python', 'MongoDB'],
      status: t('completed'),
      icon: Database
    },
    {
      title: language === 'ar' ? 'تطبيق إدارة الموارد البشرية' : 'HR Management Application',
      category: language === 'ar' ? 'تطبيق ويب' : 'Web Application',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      status: t('inProgress'),
      icon: Building2
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
              <Layers className={`w-4 h-4 text-white ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm text-white font-medium">{t('featuredProjects')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('projectsTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('projectsDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
                <Eye className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'استعرض المشاريع' : 'Explore Projects'}
              </Button>
              
              <ContactModal 
                trigger={
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                    <Target className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                  </Button>
                }
                title={t('startProject')}
                description={language === 'ar' ? 'احصل على استشارة مجانية لمشروعك' : 'Get a free consultation for your project'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category, index) => (
              <Button 
                key={index} 
                variant={category.active ? "default" : "outline"}
                className={`${category.active ? 'bg-primary text-primary-foreground' : ''} transition-all duration-300`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={index} className="overflow-hidden bg-gradient-card border-border/50">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                    {/* Project Image/Visual */}
                    <div className={`${!isEven ? 'lg:order-2' : ''} bg-gradient-subtle p-8 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className={`w-24 h-24 ${project.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                          <Icon className={`w-12 h-12 ${project.color}`} />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {project.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center p-3 bg-background/50 rounded-lg">
                              <div className="font-bold text-primary">{result}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className={`${!isEven ? 'lg:order-1' : ''} p-8 lg:p-12`}>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className={`${project.bgColor} ${project.color} border-0`}>
                          {project.category}
                        </Badge>
                        <Badge variant={project.status === t('completed') ? 'secondary' : 'outline'}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <CheckCircle className={`w-5 h-5 text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('keyFeatures')}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className={`text-sm text-muted-foreground flex items-center`}>
                              <div className={`w-1.5 h-1.5 bg-primary rounded-full ${isRTL ? 'mr-2' : 'ml-2'} flex-shrink-0`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="font-semibold mb-3">{t('technologiesUsed')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project Info & Actions */}
                      <div className="flex items-center justify-between pt-6 border-t border-border/50">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('projectDuration')}: {project.duration}
                        </div>
                        
                        <div className={`flex space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                          <Button variant="ghost" size="sm">
                            <Github className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'المشاريع الأخرى' : 'Other Projects'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'مجموعة من المشاريع الإضافية التي تُظهر تنوع خبراتنا التقنية'
                : 'Collection of additional projects showcasing the diversity of our technical expertise'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-card hover:shadow-elegant transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant={project.status === t('completed') ? 'secondary' : 'outline'}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className={`flex space-x-2 ${isRTL ? 'space-x-reverse' : ''} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <Button variant="ghost" size="sm">
                      <Code className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-gradient-card">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">{t('projectsCompleted')}</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-card">
              <div className="text-4xl font-bold text-secondary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ar' ? 'تقنية مختلفة' : 'Different Technologies'}
              </div>
            </Card>
            <Card className="p-6 text-center bg-gradient-card">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ar' ? 'معدل النجاح' : 'Success Rate'}
              </div>
            </Card>
            <Card className="p-6 text-center bg-gradient-card">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ar' ? 'ساعة تطوير' : 'Development Hours'}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <Card className="container mx-auto px-4 py-16 bg-gradient-hero/10 border-primary/20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            {language === 'ar' ? 'هل لديك مشروع في ذهنك؟' : 'Have a Project in Mind?'}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'ar' 
              ? 'دعنا نساعدك في تحويل فكرتك إلى واقع رقمي متطور باستخدام أحدث التقنيات'
              : 'Let us help you turn your idea into an advanced digital reality using the latest technologies'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal 
              trigger={
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Target className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('startProject')}
                  {isRTL ? <ArrowLeft className="w-5 h-5 mr-2" /> : <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              }
              title={t('startProject')}
              description={language === 'ar' ? 'احصل على استشارة مجانية لمشروعك' : 'Get a free consultation for your project'}
            />
            <Button variant="outline" size="lg">
              {language === 'ar' ? 'تحميل ملف المشاريع' : 'Download Projects Portfolio'}
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Projects;
