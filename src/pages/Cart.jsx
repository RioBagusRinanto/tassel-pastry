import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (state.items.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingCart className="mx-auto h-24 w-24 text-gray-400" />
            <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-4">Your cart is empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Looks like you haven't added any delicious pastries yet.
            </p>
            <Link
              to="/products"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 inline-flex items-center"
            >
              <ArrowLeft className="mr-2" size={20} />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 font-medium flex items-center"
          >
            <Trash2 className="mr-1" size={16} />
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {state.items.map((item) => (
                  <div key={`${item.product.id}-${item.variant.id}`} className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{item.product.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.variant.name}</p>
                        <p className="text-orange-600 font-bold text-lg mt-2">
                          ${item.variant.price.toFixed(2)} each
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-4">
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={20} />
                        </button>
                        
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-lg font-semibold w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                            disabled={item.quantity >= item.variant.stock}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            ${(item.variant.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-orange-600">
                      ${(getTotalPrice() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/products"
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-center block"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;