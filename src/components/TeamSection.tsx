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
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamSection = () => {
  const { t, language, isRTL } = useLanguage();

  const teamMembers = [
    {
      name: language === 'ar' ? 'أحمد محمد العزب' : 'Ahmed Mohamed Alazab',
      role: language === 'ar' ? 'مدير الفريق التقني' : 'Technical Team Manager',
      specialties: language === 'ar' ? ['إدارة المشاريع', 'الهندسة المعمارية', 'القيادة التقنية'] : ['Project Management', 'Architecture', 'Technical Leadership'],
      experience: language === 'ar' ? '12+ سنة' : '12+ Years',
      description: language === 'ar' ? 'خبير في قيادة الفرق التقنية وإدارة المشاريع المعقدة' : 'Expert in leading technical teams and managing complex projects',
      gradient: 'from-purple-500 to-pink-500',
      image: '/team001.png'
    },
    {
      name: language === 'ar' ? 'سارة أحمد محمود' : 'Sara Ahmed Mahmoud',
      role: language === 'ar' ? 'مطورة تطبيقات كبيرة' : 'Senior Developer',
      specialties: ['React', 'Node.js', 'Mobile Apps'],
      experience: language === 'ar' ? '8+ سنوات' : '8+ Years',
      description: language === 'ar' ? 'متخصصة في تطوير تطبيقات الويب والجوال' : 'Specialized in web and mobile app development',
      gradient: 'from-cyan-500 to-blue-500',
      image: '/team010.jpg'
    },
    {
      name: language === 'ar' ? 'محمد علي حسن' : 'Mohamed Ali Hassan',
      role: language === 'ar' ? 'مهندس أمن سيبراني' : 'Cybersecurity Engineer',
      specialties: ['Security', 'Penetration Testing', 'Compliance'],
      experience: language === 'ar' ? '10+ سنوات' : '10+ Years',
      description: language === 'ar' ? 'خبير في الأمن السيبراني وحماية البيانات' : 'Expert in cybersecurity and data protection',
      gradient: 'from-orange-500 to-red-500',
      image: '/team011.jpg'
    },
    {
      name: language === 'ar' ? 'فاطمة خالد عبدالله' : 'Fatima Khaled Abdullah',
      role: language === 'ar' ? 'متخصصة تحليل البيانات' : 'Data Analytics Specialist',
      specialties: ['Data Science', 'AI/ML', 'BI'],
      experience: language === 'ar' ? '6+ سنوات' : '6+ Years',
      description: language === 'ar' ? 'خبيرة في تحليل البيانات والذكاء الاصطناعي' : 'Expert in data analytics and AI',
      gradient: 'from-green-500 to-emerald-500',
      image: '/team012.jpg'
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-6 animate-fade-in">
            <Users className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">{t('team')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in delay-100">
            <span className="text-gradient">{t('teamTitle')}</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
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
                className="stats-card text-center animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
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
              className="feature-card text-center group animate-fade-in"
              style={{ animationDelay: `${(index + 7) * 100}ms` }}
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-5">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.gradient} p-0.5 transition-transform duration-300 group-hover:scale-105`}>
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
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
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card" />
              </div>
              
              <h3 className="text-lg font-bold mb-1 text-foreground">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
              
              <Badge variant="secondary" className="mb-3 text-xs">
                {member.experience}
              </Badge>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {member.description}
              </p>
              
              {/* Specialties */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                {member.specialties.slice(0, 3).map((specialty, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              {/* Social Links */}
              <div className={`flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Vision Card */}
        <Card className="p-8 glass border-primary/20 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{language === 'ar' ? 'رؤيتنا' : 'Our Vision'}</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
