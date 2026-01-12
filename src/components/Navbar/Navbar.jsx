import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate logged in state
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Mon-Thu: 9:00 AM - 5:30 PM</span>
            <span>Visit our showroom in 1234 Street Address City Address, 1234</span>
            <button className="text-blue-400 hover:underline">Contact Us</button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaPhone className="w-3 h-3 mr-1" />
              <span>Call Us: (00) 1234 5678</span>
            </div>
            <div className="flex space-x-2">
              <span>📘</span>
              <span>📷</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="bg-blue-600 text-white p-2 rounded">
                <span className="font-bold text-xl">T</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/category/laptops" className="text-gray-700 hover:text-blue-600 font-medium">Laptops</Link>
              <Link to="/category/desktop-pcs" className="text-gray-700 hover:text-blue-600 font-medium">Desktop PCs</Link>
              <Link to="/category/networking-devices" className="text-gray-700 hover:text-blue-600 font-medium">Networking Devices</Link>
              <Link to="/category/printers-and-scanners" className="text-gray-700 hover:text-blue-600 font-medium">Printers & Scanners</Link>
              <Link to="/category/pc-parts" className="text-gray-700 hover:text-blue-600 font-medium">PC Parts</Link>
              <Link to="/category/all-other-products" className="text-gray-700 hover:text-blue-600 font-medium">All Other Products</Link>
              <Link to="/category/repairs" className="text-gray-700 hover:text-blue-600 font-medium">Repairs</Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Our Deals
              </button>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600">
                <FaSearch className="w-5 h-5" />
              </button>
              <Link to="/cart" className="text-gray-600 hover:text-blue-600 relative">
                <FaShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Link>
              
              {/* Profile Dropdown */}
              {isLoggedIn ? (
                <div className="relative" ref={profileRef}>
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center text-gray-600 hover:text-blue-600 space-x-1"
                  >
                    <FaUser className="w-5 h-5" />
                    <FaChevronDown className="w-3 h-3" />
                  </button>
                  
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        My Dashboard
                      </Link>
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Account Information
                      </Link>
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        My Orders
                      </Link>
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        My Wishlist
                      </Link>
                      <hr className="my-1" />
                      <button 
                        onClick={() => {
                          setIsLoggedIn(false);
                          setIsProfileOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="text-gray-600 hover:text-blue-600">
                  <FaUser className="w-5 h-5" />
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                <Link to="/category/laptops" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Laptops</Link>
                <Link to="/category/desktop-pcs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Desktop PCs</Link>
                <Link to="/category/networking-devices" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Networking Devices</Link>
                <Link to="/category/printers-and-scanners" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Printers & Scanners</Link>
                <Link to="/category/pc-parts" className="block px-3 py-2 text-gray-700 hover:text-blue-600">PC Parts</Link>
                <Link to="/category/all-other-products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">All Other Products</Link>
                <Link to="/category/repairs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Repairs</Link>
                <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
                  Our Deals
                </button>
                {isLoggedIn && (
                  <>
                    <hr className="my-2" />
                    <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                      My Dashboard
                    </Link>
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;