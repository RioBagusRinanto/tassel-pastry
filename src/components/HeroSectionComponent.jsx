import React from 'react'

function HeroSectionComponent() {
  return (
    <>
      <section className="w-full py-20 px-0 sm:px-0 flex items-center justify-center">
        <div className="max-w-6xl w-full relative shadow-lg overflow-hidden flex items-center justify-center" style={{minHeight: '500px', borderRadius: '1rem'}}>
          <img
            src="/images/hero-image.jpg"
            alt="Pastry shop front etalase"
            className="absolute inset-0 w-full h-full object-cover z-0 filter blur-none brightness-50"
            style={{borderRadius: '1rem'}}
          />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 py-12" style={{borderRadius: '1rem'}}>
            <h1 className="text-4xl sm:text-4xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Taste the Joy of Fresh Pastries
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 drop-shadow">
              Experience the finest selection of handcrafted pastries, made with love and the freshest ingredients.
            </p>
            <a href="#order" className="inline-block px-8 py-3 rounded-2xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-400 transition text-lg">
              Order Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSectionComponent