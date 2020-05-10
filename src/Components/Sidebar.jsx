import React from "react";
import Search from "./Search";
import "./styles/Sidebar.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GradeIcon from "@material-ui/icons/Grade";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BlurOnIcon from "@material-ui/icons/BlurOn";

function Sidebar() {
  return (
    <div class="sidenav">
      <div class="logo">
        <h3>TeamRic</h3>
        <BlurOnIcon />
      </div>
      <a>
        <div class="button" href="#">
          <DashboardIcon />
          <div class="button-title">Dashboard</div>
        </div>
      </a>
      <a>
        <div class="button" href="#">
          <AddCircleOutlineIcon />
          <div class="button-title">AddDot</div>
        </div>
      </a>
      <a>
        <div class="button" href="#">
          <GradeIcon />
          <div class="button-title">Reviews</div>
        </div>
      </a>
      <a>
        <div class="button" href="#">
          <PeopleAltIcon />
          <div class="button-title">Employees</div>
        </div>
      </a>

      <Search />
    </div>
  );
}

export default Sidebar;
