import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Login</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Customer Login</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Registered Customers */}
          <div className="bg-blue-50 p-8 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registered Customers</h2>
            <p className="text-gray-700 mb-8">If you have an account, sign in with your email address.</p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-gray-500"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500! text-white! px-8 py-3 rounded-full! font-medium hover:bg-blue-600!"
                >
                  Sign In
                </button>
                <Link to="#" className="text-blue-600! hover:underline!">
                  Forgot Your Password?
                </Link>
              </div>
            </form>
          </div>

          {/* New Customer */}
          <div className="bg-blue-50 p-8 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">New Customer?</h2>
            <p className="text-gray-700 mb-6">Creating an account has many benefits:</p>
            
            <ul className="text-gray-700 space-y-2 mb-8">
              <li>• Check out faster</li>
              <li>• Keep more than one address</li>
              <li>• Track orders and more</li>
            </ul>
            
            <button className="bg-blue-500! text-white! px-8 py-3 rounded-full! font-medium hover:bg-blue-600!">
              Create An Account
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;