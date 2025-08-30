import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FooterCTA = ({ onBookDemo, onJoinWhatsApp }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const urgencyOffers = [
    {
      title: 'Limited Time: Free Nutrition Consultation',
      description: 'Book your demo today and get a complimentary 30-minute nutrition consultation worth ₹2,000',
      value: '₹2,000 Value',
      expires: 'Expires in 24 hours'
    }
  ];

  const quickTestimonials = [
    { name: 'Rahul M.', location: 'Toronto', message: 'Lost 18kg in 7 months! 🎉' },
    { name: 'Priya S.', location: 'Dubai', message: 'PCOS symptoms completely gone! ❤️' },
    { name: 'Vikram K.', location: 'London', message: 'Saved $3000 vs local trainers! 💰' },
    { name: 'Anita R.', location: 'Sydney', message: 'Best investment for my health! 🙏' }
  ];

  const socialProof = {
    totalClients: 16247,
    countriesServed: 23,
    successRate: 94,
    avgSavings: '$2400'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev?.seconds - 1;
        let newMinutes = prev?.minutes;
        let newHours = prev?.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newMinutes = 59;
          newSeconds = 59;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % quickTestimonials?.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(testimonialTimer);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Urgency Offer */}
        <div className="text-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Clock" size={20} color="#FFF" />
              <span className="text-lg font-semibold">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {urgencyOffers?.[0]?.title}
            </h2>
            
            <p className="text-xl opacity-90 mb-6">
              {urgencyOffers?.[0]?.description}
            </p>

            {/* Countdown Timer */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-white/20 rounded-lg px-4 py-2 min-w-[80px]">
                  {String(timeLeft?.hours)?.padStart(2, '0')}
                </div>
                <div className="text-sm mt-1 opacity-75">Hours</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-white/20 rounded-lg px-4 py-2 min-w-[80px]">
                  {String(timeLeft?.minutes)?.padStart(2, '0')}
                </div>
                <div className="text-sm mt-1 opacity-75">Minutes</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-white/20 rounded-lg px-4 py-2 min-w-[80px]">
                  {String(timeLeft?.seconds)?.padStart(2, '0')}
                </div>
                <div className="text-sm mt-1 opacity-75">Seconds</div>
              </div>
            </div>

            <div className="bg-warning/20 text-warning-foreground rounded-xl px-4 py-2 inline-block mb-6">
              <span className="font-semibold">{urgencyOffers?.[0]?.value}</span> • {urgencyOffers?.[0]?.expires}
            </div>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of Indians abroad who chose world-class coaching at Indian prices
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              variant="secondary"
              size="xl"
              onClick={onBookDemo}
              className="bg-white text-primary hover:bg-gray-100 shadow-cta transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Calendar" size={24} className="mr-3" />
              Book Free Demo Now
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={onJoinWhatsApp}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" size={24} className="mr-3" />
              Join WhatsApp Community
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>100% Free Demo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} />
              <span>16,000+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={16} />
              <span>23 Countries</span>
            </div>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {socialProof?.totalClients?.toLocaleString()}+
            </div>
            <div className="opacity-75">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {socialProof?.countriesServed}
            </div>
            <div className="opacity-75">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {socialProof?.successRate}%
            </div>
            <div className="opacity-75">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {socialProof?.avgSavings}
            </div>
            <div className="opacity-75">Average Savings</div>
          </div>
        </div>

        {/* Live Testimonial Feed */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Live Success Stories</span>
            </div>
            
            <div className="text-center">
              <div className="text-lg mb-2">
                <span className="font-semibold">{quickTestimonials?.[currentTestimonial]?.name}</span>
                <span className="opacity-75"> from {quickTestimonials?.[currentTestimonial]?.location}</span>
              </div>
              <div className="text-xl">{quickTestimonials?.[currentTestimonial]?.message}</div>
            </div>
          </div>
        </div>

        {/* Final Urgency Message */}
        <div className="text-center mt-12">
          <div className="bg-warning/20 backdrop-blur-sm rounded-xl p-4 border border-warning/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-warning-foreground">
              <Icon name="AlertTriangle" size={20} />
              <span className="font-semibold">
                Only 3 demo slots remaining this week in your timezone!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;