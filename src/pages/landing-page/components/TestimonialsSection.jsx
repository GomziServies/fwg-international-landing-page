import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [floatingNotifications, setFloatingNotifications] = useState([]);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Toronto, Canada',
      flag: '🇨🇦',
      program: 'Weight Loss',
      beforeImage: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=300',
      result: 'Lost 22 kg in 8 months',
      testimonial: `Living in Toronto, I was spending $300/month on a local trainer who didn't understand my vegetarian diet. FWG's coaches created meal plans with dal, sabzi, and roti that actually worked! The Zoom sessions fit perfectly with my work schedule, and I saved over $2000 while achieving my dream body.`,
      rating: 5,
      videoThumbnail: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=400',
      savings: '$2,400',
      timeline: '8 months'
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      location: 'Dubai, UAE',
      flag: '🇦🇪',
      program: 'Muscle Gain',
      beforeImage: 'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=300',
      result: 'Gained 12 kg lean muscle',
      testimonial: `Dubai gym memberships cost AED 500+ monthly, and personal trainers were AED 200 per session. FWG's program cost me less than what I'd spend in 2 weeks here! The coaches understood my Gujarati food preferences and created high-protein plans with dhokla, paneer, and sprouts. Amazing results!`,
      rating: 5,
      videoThumbnail: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
      savings: 'AED 3,600',
      timeline: '10 months'
    },
    {
      id: 3,
      name: 'Anita Reddy',
      location: 'London, UK',
      flag: '🇬🇧',
      program: 'Clinical Nutrition',
      beforeImage: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/6975462/pexels-photo-6975462.jpeg?auto=compress&cs=tinysrgb&w=300',
      result: 'PCOS symptoms reduced by 80%',
      testimonial: `After struggling with PCOS for years in London, local nutritionists charged £80 per session and didn't understand Indian spices' benefits. FWG's clinical nutrition program included turmeric, fenugreek, and traditional remedies. My hormones balanced, periods regularized, and I feel amazing!`,rating: 5,videoThumbnail: 'https://images.pexels.com/photos/6975462/pexels-photo-6975462.jpeg?auto=compress&cs=tinysrgb&w=400',savings: '£1,800',timeline: '6 months'
    },
    {
      id: 4,
      name: 'Vikram Singh',location: 'Sydney, Australia',flag: '🇦🇺',program: 'Competition Prep',
      beforeImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300',afterImage: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300',result: '1st Place Men\'s Physique',
      testimonial: `Preparing for competitions in Sydney would have cost me AUD 400+ weekly for coaching and meal prep. FWG's prep coaches guided me through peak week with Indian-style meal timing and posing practice via Zoom. Won my first competition and saved thousands! The cultural understanding made all the difference.`,
      rating: 5,
      videoThumbnail: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',savings: 'AUD 4,800',timeline: '16 weeks'
    },
    {
      id: 5,
      name: 'Meera Joshi',location: 'New York, USA',flag: '🇺🇸',program: 'Weight Loss',
      beforeImage: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=300',afterImage: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=300',result: 'Lost 18 kg, reversed diabetes',
      testimonial: `Manhattan personal trainers wanted $250 per session, and nutritionists charged $200 for meal plans I couldn't follow. FWG created a program with Indian breakfast options like poha and upma. My diabetes is now under control, and I've never felt better. Best investment ever!`,rating: 5,videoThumbnail: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=400',savings: '$3,200',timeline: '9 months'
    }
  ];

  const whatsappMessages = [
    { name: 'Rohit K.', location: 'Singapore', message: 'Down 15kg in 5 months! Thank you team! 🙏', time: '2 min ago' },
    { name: 'Kavya M.', location: 'Melbourne', message: 'Finally fit into my wedding lehenga! ❤️', time: '5 min ago' },
    { name: 'Arjun P.', location: 'Vancouver', message: 'Best decision ever! Saved $2000+ 💰', time: '8 min ago' },
    { name: 'Sneha R.', location: 'Frankfurt', message: 'PCOS symptoms completely gone! 🎉', time: '12 min ago' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      const randomMessage = whatsappMessages?.[Math.floor(Math.random() * whatsappMessages?.length)];
      const newNotification = {
        id: Date.now(),
        ...randomMessage
      };
      
      setFloatingNotifications(prev => [...prev?.slice(-2), newNotification]);
      
      setTimeout(() => {
        setFloatingNotifications(prev => prev?.filter(n => n?.id !== newNotification?.id));
      }, 5000);
    }, 3000);

    return () => clearInterval(notificationInterval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentClient = testimonials?.[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Floating WhatsApp Notifications */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        {floatingNotifications?.map((notification) => (
          <div
            key={notification?.id}
            className="bg-green-500 text-white p-3 rounded-lg shadow-lg max-w-xs animate-slide-in-right"
          >
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="MessageCircle" size={16} />
              <span className="font-medium text-sm">{notification?.name}</span>
              <span className="text-xs opacity-75">{notification?.location}</span>
            </div>
            <p className="text-sm">{notification?.message}</p>
            <span className="text-xs opacity-75">{notification?.time}</span>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Real Stories, Real{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Transformations
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how Indians living abroad achieved their fitness goals while saving thousands on local trainers
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-testimonial p-8 border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Image
                      src={currentClient?.beforeImage}
                      alt="Before transformation"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={currentClient?.afterImage}
                      alt="After transformation"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-4 left-4 bg-success text-white px-3 py-1 rounded-lg text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Video Testimonial Preview */}
                <div className="mt-4 relative">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={currentClient?.videoThumbnail}
                      alt="Video testimonial"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group">
                        <Icon name="Play" size={24} color="#EF7F1B" className="ml-1 group-hover:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-xs">
                    Video Testimonial
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{currentClient?.flag}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{currentClient?.name}</h3>
                    <p className="text-text-secondary">{currentClient?.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-xl">
                    <span className="font-semibold">{currentClient?.program}</span>
                  </div>
                  <div className="bg-success/10 text-success px-4 py-2 rounded-xl">
                    <span className="font-semibold">{currentClient?.result}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentClient?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} color="#EF7F1B" className="fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-text-secondary leading-relaxed mb-6 italic">
                  "{currentClient?.testimonial}"
                </blockquote>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-success/5 p-4 rounded-xl border border-success/20">
                    <div className="text-2xl font-bold text-success">{currentClient?.savings}</div>
                    <div className="text-sm text-text-secondary">Total Savings</div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
                    <div className="text-2xl font-bold text-primary">{currentClient?.timeline}</div>
                    <div className="text-sm text-text-secondary">Timeline</div>
                  </div>
                </div>

                {/* WhatsApp Message Preview */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MessageCircle" size={16} color="#22C55E" />
                    <span className="text-sm font-medium text-green-700">Recent WhatsApp Message</span>
                  </div>
                  <p className="text-sm text-green-600 italic">
                    "Thank you so much! I never thought I could achieve this while living abroad. The cultural understanding and support made all the difference! 🙏"
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>

              <div className="flex space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: '16,000+', label: 'Total Transformations', icon: 'Users' },
            { number: '23', label: 'Countries Served', icon: 'Globe' },
            { number: '94%', label: 'Success Rate', icon: 'TrendingUp' },
            { number: '$2.8M+', label: 'Client Savings', icon: 'DollarSign' }
          ]?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} color="#EF7F1B" />
              </div>
              <div className="text-3xl font-bold text-text-primary mb-2">{metric?.number}</div>
              <div className="text-text-secondary">{metric?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;