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

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'أحمد محمد العزب',
      role: 'مدير الفريق التقني',
      specialties: ['إدارة المشاريع', 'الهندسة المعمارية', 'القيادة التقنية'],
      experience: '12+ سنة',
      description: 'خبير في قيادة الفرق التقنية وإدارة المشاريع المعقدة مع خلفية قوية في الهندسة المعمارية'
    },
    {
      name: 'سارة أحمد محمود',
      role: 'مطورة تطبيقات كبيرة',
      specialties: ['React', 'Node.js', 'Mobile Apps'],
      experience: '8+ سنوات',
      description: 'متخصصة في تطوير تطبيقات الويب والجوال باستخدام أحدث التقنيات والأدوات البرمجية'
    },
    {
      name: 'محمد علي حسن',
      role: 'مهندس أمن سيبراني',
      specialties: ['Security', 'Penetration Testing', 'Compliance'],
      experience: '10+ سنوات',
      description: 'خبير في الأمن السيبراني وحماية البيانات مع شهادات عالمية في مجال الأمان الرقمي'
    },
    {
      name: 'فاطمة خالد عبدالله',
      role: 'متخصصة تحليل البيانات',
      specialties: ['Data Science', 'AI/ML', 'Business Intelligence'],
      experience: '6+ سنوات',
      description: 'خبيرة في تحليل البيانات الضخمة والذكاء الاصطناعي مع خلفية أكاديمية قوية'
    }
  ];

  const teamStats = [
    {
      icon: Users,
      title: 'أعضاء الفريق',
      value: '25+',
      description: 'مطور ومتخصص'
    },
    {
      icon: Award,
      title: 'سنوات الخبرة',
      value: '15+',
      description: 'في التكنولوجيا'
    },
    {
      icon: Target,
      title: 'معدل النجاح',
      value: '98%',
      description: 'في تسليم المشاريع'
    },
    {
      icon: Lightbulb,
      title: 'براءات اختراع',
      value: '12',
      description: 'حل تقني مبتكر'
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Users className="w-4 h-4 text-secondary ml-2" />
            <span className="text-sm text-secondary font-medium">فريقنا المتميز</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              عقول مبدعة تصنع الفارق
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            فريق من المتخصصين المحترفين والخبراء في مختلف المجالات التقنية، 
            يعملون بشغف لتحقيق رؤيتك التكنولوجية
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
              <div className="flex justify-center space-x-2 rtl:space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            نؤمن بأن التكنولوجيا هي المحرك الأساسي للتطوير والنمو. فريقنا يعمل بشغف لتحويل الأفكار 
            المبتكرة إلى حلول عملية تساهم في بناء مستقبل رقمي أفضل لشركة العزب وعملائها.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;