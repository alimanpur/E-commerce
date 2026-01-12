import React from 'react';

const ProductDetails = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">MSI MPG Trident 3</h2>
        <p className="text-blue-600 text-sm mb-6">Be the first to review this product</p>
      </div>
      
      <div className="space-y-3 text-gray-800">
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 shrink-0"></span>
          <span>Intel Core i7-10700F</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 shrink-0"></span>
          <span>Intel H470</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 shrink-0"></span>
          <span>NVIDIA GeForce RTX 2060 SUPER</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 shrink-0"></span>
          <span>16GB DDR4-2933</span>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 shrink-0"></span>
          <span>512GB NVMe SSD</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;