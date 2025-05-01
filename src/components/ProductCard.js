import React from 'react';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Added to cart:', product); // For debugging
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-1 truncate">{product.title}</h3>
        <p className="text-orange font-bold mb-3">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-orange hover:bg-orange-dark text-white py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;