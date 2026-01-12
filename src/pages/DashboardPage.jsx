import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { FaUser, FaMapMarkerAlt, FaShoppingBag, FaCreditCard, FaFileContract, FaHeart, FaStar, FaEnvelope } from 'react-icons/fa';

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState('account-info');

  const sidebarItems = [
    { id: 'account-info', label: 'Account Information', icon: FaUser },
    { id: 'address-book', label: 'Address Book', icon: FaMapMarkerAlt },
    { id: 'my-orders', label: 'My Orders', icon: FaShoppingBag },
    { id: 'payment-methods', label: 'Stored Payment Methods', icon: FaCreditCard },
    { id: 'billing-agreement', label: 'Billing Agreement', icon: FaFileContract },
    { id: 'wishlist', label: 'My Wishlist', icon: FaHeart },
    { id: 'product-reviews', label: 'My Product Reviews', icon: FaStar },
    { id: 'newsletter', label: 'Newsletter Subscription', icon: FaEnvelope }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'account-info':
        return <AccountInformation />;
      case 'address-book':
        return <AddressBook />;
      case 'my-orders':
        return <MyOrders />;
      case 'payment-methods':
        return <PaymentMethods />;
      case 'billing-agreement':
        return <BillingAgreement />;
      case 'wishlist':
        return <MyWishlist />;
      case 'product-reviews':
        return <ProductReviews />;
      case 'newsletter':
        return <NewsletterSubscription />;
      default:
        return <AccountInformation />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white! border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-600 font-medium">My Dashboard</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-black mb-8">My Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-black mb-4">Account Dashboard</h2>
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center px-3 py-2 text-left rounded! transition-colors bg-transparent! ${
                        activeSection === item.id
                          ? 'text-blue-600! border-l-4 border-blue-600!'
                          : 'text-gray-700! hover:bg-gray-50!'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Account Information Component
const AccountInformation = () => (
  <div>
    <h2 className="text-2xl font-bold text-black mb-6">Account Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Contact Information</h3>
        <div className="space-y-3">
          <p className='text-black'><span className="text-black font-medium">Name:</span> John Doe</p>
          <p className='text-black'><span className="text-black font-medium">Email:</span> john.doe@email.com</p>
          <button className="bg-transparent! text-blue-600! hover:underline!">Edit</button>
          <button className="bg-transparent! text-blue-600! hover:underline! ml-4">Change Password</button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Newsletters</h3>
        <p className="text-gray-600 mb-2">You don't subscribe to our newsletter.</p>
        <button className="bg-transparent! text-blue-600! hover:underline!">Edit</button>
      </div>
    </div>
    
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-black mb-4">Address Book</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-medium text-black mb-2">Default Billing Address</h4>
          <p className="text-gray-600 mb-2">You have not set a default billing address.</p>
          <button className="bg-transparent! text-blue-600! hover:underline!">Edit Address</button>
        </div>
        <div>
          <h4 className="font-medium text-black mb-2">Default Shipping Address</h4>
          <p className="text-gray-600 mb-2">You have not set a default shipping address.</p>
          <button className="bg-transparent! text-blue-600! hover:underline!">Edit Address</button>
        </div>
      </div>
    </div>
  </div>
);

// Address Book Component
const AddressBook = () => {
  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      isDefault: true
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black">Address Book</h2>
        <button className="bg-blue-600! text-white! px-4 py-2 rounded! hover:bg-blue-700!">
          Add New Address
        </button>
      </div>
      
      {addresses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <div key={address.id} className="border rounded-lg p-4 relative">
              {address.isDefault && (
                <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Default
                </span>
              )}
              <h3 className="font-semibold text-black mb-2">{address.type}</h3>
              <div className="text-gray-700 space-y-1">
                <p>{address.name}</p>
                <p>{address.address}</p>
                <p>{address.city}, {address.state} {address.zip}</p>
              </div>
              <div className="mt-4 space-x-2">
                <button className="bg-transparent! text-blue-600! hover:underline! text-sm">Edit</button>
                <button className="bg-transparent! text-red-600! hover:underline! text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaMapMarkerAlt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">You have no saved addresses.</p>
          <button className="bg-blue-600! text-white! px-6 py-2 rounded! hover:bg-blue-700!">
            Add Your First Address
          </button>
        </div>
      )}
    </div>
  );
};

