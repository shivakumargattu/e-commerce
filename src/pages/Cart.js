import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiShoppingBag, 
  FiTrash2, 
  FiPlus, 
  FiMinus,
  FiArrowLeft
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity, setIsCartOpen } = useCart();
  const [showClearCartModal, setShowClearCartModal] = useState(false);

  const shippingCost = cart.length > 0 ? 5.99 : 0;
  const total = cartTotal + shippingCost;

  const EmptyCartIllustration = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className="w-40 mx-auto mb-6 text-orange-light"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="20.5" r="1"/>
      <circle cx="18" cy="20.5" r="1"/>
      <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/>
    </svg>
  );

  const handleClearCart = () => {
    cart.forEach(item => removeFromCart(item.id));
    setShowClearCartModal(false);
  };

  return (
    <div className="bg-background min-h-screen py-8 md:py-12">
      {/* Clear Cart Confirmation Modal */}
      {showClearCartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Clear Cart</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to remove all items from your cart?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowClearCartModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleClearCart}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center mb-6 md:mb-8">
          <button 
            onClick={() => window.history.back()} 
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiArrowLeft className="text-gray-600" size={20} />
          </button>
          <FiShoppingBag className="text-orange-dark text-2xl mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
          {cart.length > 0 && (
            <span className="ml-auto bg-orange-light text-orange-dark px-3 py-1 rounded-full text-sm font-medium">
              {cart.reduce((total, item) => total + item.quantity, 0)} items
            </span>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 text-center max-w-md mx-auto">
            <EmptyCartIllustration />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Your cart feels lonely</h2>
            <p className="text-gray-500 mb-6">
              Your shopping cart is empty. Let's find something special for you!
            </p>
            <Link
              to="/products"
              onClick={() => setIsCartOpen(false)}
              className="inline-block bg-orange hover:bg-orange-dark text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {cart.map((item) => (
                    <div key={item.id} className="p-4 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6">
                      <div className="w-full sm:w-28 h-28 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain p-2"
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>
                        <p className="text-orange-dark font-bold text-lg mb-3 md:mb-4">
                          ${item.price.toFixed(2)}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 md:px-3 py-1 text-gray-600 hover:bg-gray-50 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <FiMinus size={14} />
                            </button>
                            <span className="px-2 md:px-3 py-1 text-center min-w-8">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 md:px-3 py-1 text-gray-600 hover:bg-gray-50 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <FiPlus size={14} />
                            </button>
                          </div>
                          
                          <span className="font-bold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <Link
                  to="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="text-orange-dark hover:text-orange font-medium flex items-center text-sm md:text-base"
                >
                  <FiPlus className="mr-1" /> Continue Shopping
                </Link>
                <button
                  onClick={() => setShowClearCartModal(true)}
                  className="text-gray-500 hover:text-red-500 text-sm md:text-base"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-800 mb-5 md:mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-5 md:mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-orange-dark">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <Link
                  to="/checkout"
                  className="block w-full bg-orange hover:bg-orange-dark text-white py-3 rounded-lg font-medium transition-colors text-center mb-4 shadow-md hover:shadow-lg"
                >
                  Proceed to Checkout
                </Link>
                
                <div className="text-center text-xs md:text-sm text-gray-500 space-y-1">
                  <p>Free shipping on orders over $50</p>
                  <p>30-day return policy</p>
                  <p>Secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;