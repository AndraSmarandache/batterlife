import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const products = [
  {
    id: 1,
    name: 'Chocolate Cake',
    category: 'cakes',
    price: 25,
    image: '/images/chocolate-cake.jpg',
    description: 'A rich and decadent chocolate cake, perfect for any occasion.',
    ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Milk'],
    allergens: ['Gluten', 'Eggs', 'Milk'],
    rating: 4.5,
    reviews: [
      { id: 1, user: 'John Doe', comment: 'Amazing cake!', rating: 5 },
      { id: 2, user: 'Jane Smith', comment: 'Very tasty, but a bit too sweet.', rating: 4 },
    ],
  },
{
  id: 2,
  name: 'Strawberry Tart',
  category: 'pastries',
  price: 15,
  image: '/images/strawberry-tart.jpg',
  description: 'A fresh and fruity strawberry tart with a buttery crust.',
  ingredients: ['Strawberries', 'Cream', 'Pastry', 'Sugar', 'Butter'],
  allergens: ['Gluten', 'Dairy'],
  rating: 4.2,
  reviews: [
    { id: 1, user: 'Alice Johnson', comment: 'Delicious and refreshing!', rating: 5 },
    { id: 2, user: 'Bob Brown', comment: 'The crust could be crispier.', rating: 3 },
  ],
},
{
  id: 3,
  name: 'Vanilla Cupcake',
  category: 'cakes',
  price: 5,
  image: '/images/vanilla-cupcake.jpg',
  description: 'A classic vanilla cupcake with creamy frosting.',
  ingredients: ['Vanilla', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Milk'],
  allergens: ['Gluten', 'Eggs', 'Milk'],
  rating: 4.7,
  reviews: [
    { id: 1, user: 'Emily Davis', comment: 'Perfectly sweet and fluffy!', rating: 5 },
    { id: 2, user: 'Michael Wilson', comment: 'The frosting was a bit too sweet.', rating: 4 },
  ],
},
{
  id: 4,
  name: 'Almond Cookies',
  category: 'cookies',
  price: 10,
  image: '/images/almond-cookies.jpg',
  description: 'Crunchy almond cookies with a hint of vanilla.',
  ingredients: ['Almonds', 'Flour', 'Sugar', 'Butter', 'Vanilla'],
  allergens: ['Gluten', 'Nuts'],
  rating: 4.0,
  reviews: [
    { id: 1, user: 'Sarah Lee', comment: 'Loved the almond flavor!', rating: 4 },
    { id: 2, user: 'David Clark', comment: 'A bit too dry for my taste.', rating: 3 },
  ],
},
{
  id: 5,
  name: 'Cheesecake',
  category: 'cakes',
  price: 20,
  image: '/images/cheesecake.jpg',
  description: 'Creamy cheesecake with a biscuit base and berry topping.',
  ingredients: ['Cream Cheese', 'Biscuits', 'Sugar', 'Berries', 'Butter'],
  allergens: ['Gluten', 'Dairy'],
  rating: 4.8,
  reviews: [
    { id: 1, user: 'Laura Green', comment: 'The best cheesecake I’ve ever had!', rating: 5 },
    { id: 2, user: 'James White', comment: 'A bit too rich, but still delicious.', rating: 4 },
  ],
},
{
  id: 6,
  name: 'Macarons',
  category: 'pastries',
  price: 12,
  image: '/images/macarons.jpg',
  description: 'Colorful and delicate French macarons with various flavors.',
  ingredients: ['Almond Flour', 'Sugar', 'Egg Whites', 'Food Coloring'],
  allergens: ['Nuts', 'Eggs'],
  rating: 4.6,
  reviews: [
    { id: 1, user: 'Olivia Harris', comment: 'So pretty and tasty!', rating: 5 },
    { id: 2, user: 'Daniel Martin', comment: 'A bit too sweet for me.', rating: 3 },
  ],
},
{
  id: 7,
  name: 'Brownies',
  category: 'cookies',
  price: 8,
  image: '/images/brownies.jpg',
  description: 'Fudgy and chocolatey brownies with a rich flavor.',
  ingredients: ['Chocolate', 'Butter', 'Sugar', 'Flour', 'Eggs'],
  allergens: ['Gluten', 'Eggs'],
  rating: 4.3,
  reviews: [
    { id: 1, user: 'Sophia Martinez', comment: 'Perfectly fudgy and delicious!', rating: 5 },
    { id: 2, user: 'William Anderson', comment: 'Could be more chocolatey.', rating: 4 },
  ],
},
{
  id: 8,
  name: 'Tiramisu',
  category: 'desserts',
  price: 18,
  image: '/images/tiramisu.jpg',
  description: 'Classic Italian tiramisu with coffee and mascarpone.',
  ingredients: ['Mascarpone', 'Coffee', 'Ladyfingers', 'Cocoa', 'Sugar'],
  allergens: ['Gluten', 'Dairy'],
  rating: 4.9,
  reviews: [
    { id: 1, user: 'Emma Taylor', comment: 'Absolutely divine!', rating: 5 },
    { id: 2, user: 'Noah Thomas', comment: 'A bit too strong on the coffee flavor.', rating: 4 },
  ],
  }
];

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(productId));
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  return (
    <div className="product-details-page fade-in">
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Products
      </button>

      <div className="product-details-content">
        <img src={product.image} alt={product.name} className="product-details-image" />

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price"><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Ingredients:</strong> {product.ingredients.join(', ')}</p>
          <p><strong>Allergens:</strong> {product.allergens.join(', ')}</p>

          <div className="quantity-container">
            <label>Quantity</label>
            <div className="quantity-selector">
              <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>-</button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="add-to-cart-button"
            onMouseEnter={(e) => e.target.classList.add('hover')}
            onMouseLeave={(e) => e.target.classList.remove('hover')}
          >
            Add to Cart
          </button>

          <div className="section">
            <h3>Rating</h3>
            <div className="rating">
              <span>{product.rating}</span>
              <div className="stars">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
            </div>
            <button
              className="see-reviews-button"
              onClick={() => setShowReviews(!showReviews)}
            >
              {showReviews ? 'Hide Reviews' : 'See Reviews'}
            </button>
            {showReviews && (
              <div className="reviews">
                {product.reviews.map((review) => (
                  <div key={review.id} className="review">
                    <strong>{review.user}</strong>
                    <div className="stars">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;