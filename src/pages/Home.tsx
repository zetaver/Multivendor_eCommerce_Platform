import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { ChevronRight, TrendingUp, Gift, Tag } from 'lucide-react';

const Home = () => {
  const products = [
    {
      id: '1',
      name: 'Premium Headphones',
      description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
      price: 199.99,
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e'],
      category: 'Electronics',
      stock: 15,
      rating: 4.5,
      reviews: [
        { id: 'r1', userId: 'u1', userName: 'John Doe', rating: 5, comment: 'Great sound quality!', createdAt: '2024-03-10' }
      ],
      vendorId: 'v1',
      status: 'approved',
      createdAt: '2024-03-01',
      updatedAt: '2024-03-01'
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health tracking, notifications, and long battery life. Stay connected and monitor your fitness.',
      price: 299.99,
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30'],
      category: 'Electronics',
      stock: 8,
      rating: 4.8,
      reviews: [
        { id: 'r2', userId: 'u2', userName: 'Jane Smith', rating: 5, comment: 'Amazing features!', createdAt: '2024-03-09' }
      ],
      vendorId: 'v2',
      status: 'approved',
      createdAt: '2024-03-01',
      updatedAt: '2024-03-01'
    }
  ];

  const categories = [
    { name: 'Electronics', icon: '🔌', count: 1250 },
    { name: 'Fashion', icon: '👕', count: 850 },
    { name: 'Home & Living', icon: '🏠', count: 720 },
    { name: 'Beauty', icon: '💄', count: 650 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-12">
        <div className="max-w-2xl text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Discover Amazing Products from Top Vendors
          </motion.h1>
          <p className="text-lg mb-6">Shop the latest trends and get the best deals on our marketplace.</p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Start Shopping
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Popular Categories</h2>
          <a href="/categories" className="text-indigo-600 flex items-center hover:text-indigo-700">
            View All <ChevronRight className="h-5 w-5 ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <motion.a
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-gray-800">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.count} products</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Featured Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-green-100 p-6 rounded-xl">
          <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Trending Now</h3>
          <p className="text-gray-600">Discover what's popular this week</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl">
          <Gift className="h-8 w-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Special Offers</h3>
          <p className="text-gray-600">Limited time deals just for you</p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl">
          <Tag className="h-8 w-8 text-orange-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">New Arrivals</h3>
          <p className="text-gray-600">Fresh products added daily</p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <a href="/products" className="text-indigo-600 flex items-center hover:text-indigo-700">
            View All <ChevronRight className="h-5 w-5 ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;