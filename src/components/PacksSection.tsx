import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const PacksSection = () => {
  const { t } = useLanguage();

  return (
    <section id="packs" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight light-mode-title-glow">
            {t('packs.title1')}
            <span className="text-primary">{t('packs.title2')}</span>
          </h2>
          {/* Orange Separator line as requested */}
          <hr className="w-24 h-1 bg-primary mx-auto border-0 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BUSINESS PACK */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
            className="flex h-full"
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow smooth-transition w-full flex flex-col relative z-20 light-mode-card-glow">
            <CardHeader className="text-center pb-8 border-b border-border/50">
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                {t('packs.pack1.name')}
              </CardTitle>
              <div className="text-sm text-muted-foreground mb-6 h-10 flex items-center justify-center">
                {t('packs.pack1.target')}
              </div>
              <div className="text-4xl font-extrabold text-primary">
                {t('packs.pack1.price')}
              </div>
            </CardHeader>
            <CardContent className="pt-8 flex-grow">
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-muted-foreground text-left">{t(`packs.pack1.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8">
              <Button 
                onClick={() => window.open('https://wa.me/212660064287?text=Hi!%20I%20am%20interested%20in%20the%20BUSINESS%20PACK.', '_blank')}
                className="w-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground smooth-transition font-semibold py-6"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('contact.actions.book')}
              </Button>
            </CardFooter>
          </Card>
          </motion.div>

          {/* PACK PREMIUM */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
            className="flex h-full"
          >
            <Card className="border-primary/50 w-full relative bg-card/80 backdrop-blur-sm shadow-glow smooth-transition flex flex-col md:-translate-y-4 z-20 light-mode-card-glow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-glow">
              MOST POPULAR
            </div>
            <CardHeader className="text-center pb-8 border-b border-border/50">
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                {t('packs.pack2.name')}
              </CardTitle>
              <div className="text-sm text-muted-foreground mb-6 h-10 flex items-center justify-center">
                {t('packs.pack2.target')}
              </div>
              <div className="text-4xl font-extrabold text-primary">
                {t('packs.pack2.price')}
              </div>
            </CardHeader>
            <CardContent className="pt-8 flex-grow">
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-muted-foreground text-left">{t(`packs.pack2.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8">
              <Button 
                onClick={() => window.open('https://wa.me/212660064287?text=Hi!%20I%20am%20interested%20in%20the%20PACK%20PREMIUM.', '_blank')}
                className="w-full bg-gradient-primary hover:opacity-90 smooth-transition font-semibold py-6 text-primary-foreground border-0 shadow-glow"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('contact.actions.book')}
              </Button>
            </CardFooter>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
