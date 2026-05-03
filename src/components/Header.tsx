import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const Header = ({ isDark, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' }
  ];

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
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-brand-blue smooth-transition font-medium"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-brand-blue smooth-transition font-medium"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              {t('nav.results')}
            </button>
            <button 
              onClick={() => scrollToSection('packs')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              {t('nav.packs')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* CTA and Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="smooth-transition"
                >
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer ${language === lang.code ? 'bg-primary/10' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              className="bg-gradient-blue hover:shadow-glow-blue smooth-transition font-semibold text-white border-0"
            >
              {t('nav.bookCall')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="smooth-transition"
                >
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer ${language === lang.code ? 'bg-primary/10' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition font-medium w-full text-left"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition font-medium w-full text-left"
              >
                {t('nav.results')}
              </button>
              <button 
                onClick={() => scrollToSection('packs')}
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition font-medium w-full text-left"
              >
                {t('nav.packs')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition font-medium w-full text-left"
              >
                {t('nav.contact')}
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-primary hover:shadow-glow smooth-transition font-semibold"
                >
                  {t('nav.bookCall')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};