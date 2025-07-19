export const products = [
  {
    id: '1',
    name: 'Tres Leches Supreme',
    description: 'Our signature three-milk cake infused with vanilla essence and topped with cinnamon. A moist, decadent dessert that melts in your mouth.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cakes',
    rating: 4.9,
    features: ['Vanilla essence', 'Three milk blend', 'Cinnamon topping', 'Serves 8-10'],
    variants: [
      { id: '1-small', name: 'Small (6 inches)', price: 24.99, stock: 15 },
      { id: '1-medium', name: 'Medium (8 inches)', price: 34.99, stock: 12 },
      { id: '1-large', name: 'Large (10 inches)', price: 44.99, stock: 8 }
    ]
  },
  {
    id: '2',
    name: 'Conchas Artesanales',
    description: 'Traditional Mexican sweet bread with our signature shell-shaped topping. Baked fresh daily using time-honored recipes.',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sweet Bread',
    rating: 4.8,
    features: ['Shell-shaped topping', 'Fresh daily', 'Traditional recipe', 'Pack of 6'],
    variants: [
      { id: '2-vanilla', name: 'Vanilla (6 pack)', price: 18.99, stock: 25 },
      { id: '2-chocolate', name: 'Chocolate (6 pack)', price: 19.99, stock: 20 },
      { id: '2-mixed', name: 'Mixed Pack (6 pack)', price: 20.99, stock: 18 }
    ]
  },
  {
    id: '3',
    name: 'Churros Premium',
    description: 'Golden, crispy churros dusted with cinnamon sugar and filled with rich dulce de leche. A perfect treat for any occasion.',
    price: 21.99,
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fried Pastries',
    rating: 4.9,
    features: ['Dulce de leche filling', 'Cinnamon sugar', 'Crispy exterior', 'Pack of 8'],
    variants: [
      { id: '3-dulce', name: 'Dulce de Leche (8 pack)', price: 21.99, stock: 30 },
      { id: '3-chocolate', name: 'Chocolate Filled (8 pack)', price: 22.99, stock: 25 },
      { id: '3-plain', name: 'Traditional (8 pack)', price: 19.99, stock: 35 }
    ]
  },
  {
    id: '4',
    name: 'Empanadas Dulces',
    description: 'Sweet turnovers filled with seasonal fruits and spices. Each bite delivers a burst of authentic Mexican flavors.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/5848391/pexels-photo-5848391.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Turnovers',
    rating: 4.7,
    features: ['Seasonal fruits', 'Flaky pastry', 'Authentic spices', 'Pack of 6'],
    variants: [
      { id: '4-apple', name: 'Apple Cinnamon (6 pack)', price: 19.99, stock: 22 },
      { id: '4-pineapple', name: 'Pineapple (6 pack)', price: 20.99, stock: 18 },
      { id: '4-mixed', name: 'Mixed Fruits (6 pack)', price: 21.99, stock: 15 }
    ]
  },
  {
    id: '5',
    name: 'Flan Tradicional',
    description: 'Classic Mexican flan with caramel sauce. Silky smooth custard made with our secret family recipe.',
    price: 22.99,
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Custards',
    rating: 4.9,
    features: ['Caramel sauce', 'Family recipe', 'Silky texture', 'Serves 6-8'],
    variants: [
      { id: '5-individual', name: 'Individual (4 pack)', price: 22.99, stock: 20 },
      { id: '5-family', name: 'Family Size', price: 32.99, stock: 12 },
      { id: '5-mini', name: 'Mini Flans (8 pack)', price: 18.99, stock: 25 }
    ]
  },
  {
    id: '6',
    name: 'Pan de Muerto',
    description: 'Traditional Day of the Dead bread, available seasonally. Flavored with orange zest and anise seeds.',
    price: 16.99,
    image: 'https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Seasonal',
    rating: 4.8,
    features: ['Orange zest', 'Anise seeds', 'Traditional design', 'Seasonal availability'],
    variants: [
      { id: '6-small', name: 'Small Loaf', price: 16.99, stock: 15 },
      { id: '6-large', name: 'Large Loaf', price: 24.99, stock: 10 },
      { id: '6-mini', name: 'Mini Breads (4 pack)', price: 19.99, stock: 20 }
    ]
  }
];