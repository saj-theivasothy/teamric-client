import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import LayoutStyles from "./Components/styles/layout.module.css";
import Dashboard from "./Components/FeedbackContent";
import Survey from "./Components/survey/Survey";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Employees from "./Components/Employees";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RadarChart from "./Components/Profile/Charts/RadarChart";

import { getRadarData } from "./Components/Profile/utils/generateData";

function App() {
  return (
    <Router>
      <div className={LayoutStyles.grid_container}>
        <RadarChart data={getRadarData()} />
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add-dot" component={Survey} />
          <Route path="/profile" component={Profile} />
          <Route path="/employees" component={Employees} />
          <Route path="/" exact component={Home} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
