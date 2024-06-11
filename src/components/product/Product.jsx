import React, { useEffect, useState } from 'react';
import './Product.css';
import ProductsItems from './ProductsItem';
import ProductsAPI from '../../api/products.json';

function Product({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsAPI);
  }, []);

  return (
      <div className="products-content">
        {products && products.map((product, index) => (
          <ProductsItems key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
  );
}

export default Product;
