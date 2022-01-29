import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <form name="search-form" method="post">
      <div className="input">
        <label className="search-bar" htmlFor="search">
          <input type="text" name="search" id="search" placeholder="Type your request here..." />
          <span>
            <FaSearch />
          </span>
        </label>
      </div>
    </form>
  );
}

export default SearchBar;
