import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-light to-orange py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to OrangeShop
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover amazing products with our special orange touch
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-orange-dark px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-text mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Electronics', 'Clothing', 'Jewelry', 'Home'].map((category) => (
              <Link
                key={category}
                to={`/products?category=${category.toLowerCase()}`}
                className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow hover:border-orange border-2 border-transparent"
              >
                <div className="bg-orange-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-lg font-medium text-text">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;