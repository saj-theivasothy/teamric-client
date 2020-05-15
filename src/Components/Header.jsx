import React from "react";
import LayoutStyles from "./styles/layout.module.css";
import Logo from "./images/Logo.png";

function Header() {
  return (
    <header className={LayoutStyles.header}>
      <div>
        <img className={LayoutStyles.header_logo} src={Logo} alt="Logo"></img>
        <span className={LayoutStyles.header_logo_name}></span>
      </div>
    </header>
  );
}

export default Header;
