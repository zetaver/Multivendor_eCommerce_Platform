import React from 'react';
import VendorLayout from '../../components/vendor/VendorLayout';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, Package, Truck, Check } from 'lucide-react';

const Orders = () => {
  const orders = [
    {
      id: '1',
      customer: 'John Doe',
      items: [
        { name: 'Wireless Earbuds', quantity: 1, price: 79.99 }
      ],
      total: 79.99,
      status: 'Processing',
      date: '2024-03-15'
    },
    {
      id: '2',
      customer: 'Jane Smith',
      items: [
        { name: 'Smart Watch', quantity: 1, price: 199.99 }
      ],
      total: 199.99,
      status: 'Shipped',
      date: '2024-03-14'
    },
    {
      id: '3',
      customer: 'Mike Johnson',
      items: [
        { name: 'Bluetooth Speaker', quantity: 1, price: 129.99 }
      ],
      total: 129.99,
      status: 'Delivered',
      date: '2024-03-13'
    }
  ];

  return (
    <VendorLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
            <p className="text-gray-600">Manage your customer orders</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All Status</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
            <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              More Filters
            </button>
          </div>
        </div>

        {/* Order Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Package className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Processing</p>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Shipped</p>
                <p className="text-2xl font-bold text-gray-800">8</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Delivered</p>
                <p className="text-2xl font-bold text-gray-800">45</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">#{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {order.items.map((item) => (
                        <div key={item.name}>
                          {item.quantity}x {item.name}
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">${order.total}</td>
                    <td className="px-6 py-4">
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
                    <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Eye className="h-5 w-5" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default Orders;