import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItemCount, setIsCartOpen } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-dark">
            OrangeShop
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-text hover:text-orange transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-text hover:text-orange transition-colors">
              Shop
            </Link>
            <Link to="/cart" className="text-text hover:text-orange transition-colors">
              My Cart
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="relative">
            <button 
              onClick={() => setIsCartOpen(prev => !prev)}
              className="p-2 text-text hover:text-orange transition-colors relative"
            >
              <FiShoppingCart size={22} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;