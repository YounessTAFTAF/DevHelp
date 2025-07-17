import { Mail, Phone, MapPin } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src="/lovable-uploads/0d76c7b6-2643-47e3-9f6b-cdc4815848eb.png" alt="DevHelp Logo" className="h-10 w-auto mb-5" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              We don't market — we accelerate growth. Transform your ideas into real results 
              through innovative web solutions and strategic guidance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a href="mailto:devhelpagency.it@gmail.com" className="text-muted-foreground hover:text-primary smooth-transition">
                  devhelpagency.it@gmail.com
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+212660064287" className="text-muted-foreground hover:text-primary smooth-transition">
                  +212 660-064287
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  About DevHelp
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('results')} className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">Web Development</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Digital Strategy</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Growth Analytics</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Mobile Solutions</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">MVP Development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} DevHelp. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary smooth-transition">
                Privacy Policy
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary smooth-transition">
                Terms of Service
              </button>
              <span className="text-primary font-medium">Growth Accelerator</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};