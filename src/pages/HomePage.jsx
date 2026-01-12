import React from 'react';
import HeroBanner from '../sections/Products/HeroBanner.jsx';
import ProductCard from '../sections/Products/ProductCard.jsx';
import NewProducts from '../sections/Products/NewProducts.jsx';
import ProductList from '../sections/Products/ProductList.jsx';
import TestimonialsSection from '../sections/Testimonials/TestimonialsSection.jsx';
import Footer from '../components/Footer/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <ProductCard />
      <NewProducts />
      <ProductList />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default HomePage;