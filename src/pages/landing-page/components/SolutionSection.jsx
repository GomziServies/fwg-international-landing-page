import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SolutionSection = () => {
  const [activeCoachingType, setActiveCoachingType] = useState('weight-loss');

  const coachingTypes = {
    'weight-loss': {
      title: 'Weight Loss Coaching',
      description: 'Sustainable fat loss with Indian meal plans',
      features: ['Customized Indian diet plans', 'Home workout routines', 'Weekly progress tracking', 'WhatsApp support'],
      image: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: { clients: '8,000+', avgLoss: '15-25 kg', timeline: '6-12 months' }
    },
    'muscle-gain': {
      title: 'Muscle Gain Program',
      description: 'Build lean muscle with vegetarian protein sources',
      features: ['High-protein Indian recipes', 'Strength training plans', 'Supplement guidance', 'Form correction'],
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: { clients: '5,500+', avgGain: '8-15 kg', timeline: '8-16 months' }
    },
    'clinical': {
      title: 'Clinical Nutrition',
      description: 'Medical nutrition therapy for health conditions',
      features: ['PCOS/PCOD management', 'Diabetes control', 'Thyroid optimization', 'Heart health'],
      image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: { clients: '4,000+', improvement: '85%', timeline: '3-6 months' }
    }
  };

  const solutionFeatures = [
    {
      icon: 'Video',
      title: 'Live Zoom Sessions',
      description: 'One-on-one coaching sessions scheduled in your timezone with HD video quality'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile App Access',
      description: 'Track progress, access meal plans, and connect with coaches via our mobile app'
    },
    {
      icon: 'Clock',
      title: 'Flexible Scheduling',
      description: 'Book sessions that work with your international work schedule and time zone'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp Support',
      description: '24/7 support through WhatsApp with quick responses from certified nutritionists'
    },
    {
      icon: 'Globe',
      title: 'Cultural Understanding',
      description: 'Coaches who understand Indian lifestyle, festivals, and dietary preferences'
    },
    {
      icon: 'CreditCard',
      title: 'INR Pricing',
      description: 'Pay in Indian Rupees with flexible payment options and no hidden charges'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Your Solution: Premium Coaching at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Indian Prices
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get world-class fitness coaching designed specifically for Indians living abroad, delivered through personalized Zoom sessions
          </p>
        </div>

        {/* Interactive Coaching Preview */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-testimonial p-8 border border-border">
            <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
              Experience Our Coaching Styles
            </h3>
            
            {/* Coaching Type Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(coachingTypes)?.map(([key, type]) => (
                <button
                  key={key}
                  onClick={() => setActiveCoachingType(key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeCoachingType === key
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-cta'
                      : 'bg-white border border-border text-text-secondary hover:border-primary/50'
                  }`}
                >
                  {type?.title}
                </button>
              ))}
            </div>

            {/* Active Coaching Content */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-text-primary mb-4">
                  {coachingTypes?.[activeCoachingType]?.title}
                </h4>
                <p className="text-lg text-text-secondary mb-6">
                  {coachingTypes?.[activeCoachingType]?.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {coachingTypes?.[activeCoachingType]?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={16} color="#38A169" />
                      </div>
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(coachingTypes?.[activeCoachingType]?.stats)?.map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-text-secondary capitalize">{key?.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-cta">
                  <Image
                    src={coachingTypes?.[activeCoachingType]?.image}
                    alt={coachingTypes?.[activeCoachingType]?.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group">
                      <Icon name="Play" size={24} color="#EF7F1B" className="ml-1 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-cta border border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutionFeatures?.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-cta hover:shadow-testimonial transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Icon name={feature?.icon} size={24} color="#EF7F1B" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                {feature?.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timezone Compatibility Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-3xl p-8 border border-secondary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Available in Your Timezone
              </h3>
              <p className="text-text-secondary">
                Our coaches are available across multiple time zones to accommodate your schedule
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { city: 'New York', time: '9:00 AM', available: true },
                { city: 'London', time: '2:00 PM', available: true },
                { city: 'Dubai', time: '6:00 PM', available: false },
                { city: 'Sydney', time: '12:00 AM', available: true }
              ]?.map((timezone, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 text-center ${
                    timezone?.available
                      ? 'border-success/30 bg-success/5' :'border-border bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-text-primary">{timezone?.city}</div>
                  <div className="text-sm text-text-secondary">{timezone?.time}</div>
                  <div className={`text-xs mt-1 ${
                    timezone?.available ? 'text-success' : 'text-text-secondary'
                  }`}>
                    {timezone?.available ? 'Available' : 'Busy'}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary"
              >
                Check Available Slots
                <Icon name="Calendar" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;