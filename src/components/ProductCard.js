import React from 'react';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiStar } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-card rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
        />
        {product.rating?.rate > 4 && (
          <div className="absolute top-2 left-2 bg-orange-light text-orange-dark px-2 py-1 rounded-full flex items-center text-xs font-bold">
            <FiStar className="mr-1 fill-current" />
            {product.rating?.rate}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-text mb-2 line-clamp-2 h-14">
          {product.title}
        </h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-orange-dark">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-secondary">
            {product.category}
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-orange hover:bg-orange-dark text-white py-3 rounded-lg font-medium flex items-center justify-center transition-colors duration-200"
        >
          <FiShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;