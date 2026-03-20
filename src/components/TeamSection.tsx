import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Award,
  Users,
  Target,
  Lightbulb,
  Sparkles,
  Crown
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamSection = () => {
  const { t, language, isRTL } = useLanguage();

  const teamMembers = [
    {
      name: language === 'ar' ? 'محمد عزب' : 'Mohamed Azab',
      role: language === 'ar' ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO',
      specialties: language === 'ar' ? ['القيادة الاستراتيجية', 'ريادة الأعمال', 'التحول الرقمي'] : ['Strategic Leadership', 'Entrepreneurship', 'Digital Transformation'],
      experience: language === 'ar' ? '15+ سنة' : '15+ Years',
      description: language === 'ar' ? 'رائد أعمال وخبير في التحول الرقمي وقيادة الفرق التقنية' : 'Entrepreneur and expert in digital transformation and technical team leadership',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      image: '/team001.png',
      isFounder: true
    },
    {
      name: language === 'ar' ? 'أحمد محمود' : 'Ahmed Mahmoud',
      role: language === 'ar' ? 'كبير مهندسين IT' : 'Chief IT Engineer',
      specialties: ['Infrastructure', 'Cloud', 'DevOps'],
      experience: language === 'ar' ? '10+ سنوات' : '10+ Years',
      description: language === 'ar' ? 'خبير في البنية التحتية والحوسبة السحابية وأتمتة العمليات' : 'Expert in infrastructure, cloud computing and automation',
      gradient: 'from-cyan-500 to-blue-500',
      image: '/team010.jpg',
      isFounder: false
    },
    {
      name: language === 'ar' ? 'محمد علي حسن' : 'Mohamed Ali Hassan',
      role: language === 'ar' ? 'مهندس أمن سيبراني' : 'Cybersecurity Engineer',
      specialties: ['Security', 'Penetration Testing', 'Compliance'],
      experience: language === 'ar' ? '10+ سنوات' : '10+ Years',
      description: language === 'ar' ? 'خبير في الأمن السيبراني وحماية البيانات' : 'Expert in cybersecurity and data protection',
      gradient: 'from-orange-500 to-red-500',
      image: '/team011.jpg',
      isFounder: false
    },
    {
      name: language === 'ar' ? 'فاطمة خالد عبدالله' : 'Fatima Khaled Abdullah',
      role: language === 'ar' ? 'متخصصة تحليل البيانات' : 'Data Analytics Specialist',
      specialties: ['Data Science', 'AI/ML', 'BI'],
      experience: language === 'ar' ? '6+ سنوات' : '6+ Years',
      description: language === 'ar' ? 'خبيرة في تحليل البيانات والذكاء الاصطناعي' : 'Expert in data analytics and AI',
      gradient: 'from-green-500 to-emerald-500',
      image: '/team012.jpg',
      isFounder: false
    }
  ];

  const teamStats = [
    { icon: Users, value: '25+', title: t('teamMembers'), description: language === 'ar' ? 'مطور ومتخصص' : 'Developers' },
    { icon: Award, value: '15+', title: t('yearsExperience'), description: language === 'ar' ? 'في التكنولوجيا' : 'In Tech' },
    { icon: Target, value: '98%', title: language === 'ar' ? 'معدل النجاح' : 'Success Rate', description: language === 'ar' ? 'تسليم المشاريع' : 'Project Delivery' },
    { icon: Lightbulb, value: '12', title: language === 'ar' ? 'براءات اختراع' : 'Patents', description: language === 'ar' ? 'حلول مبتكرة' : 'Innovations' }
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-6 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">
            <Users className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-foreground">{t('team')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient animate-gradient bg-[length:200%_auto]">{t('teamTitle')}</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            {t('teamDescription')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {teamStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="stats-card text-center animate-fade-in group hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1 group-hover:animate-pulse">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-0.5">{stat.title}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className={`feature-card text-center group animate-fade-in hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer ${member.isFounder ? 'ring-2 ring-primary/50 shadow-glow' : ''}`}
              style={{ animationDelay: `${(index + 7) * 100}ms` }}
            >
              {/* Founder Badge */}
              {member.isFounder && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold shadow-lg animate-pulse">
                    <Crown className="w-3 h-3" />
                    <span>{language === 'ar' ? 'المؤسس' : 'Founder'}</span>
                  </div>
                </div>
              )}
              
              {/* Avatar */}
              <div className="relative mx-auto mb-5 mt-2">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.gradient} p-0.5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow`}>
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse" />
              </div>
              
              <h3 className="text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-2 group-hover:text-secondary transition-colors duration-300">{member.role}</p>
              
              <Badge variant="secondary" className="mb-3 text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {member.experience}
              </Badge>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground transition-colors duration-300">
                {member.description}
              </p>
              
              {/* Specialties */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                {member.specialties.slice(0, 3).map((specialty, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              {/* Social Links */}
              <div className={`flex justify-center gap-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200" aria-label={`GitHub - ${member.name}`}>
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200" aria-label={`LinkedIn - ${member.name}`}>
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200" aria-label={`${language === 'ar' ? 'بريد' : 'Email'} - ${member.name}`}>
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Vision Card */}
        <Card className="p-8 glass border-primary/20 text-center animate-fade-in hover:shadow-glow transition-all duration-500 group">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">{language === 'ar' ? 'رؤيتنا' : 'Our Vision'}</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed group-hover:text-foreground transition-colors duration-300">
            {language === 'ar' 
              ? 'نؤمن بأن التكنولوجيا هي المحرك الأساسي للتطوير والنمو. فريقنا يعمل بشغف لتحويل الأفكار المبتكرة إلى حلول عملية تساهم في بناء مستقبل رقمي أفضل.' 
              : 'We believe that technology is the main driver of development and growth. Our team works passionately to transform innovative ideas into practical solutions for a better digital future.'
            }
          </p>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;
