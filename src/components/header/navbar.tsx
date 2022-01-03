import React from "react";
import { Link } from "react-router-dom";
import HeaderButton from "@/elements/HeaderButton";

function MyNavbar() {
  return (
    <nav className="navigation">
      <Link className="logo" to="/">
        Main
      </Link>
      <HeaderButton />
    </nav>
  );
}

export default MyNavbar;
