import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ExternalLink,
  Heart,
  Loader2,
  Send,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();
  const { t, language, isRTL } = useLanguage();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' ? 'يرجى إدخال بريدك الإلكتروني' : 'Please enter your email',
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: language === 'ar' ? 'تم الاشتراك بنجاح! 🎉' : 'Subscribed successfully! 🎉',
        description: language === 'ar' ? 'ستصلك آخر المستجدات التقنية' : 'You will receive the latest tech updates',
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: language === 'ar' ? 'فشل في الاشتراك' : 'Subscription failed',
        description: language === 'ar' ? 'حدث خطأ، يرجى المحاولة مرة أخرى' : 'An error occurred, please try again',
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const services = language === 'ar' 
    ? ['تطوير التطبيقات', 'الحلول السحابية', 'الأمن السيبراني', 'الذكاء الاصطناعي', 'تحليل البيانات']
    : ['App Development', 'Cloud Solutions', 'Cybersecurity', 'AI Solutions', 'Data Analytics'];

  const quickLinks = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('projects'), href: '#projects' },
    { name: t('team'), href: '#team' },
    { name: t('contact'), href: '#contact' },
    { name: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy', href: '/privacy-policy', isRoute: true },
    { name: language === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Cookies Policy', href: '/cookies-policy', isRoute: true },
    { name: language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service', href: '/terms-of-service', isRoute: true },
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' }
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-12 -mt-px">
          <div className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors duration-500 group">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-gradient">{t('newsletter')}</span>
              </h3>
              <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">
                {t('newsletterDesc')}
              </p>
              <form onSubmit={handleNewsletterSubmit} className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Input 
                  type="email" 
                  placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  disabled={isSubscribing}
                />
                <Button 
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
                >
                  {isSubscribing ? (
                    <Loader2 className={`w-4 h-4 animate-spin ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  ) : (
                    <Send className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  )}
                  {t('subscribe')}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className={`flex items-center gap-3 mb-4 group ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="font-bold text-lg group-hover:text-primary transition-colors duration-300">alazab<span className="text-primary">.dev</span></div>
                <div className="text-xs text-muted-foreground">{t('companySubtitle')}</div>
              </div>
            </a>
            
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {t('footerDescription')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="mailto:info@alazab.dev" className={`flex items-center gap-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 ${isRTL ? 'flex-row-reverse hover:-translate-x-1' : ''}`}>
                <Mail className="w-4 h-4" />
                info@alazab.dev
              </a>
              <div className={`flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-4 h-4" />
                +966 11 234 5678
              </div>
              <div className={`flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-4 h-4" />
                {language === 'ar' ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{t('services')}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className={`text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group hover:translate-x-1 ${isRTL ? 'flex-row-reverse hover:-translate-x-1' : ''}`}
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className={`text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group hover:translate-x-1 ${isRTL ? 'flex-row-reverse hover:-translate-x-1' : ''}`}
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={`text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group hover:translate-x-1 ${isRTL ? 'flex-row-reverse hover:-translate-x-1' : ''}`}
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">{t('followUs')}</h4>
            <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-xl glass border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
            
            {/* Live Status */}
            <div className="mt-6">
              <div className="live-indicator inline-flex hover:scale-105 transition-transform duration-300 cursor-default">
                <span>{language === 'ar' ? 'متاح الآن' : 'Available Now'}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Bottom */}
        <div className={`py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-1">
            <span>{t('copyright').replace('2024', new Date().getFullYear().toString())}</span>
          </div>
          
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link to="/privacy-policy" className="hover:text-primary hover:underline transition-all duration-300">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <Link to="/cookies-policy" className="hover:text-primary hover:underline transition-all duration-300">
              {language === 'ar' ? 'سياسة الكوكيز' : 'Cookies'}
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary hover:underline transition-all duration-300">
              {language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}
            </Link>
          </div>
        </div>

        {/* Made with love */}
        <div className="py-4 text-center text-xs text-muted-foreground border-t border-border/30">
          <div className={`flex items-center justify-center gap-1 hover:scale-105 transition-transform duration-300 cursor-default ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span>{language === 'ar' ? 'صُنع بـ' : 'Made with'}</span>
            <Heart className="w-3 h-3 text-red-500 animate-pulse hover:scale-125 transition-transform duration-300" />
            <span>{language === 'ar' ? 'بواسطة' : 'by'}</span>
            <span className="font-medium text-foreground hover:text-primary transition-colors duration-300">alazab.dev</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
