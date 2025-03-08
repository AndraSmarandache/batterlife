import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isImageOpen, setIsImageOpen] = useState(false); 

  const products = [
    {
      id: 1,
      name: 'Almond Cookies',
      category: 'cookies',
      price: 10,
      image: '/images/almond-cookies.jpg',
      description: 'Delicious almond cookies made with premium almonds and a hint of vanilla.',
      ingredients: ['Almonds', 'Flour', 'Sugar', 'Butter', 'Vanilla Extract'],
      allergens: ['Contains nuts', 'Contains gluten'],
    },
    {
      id: 2,
      name: 'Chocolate Cake',
      category: 'cakes',
      price: 25,
      image: '/images/chocolate-cake.jpg',
      description: 'Rich and moist chocolate cake with a hidden layer of fresh strawberries.',
      ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Strawberries'],
      allergens: ['Contains gluten', 'Contains eggs'],
    },
    {
      id: 3,
      name: 'Strawberry Tart',
      category: 'pastries',
      price: 15,
      image: '/images/strawberry-tart.jpg',
      description: 'A delightful strawberry tart with fresh strawberries and cream.',
      ingredients: ['Strawberries', 'Cream', 'Pastry', 'Sugar'],
      allergens: ['Contains gluten', 'Contains dairy'],
    },
    {
      id: 4,
      name: 'Cheesecake',
      category: 'cakes',
      price: 20,
      image: '/images/cheesecake.jpg',
      description: 'Creamy cheesecake with a biscuit base and a topping of fresh berries.',
      ingredients: ['Cream Cheese', 'Biscuits', 'Sugar', 'Berries'],
      allergens: ['Contains gluten', 'Contains dairy'],
    },
  ];

  const product = products.find(p => p.id === parseInt(id));

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  const handleImageClick = () => {
    setIsImageOpen(true); 
  };

  const handleCloseImage = () => {
    setIsImageOpen(false); 
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details-page">
      <div className="breadcrumb">
        <span onClick={() => navigate('/')}>Home</span> / <span onClick={() => navigate('/')}>Shop</span> / <span>{product.name}</span>
      </div>

      <div className="product-details-container">
        <div className="product-image" onClick={handleImageClick}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>

          <div className="ingredients">
            <h3>Ingredients</h3>
            <p>{product.ingredients.join(', ')}</p>
          </div>

          <div className="allergens">
            <h3>Allergens</h3>
            <ul>
              {product.allergens.map((allergen, index) => (
                <li key={index}>{allergen}</li>
              ))}
            </ul>
          </div>

          <div className="options">
            <div className="option">
              <label>Number of People</label>
              <select>
                <option>-- Select --</option>
                <option>1-5</option>
                <option>6-10</option>
                <option>11-15</option>
              </select>
            </div>

            <div className="option">
              <label>Quantity</label>
              <div className="quantity-selector">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {isImageOpen && (
        <div className="image-overlay" onClick={handleCloseImage}>
          <div className="image-modal">
            <button className="close-button" onClick={handleCloseImage}>
              &times;
            </button>
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      )}

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-list">
          {products
            .filter(p => p.id !== product.id && p.category === product.category)
            .map(p => (
              <div key={p.id} className="related-product">
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>${p.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;