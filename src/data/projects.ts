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
      ar: 'نظام UberFix للصيانة الذكية',
      en: 'UberFix Smart Maintenance System'
    },
    category: {
      ar: 'تطبيق ويب + جوال',
      en: 'Web + Mobile App'
    },
    shortDescription: {
      ar: 'نظام متكامل لإدارة طلبات الصيانة للمحلات التجارية مع لوحة تحكم متقدمة وتطبيق للفنيين',
      en: 'Integrated maintenance request management system for commercial stores with advanced dashboard and technician app'
    },
    fullDescription: {
      ar: 'نظام UberFix هو منصة شاملة لإدارة طلبات الصيانة للمحلات التجارية والمنشآت. يتضمن النظام لوحة تحكم متقدمة للمديرين، تطبيق جوال للفنيين، وواجهة سهلة للعملاء لتقديم طلبات الصيانة ومتابعتها. يستخدم النظام تقنيات الذكاء الاصطناعي لتحسين توزيع المهام وتقليل وقت الاستجابة.',
      en: 'UberFix is a comprehensive platform for managing maintenance requests for commercial stores and facilities. The system includes an advanced dashboard for managers, a mobile app for technicians, and an easy-to-use interface for customers to submit and track maintenance requests. The system uses AI technologies to optimize task distribution and reduce response time.'
    },
    technologies: ['React', 'TypeScript', 'Supabase', 'Flutter', 'Node.js', 'PostgreSQL'],
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
        'لوحة تحكم متقدمة للمديرين',
        'تطبيق جوال للفنيين',
        'نظام إشعارات فوري',
        'تتبع حالة الطلبات في الوقت الفعلي',
        'تقارير وتحليلات شاملة',
        'نظام تقييم الخدمة',
        'تكامل مع واتساب',
        'خرائط تفاعلية لتتبع الفنيين'
      ],
      en: [
        'Advanced dashboard for managers',
        'Mobile app for technicians',
        'Instant notification system',
        'Real-time request tracking',
        'Comprehensive reports and analytics',
        'Service rating system',
        'WhatsApp integration',
        'Interactive maps for technician tracking'
      ]
    },
    results: {
      ar: [
        'تقليل وقت الاستجابة بنسبة 70%',
        'زيادة رضا العملاء إلى 95%',
        'تحسين كفاءة الفنيين بنسبة 50%',
        'معالجة +1000 طلب شهرياً'
      ],
      en: [
        '70% reduction in response time',
        '95% customer satisfaction rate',
        '50% improvement in technician efficiency',
        '1000+ requests processed monthly'
      ]
    },
    challenges: {
      ar: [
        'تنسيق الفنيين في مناطق جغرافية واسعة',
        'ضمان التواصل الفوري بين جميع الأطراف',
        'تحسين خوارزمية توزيع المهام'
      ],
      en: [
        'Coordinating technicians across wide geographic areas',
        'Ensuring instant communication between all parties',
        'Optimizing task distribution algorithm'
      ]
    },
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
    status: 'completed',
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
