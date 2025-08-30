import React, { useState, useEffect } from 'react';
import StickyNavigation from '../../components/ui/StickyNavigation';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import DemoBookingSection from './components/DemoBookingSection';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';
import AboutFWG from './components/AboutFWG';

const LandingPage = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  // Handle demo booking
  const handleBookDemo = (formData = null) => {
    if (formData) {
      setBookingData(formData);
      setShowSuccessModal(true);

      // Simulate WhatsApp confirmation
      setTimeout(() => {
        console.log('WhatsApp confirmation sent to:', formData?.phone);
      }, 1000);
    } else {
      // Scroll to demo booking section
      const demoSection = document.querySelector('#demo-booking');
      if (demoSection) {
        const offsetTop = demoSection?.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle WhatsApp community join
  const handleJoinWhatsApp = () => {
    // Simulate WhatsApp group join
    const whatsappGroupUrl = 'https://wa.me/919876543210?text=Hi! I want to join the FWG International community for Indians abroad.';
    window.open(whatsappGroupUrl, '_blank');
  };

  // Success Modal Component
  const SuccessModal = () => {
    if (!showSuccessModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-testimonial border border-border">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Demo Booked Successfully! 🎉
            </h3>

            <p className="text-text-secondary mb-6">
              Thank you {bookingData?.name}! We've sent a WhatsApp confirmation to {bookingData?.phone} with your demo details and coach introduction video.
            </p>

            <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                </svg>
                <span className="text-green-700 font-medium text-sm">WhatsApp confirmation sent!</span>
              </div>
              <p className="text-green-600 text-sm">
                Check your WhatsApp for demo details and coach introduction video.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-semibold hover:from-accent hover:to-primary transition-all duration-200"
              >
                Continue Exploring
              </button>

              <button
                onClick={handleJoinWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                </svg>
                <span>Join WhatsApp Community</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <StickyNavigation />

      {/* Hero Section */}
      <HeroSection
        onBookDemo={handleBookDemo}
        onJoinWhatsApp={handleJoinWhatsApp}
      />

      <SocialProof />

      <AboutFWG />

      {/* Programs Section */}
      <ProgramsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Demo Booking Section */}
      <DemoBookingSection onBookDemo={handleBookDemo} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Success Modal */}
      <SuccessModal />
    </div>
  );
};

export default LandingPage;