import React from "react";
import Search from "./Search";

function Sidebar(props) {
  return (
    <div class="sidenav">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
      <a href="#add_dot" onClick={() => props.onNavClick("add dot")}>
        Add Dot
      </a>
      <Search onClick={props.onClick} />
    </div>
  );
}

export default Sidebar;
