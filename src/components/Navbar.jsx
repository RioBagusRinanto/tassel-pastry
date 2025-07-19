import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, getTotalItems } = useCart();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/cart', label: 'Cart' },
    { path: '/privacy', label: 'Privacy' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-orange-600">
            Tassel
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-orange-600 transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-orange-600 font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <button
              onClick={toggleCart}
              className="relative text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-orange-600 font-medium' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleCart();
                  setIsOpen(false);
                }}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                <ShoppingCart className="mr-2" size={20} />
                Cart ({getTotalItems()})
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;