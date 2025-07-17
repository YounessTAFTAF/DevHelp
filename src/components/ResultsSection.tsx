import { TrendingUp, Users, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ResultsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth Increase",
      description: "Our clients see significant growth within the first 6 months"
    },
    {
      icon: Users,
      number: "150+",
      label: "Businesses Accelerated",
      description: "From startups to enterprises, we've powered their growth"
    },
    {
      icon: Zap,
      number: "48h",
      label: "Average Response Time",
      description: "Quick turnaround on projects and communications"
    },
    {
      icon: Target,
      number: "95%",
      label: "Client Satisfaction",
      description: "Long-term partnerships built on results and trust"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Revolution",
      client: "Fashion Startup",
      result: "400% Revenue Growth",
      description: "Transformed a small fashion brand into a market leader with strategic web development and growth optimization.",
      metrics: ["400% revenue increase", "250% traffic growth", "60% conversion improvement"],
      category: "E-commerce"
    },
    {
      title: "SaaS Acceleration",
      client: "Tech Company",
      result: "10x User Acquisition",
      description: "Scaled a B2B SaaS platform from 1K to 10K users through strategic digital transformation and optimization.",
      metrics: ["10x user growth", "300% retention rate", "50% cost reduction"],
      category: "SaaS"
    },
    {
      title: "Digital Transformation",
      client: "Manufacturing Firm",
      result: "200% Efficiency Gain",
      description: "Modernized operations with custom solutions, resulting in streamlined processes and significant cost savings.",
      metrics: ["200% efficiency gain", "40% cost reduction", "90% automation"],
      category: "Enterprise"
    }
  ];

  return (
    <section id="results" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results.
              <br />
              <span className="text-primary">Real Impact.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our success is measured by your growth. Here's the proof that our acceleration approach delivers 
              transformational results for businesses of all sizes.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center group hover:shadow-elevation smooth-transition border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Success Stories</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elevation smooth-transition border-border/50 hover:border-primary/20 bg-card/90 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        {study.category}
                      </span>
                      <h4 className="font-bold text-lg mb-2">{study.title}</h4>
                      <div className="text-sm text-muted-foreground mb-2">{study.client}</div>
                      <div className="text-xl font-bold text-primary mb-4">{study.result}</div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <ul className="space-y-2">
                      {study.metrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          <span className="text-muted-foreground">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                "DevHelp didn't just build us a website — they accelerated our entire business. 
                Their strategic approach and innovative solutions transformed how we operate and grow."
              </blockquote>
              <div className="text-sm text-muted-foreground mb-4">Our Leaders :</div>

              {/* Container for names and titles */}
              <div className="flex justify-center gap-x-12">
                {/* First Person */}
                <div className="flex flex-col items-center">
                  <div className="font-semibold">Mouad EL OTMANI</div>
                  <div className="text-sm text-muted-foreground">CEO, DevHelp</div>
                </div>

                {/* Second Person */}
                <div className="flex flex-col items-center">
                  <div className="font-semibold">Youness TAFTAF</div>
                  <div className="text-sm text-muted-foreground">Co-Founder</div>
                </div>

                {/* Third Person */}
                <div className="flex flex-col items-center">
                  <div className="font-semibold">Fahd SBIYAA</div>
                  <div className="text-sm text-muted-foreground">Co-Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};