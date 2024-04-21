import React, { useEffect, useState } from "react";
import ProductItems from "../ProductItems";
import './index.css';

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return products ? (
    <ul className='products'>
      {products.map((x) => (
        <ProductItems product={x} />
      ))}
    </ul>
  ) : null;
};

export default ProductsComponent;