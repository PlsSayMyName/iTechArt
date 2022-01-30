/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import "./Products.scss";

function Product() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const allProducts = json;
        // console.log(allSneakers);
        setProducts(allProducts);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-grid">
      <ProductItem results={products} />
    </div>
  );
}

export default Product;
