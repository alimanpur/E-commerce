import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import locate from '/Projects/E-commerce/e-commerce/src/assets/Vector.svg';
import phone from '/Projects/E-commerce/e-commerce/src/assets/Group 2049.svg';
import time from '/Projects/E-commerce/e-commerce/src/assets/Group 2086.svg';
import mail from '/Projects/E-commerce/e-commerce/src/assets/Group 2087.svg';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Contact Us</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700 mb-4">We love hearing from you, our Shop customers.</p>
          <p className="text-gray-700">Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-900 font-medium mb-2">Your Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  What's on your mind? <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="8"
                  placeholder="Jot us a note and we'll get back to you as quickly as possible"
                  className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-gray-500 resize-none"
                />
              </div>
              
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-blue-500! text-white! px-8 py-3 rounded-full! font-medium hover:bg-blue-600!"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 bg-blue-50 p-4">
            <div>
              <div className="flex items-start space-x-3 mb-2">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <div className=" bg-transparent">
                  <img src={locate} alt="locate" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Address:</h3>
                  <p className="text-gray-700">1234 Street Address City Address, 1234</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-3 mb-2">
                <div className="w-6 h-6  flex items-center justify-center mt-1">
                  <div className="bg-transparent">
                    <img src={phone} alt="phn" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Phone:</h3>
                  <p className="text-gray-700">(00)1234 5678</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-3 mb-2">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <div className="bg-transparent">
                    <img src={time} alt="time" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">We are open:</h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Monday - Thursday: 9:00 AM - 5:30 PM</p>
                    <p>Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-3 mb-2">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <div className="bg-transparent">
                    <img src={mail} alt="mail" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">E-mail:</h3>
                  <a href="mailto:shop@email.com" className="text-blue-600 hover:underline">
                    shop@email.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;