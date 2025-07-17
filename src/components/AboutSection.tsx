import { TrendingUp, Target, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description: "We don't just execute — we strategize. Every decision is backed by data and focused on measurable growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge solutions that set you apart from the competition. We turn your vision into digital reality."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every project is measured by impact. We deliver solutions that drive real business transformation."
    },
    {
      icon: Rocket,
      title: "Growth Acceleration",
      description: "From concept to scale — we accelerate your journey with proven methodologies and expert execution."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Beyond Marketing.
              <br />
              <span className="text-primary">Into Growth.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're not your typical digital marketing agency. DevHelp is a growth accelerator that transforms 
              ambitious ideas into market-leading realities through strategic innovation and flawless execution.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elevation smooth-transition border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  Transformation Through Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At DevHelp, we believe in the power of transformation. Every business has untapped potential, 
                  and our role is to unlock it through strategic digital solutions that don't just market — they accelerate.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines deep market insights, cutting-edge technology, and growth-focused execution 
                  to deliver results that matter. We're your partners in building the future.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/70f04660-923c-41b9-b8fb-e630759e214e.png"
                  alt="Digital Marketing Agency - DevHelp Growth Accelerator"
                  className="w-full h-auto rounded-2xl shadow-elevation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};