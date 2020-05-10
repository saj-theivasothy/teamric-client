import React from "react";
import Search from "./Search";

const Sidebar = (props) => {
  return (
    <div className="sidenav">
      <a href="#profile">Profile</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
      <Search />
    </div>
  );
};

export default Sidebar;
