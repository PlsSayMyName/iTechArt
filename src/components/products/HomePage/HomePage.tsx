import { useEffect, useState } from "react";
import axios from "axios";
import Category from "@/components/products/Category/Category";
// import SearchBar from "@/components/products/SearchBar/SearchBar";
import Adidas from "@/assets/images/category-adidas.png";
import Nike from "@/assets/images/category-nike.png";
import Puma from "@/assets/images/category-puma.png";
import "./HomePage.scss";
import Store from "../Product/Store";

function HomePage() {
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setLoading(false);
      setStoreItem(data);
    });
  }, []);

  return (
    <main>
      <section className="hero">
        <h1 className="title">Clothes and etc. shop</h1>
        <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi qui ullam voluptatem.</p>
      </section>
      <section className="category wrapper">
        <div className="category-grid">
          <Category name="Adidas" link="/category/adidas" img={Adidas} />
          <Category name="Nike" link="/category/Nike" img={Nike} />
          <Category name="Puma" link="/category/Puma" img={Puma} />
        </div>
      </section>
      <section className="products wrapper">
        <h2 className="title">All products</h2>
        <Store items={storeItem} loading={loading} />
      </section>
    </main>
  );
}

export default HomePage;
