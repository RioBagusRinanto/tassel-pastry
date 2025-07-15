import React, { useState } from 'react'

function ProductsComponent() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [variant, setVariant] = useState('');
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      name: 'Cinnamon Roll',
      image: '/images/pastries/cinnamon-roll.jpg',
      description: 'Soft, sweet, and perfectly spiced cinnamon rolls, freshly baked every morning.'
    },
    {
      name: 'Croissant',
      image: '/images/pastries/croissant.jpg',
      description: 'Flaky, buttery croissants made with traditional French techniques.'
    },
    {
      name: 'Cupcakes',
      image: '/images/pastries/cupcakes.jpg',
      description: 'Delightful cupcakes topped with creamy frosting and a touch of magic.'
    },
    {
      name: 'Brownie Cake',
      image: '/images/pastries/brownie-cake.jpg',
      description: 'Rich and fudgy brownie cake, perfect for chocolate lovers.'
    },
    {
      name: 'Cheesecake',
      image: '/images/pastries/cheesecake.jpg',
      description: 'Creamy cheesecake with a buttery crust and a hint of vanilla.'
    },
    {
      name: 'Doughnuts',
      image: '/images/pastries/doughnuts.jpg',
      description: 'Classic doughnuts, light and fluffy, dusted with sugar.'
    },
    {
      name: 'Eclair',
      image: '/images/pastries/eclair.jpg',
      description: 'French eclairs filled with rich custard and topped with chocolate.'
    },
    {
      name: 'Macaron',
      image: '/images/pastries/macaron.jpg',
      description: 'Colorful macarons with a delicate shell and creamy filling.'
    },
    {
      name: 'Backerry',
      image: '/images/pastries/backerry.jpg',
      description: 'A special pastry from Tassel, sweet and unique.'
    }
  ];

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setVariant('');
    setQuantity(1);
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    setShowModal(false);
  };

  return (
    <section className="w-full py-16 px-4 bg-white flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">Our Pastries</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[700px]">
          {products.map((product, idx) => (
            <div key={idx} className="bg-orange-50 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 relative transition-transform duration-300 hover:scale-105" style={{minHeight: '340px'}}>
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover z-0 brightness-50" />
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold text-white mb-2 text-center drop-shadow-lg">{product.name}</h3>
                <p className="text-white mb-4 text-center text-sm drop-shadow">{product.description}</p>
                <button className="px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-400 transition" onClick={() => handleOrderClick(product)}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
        {showModal && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-md transition-opacity duration-500"></div>
            <div className="bg-white rounded-3xl shadow-2xl p-0 max-w-2xl w-full relative animate-modalFadeIn scale-100 transition-all duration-500 flex flex-col md:flex-row overflow-hidden">
              <div className="absolute top-4 right-4 z-20">
                <button className="text-gray-500 hover:text-orange-500 text-2xl transition-transform duration-300 hover:scale-125 bg-white bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 shadow" onClick={() => setShowModal(false)}>
                  &times;
                </button>
              </div>
              {/* Left: Image half */}
              <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center bg-orange-50 relative">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover rounded-none md:rounded-l-3xl shadow-xl" />
              </div>
              {/* Right: Details half */}
              <div className="md:w-1/2 w-full flex flex-col items-center px-8 py-8">
                <h3 className="text-2xl font-extrabold text-orange-500 mb-2 text-center drop-shadow">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-6 text-center text-base font-medium">{selectedProduct.description}</p>
                <div className="mb-6 w-full">
                  <label className="block text-sm font-semibold mb-2 text-orange-500">Choose Variant</label>
                  <div className="flex gap-4 justify-center">
                    {["Regular", "Large", "Mini"].map(opt => (
                      <label key={opt} className="flex items-center cursor-pointer bg-orange-50 px-4 py-2 rounded-xl shadow hover:bg-orange-100 transition">
                        <input
                          type="radio"
                          name="variant"
                          value={opt}
                          checked={variant === opt}
                          onChange={e => setVariant(e.target.value)}
                          className="accent-orange-500 mr-2"
                        />
                        <span className="text-orange-500 font-semibold">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-6 w-full">
                  <label className="block text-sm font-semibold mb-2 text-orange-500">How many pieces?</label>
                  <input type="number" min={1} className="w-full border-2 border-orange-200 rounded-xl px-4 py-2 text-center font-semibold" value={quantity} onChange={e => setQuantity(e.target.value)} />
                </div>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold shadow-lg hover:from-orange-500 hover:to-orange-600 transition text-lg tracking-wide" onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <style>{`
              @keyframes modalFadeIn {
                0% { opacity: 0; transform: scale(0.95); }
                100% { opacity: 1; transform: scale(1); }
              }
              .animate-modalFadeIn {
                animation: modalFadeIn 0.5s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsComponent