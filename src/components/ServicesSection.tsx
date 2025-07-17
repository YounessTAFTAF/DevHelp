import { Code, Globe, Zap, Rocket, BarChart3, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "From Idea to MVP",
      description: "Transform your vision into a market-ready product. We guide you through every step from concept validation to launch.",
      features: ["Strategy & Planning", "MVP Development", "Market Testing", "Launch Support"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Growth-Focused Web Dev",
      description: "High-performance websites and applications built for conversion and scalability. Every line of code drives growth.",
      features: ["Custom Development", "Performance Optimization", "Conversion Focus", "Mobile-First Design"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Modernize your digital presence with cutting-edge solutions that position you ahead of the competition.",
      features: ["Process Automation", "System Integration", "Digital Strategy", "Technology Consulting"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Growth Analytics",
      description: "Data-driven insights that fuel smart decisions. We turn your data into actionable growth strategies.",
      features: ["Performance Tracking", "Growth Metrics", "ROI Analysis", "Strategic Insights"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Scalable Infrastructure",
      description: "Build for the future with infrastructure that grows with your business. No limits, just possibilities.",
      features: ["Cloud Solutions", "Performance Scaling", "Security First", "Future-Proof Tech"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Excellence",
      description: "Mobile-first experiences that engage and convert. Your audience is mobile — your solution should be too.",
      features: ["Responsive Design", "Mobile Apps", "PWA Development", "Cross-Platform"],
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Acceleration</span> Programs
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We don't just deliver services — we deliver transformation. Each program is designed to accelerate 
              your growth and turn your vision into measurable results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elevation smooth-transition border-border/50 hover:border-primary/20 bg-card/90 backdrop-blur-sm overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary smooth-transition">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Accelerate Your Growth?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let's discuss how our acceleration programs can transform your business. 
                Book a discovery call and start your growth journey today.
              </p>
              <Button 
                onClick={scrollToContact}
                variant="secondary"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 smooth-transition font-semibold px-8 py-3 rounded-full"
              >
                Start Your Acceleration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};