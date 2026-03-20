import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  const { language, isRTL } = useLanguage();
  useScrollToTop();

  const content = language === 'ar' ? {
    title: 'الشروط والأحكام',
    lastUpdated: 'آخر تحديث: مارس 2026',
    sections: [
      {
        title: '1. القبول بالشروط',
        text: 'باستخدامك لموقع alazab.dev وخدماته، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.'
      },
      {
        title: '2. وصف الخدمات',
        text: 'يقدم alazab.dev خدمات تقنية تشمل:\n• تطوير تطبيقات الويب والجوال.\n• حلول الذكاء الاصطناعي وتعلم الآلة.\n• الحلول السحابية والبنية التحتية.\n• الأمن السيبراني وحماية البيانات.\n• تحليل البيانات واستخراج الرؤى.\n• تكامل الأنظمة والاستشارات التقنية.'
      },
      {
        title: '3. الملكية الفكرية',
        text: 'جميع المحتويات المعروضة على الموقع، بما في ذلك النصوص والرسومات والشعارات والصور والأكواد البرمجية، هي ملك لـ alazab.dev أو مرخصة لها ومحمية بموجب قوانين حقوق الملكية الفكرية.'
      },
      {
        title: '4. استخدام الموقع',
        text: 'يوافق المستخدم على:\n• عدم استخدام الموقع لأي غرض غير قانوني.\n• عدم محاولة الوصول غير المصرح به إلى أنظمتنا.\n• عدم نقل أي فيروسات أو برامج ضارة.\n• تقديم معلومات صحيحة ودقيقة عند التواصل معنا.'
      },
      {
        title: '5. المشاريع والعقود',
        text: 'يتم الاتفاق على تفاصيل المشاريع وأسعارها ومواعيد التسليم في عقود منفصلة. هذه الشروط العامة تكمل ولا تحل محل الاتفاقيات التعاقدية الخاصة بكل مشروع.'
      },
      {
        title: '6. تحديد المسؤولية',
        text: 'لا يتحمل alazab.dev المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام الموقع أو خدماته. مسؤوليتنا محدودة بقيمة الخدمات المقدمة فعلياً.'
      },
      {
        title: '7. التعديلات',
        text: 'نحتفظ بحق تعديل هذه الشروط في أي وقت. سيتم إشعاركم بأي تغييرات جوهرية عبر الموقع أو البريد الإلكتروني. استمرار استخدام الخدمات بعد التعديل يعني قبولكم للشروط المحدثة.'
      },
      {
        title: '8. القانون المعمول به',
        text: 'تخضع هذه الشروط لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن هذه الشروط يخضع للاختصاص القضائي للمحاكم المختصة في المملكة العربية السعودية.'
      },
      {
        title: '9. التواصل',
        text: 'لأي استفسارات حول هذه الشروط والأحكام، يرجى التواصل معنا عبر البريد الإلكتروني: info@alazab.dev'
      }
    ]
  } : {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: March 2026',
    sections: [
      {
        title: '1. Acceptance of Terms',
        text: 'By using the alazab.dev website and its services, you agree to comply with these Terms of Service. If you do not agree to any part of these terms, please do not use our services.'
      },
      {
        title: '2. Description of Services',
        text: 'alazab.dev provides technical services including:\n• Web and mobile application development.\n• Artificial intelligence and machine learning solutions.\n• Cloud solutions and infrastructure.\n• Cybersecurity and data protection.\n• Data analytics and insights extraction.\n• Systems integration and technical consulting.'
      },
      {
        title: '3. Intellectual Property',
        text: 'All content displayed on the website, including text, graphics, logos, images, and source code, is owned by or licensed to alazab.dev and is protected under intellectual property laws.'
      },
      {
        title: '4. Website Usage',
        text: 'Users agree to:\n• Not use the website for any unlawful purpose.\n• Not attempt unauthorized access to our systems.\n• Not transmit any viruses or malicious software.\n• Provide accurate and truthful information when contacting us.'
      },
      {
        title: '5. Projects and Contracts',
        text: 'Project details, pricing, and delivery timelines are agreed upon in separate contracts. These general terms complement and do not replace project-specific contractual agreements.'
      },
      {
        title: '6. Limitation of Liability',
        text: 'alazab.dev shall not be liable for any indirect, incidental, or consequential damages arising from the use of the website or its services. Our liability is limited to the value of services actually provided.'
      },
      {
        title: '7. Modifications',
        text: 'We reserve the right to modify these terms at any time. You will be notified of any material changes via the website or email. Continued use of services after modifications constitutes acceptance of updated terms.'
      },
      {
        title: '8. Governing Law',
        text: 'These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes arising from these terms are subject to the jurisdiction of the competent courts in the Kingdom of Saudi Arabia.'
      },
      {
        title: '9. Contact',
        text: 'For any inquiries about these Terms of Service, please contact us at: info@alazab.dev'
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-primary" />
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

export default TermsOfService;
