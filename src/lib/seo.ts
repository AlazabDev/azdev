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

export const updateSEO = (seoData: SEOData) => {
  updatePageTitle(seoData.title);
  updateMetaDescription(seoData.description);
  
  // Update keywords meta tag
  if (seoData.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords.join(', '));
    } else {
      const newKeywordsMeta = document.createElement('meta');
      newKeywordsMeta.name = 'keywords';
      newKeywordsMeta.content = seoData.keywords.join(', ');
      document.head.appendChild(newKeywordsMeta);
    }
  }
  
  // Update canonical URL
  if (seoData.canonicalUrl) {
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', seoData.canonicalUrl);
    } else {
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = seoData.canonicalUrl;
      document.head.appendChild(canonicalLink);
    }
  }
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