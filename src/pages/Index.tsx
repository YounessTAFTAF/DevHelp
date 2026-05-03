import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { PacksSection } from "@/components/PacksSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Global Interactive Mouse Follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full dark:mix-blend-screen z-0 opacity-50 dark:opacity-30 hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(var(--brand-orange) / 0.5) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full dark:mix-blend-screen z-0 opacity-30 dark:opacity-20 hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-30%",
          translateY: "-30%",
          background: "radial-gradient(circle, hsl(var(--brand-blue) / 0.4) 0%, transparent 70%)",
        }}
      />
      
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <PacksSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
