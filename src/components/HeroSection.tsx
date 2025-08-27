import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Sparkles, Rocket } from 'lucide-react';
import heroImage from '@/assets/hero-tech-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* خلفية الصورة */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* طبقة تراكب ملونة */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* شارة */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary ml-2" />
            <span className="text-sm text-primary font-medium">فريق تكنولوجيا المعلومات المتقدم</span>
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in delay-200">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              نبني المستقبل
            </span>
            <br />
            <span className="text-foreground">بالتكنولوجيا</span>
          </h1>

          {/* الوصف */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400">
            فريق متخصص في تطوير الحلول التقنية المبتكرة والأنظمة الذكية لشركة العزب. 
            نحول رؤيتك التقنية إلى واقع رقمي متطور يواكب أحدث التطورات العالمية.
          </p>

          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-600">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Rocket className="w-5 h-5 ml-2" />
              اكتشف مشاريعنا
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
            
            <Button variant="outline" size="lg" className="group hover:bg-primary/5 transition-all duration-300">
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              شاهد أعمالنا
            </Button>
          </div>

          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50 animate-fade-in delay-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">تقنية متطورة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">دعم فني</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;