import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import debounce from "@/helpers/debounce";
import "./SearchBar.scss";

function SearchBar() {
  const [search, setSearch] = useState([]);
  // const getItems = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setResults(json);
  //     });
  // };
  // useEffect(() => {
  //   getItems();
  // }, []);

  // const [value, setValue] = useState("");

  // const filteredItems = results.filter((result) => result.title.toLowerCase().includes(value.toLowerCase()));
  const handleChange = (event: InputEvent) => {
    const { value } = event.target;
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // console.log(allSneakers);
        setSearch(json.title);
      });
  };
  const optVersion = useCallback(debounce(handleChange), []);
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
            onChange={optVersion}
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
