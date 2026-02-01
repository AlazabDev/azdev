import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { language, isRTL, t } = useLanguage();
  const isEven = index % 2 === 0;
  
  // Determine order based on RTL and even/odd
  const imageOnRight = isRTL ? !isEven : isEven;

  return (
    <div className="group relative">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
        {/* Text Content */}
        <div className={`${imageOnRight ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm text-primary font-medium">
              {language === 'ar' ? project.category.ar : project.category.en}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            {language === 'ar' ? project.title.ar : project.title.en}
          </h3>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'ar' ? project.shortDescription.ar : project.shortDescription.en}
          </p>
          
          {/* Features Tags */}
          <div className="flex flex-wrap gap-2">
            {(language === 'ar' ? project.features.ar : project.features.en).slice(0, 3).map((feature, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center px-3 py-2 rounded-lg bg-muted/50 border border-border/50"
              >
                <CheckCircle className={`w-4 h-4 text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to={`/projects/${project.slug}`}>
              <Button size="lg" className="group/btn">
                {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                )}
              </Button>
            </Link>
            {project.liveUrl && (
              <Button variant="outline" size="lg" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  {language === 'ar' ? 'زيارة الموقع' : 'Visit Site'}
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {/* Image Section */}
        <div className={`${imageOnRight ? 'lg:order-2' : 'lg:order-1'} relative`}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-glow transition-shadow duration-500">
            {/* Main Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
              <img 
                src={project.coverImage} 
                alt={language === 'ar' ? project.title.ar : project.title.en}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">
                    {(language === 'ar' ? project.results.ar : project.results.en)[0]?.split(' ')[0] || '100%'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'ar' ? 'معدل النجاح' : 'Success Rate'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status Badge */}
            <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
              <Badge 
                className={`${project.status === 'completed' ? 'bg-secondary/90 text-secondary-foreground' : 'bg-accent/90 text-accent-foreground'}`}
              >
                {project.status === 'completed' ? t('completed') : t('inProgress')}
              </Badge>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className={`absolute -z-10 ${isRTL ? '-left-4' : '-right-4'} -bottom-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20`}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
