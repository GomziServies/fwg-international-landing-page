import React from 'react';
import Icon from '../AppIcon';

const WhatsAppButton = () => {
  const phoneNumber = '7482077091';
  const message = encodeURIComponent('Hello! I would like to know more about FWG International.');

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20ba57] transition-colors duration-300"
      aria-label="Contact on WhatsApp"
    >
      <Icon name="MessageCircle" className="w-7 h-7" color='white'/>
    </button>
  );
};

export default WhatsAppButton;