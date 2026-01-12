import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useProducts } from './useProducts';
import customebuilds from'../../assets/c346d302-b3ef-4449-88a9-184e22a5ec5f.png';
import gamingmonitors from'../../assets/a83ccef9-4e13-4d34-9d93-d88df3d35e44.png';
import desktops from'../../assets/70243a5a-5ee4-42d1-8294-fbe720d414a4.png';
import msilaptops from'../../assets/615a3e9d-02fb-49bb-85b7-9b1307ea827e.png';
import brand1 from'../../assets/Frame 22.png';
import brand2 from'../../assets/Frame 23.png';
import brand3 from'../../assets/Frame 24.png';
import brand4 from'../../assets/Frame 25.png';
import brand5 from'../../assets/Frame 26.png';
import brand6 from'../../assets/Frame 27.png';
import brand7 from'../../assets/Frame 34.png';

const ProductList = () => {
  const { products, getProductsByCategory } = useProducts();

  const categories = [
    { 
      name: 'Laptops', 
      image: msilaptops, 
      products: getProductsByCategory('Laptops').slice(0, 5)
    },
    { 
      name: 'Desktop PCs', 
      image: desktops, 
      products: getProductsByCategory('Desktop PCs').slice(0, 5)
    },
    { 
      name: 'PC Parts', 
      image: customebuilds, 
      products: getProductsByCategory('PC Parts').slice(0, 5)
    },
    { 
      name: 'All Other Products', 
      image: gamingmonitors, 
      products: getProductsByCategory('All Other Products').slice(0, 5)
    }
  ];

  const brandLogos = [
    brand1,
    brand2, 
    brand3,
    brand4,
    brand5,
    brand6,
    brand7
  ];

  const renderCategorySection = (category) => (
    <div className="mb-12" key={category.name}>
      <div className="flex gap-8">
        {/* Category Image */}
        <div className="w-56 shrink-0">
          <div className="relative w-56 h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent z-10"></div>
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between text-white">
              <h3 className="text-lg font-bold">{category.name}</h3>
              <Link 
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="text-xs bg-white/20 px-3 py-1 rounded self-start hover:bg-white/30"
              >
                See All Products
              </Link>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {/* Products */}
          <div className="grid grid-cols-5 gap-4">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <>
      <section className="py-10 bg-white">
        <div className="min-w-300 mx-24 px-4 md:px-10">
          {/* Render all category sections */}
          {categories.map(category => renderCategorySection(category))}
        </div>
      </section>
      
      {/* Brand Logos Section */}
      <section className="py-16 bg-white overflow-hidden relative">
        {/* Left gradient fade - full screen width */}
        <div className="absolute left-0 top-0 w-96 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        {/* Right gradient fade - full screen width */}
        <div className="absolute right-0 top-0 w-96 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="min-w-300 mx-24 px-4 md:px-10">
          <div className="flex animate-scroll items-center">
              {/* First set of logos */}
              {brandLogos.map((logo, index) => (
                <div key={index} className="shrink-0 mx-12 flex items-center justify-center">
                  <img src={logo} alt={`Brand ${index + 1}`} className="h-28 w-auto opacity-60 hover:opacity-100 transition-opacity filter grayscale" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="shrink-0 mx-12 flex items-center justify-center">
                  <img src={logo} alt={`Brand ${index + 1}`} className="h-28 w-auto opacity-100 hover:opacity-100 transition-opacity filter grayscale" />
                </div>
              ))}
            </div>
        </div>
      </section>
      
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default ProductList;