import React from 'react';
import VendorLayout from '../../components/vendor/VendorLayout';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const Analytics = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,345',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Total Orders',
      value: '156',
      change: '+8.2%',
      isPositive: true,
      icon: ShoppingCart,
      color: 'bg-blue-500'
    },
    {
      title: 'New Customers',
      value: '64',
      change: '-2.4%',
      isPositive: false,
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+1.2%',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  return (
    <VendorLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
            <p className="text-gray-600">Monitor your store's performance</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="12m">Last 12 months</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              <Calendar className="h-5 w-5" />
              <span>Custom Range</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.isPositive ? (
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={`ml-1 text-sm ${
                        stat.isPositive ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h2>
            <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500">Revenue Chart Placeholder</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Orders Overview</h2>
            <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500">Orders Chart Placeholder</p>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Products</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-800">Product {item}</p>
                      <p className="text-sm text-gray-500">${(Math.random() * 100).toFixed(2)}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{Math.floor(Math.random() * 100)} sales</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Demographics</h2>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500">Demographics Chart Placeholder</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">New order received</p>
                    <p className="text-xs text-gray-500">{item} hour ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default Analytics;