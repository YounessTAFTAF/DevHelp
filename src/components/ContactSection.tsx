import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send, Calendar, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours to discuss your project."
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
  return <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build the
              <br />
              <span className="text-primary">Future Together</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to accelerate your growth? Let's discuss how we can transform your ideas into 
              measurable results. Your success story starts with a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Start Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" className="smooth-transition focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="smooth-transition focus:border-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Project Budget (Optional)
                    </label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full p-3 border border-input rounded-md bg-background smooth-transition focus:border-primary">
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and how we can help accelerate your growth..." rows={6} className="smooth-transition focus:border-primary" />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow smooth-transition font-semibold py-3">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Email Us</div>
                      <a href="mailto:devhelpagency.it@gmail.com" className="text-muted-foreground hover:text-primary smooth-transition">
                        devhelpagency.it@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <a href="tel:+212660064287" className="text-muted-foreground hover:text-primary smooth-transition">
                        +212 660-064287
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-muted-foreground">Within 48 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 smooth-transition" onClick={() => window.open('mailto:devhelpagency.it@gmail.com?subject=Discovery Call Request', '_blank')}>
                    <Calendar className="w-4 h-4 mr-3" />
                    Book Discovery Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 smooth-transition" onClick={() => window.open('tel:+212660064287', '_blank')}>
                    <Phone className="w-4 h-4 mr-3" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 smooth-transition" onClick={() => window.open('mailto:devhelpagency.it@gmail.com?subject=Project Inquiry', '_blank')}>
                    <Mail className="w-4 h-4 mr-3" />
                    Email Directly
                  </Button>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <div className="bg-gradient-primary rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Ready to Accelerate?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Join 150+ businesses that have transformed their growth with DevHelp.
                </p>
                <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 smooth-transition font-semibold" onClick={() => window.open('mailto:devhelpagency.it@gmail.com?subject=Let\'s Accelerate Growth', '_blank')}>
                  Let's Start Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};