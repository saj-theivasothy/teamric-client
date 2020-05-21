import React from "react";
import LayoutStyles from "./styles/layout.module.css";

function Header() {
  return (
    <header className={LayoutStyles.header}>
      <div>
        {/* <img className={LayoutStyles.header_logo} src={Logo} alt="Logo"></img> */}
        <h2>Teamric</h2>
        <span className={LayoutStyles.header_logo_name}></span>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
