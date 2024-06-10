
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsAPI from '../../api/products.json';
import './ProductDetails.css';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = ProductsAPI.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Ürün Bulunamadı!</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <p>Marka: {product.brand}</p>
      <p>Eski Fiyat: {product.oldPrice}</p>
      <p>Yeni Fiyat: {product.newPrice}</p>
      <p>Kategori: {product.category}</p>
      <button onClick={handleAddToCart}>Sepete Ekle</button>
    </div>
  );
}

export default ProductDetails;

