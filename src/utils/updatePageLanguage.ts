export const updatePageLanguage = (language: 'ar' | 'en') => {
  const isRTL = language === 'ar';
  
  // Update document attributes
  document.documentElement.lang = language;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  
  // Update body classes for styling
  document.body.className = document.body.className.replace(/\b(rtl|ltr)\b/g, '');
  document.body.classList.add(isRTL ? 'rtl' : 'ltr');
  
  // Update meta description based on language
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const description = language === 'ar' 
      ? 'فريق تكنولوجيا المعلومات في شركة العزب يقدم حلول تقنية مبتكرة للمشاريع الإنشائية والمعمارية. تطوير التطبيقات، الذكاء الاصطناعي، والأمن السيبراني.'
      : 'Alazab Company IT team provides innovative technical solutions for construction and architectural projects. Application development, artificial intelligence, and cybersecurity.';
    metaDesc.setAttribute('content', description);
  }
  
  // Update page title
  const title = language === 'ar'
    ? 'العزب تك - فريق تكنولوجيا المعلومات | حلول تقنية متطورة'
    : 'Alazab Tech - IT Team | Advanced Technical Solutions';
  document.title = title;
};