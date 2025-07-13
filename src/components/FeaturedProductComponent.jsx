import React from 'react'

function FeaturedProductComponent() {
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
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-orange-50 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <div key={idx} className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-end min-h-[320px] p-0">
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-end text-center px-4 py-6 bg-black/40" style={{borderRadius: '0.75rem'}}>
                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow">{product.name}</h3>
                <p className="text-white mb-4 text-center drop-shadow">{product.description}</p>
                <button className="px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-400 transition mb-2">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProductComponent