import React from 'react'

function HeaderComponent() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Main">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-orange-500">Tassel</span>
        </div>
        <div className="hidden md:flex items-center space-x-4 sm:space-x-8">
          <a href="#menu" className="text-base font-medium text-gray-700 hover:text-orange-500">Menu</a>
          <a href="#about" className="text-base font-medium text-gray-700 hover:text-orange-500">About</a>
          <a href="#contact" className="text-base font-medium text-gray-700 hover:text-orange-500">Contact</a>
          <a href="#order" className="px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow hover:bg-orange-400 transition">Order Now</a>
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