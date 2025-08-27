import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Zap, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'فريقنا', href: '#team' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* الشعار */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-right rtl:text-left">
                <div className="font-bold text-lg text-foreground">العزب تك</div>
                <div className="text-sm text-muted-foreground">فريق تكنولوجيا المعلومات</div>
              </div>
            </div>
          </div>

          {/* القائمة - سطح المكتب */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
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
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Button variant="outline" size="sm">
              <Shield className="w-4 h-4 ml-2" />
              لوحة التحكم
            </Button>
            <Button size="sm" className="bg-gradient-tech hover:opacity-90">
              <Zap className="w-4 h-4 ml-2" />
              ابدأ مشروعك
            </Button>
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
                <Button variant="outline" size="sm">
                  <Shield className="w-4 h-4 ml-2" />
                  لوحة التحكم
                </Button>
                <Button size="sm" className="bg-gradient-tech hover:opacity-90">
                  <Zap className="w-4 h-4 ml-2" />
                  ابدأ مشروعك
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;