import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Store,
  CreditCard,
  Bell,
  Lock,
  Mail,
  Phone,
  MapPin,
  Image,
  Save
} from 'lucide-react';
import VendorLayout from '../../components/vendor/VendorLayout';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    storeName: 'Tech Haven',
    description: 'Premium electronics and gadgets store',
    email: 'contact@techhaven.com',
    phone: '+1 234 567 890',
    address: '123 Tech Street, Silicon Valley, CA',
    logo: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0'
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'store', label: 'Store Settings', icon: Store },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock }
  ];

  return (
    <VendorLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600">Manage your account and store preferences</p>
        </div>

        {/* Settings Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="w-full md:w-64">
            <div className="bg-white rounded-xl shadow-md p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              {activeTab === 'store' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-800">Store Information</h2>
                  
                  {/* Store Logo */}
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img
                        src={formData.logo}
                        alt="Store Logo"
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-md">
                        <Image className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">Store Logo</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Recommended size: 400x400px. Max file size: 2MB.
                      </p>
                    </div>
                  </div>

                  {/* Store Details Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Store Name</label>
                      <input
                        type="text"
                        value={formData.storeName}
                        onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={4}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <div className="mt-1 relative">
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <div className="mt-1 relative">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <div className="mt-1 relative">
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                      <Save className="h-5 w-5" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Add other tab content here */}
            </motion.div>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default Settings;