import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ContactModal from './ContactModal';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Code, Zap, Shield, ExternalLink, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const { t, language, setLanguage, isRTL } = useLanguage();

  const handleDashboardClick = () => {
    toast({
      title: t('dashboard') + " " + (language === 'ar' ? 'قريباً!' : 'Coming Soon!'),
      description: language === 'ar' ? 'نعمل على تطوير لوحة تحكم متقدمة لعملائنا' : 'We are working on developing an advanced dashboard for our clients',
    });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navigation = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('team'), href: '#team' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* الشعار */}
          <div className={`flex items-center space-x-4 ${isRTL ? 'rtl:space-x-reverse' : ''}`}>
            <div className={`flex items-center space-x-2 ${isRTL ? 'rtl:space-x-reverse' : ''}`}>
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <div className="font-bold text-lg text-foreground">{t('companyName')}</div>
                <div className="text-sm text-muted-foreground">{t('companySubtitle')}</div>
              </div>
            </div>
          </div>

          {/* القائمة - سطح المكتب */}
          <nav className={`hidden md:flex items-center space-x-8 ${isRTL ? 'rtl:space-x-reverse' : ''}`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* أزرار الإجراءات */}
          <div className={`hidden md:flex items-center space-x-4 ${isRTL ? 'rtl:space-x-reverse' : ''}`}>
            {/* زر تغيير اللغة */}
            <LanguageToggle />
            
            <Button variant="outline" size="sm" onClick={handleDashboardClick}>
              <Shield className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('dashboard')}
            </Button>
            <ContactModal 
              trigger={
                <Button size="sm" className="bg-gradient-tech hover:opacity-90">
                  <Zap className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('startProject')}
                </Button>
              }
              title={t('startProject')}
              description={language === 'ar' ? 'احجز استشارة مجانية لمناقشة مشروعك وتحديد أفضل الحلول' : 'Book a free consultation to discuss your project and determine the best solutions'}
            />
          </div>

          {/* زر القائمة للجوال */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* القائمة المنسدلة للجوال */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {/* زر تغيير اللغة للجوال */}
                <LanguageToggle variant="outline" size="sm" />
                
                <Button variant="outline" size="sm" onClick={handleDashboardClick}>
                  <Shield className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('dashboard')}
                </Button>
                <ContactModal 
                  trigger={
                    <Button size="sm" className="bg-gradient-tech hover:opacity-90 w-full">
                      <Zap className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('startProject')}
                    </Button>
                  }
                  title={t('startProject')}
                  description={language === 'ar' ? 'احجز استشارة مجانية لمناقشة مشروعك وتحديد أفضل الحلول' : 'Book a free consultation to discuss your project and determine the best solutions'}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;