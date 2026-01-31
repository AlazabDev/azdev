import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Smartphone, Check, Share, MoreVertical, Plus, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Install = () => {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Detect device
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const content = {
    ar: {
      title: 'تثبيت التطبيق',
      subtitle: 'احصل على تجربة أفضل مع تطبيقنا',
      installed: 'تم التثبيت بنجاح!',
      installedDesc: 'يمكنك الآن استخدام التطبيق من الشاشة الرئيسية',
      installButton: 'تثبيت التطبيق',
      backHome: 'العودة للرئيسية',
      features: [
        'تصفح أسرع بدون إنترنت',
        'إشعارات فورية',
        'تجربة تطبيق أصلي',
        'وصول سريع من الشاشة الرئيسية'
      ],
      iosTitle: 'تثبيت على iPhone/iPad',
      iosSteps: [
        'اضغط على زر المشاركة',
        'اختر "إضافة إلى الشاشة الرئيسية"',
        'اضغط "إضافة"'
      ],
      androidTitle: 'تثبيت على Android',
      androidSteps: [
        'اضغط على قائمة المتصفح (⋮)',
        'اختر "إضافة إلى الشاشة الرئيسية"',
        'اضغط "إضافة"'
      ]
    },
    en: {
      title: 'Install App',
      subtitle: 'Get a better experience with our app',
      installed: 'Successfully Installed!',
      installedDesc: 'You can now use the app from your home screen',
      installButton: 'Install App',
      backHome: 'Back to Home',
      features: [
        'Faster browsing offline',
        'Instant notifications',
        'Native app experience',
        'Quick access from home screen'
      ],
      iosTitle: 'Install on iPhone/iPad',
      iosSteps: [
        'Tap the Share button',
        'Select "Add to Home Screen"',
        'Tap "Add"'
      ],
      androidTitle: 'Install on Android',
      androidSteps: [
        'Tap browser menu (⋮)',
        'Select "Add to Home Screen"',
        'Tap "Add"'
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        {isInstalled ? (
          <>
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-2">{t.installed}</h1>
            <p className="text-muted-foreground mb-6">{t.installedDesc}</p>
            <Button onClick={() => navigate('/')} className="w-full">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t.backHome}
            </Button>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">{t.title}</h1>
            <p className="text-muted-foreground mb-6">{t.subtitle}</p>

            {/* Features */}
            <div className={`space-y-3 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.features.map((feature, index) => (
                <div key={index} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Install Button (Chrome/Edge) */}
            {deferredPrompt && (
              <Button onClick={handleInstall} size="lg" className="w-full mb-4 bg-gradient-primary">
                <Download className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t.installButton}
              </Button>
            )}

            {/* iOS Instructions */}
            {isIOS && !deferredPrompt && (
              <div className={`bg-muted/50 rounded-lg p-4 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Share className="w-5 h-5 text-primary" />
                  {t.iosTitle}
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {t.iosSteps.map((step, index) => (
                    <li key={index} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="font-bold text-primary">{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Android Instructions */}
            {isAndroid && !deferredPrompt && (
              <div className={`bg-muted/50 rounded-lg p-4 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <MoreVertical className="w-5 h-5 text-primary" />
                  {t.androidTitle}
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {t.androidSteps.map((step, index) => (
                    <li key={index} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="font-bold text-primary">{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <Button variant="outline" onClick={() => navigate('/')} className="w-full">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t.backHome}
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default Install;