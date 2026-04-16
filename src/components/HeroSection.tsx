import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, MouseEvent as ReactMouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Mouse Follower */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-screen z-0 opacity-60 dark:opacity-30 hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(var(--brand-orange) / 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Zap className="absolute top-1/3 left-1/6 w-6 h-6 text-primary/30 animate-bounce" />
        <Rocket className="absolute top-1/2 right-1/6 w-8 h-8 text-primary/40 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 light-mode-title-glow"
          >
            {t('hero.title1')} <span className="text-primary">{t('hero.title2')}</span> —
            <br />
            {t('hero.title3')} <span className="bg-gradient-primary bg-clip-text text-transparent">{t('hero.title4')}</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow smooth-transition font-semibold text-lg px-8 py-6 rounded-full group"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition font-semibold text-lg px-8 py-6 rounded-full"
            >
              {t('hero.cta2')}
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};