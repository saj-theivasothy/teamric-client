import React from "react";
import Search from "./Search";
import "./styles/sidebar.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GradeIcon from "@material-ui/icons/Grade";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BlurOnIcon from "@material-ui/icons/BlurOn";

function Sidebar() {
  return (
    <div className="sidenav">
      <div className="logo">
        <h3>TeamRic</h3>
        <BlurOnIcon />
      </div>
      <a href="#">
        <div className="button">
          <DashboardIcon />
          <div className="button-title">Dashboard</div>
        </div>
      </a>
      <a href="#">
        <div className="button">
          <AddCircleOutlineIcon />
          <div className="button-title">AddDot</div>
        </div>
      </a>
      <a href="#">
        <div className="button">
          <GradeIcon />
          <div className="button-title">Reviews</div>
        </div>
      </a>
      <a href="#">
        <div className="button">
          <PeopleAltIcon />
          <div className="button-title">Employees</div>
        </div>
      </a>
      <a href="#add_dot" onClick={() => props.onNavClick("add dot")}>
        Add Dot
      </a>
      <Search onClick={props.onClick} />

    </div>
  );
}

export default Sidebar;
