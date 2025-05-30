import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  BarChart,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Store,
  Bell
} from 'lucide-react';

interface VendorLayoutProps {
  children: React.ReactNode;
}

const VendorLayout: React.FC<VendorLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/vendor/dashboard' },
    { id: 'products', label: 'Products', icon: Package, path: '/vendor/products' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, path: '/vendor/orders' },
    { id: 'analytics', label: 'Analytics', icon: BarChart, path: '/vendor/analytics' },
    { id: 'customers', label: 'Customers', icon: Users, path: '/vendor/customers' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/vendor/settings' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        <motion.aside
          initial={{ width: isSidebarCollapsed ? 80 : 280 }}
          animate={{ width: isSidebarCollapsed ? 80 : 280 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg relative"
        >
          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="absolute -right-3 top-6 bg-white rounded-full p-1 shadow-md z-10"
          >
            {isSidebarCollapsed ? (
              <ChevronRight className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            )}
          </button>

          {/* Vendor Profile */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Store className="h-10 w-10 text-indigo-600" />
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white" />
              </div>
              {!isSidebarCollapsed && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Tech Haven</h2>
                  <p className="text-sm text-gray-600">Vendor Dashboard</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {!isSidebarCollapsed && <span>{item.label}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="flex justify-end items-center px-8 py-4">
            <button className="relative p-2 text-gray-600 hover:text-indigo-600">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};

export default VendorLayout;