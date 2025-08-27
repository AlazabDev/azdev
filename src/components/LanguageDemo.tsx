import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, CheckCircle } from 'lucide-react';

const LanguageDemo = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-card">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Globe className={`w-4 h-4 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm text-primary font-medium">
                {language === 'ar' ? 'دعم متعدد اللغات' : 'Multi-language Support'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                {language === 'ar' ? 'الموقع متاح بلغتين' : 'Website Available in Two Languages'}
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'ar' 
                ? 'يمكنك التبديل بين العربية والإنجليزية بسهولة باستخدام زر التبديل في الهدر'
                : 'You can easily switch between Arabic and English using the toggle button in the header'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-xl bg-background/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇸🇦</span>
              </div>
              <h3 className="font-bold text-xl mb-2">
                {language === 'ar' ? 'العربية' : 'Arabic'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'ar' 
                  ? 'واجهة كاملة باللغة العربية مع دعم RTL'
                  : 'Complete Arabic interface with RTL support'
                }
              </p>
              <div className="flex items-center justify-center mt-4">
                <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                <span className="text-sm text-secondary">
                  {language === 'ar' ? 'مفعل' : 'Active'}
                </span>
              </div>
            </div>

            <div className="text-center p-6 rounded-xl bg-background/50">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <h3 className="font-bold text-xl mb-2">
                {language === 'ar' ? 'الإنجليزية' : 'English'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'ar' 
                  ? 'واجهة إنجليزية احترافية مع دعم LTR'
                  : 'Professional English interface with LTR support'
                }
              </p>
              <div className="flex items-center justify-center mt-4">
                <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                <span className="text-sm text-secondary">
                  {language === 'ar' ? 'مفعل' : 'Active'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              {language === 'ar' 
                ? '💡 نصيحة: جرب تغيير اللغة باستخدام زر التبديل في الأعلى'
                : '💡 Tip: Try changing the language using the toggle button at the top'
              }
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LanguageDemo;