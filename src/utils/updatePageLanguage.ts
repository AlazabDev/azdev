export const updatePageLanguage = (language: 'ar' | 'en') => {
  const isRTL = language === 'ar';
  
  // Update document attributes
  document.documentElement.lang = language;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  
  // Update html classes for RTL/LTR styling
  document.documentElement.classList.remove('rtl', 'ltr');
  document.documentElement.classList.add(isRTL ? 'rtl' : 'ltr');
  
  // Update body classes for styling
  document.body.className = document.body.className.replace(/\b(rtl|ltr)\b/g, '');
  document.body.classList.add(isRTL ? 'rtl' : 'ltr');
  
  // Update meta description based on language
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const description = language === 'ar' 
      ? 'فريق تكنولوجيا المعلومات في شركة العزب يقدم حلول تقنية مبتكرة للمشاريع الإنشائية والمعمارية. تطوير التطبيقات، الذكاء الاصطناعي، والأمن السيبراني.'
      : 'alazab.dev provides innovative technical solutions for construction and architectural projects. Application development, AI, and cybersecurity.';
    metaDesc.setAttribute('content', description);
  }
  
  // Update page title
  const title = language === 'ar'
    ? 'alazab.dev - حلول تقنية متطورة'
    : 'alazab.dev - Advanced Tech Solutions';
  document.title = title;
};