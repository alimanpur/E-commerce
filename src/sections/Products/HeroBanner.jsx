import React from 'react';
import msiBannerImage from '../../assets/Group 56.png';

const HeroBanner = () => {
  return (
    <section className="w-full bg-white py-2">
      <div className="min-w-300 mx-24 px-4 md:px-10">
        <div className="relative w-full h-87.5 overflow-hidden rounded-sm">
          {/* Main Background Image from Figma */}
          <img 
            src={msiBannerImage} 
            alt="MSI Gaming Monitor Promo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;