import React from "react";
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "https://www.facebook.com/gajani2/" },
    { name: "Instagram", icon: "Instagram", href: "https://www.instagram.com/fitnesswithgomzi/" },
    { name: "YouTube", icon: "Youtube", href: "https://www.youtube.com/channel/UCLyvtq55YZORdV-SN8OQSzQ" },
    { name: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/in/dt-gautam-jani-561a50161/" },
  ];

  const contactInfo = {
    email: "fitnesswithgomzi@gmail.com",
    whatsapp: "+91 74820 77091",
  };

  const branches = [
    {
      name: "Vesu",
      address: "M-11 & 12, 2nd Floor, Safal Square, Opp. Prime Shoppers, Vesu, Rundh, Surat, Gujarat - 395007",
      mapUrl: "https://maps.app.goo.gl/frAvcirw7QVvnzmp6"
    },
    {
      name: "Adajan",
      address: "201-Time Square, Gaurav Path Road, TP 10 Main Rd, opp. Shree Bharti Residency, Surat, Gujarat 394510",
      mapUrl: "https://maps.app.goo.gl/xiQUuAKf6dp85Ffb9"
    },
    {
      name: "Katargam",
      address: "323, 3rd floor, Laxmi Enclave-1, opposite Gajera School, Katargam, Surat, Gujarat 395004",
      mapUrl: "https://maps.app.goo.gl/iuHJA52Zan1KRZGZ7"
    },
    {
      name: "Vadodara",
      address: "FF 308, Jaldhara Complex, Old Padra Rd, Manisha Char Rasta, Sukrutinagar, Diwalipura, Vadodara, Gujarat 390007",
      mapUrl: "https://maps.app.goo.gl/ydsyGjmSqR9aCKEP6"
    }
  ];

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

            {/* Get in Touch */}
            <div className="mt-8 pt-8 border-t border-white/10 space-y-4 max-w-lg">
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
            </div>
          </div>

          {/* Right side - Our Branches */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wider">Our Branches</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {branches?.map((branch) => (
                <div 
                  key={branch?.name} 
                  className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                >
                  <div>
                    <h5 className="font-semibold text-white mb-2 text-sm flex items-center">
                      <Icon name="MapPin" size={16} color="#EF7F1B" className="mr-1.5" />
                      {branch?.name} Branch
                    </h5>
                    <p className="text-gray-300 text-xs leading-relaxed mb-3">
                      {branch?.address}
                    </p>
                  </div>
                  <div>
                    <a
                      href={branch?.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-primary hover:underline group"
                    >
                      Get Directions
                      <Icon name="ArrowUpRight" size={14} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              ))}
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
