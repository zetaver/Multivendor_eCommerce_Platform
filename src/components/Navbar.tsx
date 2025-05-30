import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Store, 
  ShoppingCart, 
  User, 
  Bell, 
  Search, 
  Menu,
  X 
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAccountClick = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">MultiMart</span>
            </Link>
            
            <div className="hidden md:flex items-center ml-8 space-x-8">
              <Link to="/categories" className="text-gray-600 hover:text-indigo-600">Categories</Link>
              <Link to="/deals" className="text-gray-600 hover:text-indigo-600">Deals</Link>
              <Link to="/vendors" className="text-gray-600 hover:text-indigo-600">Vendors</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xl px-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/notifications" className="relative text-gray-600 hover:text-indigo-600">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                3
              </span>
            </Link>
            
            <Link to="/cart" className="relative text-gray-600 hover:text-indigo-600">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                2
              </span>
            </Link>

            <div className="relative">
              <button 
                onClick={handleAccountClick}
                className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
              >
                <User className="h-6 w-6" />
                <span className="hidden md:inline">Account</span>
              </button>
            </div>

            <button
              className="md:hidden text-gray-600 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Link to="/categories" className="text-gray-600 hover:text-indigo-600">Categories</Link>
              <Link to="/deals" className="text-gray-600 hover:text-indigo-600">Deals</Link>
              <Link to="/vendors" className="text-gray-600 hover:text-indigo-600">Vendors</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;