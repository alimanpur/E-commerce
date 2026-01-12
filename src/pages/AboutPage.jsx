import React from 'react';
import Footer from '../components/Footer/Footer.jsx';
import TestimonialsSection from '../sections/Testimonials/TestimonialsSection.jsx';
import rectangle from "/Projects/E-commerce/e-commerce/src/assets/Rectangle 54.png";
import rectangle1 from "/Projects/E-commerce/e-commerce/src/assets/Rectangle 11.png";
import log from "../assets/Frame 205.png";
import log1 from "../assets/Group 174.png";
import log2 from "../assets/Group 175.png";
import log3 from "../assets/Group 176.png";
import rect2 from "../assets/Mask Group.png";
import rect3 from "../assets/Rectangle 13.png";
import rect4 from "../assets/Mask Group1.png";

const AboutPage = () => {
  return (
    <>
      {/* About Us Header */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        </div>
      </div>

      {/* A Family That Keeps On Growing Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-30 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-6">A Family That Keeps On Growing</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
              </p>
            </div>
            <div>
              <img 
                src={rectangle}
                alt="Our showroom" 
                className="w-96 h-96 object-cover "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shop.com Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-30 items-center">
            <div>
              <img 
                src={rectangle1} 
                alt="Gaming setup" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center mr-3">
                  <img src={log} alt="s" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Shop.com</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Shop.com is a proudly Australian owned Melbourne based supplier of I.T. goods and services, operating since 1991. Our business operations are entirely focused on the Melbourne market and government organisations. We provide complete business IT solutions, certified for high quality hardware and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Now You're In Safe Hands Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-30 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10  flex items-center justify-center mr-3">
                  <img src={log1} alt="l" />
                </div>
                <h2 className="text-3xl font-bold">Now You're In Safe Hands</h2>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Experience a 40% boost in computing from last generation. MSI Desktop equips the new Intel® Core™ i7 processor, paired with the latest computing power to bring you an unparalleled gaming experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                *Performance compared to i7-10700. Specs may vary by model.
              </p>
            </div>
            <div>
              <img 
                src={rect2} 
                alt="Gaming PC" 
                className=" h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Highest Quality of Products Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-30 items-center">
            <div>
              <img 
                src={rect3} 
                alt="High quality PC" 
                className=" h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center mr-3">
                  <img src={log2} alt="s" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Highest Quality of Products</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so you can be sure that you won't get a defective product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* We Deliver to Any Regions Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-30 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center mr-3">
                  <img src={log3} alt="t" />
                </div>
                <h2 className="text-3xl font-bold">We Deliver to Any Regions</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We deliver our goods all across Australia for more where you live your order will be delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be delivered to you safe and sound, just like you expect them to be.
              </p>
            </div>
            <div>
              <img 
                src={rect4} 
                alt="Delivery service" 
                className=" h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <TestimonialsSection />

      <Footer />
    </>
  );
};

export default AboutPage;