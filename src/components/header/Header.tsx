/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Logo from "@/assets/images/logo.svg";
import "./Header.scss";
import DropdownMenu from "@/elements/DropdownMenu/DropdownMenu";
import ModalManager from "@/elements/Modal/ModalManager";

function Header() {
  const state = useSelector((state) => state.handleCart);
  const [modalOpen, setModal] = useState(false);
  const openModal = (event: MouseEvent) => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModal(modal);
  };
  const closeModal = () => {
    setModal("");
  };
  return (
    <header>
      <div className="wrapper">
        <nav className="navigation">
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <DropdownMenu />
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className="button-box" onClick={openModal}>
            <button type="button" data-modal="modal-sign" className="open-modal">
              Sign In
            </button>
            <button type="button" data-modal="modal-reg" className="open-modal">
              Registration
            </button>
            <Link to="/cart" className="cart">
              <span>{state.length}</span>
              <FaShoppingCart />
            </Link>
            <ModalManager closeFn={closeModal} modal={modalOpen} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
