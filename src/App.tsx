import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import Vendors from './pages/Vendors';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import VendorDashboard from './pages/VendorDashboard';
import VendorProducts from './pages/vendor/Products';
import VendorOrders from './pages/vendor/Orders';
import VendorAnalytics from './pages/vendor/Analytics';
import VendorCustomers from './pages/vendor/Customers';
import VendorSettings from './pages/vendor/Settings';
import AdminPanel from './pages/AdminPanel';

const AppContent = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isVendor = user?.role === 'vendor';
  const isVendorRoute = location.pathname.startsWith('/vendor');
  const shouldShowNavbar = !(isVendor && isVendorRoute);

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/products" element={<VendorProducts />} />
        <Route path="/vendor/orders" element={<VendorOrders />} />
        <Route path="/vendor/analytics" element={<VendorAnalytics />} />
        <Route path="/vendor/customers" element={<VendorCustomers />} />
        <Route path="/vendor/settings" element={<VendorSettings />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;