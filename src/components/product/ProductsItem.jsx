
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

function ProductsItems({ product, addToCart }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-item">
      <button onClick={handleDetailsClick} >
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="brand">Marka: {product.brand}</p>
        <p className="old-price">{product.oldPrice}</p>
        <p className="new-price">{product.newPrice}</p>
      </button>
      <button onClick={handleAddToCart} className='btncart'>Sepete Ekle</button>
    </div>
  );
}

export default ProductsItems;

