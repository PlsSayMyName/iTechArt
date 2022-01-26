import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "@/assets/images/logo.svg";
import "./footer.scss";

function Footer() {
  return (
    <footer>
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
        </nav>
        <div className="subscribe">
          <p>Follow us:</p>
          <div className="icon-box">
            <a target="_blank" className="icon insta" href="https://www.instagram.com/" rel="noreferrer">
              <FaInstagram />
            </a>
            <a target="_blank" className="icon twitter" href="https://twitter.com/" rel="noreferrer">
              <FaTwitter />
            </a>
            <a target="_blank" className="icon yt" href="https://www.youtube.com/" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
