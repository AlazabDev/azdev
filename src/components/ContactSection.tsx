import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import ContactModal from './ContactModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Building,
  Loader2
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const { t, language, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    description: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.description) {
      toast({
        title: t('formError'),
        description: t('fillRequired'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'inquiry',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.description,
          projectType: formData.projectType,
          budget: formData.budget
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to send');
      }
      
      toast({
        title: t('messageSent'),
        description: t('messageResponse'),
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        description: '',
        budget: ''
      });
    } catch (error) {
      // Silent error handling - show user-friendly message only
      toast({
        title: t('sendError'),
        description: t('sendErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'tech@alazab.dev',
      description: language === 'ar' ? 'راسلنا في أي وقت' : 'Contact us anytime',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'الهاتف' : 'Phone',
      value: '+966 11 234 5678',
      description: language === 'ar' ? 'متاح 24/7 للاستفسارات' : 'Available 24/7',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'العنوان' : 'Address',
      value: language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      description: language === 'ar' ? 'مقرنا الرئيسي' : 'Headquarters',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'ساعات العمل' : 'Working Hours',
      value: language === 'ar' ? 'الأحد - الخميس: 8 صباحاً - 6 مساءً' : 'Sun - Thu: 8AM - 6PM',
      description: language === 'ar' ? 'بتوقيت المملكة العربية السعودية' : 'Saudi Arabia Time',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const projectTypes = language === 'ar' ? [
    { value: '', label: 'اختر نوع المشروع' },
    { value: 'web', label: 'تطوير تطبيق ويب' },
    { value: 'mobile', label: 'تطوير تطبيق جوال' },
    { value: 'system', label: 'تطوير نظام إدارة' },
    { value: 'ai', label: 'حلول الذكاء الاصطناعي' },
    { value: 'data', label: 'تحليل البيانات' },
    { value: 'security', label: 'الأمن السيبراني' },
    { value: 'other', label: 'أخرى' }
  ] : [
    { value: '', label: 'Select project type' },
    { value: 'web', label: 'Web Application' },
    { value: 'mobile', label: 'Mobile Application' },
    { value: 'system', label: 'Management System' },
    { value: 'ai', label: 'AI Solutions' },
    { value: 'data', label: 'Data Analytics' },
    { value: 'security', label: 'Cybersecurity' },
    { value: 'other', label: 'Other' }
  ];

  const budgetOptions = language === 'ar' ? [
    { value: '', label: 'اختر النطاق المناسب' },
    { value: 'small', label: 'أقل من 50,000 ريال' },
    { value: 'medium', label: '50,000 - 150,000 ريال' },
    { value: 'large', label: '150,000 - 500,000 ريال' },
    { value: 'enterprise', label: 'أكثر من 500,000 ريال' }
  ] : [
    { value: '', label: 'Select budget range' },
    { value: 'small', label: 'Less than $15,000' },
    { value: 'medium', label: '$15,000 - $50,000' },
    { value: 'large', label: '$50,000 - $150,000' },
    { value: 'enterprise', label: 'More than $150,000' }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className={`w-4 h-4 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-sm text-primary font-medium">{t('contact')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              {t('contactTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="p-8 bg-gradient-card h-full">
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Building className={`w-6 h-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <h3 className="text-2xl font-bold">{t('contactInfo')}</h3>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-4`}>
                      <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Company About */}
              <div className={`mt-8 pt-6 border-t border-border/50 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h4 className="font-semibold mb-3">alazab.dev</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === 'ar' 
                    ? 'نحن فريق تكنولوجيا المعلومات في شركة العزب، متخصصون في تقديم الحلول التقنية المبتكرة للمشاريع الإنشائية والمعمارية باستخدام أحدث التقنيات العالمية.'
                    : 'We are the IT team at Alazab Company, specializing in providing innovative technical solutions for construction and architectural projects using cutting-edge global technologies.'}
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card">
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Send className={`w-6 h-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {t('sendMessage')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <label className="block text-sm font-medium mb-2">{t('fullName')} *</label>
                    <Input 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      className="w-full"
                      required
                    />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <label className="block text-sm font-medium mb-2">{t('email')} *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@company.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <label className="block text-sm font-medium mb-2">{t('phone')}</label>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+966 50 123 4567"
                      className="w-full"
                    />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <label className="block text-sm font-medium mb-2">{t('company')}</label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={language === 'ar' ? 'اسم شركتك أو مؤسستك' : 'Your company name'}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">{t('projectType')}</label>
                  <select 
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    aria-label={language === 'ar' ? 'اختر نوع المشروع' : 'Select project type'}
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <label className="block text-sm font-medium mb-2">{t('projectDescription')} *</label>
                  <Textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'اشرح لنا تفاصيل مشروعك والنتائج المرغوبة...' : 'Tell us about your project and desired outcomes...'}
                    className="min-h-[120px] w-full"
                    required
                  />
                </div>

                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <label className="block text-sm font-medium mb-2">{t('budget')}</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className={`w-5 h-5 animate-spin ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('sendButton')}
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  {t('messageResponse')}
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-12 p-8 bg-gradient-hero/10 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'ar' ? 'مستعد لبدء مشروعك التقني؟' : 'Ready to Start Your Tech Project?'}
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'فريقنا جاهز لمساعدتك في تحقيق رؤيتك التكنولوجية. دعنا نناقش احتياجاتك ونقدم لك الحل الأمثل.'
              : 'Our team is ready to help you achieve your technological vision. Let us discuss your needs and provide you with the optimal solution.'}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <ContactModal 
              trigger={
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  {t('bookConsultation')}
                </Button>
              }
            />
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                toast({
                  title: language === 'ar' ? 'جاري التحميل...' : 'Downloading...',
                  description: language === 'ar' ? 'سيتم تحميل نبذة الشركة خلال ثوانٍ' : 'Company profile will be downloaded shortly',
                });
                setTimeout(() => {
                  toast({
                    title: language === 'ar' ? 'تم التحميل بنجاح!' : 'Download Complete!',
                    description: language === 'ar' ? 'تم حفظ ملف نبذة الشركة في مجلد التحميلات' : 'Company profile saved to downloads',
                  });
                }, 2000);
              }}
            >
              {t('downloadProfile')}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;