import React from "react";
import LayoutStyles from "./styles/layout.module.css";
import Logo from "./images/Logo.png";
import Button from "./Button";

function Header() {
  return (
    <header className={LayoutStyles.header}>
      <div>
        {/* <img className={LayoutStyles.header_logo} src={Logo} alt="Logo"></img> */}
        <h2>Teamric</h2>
        <span className={LayoutStyles.header_logo_name}></span>
      </div>
      <div>
        <Button />
        <h3>Username</h3>
      </div>
    </header>
  );
}

export default Header;
