import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  Calendar,
  TrendingUp,
  Globe
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateSEO } from '@/lib/seo';
import { useEffect } from 'react';

const About = () => {
  const { t, language, isRTL } = useLanguage();

  useEffect(() => {
    updateSEO({
      title: language === 'ar' ? 'عن شركة العزب | فريق تكنولوجيا المعلومات' : 'About Alazab | IT Team',
      description: language === 'ar' 
        ? 'تعرف على شركة العزب وفريق تكنولوجيا المعلومات، رؤيتنا، مهمتنا، وقيمنا في تقديم حلول تقنية مبتكرة للمشاريع الإنشائية والمعمارية'
        : 'Learn about Alazab Company and IT Team, our vision, mission, and values in providing innovative technical solutions for construction and architectural projects',
      keywords: language === 'ar' 
        ? 'عن العزب, شركة العزب, فريق التكنولوجيا, رؤية الشركة, مهمة الشركة'
        : 'about alazab, alazab company, technology team, company vision, company mission'
    });
  }, [language]);

  const stats = [
    {
      icon: Calendar,
      title: language === 'ar' ? 'تأسست في' : 'Founded in',
      value: '2010',
      description: language === 'ar' ? 'سنة التأسيس' : 'Year Established'
    },
    {
      icon: Building2,
      title: language === 'ar' ? 'المشاريع المنجزة' : 'Completed Projects',
      value: '500+',
      description: language === 'ar' ? 'مشروع ناجح' : 'Successful Projects'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'فريق العمل' : 'Team Members',
      value: '50+',
      description: language === 'ar' ? 'خبير ومختص' : 'Experts & Specialists'
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'المدن المخدومة' : 'Cities Served',
      value: '25+',
      description: language === 'ar' ? 'مدينة في المملكة' : 'Cities in KSA'
    }
  ];

  const values = [
    {
      icon: Target,
      title: language === 'ar' ? 'الرؤية' : 'Vision',
      description: language === 'ar' 
        ? 'أن نكون الشركة الرائدة في تقديم الحلول التقنية المتطورة للمشاريع الإنشائية والمعمارية في المملكة العربية السعودية'
        : 'To be the leading company in providing advanced technical solutions for construction and architectural projects in Saudi Arabia'
    },
    {
      icon: Award,
      title: language === 'ar' ? 'المهمة' : 'Mission',
      description: language === 'ar' 
        ? 'نسعى لتطوير حلول تقنية مبتكرة تساهم في تحسين كفاءة العمليات الإنشائية وتحقيق التحول الرقمي في هذا القطاع'
        : 'We strive to develop innovative technical solutions that contribute to improving construction operational efficiency and achieving digital transformation in this sector'
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'القيم' : 'Values',
      description: language === 'ar' 
        ? 'الجودة، الابتكار، المسؤولية، الشفافية، والتطوير المستمر هي القيم الأساسية التي نعمل بها'
        : 'Quality, Innovation, Responsibility, Transparency, and Continuous Development are the core values we work with'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: language === 'ar' ? 'تأسيس الشركة' : 'Company Foundation',
      description: language === 'ar' ? 'بداية الرحلة في قطاع الإنشاءات' : 'Beginning of the journey in construction sector'
    },
    {
      year: '2015',
      title: language === 'ar' ? 'إطلاق قسم التكنولوجيا' : 'Technology Department Launch',
      description: language === 'ar' ? 'تأسيس فريق متخصص في تكنولوجيا المعلومات' : 'Establishing specialized IT team'
    },
    {
      year: '2018',
      title: language === 'ar' ? 'التوسع الرقمي' : 'Digital Expansion',
      description: language === 'ar' ? 'تطوير أول منصة رقمية لإدارة المشاريع' : 'Developing first digital project management platform'
    },
    {
      year: '2020',
      title: language === 'ar' ? 'الذكاء الاصطناعي' : 'Artificial Intelligence',
      description: language === 'ar' ? 'دمج تقنيات الذكاء الاصطناعي في العمليات' : 'Integrating AI technologies in operations'
    },
    {
      year: '2024',
      title: language === 'ar' ? 'القيادة والريادة' : 'Leadership & Innovation',
      description: language === 'ar' ? 'أصبحنا من أكبر الشركات في المملكة' : 'Became one of the largest companies in KSA'
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
              <Building2 className={`w-4 h-4 text-white ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm text-white font-medium">
                {language === 'ar' ? 'عن شركة العزب' : 'About Alazab Company'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {language === 'ar' ? 'قصة نجاح مميزة' : 'A Distinguished Success Story'}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'أكثر من 14 عامًا من الخبرة في تقديم الحلول التقنية المبتكرة للمشاريع الإنشائية والمعمارية'
                : 'More than 14 years of experience in providing innovative technical solutions for construction and architectural projects'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center bg-gradient-card hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'رؤيتنا ومهمتنا' : 'Our Vision & Mission'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نؤمن بقوة التكنولوجيا في تطوير قطاع الإنشاءات وتحقيق أهداف رؤية المملكة 2030'
                : 'We believe in the power of technology to develop the construction sector and achieve Saudi Vision 2030 goals'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center bg-gradient-card hover:shadow-elegant transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'رحلة النجاح' : 'Success Journey'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'محطات مهمة في مسيرة شركة العزب نحو الريادة في التكنولوجيا'
                : 'Important milestones in Alazab Company journey towards technology leadership'
              }
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary" className="px-3 py-1 text-sm font-bold">
                      {milestone.year}
                    </Badge>
                  </div>
                  <Card className="flex-1 p-6 bg-gradient-card">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <CheckCircle className={`w-5 h-5 text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <Card className="container mx-auto px-4 py-16 bg-gradient-hero/10 border-primary/20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            {language === 'ar' ? 'انضم إلى رحلة النجاح' : 'Join Our Success Journey'}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'ar' 
              ? 'هل تريد أن تكون جزءًا من قصة نجاحنا؟ تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك التقنية'
              : 'Do you want to be part of our success story? Contact us today and discover how we can help you achieve your technical goals'
            }
          </p>
        </Card>
      </section>
    </div>
  );
};

export default About;