import { useEffect } from 'react';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Globe, Crown, Briefcase, Award, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { addStructuredData, updatePageTitle, updateMetaDescription } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProfileMohamedAzab = () => {
  const { language, isRTL } = useLanguage();

  const data = {
    name: language === 'ar' ? 'محمد عزب' : 'Mohamed Azab',
    role: language === 'ar' ? 'المؤسس والرئيس التنفيذي — alazab.dev' : 'Founder & CEO — alazab.dev',
    location: language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt',
    bio: language === 'ar'
      ? 'رائد أعمال وخبير في التحول الرقمي وقيادة الفرق التقنية، يقود alazab.dev لتقديم حلول تقنية متطورة في تطوير التطبيقات، الذكاء الاصطناعي، والأمن السيبراني — بخبرة تتجاوز 15 عامًا في القطاع التقني وقطاع المقاولات.'
      : 'Entrepreneur and digital transformation expert leading alazab.dev to deliver advanced technical solutions across application development, AI, and cybersecurity — with 15+ years of experience across tech and contracting.',
    specialties: language === 'ar'
      ? ['القيادة الاستراتيجية', 'ريادة الأعمال', 'التحول الرقمي', 'هندسة البرمجيات', 'البنية السحابية']
      : ['Strategic Leadership', 'Entrepreneurship', 'Digital Transformation', 'Software Engineering', 'Cloud Architecture'],
    achievements: language === 'ar'
      ? [
          'تأسيس alazab.dev كذراع تقني متخصص لمجموعة العزب للمقاولات',
          'إطلاق نظام العزب للصيانات المعمارية للمحلات التجارية',
          'قيادة مشاريع تقنية بارزة: UberFix و Laban Al-Asfour',
          'بناء فريق هندسي متعدد التخصصات يضم 25+ مهندس ومطور',
        ]
      : [
          'Founded alazab.dev as the technical arm of Al-Azab Contracting Group',
          'Launched the Alazab Architectural Maintenance System for commercial shops',
          'Led flagship technical projects: UberFix and Laban Al-Asfour',
          'Built a 25+ multidisciplinary engineering team',
        ],
    links: {
      website: 'https://alazab.dev',
      email: 'mohamed@alazab.dev',
      github: 'https://github.com/mohamedazab',
      linkedin: 'https://www.linkedin.com/in/mohamedazab',
    },
    image: '/team001.png',
  };

  useEffect(() => {
    const title = language === 'ar'
      ? 'محمد عزب — مؤسس alazab.dev | السيرة الذاتية'
      : 'Mohamed Azab — Founder of alazab.dev | Public Profile';
    updatePageTitle(title);
    updateMetaDescription(data.bio);

    addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mohamed Azab',
      alternateName: 'محمد عزب',
      jobTitle: 'Founder & CEO',
      description: data.bio,
      url: 'https://alazab.dev/profile/mohamed-azab',
      image: 'https://alazab.dev/team001.png',
      email: 'mailto:mohamed@alazab.dev',
      worksFor: {
        '@type': 'Organization',
        name: 'alazab.dev',
        url: 'https://alazab.dev',
      },
      sameAs: [
        'https://alazab.dev',
        'https://github.com/mohamedazab',
        'https://www.linkedin.com/in/mohamedazab',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cairo',
        addressCountry: 'EG',
      },
      knowsAbout: data.specialties,
    });
  }, [language]);

  useEffect(() => {
    // canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = 'https://alazab.dev/profile/mohamed-azab';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero card */}
          <Card className="p-8 md:p-12 glass border-primary/20 relative overflow-hidden animate-fade-in">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

            <div className={`relative z-10 flex flex-col md:flex-row gap-8 items-center ${isRTL ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
              <div className="relative shrink-0">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 p-1 shadow-glow">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold shadow-lg">
                  <Crown className="w-3 h-3" />
                  <span>{language === 'ar' ? 'المؤسس' : 'Founder'}</span>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-gradient">{data.name}</span>
                </h1>
                <p className="text-primary font-medium mb-3">{data.role}</p>
                <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-4 h-4" />
                  <span>{data.location}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-5">{data.bio}</p>

                <div className={`flex flex-wrap gap-2 mb-5 ${isRTL ? 'justify-end' : ''}`}>
                  {data.specialties.map((s) => (
                    <Badge key={s} variant="outline" className="text-xs">{s}</Badge>
                  ))}
                </div>

                <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                  <Button asChild size="sm" variant="outline">
                    <a href={data.links.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                      <Globe className="w-4 h-4 mr-2" /> alazab.dev
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={`mailto:${data.links.email}`} aria-label="Email">
                      <Mail className="w-4 h-4 mr-2" /> Email
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={data.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-8 mt-8 glass border-secondary/20 animate-fade-in">
            <div className={`flex items-center gap-2 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Award className="w-5 h-5 text-secondary" />
              <h2 className="text-xl font-bold">{language === 'ar' ? 'إنجازات بارزة' : 'Key Achievements'}</h2>
            </div>
            <ul className={`space-y-3 ${isRTL ? 'text-right' : ''}`}>
              {data.achievements.map((a, i) => (
                <li key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Sparkles className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span className="text-foreground/80">{a}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Work card */}
          <Card className="p-8 mt-8 glass border-primary/20 animate-fade-in">
            <div className={`flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">{language === 'ar' ? 'العمل الحالي' : 'Current Work'}</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              {language === 'ar'
                ? 'يقود محمد فريق alazab.dev في تقديم حلول رقمية شاملة لقطاع المقاولات والتجارة، بما في ذلك أنظمة الصيانة الذكية، تطبيقات الويب والجوال، وبنى تحتية سحابية موثوقة.'
                : 'Mohamed leads the alazab.dev team delivering end-to-end digital solutions for contracting and commerce, including smart maintenance systems, web/mobile apps, and reliable cloud infrastructure.'}
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfileMohamedAzab;
