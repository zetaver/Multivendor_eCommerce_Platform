import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, ChevronRight, Search } from 'lucide-react';

const Vendors = () => {
  const vendors = [
    {
      id: 'v1',
      name: 'Tech Haven',
      logo: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0',
      description: 'Premium electronics and gadgets store',
      rating: 4.8,
      reviews: 156,
      location: 'New York, USA',
      categories: ['Electronics', 'Gadgets'],
      featured: true,
    },
    // Add more vendors...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Vendors</h1>
        <div className="text-sm breadcrumbs text-gray-600">
          <span>Home</span>
          <ChevronRight className="h-4 w-4 mx-2 inline" />
          <span>Vendors</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search vendors..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Living</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">Sort By</option>
            <option value="rating">Rating</option>
            <option value="reviews">Reviews</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <motion.div
            key={vendor.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="relative h-32">
              <img
                src={vendor.logo}
                alt={vendor.name}
                className="w-full h-full object-cover"
              />
              {vendor.featured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{vendor.name}</h3>
              <p className="text-gray-600 mt-2">{vendor.description}</p>
              
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(vendor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({vendor.reviews} reviews)</span>
              </div>

              <div className="flex items-center mt-4 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                {vendor.location}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {vendor.categories.map((category) => (
                  <span
                    key={category}
                    className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <button className="w-full mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Visit Store
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Become a Vendor CTA */}
      <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Start Selling on MultiMart</h2>
          <p className="mb-6">Join our growing community of successful vendors and reach millions of customers worldwide.</p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Become a Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vendors;