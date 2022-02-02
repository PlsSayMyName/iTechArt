/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "@/components/products/About/About";
import Collections from "@/components/products/Collections/Collections";
import Contact from "@/components/products/Contact/Contact";
import HomePage from "@/components/products/HomePage/HomePage";
import Men from "@/components/products/Men/Men";
import Women from "@/components/products/Women/Women";
import Logo from "@/assets/images/logo.svg";
import "./Header.scss";
import DropdownMenu from "@/elements/DropdownMenu/DropdownMenu";
import ModalManager from "@/elements/Modal/ModalManager";

function MyHeader() {
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
    <>
      <header>
        <div className="wrapper">
          <nav className="navigation">
            <Link className="logo" to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <DropdownMenu />
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <div className="button-box" onClick={openModal}>
              <button type="button" data-modal="modal-sign" className="open-modal">
                Sign In
              </button>
              <button type="button" data-modal="modal-reg" className="open-modal">
                Registration
              </button>
              <ModalManager closeFn={closeModal} modal={modalOpen} />
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/collections" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default MyHeader;