// My Orders Component
const MyOrders = () => {
  const orders = [
    {
      id: '#000001',
      date: '2024-01-15',
      status: 'Complete',
      total: '$1,299.99',
      items: 'MSI Gaming Laptop, Wireless Mouse'
    },
    {
      id: '#000002', 
      date: '2024-01-10',
      status: 'Processing',
      total: '$599.99',
      items: 'Mechanical Keyboard, Gaming Headset'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">My Orders</h2>
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-black">Order {order.id}</h3>
                  <p className="text-sm text-gray-600">Placed on {order.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{order.items}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black">{order.total}</span>
                <div className="space-x-2">
                  <button className="bg-transparent! text-blue-600! hover:underline! text-sm">View Details</button>
                  <button className="bg-transparent! text-blue-600! hover:underline! text-sm">Reorder</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">You have placed no orders.</p>
          <Link to="/products/all" className="bg-blue-600! text-white! px-6 py-2 rounded! hover:bg-blue-700! inline-block">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

// Payment Methods Component
const PaymentMethods = () => {
  const paymentMethods = [
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black">Stored Payment Methods</h2>
        <button className="bg-blue-600! text-white! px-4 py-2 rounded! hover:bg-blue-700!">
          Add New Payment Method
        </button>
      </div>
      
      {paymentMethods.length > 0 ? (
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="border rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{method.type}</span>
                </div>
                <div>
                  <p className="font-semibold text-black">•••• •••• •••• {method.last4}</p>
                  <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                  {method.isDefault && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Default</span>
                  )}
                </div>
              </div>
              <div className="space-x-2">
                <button className="bg-transparent! text-blue-600! hover:underline! text-sm">Edit</button>
                <button className="bg-transparent! text-red-600! hover:underline! text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaCreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">You have no stored payment methods.</p>
          <button className="bg-blue-600! text-white! px-6 py-2 rounded! hover:bg-blue-700!">
            Add Payment Method
          </button>
        </div>
      )}
    </div>
  );
};

// Billing Agreement Component
const BillingAgreement = () => (
  <div>
    <h2 className="text-2xl font-bold text-black mb-6">Billing Agreement</h2>
    <div className="text-center py-12">
      <FaFileContract className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <p className="text-gray-600">You have no billing agreements.</p>
    </div>
  </div>
);

// My Wishlist Component
const MyWishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'MSI Gaming Laptop',
      price: '$1,299.99',
      image: '/api/placeholder/150/150',
      inStock: true
    },
    {
      id: 2,
      name: 'Mechanical Gaming Keyboard',
      price: '$149.99', 
      image: '/api/placeholder/150/150',
      inStock: false
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">My Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <h3 className="font-semibold text-black mb-2">{item.name}</h3>
              <p className="text-lg font-bold text-blue-600 mb-2">{item.price}</p>
              <p className={`text-sm mb-4 ${
                item.inStock ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
              <div className="space-y-2">
                <button className="w-full bg-blue-600! text-white! py-2 rounded! hover:bg-blue-700!">
                  Add to Cart
                </button>
                <button className="w-full bg-transparent! text-red-600! hover:underline! text-sm">
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">You have no items in your wish list.</p>
          <Link to="/products/all" className="bg-blue-600! text-white! px-6 py-2 rounded! hover:bg-blue-700! inline-block">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

// Product Reviews Component
const ProductReviews = () => {
  const reviews = [
    {
      id: 1,
      product: 'MSI Gaming Laptop',
      rating: 5,
      date: '2024-01-20',
      review: 'Excellent laptop for gaming. Great performance and build quality.'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">My Product Reviews</h2>
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-black">{review.product}</h3>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
              </div>
              <p className="text-gray-700">{review.review}</p>
              <div className="mt-4 space-x-2">
                <button className="bg-transparent! text-blue-600! hover:underline! text-sm">Edit Review</button>
                <button className="bg-transparent! text-red-600! hover:underline! text-sm">Delete Review</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaStar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">You have submitted no reviews.</p>
        </div>
      )}
    </div>
  );
};

// Newsletter Subscription Component
const NewsletterSubscription = () => (
  <div>
    <h2 className="text-2xl font-bold text-black mb-6">Newsletter Subscription</h2>
    <div className="max-w-2xl">
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="mr-3" />
          <span className="text-gray-700">General Subscription</span>
        </label>
      </div>
      <button className="bg-blue-600! text-white! px-6 py-2 rounded! hover:bg-blue-700!">
        Save
      </button>
    </div>
  </div>
);

export default DashboardPage;