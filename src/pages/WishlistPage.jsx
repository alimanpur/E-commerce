import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../features/wishlist/wishlistSlice';
import { addToCart } from '../features/cart/cartSlice';
import Footer from '../components/Footer/Footer';

const WishlistPage = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  const handleBuyNow = (item) => {
    dispatch(addToCart(item));
    // Navigate to checkout or cart page
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500! mb-8">
          <Link to="/" className="hover:text-blue-600!">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Wishlist</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-12">My Wishlist</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Wishlist Items */}
          <div className="lg:col-span-2">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 pb-4 border-b border-gray-200 mb-6">
              <div className="font-medium text-gray-900">Item</div>
              <div className="font-medium text-gray-900 text-center">Price</div>
              <div className="font-medium text-gray-900 text-center">Actions</div>
              <div className="font-medium text-gray-900 text-center">Buy Now</div>
              <div className="font-medium text-gray-900 text-center">Remove</div>
            </div>

            {/* Wishlist Items */}
            {wishlistItems.length > 0 ? wishlistItems.map((item) => (
              <div key={item.id} className="grid grid-cols-5 gap-4 py-6 border-b border-gray-100! items-center">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900!">{item.name}</h3>
                  </div>
                </div>
                <div className="text-gray-900! text-center font-bold">${item.price.toFixed(2)}</div>
                <div className="text-center">
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 bg-blue-500! text-white! rounded-full! hover:bg-blue-600! text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="text-center">
                  <button 
                    onClick={() => handleBuyNow(item)}
                    className="px-4 py-2 bg-green-500! text-white! rounded-full! hover:bg-green-600! text-sm"
                  >
                    Buy Now
                  </button>
                </div>
                <div className="text-center">
                  <button 
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="bg-transparent! text-red-500! hover:text-red-700! text-xl rounded-full!"
                  >
                    ×
                  </button>
                </div>
              </div>
            )) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Your wishlist is empty</p>
                <Link to="/" className="text-blue-600! hover:underline! mt-2 inline-block">
                  Continue Shopping
                </Link>
              </div>
            )}

            {/* Action Buttons */}
            {wishlistItems.length > 0 && (
              <div className="flex justify-between mt-8">
                <Link to="/" className="px-6 py-3 border border-gray-500! rounded-full! text-gray-700! hover:bg-gray-50!">
                  Continue Shopping
                </Link>
                <button 
                  onClick={handleClearWishlist}
                  className="px-6 py-3 bg-black! text-white! rounded-full! hover:bg-gray-800!"
                >
                  Clear Wishlist
                </button>
              </div>
            )}
          </div>

          {/* Wishlist Summary */}
          <div className="bg-blue-50 p-6 rounded h-fit">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wishlist Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-xl font-bold text-gray-700">Total Items</span>
                <span className="text-gray-700">{wishlistItems.length}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-2xl text-gray-700">Total Value</span>
                <span className="text-gray-700">
                  ${wishlistItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between text-lg font-bold text-gray-700">
                <span>Estimated Total</span>
                <span className='font-bold text-gray-700'>
                  ${wishlistItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </span>
              </div>
            </div>

            {wishlistItems.length > 0 && (
              <div className="mt-6 space-y-3">
                <button 
                  onClick={() => {
                    wishlistItems.forEach(item => dispatch(addToCart(item)));
                  }}
                  className="w-full bg-blue-500! text-white! py-3 rounded-full! font-medium hover:bg-blue-600!"
                >
                  Add All to Cart
                </button>
                <Link 
                  to="/cart"
                  className="w-full bg-green-500! text-white! py-3 rounded-full! font-medium hover:bg-green-600! flex items-center justify-center"
                >
                  Go to Cart
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WishlistPage;