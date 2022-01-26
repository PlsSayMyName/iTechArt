import { Routes, Route, Link } from "react-router-dom";
import HeaderButton from "@/elements/HeaderButton";
import About from "@/components/products/About/About";
import Collections from "@/components/products/Collections/Collections";
import Contact from "@/components/products/Contact/Contact";
import HomePage from "@/components/products/HomePage/HomePage";
import Men from "@/components/products/Men/Men";
import Women from "@/components/products/Women/Women";
import Logo from "@/assets/images/logo.svg";
import "./header.scss";
// ! Continue with React Hooks + next trello challenge
function MyHeader() {
  return (
    <>
      <header>
        <div className="wrapper">
          <nav className="navigation">
            <Link className="logo" to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <Link to="/collections">Collections</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <div className="button-box">
              <HeaderButton name="Sign In" />
              <HeaderButton name="Registration" />
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
