import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  Target,
  Layers,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateSEO } from '@/lib/seo';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '@/components/ContactModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

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
    window.scrollTo(0, 0);
  }, [language]);

  const stats = [
    { value: '50+', label: { ar: 'مشروع مكتمل', en: 'Projects Completed' } },
    { value: '25+', label: { ar: 'تقنية مختلفة', en: 'Technologies Used' } },
    { value: '98%', label: { ar: 'معدل النجاح', en: 'Success Rate' } },
    { value: '500+', label: { ar: 'ساعة تطوير', en: 'Dev Hours' } },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white relative overflow-hidden">
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
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{language === 'ar' ? stat.label.ar : stat.label.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' ? 'هل لديك فكرة مشروع؟' : 'Have a Project Idea?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'ar' 
                ? 'تواصل معنا اليوم لمناقشة كيف يمكننا تحويل فكرتك إلى واقع'
                : 'Contact us today to discuss how we can turn your idea into reality'}
            </p>
            <ContactModal 
              trigger={
                <Button size="lg" className="group">
                  {t('startProject')}
                  {isRTL ? (
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              }
              title={t('startProject')}
              description={language === 'ar' ? 'احصل على استشارة مجانية لمشروعك' : 'Get a free consultation for your project'}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
