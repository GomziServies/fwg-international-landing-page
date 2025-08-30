import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: 'How do Zoom sessions work across different time zones?',
      answer: `Our coaches are available across multiple time zones to accommodate your schedule. We have trainers working in IST, EST, GMT, and AEST time zones. During booking, you'll see available slots in your local time, and our system automatically coordinates with your assigned coach. Most clients find slots that work perfectly with their work schedule, whether you prefer early morning, lunch break, or evening sessions.`,videoAnswer: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',category: 'Scheduling'
    },
    {
      question: 'Can you really create effective meal plans with Indian foods available abroad?',answer: `Absolutely! Our nutritionists are experts in adapting Indian cuisine to international grocery stores. We provide detailed shopping lists with brand recommendations available in your country, substitute ingredients when needed, and even suggest Indian grocery stores in your area. Our meal plans include everything from quick breakfast options like poha and upma to elaborate weekend meals with dal, sabzi, and roti.`,videoAnswer: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',category: 'Nutrition'
    },
    {
      question: 'What payment methods do you accept for international clients?',
      answer: `We accept multiple payment methods for your convenience: Indian bank transfers (NEFT/RTGS), international wire transfers, PayPal, Stripe (credit/debit cards), and even cryptocurrency. You can pay in INR regardless of your location. We also offer flexible payment plans - monthly, quarterly, or annual payments with discounts for longer commitments.`,
      videoAnswer: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',category: 'Payment'
    },
    {
      question: 'How is this different from local trainers in my country?',
      answer: `The key differences are cultural understanding, cost, and personalization. Local trainers charge $200-400/month but don't understand Indian dietary preferences, festival eating patterns, or vegetarian nutrition. Our coaches understand your background, create meal plans with foods you actually enjoy, and cost 60-70% less. Plus, we provide 24/7 WhatsApp support and understand the unique challenges of living abroad.`,
      videoAnswer: 'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Comparison'
    },
    {
      question: 'What if I travel frequently for work? Can the program adapt?',
      answer: `Yes! Our program is designed for busy professionals who travel. We provide travel-friendly meal options, hotel room workouts, airport/airplane exercises, and flexible scheduling. Your coach will adjust your plan based on your travel schedule, and our mobile app works offline so you can access workouts and meal plans anywhere in the world.`,
      videoAnswer: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Flexibility'
    },
    {
      question: 'Do you provide support for specific health conditions like PCOS, diabetes, or thyroid?',
      answer: `Yes, we have certified clinical nutritionists who specialize in managing health conditions. Our clinical nutrition program addresses PCOS/PCOD, diabetes, thyroid disorders, high cholesterol, and hypertension. We work with your existing healthcare providers and can interpret lab reports to adjust your nutrition plan accordingly. Many clients see significant improvements in their health markers within 3-6 months.`,
      videoAnswer: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Health'
    },
    {
      question: 'What happens if I\'m not satisfied with the results?',
      answer: `We offer a 30-day money-back guarantee. If you're not satisfied with your progress or experience within the first month, we'll provide a full refund, no questions asked. Additionally, if you're not seeing results after 90 days of following the program, we'll extend your coaching for free until you achieve your goals. We're confident in our system because it's worked for over 16,000 clients worldwide.`,
      videoAnswer: 'https://images.pexels.com/photos/6975462/pexels-photo-6975462.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Guarantee'
    },
    {
      question: 'How do you track progress when I\'m in a different country?',
      answer: `We use a comprehensive digital tracking system. You'll receive a smart scale that syncs with our app, take weekly progress photos using our guided photo system, and log your measurements. Your coach reviews everything during sessions and provides detailed progress reports. We also track non-scale victories like energy levels, sleep quality, and how your clothes fit.`,videoAnswer: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400',category: 'Tracking'
    }
  ];

  const categories = ['All', 'Scheduling', 'Nutrition', 'Payment', 'Comparison', 'Flexibility', 'Health', 'Guarantee', 'Tracking'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs?.filter(faq => faq?.category === selectedCategory);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get answers to common questions about our international fitness coaching program
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-cta'
                  : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs?.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border shadow-cta hover:shadow-testimonial transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary pr-4">
                      {faq?.question}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {faq?.category}
                    </span>
                    <Icon
                      name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                      size={20}
                      color="#4A5568"
                      className="transition-transform duration-200"
                    />
                  </div>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-12">
                      <div className="border-t border-border pt-4">
                        <p className="text-text-secondary leading-relaxed mb-4">
                          {faq?.answer}
                        </p>
                        
                        {/* Video Answer Preview */}
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/20">
                          <div className="flex items-center space-x-4">
                            <div className="relative flex-shrink-0">
                              <img
                                src={faq?.videoAnswer}
                                alt="Video answer preview"
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                                <Icon name="Play" size={16} color="white" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-text-primary mb-1">
                                Watch Detailed Video Answer
                              </h4>
                              <p className="text-sm text-text-secondary mb-2">
                                Get a comprehensive explanation with visual examples
                              </p>
                              <button className="text-primary text-sm font-medium hover:underline">
                                Play Video →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/20">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Can't find the answer you're looking for? Our team is here to help you 24/7 via WhatsApp or schedule a free consultation call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>WhatsApp Support</span>
              </button>
              <button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Book Free Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;