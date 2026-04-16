import { Code, Globe, Zap, Rocket, BarChart3, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Rocket,
      title: t('services.service1.title'),
      description: t('services.service1.desc'),
      features: [t('services.service1.feature1'), t('services.service1.feature2'), t('services.service1.feature3'), t('services.service1.feature4')],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: t('services.service2.title'),
      description: t('services.service2.desc'),
      features: [t('services.service2.feature1'), t('services.service2.feature2'), t('services.service2.feature3'), t('services.service2.feature4')],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Globe,
      title: t('services.service3.title'),
      description: t('services.service3.desc'),
      features: [t('services.service3.feature1'), t('services.service3.feature2'), t('services.service3.feature3'), t('services.service3.feature4')],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: t('services.service4.title'),
      description: t('services.service4.desc'),
      features: [t('services.service4.feature1'), t('services.service4.feature2'), t('services.service4.feature3'), t('services.service4.feature4')],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: t('services.service5.title'),
      description: t('services.service5.desc'),
      features: [t('services.service5.feature1'), t('services.service5.feature2'), t('services.service5.feature3'), t('services.service5.feature4')],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: t('services.service6.title'),
      description: t('services.service6.desc'),
      features: [t('services.service6.feature1'), t('services.service6.feature2'), t('services.service6.feature3'), t('services.service6.feature4')],
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
              {t('services.title')} <span className="text-primary">{t('services.titleHighlight')}</span> {t('services.titleEnd')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
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
                {t('services.cta.title')}
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                {t('services.cta.subtitle')}
              </p>
              <Button 
                onClick={scrollToContact}
                variant="secondary"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 smooth-transition font-semibold px-8 py-3 rounded-full"
              >
                {t('services.cta.button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};