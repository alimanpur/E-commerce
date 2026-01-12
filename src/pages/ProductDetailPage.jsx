import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { addToWishlist, removeFromWishlist } from '../features/wishlist/wishlistSlice';
import { FaStar, FaHeart, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import { ShoppingCart } from 'lucide-react';
import Footer from '../components/Footer/Footer';
import ProductTabContent from '../components/ProductTabContent';
import ProductContent from '../components/ProductContent';
import { useProducts } from '../sections/Products/useProducts';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);
  const [activeTab, setActiveTab] = useState('About Product');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
  };

  const toggleWishlist = () => {
    const isInWishlist = wishlistItems.find(item => item.id === product.id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="min-h-screen bg-white!">
      
      <div className="w-full ">
        {/* Top Section with Tabs and Price */}
        <div className="flex justify-between items-center mb-8 border-b! pb-4 px-7 py-6">
          <div className="flex space-x-8">
            {['About Product', 'Details', 'Specs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'bg-transparent! text-blue-600! border-b-2! border-blue-500!'
                    : 'bg-transparent! text-gray-500! hover:text-blue-700! border-b-2! hover:border-blue-500!'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-500!">On Sale from</div>
              <div className="text-2xl font-bold text-blue-600!">${product.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center border! border-gray-300! rounded!">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-700! px-3 py-2 hover:bg-gray-50! bg-white!"
              >
                -
              </button>
              <span className="text-gray-900! px-4 py-2 border-l! border-r! border-gray-300! bg-white! min-w-12! text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-700! px-3 py-2 hover:bg-gray-50! bg-white!"
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="bg-blue-500! text-white! px-6 py-2 rounded-4xl! hover:bg-blue-600! font-medium"
            >
              Add to Cart
            </button>
            <button 
              onClick={toggleWishlist}
              className={`p-2 border rounded-full! transition-colors bg-transparent! ${
                wishlistItems.find(item => item.id === product.id)
                  ? 'text-red-500! border-red-500! bg-transparent!'
                  : 'text-gray-400! border-gray-300! hover:text-red-500! hover:border-red-500!'
              }`}
            >
              <FaHeart className="w-5 h-5" />
            </button>
            <button className="bg-yellow-400! text-black! px-6 py-2 rounded-4xl! hover:bg-yellow-500! flex items-center space-x-2 font-medium">
              <span>💳</span>
              <span>PayPal</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left Side - Dynamic Content */}
          <ProductContent activeTab={activeTab} product={product} />

          {/* Right Side - Product Image */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-full h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full min-h-64 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tab Content Section */}
        <div className="mt-16">
          <ProductTabContent activeTab={activeTab} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;