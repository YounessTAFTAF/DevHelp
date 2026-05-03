import { motion } from "framer-motion";
import { TrendingUp, Target, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: TrendingUp,
      title: t('about.feature1.title'),
      description: t('about.feature1.desc')
    },
    {
      icon: Lightbulb,
      title: t('about.feature2.title'),
      description: t('about.feature2.desc')
    },
    {
      icon: Target,
      title: t('about.feature3.title'),
      description: t('about.feature3.desc')
    },
    {
      icon: Rocket,
      title: t('about.feature4.title'),
      description: t('about.feature4.desc')
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 light-mode-title-glow">
              {t('about.title1')}
              <br />
              <span className="text-primary">{t('about.title2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                className="flex h-full will-change-transform"
              >
              <Card 
                className="w-full group hover:shadow-elevation smooth-transition border-border/50 hover:border-primary/20 bg-card/95 light-mode-card-glow"
              >
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary smooth-transition">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">{feature.description}</p>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>

          {/* Story Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
            className="bg-card border border-border/50 rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary light-mode-title-glow">
                  {t('about.story.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('about.story.p1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.story.p2')}
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/70f04660-923c-41b9-b8fb-e630759e214e.png"
                  alt="Digital Marketing Agency - DevHelp Growth Accelerator"
                  className="w-full h-auto rounded-2xl shadow-elevation hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};