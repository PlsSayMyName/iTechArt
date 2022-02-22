/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";

// interface storeItem {
//   title: string;
//   image: string;
//   price: number;
// }

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  function Loading() {
    return <div className="loader" />;
  }

  const filterProduct = (cat: any) => {
    const updatedList = data.filter((el) => el.category === cat);
    setFilter(updatedList);
  };

  function ShowProducts() {
    return (
      <>
        <div className="btn-box">
          <button type="button" onClick={() => setFilter(data)}>
            All
          </button>
          <button type="button" onClick={() => filterProduct("men's clothing")}>
            Men's clothing
          </button>
          <button type="button" onClick={() => filterProduct("women's clothing")}>
            Women's clothing
          </button>
          <button type="button" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </button>
          <button type="button" onClick={() => filterProduct("electronics")}>
            Electronic
          </button>
        </div>
        <div className="products-grid">
          {filter.map((product: any) => (
            <div className="item" key={product.id}>
              <h2>{product.title}</h2>
              <img className="img" src={product.image} alt={product.title} />
              <p className="price">{product.price.toFixed(2)}$</p>
              <Link to={`/products/${product.id}`} className="view-details">
                View item
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <main>
      <section className="latest wrapper">
        <h2 className="title">Latest products</h2>
        {loading ? <Loading /> : <ShowProducts />}
      </section>
    </main>
  );
}

// function Store() {
//   const [storeItem, setStoreItem] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then(({ data }) => {
//       setLoading(false);
//       setStoreItem(data);
//       setFilteredItems(data);
//     });
//   }, []);
//   return (
//     <>
//       <form name="search-form" method="post">
//         <div className="input">
//           <label className="search-bar" htmlFor="search">
//             <input
//               type="text"
//               name="search"
//               id="search"
//               placeholder="Type your request here..."
//               onChange={(event) => {
//                 const filter = storeItem.filter((item) =>
//                   item.title.toLowerCase().includes(event.target.value.toLowerCase())
//                 );
//                 setFilteredItems(filter);
//               }}
//             />
//             <span>
//               <FaSearch />
//             </span>
//           </label>
//         </div>
//       </form>
//       {loading ? (
//         <div className="loader" />
//       ) : (
//         <div className="products-grid">
//           {filteredItems.map((item) => (
//             <Link key={item.id} to={`/product/${item.id}`} state={item}>
//               <StoreItem {...item} />
//             </Link>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

export default Products;
