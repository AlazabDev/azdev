import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ExternalLink,
  Heart
} from 'lucide-react';

const Footer = () => {
  const services = [
    'تطوير التطبيقات',
    'إدارة قواعد البيانات',
    'الحلول السحابية',
    'الأمن السيبراني',
    'الذكاء الاصطناعي',
    'تحليل البيانات'
  ];

  const quickLinks = [
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'فريقنا', href: '#team' },
    { name: 'تواصل معنا', href: '#contact' },
    { name: 'المدونة التقنية', href: '#blog' }
  ];

  const resources = [
    { name: 'الوثائق التقنية', href: '#docs' },
    { name: 'دليل المطورين', href: '#dev-guide' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'الدعم التقني', href: '#support' },
    { name: 'التدريب', href: '#training' },
    { name: 'الشراكات', href: '#partnerships' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* القسم الرئيسي */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg">العزب تك</div>
                <div className="text-sm text-muted-foreground">فريق تكنولوجيا المعلومات</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              نطور الحلول التقنية المبتكرة لشركة العزب والمشاريع الإنشائية والمعمارية، 
              باستخدام أحدث التقنيات لضمان أفضل النتائج.
            </p>
            
            {/* معلومات الاتصال السريعة */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 ml-2" />
                tech@alazab.com
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 ml-2" />
                +966 11 234 5678
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 ml-2" />
                الرياض، المملكة العربية السعودية
              </div>
            </div>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="font-bold text-lg mb-4">خدماتنا التقنية</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* الموارد والدعم */}
          <div>
            <h3 className="font-bold text-lg mb-4">الموارد والدعم</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    {resource.name}
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            {/* وسائل التواصل الاجتماعي */}
            <div>
              <h4 className="font-semibold mb-3">تابعنا</h4>
              <div className="flex space-x-3 rtl:space-x-reverse">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* النشرة الإخبارية */}
        <div className="py-8">
          <div className="bg-gradient-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                اشترك في نشرتنا التقنية
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              احصل على آخر المستجدات التقنية والنصائح البرمجية والإعلان عن مشاريعنا الجديدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-sm"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Mail className="w-4 h-4 ml-2" />
                اشتراك
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* حقوق الطبع والنشر */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center mb-4 sm:mb-0">
            <span>© 2024 شركة العزب - فريق تكنولوجيا المعلومات. جميع الحقوق محفوظة.</span>
          </div>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-primary transition-colors">ملفات تعريف الارتباط</a>
          </div>
        </div>

        {/* رسالة المطورين */}
        <div className="py-4 text-center text-xs text-muted-foreground border-t border-border/50">
          <div className="flex items-center justify-center">
            <span>تم تطوير هذا الموقع بـ</span>
            <Heart className="w-3 h-3 text-red-500 mx-1" />
            <span>من قبل فريق العزب التقني</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;