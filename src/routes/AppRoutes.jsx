import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import OurStoryPage from '../pages/OurStoryPage';
import ContactUs from '../pages/ContactUs';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pastries" element={<ProductPage />} />
        <Route path="/about" element={<OurStoryPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes