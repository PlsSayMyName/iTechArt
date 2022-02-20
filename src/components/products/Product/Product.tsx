/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./Product.scss";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setloading(false);
    };
    getProduct();
  }, []);

  function Loading() {
    return <div className="loader" />;
  }

  function ShowProduct() {
    return (
      <div className="product-inner">
        <div className="left">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="right">
          <div className="title-box">
            <h1>{product.title}</h1>
            <span>{product.category}</span>
          </div>
          <p className="description">{product.description}</p>
          <div className="rating">
            Rating {product.rating && product.rating.rate}
            <FaStar />
          </div>
          <p className="price">{product.price} $</p>
          <div className="btn-box">
            <button className="add-cart" type="button">
              Add to Cart
            </button>
            <Link className="go-cart" to="/cart">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <main>
      <section className="product">
        <div className="wrapper">{loading ? <Loading /> : <ShowProduct />}</div>
      </section>
    </main>
  );
}

export default Product;
