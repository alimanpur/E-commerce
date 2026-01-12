import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadset, FaUser, FaTag } from 'react-icons/fa';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import paypal from "/Projects/E-commerce/e-commerce/src/assets/5d68644e-35b9-4867-ba47-527c04b4c403.png"
import visa from "/Projects/E-commerce/e-commerce/src/assets/ef000374-0c18-4437-beb3-e3c343539735.png"
import mastercard from "/Projects/E-commerce/e-commerce/src/assets/5e08ab99-ce6b-43c0-98b1-12a2e07e0638.png"
import discover from "/Projects/E-commerce/e-commerce/src/assets/ce5b3c18-3dd5-4538-b06b-d7a181f35298.png"
import americanexpress from "/Projects/E-commerce/e-commerce/src/assets/3788cc35-37d8-4f2e-82b2-8040af05c41b.png"

const Footer = () => {
  return (
    <>
      {/* Features Section */}
      <div className="bg-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Product Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Up to 3 years on-site warranty<br />
                available for your peace of mind.
              </p>
            </div>

            {/* Personal Account */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUser className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Account</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With big discounts, free delivery and<br />
                a dedicated support specialist.
              </p>
            </div>
        
            {/* Amazing Savings */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Amazing Savings</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Up to 70% off new Products, you can<br />
                be sure of the best price.
              </p>
            </div>
          </div>
        </div>
      </div>

     {/* Newsletter Section */}
      <footer className="bg-black text-white px-24 py-16">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl mb-2">Sign Up To Our Newsletter.</h2>
            <p className="text-gray-400">Be the first to hear about the latest offers.</p>
          </div>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent! border! border-gray-600! rounded! px-4! py-3! w-80! text-white! placeholder-gray-400! focus:outline-none! focus:border-blue-500!"
            />
            <button className="bg-blue-500! hover:bg-blue-600! px-8! py-3! rounded-b-lg! text-white! font-medium! transition-colors!">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-5 gap-8 mb-16">
          {/* Information */}
          <div>
            <h3 className="text-gray-400! text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="text-white! hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-white! hover:text-white transition-colors">About Zip</a></li>
              <li><a href="#" className=" text-white! hover:text-white transition-colors">Privacy Policy</a></li>
              <li><Link to="/products/all" className="text-white! hover:text-white transition-colors">Search</Link></li>
              <li><a href="#" className="text-white! hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-white! hover:text-white transition-colors">Orders and Returns</a></li>
              <li><Link to="/contact" className="text-white! hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/products/all" className="text-white! hover:text-white transition-colors">Advanced Search</Link></li>
              <li><a href="#" className="text-white! hover:text-white transition-colors">Newsletter Subscription</a></li>
            </ul>
          </div>

          {/* PC Parts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-400!">PC Parts</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/category/cpus" className="text-white! hover:text-white transition-colors">CPUS</Link></li>
              <li><Link to="/category/add-on-cards" className="text-white! hover:text-white transition-colors">Add On Cards</Link></li>
              <li><Link to="/category/hard-drives" className="text-white! hover:text-white transition-colors">Hard Drives (Internal)</Link></li>
              <li><Link to="/category/graphic-cards" className="text-white! hover:text-white transition-colors">Graphic Cards</Link></li>
              <li><Link to="/category/keyboards-mice" className="text-white! hover:text-white transition-colors">Keyboards / Mice</Link></li>
              <li><Link to="/category/cases-power-cooling" className="text-white! hover:text-white transition-colors">Cases / Power Supplies / Cooling</Link></li>
              <li><Link to="/category/ram" className="text-white! hover:text-white transition-colors">RAM (Memory)</Link></li>
              <li><Link to="/category/software" className="text-white! hover:text-white transition-colors">Software</Link></li>
              <li><Link to="/category/speakers-headsets" className="text-white! hover:text-white transition-colors">Speakers / Headsets</Link></li>
              <li><Link to="/category/motherboards" className="text-white! hover:text-white transition-colors">Motherboards</Link></li>
            </ul>
          </div>

          {/* Desktop PCs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-400!">Desktop PCs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/category/custom-pcs" className="text-white! hover:text-white transition-colors">Custom PCs</Link></li>
              <li><Link to="/category/servers" className="text-white! hover:text-white transition-colors">Servers</Link></li>
              <li><Link to="/category/msi-all-in-one" className="text-white! hover:text-white transition-colors">MSI All-In-One PCs</Link></li>
              <li><Link to="/category/hp-compaq" className="text-white! hover:text-white transition-colors">HP/Compaq PCs</Link></li>
              <li><Link to="/category/asus-pcs" className="text-white! hover:text-white transition-colors">ASUS PCs</Link></li>
              <li><Link to="/category/tecs-pcs" className="text-white! hover:text-white transition-colors">Tecs PCs</Link></li>
            </ul>
          </div>

          {/* Laptops */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-400!">Laptops</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/category/everyday-notebooks" className="text-white! hover:text-white transition-colors">Evryday Use Notebooks</Link></li>
              <li><Link to="/category/msi-workstation" className="text-white! hover:text-white transition-colors">MSI Workstation Series</Link></li>
              <li><Link to="/category/msi-prestige" className="text-white! hover:text-white transition-colors">MSI Prestige Series</Link></li>
              <li><Link to="/category/tablets" className="text-white! hover:text-white transition-colors">Tablets and Pads</Link></li>
              <li><Link to="/category/netbooks" className="text-white! hover:text-white transition-colors">Netbooks</Link></li>
              <li><Link to="/category/gaming-notebooks" className="text-white! hover:text-white transition-colors">Infinity Gaming Notebooks</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-400!">Address</h3>
            <div className="text-white! space-y-2">
              <p>Address: 1234 Street Adress City Address, 1234</p>
              <p>Phones: <span className="text-white!">(00) 1234 5678</span></p>
              <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
              <p>Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 11:00 AM - 5:00 PM</p>
              <p>E-mail: <a href="mailto:shop@email.com" className="text-gray-400 hover:text-white transition-colors">shop@email.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-800">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400! hover:text-white transition-colors">
              <FaFacebookSquare className='w-8 h-8' fill='currentcolor'/>
            </a>
            <a href="#" className="text-gray-400! hover:text-white transition-colors">
              <FaInstagramSquare className='w-8 h-8' fill='currentcolor'/>
            </a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center justify-center space-x-2">
            <img src={paypal} alt="PayPal" className="h-8" />
            <img src={visa} alt="Visa" className="h-8" />
            <img src={mastercard} alt="Mastercard" className="h-8" />
            <img src={discover} alt="Discover" className="h-8" />
            <img src={americanexpress} alt="American Express" className="h-8" />
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            Copyright © 2026 Shop Pty. Ltd.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;