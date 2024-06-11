
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

function Cart({ cart, addToCart, removeFromCart }) {
  
  const getTotal = () => {
    return cart.reduce((total, product) =>
      total + parseFloat(product.newPrice.replace('₺', '').replace('.', '').replace(',', '.')) * product.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Sepetiniz</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p className="price">Fiyat: {product.newPrice}</p>
                <div className="button-group">
                  <button className="buttonaddbutton" onClick={() => addToCart(product)}>+</button>
                  <p className="quantity">Miktar: {product.quantity}</p>
                  <button className="buttonremovebutton" onClick={() => removeFromCart(product.id)}>-</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Toplam: ₺{getTotal().toFixed(2)}</h3>
          </div>
        </div>
      )}
      <Link to="/">Alışverişe Devam Et</Link>
    </div>
  );
}

export default Cart;

