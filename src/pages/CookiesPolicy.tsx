import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Cookie } from 'lucide-react';

const CookiesPolicy = () => {
  const { language, isRTL } = useLanguage();
  useScrollToTop();

  const content = language === 'ar' ? {
    title: 'سياسة ملفات تعريف الارتباط',
    lastUpdated: 'آخر تحديث: مارس 2026',
    sections: [
      {
        title: '1. ما هي ملفات تعريف الارتباط؟',
        text: 'ملفات تعريف الارتباط (الكوكيز) هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا الإلكتروني. تساعدنا هذه الملفات في تحسين تجربتك وتقديم خدمات مخصصة لك.'
      },
      {
        title: '2. أنواع ملفات تعريف الارتباط التي نستخدمها',
        text: '• ملفات ضرورية: لازمة لعمل الموقع بشكل صحيح، مثل تسجيل الدخول وحفظ تفضيلات اللغة والمظهر.\n• ملفات تحليلية: تساعدنا في فهم كيفية استخدام الزوار للموقع لتحسين الأداء والمحتوى.\n• ملفات وظيفية: تتذكر اختياراتك (مثل اللغة والوضع الداكن/الفاتح) لتوفير تجربة مخصصة.\n• ملفات تسويقية: تُستخدم لعرض محتوى ملائم لاهتماماتك (لا نستخدمها حالياً).'
      },
      {
        title: '3. ملفات تعريف الارتباط التي نستخدمها',
        text: '• alazab-theme: لحفظ تفضيل المظهر (داكن/فاتح). النوع: وظيفي. المدة: دائم.\n• language: لحفظ تفضيل اللغة (عربي/إنجليزي). النوع: وظيفي. المدة: دائم.\n• sb-*: ملفات Supabase للمصادقة وإدارة الجلسات. النوع: ضروري. المدة: جلسة.'
      },
      {
        title: '4. كيفية إدارة ملفات تعريف الارتباط',
        text: 'يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك. يمكنك:\n• حذف جميع ملفات تعريف الارتباط المخزنة.\n• حظر ملفات تعريف الارتباط من مواقع معينة.\n• السماح بملفات تعريف الارتباط من مواقع معينة فقط.\n• حظر جميع ملفات تعريف الارتباط.\n\nيرجى ملاحظة أن حظر بعض الملفات قد يؤثر على وظائف الموقع.'
      },
      {
        title: '5. ملفات تعريف الارتباط من أطراف ثالثة',
        text: 'قد يستخدم موقعنا خدمات من أطراف ثالثة قد تضع ملفات تعريف ارتباط خاصة بها، مثل:\n• Supabase: لإدارة المصادقة والجلسات.\n• Google Analytics: لتحليل حركة المرور (إن وُجد).\n\nلا نتحكم في ملفات تعريف الارتباط هذه، ونوصي بمراجعة سياسات الخصوصية الخاصة بهذه الخدمات.'
      },
      {
        title: '6. تحديثات السياسة',
        text: 'قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ آخر تعديل.'
      },
      {
        title: '7. التواصل معنا',
        text: 'إذا كان لديكم أي أسئلة حول سياسة ملفات تعريف الارتباط، يرجى التواصل معنا عبر البريد الإلكتروني: info@alazab.dev'
      }
    ]
  } : {
    title: 'Cookies Policy',
    lastUpdated: 'Last Updated: March 2026',
    sections: [
      {
        title: '1. What Are Cookies?',
        text: 'Cookies are small text files stored on your device when you visit our website. They help us improve your experience and provide personalized services.'
      },
      {
        title: '2. Types of Cookies We Use',
        text: '• Essential Cookies: Required for the website to function properly, such as login and saving language/theme preferences.\n• Analytical Cookies: Help us understand how visitors use the site to improve performance and content.\n• Functional Cookies: Remember your choices (such as language and dark/light mode) to provide a personalized experience.\n• Marketing Cookies: Used to display content relevant to your interests (not currently in use).'
      },
      {
        title: '3. Cookies We Use',
        text: '• alazab-theme: Stores your theme preference (dark/light). Type: Functional. Duration: Persistent.\n• language: Stores your language preference (Arabic/English). Type: Functional. Duration: Persistent.\n• sb-*: Supabase cookies for authentication and session management. Type: Essential. Duration: Session.'
      },
      {
        title: '4. How to Manage Cookies',
        text: 'You can control cookies through your browser settings. You can:\n• Delete all stored cookies.\n• Block cookies from specific websites.\n• Allow cookies only from specific websites.\n• Block all cookies.\n\nPlease note that blocking some cookies may affect website functionality.'
      },
      {
        title: '5. Third-Party Cookies',
        text: 'Our website may use third-party services that may place their own cookies, such as:\n• Supabase: For authentication and session management.\n• Google Analytics: For traffic analysis (if applicable).\n\nWe do not control these cookies and recommend reviewing the privacy policies of these services.'
      },
      {
        title: '6. Policy Updates',
        text: 'We may update this policy from time to time. Any changes will be posted on this page with an updated last modified date.'
      },
      {
        title: '7. Contact Us',
        text: 'If you have any questions about our Cookies Policy, please contact us at: info@alazab.dev'
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <Cookie className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-gradient">{content.title}</h1>
          </div>
          <p className="text-muted-foreground mb-12">{content.lastUpdated}</p>

          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-border/50">
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
