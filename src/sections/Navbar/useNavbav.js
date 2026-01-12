import { useSelector } from 'react-redux';

export const useNavbar = () => {
  // Assuming you have a cart slice in Redux
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    "Laptops", "Desktop PCs", "Networking Devices", 
    "Printers & Scanners", "PC Parts", "All Other Products", "Repairs"
  ];

  return { cartCount, navLinks };
};