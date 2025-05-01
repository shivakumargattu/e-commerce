import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiX, FiShoppingCart } from 'react-icons/fi';

const MiniCart = () => {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl z-50 border border-gray-100">
      {/* MiniCart Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center">
          <FiShoppingCart className="text-orange mr-2" />
          <h3 className="font-medium text-gray-800">Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</h3>
        </div>
        <button 
          onClick={() => setIsCartOpen(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <FiX size={18} />
        </button>
      </div>

      <div className="p-4">
        {cart.length === 0 ? (
          <div className="text-center py-6">
            <FiShoppingCart className="mx-auto text-gray-300 mb-3" size={32} />
            <p className="text-gray-500">Your cart is empty</p>
            <Link
              to="/products"
              onClick={() => setIsCartOpen(false)}
              className="inline-block mt-4 text-orange hover:text-orange-dark text-sm font-medium"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="max-h-72 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-3 border-b border-gray-100 last:border-0">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="max-w-full max-h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 ml-3">
                    <h4 className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end ml-2">
                    <span className="text-sm font-medium text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 text-xs mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-4 border-t border-gray-100 pt-4">
              <div className="flex justify-between font-medium text-gray-800 mb-2">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="mt-3 flex space-x-3">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="flex-1 bg-orange hover:bg-orange-dark text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className={`flex-1 py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors ${
                    cart.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniCart;