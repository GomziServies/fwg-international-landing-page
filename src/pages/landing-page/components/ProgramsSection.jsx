import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProgramsSection = () => {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const programs = [
    {
      id: 'weight-loss',
      title: 'Weight Loss Program',
      subtitle: 'Sustainable Fat Loss',
      description: 'Lose weight sustainably with Indian meal plans and home workouts designed for busy professionals abroad.',
      price: '₹8,000',
      originalPrice: '$200',
      duration: '6-12 months',
      successRate: '94%',
      features: [
        'Customized Indian diet plans',
        'Home & gym workout routines',
        'Weekly progress tracking',
        'WhatsApp nutrition support',
        'Meal prep guidance',
        'Festival season planning'
      ],
      beforeImage: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=300',
      icon: 'TrendingDown',
      color: 'from-success to-success/70',
      stats: { clients: '8,000+', avgLoss: '15-25 kg', timeline: '6-12 months' }
    },
    {
      id: 'weight-gain',
      title: 'Weight Gain Program',
      subtitle: 'Healthy Muscle Building',
      description: 'Build lean muscle mass with high-protein vegetarian Indian recipes and strength training plans.',
      price: '₹9,000',
      originalPrice: '$250',
      duration: '8-16 months',
      successRate: '89%',
      features: [
        'High-protein Indian recipes',
        'Strength training programs',
        'Supplement recommendations',
        'Form correction via video',
        'Bulk cooking strategies',
        'Vegetarian protein optimization'
      ],
      beforeImage: 'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=300',
      icon: 'TrendingUp',
      color: 'from-primary to-accent',
      stats: { clients: '5,500+', avgGain: '8-15 kg', timeline: '8-16 months' }
    },
    {
      id: 'prep-coaching',
      title: 'Competition Prep',
      subtitle: 'Elite Performance',
      description: 'Professional coaching for bodybuilding, powerlifting, and fitness competitions with precise nutrition timing.',
      price: '₹12,000',
      originalPrice: '$350',
      duration: '12-20 weeks',
      successRate: '96%',
      features: [
        'Peak week protocols',
        'Posing practice sessions',
        'Precise macro calculations',
        'Competition day strategy',
        'Mental preparation coaching',
        'Post-competition transition'
      ],
      beforeImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300',
      icon: 'Award',
      color: 'from-secondary to-secondary/70',
      stats: { clients: '1,200+', competitions: '500+', winners: '78%' }
    },
    {
      id: 'clinical-nutrition',
      title: 'Clinical Nutrition',
      subtitle: 'Medical Nutrition Therapy',
      description: 'Specialized nutrition plans for PCOS, diabetes, thyroid, and other health conditions with medical supervision.',
      price: '₹10,000',
      originalPrice: '$300',
      duration: '3-6 months',
      successRate: '91%',
      features: [
        'PCOS/PCOD management',
        'Diabetes control protocols',
        'Thyroid optimization',
        'Heart health nutrition',
        'Lab report analysis',
        'Medication interaction guidance'
      ],
      beforeImage: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/6975462/pexels-photo-6975462.jpeg?auto=compress&cs=tinysrgb&w=300',
      icon: 'Heart',
      color: 'from-warning to-warning/70',
      stats: { clients: '4,000+', improvement: '85%', conditions: '12+' }
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Transformation Journey
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Proven programs designed specifically for Indians living abroad, with results that speak for themselves
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs?.map((program) => (
            <div
              key={program?.id}
              className="bg-white rounded-3xl shadow-cta hover:shadow-testimonial transition-all duration-500 border border-border overflow-hidden group"
              onMouseEnter={() => setHoveredProgram(program?.id)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${program?.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name={program?.icon} size={24} color="white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{program?.successRate}</div>
                      <div className="text-sm opacity-90">Success Rate</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{program?.title}</h3>
                  <p className="text-lg opacity-90">{program?.subtitle}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {program?.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-success/5 to-primary/5 rounded-xl border border-success/20">
                  <div>
                    <div className="text-3xl font-bold text-success">{program?.price}</div>
                    <div className="text-sm text-text-secondary">per month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-error line-through">{program?.originalPrice}</div>
                    <div className="text-sm text-success font-medium">Save 70%</div>
                  </div>
                </div>

                {/* Before/After Images */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-text-secondary">Transformation Preview</span>
                    <span className="text-sm text-primary font-medium">{program?.duration}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Image
                        src={hoveredProgram === program?.id ? program?.afterImage : program?.beforeImage}
                        alt={hoveredProgram === program?.id ? 'After transformation' : 'Before transformation'}
                        className="w-full h-32 object-cover rounded-xl transition-all duration-500"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {hoveredProgram === program?.id ? 'After' : 'Before'}
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={hoveredProgram === program?.id ? program?.beforeImage : program?.afterImage}
                        alt={hoveredProgram === program?.id ? 'Before transformation' : 'After transformation'}
                        className="w-full h-32 object-cover rounded-xl transition-all duration-500"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {hoveredProgram === program?.id ? 'Before' : 'After'}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-text-secondary mt-2">
                    Hover to see transformation • Real client results
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">What's Included:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {program?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={12} color="#38A169" />
                        </div>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  {Object.entries(program?.stats)?.map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  className={`bg-gradient-to-r ${program?.color} hover:shadow-cta transform hover:-translate-y-0.5 transition-all duration-200`}
                >
                  See Detailed Results
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-text-secondary mb-6">
              Book a free consultation and let our experts recommend the perfect program based on your goals, lifestyle, and current location.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Get Personalized Recommendation
              <Icon name="MessageCircle" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;