import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Building
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'tech@alazab.com',
      description: 'راسلنا في أي وقت',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+966 11 234 5678',
      description: 'متاح 24/7 للاستفسارات',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      description: 'مقرنا الرئيسي',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: 'الأحد - الخميس: 8 صباحاً - 6 مساءً',
      description: 'بتوقيت المملكة العربية السعودية',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary ml-2" />
            <span className="text-sm text-primary font-medium">تواصل معنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              ابدأ رحلتك التقنية
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            هل لديك مشروع تقني في ذهنك؟ تواصل مع فريقنا المتخصص لمناقشة أفكارك وتحويلها إلى واقع رقمي متطور
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* معلومات الاتصال */}
          <div className="lg:col-span-1">
            <Card className="p-8 bg-gradient-card h-full">
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-primary ml-3" />
                <h3 className="text-2xl font-bold">معلومات التواصل</h3>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* نبذة عن الشركة */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="font-semibold mb-3">شركة العزب</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نحن فريق تكنولوجيا المعلومات في شركة العزب، متخصصون في تقديم الحلول التقنية 
                  المبتكرة للمشاريع الإنشائية والمعمارية باستخدام أحدث التقنيات العالمية.
                </p>
              </div>
            </Card>
          </div>

          {/* نموذج التواصل */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Send className="w-6 h-6 text-primary ml-3" />
                أرسل لنا رسالة
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الكامل *</label>
                    <Input 
                      placeholder="أدخل اسمك الكامل"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">البريد الإلكتروني *</label>
                    <Input 
                      type="email"
                      placeholder="example@company.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                    <Input 
                      placeholder="+966 50 123 4567"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">اسم الشركة</label>
                    <Input 
                      placeholder="اسم شركتك أو مؤسستك"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">نوع المشروع</label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                    <option value="">اختر نوع المشروع</option>
                    <option value="web">تطوير تطبيق ويب</option>
                    <option value="mobile">تطوير تطبيق جوال</option>
                    <option value="system">تطوير نظام إدارة</option>
                    <option value="ai">حلول الذكاء الاصطناعي</option>
                    <option value="data">تحليل البيانات</option>
                    <option value="security">الأمن السيبراني</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">وصف المشروع *</label>
                  <Textarea 
                    placeholder="اشرح لنا تفاصيل مشروعك والنتائج المرغوبة..."
                    className="min-h-[120px] w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">الميزانية المتوقعة</label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                    <option value="">اختر النطاق المناسب</option>
                    <option value="small">أقل من 50,000 ريال</option>
                    <option value="medium">50,000 - 150,000 ريال</option>
                    <option value="large">150,000 - 500,000 ريال</option>
                    <option value="enterprise">أكثر من 500,000 ريال</option>
                  </select>
                </div>

                <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Send className="w-5 h-5 ml-2" />
                  إرسال الرسالة
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  سنقوم بالرد على رسالتك خلال 24 ساعة كحد أقصى
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* دعوة للعمل */}
        <Card className="mt-12 p-8 bg-gradient-hero/10 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">مستعد لبدء مشروعك التقني؟</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            فريقنا جاهز لمساعدتك في تحقيق رؤيتك التكنولوجية. 
            دعنا نناقش احتياجاتك ونقدم لك الحل الأمثل.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              احجز استشارة مجانية
            </Button>
            <Button variant="outline" size="lg">
              تحميل نبذة الشركة
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;