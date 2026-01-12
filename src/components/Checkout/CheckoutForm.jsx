import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CheckoutForm = () => {
  const cartItems = useSelector(state => state.cart.items);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phoneNumber: '',
    shippingMethod: 'standard'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Breadcrumb */}
      <div className="bg-white border-b w-full">
        <div className="w-full px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Shopping Cart</span>
            <span className="mx-2">›</span>
            <span className="text-black font-medium">Checkout Process</span>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-black">Checkout</h1>
                <button className="bg-transparent! px-6 py-2 border border-blue-500! text-blue-500! rounded-full! text-sm hover:bg-blue-500! hover:text-white!">
                  Sign in
                </button>
              </div>

              {/* Shipping Address Form */}
              <div>
                <h2 className="text-lg font-semibold text-black mb-6">Shipping Address</h2>
                
                <div className="space-y-4">
                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">You can create an account after checkout.</p>
                  </div>

                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Street Address */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                    />
                    <input
                      type="text"
                      name="streetAddress2"
                      value={formData.streetAddress2}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* State/Province */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Please, select a region, state or province</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>

                  {/* Zip/Postal Code */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Zip/Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Mexico">Mexico</option>
                      <option value="India">India</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Shipping Options */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="standard"
                          name="shippingMethod"
                          value="standard"
                          checked={formData.shippingMethod === 'standard'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="standard" className="ml-2 text-sm text-black">
                          <span className="font-medium">Standard Rate</span>
                          <br />
                          <span className="text-gray-600">Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</span>
                        </label>
                      </div>
                      <span className="text-sm font-medium">$21.00</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="pickup"
                          name="shippingMethod"
                          value="pickup"
                          checked={formData.shippingMethod === 'pickup'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="pickup" className="ml-2 text-sm text-black">
                          <span className="font-medium">Pickup from store</span>
                          <br />
                          <span className="text-gray-600">1234 Street Address City Address, 1234</span>
                        </label>
                      </div>
                      <span className="text-sm font-medium">$0.00</span>
                    </div>
                  </div>
                </div>

                {/* Next Button */}
                <div className="mt-8">
                  <button
                    onClick={handleNext}
                    className="w-full bg-blue-600! text-white! py-3 px-6 rounded-full! font-medium hover:bg-blue-700! transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 rounded-lg shadow-sm p-6">
               <div className="flex items-center mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    ✓
                  </div>
                  <span className="ml-2 text-sm font-medium text-black">Shipping</span>
                </div>
                <div className="flex-1 h-px bg-blue-500 mx-4"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Review & Payments</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-black">Order Summary</h3>
                <button className="bg-transparent! text-gray-400! hover:text-gray-600!">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="text-sm text-gray-600 mb-4">{cartItems.length} Items in Cart</div>

              <div className="space-y-4">
                {/* Product Items from Cart */}
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-15 h-15 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-black">{item.name}</h4>
                      <div className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</div>
                      <div className="text-sm font-semibold text-black mt-1">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;