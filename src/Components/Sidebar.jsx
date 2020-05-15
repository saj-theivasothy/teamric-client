import React from "react";
import "./styles/sidebar.scss";
import LayoutStyles from "./styles/layout.module.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GradeIcon from "@material-ui/icons/Grade";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <aside className={LayoutStyles.sidenav}>
      <ul className={LayoutStyles.sidenav__list}>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <div className="button">
              <DashboardIcon fontSize="large" />
              <div className="button-title">Dashboard</div>
            </div>
          </Link>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/add-dot" style={{ textDecoration: "none" }}>
            <div className="button">
              <AddCircleOutlineIcon fontSize="large" />
              <div className="button-title">AddDot</div>
            </div>
          </Link>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <div className="button">
              <GradeIcon fontSize="large" />
              <div className="button-title">Reviews</div>
            </div>
          </Link>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <div className="button">
              <PeopleAltIcon fontSize="large" />
              <div className="button-title">Employees</div>
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
