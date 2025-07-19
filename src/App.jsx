import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <AppRoutes />
          <CartSidebar />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;