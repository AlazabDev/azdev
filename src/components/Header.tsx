import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ContactModal from './ContactModal';
import LanguageToggle from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, ChevronDown, Sparkles, FileText, Briefcase, Download, Users, Mail, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();
  const { t, language, isRTL } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDashboardClick = () => {
    toast({
      title: t('dashboard') + " " + (language === 'ar' ? 'قريباً!' : 'Coming Soon!'),
      description: language === 'ar' ? 'نعمل على تطوير لوحة تحكم متقدمة لعملائنا' : 'We are working on developing an advanced dashboard for our clients',
    });
  };

  // Section links for homepage
  const sectionLinks = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('team'), href: '#team' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];

  // Page links for dropdown
  const pageLinks = [
    { name: t('home'), href: '/', icon: Home },
    { name: t('about'), href: '/about', icon: Users },
    { name: t('services'), href: '/services', icon: Briefcase },
    { name: t('allProjects'), href: '/projects', icon: FileText },
    { name: t('contact'), href: '/contact', icon: Mail },
    { name: t('installApp'), href: '/install', icon: Download },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 glass border-b border-border/50' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className={`flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse" />
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <div className="font-bold text-lg text-foreground tracking-tight">
                alazab<span className="text-primary">.dev</span>
              </div>
              <div className="text-xs text-muted-foreground">{t('companySubtitle')}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Show section links only on homepage */}
            {isHomePage && sectionLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
            
            {/* Pages Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="nav-link flex items-center gap-1">
                  {t('pages')}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align={isRTL ? 'start' : 'end'} 
                className="w-48 bg-card border border-border shadow-lg z-50"
              >
                {pageLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link 
                        to={item.href} 
                        className={`flex items-center gap-2 w-full cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Actions */}
          <div className={`hidden lg:flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <ThemeToggle />
            <LanguageToggle />
            
            <ContactModal 
              trigger={
                <Button 
                  size="sm" 
                  className="bg-gradient-primary text-white hover:opacity-90 shadow-glow transition-all duration-300 hover:shadow-glow-lg"
                >
                  <Sparkles className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('startProject')}
                </Button>
              }
              title={t('startProject')}
              description={language === 'ar' ? 'احجز استشارة مجانية لمناقشة مشروعك' : 'Book a free consultation to discuss your project'}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative"
              aria-label={isMenuOpen ? (language === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (language === 'ar' ? 'فتح القائمة' : 'Open menu')}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span 
                  className={`absolute h-0.5 w-5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`} 
                />
                <span 
                  className={`absolute h-0.5 w-5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} 
                />
                <span 
                  className={`absolute h-0.5 w-5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 border border-border/50">
            {/* Section Links (only on homepage) */}
            {isHomePage && (
              <nav className="flex flex-col gap-2 mb-4 pb-4 border-b border-border/50">
                {sectionLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors text-foreground font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            )}
            
            {/* Page Links */}
            <nav className="flex flex-col gap-2">
              {pageLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors text-foreground font-medium flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/50">
              <LanguageToggle variant="outline" size="sm" />
              
              <ContactModal 
                trigger={
                  <Button 
                    className="w-full bg-gradient-primary text-white hover:opacity-90"
                  >
                    <Sparkles className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('startProject')}
                  </Button>
                }
                title={t('startProject')}
                description={language === 'ar' ? 'احجز استشارة مجانية لمناقشة مشروعك' : 'Book a free consultation to discuss your project'}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
