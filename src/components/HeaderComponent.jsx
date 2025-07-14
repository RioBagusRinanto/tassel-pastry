import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function HeaderComponent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Example cart count, replace with actual state/prop as needed
  const cartCount = 3;

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Main">
        <div className="flex items-center">
          <Link to="/"><span className="text-2xl font-bold text-orange-500">Tassel</span></Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 sm:space-x-8">
          <Link to="/pastries" className="text-base font-medium text-gray-700 hover:text-orange-500">Menu</Link>
          <a href="#about" className="text-base font-medium text-gray-700 hover:text-orange-500">About</a>
          <a href="#contact" className="text-base font-medium text-gray-700 hover:text-orange-500">Contact</a>
          {isHome ? (
            <a href="#order" className="px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow hover:bg-orange-400 transition">Order Now</a>
          ) : (
            <Link to="/cart" className="relative px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow hover:bg-orange-400 transition flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="7" cy="21" r="1" />
                <circle cx="17" cy="21" r="1" />
              </svg>
              <span>Cart</span>
              <span className="absolute -top-3 -right-3 bg-gradient-to-br from-red-700 to-red-500 text-white text-sm rounded-full px-2 py-1 font-bold shadow-lg border-2 border-white animate-bounce">
                {cartCount}
              </span>
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent