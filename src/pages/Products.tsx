import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
  });

  // Mock products data - replace with API call
  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: 199.99,
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e'],
      category: 'Electronics',
      stock: 15,
      rating: 4.5,
      reviews: [],
      vendorId: 'v1',
      status: 'approved',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    // Add more products...
  ];

  const categories = [
    'All Categories',
    'Electronics',
    'Fashion',
    'Home & Living',
    'Beauty',
    'Sports',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${
              viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'
            }`}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${
              viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
            <Filter className="h-5 w-5 text-gray-600" />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-600">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    priceRange: [filters.priceRange[0], parseInt(e.target.value)],
                  })
                }
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Minimum Rating</h3>
            <select
              value={filters.rating}
              onChange={(e) => setFilters({ ...filters, rating: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="0">All Ratings</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
            </select>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">In Stock Only</span>
            </label>
          </div>

          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Apply Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;