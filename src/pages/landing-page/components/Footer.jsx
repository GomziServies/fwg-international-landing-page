import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#story' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    programs: [
      { name: 'Weight Loss', href: '#weight-loss' },
      { name: 'Weight Gain', href: '#weight-gain' },
      { name: 'Clinical Nutrition', href: '#clinical' },
      { name: 'Competition Prep', href: '#competition' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'WhatsApp Support', href: '#whatsapp' },
      { name: 'Book Demo', href: '#demo' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Refund Policy', href: '#refund' },
      { name: 'Cookie Policy', href: '#cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: '#facebook' },
    { name: 'Instagram', icon: 'Instagram', href: '#instagram' },
    { name: 'YouTube', icon: 'Youtube', href: '#youtube' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#linkedin' },
    { name: 'Twitter', icon: 'Twitter', href: '#twitter' }
  ];

  const contactInfo = {
    email: 'support@fwginternational.com',
    whatsapp: '+91 98765 43210',
    address: 'Mumbai, Maharashtra, India'
  };

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Dumbbell" size={28} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">FWG International</span>
                <span className="text-sm opacity-75">Fitness Without Borders</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Indians living abroad to achieve their fitness goals with culturally-appropriate coaching, 
              personalized nutrition plans, and world-class support at Indian prices.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} color="#EF7F1B" />
                <a href={`mailto:${contactInfo?.email}`} className="text-gray-300 hover:text-primary transition-colors duration-200">
                  {contactInfo?.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MessageCircle" size={16} color="#25D366" />
                <a href={`https://wa.me/${contactInfo?.whatsapp?.replace(/\s/g, '')}`} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  {contactInfo?.whatsapp}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} color="#EF7F1B" />
                <span className="text-gray-300">{contactInfo?.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
              <ul className="space-y-2">
                {footerLinks?.company?.map((link) => (
                  <li key={link?.name}>
                    <a href={link?.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Programs</h3>
              <ul className="space-y-2">
                {footerLinks?.programs?.map((link) => (
                  <li key={link?.name}>
                    <a href={link?.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Support</h3>
              <ul className="space-y-2">
                {footerLinks?.support?.map((link) => (
                  <li key={link?.name}>
                    <a href={link?.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Legal</h3>
              <ul className="space-y-2">
                {footerLinks?.legal?.map((link) => (
                  <li key={link?.name}>
                    <a href={link?.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Signup */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get fitness tips, success stories, and exclusive offers for Indians abroad</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-r-lg hover:from-accent hover:to-primary transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} FWG International. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="#38A169" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} color="#EF7F1B" />
                <span>Certified Coaches</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} color="#008DD2" />
                <span>23+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;