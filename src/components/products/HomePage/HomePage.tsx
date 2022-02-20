/* eslint-disable react/no-unstable-nested-components */
// import Category from "@/components/products/Category/Category";
// import SearchBar from "@/components/products/SearchBar/SearchBar";
import { FaArrowRight } from "react-icons/fa";
import Products from "../Products/Products";
import "./HomePage.scss";
// import { Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="wrapper">
          <div className="text-box">
            <h1 className="title">Clothing store</h1>
            <p className="subtitle">
              A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to
              exceptional quality.
            </p>
            <a href="/" className="go-shop">
              Shop now <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
      <Products />
    </main>
  );
}

export default HomePage;
