import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Package, Smartphone, ShoppingBag, Home, Heart, Camera, Book, Utensils } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Electronics', icon: Smartphone, count: 1250, color: 'bg-blue-100 text-blue-600' },
    { name: 'Fashion', icon: ShoppingBag, count: 850, color: 'bg-pink-100 text-pink-600' },
    { name: 'Home & Living', icon: Home, count: 720, color: 'bg-green-100 text-green-600' },
    { name: 'Beauty', icon: Heart, count: 650, color: 'bg-purple-100 text-purple-600' },
    { name: 'Photography', icon: Camera, count: 420, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Books', icon: Book, count: 980, color: 'bg-red-100 text-red-600' },
    { name: 'Food', icon: Utensils, count: 340, color: 'bg-orange-100 text-orange-600' },
    { name: 'Others', icon: Package, count: 560, color: 'bg-gray-100 text-gray-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Browse Categories</h1>
        <div className="text-sm breadcrumbs text-gray-600">
          <span>Home</span>
          <ChevronRight className="h-4 w-4 mx-2 inline" />
          <span>Categories</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <Link to={`/products?category=${category.name.toLowerCase()}`}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">{category.count} products</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Become a Vendor</h2>
          <p className="mb-6">Start selling your products on our marketplace and reach thousands of customers.</p>
          <Link
            to="/signup"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;