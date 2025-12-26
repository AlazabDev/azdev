import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { defaultSEO, updatePageTitle, updateMetaDescription, addStructuredData, organizationStructuredData } from '@/lib/seo';

const Index = () => {
  // SEO
  useEffect(() => {
    updatePageTitle('alazab.dev - حلول تقنية متطورة | Advanced Tech Solutions');
    updateMetaDescription('فريق متخصص في تكنولوجيا المعلومات يقدم حلول تقنية مبتكرة ومتطورة');
    addStructuredData({
      ...organizationStructuredData,
      name: 'alazab.dev',
      url: 'https://alazab.dev'
    });
  }, []);

  // Smooth scrolling
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;