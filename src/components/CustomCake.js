import React, { useState } from 'react';
import './CustomCake.css'; 

function CustomCake() {
  const [base, setBase] = useState('chocolate');
  const [toppings, setToppings] = useState([]);
  const [message, setMessage] = useState('');

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  const handleToppingClick = (topping) => {
    setToppings([...toppings, topping]);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>Customize Your Cake</h1>
      <div>
        <h2>Choose Base</h2>
        <select value={base} onChange={handleBaseChange}>
          <option value="chocolate">Chocolate</option>
          <option value="vanilla">Vanilla</option>
          <option value="caramel">Caramel</option>
        </select>
      </div>
      <div>
        <h2>Add Toppings</h2>
        <button onClick={() => handleToppingClick('fruits')}>Fruits</button>
        <button onClick={() => handleToppingClick('chocolate')}>Chocolate</button>
        <button onClick={() => handleToppingClick('whipped cream')}>Whipped Cream</button>
      </div>
      <div>
        <h2>Write a Message</h2>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message"
        />
      </div>
      <div>
        <h2>Cake Preview</h2>
        <div className="cake-preview">
          <p>Base: {base}</p>
          <p>Toppings: {toppings.join(', ')}</p>
          <p>Message: {message}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomCake;