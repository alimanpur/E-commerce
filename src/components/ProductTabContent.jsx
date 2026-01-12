import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import corei7 from "../assets/corei7.jpeg";
import girl from "../assets/girl.jpeg";
import intel from "../assets/intel.png";
import rtx from "../assets/rtx.png";
import ssd from "../assets/ssd.png";
import ddr4 from "../assets/ddr4.png";

const ProductTabContent = ({ activeTab }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedSupport, setExpandedSupport] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(false);
  const [expandedGuide, setExpandedGuide] = useState(false);
  const [expandedFAQItem, setExpandedFAQItem] = useState(null);
  
  const slides = [
    {
      title: "Outplay the\nCompetition",
      description: "Experience a 40% boost in computing from last generation. MSI Desktop equipped with 10th Gen Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.",
      note: "*Performance compared to i7-8700. Specs varies by model."
    },
    {
      title: "Dominance\nReimagined",
      description: "Push the boundaries of what's possible. Featuring the latest cooling architecture and 10th Gen Intel® Core™ i7 processing, our desktops are engineered to maintain peak performance during the most demanding raids. Experience lightning-fast load times and seamless multitasking that leaves your opponents in the rearview.",
      note: ""
    },
    {
      title: "Elevate\nYour Play",
      description: "Unleash the power within. With a 40% jump in efficiency over previous iterations, the MSI Desktop lineup transforms how you play. Harness the sophisticated architecture of the Intel® Core™ i7 to achieve higher frame rates and ultra-smooth visuals, ensuring you never miss a critical shot.",
      note: ""
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="">
      {/* Hero Section - Outplay the Competition */}
      <div className="bg-black text-white relative overflow-hidden ">
        <div className="max-w-dvw mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <button 
                onClick={prevSlide}
                className="absolute left-4 z-10 text-white hover:text-gray-300 text-2xl"
              >
                ‹
              </button>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {slides[currentSlide].title.split('\n').map((line, index) => (
                  <span key={index}>{line}{index === 0 && <br />}</span>
                ))}
              </h1>
              <p className="text-lg text-gray-300 max-w-md">
                {slides[currentSlide].description}
              </p>
              {slides[currentSlide].note && (
                <p className="text-sm text-gray-400">
                  {slides[currentSlide].note}
                </p>
              )}
              <button 
                onClick={nextSlide}
                className="absolute right-2/4 z-10 text-white hover:text-gray-300 text-2xl"
              >
                ›
              </button>
              <div className="flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      currentSlide === index ? 'bg-white' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center relative">
              <img 
                src={corei7} 
                alt="Intel Core i7 Processor" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-gray-50 ">
        <div className="max-w-6xl mx-auto p-8 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
                <div className="flex justify-between items-center p-3" onClick={() => setExpandedSupport(!expandedSupport)}>
                  <span className="text-gray-500 font-medium text-lg">Product Support</span>
                  <button className="bg-transparent! text-gray-400 text-xl">{expandedSupport ? '-' : '+'}</button>
                </div>
                {expandedSupport && (
                  <div className="p-4 border-t border-gray-200 bg-blue-50">
                    <h3 className="text-gray-700 font-bold text-lg mb-3">Expert Assistance, Always</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We've got your back. From driver updates to technical troubleshooting, our dedicated support team ensures your MSI hardware performs at its peak. Access our comprehensive knowledge base or connect with an expert to resolve issues quickly, so you can spend less time troubleshooting and more time in the game.
                    </p>
                  </div>
                )}
              </div>
              <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
                <div className="flex justify-between items-center p-3" onClick={() => setExpandedFAQ(!expandedFAQ)}>
                  <span className="text-gray-500 font-medium text-lg">FAQ</span>
                  <button className="bg-transparent! text-gray-400 text-xl">{expandedFAQ ? '-' : '+'}</button>
                </div>
                {expandedFAQ && (
                  <div className="p-4 border-t border-gray-200 space-y-4">
                    <h3 className=" text-gray-700 font-bold text-lg mb-4">Desktop & Performance FAQs</h3>
                    
                    <div className="border border-gray-200 rounded bg-blue-50">
                      <div className="flex justify-between items-center p-3 cursor-pointer" onClick={() => setExpandedFAQItem(expandedFAQItem === 1 ? null : 1)}>
                        <span className="text-gray-500 font-medium text-sm">What makes your 10th Gen Intel® Core™ i7 desktops different?</span>
                        <span className="text-gray-400">{expandedFAQItem === 1 ? '▲' : '▼'}</span>
                      </div>
                      {expandedFAQItem === 1 && (
                        <div className="p-3 border-t border-gray-200 text-sm text-gray-700">
                          Our desktops are optimized for peak synergy between hardware and software. Experience up to a 40% boost in computing power compared to previous generations, specifically tuned for high-demand gaming and professional multitasking.
                        </div>
                      )}
                    </div>
                    
                    <div className="border border-gray-200 rounded bg-blue-50">
                      <div className="flex justify-between items-center p-3 cursor-pointer" onClick={() => setExpandedFAQItem(expandedFAQItem === 2 ? null : 2)}>
                        <span className="text-gray-500 font-medium text-sm">Are these desktops upgradeable?</span>
                        <span className="text-gray-400">{expandedFAQItem === 2 ? '▲' : '▼'}</span>
                      </div>
                      {expandedFAQItem === 2 && (
                        <div className="p-3 border-t border-gray-200 text-sm text-gray-700">
                          Absolutely. Most of our MSI and custom desktop models are designed with future-proofing in mind. You can easily expand RAM, add SSD storage, or upgrade your GPU as your needs grow.
                        </div>
                      )}
                    </div>
                    
                    <div className="border border-gray-200 rounded bg-blue-50">
                      <div className="flex justify-between items-center p-3 cursor-pointer" onClick={() => setExpandedFAQItem(expandedFAQItem === 3 ? null : 3)}>
                        <span className="text-gray-500 font-medium text-sm">Do the systems come pre-installed with an Operating System?</span>
                        <span className="text-gray-400">{expandedFAQItem === 3 ? '▲' : '▼'}</span>
                      </div>
                      {expandedFAQItem === 3 && (
                        <div className="p-3 border-t border-gray-200 text-sm text-gray-700">
                          Yes, most units come with Windows 11 Home or Pro pre-installed and optimized for gaming. Check the specific "Technical Specs" on the product page for details.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
                <div className="flex justify-between items-center p-3" onClick={() => setExpandedGuide(!expandedGuide)}>
                  <span className="text-gray-500 font-medium text-lg">Our Buyer Guide</span>
                  <button className="bg-transparent! text-gray-400 text-xl">{expandedGuide ? '-' : '+'}</button>
                </div>
                {expandedGuide && (
                  <div className="p-4 border-t border-gray-200 bg-blue-50">
                    <h3 className=" text-gray-700 font-bold text-lg mb-3">The Ultimate Tech Buyer's Guide</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Investing in the right setup shouldn't be a guessing game. Whether you are building a competitive gaming station or a high-end creative studio, use this guide to match your needs with the perfect hardware.
                    </p>
                    <h4 className="font-bold text-md mb-2">Choosing Your Desktop Power</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      The processor is the heart of your experience. For 2026, we recommend focusing on three tiers:
                    </p>
                    <ul className="text-gray-700 text-sm space-y-2 mb-4">
                      <li><strong>The Powerhouse:</strong> Our 10th Gen Intel® Core™ i7 builds offer a 40% performance jump, making them ideal for high-frame-rate gaming and seamless video editing.</li>
                      <li><strong>The Future-Proof Choice:</strong> Look for systems with at least 16GB of DDR4/DDR5 RAM and an NVMe SSD. This ensures your OS boots in seconds and games load instantly.</li>
                      <li><strong>Cooling Matters:</strong> High performance generates heat. Ensure your desktop features advanced airflow or liquid cooling to maintain peak clock speeds during long sessions.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src={girl} 
                alt="Customer support representative" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black text-white py-16 relative"> 
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <p className="text-gray-300 font-medium mb-12 max-w-2xs mx-auto">
            The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Intel Feature */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 border border-white bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={intel} alt="Intel" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">Intel® Core™ i7</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
              </p>
            </div>

            {/* RTX Feature */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 border border-white bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={rtx} alt="RTX" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">GeForce RTX SUPER™</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.
              </p>
            </div>

            {/* SSD Feature */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 border border-white bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={ssd} alt="SSD" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">NVMe SSD</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.
              </p>
            </div>

            {/* DDR4 Feature */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 border border-white bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={ddr4} alt="DDR4" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">10th Gen Intel® Core™</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabContent;