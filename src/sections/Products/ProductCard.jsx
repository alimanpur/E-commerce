import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../features/wishlist/wishlistSlice';
import { Star, Heart } from 'lucide-react';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  
  // Fix: If product is undefined, return null or a skeleton to prevent crash
  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const statusStyles = {
  "in stock": "text-[#78A962] bg-[#78A962]",
  "out of stock": "text-[#E3503E] bg-[#E3503E]",
  "check availability": "text-[#E9A426] bg-[#E9A426]"
};

  // List view layout
  if (viewMode === 'list') {
    return (
      <div className="flex items-center p-6 bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-gray-300 rounded-lg">
        {/* Product Image */}
        <Link to={`/product/${product.id}`} className="w-24 h-24 shrink-0 mr-6">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
        </Link>

        {/* Product Info */}
        <div className="flex-1 min-w-0 relative">
          {/* Wishlist Button */}
          <button 
            onClick={handleWishlistToggle}
            className="absolute top-0 right-0 p-2 z-10"
          >
            <Heart 
              size={20} 
              className={`transition-colors ${
                isInWishlist 
                  ? 'text-red-500 fill-red-500' 
                  : 'text-gray-400 hover:text-red-500'
              }`} 
            />
          </button>

          {/* Stock Status */}
          <div className={`flex items-center gap-1 mb-2 text-[10px] ${statusStyles[product.status]?.split(' ')[0]}`}>
            <span className={`w-2 h-2 rounded-full ${statusStyles[product.status]?.split(' ')[1]}`}></span>
            {product.status}
          </div>

          {/* Title */}
          <Link to={`/product/${product.id}`} className="text-lg font-medium text-black hover:text-blue-600 block mb-2">
            {product.name}
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex text-[#E9A426]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-sm text-[#A2A6B0]">({product.reviews} reviews)</span>
          </div>

          {/* Brand */}
          {product.brand && (
            <p className="text-sm text-gray-600 mb-2">Brand: {product.brand}</p>
          )}
        </div>

        {/* Price and Actions */}
        <div className="text-right ml-6">
          <p className="text-sm text-[#A2A6B0] line-through">${product.oldPrice?.toFixed(2)}</p>
          <p className="text-2xl font-bold text-black mb-3">${product.price?.toFixed(2)}</p>
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleAddToCart}
              className="bg-[#4A90E2]! text-white! px-6 py-2 rounded-full! hover:bg-[#357ABD]! text-sm transition-colors flex items-center space-x-2"
            >
              <span>Add to Cart</span>
            </button>
            <button 
              onClick={handleWishlistToggle}
              className={`p-2 border rounded-full! transition-colors ${
                isInWishlist 
                  ? 'text-red-500! border-red-500! bg-red-50!' 
                  : 'text-gray-400! border-gray-300! bg-white! hover:text-red-500! hover:border-red-500!'
              }`}
            >
              <Heart size={18} className={isInWishlist ? 'fill-current' : ''} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid view layout (default)
  return (
    <div className="flex flex-col p-4 bg-white hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer relative group border border-gray-100 hover:border-gray-300 rounded-lg">
      {/* Wishlist Button */}
      <button 
        onClick={handleWishlistToggle}
        className={`absolute top-2 right-2 p-2 z-10 rounded-full! transition-all duration-200 ${
          isInWishlist 
            ? 'text-red-500! bg-red-50! border border-red-200!' 
            : 'text-gray-400! bg-white! border border-gray-200! opacity-0 group-hover:opacity-100 hover:text-red-500! hover:border-red-300!'
        }`}
      >
        <Heart 
          size={16} 
          className={isInWishlist ? 'fill-current' : ''} 
        />
      </button>

      {/* Stock Status - Using Color-9 (Green) from your palette */}
        <div className={`flex items-center gap-1 mb-2 text-[10px] ${statusStyles[product.status]?.split(' ')[0]}`}>
    <span className={`w-2 h-2 rounded-full ${statusStyles[product.status]?.split(' ')[1]}`}></span>
    {product.status}
    </div>

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="h-36 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.name} className="max-h-28 object-contain" />
      </Link>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        <div className="flex text-[#E9A426]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < product.rating ? "currentColor" : "none"} />
          ))}
        </div>
        <span className="text-[12px] text-[#A2A6B0]">Reviews ({product.reviews})</span>
      </div>

      {/* Title */}
      <Link to={`/product/${product.id}`} className="text-[13px] text-black leading-tight mb-4 line-clamp-2 h-8 hover:text-blue-600">
        {product.name}
      </Link>

      {/* Brand */}
      {product.brand && (
        <p className="text-[11px] text-gray-600 mb-2">Brand: {product.brand}</p>
      )}

      {/* Pricing - Using Color-10 for old price */}
      <div className="mt-auto">
        <p className="text-[14px] text-[#A2A6B0] line-through">${product.oldPrice?.toFixed(2)}</p>
        <p className="text-[18px] font-bold text-black">${product.price?.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart}
          className="w-full mt-2 bg-[#4A90E2]! text-white! py-2 rounded-full! hover:bg-[#357ABD]! text-sm transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;