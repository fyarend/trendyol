
import React, { useEffect, useState } from 'react';
import './Product.css';
import ProductsItems from './ProductsItem';
import ProductsAPI from '../../api/products.json';
import { Link } from 'react-router-dom';

function Product({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsAPI);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Ürünler</h1>
        <Link to="/cart">Sepet</Link> 
      </div>
      <div className="products-content">
        {products && products.map((product, index) => (
          <ProductsItems key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Product;
