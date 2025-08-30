import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [selectedProgram, setSelectedProgram] = useState('weight-loss');

  const countries = {
    usa: { name: 'United States', flag: '🇺🇸', currency: '$', localCost: 280, city: 'New York' },
    canada: { name: 'Canada', flag: '🇨🇦', currency: 'CAD', localCost: 220, city: 'Toronto' },
    uk: { name: 'United Kingdom', flag: '🇬🇧', currency: '£', localCost: 200, city: 'London' },
    australia: { name: 'Australia', flag: '🇦🇺', currency: 'AUD', localCost: 250, city: 'Sydney' },
    uae: { name: 'UAE', flag: '🇦🇪', currency: 'AED', localCost: 350, city: 'Dubai' },
    singapore: { name: 'Singapore', flag: '🇸🇬', currency: 'SGD', localCost: 300, city: 'Singapore' }
  };

  const programs = {
    'weight-loss': { name: 'Weight Loss', price: 8000, duration: '6-12 months', sessions: 24 },
    'weight-gain': { name: 'Weight Gain', price: 9000, duration: '8-16 months', sessions: 32 },
    'clinical': { name: 'Clinical Nutrition', price: 10000, duration: '3-6 months', sessions: 18 },
    'competition': { name: 'Competition Prep', price: 12000, duration: '12-20 weeks', sessions: 20 }
  };

  const features = [
    'One-on-one Zoom coaching sessions',
    'Customized Indian meal plans',
    'Weekly progress tracking',
    '24/7 WhatsApp support',
    'Home & gym workout routines',
    'Supplement recommendations',
    'Cultural dietary guidance',
    'Festival season planning',
    'Progress tracking app access',
    'Community support group',
    'Recipe database access',
    'Monthly body composition analysis'
  ];

  const currentCountry = countries?.[selectedCountry];
  const currentProgram = programs?.[selectedProgram];
  const localMonthlyCost = currentCountry?.localCost;
  const fwgMonthlyCost = Math.round(currentProgram?.price / 12); // Convert annual to monthly
  const savings = localMonthlyCost - fwgMonthlyCost;
  const savingsPercentage = Math.round((savings / localMonthlyCost) * 100);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Premium Coaching at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Indian Prices
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get world-class fitness coaching for a fraction of what you'd pay local trainers abroad
          </p>
        </div>

        {/* Interactive Pricing Calculator */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-testimonial p-8 border border-border">
            <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
              Calculate Your Savings
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Country Selection */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-4">
                  Select Your Location
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(countries)?.map(([key, country]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCountry(key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedCountry === key
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{country?.flag}</div>
                      <div className="text-sm font-medium">{country?.city}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-4">
                  Choose Your Program
                </label>
                <div className="space-y-3">
                  {Object.entries(programs)?.map(([key, program]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedProgram(key)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        selectedProgram === key
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{program?.name}</div>
                          <div className="text-sm text-text-secondary">{program?.duration}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">₹{program?.price?.toLocaleString()}</div>
                          <div className="text-sm text-text-secondary">{program?.sessions} sessions</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Savings Comparison */}
            <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8 border border-success/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 border border-error/20">
                  <div className="text-sm text-text-secondary mb-2">Local Trainer in {currentCountry?.city}</div>
                  <div className="text-3xl font-bold text-error mb-2">
                    {currentCountry?.currency}{localMonthlyCost}
                  </div>
                  <div className="text-sm text-text-secondary">per month</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="X" size={16} color="#E53E3E" />
                      <span className="text-sm">No cultural understanding</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="X" size={16} color="#E53E3E" />
                      <span className="text-sm">Limited availability</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="X" size={16} color="#E53E3E" />
                      <span className="text-sm">Generic meal plans</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-success to-success/80 text-white rounded-xl p-6 transform scale-105 shadow-cta">
                  <div className="text-sm opacity-90 mb-2">FWG International</div>
                  <div className="text-3xl font-bold mb-2">
                    ₹{fwgMonthlyCost?.toLocaleString()}
                  </div>
                  <div className="text-sm opacity-90">per month</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} color="white" />
                      <span className="text-sm">Indian cultural expertise</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} color="white" />
                      <span className="text-sm">Flexible timezone scheduling</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} color="white" />
                      <span className="text-sm">Customized Indian meals</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-success/20">
                  <div className="text-sm text-text-secondary mb-2">Your Monthly Savings</div>
                  <div className="text-3xl font-bold text-success mb-2">
                    {currentCountry?.currency}{savings}
                  </div>
                  <div className="text-sm text-text-secondary">({savingsPercentage}% less)</div>
                  <div className="mt-4">
                    <div className="bg-success/10 rounded-lg p-3">
                      <div className="text-sm font-medium text-success">Annual Savings</div>
                      <div className="text-xl font-bold text-success">
                        {currentCountry?.currency}{(savings * 12)?.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Pricing Plans */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-cta">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">Basic Plan</h3>
                <p className="text-text-secondary mb-6">Perfect for beginners</p>
                <div className="text-4xl font-bold text-primary mb-2">₹6,000</div>
                <div className="text-text-secondary">per month</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="#38A169" />
                  <span className="text-sm">2 Zoom sessions per month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="#38A169" />
                  <span className="text-sm">Basic meal plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="#38A169" />
                  <span className="text-sm">WhatsApp support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="#38A169" />
                  <span className="text-sm">Progress tracking</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" fullWidth className="border-primary text-primary hover:bg-primary hover:text-white">
                Get Started
              </Button>
            </div>

            {/* Premium Plan (Most Popular) */}
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 shadow-testimonial transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-medium">
                Most Popular
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="opacity-90 mb-6">Complete transformation package</p>
                <div className="text-4xl font-bold mb-2">₹8,000</div>
                <div className="opacity-90">per month</div>
              </div>
              
              <div className="space-y-4 mb-8">
                {features?.slice(0, 8)?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} color="white" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="secondary" size="lg" fullWidth className="bg-white text-primary hover:bg-gray-100">
                Start Transformation
              </Button>
            </div>

            {/* Elite Plan */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-cta">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">Elite Plan</h3>
                <p className="text-text-secondary mb-6">For serious athletes</p>
                <div className="text-4xl font-bold text-primary mb-2">₹12,000</div>
                <div className="text-text-secondary">per month</div>
              </div>
              
              <div className="space-y-4 mb-8">
                {features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} color="#38A169" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="#38A169" />
                  <span className="text-sm">Competition prep coaching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="#38A169" />
                  <span className="text-sm">Advanced analytics</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" fullWidth className="border-primary text-primary hover:bg-primary hover:text-white">
                Go Elite
              </Button>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-cta border border-border">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} color="#38A169" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">30-Day Money Back Guarantee</h3>
            <p className="text-text-secondary mb-6">
              Not satisfied with your results? Get a full refund within 30 days, no questions asked. We're confident in our proven system.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} color="#38A169" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} color="#38A169" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} color="#38A169" />
                <span>Full refund guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;