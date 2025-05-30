import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Package,
  ShoppingBag,
  TrendingUp,
  BarChart,
  Settings
} from 'lucide-react';
import VendorLayout from '../components/vendor/VendorLayout';

const VendorDashboard = () => {
  // Mock data - replace with real data from API
  const vendorData = {
    totalSales: 12345,
    totalProducts: 48,
    totalOrders: 156,
    revenue: 8234,
    recentOrders: [
      { id: '1', product: 'Wireless Earbuds', customer: 'John Doe', amount: 79.99, status: 'Processing' },
      { id: '2', product: 'Smart Watch', customer: 'Jane Smith', amount: 199.99, status: 'Shipped' },
      { id: '3', product: 'Bluetooth Speaker', customer: 'Mike Johnson', amount: 129.99, status: 'Delivered' },
    ],
  };

  const stats = [
    { title: 'Total Sales', value: `$${vendorData.totalSales.toLocaleString()}`, icon: DollarSign, color: 'bg-blue-500' },
    { title: 'Products', value: vendorData.totalProducts, icon: Package, color: 'bg-green-500' },
    { title: 'Orders', value: vendorData.totalOrders, icon: ShoppingBag, color: 'bg-purple-500' },
    { title: 'Revenue', value: `$${vendorData.revenue.toLocaleString()}`, icon: TrendingUp, color: 'bg-orange-500' },
  ];

  return (
    <VendorLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back to your vendor dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-600 border-b">
                    <th className="pb-3">Order ID</th>
                    <th className="pb-3">Product</th>
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {vendorData.recentOrders.map((order) => (
                    <tr key={order.id} className="border-b last:border-b-0">
                      <td className="py-4">#{order.id}</td>
                      <td className="py-4">{order.product}</td>
                      <td className="py-4">{order.customer}</td>
                      <td className="py-4">${order.amount}</td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-600'
                              : order.status === 'Shipped'
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <Package className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Add New Product</h3>
            <p className="text-gray-600 mb-4">List a new product in your store inventory</p>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              Add Product →
            </button>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <BarChart className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">View Analytics</h3>
            <p className="text-gray-600 mb-4">Check your store's performance metrics</p>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              View Report →
            </button>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <Settings className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Store Settings</h3>
            <p className="text-gray-600 mb-4">Update your store preferences and details</p>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              Manage Settings →
            </button>
          </motion.div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default VendorDashboard;