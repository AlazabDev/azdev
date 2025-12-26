import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Sparkles, Rocket, Users, Zap, Code2, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactModal from './ContactModal';

const HeroSection = () => {
  const { t, language, isRTL } = useLanguage();

  const stats = [
    { value: '50+', label: t('projectsCompleted'), icon: Code2 },
    { value: '15+', label: t('advancedTech'), icon: Zap },
    { value: '24/7', label: t('techSupport'), icon: Users },
    { value: '100%', label: t('happyClients'), icon: Sparkles },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20" />
        
        {/* Hero Glow Effect */}
        <div className="hero-glow" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Cards */}
        <div className="absolute top-32 left-[10%] glass rounded-xl p-3 animate-float hidden lg:block hover:scale-110 transition-transform duration-300">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center animate-pulse">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Development</span>
              <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-primary rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-40 right-[10%] glass rounded-xl p-3 animate-float delay-300 hidden lg:block hover:scale-110 transition-transform duration-300">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center animate-pulse">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">AI Powered</span>
              <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-full bg-secondary rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-[15%] glass rounded-xl p-3 animate-float delay-500 hidden lg:block hover:scale-110 transition-transform duration-300">
          <div className="flex items-center gap-2">
            <div className="live-indicator">
              <span>LIVE</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-primary border-2 border-background animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">+1.2k users</span>
          </div>
        </div>

        <div className="absolute bottom-32 right-[15%] glass rounded-xl p-3 animate-float delay-200 hidden lg:block hover:scale-110 transition-transform duration-300">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center animate-bounce-subtle">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Team</span>
              <span className="text-sm font-semibold text-foreground">Active now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 animate-fade-in hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">{t('companySubtitle')}</span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in delay-100">
            <span className="text-gradient animate-gradient bg-[length:200%_auto]">{t('heroTitle')}</span>
            <br />
            <span className="text-foreground">{t('heroSubtitle')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in delay-200">
            {t('heroDescription')}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-300 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button 
              size="lg" 
              className="group bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 px-8"
            >
              <Rocket className={`w-5 h-5 transition-transform group-hover:scale-125 group-hover:rotate-12 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('heroButton1')}
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-2" />
              ) : (
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
              )}
            </Button>
            
            <ContactModal 
              trigger={
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-2 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 px-8"
                >
                  <Play className={`w-5 h-5 transition-transform group-hover:scale-125 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('heroButton2')}
                </Button>
              }
              title={t('contact')}
              description={t('contactDescription')}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in delay-500">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="stats-card group hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1 group-hover:animate-pulse">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
