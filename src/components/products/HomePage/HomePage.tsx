import Category from "@/components/products/Category/Category";
import SearchBar from "@/components/products/SearchBar/SearchBar";
import Adidas from "@/assets/images/category-adidas.png";
import Nike from "@/assets/images/category-nike.png";
import Puma from "@/assets/images/category-puma.png";
import "./HomePage.scss";
import Product from "@/components/products/Product/Product";

function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1 className="title">Sneakers shop</h1>
        <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi qui ullam voluptatem.</p>
        <SearchBar />
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
        <Product />
      </section>
    </main>
  );
}

export default HomePage;
