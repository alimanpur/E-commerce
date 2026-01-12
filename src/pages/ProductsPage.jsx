import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaThLarge, FaList, FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { ShoppingCart } from "lucide-react";
import { useProducts } from '../sections/Products/useProducts';
import { addToWishlist, removeFromWishlist } from '../features/wishlist/wishlistSlice';
import { addToCart } from '../features/cart/cartSlice';
import Footer from '../components/Footer/Footer';
import msiProductImage from "../assets/0db52e21-46c0-4fbd-a3d5-487dcb7be6b0.png";
import msiPro from "../assets/ac9da762-3a89-4944-a88a-624d07d57622.png";
import msiPro1 from "../assets/81e34b10-3129-4520-ab02-ad75d0d297b1.png";
import msiPro2 from "../assets/beda4027-6c88-47da-9e63-0bb3cf22a8f9.png";
import brand1 from'../assets/Frame 22.png';
import brand2 from'../assets/Frame 23.png';
import brand3 from'../assets/Frame 24.png';
import brand4 from'../assets/Frame 25.png';
import brand5 from'../assets/Frame 26.png';
import brand6 from'../assets/Frame 27.png';
import brand7 from'../assets/Frame 34.png';
import chair from'../assets/c1c35572-571c-4170-98d7-59f9acca0240.png';

