import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send, Calendar, MapPin, Clock, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
export const ContactSection = () => {
  const {
    toast
  } = useToast();
  const {
    t
  } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hi DevHelp! I'm interested in starting a project.
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Project Type:* ${formData.budget}
*Details:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212726551805?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecting to WhatsApp...",
      description: "Let's discuss your project on WhatsApp!"
    });

    setFormData({
      name: '',
      email: '',
      message: '',
      budget: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
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
              {t('contact.title1')}
              <br />
              <span className="text-primary">{t('contact.title2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
              className="will-change-transform"
            >
            <Card className="border-border/50 bg-card/95 h-full light-mode-card-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('contact.form.name')}
                      </label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" className="smooth-transition focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('contact.form.email')}
                      </label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="smooth-transition focus:border-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      {t('contact.form.budget')}
                    </label>
                    <Input id="budget" name="budget" type="text" value={formData.budget} onChange={handleChange} placeholder={t('contact.form.budgetSelect')} className="smooth-transition focus:border-primary" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder={t('contact.form.messagePlaceholder')} rows={6} className="smooth-transition focus:border-primary" />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow smooth-transition font-semibold py-3">
                    {t('contact.form.send')}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
              className="space-y-6 will-change-transform"
            >
              {/* Contact Details */}
              <Card className="border-border/50 bg-card/95 light-mode-card-glow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{t('contact.info.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">{t('contact.info.email')}</div>
                      <a href="mailto:devhelp.agency@gmail.com" className="text-muted-foreground hover:text-primary smooth-transition">
                        devhelp.agency@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">{t('contact.info.phone')}</div>
                      <a href="https://wa.me/212726551805" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">+212 726-551805</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Instagram</div>
                      <a href="https://instagram.com/devhelpagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">@devhelpagency</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">{t('contact.info.response')}</div>
                      <div className="text-muted-foreground">{t('contact.info.responseTime')}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border/50 bg-card/95 light-mode-card-glow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{t('contact.quickActions')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 smooth-transition" onClick={() => window.open('https://wa.me/212726551805?text=Hi!%20I%20would%20like%20to%20book%20a%20discovery%20call.', '_blank')}>
                    <Calendar className="w-4 h-4 mr-3 text-primary" />
                    {t('contact.actions.book')}
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 smooth-transition" onClick={() => window.location.href = 'tel:+212726551805'}>
                    <Phone className="w-4 h-4 mr-3" />
                    {t('contact.actions.call')}
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 smooth-transition" onClick={() => window.location.href = 'mailto:devhelp.agency@gmail.com?subject=Project Inquiry'}>
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    {t('contact.actions.email')}
                  </Button>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <div className="bg-gradient-primary rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">{t('contact.ready.title')}</h3>
                <p className="text-sm opacity-90 mb-4">
                  {t('contact.ready.subtitle')}
                </p>
                <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 smooth-transition font-semibold" onClick={() => window.location.href = "mailto:devhelp.agency@gmail.com?subject=Let's Start Today"}>
                  {t('contact.ready.button')}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};