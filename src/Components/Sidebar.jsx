import React from "react";
import "./styles/sidebar.scss";
import LayoutStyles from "./styles/layout.module.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GradeIcon from "@material-ui/icons/Grade";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BlurOnIcon from "@material-ui/icons/BlurOn";

function Sidebar(props) {
  return (
    <aside className={LayoutStyles.sidenav}>
      <ul className={LayoutStyles.sidenav__list}>
        <li className={LayoutStyles.sidenav__list_item}>
          <a href="#">
            <div className="button">
              <DashboardIcon fontSize="large" />
              <div className="button-title">Dashboard</div>
            </div>
          </a>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <a href="#add_dot" onClick={() => props.onNavClick("add dot")}>
            <div className="button">
              <AddCircleOutlineIcon fontSize="large" />
              <div className="button-title">AddDot</div>
            </div>
          </a>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <a href="#">
            <div className="button">
              <GradeIcon fontSize="large" />
              <div className="button-title">Reviews</div>
            </div>
          </a>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <a href="#">
            <div className="button">
              <PeopleAltIcon fontSize="large" />
              <div className="button-title">Employees</div>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
