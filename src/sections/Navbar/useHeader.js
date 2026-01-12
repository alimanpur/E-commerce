// src/sections/Navbar/useHeader.js
import { useSelector } from 'react-redux';

export const useHeader = () => {
  // Replace with your actual selector for cart items
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0) || 2; // Defaulting to 2 per Figma design

  const navLinks = [
    "Laptops", "Desktop PCs", "Networking Devices", 
    "Printers & Scanners", "PC Parts", "All Other Products", "Repairs"
  ];

  return { cartCount, navLinks };
};