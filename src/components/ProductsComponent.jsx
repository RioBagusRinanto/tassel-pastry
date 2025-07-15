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
    <section style={{ background: '#f8f9fa', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', color: '#222', textAlign: 'center' }}>Our Pastries</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}>
          {products.map((product, idx) => (
            <div key={idx} style={{
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem',
              transition: 'box-shadow 0.2s',
              minHeight: '340px',
            }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#222', marginBottom: '0.5rem', textAlign: 'center' }}>{product.name}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem', textAlign: 'center' }}>{product.description}</p>
              <button style={{ padding: '0.5rem 1.2rem', borderRadius: '6px', background: '#ff9800', color: '#fff', fontWeight: 600, border: 'none', boxShadow: 'none', cursor: 'pointer', marginTop: 'auto' }} onClick={() => handleOrderClick(product)}>
                Order Now
              </button>
            </div>
          ))}
        </div>
        {showModal && selectedProduct && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.08)' }}>
            <div style={{ background: '#fff', borderRadius: '10px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'row', overflow: 'hidden', position: 'relative' }}>
              <button style={{ position: 'absolute', top: 12, right: 12, background: '#fff', border: '1px solid #eee', borderRadius: '50%', width: 32, height: 32, fontSize: 20, color: '#888', cursor: 'pointer' }} onClick={() => setShowModal(false)}>&times;</button>
              <div style={{ flex: 1, minWidth: 180, background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '90%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
              <div style={{ flex: 2, padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ff9800', marginBottom: '0.5rem' }}>{selectedProduct.name}</h3>
                <p style={{ color: '#555', marginBottom: '1.2rem', fontSize: '1rem' }}>{selectedProduct.description}</p>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontWeight: 600, color: '#ff9800', fontSize: '0.95rem', marginBottom: '0.3rem', display: 'block' }}>Choose Variant</label>
                  <div style={{ display: 'flex', gap: '0.7rem' }}>
                    {["Regular", "Large", "Mini"].map(opt => (
                      <label key={opt} style={{ background: '#f8f9fa', border: '1px solid #eee', borderRadius: '6px', padding: '0.4rem 1rem', cursor: 'pointer', fontWeight: 500, color: '#ff9800' }}>
                        <input type="radio" name="variant" value={opt} checked={variant === opt} onChange={e => setVariant(e.target.value)} style={{ marginRight: '0.4rem' }} />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontWeight: 600, color: '#ff9800', fontSize: '0.95rem', marginBottom: '0.3rem', display: 'block' }}>How many pieces?</label>
                  <input type="number" min={1} style={{ width: '100%', border: '1px solid #eee', borderRadius: '6px', padding: '0.5rem', fontWeight: 500, textAlign: 'center' }} value={quantity} onChange={e => setQuantity(e.target.value)} />
                </div>
                <button style={{ padding: '0.7rem', borderRadius: '6px', background: '#ff9800', color: '#fff', fontWeight: 700, border: 'none', boxShadow: 'none', cursor: 'pointer', fontSize: '1rem', marginTop: '0.5rem' }} onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsComponent