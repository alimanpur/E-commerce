import { useSelector } from 'react-redux';

export const useCart = () => {
  const items = useSelector((state) => state.cart.items);
  
  // Logic to calculate total items for the navbar badge
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return { items, totalItems };
};