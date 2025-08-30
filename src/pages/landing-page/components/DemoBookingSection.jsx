import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const DemoBookingSection = ({ onBookDemo }) => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    country: '',
    timezone: '',
    goal: '',
    experience: '',
    availability: '',
    whatsappOptIn: false
  });
  const [detectedTimezone, setDetectedTimezone] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [urgencyCount, setUrgencyCount] = useState(3);

  const countries = [
    { value: 'usa', label: 'United States 🇺🇸' },
    { value: 'canada', label: 'Canada 🇨🇦' },
    { value: 'uk', label: 'United Kingdom 🇬🇧' },
    { value: 'australia', label: 'Australia 🇦🇺' },
    { value: 'uae', label: 'UAE 🇦🇪' },
    { value: 'singapore', label: 'Singapore 🇸🇬' },
    { value: 'germany', label: 'Germany 🇩🇪' },
    { value: 'netherlands', label: 'Netherlands 🇳🇱' },
    { value: 'other', label: 'Other Country' }
  ];

  const goals = [
    { value: 'weight-loss', label: 'Weight Loss' },
    { value: 'weight-gain', label: 'Weight/Muscle Gain' },
    { value: 'clinical', label: 'Health Condition Management' },
    { value: 'competition', label: 'Competition Preparation' },
    { value: 'general', label: 'General Fitness' }
  ];

  const experiences = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' }
  ];

  const timeSlots = [
    { value: 'morning', label: 'Morning (6 AM - 10 AM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
    { value: 'evening', label: 'Evening (6 PM - 9 PM)' },
    { value: 'flexible', label: 'Flexible' }
  ];

  useEffect(() => {
    // Simulate timezone detection
    const timezone = Intl.DateTimeFormat()?.resolvedOptions()?.timeZone;
    setDetectedTimezone(timezone);

    // Simulate urgency counter
    const urgencyInterval = setInterval(() => {
      setUrgencyCount(prev => {
        if (prev <= 1) return Math.floor(Math.random() * 5) + 1;
        return prev - 1;
      });
    }, 30000);

    // Generate available slots based on timezone
    generateAvailableSlots();

    return () => clearInterval(urgencyInterval);
  }, [formData?.country]);

  const generateAvailableSlots = () => {
    const slots = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      
      const daySlots = [
        { time: '9:00 AM', available: Math.random() > 0.3 },
        { time: '2:00 PM', available: Math.random() > 0.4 },
        { time: '6:00 PM', available: Math.random() > 0.2 },
        { time: '8:00 PM', available: Math.random() > 0.5 }
      ];
      
      slots?.push({
        date: date?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        slots: daySlots
      });
    }
    
    setAvailableSlots(slots);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-progress form
    if (field === 'email' && value?.includes('@') && formStep === 1) {
      setTimeout(() => setFormStep(2), 500);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (formStep < 4) {
      setFormStep(formStep + 1);
    } else {
      // Final submission
      console.log('Form submitted:', formData);
      onBookDemo && onBookDemo(formData);
    }
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Let's Get Started
              </h3>
              <p className="text-text-secondary">
                Enter your email to begin your transformation journey
              </p>
            </div>
            <Input
              type="email"
              label="Email Address"
              placeholder="your.email@example.com"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              required
              className="text-lg"
            />
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="Shield" size={16} />
                <span className="text-sm font-medium">Your email is 100% secure and never shared</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Personal Details
              </h3>
              <p className="text-text-secondary">
                Help us personalize your experience
              </p>
            </div>
            <Input
              type="text"
              label="Full Name"
              placeholder="Enter your full name"
              value={formData?.name}
              onChange={(e) => handleInputChange('name', e?.target?.value)}
              required
            />
            <Input
              type="tel"
              label="WhatsApp Number"
              placeholder="+1 (555) 123-4567"
              description="We'll send you a confirmation via WhatsApp"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              required
            />
            <Select
              label="Current Country"
              placeholder="Select your country"
              options={countries}
              value={formData?.country}
              onChange={(value) => handleInputChange('country', value)}
              required
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Fitness Goals
              </h3>
              <p className="text-text-secondary">
                Tell us what you want to achieve
              </p>
            </div>
            <Select
              label="Primary Goal"
              placeholder="What's your main fitness goal?"
              options={goals}
              value={formData?.goal}
              onChange={(value) => handleInputChange('goal', value)}
              required
            />
            <Select
              label="Fitness Experience"
              placeholder="How experienced are you?"
              options={experiences}
              value={formData?.experience}
              onChange={(value) => handleInputChange('experience', value)}
              required
            />
            <Select
              label="Preferred Time"
              placeholder="When can you usually train?"
              options={timeSlots}
              value={formData?.availability}
              onChange={(value) => handleInputChange('availability', value)}
              required
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Choose Your Demo Slot
              </h3>
              <p className="text-text-secondary">
                Available times in your timezone: {detectedTimezone}
              </p>
            </div>
            <div className="grid gap-4 max-h-64 overflow-y-auto">
              {availableSlots?.map((day, dayIndex) => (
                <div key={dayIndex} className="border border-border rounded-xl p-4">
                  <h4 className="font-medium text-text-primary mb-3">{day?.date}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {day?.slots?.map((slot, slotIndex) => (
                      <button
                        key={slotIndex}
                        disabled={!slot?.available}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          slot?.available
                            ? 'bg-success/10 text-success border border-success/30 hover:bg-success/20' :'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                        }`}
                      >
                        {slot?.time}
                        {!slot?.available && <span className="block text-xs">Booked</span>}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-warning/10 rounded-xl p-4 border border-warning/30">
              <div className="flex items-center space-x-2 text-warning">
                <Icon name="Clock" size={16} />
                <span className="text-sm font-medium">
                  Only {urgencyCount} slots remaining this week in your timezone!
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="demo-booking" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Book Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Free Demo Session
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience our coaching style with a complimentary 30-minute session tailored to your goals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo Benefits */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-cta border border-border">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  What You'll Get in Your Free Demo:
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: 'UserCheck',
                      title: 'Personal Assessment',
                      description: 'Complete fitness and nutrition evaluation tailored to your lifestyle abroad'
                    },
                    {
                      icon: 'Target',
                      title: 'Goal Setting Session',
                      description: 'Define clear, achievable targets with realistic timelines for your situation'
                    },
                    {
                      icon: 'Utensils',
                      title: 'Sample Meal Plan',
                      description: 'Get a 3-day Indian meal plan using ingredients available in your country'
                    },
                    {
                      icon: 'Dumbbell',
                      title: 'Custom Workout Preview',
                      description: 'Experience a mini-workout session designed for your fitness level and space'
                    },
                    {
                      icon: 'Calculator',
                      title: 'Cost Comparison Analysis',
                      description: 'See exactly how much you\'ll save compared to local trainers and nutritionists'
                    },
                    {
                      icon: 'MessageCircle',
                      title: 'WhatsApp Community Access',
                      description: 'Join our exclusive group of Indians abroad for ongoing support and motivation'
                    }
                  ]?.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name={benefit?.icon} size={16} color="#38A169" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">{benefit?.title}</h4>
                        <p className="text-sm text-text-secondary">{benefit?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Client testimonial"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-text-primary">Priya S.</div>
                    <div className="text-sm text-text-secondary">Toronto, Canada</div>
                  </div>
                </div>
                <p className="text-text-secondary italic">
                  "The free demo convinced me immediately. They understood my challenges as an Indian living in Canada and created a plan that actually worked with my lifestyle. Best decision ever!"
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-3xl shadow-testimonial p-8 border border-border">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3, 4]?.map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step <= formStep
                        ? 'bg-primary text-white' :'bg-gray-200 text-gray-500'
                    }`}>
                      {step < formStep ? <Icon name="Check" size={16} /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`w-8 h-1 mx-2 ${
                        step < formStep ? 'bg-primary' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {renderFormStep()}
                
                <div className="mt-8 space-y-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-cta"
                  >
                    {formStep === 4 ? 'Confirm Demo Booking' : 'Continue'}
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  
                  {formStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      fullWidth
                      onClick={() => setFormStep(formStep - 1)}
                    >
                      <Icon name="ArrowLeft" size={20} className="mr-2" />
                      Back
                    </Button>
                  )}
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Shield" size={14} color="#38A169" />
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} color="#38A169" />
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="X" size={14} color="#38A169" />
                    <span>No Commitment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingSection;