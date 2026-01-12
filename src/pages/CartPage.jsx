import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, clearCart } from '../features/cart/cartSlice';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import zip from '../assets/zip.png';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShippingExpanded, setIsShippingExpanded] = useState(false);
  const [isDiscountExpanded, setIsDiscountExpanded] = useState(false);
  const [shippingData, setShippingData] = useState({
    country: 'Australia',
    state: '',
    zipCode: '',
    shippingMethod: 'standard'
  });
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleApplyDiscount = () => {
    // Simple discount logic - you can make this more sophisticated
    if (discountCode.toLowerCase() === 'save10') {
      setAppliedDiscount(subtotal * 0.1);
    } else if (discountCode.toLowerCase() === 'save20') {
      setAppliedDiscount(subtotal * 0.2);
    } else {
      setAppliedDiscount(0);
      alert('Invalid discount code');
    }
  };

  const handleShippingChange = (field, value) => {
    setShippingData(prev => ({ ...prev, [field]: value }));
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }
    navigate('/checkout');
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 0 ? (shippingData.shippingMethod === 'standard' ? 21.00 : 0) : 0;
  const tax = subtotal > 0 ? 1.61 : 0;
  const gst = subtotal > 0 ? 1.61 : 0;
  const discountAmount = appliedDiscount;
  const orderTotal = subtotal + shippingCost + tax + gst - discountAmount;

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
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 pb-4 border-b border-gray-200 mb-6">
              <div className="font-medium text-gray-900">Item</div>
              <div className="font-medium text-gray-900 text-center">Price</div>
              <div className="font-medium text-gray-900 text-center">Qty</div>
              <div className="font-medium text-gray-900 text-center">Subtotal</div>
              <div className="font-medium text-gray-900 text-center">Remove</div>
            </div>

            {/* Cart Items */}
            {cartItems.length > 0 ? cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-5 gap-4 py-6 border-b border-gray-100 items-center">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                  </div>
                </div>
                <div className="text-gray-900 text-center font-bold">${item.price.toFixed(2)}</div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full! flex items-center justify-center bg-transparent! text-blue-600! hover:bg-blue-50"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-gray-700">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full! flex items-center justify-center bg-transparent! text-blue-600! hover:bg-blue-50"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-gray-900 text-center font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                <div className="text-center">
                  <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500! hover:text-red-700! bg-transparent! text-xl"
                  >
                    ×
                  </button>
                </div>
              </div>
            )) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between mt-8">
              <Link to="/" className="px-6 py-3 border border-gray-500! rounded! text-gray-700! hover:bg-gray-50!">
                Continue Shopping
              </Link>
              <div className="space-x-4">
                <button 
                  onClick={handleClearCart}
                  className="px-6 py-3 bg-black! text-white! rounded! hover:bg-gray-800!"
                >
                  Clear Shopping Cart
                </button>
                <button className="px-6 py-3 bg-black! text-white! rounded! hover:bg-gray-800!">
                  Update Shopping Cart
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-blue-50! p-6 rounded! h-fit">
            <h2 className="text-4xl font-bold text-gray-900! mb-6">Summary</h2>
            
            <div className="space-y-4 mb-6">
              {/* Estimate Shipping and Tax */}
              <div className="border-b border-gray-200 pb-4">
                <button 
                  onClick={() => setIsShippingExpanded(!isShippingExpanded)}
                  className="flex justify-between items-center w-full text-left bg-transparent!"
                >
                  <span className="text-xl font-bold text-gray-700!">Estimate Shipping and Tax</span>
                  <span className="text-gray-700! transform transition-transform ${
                    isShippingExpanded ? 'rotate-180' : ''
                  }">▼</span>
                </button>
                
                {isShippingExpanded && (
                  <div className="mt-4 space-y-4">
                    <p className="text-sm text-gray-500!">Enter your destination to get a shipping estimate.</p>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700! mb-1">Country</label>
                      <select 
                        value={shippingData.country}
                        onChange={(e) => handleShippingChange('country', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded bg-white text-gray-700"
                      >
                        <option value="Australia">Australia</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="India">India</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700! mb-1">State/Province</label>
                      <input 
                        type="text"
                        value={shippingData.state}
                        onChange={(e) => handleShippingChange('state', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded bg-white text-gray-700"
                        placeholder="Enter state/province"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700! mb-1">Zip/Postal Code</label>
                      <input 
                        type="text"
                        value={shippingData.zipCode}
                        onChange={(e) => handleShippingChange('zipCode', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded bg-white text-gray-700"
                        placeholder="Enter zip/postal code"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="standard" 
                          name="shipping" 
                          value="standard"
                          checked={shippingData.shippingMethod === 'standard'}
                          onChange={(e) => handleShippingChange('shippingMethod', e.target.value)}
                          className="mr-2"
                        />
                        <label htmlFor="standard" className="text-sm text-gray-700">
                          Standard Rate - Price may vary depending on the item/destination. Shop Staff will contact you. $21.00
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="pickup" 
                          name="shipping" 
                          value="pickup"
                          checked={shippingData.shippingMethod === 'pickup'}
                          onChange={(e) => handleShippingChange('shippingMethod', e.target.value)}
                          className="mr-2"
                        />
                        <label htmlFor="pickup" className="text-sm text-gray-700">
                          Pickup from store - 1234 Street Address City Address, 1234 $0.00
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Apply Discount Code */}
              <div className="border-b border-gray-200 pb-4">
                <button 
                  onClick={() => setIsDiscountExpanded(!isDiscountExpanded)}
                  className="flex justify-between items-center w-full text-left bg-transparent!"
                >
                  <span className="text-xl font-bold text-gray-700!">Apply Discount Code</span>
                  <span className="text-gray-700! transform transition-transform ${
                    isDiscountExpanded ? 'rotate-180' : ''
                  }">▼</span>
                </button>
                
                {isDiscountExpanded && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700! mb-1">Enter discount code</label>
                      <input 
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded bg-white text-gray-700"
                        placeholder="Enter Discount code"
                      />
                    </div>
                    <button 
                      onClick={handleApplyDiscount}
                      className="w-full bg-transparent! border-blue-500! text-blue-500! py-2 px-4 rounded-full! hover:bg-blue-600! hover:text-white! transition-colors"
                    >
                      Apply Discount
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="font-bold text-gray-700">Subtotal</span>
                <span className="font-bold text-gray-700">${subtotal.toFixed(2)}</span>
              </div>
              {subtotal > 0 && (
                <>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Shipping</span>
                    <span className="font-bold text-gray-700">${shippingCost.toFixed(2)}</span>
                  </div>
                  {shippingData.shippingMethod === 'standard' && (
                    <p className="text-xs text-gray-500">(Standard Rate - Price may vary depending on the item/destination. Shop Staff will contact you.)</p>
                  )}
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Tax</span>
                    <span className="font-bold text-gray-700">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">GST (10%)</span>
                    <span className="font-bold text-gray-700">${gst.toFixed(2)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span className="font-bold">Discount</span>
                      <span className="font-bold">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                </>
              )}
              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3 text-gray-700">
                <span>Order Total</span>
                <span className='font-bold text-gray-700'>${orderTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button 
                onClick={handleProceedToCheckout}
                className="w-full bg-blue-500! text-white! py-3 rounded-full! font-medium hover:bg-blue-600!"
              >
                Proceed to Checkout
              </button>
              <button className="w-full bg-yellow-400! text-black! py-3 rounded-full! font-medium hover:bg-yellow-500! flex items-center justify-center space-x-2">
                <span>Check out with</span>
                <span className="font-bold">PayPal</span>
              </button>
              <button className="w-full border border-gray-400! bg-white! text-gray-700! py-3 rounded-full! font-medium hover:bg-gray-50!">
                Check Out with Multiple Addresses
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center space-x-2 text-sm">
              <span className='' ><img src={zip} alt="zip" /></span>
              <span className="font-bold text-black">ZIP</span>
              <span className="text-gray-600">own it now, up to 6 months interest free</span>
              <Link to="#" className="text-blue-6001 underline!">learn more</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;