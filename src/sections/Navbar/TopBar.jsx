// src/sections/Navbar/TopBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, ChevronDown } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-black text-white py-3 px-4 md:px-20 flex justify-between items-center text-[12px] font-semibold">
      {/* Time & Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400">Mon-Thu:</span>
        <span>9:00 AM - 5:30 PM</span>
        <ChevronDown size={14} className="text-gray-400 cursor-pointer" />
      </div>

      {/* Showroom Address */}
      <div className="hidden lg:flex items-center gap-1">
        <span className="text-gray-400">Visit our showroom in 1234 Street Adress City Address, 1234</span>
        <Link to="/contact" className="border-b border-white hover:text-blue-400 transition-colors">Contact Us</Link>
      </div>

      {/* Call & Socials */}
      <div className="flex items-center gap-4">
        <span>Call Us: (00) 1234 5678</span>
        <Facebook size={16} className="cursor-pointer hover:text-blue-500" />
        <Instagram size={16} className="cursor-pointer hover:text-pink-500" />
      </div>
    </div>
  );
};

export default TopBar;