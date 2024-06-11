
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/product/Product';
import ProductDetails from './components/productDetail/ProductDetails';
import Cart from './components/cart/Cart';
import Header from './components/header/header';

function App() {
  const [cart, setCart] = useState([]);

  
function addToCart(product) {
  const productExists = cart.find(item => item.id === product.id);
  if (productExists) {
    setCart(cart.map(item => 
      item.id === product.id 
        ? { ...productExists, quantity: productExists.quantity + 1 } 
        : item
    ));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
}


function removeFromCart(id) {
  const product = cart.find(item => item.id === id);
  if (product.quantity === 1) {
    setCart(cart.filter(item => item.id !== id));
  } else {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...product, quantity: product.quantity - 1 } 
        : item
    ));
  }
}
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Product addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart}  />} />
      </Routes>
    </Router>
  );
}

export default App;
