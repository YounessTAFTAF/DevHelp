import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Target, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import mouadImg from "@/assets/youness.jpeg";
import younessImg from "@/assets/mouad.webp";

export const ResultsSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: TrendingUp,
      number: t('results.stat1.number'),
      label: t('results.stat1.label'),
      description: t('results.stat1.desc')
    },
    {
      icon: Users,
      number: t('results.stat2.number'),
      label: t('results.stat2.label'),
      description: t('results.stat2.desc')
    },
    {
      icon: Zap,
      number: t('results.stat3.number'),
      label: t('results.stat3.label'),
      description: t('results.stat3.desc')
    },
    {
      icon: Target,
      number: t('results.stat4.number'),
      label: t('results.stat4.label'),
      description: t('results.stat4.desc')
    }
  ];

  const caseStudies = [
    {
      title: t('results.case1.title'),
      client: t('results.case1.client'),
      result: t('results.case1.result'),
      description: t('results.case1.desc'),
      metrics: [t('results.case1.metric1'), t('results.case1.metric2'), t('results.case1.metric3')],
      category: t('results.case1.category')
    },
    {
      title: t('results.case2.title'),
      client: t('results.case2.client'),
      result: t('results.case2.result'),
      description: t('results.case2.desc'),
      metrics: [t('results.case2.metric1'), t('results.case2.metric2'), t('results.case2.metric3')],
      category: t('results.case2.category')
    },
    {
      title: t('results.case3.title'),
      client: t('results.case3.client'),
      result: t('results.case3.result'),
      description: t('results.case3.desc'),
      metrics: [t('results.case3.metric1'), t('results.case3.metric2'), t('results.case3.metric3')],
      category: t('results.case3.category')
    }
  ];

  return (
    <section id="results" className="py-20 lg:py-32 bg-secondary/30">
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
              {t('results.title1')}
              <br />
              <span className="text-primary">{t('results.title2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('results.subtitle')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                className="flex h-full will-change-transform"
              >
              <Card 
                className="w-full text-center group hover:shadow-elevation smooth-transition border-border/50 hover:border-primary/20 bg-card/95 light-mode-card-glow"
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="font-semibold mb-2">{stat.label}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{stat.description}</p>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
              className="text-2xl md:text-3xl font-bold text-center mb-12 light-mode-title-glow"
            >
              {t('results.caseStudies.title')}
            </motion.h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
            className="bg-card border border-border/50 rounded-2xl p-8 lg:p-12"
          >
            {/* Testimonial Quote */}
            <div className="text-center mb-10">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-muted-foreground leading-relaxed italic text-lg max-w-3xl mx-auto">
                "{t('results.team.quote')}"
              </blockquote>
            </div>

            {/* Team Members */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={mouadImg} alt="Mouad EL OTMANI" className="object-cover" />
                  <AvatarFallback className="text-2xl font-bold text-primary">ME</AvatarFallback>
                </Avatar>
                <div className="font-semibold text-lg">{t('results.team.person1.name')}</div>
                <div className="text-sm text-muted-foreground">{t('results.team.person1.title')}</div>
              </div>
              <div className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={younessImg} alt="Youness TAFTAF" className="object-cover" />
                  <AvatarFallback className="text-2xl font-bold text-primary">YT</AvatarFallback>
                </Avatar>
                <div className="font-semibold text-lg">{t('results.team.person2.name')}</div>
                <div className="text-sm text-muted-foreground">{t('results.team.person2.title')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};