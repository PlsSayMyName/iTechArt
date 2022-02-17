/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Store.scss";

interface storeItem {
  title: string;
  image: string;
  price: number;
}

interface StoreArr {
  items: Array<any>;
  loading: boolean;
}

function StoreItem({ title, image, price }: storeItem) {
  return (
    <div className="item">
      <h2>
        <a href="/">{title}</a>
      </h2>
      <a className="img" href="/">
        <img src={image} alt={title} />
      </a>
      <p className="price">{price.toFixed(2)}$</p>
      <button className="add-cart" type="button">
        <FaShoppingCart />
        Add to cart
      </button>
    </div>
  );
}

function Store({ items, loading }: StoreArr) {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);
  return (
    <>
      <form name="search-form" method="post">
        <div className="input">
          <label className="search-bar" htmlFor="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Type your request here..."
              onChange={(event) => {
                const filter = items.filter((item) =>
                  item.title.toLowerCase().includes(event.target.value.toLowerCase())
                );
                setFilteredItems(filter);
              }}
            />
            <span>
              <FaSearch />
            </span>
          </label>
        </div>
      </form>
      {loading ? (
        <div className="loader" />
      ) : (
        <div className="products-grid">
          {filteredItems.map((item) => (
            <StoreItem {...item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Store;
