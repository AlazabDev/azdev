// SEO utilities for the website

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export const defaultSEO: SEOData = {
  title: 'alazab.dev - حلول تقنية متطورة | Advanced Tech Solutions',
  description: 'فريق متخصص في تكنولوجيا المعلومات يقدم حلول تقنية مبتكرة ومتطورة للمشاريع الإنشائية والمعمارية.',
  keywords: [
    'alazab.dev',
    'تكنولوجيا المعلومات',
    'تطوير التطبيقات',
    'الذكاء الاصطناعي',
    'الحلول التقنية',
    'البرمجة',
    'الأمن السيبراني'
  ]
};

export const updatePageTitle = (title: string) => {
  document.title = title;
};

export const updateMetaDescription = (description: string) => {
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  }
};

export const addStructuredData = (data: object) => {
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) existingScript.remove();
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export const updateSEO = (seoData: SEOData) => {
  updatePageTitle(seoData.title);
  updateMetaDescription(seoData.description);
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "alazab.dev",
  "description": "حلول تقنية متطورة",
  "url": "https://alazab.dev",
  "logo": "https://alazab.dev/logo021.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966-11-234-5678",
    "contactType": "customer support",
    "email": "info@alazab.dev"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SA",
    "addressLocality": "الرياض"
  }
};