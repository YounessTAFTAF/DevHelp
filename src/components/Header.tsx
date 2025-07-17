import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const Header = ({ isDark, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={isDark ? "/lovable-uploads/3190bd35-ca13-432f-bf28-f86c245d7cf5.png" : "/lovable-uploads/0d76c7b6-2643-47e3-9f6b-cdc4815848eb.png"}
              alt="DevHelp Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
              className="smooth-transition"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:shadow-glow smooth-transition font-semibold"
            >
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition font-medium w-full text-left"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition font-medium w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-primary hover:shadow-glow smooth-transition font-semibold"
                >
                  Book Discovery Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};