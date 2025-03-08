import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css'; 

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const product = products.find(p => p.id === parseInt(id));

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <div className="details-content">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Ingredients:</strong> {product.ingredients.join(', ')}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={() => navigate(-1)}>Back to Products</button>
      </div>
    </div>
  );
}

export default ProductDetails;