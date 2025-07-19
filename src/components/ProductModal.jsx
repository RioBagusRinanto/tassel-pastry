import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, Plus, Minus, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  React.useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product && selectedVariant) {
      addToCart(product, selectedVariant, quantity);
      onClose();
      setQuantity(1);
    }
  };

  const incrementQuantity = () => {
    if (selectedVariant && quantity < selectedVariant.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="mt-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded ml-4">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-orange-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">Select Variant:</h4>
                      <div className="space-y-2">
                        {product.variants.map((variant) => (
                          <label
                            key={variant.id}
                            className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                              selectedVariant?.id === variant.id
                                ? 'border-orange-600 bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center">
                              <input
                                type="radio"
                                name="variant"
                                value={variant.id}
                                checked={selectedVariant?.id === variant.id}
                                onChange={() => setSelectedVariant(variant)}
                                className="sr-only"
                              />
                              <div>
                                <span className="font-medium">{variant.name}</span>
                                <span className="text-sm text-gray-500 block">
                                  Stock: {variant.stock}
                                </span>
                              </div>
                            </div>
                            <span className="font-bold text-orange-600">
                              ${variant.price.toFixed(2)}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Quantity:</h4>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={decrementQuantity}
                          disabled={quantity <= 1}
                          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                        <button
                          onClick={incrementQuantity}
                          disabled={!selectedVariant || quantity >= selectedVariant.stock}
                          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-orange-600">
                        ${selectedVariant ? (selectedVariant.price * quantity).toFixed(2) : '0.00'}
                      </span>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={!selectedVariant || selectedVariant.stock === 0}
                      className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="mr-2" size={20} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductModal;