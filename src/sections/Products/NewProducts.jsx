import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductList from './ProductList';
import { useProducts } from './useProducts';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import zipLogo from '../../assets/zip.png';

const NewProducts = () => {
  const { products } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 6;
  
  const nextProducts = () => {
    if (currentIndex + productsPerPage < products.length) {
      setCurrentIndex(currentIndex + productsPerPage);
    }
  };
  
  const prevProducts = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - productsPerPage);
    }
  };
  
  const visibleProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <section className="py-10 bg-white">
      {/* Aligned Container */}
      <div className="min-w-300 mx-24 px-4 md:px-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] font-bold text-black">New Products</h2>
          <a href="#" className="text-[13px] text-[#0156FF] underline">See All New Products</a>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevProducts}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10! w-10 h-10 bg-white! border-2! border-gray-300! rounded-full! flex items-center justify-center disabled:opacity-50! disabled:cursor-not-allowed hover:bg-gray-50! shadow-md! text-black"
          >
            <ChevronLeft size={20} className="text-black z-20!"/>
          </button>
          
          <button 
            onClick={nextProducts}
            disabled={currentIndex + productsPerPage >= products.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10! w-10 h-10 bg-white! border-2! border-gray-300! rounded-full! flex items-center justify-center disabled:opacity-50! disabled:cursor-not-allowed hover:bg-gray-50! shadow-md!"
          >
            <ChevronRight size={20} className="text-black! font-bold! z-100!"/>
          </button>

          {/* Grid showing one row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visibleProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
        
        {/* Zip Advertisement */}
        <div className="mt-8 w-full bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <img src={zipLogo} alt="Zip" className="h-8" /><span className=' font-bold text-blue-600'>ZIP</span>
            <span className="text-gray-600 ">|  own it now, up to 6 months interest free</span>
            <span className="text-xs text-gray-500 underline cursor-pointer hover:text-blue-600">LEARN MORE</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewProducts;