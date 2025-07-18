import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import About from './components/About';
import PaymentMethods from './components/PaymentMethods';
import Footer from './components/Footer';
import UniverseStyles from './components/UniverseStyles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('elyntric-theme');
    if (saved) {
      setIsDarkMode(saved === 'dark');
    } else {
      // Set default to dark mode and save it
      setIsDarkMode(true);
      localStorage.setItem('elyntric-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('elyntric-theme', newMode ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const themeClass = isDarkMode ? 'dark' : '';

  return (
    <div className={`${themeClass} min-h-screen transition-colors duration-300`}>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        
        <Header 
          isDarkMode={isDarkMode}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          toggleTheme={toggleTheme}
          scrollToSection={scrollToSection}
        />

        <Hero />
        <TrustBadges />
        <About />
        <HowItWorks />
        <Reviews />
        <PaymentMethods />
        <div id="contact"></div>
        <Footer scrollToSection={scrollToSection} />
        
        <UniverseStyles />
      </div>
    </div>
  );
}

export default App;