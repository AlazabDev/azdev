import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  CheckCircle, 
  ExternalLink, 
  Github, 
  Play,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateSEO } from '@/lib/seo';
import { getProjectBySlug, projects } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, isRTL, t } = useLanguage();
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const project = getProjectBySlug(slug || '');
  
  useEffect(() => {
    if (project) {
      updateSEO({
        title: `${language === 'ar' ? project.title.ar : project.title.en} | alazab.dev`,
        description: language === 'ar' ? project.shortDescription.ar : project.shortDescription.en,
      });
    }
    window.scrollTo(0, 0);
  }, [project, language]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}
          </h1>
          <Link to="/projects">
            <Button>{language === 'ar' ? 'العودة للمشاريع' : 'Back to Projects'}</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const allMedia = [
    ...project.gallery,
    ...(project.videos || [])
  ];
  
  const isVideo = (src: string) => src.endsWith('.mp4') || src.endsWith('.webm');
  
  const currentProjectIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : null;
  const nextProject = currentProjectIndex < projects.length - 1 ? projects[currentProjectIndex + 1] : null;
  
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className={`flex items-center gap-2 text-sm text-white/70`}>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>{isRTL ? '←' : '→'}</li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  {t('projects')}
                </Link>
              </li>
              <li>{isRTL ? '←' : '→'}</li>
              <li className="text-white font-medium">
                {language === 'ar' ? project.title.ar : project.title.en}
              </li>
            </ol>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                {language === 'ar' ? project.category.ar : project.category.en}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {language === 'ar' ? project.title.ar : project.title.en}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {language === 'ar' ? project.shortDescription.ar : project.shortDescription.en}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Calendar className="w-5 h-5" />
                  <span>{project.duration} {t('months')}</span>
                </div>
                <Badge className={`${project.status === 'completed' ? 'bg-secondary' : 'bg-accent'} text-white`}>
                  {project.status === 'completed' ? t('completed') : t('inProgress')}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {project.liveUrl && (
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {language === 'ar' ? 'زيارة الموقع' : 'Visit Website'}
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {language === 'ar' ? 'عرض الكود' : 'View Code'}
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                {isVideo(allMedia[0] || '') ? (
                  <video 
                    src={allMedia[0]} 
                    className="w-full h-full object-cover"
                    controls
                    poster={project.coverImage}
                  />
                ) : (
                  <img 
                    src={project.coverImage} 
                    alt={language === 'ar' ? project.title.ar : project.title.en}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'ar' ? 'نبذة عن المشروع' : 'About the Project'}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === 'ar' ? project.fullDescription.ar : project.fullDescription.en}
                </p>
              </div>
              
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <CheckCircle className={`w-6 h-6 text-secondary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  {t('keyFeatures')}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {(language === 'ar' ? project.features.ar : project.features.en).map((feature, idx) => (
                    <Card key={idx} className="p-4 bg-gradient-card hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Gallery */}
              {allMedia.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    {language === 'ar' ? 'معرض الصور والفيديوهات' : 'Gallery & Videos'}
                  </h2>
                  
                  {/* Main Preview */}
                  <div 
                    className="aspect-video rounded-2xl overflow-hidden mb-4 cursor-pointer bg-muted"
                    onClick={() => openLightbox(activeMediaIndex)}
                  >
                    {isVideo(allMedia[activeMediaIndex] || '') ? (
                      <video 
                        src={allMedia[activeMediaIndex]} 
                        className="w-full h-full object-cover"
                        controls
                      />
                    ) : (
                      <img 
                        src={allMedia[activeMediaIndex]} 
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Thumbnails */}
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                    {allMedia.map((media, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveMediaIndex(idx)}
                        className={`aspect-video rounded-lg overflow-hidden transition-all ${
                          activeMediaIndex === idx 
                            ? 'ring-2 ring-primary ring-offset-2' 
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        {isVideo(media) ? (
                          <div className="relative w-full h-full bg-muted">
                            <video src={media} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        ) : (
                          <img src={media} alt="" className="w-full h-full object-cover" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    {language === 'ar' ? 'التحديات والحلول' : 'Challenges & Solutions'}
                  </h2>
                  <div className="space-y-4">
                    {(language === 'ar' ? project.challenges.ar : project.challenges.en).map((challenge, idx) => (
                      <Card key={idx} className="p-4 bg-muted/30 border-border/50">
                        <p>{challenge}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card className="p-6 bg-gradient-card">
                <h3 className="text-lg font-bold mb-4">{t('technologiesUsed')}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
              
              {/* Results */}
              <Card className="p-6 bg-gradient-card">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'ar' ? 'النتائج المحققة' : 'Achieved Results'}
                </h3>
                <div className="space-y-3">
                  {(language === 'ar' ? project.results.ar : project.results.en).map((result, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Project Info */}
              <Card className="p-6 bg-gradient-card">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'ar' ? 'معلومات المشروع' : 'Project Info'}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('projectDuration')}</span>
                    <span className="font-medium">{project.duration} {t('months')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === 'ar' ? 'السنة' : 'Year'}</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === 'ar' ? 'الحالة' : 'Status'}</span>
                    <Badge className={project.status === 'completed' ? 'bg-secondary' : 'bg-accent'}>
                      {project.status === 'completed' ? t('completed') : t('inProgress')}
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation between projects */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link to={`/projects/${prevProject.slug}`}>
                <Button variant="ghost" className="group">
                  {isRTL ? (
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  )}
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <div className="text-xs text-muted-foreground">
                      {language === 'ar' ? 'المشروع السابق' : 'Previous Project'}
                    </div>
                    <div className="font-medium">
                      {language === 'ar' ? prevProject.title.ar : prevProject.title.en}
                    </div>
                  </div>
                </Button>
              </Link>
            ) : <div />}
            
            <Link to="/projects">
              <Button variant="outline">
                {language === 'ar' ? 'جميع المشاريع' : 'All Projects'}
              </Button>
            </Link>
            
            {nextProject ? (
              <Link to={`/projects/${nextProject.slug}`}>
                <Button variant="ghost" className="group">
                  <div className={isRTL ? 'text-left' : 'text-right'}>
                    <div className="text-xs text-muted-foreground">
                      {language === 'ar' ? 'المشروع التالي' : 'Next Project'}
                    </div>
                    <div className="font-medium">
                      {language === 'ar' ? nextProject.title.ar : nextProject.title.en}
                    </div>
                  </div>
                  {isRTL ? (
                    <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(prev => prev > 0 ? prev - 1 : allMedia.length - 1);
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(prev => prev < allMedia.length - 1 ? prev + 1 : 0);
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {isVideo(allMedia[lightboxIndex] || '') ? (
              <video 
                src={allMedia[lightboxIndex]} 
                className="w-full rounded-lg"
                controls
                autoPlay
              />
            ) : (
              <img 
                src={allMedia[lightboxIndex]} 
                alt=""
                className="w-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
