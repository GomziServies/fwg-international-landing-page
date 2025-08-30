import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    {
      id: 1,
      before: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Rajesh Kumar",
      location: "Toronto, Canada",
      result: "Lost 25kg in 6 months"
    },
    {
      id: 2,
      before: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Priya Sharma",
      location: "London, UK",
      result: "Gained 12kg muscle mass"
    },
    {
      id: 3,
      before: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Amit Patel",
      location: "Dubai, UAE",
      result: "Reversed diabetes in 8 months"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations?.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleBookDemo = () => {
    document.getElementById('demo-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    document.getElementById('consultation-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-green-50 min-h-screen flex items-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Transformation Carousel */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-testimonial p-8 lg:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Real Transformations</h3>
                <p className="text-base text-muted-foreground">Indians abroad achieving their goals</p>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <div className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {transformations?.map((transformation) => (
                    <div key={transformation?.id} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="relative overflow-hidden rounded-lg h-72 mb-4">
                            <Image
                              src={transformation?.before}
                              alt={`${transformation?.name} before transformation`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-base font-medium text-red-600">Before</span>
                        </div>
                        <div className="text-center">
                          <div className="relative overflow-hidden rounded-lg h-72 mb-4">
                            <Image
                              src={transformation?.after}
                              alt={`${transformation?.name} after transformation`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-primary">After</span>
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <h4 className="text-xl font-semibold text-foreground mb-2">{transformation?.name}</h4>
                        <p className="text-base text-muted-foreground">{transformation?.location}</p>
                        <p className="text-lg font-medium text-primary mt-2">{transformation?.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {transformations?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Hero Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                🇮🇳 Designed for Indians Abroad
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                Transform Your Body, Transform Your Life – Now for
                <span className="text-primary"> Indians Abroad</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-8">
                Why pay 3x higher abroad when you can access India’s trusted transformation studio?
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get proven results from <strong className="text-primary">16,000+ transformations</strong> with India-specific diet plans,
              flexible time zones, and coaching that understands your lifestyle abroad.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Pay in Indian Rupees (INR)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Indian Diet Customization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Flexible Time Zones</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">1-on-1 Zoom Sessions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleBookDemo}
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Book Free Demo PT
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleBookConsultation}
                iconName="Calendar"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;