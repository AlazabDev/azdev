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
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { t, language, isRTL } = useLanguage();

  const projects = [
    {
      title: language === 'ar' ? 'نظام إدارة المشاريع الإنشائية' : 'Construction Project Management System',
      category: language === 'ar' ? 'تطبيق ويب' : 'Web Application',
      description: language === 'ar' ? 'نظام شامل لإدارة مشاريع الإنشاءات مع تتبع الموارد والجداول الزمنية وإدارة الفرق' : 'Comprehensive system for managing construction projects with resource tracking, schedules, and team management',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      status: t('completed'),
      duration: `8 ${t('months')}`,
      icon: Building2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      features: language === 'ar' ? [
        'تتبع المشاريع في الوقت الفعلي',
        'إدارة الموارد والمواد',
        'تقارير تفصيلية ومرئية',
        'واجهات API متقدمة'
      ] : [
        'Real-time project tracking',
        'Resource and material management',
        'Detailed visual reports',
        'Advanced API interfaces'
      ]
    },
    {
      title: language === 'ar' ? 'تطبيق الصيانة الذكية' : 'Smart Maintenance App',
      category: language === 'ar' ? 'تطبيق جوال' : 'Mobile Application',
      description: language === 'ar' ? 'تطبيق جوال لإدارة طلبات الصيانة وتتبع الأعطال مع نظام إشعارات متقدم' : 'Mobile app for managing maintenance requests and tracking issues with advanced notification system',
      technologies: ['Flutter', 'Firebase', 'ML Kit'],
      status: t('inProgress'),
      duration: `6 ${t('months')}`,
      icon: Smartphone,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      features: language === 'ar' ? [
        'تقنيات الذكاء الاصطناعي',
        'نظام إشعارات فوري',
        'تحليل الأعطال التنبؤي',
        'واجهة سهلة الاستخدام'
      ] : [
        'AI technologies',
        'Instant notification system',
        'Predictive failure analysis',
        'User-friendly interface'
      ]
    },
    {
      title: language === 'ar' ? 'منصة البيانات التحليلية' : 'Analytics Data Platform',
      category: language === 'ar' ? 'نظام تحليل' : 'Analytics System',
      description: language === 'ar' ? 'منصة متقدمة لتحليل بيانات المشاريع واستخراج الرؤى الذكية لاتخاذ القرارات' : 'Advanced platform for analyzing project data and extracting smart insights for decision making',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Docker'],
      status: t('completed'),
      duration: `10 ${t('months')}`,
      icon: Database,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      features: language === 'ar' ? [
        'تحليل البيانات الضخمة',
        'لوحات تحكم تفاعلية',
        'تعلم الآلة المتقدم',
        'تقارير آلية'
      ] : [
        'Big data analysis',
        'Interactive dashboards',
        'Advanced machine learning',
        'Automated reports'
      ]
    },
    {
      title: language === 'ar' ? 'البنية التحتية السحابية' : 'Cloud Infrastructure',
      category: language === 'ar' ? 'حلول سحابية' : 'Cloud Solutions',
      description: language === 'ar' ? 'نشر وإدارة البنية التحتية السحابية مع ضمان التوفر العالي والأمان' : 'Deploy and manage cloud infrastructure with high availability and security guarantee',
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
      status: t('completed'),
      duration: `4 ${t('months')}`,
      icon: Cloud,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      features: language === 'ar' ? [
        'نشر آلي متقدم',
        'مراقبة النظام 24/7',
        'نسخ احتياطية تلقائية',
        'أمان متعدد الطبقات'
      ] : [
        'Advanced automated deployment',
        '24/7 system monitoring',
        'Automated backups',
        'Multi-layer security'
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    if (status === t('completed')) {
      return <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">{t('completed')}</Badge>;
    }
    return <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">{t('inProgress')}</Badge>;
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Building2 className={`w-4 h-4 text-accent ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-sm text-accent font-medium">{t('featuredProjects')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              {t('projectsTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projectsDescription')}
          </p>
        </div>

        {/* المشاريع */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="p-8 bg-gradient-card hover:shadow-elegant transition-all duration-300 group">
                {/* رأس المشروع */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                  {getStatusBadge(project.status)}
                </div>

                {/* وصف المشروع */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* الميزات */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CheckCircle className={`w-4 h-4 text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('keyFeatures')}
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`text-sm text-muted-foreground flex items-center ${isRTL ? 'mr-2' : 'ml-2'}`}>
                        <div className={`w-1.5 h-1.5 bg-primary rounded-full ${isRTL ? 'mr-2' : 'ml-2'}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* التقنيات */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t('technologiesUsed')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* معلومات المشروع */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('projectDuration')}: {project.duration}
                  </div>
                  
                  <div className={`flex space-x-2 ${isRTL ? 'space-x-reverse' : ''} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* إحصائيات المشاريع */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center bg-gradient-card">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">{t('projectsCompleted')}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card">
            <div className="text-3xl font-bold text-secondary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'تقنية مختلفة' : 'Different Technologies'}
            </div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'معدل النجاح' : 'Success Rate'}
            </div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'ساعة تطوير' : 'Development Hours'}
            </div>
          </Card>
        </div>

        {/* زر عرض جميع المشاريع */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="hover:bg-primary/5 transition-all duration-300">
            {t('exploreAllProjects')}
            {isRTL ? <ArrowLeft className="w-5 h-5 mr-2" /> : <ArrowRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;