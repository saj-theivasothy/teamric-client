import React from "react";
import "./styles/nav.scss";

function Nav() {
  return (
    <ul className="PrimaryNav with-indicator">
      <li className="Nav-item is-active">
        <a href="#">Feedback</a>
      </li>
      <li className="Nav-item">
        <a href="#">profile</a>
      </li>
      <li className="Nav-item">
        <a href="#">Add Dot</a>
      </li>
    </ul>
  );
}

export default Nav;
