import React, { useState } from 'react';
import { FaSort } from 'react-icons/fa';
import './Products.css';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('name-asc');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'cookies', name: 'Cookies' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const products = [
    { id: 1, name: 'Chocolate Cake', category: 'cakes', price: 25, image: '/images/chocolate-cake.jpg', ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs'] },
    { id: 2, name: 'Strawberry Tart', category: 'pastries', price: 15, image: '/images/strawberry-tart.jpg', ingredients: ['Strawberries', 'Cream', 'Pastry'] },
    { id: 3, name: 'Vanilla Cupcake', category: 'cakes', price: 5, image: '/images/vanilla-cupcake.jpg', ingredients: ['Vanilla', 'Flour', 'Sugar', 'Eggs'] },
    { id: 4, name: 'Almond Cookies', category: 'cookies', price: 10, image: '/images/almond-cookies.jpg', ingredients: ['Almonds', 'Flour', 'Sugar', 'Butter'] },
    { id: 5, name: 'Cheesecake', category: 'cakes', price: 20, image: '/images/cheesecake.jpg', ingredients: ['Cream Cheese', 'Biscuits', 'Sugar', 'Berries'] },
    { id: 6, name: 'Macarons', category: 'pastries', price: 12, image: '/images/macarons.jpg', ingredients: ['Almond Flour', 'Sugar', 'Egg Whites', 'Food Coloring'] },
    { id: 7, name: 'Brownies', category: 'cookies', price: 8, image: '/images/brownies.jpg', ingredients: ['Chocolate', 'Butter', 'Sugar', 'Flour'] },
    { id: 8, name: 'Tiramisu', category: 'desserts', price: 18, image: '/images/tiramisu.jpg', ingredients: ['Mascarpone', 'Coffee', 'Ladyfingers', 'Cocoa'] },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="filters-container">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={selectedCategory === category.id ? 'active' : ''}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="sort-filters">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <div className="sort-icon" onClick={() => setIsSortOpen(!isSortOpen)}>
            <FaSort />
          </div>
          {isSortOpen && (
            <div className="sort-dropdown-mobile">
              <button onClick={() => { setSortBy('name-asc'); setIsSortOpen(false); }}>Name: A-Z</button>
              <button onClick={() => { setSortBy('name-desc'); setIsSortOpen(false); }}>Name: Z-A</button>
              <button onClick={() => { setSortBy('price-asc'); setIsSortOpen(false); }}>Price: Low to High</button>
              <button onClick={() => { setSortBy('price-desc'); setIsSortOpen(false); }}>Price: High to Low</button>
            </div>
          )}
        </div>
      </div>

      <div className="product-list">
        {sortedProducts.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                  Add to Cart
                </button>
              </div>
            </div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-details">
          <div className="details-content">
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p><strong>Price:</strong> ${selectedProduct.price}</p>
            <p><strong>Ingredients:</strong> {selectedProduct.ingredients.join(', ')}</p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;