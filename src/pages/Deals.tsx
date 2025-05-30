import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, Percent, ChevronRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const Deals = () => {
  // Mock deals data - replace with API call
  const flashDeals: Product[] = [
    {
      id: '1',
      name: 'Wireless Earbuds',
      description: 'Premium wireless earbuds with noise cancellation.',
      price: 79.99,
      images: ['https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb'],
      category: 'Electronics',
      stock: 10,
      rating: 4.5,
      reviews: [],
      vendorId: 'v1',
      status: 'approved',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    // Add more products...
  ];

  const dealCategories = [
    { name: 'Flash Sales', icon: Clock, color: 'bg-red-100 text-red-600', discount: 'Up to 70% off' },
    { name: 'Clearance', icon: Tag, color: 'bg-blue-100 text-blue-600', discount: 'Up to 50% off' },
    { name: 'Bundle Deals', icon: Package, color: 'bg-green-100 text-green-600', discount: 'Save 30%' },
    { name: 'Special Offers', icon: Percent, color: 'bg-purple-100 text-purple-600', discount: 'Buy 1 Get 1' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Today's Deals</h1>
        <div className="text-sm breadcrumbs text-gray-600">
          <span>Home</span>
          <ChevronRight className="h-4 w-4 mx-2 inline" />
          <span>Deals</span>
        </div>
      </div>

      {/* Deal Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {dealCategories.map((category) => (
          <motion.div
            key={category.name}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{category.discount}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flash Deals */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Flash Deals</h2>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Ends in: <span className="font-semibold text-red-600">05:23:45</span>
            </div>
            <Link to="/flash-deals" className="text-indigo-600 hover:text-indigo-700 flex items-center">
              View All <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Never Miss a Deal!</h2>
          <p className="mb-6">Subscribe to our newsletter and get notified about exclusive deals and discounts.</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;