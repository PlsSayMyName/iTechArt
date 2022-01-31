/* eslint-disable react/no-array-index-key */
import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import debounce from "@/helpers/debounce";
import "./SearchBar.scss";

function SearchBar() {
  const [search, setSearch] = useState([]);
  // ! I dont know how to implement search& Arthur help me! :)
  const handleChange = (event: InputEvent) => {
    const { value } = event.target;
    // this api doesnt have a search function, but I wrote it like this
    fetch(`https://fakestoreapi.com/products?search=q${value}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // console.log(allSneakers);
        setSearch(json);
      });
  };
  const debouceSearch = useCallback(debounce(handleChange), []);
  return (
    <form name="search-form" method="post">
      <div className="input">
        <label className="search-bar" htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Type your request here..."
            // onChange={(event) => setValue(event.target.value)}
            onChange={debouceSearch}
          />
          <span>
            <FaSearch />
          </span>
        </label>
      </div>
      <div className="results">
        {search.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </form>
  );
}

export default SearchBar;
