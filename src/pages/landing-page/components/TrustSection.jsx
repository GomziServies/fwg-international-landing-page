import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSection = () => {
  const [activeCountry, setActiveCountry] = useState(0);
  const [liveStats, setLiveStats] = useState({
    activeClients: 247,
    transformationsToday: 12,
    countriesOnline: 18
  });

  const countries = [
    { name: 'United States', flag: '🇺🇸', clients: 4200, cities: ['New York', 'San Francisco', 'Chicago', 'Los Angeles'] },
    { name: 'Canada', flag: '🇨🇦', clients: 2800, cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary'] },
    { name: 'United Kingdom', flag: '🇬🇧', clients: 2100, cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh'] },
    { name: 'Australia', flag: '🇦🇺', clients: 1900, cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'] },
    { name: 'UAE', flag: '🇦🇪', clients: 1600, cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'] },
    { name: 'Singapore', flag: '🇸🇬', clients: 1200, cities: ['Singapore'] },
    { name: 'Germany', flag: '🇩🇪', clients: 800, cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'] },
    { name: 'Netherlands', flag: '🇳🇱', clients: 600, cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht'] }
  ];

  const certifications = [
    {
      name: 'ACSM Certified',
      description: 'American College of Sports Medicine',
      icon: 'Award',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'NASM Certified',
      description: 'National Academy of Sports Medicine',
      icon: 'Shield',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Precision Nutrition',
      description: 'Level 1 & 2 Certified',
      icon: 'Star',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Clinical Nutrition',
      description: 'Medical Nutrition Therapy',
      icon: 'Heart',
      color: 'from-red-500 to-red-600'
    }
  ];

  const guarantees = [
    {
      title: '30-Day Money Back',
      description: 'Full refund if not satisfied',
      icon: 'RefreshCw',
      highlight: '100% Guaranteed'
    },
    {
      title: 'Results or Free Extension',
      description: 'Continue until you achieve goals',
      icon: 'Target',
      highlight: 'Success Promise'
    },
    {
      title: 'Cultural Understanding',
      description: 'Indian lifestyle & dietary expertise',
      icon: 'Users',
      highlight: 'Authentic Approach'
    },
    {
      title: 'International Support',
      description: '24/7 assistance across time zones',
      icon: 'Globe',
      highlight: 'Always Available'
    }
  ];

  const mediaLogos = [
    { name: 'Times of India', logo: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Hindustan Times', logo: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Economic Times', logo: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Indian Express', logo: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  useEffect(() => {
    const countryInterval = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % countries?.length);
    }, 3000);

    const statsInterval = setInterval(() => {
      setLiveStats(prev => ({
        activeClients: prev?.activeClients + Math.floor(Math.random() * 3) - 1,
        transformationsToday: prev?.transformationsToday + (Math.random() > 0.7 ? 1 : 0),
        countriesOnline: Math.min(23, prev?.countriesOnline + (Math.random() > 0.8 ? 1 : 0))
      }));
    }, 5000);

    return () => {
      clearInterval(countryInterval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Trusted by Indians{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of Indians living abroad who have transformed their lives with our proven coaching system
          </p>
        </div>

        {/* Live Stats Bar */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-16 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <div className="text-2xl font-bold text-primary">{liveStats?.activeClients}</div>
                <div className="text-sm text-text-secondary">Clients Online Now</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="TrendingUp" size={16} color="#38A169" />
              <div>
                <div className="text-2xl font-bold text-success">{liveStats?.transformationsToday}</div>
                <div className="text-sm text-text-secondary">Transformations Today</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Globe" size={16} color="#EF7F1B" />
              <div>
                <div className="text-2xl font-bold text-primary">{liveStats?.countriesOnline}</div>
                <div className="text-sm text-text-secondary">Countries Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Coverage Map */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-text-primary mb-8">
            Active in 23+ Countries
          </h3>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-testimonial border border-border">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Interactive Country List */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-6">
                  Our Global Community
                </h4>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {countries?.map((country, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        activeCountry === index
                          ? 'border-primary bg-primary/5 shadow-cta'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setActiveCountry(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{country?.flag}</span>
                          <div>
                            <div className="font-medium text-text-primary">{country?.name}</div>
                            <div className="text-sm text-text-secondary">
                              {country?.clients?.toLocaleString()} active clients
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-text-secondary">Major Cities:</div>
                          <div className="text-xs text-primary">
                            {country?.cities?.slice(0, 2)?.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Country Details */}
              <div className="bg-white rounded-2xl p-6 shadow-cta border border-border">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{countries?.[activeCountry]?.flag}</div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">
                    {countries?.[activeCountry]?.name}
                  </h4>
                  <p className="text-text-secondary">
                    {countries?.[activeCountry]?.clients?.toLocaleString()} Happy Clients
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">Active Cities:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {countries?.[activeCountry]?.cities?.map((city, cityIndex) => (
                        <div key={cityIndex} className="bg-primary/5 rounded-lg p-2 text-center">
                          <span className="text-sm text-primary font-medium">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-lg p-4 border border-success/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="TrendingUp" size={16} color="#38A169" />
                      <span className="text-sm font-medium text-success">Growing Community</span>
                    </div>
                    <p className="text-xs text-text-secondary">
                      Join hundreds of Indians in {countries?.[activeCountry]?.name} who are achieving their fitness goals with cultural understanding and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Credentials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-text-primary mb-8">
            International Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-cta hover:shadow-testimonial transition-all duration-300 border border-border group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${cert?.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon name={cert?.icon} size={24} color="white" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{cert?.name}</h4>
                <p className="text-sm text-text-secondary">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-text-primary mb-8">
            Our Guarantees to You
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees?.map((guarantee, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-cta hover:shadow-testimonial transition-all duration-300 border border-border group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon name={guarantee?.icon} size={24} color="#EF7F1B" />
                </div>
                <div className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                  {guarantee?.highlight}
                </div>
                <h4 className="font-bold text-text-primary mb-2">{guarantee?.title}</h4>
                <p className="text-sm text-text-secondary">{guarantee?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Featured In
          </h3>
          
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              {mediaLogos?.map((media, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={media?.logo}
                    alt={media?.name}
                    className="h-12 w-auto mx-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="text-xs text-text-secondary">{media?.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;