import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Filter } from 'lucide-react';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const pagedProducts = sortedProducts.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );
  const totalPages = Math.ceil(sortedProducts.length / cardsPerPage);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete collection of authentic Mexican pastries, each crafted with care and traditional techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-600" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 whitespace-nowrap mr-2">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 whitespace-nowrap">
              <label htmlFor="cardsPerPage" className="text-sm font-medium text-gray-700">Cards per page:</label>
              <select
                id="cardsPerPage"
                value={cardsPerPage}
                onChange={e => { setCardsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {[10, 20, 40, 80, 100].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pagedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-sm font-medium text-orange-600 bg-white px-2 py-1 rounded shadow">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Starting from:</div>
                    <div className="text-xl font-bold text-orange-600">${product.price.toFixed(2)}</div>
                  </div>
                  
                  <button
                    onClick={() => openModal(product)}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center mt-auto"
                  >
                    <ShoppingCart className="mr-2" size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}

          {/* Paging Controls */}
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >Prev</button>
            <span className="px-2 text-sm">Page {currentPage} of {totalPages}</span>
            <button
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >Next</button>
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProductList;