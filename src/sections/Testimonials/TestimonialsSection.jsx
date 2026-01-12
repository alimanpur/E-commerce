import React, { useState } from 'react';
import {FaHeadset} from "react-icons/fa6";
import tagimage from '/Projects/E-commerce/e-commerce/src/assets/Tag-Dollar-Price--Streamline-Freehand.png'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.",
      author: "Tama Brown"
    },
    {
      id: 2,
      text: "Excellent customer service and fast delivery. The product quality exceeded my expectations. Will definitely order again!",
      author: "John Smith"
    },
    {
      id: 3,
      text: "Outstanding experience from start to finish. The team was helpful and the product arrived exactly as described.",
      author: "Sarah Johnson"
    },
    {
      id: 4,
      text: "Great prices and even better service. The support team answered all my questions promptly.",
      author: "Mike Davis"
    }
  ];

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-blue-100 rounded-2xl p-12 relative">
            {/* Large Quote Marks */}
            <div className="text-8xl font-bold text-black mb-6 leading-none">
              „
            </div>
            
            {/* Testimonial Text */}
            <div className="mb-8 pl-4">
              <p className="text-gray-800 text-xl leading-relaxed font-normal">
                {testimonials[currentTestimonial].text}
              </p>
            </div>
            
            {/* Author */}
            <div className="text-right mb-12 pr-4">
              <p className="text-gray-900 font-medium text-lg">
                - {testimonials[currentTestimonial].author}
              </p>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button className="bg-white! text-blue-500! border-2 border-blue-500! px-8 py-3 rounded-full! hover:bg-blue-600! hover:text-white! transition-colors text-sm font-medium">
                Leave Us A Review
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full! cursor-pointer transition-colors ${
                      index === currentTestimonial ? 'bg-blue-500!' : 'bg-gray-300!'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;