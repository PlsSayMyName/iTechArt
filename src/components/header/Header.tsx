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
import DropdownMenu from "@/elements/DropdownMenu";
import Modal from "@/elements/Modal/Modal";
import ModalLogin from "@/elements/Modal/ModalLogin";

function MyHeader() {
  const [modalActive, setModalActive] = useState(true);
  const [modalLoginActive, setLoginModalActive] = useState(true);
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
            <div className="button-box">
              <button onClick={() => setModalActive(true)} className="open-modal">
                Sign In
              </button>
              <button onClick={() => setLoginModalActive(true)} className="open-modal">
                Registration
              </button>
            </div>
          </nav>
        </div>
      </header>
      <ModalLogin active={modalLoginActive} setActive={setLoginModalActive}>
        <div className="div">
          <p>123</p>
        </div>
      </ModalLogin>
      <Modal active={modalActive} setActive={setModalActive}>
        <form name="login-form" method="POST">
          <input type="text" name="text" id="text" />
        </form>
      </Modal>
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
