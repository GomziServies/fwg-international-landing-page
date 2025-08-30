import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProblemSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [localCost, setLocalCost] = useState(250);
  const [showSavings, setShowSavings] = useState(false);

  const countryData = {
    usa: { flag: '🇺🇸', currency: '$', avgCost: 250, city: 'New York' },
    canada: { flag: '🇨🇦', currency: 'CAD', avgCost: 200, city: 'Toronto' },
    uk: { flag: '🇬🇧', currency: '£', avgCost: 180, city: 'London' },
    australia: { flag: '🇦🇺', currency: 'AUD', avgCost: 220, city: 'Sydney' },
    uae: { flag: '🇦🇪', currency: 'AED', avgCost: 300, city: 'Dubai' },
    singapore: { flag: '🇸🇬', currency: 'SGD', avgCost: 280, city: 'Singapore' }
  };

  const painPoints = [
    {
      icon: 'Clock',
      title: 'Timezone Nightmare',
      description: 'Gym hours don\'t match your work schedule. Training at 11 PM because that\'s when gyms are less crowded.'
    },
    {
      icon: 'DollarSign',
      title: 'Expensive Local Trainers',
      description: 'Paying $200-300/month for trainers who don\'t understand Indian dietary preferences or lifestyle.'
    },
    {
      icon: 'Utensils',
      title: 'Cultural Food Gap',
      description: 'Meal prep services cost $150/week and don\'t include dal, roti, or understand vegetarian Indian nutrition.'
    },
    {
      icon: 'Users',
      title: 'Isolation & Motivation',
      description: 'No community support. Local fitness groups don\'t relate to your cultural background and challenges.'
    }
  ];

  const handleCalculate = () => {
    setShowSavings(true);
  };

  const savings = localCost - 60; // ₹8000 ≈ $60
  const savingsPercentage = Math.round((savings / localCost) * 100);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            The Expensive Reality of Fitness Abroad
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Indians living abroad face unique fitness challenges that local solutions can't address
          </p>
        </div>

        {/* Interactive Cost Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-testimonial p-8 border border-border">
            <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
              Calculate Your Potential Savings
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Country Selection */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-4">
                  Select Your Country
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(countryData)?.map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedCountry(key);
                        setLocalCost(data?.avgCost);
                        setShowSavings(false);
                      }}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedCountry === key
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{data?.flag}</div>
                      <div className="text-sm font-medium">{data?.city}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cost Input */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-4">
                  Monthly Trainer Cost ({countryData?.[selectedCountry]?.currency})
                </label>
                <input
                  type="range"
                  min="100"
                  max="500"
                  value={localCost}
                  onChange={(e) => {
                    setLocalCost(parseInt(e?.target?.value));
                    setShowSavings(false);
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-text-secondary mt-2">
                  <span>{countryData?.[selectedCountry]?.currency}100</span>
                  <span className="font-bold text-xl text-primary">
                    {countryData?.[selectedCountry]?.currency}{localCost}
                  </span>
                  <span>{countryData?.[selectedCountry]?.currency}500</span>
                </div>
                
                <Button
                  variant="default"
                  onClick={handleCalculate}
                  className="w-full mt-4 bg-gradient-to-r from-primary to-accent"
                >
                  Calculate Savings
                </Button>
              </div>
            </div>

            {/* Savings Display */}
            {showSavings && (
              <div className="mt-8 p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl border border-success/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-success mb-2">
                    Save {countryData?.[selectedCountry]?.currency}{savings}/month
                  </div>
                  <div className="text-lg text-text-secondary mb-4">
                    That's {savingsPercentage}% savings with FWG International!
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="text-center">
                      <div className="text-sm text-text-secondary">Local Trainer</div>
                      <div className="text-xl font-bold text-error">
                        {countryData?.[selectedCountry]?.currency}{localCost}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-text-secondary">FWG International</div>
                      <div className="text-xl font-bold text-success">₹8,000 (~$60)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints?.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-cta hover:shadow-testimonial transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-error/10 to-warning/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Icon name={point?.icon} size={24} color="#E53E3E" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                {point?.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {point?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-text-secondary mb-6">
            Sound familiar? You're not alone. Thousands of Indians abroad face these exact challenges.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            See How We Solve This
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;