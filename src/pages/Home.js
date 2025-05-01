import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiShield, FiTruck } from 'react-icons/fi';

const Home = () => {
  const categories = [
    {
        name: 'Women',
        image: "https://img.freepik.com/free-photo/funny-stylish-sexy-smiling-beautiful-young-hippy-woman-model-summer-bright-hipster-clothes-dress-street-hat_158538-10547.jpg?ga=GA1.1.2601107.1741153569&semt=ais_hybrid&w=740",
        icon: ''
      },
    {
      name: 'Clothing',
      image: "https://img.freepik.com/free-psd/view-hawaiian-shirt-with-clothing-rack_23-2150819228.jpg",
      icon: '👕'
    },
    {
      name: 'Jewelry',
      image: "https://img.freepik.com/premium-photo/indian-bridal-diamond-jewelry-set_866549-5546.jpg",
      icon: '💎'
    },
    {
        name: 'Electronics',
        image: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309642.jpg",
        icon: '📱'
      },
    
    {
        name: 'Men  ',
        image: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?ga=GA1.1.2601107.1741153569&semt=ais_hybrid&w=740",
        icon: '👕'
      },
      
      
      {
        name: 'Explore',
        image: "https://img.freepik.com/premium-photo/composite-image-businesswoman-typing-looking-through-magnifying-glass_1134-77074.jpg",
        icon: '🔍'
      },


  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-background">
      {/* Hero Section - Split Layout */}
      <section className="relative bg-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 opacity-90"></div>
        
        {/* Container */}
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Content Side (Left) */}
            <motion.div 
              className="lg:w-1/2 z-10 mb-12 lg:mb-0 lg:pr-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Premium Products <motion.span 
                  className="text-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >Delivered</motion.span> to You
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Discover our exclusive collection with the perfect blend of quality and style. 
                Limited time offers with free shipping on all orders.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Shop Now
                  <FiArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/featured"
                  className="inline-flex items-center justify-center bg-white text-orange-500 hover:bg-gray-50 border border-orange-500 px-8 py-3 md:px-10 md:py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  View Featured
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div 
                className="mt-10 flex flex-wrap gap-4"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div 
                  className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
                  variants={item}
                >
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <FiCheck className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="font-medium text-gray-700">Quality Guaranteed</span>
                </motion.div>
                <motion.div 
                  className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
                  variants={item}
                >
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <FiShield className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="font-medium text-gray-700">Secure Checkout</span>
                </motion.div>
                <motion.div 
                  className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
                  variants={item}
                >
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <FiTruck className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="font-medium text-gray-700">Fast Delivery</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image Side (Right) */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl transform lg:-translate-x-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://img.freepik.com/free-photo/two-stylish-elegant-women-dresses-posing-yellow-wall_273443-1488.jpg?t=st=1746079960~exp=1746083560~hmac=a1407547b62a533bc3e165825db5d63927fc9a553a96d2faca92d99e235b46d8&w=1380"
                  alt="Happy customer with shopping bags" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm max-w-xs"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-orange-600 font-bold">Summer Sale</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">Up to 50% Off</h3>
                  <p className="text-gray-600 text-sm mt-1">On selected items</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Shop by Category
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div 
                key={category.name}
                variants={item}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.name.toLowerCase()}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="relative pt-[100%] overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <span className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category.icon}</span>
                    </div>
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-between">
                    <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                    <p className="text-orange-500 mt-2 font-medium flex items-center justify-center">
                      Shop Now <FiArrowRight className="ml-1" />
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;