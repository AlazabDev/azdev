import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageToggleProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'lg';
  showText?: boolean;
}

const LanguageToggle = ({ 
  variant = 'outline', 
  size = 'sm', 
  showText = true 
}: LanguageToggleProps) => {
  const { language, setLanguage, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={toggleLanguage}
      className="min-w-[80px]"
    >
      <Globe className={`w-4 h-4 ${showText ? (isRTL ? 'ml-2' : 'mr-2') : ''}`} />
      {showText && (language === 'ar' ? 'EN' : 'عربي')}
    </Button>
  );
};

export default LanguageToggle;