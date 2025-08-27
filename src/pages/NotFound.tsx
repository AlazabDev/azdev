import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ArrowRight, Search, Mail } from 'lucide-react';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'الصفحة غير موجودة - العزب تك';
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate('/');
  };

  const quickLinks = [
    { name: 'خدماتنا التقنية', href: '/#services' },
    { name: 'مشاريعنا', href: '/#projects' },
    { name: 'فريقنا', href: '/#team' },
    { name: 'تواصل معنا', href: '/#contact' }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        {/* الرقم 404 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* رسالة الخطأ */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            الصفحة غير موجودة
          </h2>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها. 
            ربما تم نقلها أو حذفها أو أن الرابط غير صحيح.
          </p>
          
          {/* البحث السريع */}
          <div className="bg-gradient-card rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-5 h-5 text-primary ml-2" />
              <span className="font-semibold">بحث سريع</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            onClick={handleGoHome}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Home className="w-5 h-5 ml-2" />
            العودة للرئيسية
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.history.back()}
          >
            <ArrowRight className="w-5 h-5 ml-2" />
            العودة للخلف
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/#contact'}
          >
            <Mail className="w-5 h-5 ml-2" />
            تواصل معنا
          </Button>
        </div>

        {/* معلومات إضافية */}
        <div className="bg-muted/30 rounded-xl p-6 max-w-lg mx-auto">
          <h3 className="font-semibold mb-3">هل تحتاج مساعدة؟</h3>
          <p className="text-sm text-muted-foreground mb-4">
            إذا كنت تعتقد أن هذا خطأ، يرجى التواصل مع فريق الدعم التقني
          </p>
          <div className="text-sm text-muted-foreground">
            <div className="flex items-center justify-center">
              <Mail className="w-4 h-4 ml-2" />
              tech@alazab.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
