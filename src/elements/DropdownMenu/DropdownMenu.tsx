import { useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDetectOutsideClick from "./useDetectOutsideClick";
import "./DropdownMenu.scss";

function DropdownMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="dropdown">
      <button type="button" onClick={onClick}>
        Collections <FaCaretDown />
      </button>
      <div ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
        <Link to="/collection/basketball">Basketball</Link>
        <Link to="/collection/casual">Casual</Link>
        <Link to="/collection/on-order">On order</Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
