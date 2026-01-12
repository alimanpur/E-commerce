import React ,{useState, useEffect, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHeader } from "./useHeader";
import { useProducts } from "../Products/useProducts";
import { RxPerson } from "react-icons/rx";
import { Search, ShoppingCart, Heart, X, ChevronDown } from "lucide-react";
import logo from '../../assets/f4a3a3fa-79c5-4659-a0da-0660df66c6ce.png';

const MainNav = () => {
  const { navLinks } = useHeader();
  const { products } = useProducts();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistCountFromStore = wishlistItems.length;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5); // Limit to 5 results
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, products]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 py-5">
        {/* Container with fixed max-width for alignment */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg cursor-pointer" />
            </Link>

            {/* Links */}
            <ul className="hidden xl:flex items-center gap-6 ">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link 
                    to={`/category/${link.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} 
                    className="text-[14px] font-bold text-black hover:text-[#0156FF] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/about" 
                  className="text-[14px] font-bold text-black hover:text-[#0156FF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <button className="border-2 bg-white! border-[#4A90E2]! text-[#4A90E2]! px-6 py-2 rounded-full! text-[14px] font-bold hover:bg-[#4A90E2]! hover:text-white! transition-all">
                Our Deals
              </button>
            </ul>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-6">
            <Search 
              size={22} 
              className="cursor-pointer text-[#0156FF] hover:text-[#1b2843]" 
              onClick={() => setIsSearchOpen(true)}
            />
            <Link to="/cart" className="relative cursor-pointer">
              <ShoppingCart size={24} className="cursor-pointer text-[#0156FF] hover:text-[#1b2843]" />
              <span className="absolute -top-2 -right-2 bg-[#0156FF] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            </Link>
            <Link to="/wishlist" className="relative cursor-pointer">
              <Heart size={22} className="cursor-pointer text-[#0156FF] hover:text-[#1b2843]" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {wishlistCountFromStore}
              </span>
            </Link>
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-10 h-10 rounded-full! border-2 border-[#0156FF]! flex items-center justify-center bg-gray-50! overflow-hidden"
                >
                  <RxPerson size={24} className="text-[#0156FF]!" />
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Dashboard
                    </Link>
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Orders
                    </Link>
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Wishlist
                    </Link>
                    <hr className="my-1" />
                    <button 
                      onClick={() => {
                        setIsLoggedIn(false);
                        setIsProfileOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm bg-transparent! text-gray-700! hover:bg-gray-100!"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="w-10 h-10 rounded-full! border-2 border-[#0156FF]! flex items-center justify-center bg-gray-50! overflow-hidden">
                <RxPerson size={24} className="text-[#0156FF]!" />
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white! rounded-lg! shadow-xl! p-8 w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-900! text-xl font-semibold">Search Products</h3>
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                className="bg-gray-100! text-gray-600! hover:bg-gray-200! hover:text-gray-800! p-2 rounded-full! transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for products..."
                className="flex-1 px-4 py-3 border-2! border-gray-300! rounded-lg! text-gray-700! placeholder-gray-500! focus:outline-none! focus:border-[#4A90E2]! focus:ring-2! focus:ring-[#4A90E2]! focus:ring-opacity-20! transition-all"
                autoFocus
              />
              <button 
                onClick={handleSearch}
                className="bg-[#4A90E2]! text-white! px-8 py-3 rounded-lg! hover:bg-[#357ABD]! transition-colors font-medium flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </button>
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="border-t! border-gray-200! pt-4 max-h-64 overflow-y-auto">
                <h4 className="text-sm font-semibold text-gray-700! mb-3">Search Results:</h4>
                <div className="space-y-2">
                  {searchResults.map(product => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                        setSearchResults([]);
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50! rounded-lg! transition-colors"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 object-contain rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900! truncate">{product.name}</p>
                        <p className="text-xs text-gray-500!">{product.brand} • {product.category}</p>
                        <p className="text-sm font-bold text-[#4A90E2]!">${product.price?.toFixed(2)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* No Results */}
            {searchQuery.trim() && searchResults.length === 0 && (
              <div className="border-t! border-gray-200! pt-4 text-center">
                <p className="text-gray-500! text-sm">No products found for "{searchQuery}"</p>
              </div>
            )}
            
            {/* Search suggestions */}
            {!searchQuery.trim() && (
              <div className="text-sm text-gray-500!">
                <p>Try searching for: Laptops, Gaming, MSI, ASUS, Desktop</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MainNav;