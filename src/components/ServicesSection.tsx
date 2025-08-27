import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  Bot,
  Workflow,
  BarChart3,
  ArrowLeft
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'تطوير التطبيقات',
      description: 'تطوير تطبيقات ويب وموبايل متطورة باستخدام أحدث التقنيات والأدوات البرمجية',
      features: ['React & Node.js', 'Flutter & React Native', 'Progressive Web Apps'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Database,
      title: 'إدارة قواعد البيانات',
      description: 'تصميم وإدارة قواعد البيانات المعقدة مع ضمان الأداء والأمان العالي',
      features: ['PostgreSQL & MongoDB', 'Data Analytics', 'Real-time Sync'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Cloud,
      title: 'الحلول السحابية',
      description: 'نشر وإدارة التطبيقات على الخدمات السحابية مع ضمان التوفر العالي',
      features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipeline'],
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Shield,
      title: 'الأمن السيبراني',
      description: 'حماية البيانات والأنظمة من التهديدات السيبرانية وضمان الامتثال',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      color: 'text-destructive',
      bgColor: 'bg-destructive/10'
    },
    {
      icon: Smartphone,
      title: 'تطبيقات الجوال',
      description: 'تطوير تطبيقات جوال أصلية ومختلطة لنظامي iOS و Android',
      features: ['Native Development', 'Cross-platform', 'App Store Optimization'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Bot,
      title: 'الذكاء الاصطناعي',
      description: 'تطوير حلول الذكاء الاصطناعي وتعلم الآلة لأتمتة العمليات',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Workflow,
      title: 'أتمتة العمليات',
      description: 'أتمتة سير العمل وتحسين الكفاءة التشغيلية باستخدام أحدث التقنيات',
      features: ['Process Automation', 'Workflow Management', 'Integration'],
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: BarChart3,
      title: 'تحليل البيانات',
      description: 'تحليل البيانات الضخمة واستخراج الرؤى الذكية لاتخاذ قرارات مدروسة',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium">خدماتنا التقنية</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              حلول تقنية شاملة
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة واسعة من الخدمات التقنية المتطورة التي تلبي احتياجاتك وتحقق أهدافك الرقمية
          </p>
        </div>

        {/* الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card transition-all duration-300 group cursor-pointer bg-gradient-card border-border/50"
              >
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ml-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* زر الإجراء */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            استكشف جميع خدماتنا
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;