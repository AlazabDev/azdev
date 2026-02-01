import { Building2, Smartphone, Database, Cloud, Wrench } from 'lucide-react';

// Import UberFix project assets
import uberfixLanding from '@/assets/projects/uberfix/landing-01.jpeg';
import uberfixIcon from '@/assets/projects/uberfix/uber-icon.gif';
import uberfixAz from '@/assets/projects/uberfix/az.png';

// Import Laban Alasfour project assets
import labanMain from '@/assets/projects/laban-alasfour/labanalasfour.png';
import laban1 from '@/assets/projects/laban-alasfour/1.png';
import laban2 from '@/assets/projects/laban-alasfour/2.png';
import laban3 from '@/assets/projects/laban-alasfour/3.png';
import laban4 from '@/assets/projects/laban-alasfour/4.png';

export interface Project {
  id: string;
  slug: string;
  title: {
    ar: string;
    en: string;
  };
  category: {
    ar: string;
    en: string;
  };
  shortDescription: {
    ar: string;
    en: string;
  };
  fullDescription: {
    ar: string;
    en: string;
  };
  technologies: string[];
  status: 'completed' | 'in-progress';
  duration: number; // months
  icon: typeof Building2;
  coverImage: string;
  gallery: string[];
  videos?: string[];
  features: {
    ar: string[];
    en: string[];
  };
  results: {
    ar: string[];
    en: string[];
  };
  challenges?: {
    ar: string[];
    en: string[];
  };
  liveUrl?: string;
  githubUrl?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'uberfix',
    title: {
      ar: 'نظام UberFix لإدارة الصيانة',
      en: 'UberFix Maintenance Management System'
    },
    category: {
      ar: 'نظام متكامل ويب + جوال',
      en: 'Full-Stack Web + Mobile System'
    },
    shortDescription: {
      ar: 'نظام متكامل لإدارة طلبات الصيانة مصمم للسوق المصري، يربط العملاء بالفنيين مع إدارة شاملة لجميع العمليات',
      en: 'Integrated maintenance request management system designed for the Egyptian market, connecting customers with technicians with comprehensive operations management'
    },
    fullDescription: {
      ar: 'UberFix هو نظام متكامل لإدارة طلبات الصيانة مصمم خصيصاً للسوق المصري، يوفر منصة شاملة لربط العملاء بالفنيين وإدارة جميع عمليات الصيانة من البداية للنهاية. يتضمن النظام ثلاثة أدوار رئيسية: العميل لإنشاء ومتابعة الطلبات، الفني لاستلام وتنفيذ الطلبات، والمدير للإدارة الكاملة. النظام يتوافق مع قانون حماية البيانات المصري رقم 151 لسنة 2020.',
      en: 'UberFix is an integrated maintenance request management system designed specifically for the Egyptian market, providing a comprehensive platform to connect customers with technicians and manage all maintenance operations from start to finish. The system includes three main roles: Customer for creating and tracking requests, Technician for receiving and executing requests, and Admin for complete management. The system complies with Egyptian Data Protection Law No. 151 of 2020.'
    },
    technologies: [
      'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Shadcn/ui',
      'React Query', 'React Hook Form', 'Zod',
      'Supabase', 'PostgreSQL', 'Edge Functions (Deno)',
      'Resend', 'Twilio', 'Google Maps API', 'React Email'
    ],
    status: 'completed',
    duration: 8,
    icon: Wrench,
    coverImage: uberfixLanding,
    gallery: [uberfixLanding, uberfixAz],
    videos: [
      '/assets/projects/uberfix/uberfix-home.mp4',
      '/assets/projects/uberfix/uberfix-login.mp4',
      '/assets/projects/uberfix/uberfix-01.mp4',
      '/assets/projects/uberfix/uberfix-02.mp4',
      '/assets/projects/uberfix/uberfix-03.mp4',
    ],
    features: {
      ar: [
        'إنشاء طلبات صيانة بسهولة مع تحديد الموقع عبر الخريطة',
        'متابعة حالة الطلبات في الوقت الفعلي',
        'لوحة تحكم للفنيين مع عرض المواقع على الخريطة',
        'رفع صور العمل المنجز وإنشاء عروض الأسعار',
        'لوحة تحكم شاملة للمديرين مع تقارير وإحصائيات',
        'نظام SLA مع مهل زمنية حسب الأولوية',
        'إشعارات عبر البريد الإلكتروني و SMS',
        'قوالب بريد احترافية بدعم RTL للعربية',
        'نظام تقييم الخدمة والتواصل المباشر',
        'سجل تدقيق شامل وأمان RLS'
      ],
      en: [
        'Easy maintenance request creation with map location',
        'Real-time request status tracking',
        'Technician dashboard with map view',
        'Upload work photos and create quotations',
        'Comprehensive admin dashboard with reports and analytics',
        'SLA system with priority-based deadlines',
        'Email and SMS notifications',
        'Professional email templates with RTL Arabic support',
        'Service rating and direct communication system',
        'Comprehensive audit log and RLS security'
      ]
    },
    results: {
      ar: [
        'تقليل وقت الاستجابة بنسبة 70%',
        'زيادة رضا العملاء إلى 95%',
        'تحسين كفاءة الفنيين بنسبة 50%',
        'معالجة +1000 طلب صيانة شهرياً'
      ],
      en: [
        '70% reduction in response time',
        '95% customer satisfaction rate',
        '50% improvement in technician efficiency',
        '1000+ maintenance requests processed monthly'
      ]
    },
    challenges: {
      ar: [
        'تنسيق الفنيين في مناطق جغرافية واسعة',
        'ضمان التواصل الفوري بين جميع الأطراف',
        'تطوير نظام SLA متكامل مع إشعارات تلقائية',
        'الامتثال لقانون حماية البيانات المصري'
      ],
      en: [
        'Coordinating technicians across wide geographic areas',
        'Ensuring instant communication between all parties',
        'Developing integrated SLA system with automatic notifications',
        'Compliance with Egyptian Data Protection Law'
      ]
    },
    liveUrl: 'https://uberfix.shop',
    year: 2024
  },
  {
    id: '2',
    slug: 'laban-alasfour',
    title: {
      ar: 'موقع لبن الأصفور',
      en: 'Laban Alasfour Website'
    },
    category: {
      ar: 'موقع تجاري',
      en: 'Business Website'
    },
    shortDescription: {
      ar: 'موقع إلكتروني متكامل لشركة لبن الأصفور للألبان مع نظام عرض المنتجات والفروع',
      en: 'Complete website for Laban Alasfour dairy company with product display and branches system'
    },
    fullDescription: {
      ar: 'موقع إلكتروني احترافي لشركة لبن الأصفور للألبان يعرض منتجات الشركة ومواقع الفروع على الخريطة. يتميز الموقع بتصميم عصري وسهولة التصفح مع دعم كامل للغة العربية.',
      en: 'Professional website for Laban Alasfour dairy company showcasing company products and branch locations on map. The website features modern design and easy navigation with full Arabic language support.'
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Google Maps API'],
    status: 'in-progress',
    duration: 3,
    icon: Building2,
    coverImage: labanMain,
    gallery: [labanMain, laban1, laban2, laban3, laban4],
    features: {
      ar: [
        'عرض المنتجات بشكل جذاب',
        'خريطة تفاعلية للفروع',
        'تصميم متجاوب',
        'سرعة تحميل عالية',
        'تحسين محركات البحث SEO'
      ],
      en: [
        'Attractive product display',
        'Interactive branch map',
        'Responsive design',
        'High loading speed',
        'SEO optimization'
      ]
    },
    results: {
      ar: [
        'زيادة الزيارات بنسبة 200%',
        'تحسين ظهور محركات البحث',
        'تجربة مستخدم سلسة'
      ],
      en: [
        '200% increase in visits',
        'Improved search engine visibility',
        'Smooth user experience'
      ]
    },
    liveUrl: 'https://labanalasfour.com',
    year: 2024
  },
  {
    id: '3',
    slug: 'construction-management',
    title: {
      ar: 'نظام إدارة المشاريع الإنشائية',
      en: 'Construction Project Management System'
    },
    category: {
      ar: 'تطبيق ويب متقدم',
      en: 'Advanced Web Application'
    },
    shortDescription: {
      ar: 'منصة متكاملة لإدارة جميع جوانب المشاريع الإنشائية من التخطيط إلى التسليم',
      en: 'Integrated platform for managing all aspects of construction projects from planning to delivery'
    },
    fullDescription: {
      ar: 'منصة متكاملة لإدارة جميع جوانب المشاريع الإنشائية من التخطيط إلى التسليم، مع تتبع الموارد والجداول الزمنية وإدارة الفرق والتقارير المتقدمة',
      en: 'Integrated platform for managing all aspects of construction projects from planning to delivery, with resource tracking, schedules, team management and advanced reporting'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
    status: 'completed',
    duration: 12,
    icon: Building2,
    coverImage: '/placeholder.svg',
    gallery: [],
    features: {
      ar: [
        'لوحة تحكم شاملة للمشاريع',
        'تتبع المهام والموارد في الوقت الفعلي',
        'إدارة الفرق والصلاحيات',
        'تقارير مالية وتحليلية متقدمة',
        'تكامل مع أنظمة المحاسبة',
        'تطبيق جوال للمشرفين'
      ],
      en: [
        'Comprehensive project dashboard',
        'Real-time task and resource tracking',
        'Team and permissions management',
        'Advanced financial and analytical reports',
        'Integration with accounting systems',
        'Mobile app for supervisors'
      ]
    },
    results: {
      ar: [
        'زيادة الكفاءة بنسبة 40%',
        'تقليل التأخير بنسبة 60%',
        'توفير 25% من التكاليف',
        'رضا العملاء 95%'
      ],
      en: [
        '40% increase in efficiency',
        '60% reduction in delays',
        '25% cost savings',
        '95% client satisfaction'
      ]
    },
    year: 2023
  },
  {
    id: '4',
    slug: 'analytics-platform',
    title: {
      ar: 'منصة البيانات التحليلية',
      en: 'Analytics Data Platform'
    },
    category: {
      ar: 'نظام تحليل البيانات',
      en: 'Data Analytics System'
    },
    shortDescription: {
      ar: 'منصة متقدمة لتحليل بيانات المشاريع باستخدام تقنيات التعلم الآلي',
      en: 'Advanced platform for analyzing project data using machine learning techniques'
    },
    fullDescription: {
      ar: 'منصة متقدمة لتحليل بيانات المشاريع الإنشائية باستخدام تقنيات التعلم الآلي لاستخراج الرؤى الذكية واتخاذ القرارات المدروسة',
      en: 'Advanced platform for analyzing construction project data using machine learning techniques to extract smart insights and make informed decisions'
    },
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'D3.js', 'PostgreSQL', 'Docker'],
    status: 'completed',
    duration: 10,
    icon: Database,
    coverImage: '/placeholder.svg',
    gallery: [],
    features: {
      ar: [
        'تحليل البيانات الضخمة',
        'لوحات تحكم تفاعلية',
        'تعلم آلة متقدم',
        'تقارير آلية ذكية',
        'توقعات المشاريع',
        'تحسين الموارد'
      ],
      en: [
        'Big data analysis',
        'Interactive dashboards',
        'Advanced machine learning',
        'Smart automated reports',
        'Project predictions',
        'Resource optimization'
      ]
    },
    results: {
      ar: [
        'تحسين اتخاذ القرارات بنسبة 50%',
        'توقع المشاكل مبكراً بدقة 80%',
        'تحسين استخدام الموارد بنسبة 35%',
        'توفير الوقت في التقارير 60%'
      ],
      en: [
        '50% improvement in decision making',
        '80% accuracy in early problem prediction',
        '35% improvement in resource utilization',
        '60% time savings in reporting'
      ]
    },
    year: 2023
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};
