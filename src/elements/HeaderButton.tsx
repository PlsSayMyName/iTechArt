import React from "react";
import "./HeaderButton.scss";

function HeaderButton() {
  return (
    <div className="button-box">
      <button type="button">Sign In</button>
      <button type="button">Registration</button>
    </div>
  );
}

export default HeaderButton;
