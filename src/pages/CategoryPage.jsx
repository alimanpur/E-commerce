import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../sections/Products/useProducts';
import ProductCard from '../sections/Products/ProductCard';
import { ChevronDown, Filter, Grid, List } from 'lucide-react';
import Footer from '../components/Footer/Footer';

const CategoryPage = () => {
  const { category } = useParams();
  const { getProductsByCategory, getProductsByBrand, getBrandsByCategory } = useProducts();
  
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categoryName = category?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'All Products';
  const products = getProductsByBrand(categoryName, selectedBrand);
  const brands = getBrandsByCategory(categoryName);

  // Filter by price range
  const filteredProducts = products.filter(product => {
    if (priceRange === 'all') return true;
    const price = product.price;
    switch (priceRange) {
      case 'under-500': return price < 500;
      case '500-1000': return price >= 500 && price < 1000;
      case '1000-2000': return price >= 1000 && price < 2000;
      case 'over-2000': return price >= 2000;
      default: return true;
    }
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'reviews': return b.reviews - a.reviews;
      default: return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{categoryName}</span>
        </nav>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
            <p className="text-gray-600 mt-2">{sortedProducts.length} products found</p>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center space-x-4">
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#4A90E2]! text-white!' : 'bg-white! text-gray-600!'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[#4A90E2]! text-white!' : 'bg-white! text-gray-600!'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-blue-50 rounded-lg shadow-sm p-6 lg:sticky lg:top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <Filter size={20} className="text-gray-500" />
              </div>

              {/* Brand Filter */}
              {brands.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <input
                        type="radio"
                        name="brand"
                        value="all"
                        checked={selectedBrand === 'all'}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">All Brands</span>
                    </label>
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center text-gray-700">
                        <input
                          type="radio"
                          name="brand"
                          value={brand}
                          checked={selectedBrand === brand}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-700">
                    <input
                      type="radio"
                      name="price"
                      value="all"
                      checked={priceRange === 'all'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">All Prices</span>
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input
                      type="radio"
                      name="price"
                      value="under-500"
                      checked={priceRange === 'under-500'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Under $500</span>
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input
                      type="radio"
                      name="price"
                      value="500-1000"
                      checked={priceRange === '500-1000'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">$500 - $1,000</span>
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input
                      type="radio"
                      name="price"
                      value="1000-2000"
                      checked={priceRange === '1000-2000'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">$1,000 - $2,000</span>
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input
                      type="radio"
                      name="price"
                      value="over-2000"
                      checked={priceRange === 'over-2000'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Over $2,000</span>
                  </label>
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border text-gray-700 border-gray-300 rounded-md"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {sortedProducts.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                : "space-y-4"
              }>
                {sortedProducts.map(product => (
                  <div key={product.id} className={viewMode === 'list' ? 'bg-white rounded-lg shadow-sm' : ''}>
                    <ProductCard product={product} viewMode={viewMode} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4 flex justify-center">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4m0 0l-4-4m4 4V3" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or browse other categories.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;