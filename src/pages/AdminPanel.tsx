import React from 'react';
import { Users, ShoppingBag, DollarSign, Settings } from 'lucide-react';

const AdminPanel = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-4">
          <a href="#" className="flex items-center px-4 py-3 bg-indigo-50 text-indigo-600">
            <Users className="h-5 w-5 mr-3" />
            Vendors
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <ShoppingBag className="h-5 w-5 mr-3" />
            Orders
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <DollarSign className="h-5 w-5 mr-3" />
            Commissions
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Vendor Management</h3>
            {/* Add vendor list component here */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
            {/* Add transactions list component here */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Commission Overview</h3>
            {/* Add commission stats component here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;