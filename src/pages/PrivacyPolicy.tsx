import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const { language, isRTL } = useLanguage();
  useScrollToTop();

  const content = language === 'ar' ? {
    title: 'سياسة الخصوصية',
    lastUpdated: 'آخر تحديث: مارس 2026',
    sections: [
      {
        title: '1. المقدمة',
        text: 'مرحباً بكم في alazab.dev. نحن نلتزم بحماية خصوصيتكم وبياناتكم الشخصية. توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتكم عند استخدام موقعنا وخدماتنا.'
      },
      {
        title: '2. المعلومات التي نجمعها',
        text: 'نجمع المعلومات التالية:\n• المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة عند تقديمها طوعياً عبر نماذج التواصل.\n• معلومات الاستخدام: بيانات التصفح، عنوان IP، نوع المتصفح، ومدة الزيارة.\n• ملفات تعريف الارتباط: نستخدم الكوكيز لتحسين تجربة المستخدم وتفضيلات اللغة والمظهر.'
      },
      {
        title: '3. كيف نستخدم معلوماتكم',
        text: 'نستخدم معلوماتكم للأغراض التالية:\n• الرد على استفساراتكم وطلبات التواصل.\n• تحسين خدماتنا وتجربة المستخدم.\n• إرسال التحديثات التقنية والنشرات البريدية (بموافقتكم).\n• تحليل أداء الموقع وتحسينه.'
      },
      {
        title: '4. حماية البيانات',
        text: 'نتخذ إجراءات أمنية مناسبة لحماية بياناتكم الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو الإتلاف. نستخدم تشفير SSL/TLS لنقل البيانات وأنظمة حماية متقدمة لتخزينها.'
      },
      {
        title: '5. مشاركة البيانات',
        text: 'لا نبيع أو نؤجر أو نتاجر بمعلوماتكم الشخصية مع أطراف ثالثة. قد نشارك البيانات فقط مع:\n• مزودي الخدمات الذين يساعدوننا في تشغيل الموقع.\n• السلطات القانونية عند الضرورة بموجب القانون.'
      },
      {
        title: '6. حقوقكم',
        text: 'لديكم الحق في:\n• طلب الوصول إلى بياناتكم الشخصية.\n• طلب تصحيح أو حذف بياناتكم.\n• الانسحاب من القوائم البريدية في أي وقت.\n• طلب نسخة من بياناتكم المخزنة.'
      },
      {
        title: '7. التواصل معنا',
        text: 'إذا كان لديكم أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني: info@alazab.dev'
      }
    ]
  } : {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: March 2026',
    sections: [
      {
        title: '1. Introduction',
        text: 'Welcome to alazab.dev. We are committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect your information when you use our website and services.'
      },
      {
        title: '2. Information We Collect',
        text: 'We collect the following information:\n• Personal Information: Name, email, phone number, company name when voluntarily provided through contact forms.\n• Usage Information: Browsing data, IP address, browser type, and visit duration.\n• Cookies: We use cookies to improve user experience and language/theme preferences.'
      },
      {
        title: '3. How We Use Your Information',
        text: 'We use your information for the following purposes:\n• Responding to your inquiries and contact requests.\n• Improving our services and user experience.\n• Sending technical updates and newsletters (with your consent).\n• Analyzing and improving website performance.'
      },
      {
        title: '4. Data Protection',
        text: 'We take appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. We use SSL/TLS encryption for data transmission and advanced protection systems for storage.'
      },
      {
        title: '5. Data Sharing',
        text: 'We do not sell, rent, or trade your personal information with third parties. We may share data only with:\n• Service providers who help us operate the website.\n• Legal authorities when required by law.'
      },
      {
        title: '6. Your Rights',
        text: 'You have the right to:\n• Request access to your personal data.\n• Request correction or deletion of your data.\n• Unsubscribe from mailing lists at any time.\n• Request a copy of your stored data.'
      },
      {
        title: '7. Contact Us',
        text: 'If you have any questions about our Privacy Policy, please contact us at: info@alazab.dev'
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-primary" />
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

export default PrivacyPolicy;
