import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    { label: 'Home', target: '#home', id: 'home' },
    { label: 'Programs', target: '#programs', id: 'programs' },
    { label: 'Success Stories', target: '#testimonials', id: 'testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);

      // Calculate scroll progress
      const totalHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    const handleSectionIntersection = () => {
      const sections = navigationItems?.map(item => ({
        id: item?.id,
        element: document.querySelector(item?.target)
      }))?.filter(section => section?.element);

      const currentSection = sections?.find(section => {
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    const debouncedScroll = debounce(() => {
      handleScroll();
      handleSectionIntersection();
    }, 16);

    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const scrollToSection = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookDemo = () => {
    const demoSection = document.querySelector('#demo-booking');
    if (demoSection) {
      const offsetTop = demoSection?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <nav  className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-1 bg-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('#hero')}
            >
              <div className="flex items-center space-x-3">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Dumbbell" size={24} color="white" strokeWidth={2.5} />
                </div> */}
                <img src="/assets/images/gomzi.webp" alt="FWG International Logo" className="h-12 w-auto" />
                {/* <div className="flex flex-col">
                  <span className="text-xl font-bold text-text-primary">FWG</span>
                  <span className="text-xs text-text-secondary font-medium">International</span>
                </div> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.target)}
                  className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === item?.id 
                      ? 'text-primary border-b-2 border-primary pb-1' :'text-text-secondary'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="default"
                size="default"
                onClick={handleBookDemo}
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-cta transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Your Transformation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                color="currentColor" 
              />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-1050 md:hidden"
            onClick={toggleMobileMenu}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-1100 md:hidden transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Icon name="Dumbbell" size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-text-primary">FWG</span>
                    <span className="text-xs text-text-secondary">International</span>
                  </div>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <Icon name="X" size={20} color="currentColor" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 py-6">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.id}
                    onClick={() => scrollToSection(item?.target)}
                    className={`w-full text-left px-6 py-4 text-lg font-medium transition-colors duration-200 hover:bg-muted hover:text-primary ${
                      activeSection === item?.id 
                        ? 'text-primary bg-primary/5 border-r-2 border-primary' :'text-text-secondary'
                    }`}
                  >
                    {item?.label}
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-border">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={handleBookDemo}
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-cta"
                >
                  Book Your Transformation
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StickyNavigation;