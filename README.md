# alazab.dev - Advanced Tech Solutions

<div align="center">
  <img src="public/alazab-icon.png" alt="alazab.dev Logo" width="120" height="120" />
  <h3>موقع alazab.dev الرسمي</h3>
  <p>حلول تقنية متقدمة للمشاريع الإنشائية والمعمارية</p>
</div>

## 📋 نظرة عامة

موقع **alazab.dev** هو المنصة الرسمية لفريق تقني متخصص في تقديم الحلول التقنية المتقدمة لقطاع الإنشاءات والمشاريع المعمارية. يقدم الموقع خدماتنا ومشاريعنا بطريقة عصرية وسهلة الاستخدام.

**الرابط**: [https://www.alazab.dev](https://www.alazab.dev)

## ✨ المميزات

- 🚀 **أداء عالي** - مبني باستخدام Vite و React لسرعة تحميل فائقة
- 📱 **متجاوب بالكامل** - يعمل بشكل مثالي على جميع الأجهزة
- 🎨 **واجهة مستخدم عصرية** - بتصميم أنيق باستخدام shadcn-ui و Tailwind CSS
- 🔍 **محسن لمحركات البحث** - بنية متوافقة مع SEO
- 📦 **PWA** - يمكن تثبيته كتطبيق على الأجهزة
- 🔒 **آمن** - أفضل ممارسات الأمان

## 🛠️ التقنيات المستخدمة

- **الفرونت إند**: React 18, TypeScript
- **الأدوات**: Vite, SWC
- **التصميم**: Tailwind CSS, shadcn-ui, Radix UI
- **إدارة الحالة**: TanStack Query
- **النماذج**: React Hook Form, Zod
- **الرسوم البيانية**: Recharts
- **قاعدة البيانات**: Supabase
- **PWA**: vite-plugin-pwa

## 📥 التثبيت والتشغيل المحلي

### المتطلبات الأساسية

- Node.js (الإصدار 18 أو أحدث)
- npm (الإصدار 8 أو أحدث)

### خطوات التثبيت

1. **استنساخ المشروع**
   ```bash
   git clone https://github.com/alazab-dev/alazab.dev.git
   cd alazab.dev
تثبيت الاعتماديات

bash
npm install
إعداد متغيرات البيئة
قم بإنشاء ملف .env في المجلد الرئيسي:

env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
تشغيل خادم التطوير

bash
npm run dev
سيفتح الموقع تلقائياً على http://localhost:8080

📦 أوامر المشروع
الأمر	الوصف
npm run dev	تشغيل وضع التطوير
npm run build	بناء المشروع للإنتاج
npm run build:dev	بناء المشروع لوضع التطوير
npm run preview	معاينة نسخة الإنتاج محلياً
npm run lint	فحص الأكواد
npm run format	تنسيق الأكواد
npm run type-check	فحص أنواع TypeScript
npm run clean	تنظيف الملفات المؤقتة
🌐 النشر والإستضافة
النشر على Vercel (مقترح)
ادفع الكود إلى مستودع GitHub

سجل دخولك إلى Vercel

انقر على "Add New Project"

اختر المستودع الخاص بك

أضف متغيرات البيئة المطلوبة

انقر على "Deploy"

النشر على Netlify
ادفع الكود إلى مستودع GitHub

سجل دخولك إلى Netlify

انقر على "Import from Git"

اختر المستودع والإعدادات

أمر البناء: npm run build

مجلد النشر: dist

🔗 ربط النطاق المخصص
ربط alazab.dev مع Vercel
في لوحة تحكم Vercel، اختر المشروع

اذهب إلى Settings > Domains

أضف النطاق alazab.dev

اتبع التعليمات لإعداد DNS:

أضف سجلات CNAME أو A المطلوبة

انتظر حتى يتم التحقق

ربط alazab.dev مع Netlify
في لوحة تحكم Netlify، اختر المشروع

اذهب إلى Site settings > Domain management

انقر على "Add custom domain"

أدخل alazab.dev

اتبع التعليمات لتحديث إعدادات DNS

🏗️ هيكل المشروع
text
alazab.dev/
├── public/              # الملفات الثابتة
│   ├── alazab-icon.png  # أيقونة الموقع
│   └── robots.txt       # ملف robots لمحركات البحث
├── src/
│   ├── components/      # مكونات React
│   ├── hooks/           # Hooks مخصصة
│   ├── lib/            # مكتبات وأدوات مساعدة
│   ├── pages/          # صفحات الموقع
│   ├── types/          # تعريفات TypeScript
│   └── App.tsx         # المكون الرئيسي
├── index.html          # ملف HTML الرئيسي
├── vite.config.ts      # إعدادات Vite
├── tailwind.config.js  # إعدادات Tailwind
├── tsconfig.json       # إعدادات TypeScript
└── package.json        # اعتماديات المشروع
🤝 المساهمة
نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

Fork المشروع

إنشاء فرع جديد (git checkout -b feature/amazing-feature)

Commit التغييرات (git commit -m 'إضافة ميزة رائعة')

Push إلى الفرع (git push origin feature/amazing-feature)

فتح Pull Request

📄 الترخيص
هذا المشروع مرخص تحت رخصة MIT - انظر ملف LICENSE للتفاصيل.

📞 التواصل
الموقع: https://www.alazab.dev

البريد الإلكتروني: contact@alazab.dev

تويتر: @alazab_dev

لينكد إن: alazab-dev


   <br>
<br>
<div align="center">
	<a href="https://alazab.dev">
		<picture>
			<div style="text-align:center;">
       <a href="https://alazab.dev" target="_blank">
    <img src="https://al-azab.co/images/logaz.gif" alt="Alazab.Dev" height="62" style="display:inline-block;">
		</picture>
	</a>
</div>
