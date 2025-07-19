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
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=compress&fit=crop&w=800&q=80',
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
  },
  {
    id: '7',
    name: 'Polvorones',
    description: 'Mexican wedding cookies, crumbly and dusted with powdered sugar. Perfect for celebrations.',
    price: 14.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cookies',
    rating: 4.6,
    features: ['Powdered sugar', 'Crumbly texture', 'Celebration favorite', 'Pack of 12'],
    variants: [
      { id: '7-plain', name: 'Plain (12 pack)', price: 14.99, stock: 30 },
      { id: '7-nut', name: 'Nutty (12 pack)', price: 15.99, stock: 25 },
      { id: '7-mixed', name: 'Mixed (12 pack)', price: 16.99, stock: 20 }
    ]
  },
  {
    id: '8',
    name: 'Buñuelos',
    description: 'Crispy fried dough discs sprinkled with cinnamon sugar. A festive treat for holidays.',
    price: 17.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fried Pastries',
    rating: 4.7,
    features: ['Crispy discs', 'Cinnamon sugar', 'Holiday favorite', 'Pack of 8'],
    variants: [
      { id: '8-plain', name: 'Plain (8 pack)', price: 17.99, stock: 20 },
      { id: '8-sugar', name: 'Extra Sugar (8 pack)', price: 18.99, stock: 18 },
      { id: '8-mini', name: 'Mini Buñuelos (12 pack)', price: 19.99, stock: 15 }
    ]
  },
  {
    id: '9',
    name: 'Capirotada',
    description: 'Mexican bread pudding with dried fruits, nuts, and a hint of cinnamon. A comforting dessert.',
    price: 20.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Puddings',
    rating: 4.5,
    features: ['Dried fruits', 'Nuts', 'Cinnamon', 'Comfort food'],
    variants: [
      { id: '9-traditional', name: 'Traditional', price: 20.99, stock: 10 },
      { id: '9-fruit', name: 'Extra Fruit', price: 21.99, stock: 8 },
      { id: '9-nutty', name: 'Nutty', price: 22.99, stock: 6 }
    ]
  },
  {
    id: '10',
    name: 'Rosca de Reyes',
    description: 'Festive sweet bread ring decorated with candied fruits. Traditionally enjoyed on Three Kings Day.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sweet Bread',
    rating: 4.8,
    features: ['Candied fruits', 'Festive ring', 'Three Kings Day', 'Serves 10-12'],
    variants: [
      { id: '10-small', name: 'Small (8 inches)', price: 29.99, stock: 10 },
      { id: '10-large', name: 'Large (12 inches)', price: 39.99, stock: 8 },
      { id: '10-mini', name: 'Mini Roscas (4 pack)', price: 24.99, stock: 12 }
    ]
  },
  {
    id: '11',
    name: 'Orejas',
    description: 'Crispy, buttery puff pastry cookies shaped like ears. Lightly sweet and perfect with coffee.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cookies',
    rating: 4.6,
    features: ['Puff pastry', 'Lightly sweet', 'Coffee pairing', 'Pack of 10'],
    variants: [
      { id: '11-plain', name: 'Plain (10 pack)', price: 15.99, stock: 20 },
      { id: '11-chocolate', name: 'Chocolate Dipped (10 pack)', price: 17.99, stock: 15 },
      { id: '11-mini', name: 'Mini Orejas (16 pack)', price: 18.99, stock: 10 }
    ]
  },
  {
    id: '12',
    name: 'Galletas de Nuez',
    description: 'Nut cookies with a crumbly texture and a hint of vanilla. A classic Mexican treat.',
    price: 13.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cookies',
    rating: 4.7,
    features: ['Nutty', 'Crumbly', 'Vanilla', 'Pack of 12'],
    variants: [
      { id: '12-plain', name: 'Plain (12 pack)', price: 13.99, stock: 18 },
      { id: '12-vanilla', name: 'Extra Vanilla (12 pack)', price: 14.99, stock: 15 },
      { id: '12-mixed', name: 'Mixed Nuts (12 pack)', price: 15.99, stock: 12 }
    ]
  },
  {
    id: '13',
    name: 'Pastel de Elote',
    description: 'Sweet corn cake with a moist texture and golden crust. A beloved Mexican dessert.',
    price: 17.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cakes',
    rating: 4.8,
    features: ['Sweet corn', 'Moist texture', 'Golden crust', 'Serves 8'],
    variants: [
      { id: '13-small', name: 'Small (6 inches)', price: 17.99, stock: 12 },
      { id: '13-medium', name: 'Medium (8 inches)', price: 24.99, stock: 10 },
      { id: '13-large', name: 'Large (10 inches)', price: 32.99, stock: 8 }
    ]
  },
  {
    id: '14',
    name: 'Cochinitos',
    description: 'Pig-shaped molasses cookies with a soft, cake-like texture. A nostalgic Mexican bakery favorite.',
    price: 14.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cookies',
    rating: 4.7,
    features: ['Molasses', 'Soft texture', 'Pig-shaped', 'Pack of 8'],
    variants: [
      { id: '14-plain', name: 'Plain (8 pack)', price: 14.99, stock: 16 },
      { id: '14-molasses', name: 'Extra Molasses (8 pack)', price: 15.99, stock: 12 },
      { id: '14-mini', name: 'Mini Cochinitos (12 pack)', price: 16.99, stock: 10 }
    ]
  },
  {
    id: '15',
    name: 'Cuernitos',
    description: 'Mexican croissants with a slightly sweet flavor and flaky layers. Perfect for breakfast.',
    price: 16.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sweet Bread',
    rating: 4.6,
    features: ['Flaky layers', 'Slightly sweet', 'Breakfast favorite', 'Pack of 6'],
    variants: [
      { id: '15-plain', name: 'Plain (6 pack)', price: 16.99, stock: 18 },
      { id: '15-chocolate', name: 'Chocolate Filled (6 pack)', price: 18.99, stock: 14 },
      { id: '15-mini', name: 'Mini Cuernitos (10 pack)', price: 19.99, stock: 10 }
    ]
  },
  {
    id: '16',
    name: 'Mantecadas',
    description: 'Mexican muffins with a rich, buttery flavor and golden top. A bakery staple.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Muffins',
    rating: 4.7,
    features: ['Buttery flavor', 'Golden top', 'Bakery staple', 'Pack of 6'],
    variants: [
      { id: '16-plain', name: 'Plain (6 pack)', price: 15.99, stock: 20 },
      { id: '16-chocolate', name: 'Chocolate Chip (6 pack)', price: 17.99, stock: 16 },
      { id: '16-mini', name: 'Mini Mantecadas (10 pack)', price: 18.99, stock: 12 }
    ]
  },
  {
    id: '17',
    name: 'Alegrías',
    description: 'Amaranth and honey bars with dried fruit and nuts. A healthy, traditional Mexican snack.',
    price: 13.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Snacks',
    rating: 4.5,
    features: ['Amaranth', 'Honey', 'Dried fruit', 'Healthy snack'],
    variants: [
      { id: '17-plain', name: 'Plain (6 pack)', price: 13.99, stock: 18 },
      { id: '17-fruit', name: 'Extra Fruit (6 pack)', price: 14.99, stock: 14 },
      { id: '17-nutty', name: 'Nutty (6 pack)', price: 15.99, stock: 10 }
    ]
  },
  {
    id: '18',
    name: 'Cemitas',
    description: 'Puebla-style sesame rolls, soft and fluffy, perfect for sandwiches or on their own.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bread',
    rating: 4.6,
    features: ['Sesame seeds', 'Soft texture', 'Puebla style', 'Pack of 6'],
    variants: [
      { id: '18-plain', name: 'Plain (6 pack)', price: 12.99, stock: 20 },
      { id: '18-sesame', name: 'Extra Sesame (6 pack)', price: 13.99, stock: 16 },
      { id: '18-mini', name: 'Mini Cemitas (10 pack)', price: 14.99, stock: 12 }
    ]
  },
  {
    id: '19',
    name: 'Molletes Dulces',
    description: 'Sweet bread rolls topped with butter and sugar, baked to golden perfection.',
    price: 13.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sweet Bread',
    rating: 4.5,
    features: ['Butter', 'Sugar topping', 'Golden perfection', 'Pack of 6'],
    variants: [
      { id: '19-plain', name: 'Plain (6 pack)', price: 13.99, stock: 18 },
      { id: '19-butter', name: 'Extra Butter (6 pack)', price: 14.99, stock: 14 },
      { id: '19-mini', name: 'Mini Molletes (10 pack)', price: 15.99, stock: 10 }
    ]
  },
  {
    id: '20',
    name: 'Tejas',
    description: 'Almond crisps with a delicate crunch and sweet flavor. A light, satisfying treat.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cookies',
    rating: 4.6,
    features: ['Almonds', 'Delicate crunch', 'Sweet flavor', 'Pack of 8'],
    variants: [
      { id: '20-plain', name: 'Plain (8 pack)', price: 12.99, stock: 16 },
      { id: '20-almond', name: 'Extra Almond (8 pack)', price: 13.99, stock: 12 },
      { id: '20-mini', name: 'Mini Tejas (12 pack)', price: 14.99, stock: 10 }
    ]
  }
];