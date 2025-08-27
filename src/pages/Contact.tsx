import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Building2,
  Users,
  Zap,
  Send,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateSEO } from '@/lib/seo';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateSEO({
      title: language === 'ar' ? 'تواصل معنا | العزب تك' : 'Contact Us | Alazab Tech',
      description: language === 'ar' 
        ? 'تواصل مع فريق العزب التقني - احصل على استشارة مجانية، اطلب عرض سعر، أو ابدأ مشروعك التقني الجديد'
        : 'Contact Alazab Tech team - get free consultation, request quote, or start your new technical project',
      keywords: language === 'ar' 
        ? 'تواصل معنا, استشارة تقنية, عرض سعر, دعم فني, خدمة العملاء'
        : 'contact us, technical consultation, quote request, technical support, customer service'
    });
  }, [language]);

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'ar' ? 'عنواننا' : 'Our Address',
      details: [
        language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
        language === 'ar' ? 'حي الملز، شارع الأمير محمد بن سلمان' : 'Al Malaz District, Prince Mohammed bin Salman Street'
      ]
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'هاتفنا' : 'Our Phone',
      details: [
        '+966 11 234 5678',
        '+966 50 123 4567'
      ]
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'بريدنا الإلكتروني' : 'Our Email',
      details: [
        'info@alazab-tech.com',
        'support@alazab-tech.com'
      ]
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'ساعات العمل' : 'Working Hours',
      details: [
        language === 'ar' ? 'الأحد - الخميس: 8:00 ص - 6:00 م' : 'Sunday - Thursday: 8:00 AM - 6:00 PM',
        language === 'ar' ? 'الجمعة: 2:00 م - 6:00 م' : 'Friday: 2:00 PM - 6:00 PM'
      ]
    }
  ];

  const services = [
    { value: 'web-development', label: language === 'ar' ? 'تطوير التطبيقات' : 'Application Development' },
    { value: 'ai-solutions', label: language === 'ar' ? 'الذكاء الاصطناعي' : 'AI Solutions' },
    { value: 'cloud-solutions', label: language === 'ar' ? 'الحلول السحابية' : 'Cloud Solutions' },
    { value: 'cybersecurity', label: language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity' },
    { value: 'data-analytics', label: language === 'ar' ? 'تحليل البيانات' : 'Data Analytics' },
    { value: 'system-integration', label: language === 'ar' ? 'تكامل الأنظمة' : 'System Integration' },
    { value: 'maintenance-system', label: language === 'ar' ? 'نظام الصيانة' : 'Maintenance System' },
    { value: 'other', label: language === 'ar' ? 'أخرى' : 'Other' }
  ];

  const budgetRanges = [
    { value: 'under-50k', label: language === 'ar' ? 'أقل من 50,000 ريال' : 'Under 50,000 SAR' },
    { value: '50k-100k', label: language === 'ar' ? '50,000 - 100,000 ريال' : '50,000 - 100,000 SAR' },
    { value: '100k-250k', label: language === 'ar' ? '100,000 - 250,000 ريال' : '100,000 - 250,000 SAR' },
    { value: '250k-500k', label: language === 'ar' ? '250,000 - 500,000 ريال' : '250,000 - 500,000 SAR' },
    { value: 'over-500k', label: language === 'ar' ? 'أكثر من 500,000 ريال' : 'Over 500,000 SAR' },
    { value: 'not-sure', label: language === 'ar' ? 'لست متأكد' : 'Not Sure' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: t('messageSent'),
      description: t('messageResponse'),
    });

    setIsLoading(false);
  };

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
              <MessageSquare className={`w-4 h-4 text-white ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm text-white font-medium">{t('contact')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('contactTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('contactDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-tech bg-clip-text text-transparent">
                    {t('contactInfo')}
                  </span>
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="p-6 bg-gradient-card hover:shadow-card transition-all duration-300">
                        <div className="flex items-start space-x-4 rtl:space-x-reverse">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-2">{info.title}</h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 space-y-4">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Phone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language === 'ar' ? 'اتصل بنا الآن' : 'Call Us Now'}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language === 'ar' ? 'محادثة واتساب' : 'WhatsApp Chat'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gradient-card">
                <h2 className="text-3xl font-bold mb-8">
                  {t('sendMessage')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('fullName')} *
                      </label>
                      <Input 
                        placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('email')} *
                      </label>
                      <Input 
                        type="email" 
                        placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('phone')} *
                      </label>
                      <Input 
                        type="tel" 
                        placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('company')}
                      </label>
                      <Input 
                        placeholder={language === 'ar' ? 'اسم الشركة (اختياري)' : 'Company name (optional)'}
                      />
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('projectType')} *
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'ar' ? 'اختر نوع الخدمة' : 'Select service type'} />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('budget')}
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'ar' ? 'اختر النطاق السعري' : 'Select budget range'} />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('projectDescription')} *
                    </label>
                    <Textarea 
                      rows={6}
                      placeholder={language === 'ar' 
                        ? 'وصف مفصل لمشروعك أو الخدمة المطلوبة...'
                        : 'Detailed description of your project or required service...'
                      }
                      required 
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                      </div>
                    ) : (
                      <>
                        <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {t('sendButton')}
                        {isRTL ? <ArrowLeft className="w-5 h-5 mr-2" /> : <ArrowRight className="w-5 h-5 ml-2" />}
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نحن نتميز بالخبرة والجودة والالتزام بتقديم أفضل الحلول التقنية'
                : 'We excel in experience, quality, and commitment to providing the best technical solutions'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'استجابة سريعة' : 'Quick Response'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar' 
                  ? 'نرد على استفساراتك خلال 24 ساعة كحد أقصى'
                  : 'We respond to your inquiries within 24 hours maximum'
                }
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'فريق خبراء' : 'Expert Team'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar' 
                  ? 'فريق من المختصين ذوي الخبرة العالية في أحدث التقنيات'
                  : 'Team of specialists with high experience in latest technologies'
                }
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'حلول مخصصة' : 'Custom Solutions'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar' 
                  ? 'نصمم حلول تقنية مخصصة تناسب احتياجاتك تماماً'
                  : 'We design custom technical solutions that perfectly match your needs'
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="bg-gradient-subtle p-8 text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'موقعنا' : 'Our Location'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'ar' 
                  ? 'نحن في قلب الرياض، نخدم عملاءنا في جميع أنحاء المملكة'
                  : 'We are in the heart of Riyadh, serving our clients throughout the Kingdom'
                }
              </p>
              <Button variant="outline">
                <MapPin className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'عرض على الخريطة' : 'View on Map'}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;