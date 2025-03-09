import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/js/Home';
import About from './components/js/About';
import Products from './components/js/Products'; 
import CustomCake from './components/js/CustomCake';
import Contact from './components/js/Contact';
import Cart from './components/js/Cart';
import ProductDetails from './components/js/ProductDetails';
import Header from './components/js/Header';
import Footer from './components/js/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} /> 
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/custom-cake" element={<CustomCake />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;