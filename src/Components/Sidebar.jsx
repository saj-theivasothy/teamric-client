import React from "react";
import "./styles/sidebar.scss";
import LayoutStyles from "./styles/layout.module.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GradeIcon from "@material-ui/icons/Grade";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Logo from "./images/logo_teamric.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Sidebar(props) {
  return (
    <aside className={LayoutStyles.sidenav}>
      {/* <img className={LayoutStyles.logo} src={Logo} alt="Teamric Logo" /> */}
      <ul className={LayoutStyles.sidenav__list}>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <div className="button">
              <DashboardIcon />
              <div className="button-title" style={{ fontSize: "0.6em" }}>
                DASHBOARD
              </div>
            </div>
          </Link>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <div className="button">
              <PersonIcon />
              <div className="button-title">PROFILE</div>
            </div>
          </Link>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/add-dot" style={{ textDecoration: "none" }}>
            <div className="button">
              <AddCircleOutlineIcon />
              <div className="button-title">ADD DOT</div>
            </div>
          </Link>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
            <div className="button">
              <NotificationsActiveIcon />
              <div className="button-title">NOTIFICATION</div>
            </div>
          </Link>
        </li>
        <li className={LayoutStyles.sidenav__list_item}>
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <div className="button">
              <PeopleAltIcon />
              <div className="button-title">TEAM</div>
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