const ProductsPage = ({ setWishlistCount }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('position');
  const [itemsPerPage, setItemsPerPage] = useState(21);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    color: []
  });
  const [compareList, setCompareList] = useState([]);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  // Get products from useProducts hook
  const { products: allProducts } = useProducts();

  // Filter products based on active filters
  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
    const priceMatch = filters.price.length === 0 || filters.price.includes(product.priceRange);
    const colorMatch = filters.color.length === 0 || filters.color.includes(product.color);
    return categoryMatch && priceMatch && colorMatch;
  });

  // Sort products based on sortBy value
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price - b.price;
      case 'position':
      default:
        return a.id - b.id;
    }
  });

  // Paginate products
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  const clearAllFilters = () => {
    setFilters({
      category: [],
      price: [],
      color: []
    });
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlistItems.find(item => item.id === product.id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const toggleCompare = (product) => {
    setCompareList(prev => 
      prev.find(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 16 MULTITOUCH All-In-On...',
      price: 499.00,
      originalPrice: 599.00,
      rating: 4,
      reviews: 2,
      image: msiPro,
      inStock: true,
      isOnSale: true
    },
    {
      id: 2,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 16 MULTITOUCH All-In-On...',
      price: 489.00,
      rating: 4,
      reviews: 4,
      image: msiPro1,
      inStock: true,
      isOnSale: false
    },
    {
      id: 3,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 16 MULTITOUCH All-In-On...',
      price: 499.00,
      rating: 5,
      reviews: 1,
      image: msiPro2,
      inStock: true,
      isOnSale: false
    },
    {
      id: 4,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 16 MULTITOUCH All-In-On...',
      price: 499.00,
      rating: 4,
      reviews: 4,
      image: msiProductImage,
      inStock: true,
      isOnSale: false
    },
    {
      id: 5,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 16 MULTITOUCH All-In-On...',
      price: 499.00,
      rating: 4,
      reviews: 1,
      image: msiPro,
      inStock: true,
      isOnSale: false
    },
    {
      id: 6,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 16 MULTITOUCH All-In-On...',
      price: 499.00,
      rating: 4,
      reviews: 1,
      image: msiPro1,
      inStock: true,
      isOnSale: false
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const ProductCard = ({ product }) => {
    const handleProductClick = () => {
      navigate(`/product/${product.id}`);
    };

    if (viewMode === 'list') {
      return (
        <div className="flex h-72 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="w-80 h-80 shrink-0 mr-4 cursor-pointer" onClick={handleProductClick}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-2 cursor-pointer hover:text-blue-600" onClick={handleProductClick}>
              {product.name}
            </h3>
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">Reviews ({product.reviews})</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex space-x-3 mt-32 w-max">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="bg-blue-500! text-white! px-8 py-2 rounded-2xl! flex items-center space-x-2 hover:bg-blue-600! transition-colors"
              >
                <ShoppingCart className='w-4 h-4'/>
                <span>Add To Cart</span>
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
                className={`p-2 border bg-white! rounded-full! transition-colors ${
                  wishlistItems.find(item => item.id === product.id)
                    ? 'text-red-500! border-red-500!'
                    : 'text-gray-400! border-gray-300! hover:text-red-5001 hover:border-red-500!'
                }`}
              >
                <FaHeart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className=" bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group" onClick={handleProductClick}>
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-cover rounded"
          />
          <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product);
              }}
              className={`p-1 bg-white! rounded-full! shadow-md transition-colors ${
                wishlistItems.find(item => item.id === product.id)
                  ? 'text-red-500!'
                  : 'text-gray-400! hover:text-red-500!'
              }`}
            >
              <FaHeart className="w-3 h-3" />
            </button>
          </div>
          {product.isOnSale && (
            <div className="absolute top-2 left-2 bg-red-500! text-white px-1 py-0.5 rounded text-xs font-medium">
              Sale
            </div>
          )}
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center">
            <div className="flex mr-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
          
          <h3 className="text-xs font-medium text-gray-900 line-clamp-2 min-h-8">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-bold text-gray-900">${product.price?.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-500 line-through ml-1">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500! text-white! p-1 rounded! hover:bg-blue-600!"
            >
              <FaShoppingCart className="w-3 h-3" />
            </button>
          </div>
          
          <div className="flex items-center text-xs text-gray-500">
            <span className={`w-1.5 h-1.5 rounded-full mr-1 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Banner */}
      <div className="bg-linear-to-r from-blue-900 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{category?.toUpperCase() || 'MSI PS Series'}</h1>
            <p className="text-xl opacity-90">High Performance at an Affordable Price</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm flex items-center">
            <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products/laptops" className="text-gray-500 hover:text-blue-600 transition-colors">
              Laptops
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products/notebooks" className="text-gray-500 hover:text-blue-600 transition-colors">
              Everyday Use Notebooks
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-blue-600 font-medium">{category || 'MSI PS Series'}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex">
          {/* Sidebar Filters */}
          <div className="w-64 mr-8 space-y-6">
            {/* Filters Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Filters</h3>
                <button 
                  onClick={clearAllFilters}
                  className="w-full bg-gray-100! text-gray-600! py-2 px-4 rounded-full! text-sm hover:bg-gray-200! transition-colors"
                >
                  Clear Filter
                </button>
              </div>
              
              {/* Category Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900!">Category</h4>
                  <span className="text-gray-400!">▲</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Custom Builds', count: 15 },
                    { name: 'MSI Laptops', count: 45 },
                    { name: 'Gaming', count: 25 },
                    { name: 'Desktops', count: 12 }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={filters.category.includes(item.name)}
                          onChange={() => handleFilterChange('category', item.name)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 border-2 rounded mr-3 flex items-center justify-center ${
                          filters.category.includes(item.name) 
                            ? 'bg-blue-500 border-blue-500' 
                            : 'border-gray-300'
                        }`}>
                          {filters.category.includes(item.name) && (
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </label>
                      <span className="text-sm text-gray-500">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Price</h4>
                  <span className="text-gray-400">▲</span>
                </div>
                <div className="space-y-3">
                  {[
                    { range: '$0.00 - $1,000.00', count: 19 },
                    { range: '$1,000.00 - $2,000.00', count: 21 },
                    { range: '$2,000.00 - $3,000.00', count: 9 },
                    { range: '$3,000.00 - $4,000.00', count: 6 },
                    { range: '$4,000.00 - $5,000.00', count: 3 },
                    { range: '$5,000.00 - $6,000.00', count: 1 },
                    { range: '$6,000.00 - $7,000.00', count: 1 },
                    { range: '$7,000.00 And Above', count: 1 }
                  ].map((item) => (
                    <div key={item.range} className="flex items-center justify-between">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={filters.price.includes(item.range)}
                          onChange={() => handleFilterChange('price', item.range)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 border-2 rounded mr-3 flex items-center justify-center ${
                          filters.price.includes(item.range) 
                            ? 'bg-blue-500 border-blue-500' 
                            : 'border-gray-300'
                        }`}>
                          {filters.price.includes(item.range) && (
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-gray-700">{item.range}</span>
                      </label>
                      <span className="text-sm text-gray-500">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Color</h4>
                  <span className="text-gray-400">▲</span>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleFilterChange('color', 'black')}
                    className={`w-8 h-8 rounded-full! bg-black! border-2 ${
                      filters.color.includes('black!') ? 'border-blue-500!' : 'border-gray-300!'
                    }`}
                  ></button>
                  <button 
                    onClick={() => handleFilterChange('color', 'red')}
                    className={`w-8 h-8 rounded-full! bg-red-500! border-2 ${
                      filters.color.includes('red!') ? 'border-blue-500!' : 'border-gray-300!'
                    }`}
                  ></button>
                </div>
              </div>

              {/* Filter Name Dropdown */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Filter Name</h4>
                  <span className="text-gray-400">▼</span>
                </div>
              </div>

              {/* Apply Filters Button */}
              <button className="w-full bg-blue-500! text-white! py-3 px-4 rounded-full! font-medium hover:bg-blue-600! transition-colors">
                Apply Filters ({filters.category.length + filters.price.length + filters.color.length})
              </button>
            </div>

            {/* Brands Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Brands</h3>
                <button className="w-full bg-gray-100! text-gray-600! py-2 px-4 rounded-full! text-sm hover:bg-gray-200! transition-colors">
                  All Brands
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded">
                  <img src={brand1} alt="1" />
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded">
                  <img src={brand2} alt="2" />
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded">
                  <img src={brand3} alt="3" />
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded">
                  <img src={brand4} alt="4" />
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded">
                  <img src={brand5} alt="5" />
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded">
                  <img src={brand6} alt="6" />
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded">
                  <img src={brand7} alt="7" />
                </div>
              </div>
            </div>

            {/* Compare Products Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Compare Products</h3>
              <div className="text-center text-gray-600">
                {compareList.length === 0 ? (
                  <p>You have no items to compare.</p>
                ) : (
                  <div className="space-y-2">
                    {compareList.map(product => (
                      <div key={product.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm truncate">{product.name.substring(0, 30)}...</span>
                        <button 
                          onClick={() => toggleCompare(product)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* My Wish List Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">My Wish List</h3>
              <div className="text-center text-gray-600">
                {wishlistItems.length === 0 ? (
                  <p>You have no items in your wish list.</p>
                ) : (
                  <div className="space-y-2">
                    {wishlistItems.slice(0, 3).map(product => (
                      <div key={product.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm truncate">{product.name.substring(0, 30)}...</span>
                        <button 
                          onClick={() => toggleWishlist(product)}
                          className="bg-blue-50 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    {wishlistItems.length > 3 && (
                      <p className="text-xs text-gray-500">+{wishlistItems.length - 3} more items</p>
                    )}
                    <Link 
                      to="/wishlist" 
                      className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View All Wishlist Items
                    </Link>
                  </div>
                )}
              </div>
            </div>
                <div className='h-fit'>
                  <img src={chair} alt="chair" />

                </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Page Header */}
            <div className="mb-6">
              {/* Items count and filter tags */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600! text-sm">Items {startIndex + 1}-{Math.min(endIndex, totalProducts)} of {totalProducts}</span>
                  
                  {/* Active Filter Tags */}
                  <div className="flex items-center space-x-2">
                    {filters.category.includes('CUSTOM PCS') && (
                      <div className="flex items-center bg-white! border border-gray-300! rounded! px-3 py-1 text-sm">
                        <span>CUSTOM PCS (24)</span>
                        <button 
                          onClick={() => handleFilterChange('category', 'CUSTOM PCS')}
                          className="ml-2 bg-red-200! text-red-500! hover:text-red-700!"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    {filters.category.includes('HP/COMPAQ PCS') && (
                      <div className="flex items-center bg-white! border border-gray-300! rounded! px-3 py-1 text-sm">
                        <span>HP/COMPAQ PCS (24)</span>
                        <button 
                          onClick={() => handleFilterChange('category', 'HP/COMPAQ PCS')}
                          className="ml-2 bg-red-200! text-red-500! hover:text-red-700!"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    {(filters.category.length > 0 || filters.price.length > 0 || filters.color.length > 0) && (
                      <button 
                        onClick={clearAllFilters}
                        className="bg-white! border! border-gray-300! rounded! px-3 py-1 text-sm text-gray-600! hover:bg-gray-50!"
                      >
                        Clear All
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Sort By */}
                  <div className="flex items-center">
                    <label className="text-sm text-gray-700! mr-2">Sort By:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border text-gray-700! border-gray-300! rounded px-3 py-1 text-sm bg-white!"
                    >
                      <option value="position">Position</option>
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                    </select>
                  </div>

                  {/* Items Per Page */}
                  <div className="flex items-center">
                    <label className="text-sm text-gray-700! mr-2">Show:</label>
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                      className="border text-gray-700! border-gray-300! rounded! px-3 py-1 text-sm bg-white!"
                    >
                      <option value={10}>10 per page</option>
                      <option value={21}>21 per page</option>
                      <option value={50}>50 per page</option>
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex border rounded! gap-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-gray-200!' : 'bg-white! hover:bg-gray-50!'}`}
                    >
                      <FaThLarge className="w-4 h-4 text-gray-400!" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-gray-200!' : 'bg-white! hover:bg-gray-50!'}`}
                    >
                      <FaList className="w-4 h-4 text-gray-400!" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-5 gap-4' 
              : 'space-y-4'
            }>
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-full! flex items-center justify-center ${currentPage === 1 ? 'bg-gray-200! text-gray-400!' : 'bg-white border! border-gray-300! text-gray-400! hover:bg-gray-50!'}`}
                  >
                    ←
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)) {
                      return (
                        <button 
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-full! flex items-center justify-center ${
                            currentPage === pageNum 
                              ? 'bg-blue-500! text-white!' 
                              : 'bg-white border! border-gray-300! text-gray-700! hover:bg-gray-50!'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                      return <span key={pageNum} className="px-3 py-2 text-gray-400!">...</span>;
                    }
                    return null;
                  })}
                  
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-full! flex items-center justify-center ${currentPage === totalPages ? 'bg-gray-200! text-gray-400!' : 'bg-white border! border-gray-300! text-gray-400! hover:bg-gray-50!'}`}
                  >
                    →
                  </button>
                </nav>
              </div>
            )}

            {/* Product Description Section */}
            <div className="mt-16">
              <div className="bg-white p-8 rounded-lg relative">
                <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
                  <div className={`transition-all duration-300 ${isDescriptionExpanded ? 'max-h-none' : 'max-h-32 overflow-hidden'}`}>
                    <p className="mb-4">
                      MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.
                    </p>
                    <p className="mb-4">
                      There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
                    </p>
                    <p>
                      Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the "movie mode" for which contrast is increased.
                    </p>
                  </div>
                </div>
                
                {/* Gradient overlay - only show when collapsed */}
                {!isDescriptionExpanded && (
                  <div className="absolute bottom-16 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                )}
                
                {/* Read More Button */}
                <div className="text-center mt-6">
                  <button 
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="bg-gray-400! text-grey-400! px-6 py-2 rounded-full! hover:bg-grey-600! hover:text-white transition-colors relative z-10"
                  >
                    {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;