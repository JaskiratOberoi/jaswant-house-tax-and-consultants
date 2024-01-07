import React from "react";
import Navbar from "./Navbar/Navbar";

import logo from "../../assets/logo-full-white.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo-full-white" />
      <Navbar />
    </div>
  );
}

export default Header;
