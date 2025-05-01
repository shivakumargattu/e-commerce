import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import MiniCart from './components/MiniCart';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <MiniCart />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;