import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function HeaderComponent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Example cart count, replace with actual state/prop as needed
  const cartCount = 3;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Main">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-orange-500 tracking-tight">Tassel</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/pastries" className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors">Menu</Link>
          <Link to="/about" className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors">About</Link>
          <Link to="/contact" className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
          {isHome ? (
            <Link to="/pastries" className="px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow-sm hover:bg-orange-600 transition-colors">Order Now</Link>
          ) : (
            <Link to="/cart" className="relative px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow-sm hover:bg-orange-600 transition-colors flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="7" cy="21" r="1" />
                <circle cx="17" cy="21" r="1" />
              </svg>
              <span>Cart</span>
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold shadow border-2 border-white">{cartCount}</span>
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none bg-gray-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-40 flex flex-col">
          <div className="bg-white w-full shadow-lg rounded-b-xl py-8 px-6 flex flex-col items-center space-y-6 animate-modalFadeIn">
            <Link to="/pastries" className="text-lg font-semibold text-gray-700 hover:text-orange-500 w-full text-center transition-colors" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
            <Link to="/about" className="text-lg font-semibold text-gray-700 hover:text-orange-500 w-full text-center transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-lg font-semibold text-gray-700 hover:text-orange-500 w-full text-center transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            {isHome ? (
              <Link to="/pastries" className="w-full py-3 rounded-md bg-orange-500 text-white font-bold shadow-sm hover:bg-orange-600 transition-colors text-lg text-center" onClick={() => setMobileMenuOpen(false)}>Order Now</Link>
            ) : (
              <Link to="/cart" className="relative w-full py-3 rounded-md bg-orange-500 text-white font-bold shadow-sm hover:bg-orange-600 transition-colors text-lg flex items-center justify-center" onClick={() => setMobileMenuOpen(false)}>
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  <circle cx="7" cy="21" r="1" />
                  <circle cx="17" cy="21" r="1" />
                </svg>
                <span>Cart</span>
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold shadow border-2 border-white">{cartCount}</span>
              </Link>
            )}
            <button className="mt-4 text-gray-500 hover:text-orange-500 text-xl" onClick={() => setMobileMenuOpen(false)}>&times; Close</button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes modalFadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-modalFadeIn {
          animation: modalFadeIn 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
}

export default HeaderComponent