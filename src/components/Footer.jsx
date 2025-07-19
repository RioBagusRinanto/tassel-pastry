import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Tassel</h3>
            <p className="text-gray-300 mb-4">
              Crafting extraordinary Mexican pastries with world-class chefs. 
              Experience the wonder of authentic flavors in every bite.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>info@tassel.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
              <li><Link to="/products" className="hover:text-orange-400 transition-colors">Products</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tassel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;