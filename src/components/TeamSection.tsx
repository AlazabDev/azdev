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
  Lightbulb
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
      description: language === 'ar' ? 'خبير في قيادة الفرق التقنية وإدارة المشاريع المعقدة مع خلفية قوية في الهندسة المعمارية' : 'Expert in leading technical teams and managing complex projects with strong architectural background'
    },
    {
      name: language === 'ar' ? 'سارة أحمد محمود' : 'Sara Ahmed Mahmoud',
      role: language === 'ar' ? 'مطورة تطبيقات كبيرة' : 'Senior Application Developer',
      specialties: ['React', 'Node.js', 'Mobile Apps'],
      experience: language === 'ar' ? '8+ سنوات' : '8+ Years',
      description: language === 'ar' ? 'متخصصة في تطوير تطبيقات الويب والجوال باستخدام أحدث التقنيات والأدوات البرمجية' : 'Specialized in web and mobile app development using latest technologies and programming tools'
    },
    {
      name: language === 'ar' ? 'محمد علي حسن' : 'Mohamed Ali Hassan',
      role: language === 'ar' ? 'مهندس أمن سيبراني' : 'Cybersecurity Engineer',
      specialties: ['Security', 'Penetration Testing', 'Compliance'],
      experience: language === 'ar' ? '10+ سنوات' : '10+ Years',
      description: language === 'ar' ? 'خبير في الأمن السيبراني وحماية البيانات مع شهادات عالمية في مجال الأمان الرقمي' : 'Expert in cybersecurity and data protection with international certifications in digital security'
    },
    {
      name: language === 'ar' ? 'فاطمة خالد عبدالله' : 'Fatima Khaled Abdullah',
      role: language === 'ar' ? 'متخصصة تحليل البيانات' : 'Data Analytics Specialist',
      specialties: ['Data Science', 'AI/ML', 'Business Intelligence'],
      experience: language === 'ar' ? '6+ سنوات' : '6+ Years',
      description: language === 'ar' ? 'خبيرة في تحليل البيانات الضخمة والذكاء الاصطناعي مع خلفية أكاديمية قوية' : 'Expert in big data analytics and artificial intelligence with strong academic background'
    }
  ];

  const teamStats = [
    {
      icon: Users,
      title: t('teamMembers'),
      value: '25+',
      description: language === 'ar' ? 'مطور ومتخصص' : 'Developers & Specialists'
    },
    {
      icon: Award,
      title: t('yearsExperience'),
      value: '15+',
      description: language === 'ar' ? 'في التكنولوجيا' : 'In Technology'
    },
    {
      icon: Target,
      title: language === 'ar' ? 'معدل النجاح' : 'Success Rate',
      value: '98%',
      description: language === 'ar' ? 'في تسليم المشاريع' : 'Project Delivery'
    },
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'براءات اختراع' : 'Patents',
      value: '12',
      description: language === 'ar' ? 'حل تقني مبتكر' : 'Innovative Solutions'
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Users className={`w-4 h-4 text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-sm text-secondary font-medium">{t('team')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              {t('teamTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('teamDescription')}
          </p>
        </div>

        {/* إحصائيات الفريق */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-gradient-card hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.title}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </Card>
            );
          })}
        </div>

        {/* أعضاء الفريق المميزين */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card hover:shadow-elegant transition-all duration-300 group">
              {/* صورة العضو - سأضع placeholder مؤقت */}
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Users className="w-12 h-12 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-2">{member.role}</p>
              <div className="flex justify-center items-center mb-3">
                <Badge variant="secondary" className="text-xs">
                  {member.experience}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {member.description}
              </p>
              
              {/* التخصصات */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.specialties.slice(0, 2).map((specialty, specialtyIndex) => (
                  <Badge key={specialtyIndex} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {member.specialties.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{member.specialties.length - 2}
                  </Badge>
                )}
              </div>
              
              {/* روابط التواصل */}
              <div className={`flex justify-center space-x-2 ${isRTL ? 'space-x-reverse' : ''} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* رسالة الفريق */}
        <Card className="p-8 bg-gradient-hero/10 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نؤمن بأن التكنولوجيا هي المحرك الأساسي للتطوير والنمو. فريقنا يعمل بشغف لتحويل الأفكار المبتكرة إلى حلول عملية تساهم في بناء مستقبل رقمي أفضل لشركة العزب وعملائها.' 
              : 'We believe that technology is the main driver of development and growth. Our team works passionately to transform innovative ideas into practical solutions that contribute to building a better digital future for Alazab Company and its clients.'
            }
          </p>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;