import React from 'react'

function FooterComponent() {
  return (
    <footer className="w-full bg-orange-500 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-bold text-xl">Tassel Pastry</span>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Tassel Pastry. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#order" className="hover:underline">Order Now</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent