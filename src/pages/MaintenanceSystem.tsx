import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Building2, 
  Smartphone, 
  Clock,
  CheckCircle,
  Users,
  MapPin,
  Star,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Bell,
  Camera,
  MessageSquare
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateSEO } from '@/lib/seo';
import { useEffect } from 'react';
import ContactModal from '@/components/ContactModal';

const MaintenanceSystem = () => {
  const { t, language, isRTL } = useLanguage();

  useEffect(() => {
    updateSEO({
      title: language === 'ar' ? 'نظام العزب للصيانات المعمارية | العزب تك' : 'Alazab Architectural Maintenance System | Alazab Tech',
      description: language === 'ar' 
        ? 'نظام متطور لإدارة صيانة المحلات التجارية - طلب صيانة، تتبع الطلبات، إدارة الفنيين، تقارير مفصلة'
        : 'Advanced system for managing commercial store maintenance - maintenance requests, order tracking, technician management, detailed reports',
      keywords: language === 'ar' 
        ? ['نظام الصيانة', 'صيانة المحلات', 'الصيانة المعمارية', 'نظام طلب الصيانة', 'إدارة الصيانة']
        : ['maintenance system', 'store maintenance', 'architectural maintenance', 'maintenance request system', 'maintenance management']
    });
  }, [language]);

  const features = [
    {
      icon: Smartphone,
      title: language === 'ar' ? 'تطبيق جوال سهل الاستخدام' : 'User-Friendly Mobile App',
      description: language === 'ar' ? 'تطبيق مصمم خصيصاً للمحلات التجارية لطلب الصيانة بسهولة وسرعة' : 'App designed specifically for commercial stores to request maintenance easily and quickly'
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'طلب صيانة فوري' : 'Instant Maintenance Request',
      description: language === 'ar' ? 'أرسل طلب الصيانة في ثوانٍ معدودة مع تفاصيل المشكلة والموقع' : 'Send maintenance request in seconds with problem details and location'
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'تحديد الموقع التلقائي' : 'Automatic Location Detection',
      description: language === 'ar' ? 'تحديد موقع المحل تلقائياً لتسريع عملية إرسال الفني المناسب' : 'Automatically detect store location to speed up sending the appropriate technician'
    },
    {
      icon: Camera,
      title: language === 'ar' ? 'إرفاق الصور والفيديو' : 'Attach Photos & Videos',
      description: language === 'ar' ? 'أرفق صور وفيديوهات للمشكلة لمساعدة الفني في فهم المشكلة بسرعة' : 'Attach photos and videos of the problem to help technician understand the issue quickly'
    },
    {
      icon: Bell,
      title: language === 'ar' ? 'إشعارات فورية' : 'Instant Notifications',
      description: language === 'ar' ? 'تلق إشعارات فورية عن حالة طلب الصيانة ووقت وصول الفني' : 'Receive instant notifications about maintenance request status and technician arrival time'
    },
    {
      icon: MessageSquare,
      title: language === 'ar' ? 'محادثة مباشرة' : 'Direct Chat',
      description: language === 'ar' ? 'تواصل مباشرة مع الفني أو فريق الدعم عبر المحادثة المدمجة' : 'Communicate directly with technician or support team via integrated chat'
    },
    {
      icon: Star,
      title: language === 'ar' ? 'تقييم الخدمة' : 'Service Rating',
      description: language === 'ar' ? 'قيم جودة الخدمة واتركي تعليقك لتحسين مستوى الخدمة باستمرار' : 'Rate service quality and leave comments to continuously improve service level'
    },
    {
      icon: BarChart3,
      title: language === 'ar' ? 'تقارير مفصلة' : 'Detailed Reports',
      description: language === 'ar' ? 'احصل على تقارير مفصلة عن تاريخ الصيانة وتكاليفها' : 'Get detailed reports on maintenance history and costs'
    }
  ];

  const serviceTypes = [
    {
      name: language === 'ar' ? 'الكهرباء' : 'Electrical',
      icon: '⚡',
      description: language === 'ar' ? 'إصلاح الأعطال الكهربائية والإضاءة' : 'Electrical fault repair and lighting'
    },
    {
      name: language === 'ar' ? 'السباكة' : 'Plumbing',
      icon: '🔧',
      description: language === 'ar' ? 'صيانة أنظمة المياه والصرف الصحي' : 'Water and sewage systems maintenance'
    },
    {
      name: language === 'ar' ? 'التكييف' : 'Air Conditioning',
      icon: '❄️',
      description: language === 'ar' ? 'صيانة وإصلاح أنظمة التكييف والتهوية' : 'AC and ventilation systems maintenance and repair'
    },
    {
      name: language === 'ar' ? 'الطلاء والدهانات' : 'Painting',
      icon: '🎨',
      description: language === 'ar' ? 'أعمال الطلاء والدهانات الداخلية والخارجية' : 'Interior and exterior painting work'
    },
    {
      name: language === 'ar' ? 'الأرضيات' : 'Flooring',
      icon: '🏗️',
      description: language === 'ar' ? 'صيانة وإصلاح جميع أنواع الأرضيات' : 'Maintenance and repair of all types of flooring'
    },
    {
      name: language === 'ar' ? 'النجارة' : 'Carpentry',
      icon: '🔨',
      description: language === 'ar' ? 'أعمال النجارة وإصلاح الأبواب والنوافذ' : 'Carpentry work and door/window repair'
    }
  ];

  const stats = [
    {
      value: '1000+',
      label: language === 'ar' ? 'محل تجاري' : 'Commercial Stores',
      description: language === 'ar' ? 'يستخدم النظام' : 'Using the System'
    },
    {
      value: '5000+',
      label: language === 'ar' ? 'طلب صيانة' : 'Maintenance Requests',
      description: language === 'ar' ? 'تم إنجازه بنجاح' : 'Successfully Completed'
    },
    {
      value: '98%',
      label: language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction',
      description: language === 'ar' ? 'معدل الرضا' : 'Satisfaction Rate'
    },
    {
      value: '24/7',
      label: language === 'ar' ? 'دعم فني' : 'Technical Support',
      description: language === 'ar' ? 'على مدار الساعة' : 'Around the Clock'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: language === 'ar' ? 'حمل التطبيق' : 'Download App',
      description: language === 'ar' ? 'حمل تطبيق العزب للصيانة من متجر التطبيقات' : 'Download Alazab Maintenance app from app store'
    },
    {
      step: '2',
      title: language === 'ar' ? 'سجل محلك' : 'Register Your Store',
      description: language === 'ar' ? 'سجل بيانات محلك التجاري واختر نوع الخدمات المطلوبة' : 'Register your commercial store data and choose required service types'
    },
    {
      step: '3',
      title: language === 'ar' ? 'اطلب الصيانة' : 'Request Maintenance',
      description: language === 'ar' ? 'أرسل طلب الصيانة مع وصف المشكلة والصور' : 'Send maintenance request with problem description and photos'
    },
    {
      step: '4',
      title: language === 'ar' ? 'تتبع الطلب' : 'Track Request',
      description: language === 'ar' ? 'تتبع حالة طلبك وتواصل مع الفني المختص' : 'Track your request status and communicate with assigned technician'
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
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Wrench className={`w-4 h-4 text-white ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm text-white font-medium">
                {language === 'ar' ? 'نظام العزب للصيانات' : 'Alazab Maintenance System'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {language === 'ar' ? 'صيانة محلك التجاري' : 'Your Commercial Store Maintenance'}
              <br />
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {language === 'ar' ? 'بنقرة واحدة!' : 'With One Click!'}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'نظام متطور يربط المحلات التجارية بفريق الصيانة المعمارية المتخصص لتقديم خدمات صيانة سريعة وموثوقة'
                : 'Advanced system connecting commercial stores with specialized architectural maintenance team to provide fast and reliable maintenance services'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
                <Smartphone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'حمل التطبيق الآن' : 'Download App Now'}
              </Button>
              
              <ContactModal 
                trigger={
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                    <MessageSquare className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language === 'ar' ? 'عرض توضيحي' : 'Request Demo'}
                  </Button>
                }
                title={language === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo'}
                description={language === 'ar' ? 'احصل على عرض توضيحي مخصص للنظام' : 'Get a customized demo of the system'}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80 font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-white/60">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'مميزات النظام المتطورة' : 'Advanced System Features'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نظام شامل ومتطور يوفر جميع الأدوات اللازمة لإدارة صيانة محلك التجاري بكفاءة عالية'
                : 'Comprehensive and advanced system providing all necessary tools to efficiently manage your commercial store maintenance'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 text-center bg-gradient-card hover:shadow-elegant transition-all duration-300 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'أنواع الخدمات المتاحة' : 'Available Service Types'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نغطي جميع أنواع الصيانة المعمارية التي قد يحتاجها محلك التجاري'
                : 'We cover all types of architectural maintenance your commercial store might need'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-card transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'كيف يعمل النظام' : 'How The System Works'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'خطوات بسيطة للحصول على خدمة صيانة سريعة وموثوقة'
                : 'Simple steps to get fast and reliable maintenance service'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card hover:shadow-card transition-all duration-300 relative">
                {index < howItWorks.length - 1 && (
                  <div className={`hidden lg:block absolute top-1/2 ${isRTL ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-8 h-0.5 bg-gradient-to-r from-primary to-transparent`}></div>
                )}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-tech bg-clip-text text-transparent">
                  {language === 'ar' ? 'لماذا تختار نظام العزب؟' : 'Why Choose Alazab System?'}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {language === 'ar' 
                  ? 'نظام متكامل يوفر عليك الوقت والمال ويضمن لك أفضل خدمة صيانة'
                  : 'Integrated system that saves you time and money while ensuring the best maintenance service'
                }
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">
                      {language === 'ar' ? 'توفير في الوقت والتكلفة' : 'Time and Cost Savings'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ar' 
                        ? 'قلل من وقت انتظار الصيانة وتكاليفها من خلال النظام الذكي'
                        : 'Reduce maintenance waiting time and costs through smart system'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">
                      {language === 'ar' ? 'ضمان الجودة' : 'Quality Guarantee'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ar' 
                        ? 'جميع الفنيين معتمدين ومدربين على أعلى المستويات'
                        : 'All technicians are certified and trained to the highest standards'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">
                      {language === 'ar' ? 'استجابة سريعة' : 'Quick Response'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ar' 
                        ? 'متوسط وقت الاستجابة أقل من ساعتين للطوارئ'
                        : 'Average response time less than 2 hours for emergencies'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-card">
                <div className="text-center mb-6">
                  <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' 
                      ? 'انضم إلى آلاف المحلات التي تثق في نظام العزب'
                      : 'Join thousands of stores that trust Alazab system'
                    }
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Smartphone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language === 'ar' ? 'حمل التطبيق' : 'Download App'}
                  </Button>
                  
                  <ContactModal 
                    trigger={
                      <Button variant="outline" className="w-full">
                        <MessageSquare className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                      </Button>
                    }
                    title={language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                    description={language === 'ar' ? 'تواصل معنا للمزيد من المعلومات' : 'Contact us for more information'}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <Card className="container mx-auto px-4 py-16 bg-gradient-hero/10 border-primary/20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            {language === 'ar' ? 'جاهز لتجربة نظام العزب؟' : 'Ready to Try Alazab System?'}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'ar' 
              ? 'انضم إلى عائلة العزب واحصل على أفضل خدمة صيانة لمحلك التجاري'
              : 'Join Alazab family and get the best maintenance service for your commercial store'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Smartphone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {language === 'ar' ? 'حمل التطبيق الآن' : 'Download App Now'}
              {isRTL ? <ArrowLeft className="w-5 h-5 mr-2" /> : <ArrowRight className="w-5 h-5 ml-2" />}
            </Button>
            <ContactModal 
              trigger={
                <Button variant="outline" size="lg">
                  {language === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo'}
                </Button>
              }
              title={language === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo'}
              description={language === 'ar' ? 'احصل على عرض توضيحي مخصص' : 'Get a customized demo'}
            />
          </div>
        </Card>
      </section>
    </div>
  );
};

export default MaintenanceSystem;