import React from 'react'
import { Link } from 'react-router-dom';

function FooterComponent() {
  return (
    <footer className="w-full bg-orange-500 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-bold text-xl">Tassel Pastry</span>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Tassel Pastry. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/pastries" className="hover:underline">Menu</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/pastries" className="hover:underline">Order Now</Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent