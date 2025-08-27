// SEO utilities for the website

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export const defaultSEO: SEOData = {
  title: 'العزب تك - فريق تكنولوجيا المعلومات | حلول تقنية متطورة',
  description: 'فريق تكنولوجيا المعلومات في شركة العزب يقدم حلول تقنية مبتكرة للمشاريع الإنشائية والمعمارية. تطوير التطبيقات، الذكاء الاصطناعي، والأمن السيبراني.',
  keywords: [
    'تكنولوجيا المعلومات',
    'تطوير التطبيقات',
    'الذكاء الاصطناعي',
    'المشاريع الإنشائية',
    'الحلول التقنية',
    'شركة العزب',
    'البرمجة',
    'الأمن السيبراني',
    'تحليل البيانات',
    'الحلول السحابية'
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
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Structured data for the organization
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "العزب تك - فريق تكنولوجيا المعلومات",
  "description": "فريق تكنولوجيا المعلومات في شركة العزب",
  "url": "https://alazab-tech.com",
  "logo": "https://alazab-tech.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966-11-234-5678",
    "contactType": "customer support",
    "email": "tech@alazab.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SA",
    "addressLocality": "الرياض"
  },
  "sameAs": [
    "https://linkedin.com/company/alazab-tech",
    "https://github.com/alazab-tech"
  ]
};