import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../sections/Products/useProducts.js';

const ProductContent = ({ activeTab, product }) => {
  const renderAboutContent = () => (
    <div className="space-y-6 p-24 bg-blue-50">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500! mb-6">
        <Link to="/" className="hover:text-blue-600!">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-blue-600!">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900!">{product.name}</span>
      </nav>

      {/* Product Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900! mb-3">
          {product.name}
        </h1>
        <p className="text-blue-600! mb-6 text-sm">
          Be the first to review this product
        </p>
        <p className="text-gray-700! leading-relaxed text-sm">
          MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop
        </p>
      </div>

      {/* Contact and Review */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-blue-600! mb-2">
          <span className="text-sm">Have a Question?</span>
          <Link to="/contact" className="underline text-sm">Contact Us</Link>
        </div>
        <div className="text-gray-600! text-sm">
          SKU (REVIEW)
        </div>
      </div>

      {/* More Information */}
      <div className="bg-transparent! border-t! border-gray-200! pt-6">
        <button className="bg-transparent! flex items-center space-x-2 text-gray-700! hover:text-blue-600! text-sm mt-20">
          <span>+</span>
          <span className="bg-transparent! font-medium">MORE INFORMATION</span>
        </button>
      </div>
    </div>
  );

  const renderDetailsContent = () => (
    <div className="space-y-6 p-24 bg-blue-50">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500! mb-6">
        <Link to="/" className="hover:text-blue-600!">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-blue-600!">Laptops</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900!">{product.name}</span>
      </nav>

      {/* Product Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900! mb-2">{product.name}</h2>
        <p className="text-blue-600! text-sm mb-6">Be the first to review this product</p>
      </div>
      
      <div className="space-y-3 text-gray-800!">
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>Intel Core i7-10700F</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>Intel H470</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>Wi-Fi 6</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX OC</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>SO-DIMM 16GB (16GBx1) DDR4 2666MHz</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>2 total slots (64GB Max)</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5") 5400RPM</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>Gaming Keyboard GK30 + Gaming Mouse GM11</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>3-in-1 MSI Gaming Software (MYSTIC LIGHT RGB LED)</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>Intel Wi-Fi 6 AX200 (2x2 802.11ax)</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>AX200 Wi-Fi 6 + BT5.0</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>PSI 330W</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800! rounded-full mt-2 mr-3 shrink-0"></span>
          <span>Fan Cooler</span>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t! border-gray-200!">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600! mb-1">Have a Question? <Link to="/contact" className="text-blue-600! underline cursor-pointer">Contact Us</Link></p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600!">SKU: LGS72A</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="bg-transparent! flex items-center text-gray-800! font-medium">
          <span className="mr-2">+</span>
          <span>MORE INFORMATION</span>
        </button>
      </div>
    </div>
  );

  const renderSpecsContent = () => (
    <div className="space-y-6 p-24 bg-blue-50">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500! mb-6">
        <Link to="/" className="hover:text-blue-600!">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/products" className="hover:text-blue-600!">Laptops</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-500!">MSI WS Series</span>
      </nav>

      {/* Product Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900! mb-3">
          MSI MPG Trident 3
        </h1>
        <p className="text-blue-600! mb-6 text-sm">
          Be the first to review this product
        </p>
      </div>

      {/* Specs Table */}
      <div className="border border-gray-300! rounded bg-white! mb-8">
        <div className="border-b border-gray-300! p-4 flex justify-between">
          <span className="text-gray-900! font-medium">CPU</span>
          <span className="text-gray-500!">N/A</span>
        </div>
        <div className="border-b border-gray-300! p-4 flex justify-between">
          <span className="text-gray-900! font-medium">Featured</span>
          <span className="text-gray-500!">N/A</span>
        </div>
        <div className="p-4 flex justify-between">
          <span className="text-gray-900! font-medium">I/O Ports</span>
          <span className="text-gray-500!">N/A</span>
        </div>
      </div>

      {/* Contact and SKU */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <span className="text-gray-900! text-sm">Have a Question?</span>
          <Link to="/contact" className="text-blue-600! underline text-sm">Contact Us</Link>
        </div>
        <div className="text-right">
          <span className="text-gray-900! text-sm">SKU D5515AI</span>
        </div>
      </div>

      {/* More Information */}
      <div className="mt-20">
        <button className="bg-transparent! flex items-center text-gray-900! font-bold text-sm">
          <span className="mr-2">+</span>
          <span>MORE INFORMATION</span>
        </button>
      </div>
    </div>
  );

  if (activeTab === 'About Product') {
    return renderAboutContent();
  } else if (activeTab === 'Details') {
    return renderDetailsContent();
  } else if (activeTab === 'Specs') {
    return renderSpecsContent();
  }
  
  return renderAboutContent();
};

export default ProductContent;