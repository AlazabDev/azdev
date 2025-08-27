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
  Cloud
} from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'نظام إدارة المشاريع الإنشائية',
      category: 'تطبيق ويب',
      description: 'نظام شامل لإدارة مشاريع الإنشاءات مع تتبع الموارد والجداول الزمنية وإدارة الفرق',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      status: 'مكتمل',
      duration: '8 أشهر',
      icon: Building2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      features: [
        'تتبع المشاريع في الوقت الفعلي',
        'إدارة الموارد والمواد',
        'تقارير تفصيلية ومرئية',
        'واجهات API متقدمة'
      ]
    },
    {
      title: 'تطبيق الصيانة الذكية',
      category: 'تطبيق جوال',
      description: 'تطبيق جوال لإدارة طلبات الصيانة وتتبع الأعطال مع نظام إشعارات متقدم',
      technologies: ['Flutter', 'Firebase', 'ML Kit'],
      status: 'قيد التطوير',
      duration: '6 أشهر',
      icon: Smartphone,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      features: [
        'تقنيات الذكاء الاصطناعي',
        'نظام إشعارات فوري',
        'تحليل الأعطال التنبؤي',
        'واجهة سهلة الاستخدام'
      ]
    },
    {
      title: 'منصة البيانات التحليلية',
      category: 'نظام تحليل',
      description: 'منصة متقدمة لتحليل بيانات المشاريع واستخراج الرؤى الذكية لاتخاذ القرارات',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Docker'],
      status: 'مكتمل',
      duration: '10 أشهر',
      icon: Database,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      features: [
        'تحليل البيانات الضخمة',
        'لوحات تحكم تفاعلية',
        'تعلم الآلة المتقدم',
        'تقارير آلية'
      ]
    },
    {
      title: 'البنية التحتية السحابية',
      category: 'حلول سحابية',
      description: 'نشر وإدارة البنية التحتية السحابية مع ضمان التوفر العالي والأمان',
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
      status: 'مكتمل',
      duration: '4 أشهر',
      icon: Cloud,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      features: [
        'نشر آلي متقدم',
        'مراقبة النظام 24/7',
        'نسخ احتياطية تلقائية',
        'أمان متعدد الطبقات'
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'مكتمل') {
      return <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">مكتمل</Badge>;
    }
    return <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">قيد التطوير</Badge>;
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Building2 className="w-4 h-4 text-accent ml-2" />
            <span className="text-sm text-accent font-medium">مشاريعنا المميزة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              إنجازات تقنية رائدة
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعة مختارة من المشاريع التقنية المتطورة التي طورناها لتحسين كفاءة العمل وتطوير العمليات
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
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
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
                    <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                    الميزات الرئيسية
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full ml-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* التقنيات */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">التقنيات المستخدمة</h4>
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
                    <Calendar className="w-4 h-4 ml-2" />
                    مدة المشروع: {project.duration}
                  </div>
                  
                  <div className="flex space-x-2 rtl:space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <div className="text-sm text-muted-foreground">مشروع مكتمل</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card">
            <div className="text-3xl font-bold text-secondary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">تقنية مختلفة</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">معدل النجاح</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">ساعة تطوير</div>
          </Card>
        </div>

        {/* زر عرض جميع المشاريع */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="hover:bg-primary/5 transition-all duration-300">
            استكشف جميع مشاريعنا
            <ExternalLink className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;