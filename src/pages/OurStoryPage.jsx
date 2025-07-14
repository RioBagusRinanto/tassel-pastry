import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

function OurStoryPage() {
  return (
    <>
        <HeaderComponent />
        <section className="w-full py-16 px-4 bg-white flex items-center justify-center min-h-[60vh]">
        <div className="max-w-3xl w-full bg-orange-50 rounded-3xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">About Us</h1>
            <p className="text-lg text-gray-700 mb-4 text-center font-medium">
            Tassel Pastry is a family-owned bakery dedicated to crafting delightful pastries with love and tradition. Our journey began with a passion for baking and a dream to share the joy of fresh, handmade treats with our community.
            </p>
            <p className="text-base text-gray-600 mb-4 text-center">
            Every morning, our ovens fill the air with the aroma of cinnamon rolls, croissants, cupcakes, and more. We use only the finest ingredients, blending classic techniques with creative flavors to bring you pastries that are both comforting and exciting.
            </p>
            <p className="text-base text-gray-600 text-center">
            Whether you're stopping by for a quick treat or celebrating a special occasion, Tassel Pastry is here to make every moment a little sweeter. Thank you for being part of our story!
            </p>
        </div>
        </section>
        <FooterComponent />
    </>
  )
}

export default OurStoryPage