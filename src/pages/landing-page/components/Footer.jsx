import React from "react";
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "https://www.facebook.com/gajani2/" },
    { name: "Instagram", icon: "Instagram", href: "https://www.instagram.com/gomzi_nutrition/?igsh=NTc4MTIwNjQ2YQ%3D%3D#" },
    { name: "YouTube", icon: "Youtube", href: "https://www.youtube.com/channel/UCLyvtq55YZORdV-SN8OQSzQ" },
    { name: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/in/dt-gautam-jani-561a50161/" },
  ];

  const contactInfo = {
    email: "fitnesswithgomzi@gmail.com",
    whatsapp: "+91 74820 77091",
    address:
      "Abhushan Bungalows, 2, Char Rasta, near Alkapuri, Shraddha Society, Katargam, Surat, Gujarat 395008",
  };

  return (
    <footer className="bg-text-primary text-white">
      <div className="container mx-auto px-6 pt-14 pb-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/assets/images/gomzi.webp"
                alt="FWG International Logo"
                className="h-16 w-auto"
              />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
              Empowering Indians living abroad to achieve their fitness goals
              with culturally-appropriate coaching, personalized nutrition
              plans, and world-class support at Indian prices.
            </p>

            <div className="flex space-x-4 mt-6">
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

          {/* Right side */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Get in Touch</h3>

            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={16} color="#EF7F1B" />
              <a
                href={`mailto:${contactInfo?.email}`}
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                {contactInfo?.email}
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Icon name="MessageCircle" size={16} color="#25D366" />
              <a
                href={`https://wa.me/${contactInfo?.whatsapp?.replace(
                  /\s/g,
                  ""
                )}`}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                {contactInfo?.whatsapp}
              </a>
            </div>

            <div className="flex items-start space-x-3">
              <Icon name="MapPin" size={20} color="#EF7F1B" />
              <span className="text-gray-300">{contactInfo?.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
          © {currentYear} FWG International. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
