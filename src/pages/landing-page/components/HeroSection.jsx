import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onBookDemo, onJoinWhatsApp }) => {
  const [currentCount, setCurrentCount] = useState(15847);
  const [detectedLocation, setDetectedLocation] = useState('Your City');

  useEffect(() => {
    // Simulate real-time counter updates
    const interval = setInterval(() => {
      setCurrentCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    // Simulate location detection
    setTimeout(() => {
      const locations = ['Toronto', 'Dubai', 'London', 'Sydney', 'New York', 'Singapore'];
      setDetectedLocation(locations?.[Math.floor(Math.random() * locations?.length)]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 relative">
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Placeholder for video - using gradient background */}
          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Dynamic Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get World-Class Fitness Coaching at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Indian Prices
            </span>{' '}
            in {detectedLocation}
          </h1>

          {/* Value Proposition */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Pay ₹8,000/month instead of $200+ for local trainers
          </p>

          {/* Animated Counter */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <div className="flex items-center space-x-4">
                <Icon name="Users" size={32} color="#EF7F1B" />
                <div className="text-left">
                  <div className="text-3xl font-bold text-primary">
                    {currentCount?.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-300">Transformations Worldwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dual CTA Strategy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={onBookDemo}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-cta transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Book Free Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onJoinWhatsApp}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Join WhatsApp Community
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">247 clients online now</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Globe" size={16} color="#EF7F1B" />
                <span className="text-sm">Active in 23 countries</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="TrendingUp" size={16} color="#38A169" />
                <span className="text-sm">Live transformations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <Icon name="ChevronDown" size={32} color="white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;