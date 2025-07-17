import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Rocket } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Growth Accelerator</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
            We Don't <span className="text-primary">Market</span> —
            <br />
            We <span className="bg-gradient-primary bg-clip-text text-transparent">Accelerate Growth.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            DevHelp transforms your ideas into real results through innovative web solutions, 
            strategic guidance, and a performance-driven mindset. We're not just another agency — 
            we're your growth partner.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow smooth-transition font-semibold text-lg px-8 py-6 rounded-full group"
            >
              Let's Accelerate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition font-semibold text-lg px-8 py-6 rounded-full"
            >
              Book Discovery Call
            </Button>
          </div>

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